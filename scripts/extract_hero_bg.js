const fs = require('fs');
const zlib = require('zlib');

const buf = fs.readFileSync('C:/Users/Alumno/.gemini/antigravity-ide/brain/15730df0-d3ad-4ca8-98ec-2aba6dd70370/.user_uploaded/media_1792175196689.png');

let idat = [];
let pos = 8;
while (pos < buf.length) {
  const len = buf.readUInt32BE(pos);
  const type = buf.toString('ascii', pos + 4, pos + 8);
  if (type === 'IDAT') idat.push(buf.subarray(pos + 8, pos + 8 + len));
  pos += 12 + len;
}

const raw = zlib.inflateSync(Buffer.concat(idat));
const w = buf.readUInt32BE(16);
const h = buf.readUInt32BE(20);
const bpp = 4;
const stride = w * bpp;
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

// Find navbar height: in the screenshot, the navbar has background #E8F3F8 / #E2EEF7
// Hero image content starts around y=50.
console.log('Extracting hero area from y=50 to', h);
const startY = 52;
const heroH = h - startY;
const heroBuffer = Buffer.alloc(w * heroH * bpp);

for (let y = 0; y < heroH; y++) {
  out.copy(heroBuffer, y * w * bpp, (startY + y) * w * bpp, (startY + y + 1) * w * bpp);
}

function makePng(buffer, width, height) {
  const rowSize = 1 + width * 4;
  const uncompressed = Buffer.alloc(height * rowSize);
  for (let y = 0; y < height; y++) {
    uncompressed[y * rowSize] = 0;
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
  ihdr[8] = 8;
  ihdr[9] = 6;
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

const heroPng = makePng(heroBuffer, w, heroH);
fs.writeFileSync('public/images/hero-seedling-bg.png', heroPng);
console.log('Saved public/images/hero-seedling-bg.png, size:', heroPng.length, 'dimensions:', w, heroH);
