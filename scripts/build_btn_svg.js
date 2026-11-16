const fs = require('fs');

const pngBuf = fs.readFileSync('public/images/btn_hablar_con_el_equipo.PNG');
const base64 = pngBuf.toString('base64');
const w = 1306;
const h = 313;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <image href="data:image/png;base64,${base64}" width="${w}" height="${h}" />
</svg>`;

fs.writeFileSync('public/images/btn_hablar_con_el_equipo.svg', svg);
console.log('Successfully created public/images/btn_hablar_con_el_equipo.svg, size:', svg.length);
