const fs = require('fs');
const zlib = require('zlib');

const buf = fs.readFileSync('public/images/btn_hablar_con_el_equipo.PNG');
let idat = [];
let pos = 8;
while (pos < buf.length) {
  const len = buf.readUInt32BE(pos);
  const type = buf.toString('ascii', pos + 4, pos + 8);
  if (type === 'IDAT') idat.push(buf.subarray(pos + 8, pos + 8 + len));
  pos += 12 + len;
}

const raw = zlib.inflateSync(Buffer.concat(idat));
const w = 1306, h = 313, bpp = 4, stride = w * bpp;
const out = Buffer.alloc(w * h * bpp);

for (let y = 0; y < h; y++) {
  const filter = raw[y * (stride + 1)];
  const src = y * (stride + 1) + 1;
  const dst = y * stride;
  for (let x = 0; x < stride; x++) {
    const a = x >= bpp ? out[dst + x - bpp] : 0;
    const b = y > 0 ? out[dst - stride + x] : 0;
    const c = y > 0 && x >= bpp ? out[dst - stride + x - bpp] : 0;
    const val = raw[src + x];
    if (filter === 0) out[dst + x] = val;
    else if (filter === 1) out[dst + x] = (val + a) & 0xff;
    else if (filter === 2) out[dst + x] = (val + b) & 0xff;
    else if (filter === 3) out[dst + x] = (val + Math.floor((a + b) / 2)) & 0xff;
    else if (filter === 4) {
      const p = a + b - c;
      const pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
      const pr = (pa <= pb && pa <= pc) ? a : (pb <= pc ? b : c);
      out[dst + x] = (val + pr) & 0xff;
    }
  }
}

// Background color is [ 226, 238, 247 ] (E2EEF7)
// Let's make all pixels matching this background (within tolerance) transparent!
let madeTransparent = 0;
for (let i = 0; i < w * h; i++) {
  const r = out[i * 4];
  const g = out[i * 4 + 1];
  const b = out[i * 4 + 2];
  // distance from [226, 238, 247]
  const dist = Math.abs(r - 226) + Math.abs(g - 238) + Math.abs(b - 247);
  if (dist < 15) {
    out[i * 4 + 3] = 0; // Transparent!
    madeTransparent++;
  }
}

console.log(`Made ${madeTransparent} background pixels transparent out of ${w * h}`);

// Re-encode PNG
function makePng(buffer, width, height) {
  const rowSize = 1 + width * 4;
  const uncompressed = Buffer.alloc(height * rowSize);
  for (let y = 0; y < height; y++) {
    uncompressed[y * rowSize] = 0; // Filter None
    buffer.copy(uncompressed, y * rowSize + 1, y * width * 4, (y + 1) * width * 4);
  }
  const compressed = zlib.deflateSync(uncompressed);

  function makeChunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length);
    const typeBuf = Buffer.from(type);
    const body = Buffer.concat([typeBuf, data]);
    const crc = Buffer.alloc(4);
    crc.writeUInt32BE(require('zlib').crc32(body) >>> 0);
    return Buffer.concat([len, body, crc]);
  }

  const header = Buffer.from('89504e470d0a1a0a', 'hex');
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // Bit depth
  ihdr[9] = 6; // RGBA
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  return Buffer.concat([
    header,
    makeChunk('IHDR', ihdr),
    makeChunk('IDAT', compressed),
    makeChunk('IEND', Buffer.alloc(0))
  ]);
}

const transparentPng = makePng(out, w, h);
fs.writeFileSync('public/images/btn_hablar_con_el_equipo_transparent.png', transparentPng);

const base64 = transparentPng.toString('base64');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <image href="data:image/png;base64,${base64}" width="${w}" height="${h}" />
</svg>`;
fs.writeFileSync('public/images/btn_hablar_con_el_equipo.svg', svg);
console.log('Successfully updated transparent SVG button, size:', svg.length);
