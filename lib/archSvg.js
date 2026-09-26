/* Hero mehraab: agar WEDDING.photo ho to photo, warna painted Ganesh ji */
export function archSVG(WEDDING){
  return WEDDING.photo?
`<svg viewBox="0 0 300 440" role="img" aria-label="Shri Ganesh ji"><defs><clipPath id="ac"><path d="M28 440V150A122 122 0 0 1 272 150V440Z"/></clipPath></defs><image href="${WEDDING.photo}" x="28" y="28" width="244" height="412" preserveAspectRatio="xMidYMid slice" clip-path="url(#ac)"/><path d="M28 440V150A122 122 0 0 1 272 150V440" fill="none" stroke="#C8A45C" stroke-width="1.4"/><path d="M10 440V150A140 140 0 0 1 290 150V440" fill="none" stroke="#C8A45C" stroke-width=".8"/></svg>`:
(function(){
const G="#C98A1B",GL="#F2CB6B",GD="#8A5A12",M="#5A1424",R="#D9481F",CR="#FBEFD3";
const arch="M12 562V196A188 188 0 0 1 388 196V562Z", arch2="M30 562V198A170 170 0 0 1 370 198V562Z";
const bead=(cx,cy,r)=>`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${GL}" stroke="${GD}" stroke-width="1"/>`;
let neck="";for(let i=0;i<=16;i++){const a=Math.PI*(.06+.88*i/16),x=200-118*Math.cos(a),y=420+64*Math.sin(a);neck+=bead(x.toFixed(1),y.toFixed(1),i%4==0?6.5:4.2);}
let petals="";for(let i=-4;i<=4;i++){const x=200+i*26,h=44-Math.abs(i)*5;petals+=`<path d="M${x} 528 C${x-16} 514 ${x-12} ${528-h} ${x} ${524-h} C${x+12} ${528-h} ${x+16} 514 ${x} 528Z" fill="${i%2?GL:G}" stroke="${GD}" stroke-width="1.2" transform="rotate(${i*7} ${x} 528)"/>`;}
let halo="";for(let i=0;i<=30;i++){const a=Math.PI*(1-i/30),x=200+142*Math.cos(a),y=262-150*Math.sin(a);halo+=`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.6" fill="${G}"/>`;}
const ear=(s)=>`<g transform="translate(${s<0?400:0} 0) scale(${s} 1)">
 <path d="M146 214 C92 178 46 214 50 278 C54 334 96 366 148 338 C138 300 140 250 146 214Z" fill="#EBC792" stroke="${G}" stroke-width="5" stroke-linejoin="round"/>
 <path d="M140 232 C104 208 72 232 76 278 C80 316 108 334 138 318 C130 290 132 258 140 232Z" fill="#F7DDB0" stroke="${G}" stroke-width="2.5"/>
 <path d="M124 250 C104 244 96 264 106 282 C116 296 130 286 128 272" fill="none" stroke="${G}" stroke-width="4" stroke-linecap="round"/>
 <path d="M118 300 C104 304 96 296 92 288" fill="none" stroke="${G}" stroke-width="3" stroke-linecap="round"/>
 <g fill="${G}"><circle cx="70" cy="262" r="2.6"/><circle cx="66" cy="282" r="2.6"/><circle cx="72" cy="302" r="2.6"/><circle cx="84" cy="318" r="2.6"/></g></g>`;
const cheek=(s)=>`<g transform="translate(${s<0?400:0} 0) scale(${s} 1)"><path d="M150 312 C120 318 104 346 122 368 C144 388 190 380 198 352 C196 326 176 306 150 312Z" fill="#F7DDB0" stroke="${G}" stroke-width="4.5"/>
 <g fill="${G}">${[[136,338],[150,348],[164,356],[178,362],[128,352],[144,364],[160,372],[176,374],[190,366]].map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="2.6"/>`).join("")}</g></g>`;
const eye=(cx)=>`<path d="M${cx-17} 248 Q${cx} 232 ${cx+17} 248 Q${cx} 260 ${cx-17} 248Z" fill="#FFF6E2" stroke="${M}" stroke-width="2.4"/><circle cx="${cx}" cy="248" r="5.2" fill="${M}"/><circle cx="${cx+1.6}" cy="246.4" r="1.6" fill="#fff"/><path d="M${cx-22} 240 Q${cx} 218 ${cx+22} 240" fill="none" stroke="${M}" stroke-width="3" stroke-linecap="round"/><path d="M${cx-16} 251 L${cx-22} 254 M${cx+16} 251 L${cx+22} 254" stroke="${R}" stroke-width="2.2" stroke-linecap="round"/>`;
return `<svg viewBox="0 0 400 562" role="img" aria-label="Shri Ganesh ji">
<defs>
 <clipPath id="gar"><path d="${arch2}"/></clipPath>
 <radialGradient id="gbg" cx=".5" cy=".42" r=".7"><stop offset="0" stop-color="#FFF8E4"/><stop offset=".7" stop-color="#F7E4BC"/><stop offset="1" stop-color="#E9C994"/></radialGradient>
 <pattern id="dam" width="64" height="64" patternUnits="userSpaceOnUse"><g fill="none" stroke="#DDB98A" stroke-width="2.2" stroke-linecap="round" opacity=".7"><path d="M32 6C42 16 42 26 32 34C22 26 22 16 32 6Z"/><path d="M32 34C40 40 46 50 32 60C18 50 24 40 32 34Z"/><path d="M6 32C16 22 26 22 34 32C26 42 16 42 6 32Z"/><path d="M34 32C42 22 52 22 60 32C52 42 42 42 34 32Z"/><circle cx="32" cy="34" r="3"/></g></pattern>
 <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F2CB6B"/><stop offset=".5" stop-color="#C98A1B"/><stop offset="1" stop-color="#8A5A12"/></linearGradient>
</defs>
<path d="${arch}" fill="${M}"/>
<path d="${arch}" fill="none" stroke="url(#gold)" stroke-width="6"/>
<g fill="${GL}">${Array.from({length:44},(_,i)=>{const a=Math.PI*(1-i/43),x=200+178*Math.cos(a),y=196-178*Math.sin(a)*1.0;return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.4"/>`}).join("")}</g>
<g clip-path="url(#gar)"><rect width="400" height="562" fill="url(#gbg)"/><rect width="400" height="562" fill="url(#dam)"/></g>
<path d="${arch2}" fill="none" stroke="url(#gold)" stroke-width="3"/>
${halo}
<!-- crown -->
<path d="M156 196 L162 168 Q200 152 238 168 L244 196Z" fill="url(#gold)" stroke="${GD}" stroke-width="1.6"/>
<path d="M166 168 L174 142 Q200 130 226 142 L234 168Z" fill="${GL}" stroke="${GD}" stroke-width="1.6"/>
<path d="M186 142 Q200 104 214 142Z" fill="url(#gold)" stroke="${GD}" stroke-width="1.4"/><circle cx="200" cy="100" r="6" fill="${GL}" stroke="${GD}" stroke-width="1.4"/>
<g fill="${M}"><circle cx="176" cy="182" r="3.6"/><circle cx="188" cy="178" r="3.6"/><circle cx="200" cy="176" r="3.6"/><circle cx="212" cy="178" r="3.6"/><circle cx="224" cy="182" r="3.6"/></g>
${ear(1)}${ear(-1)}
<!-- head -->
<path d="M140 214 C140 178 170 166 200 166 C230 166 260 178 260 214 C264 268 246 312 200 322 C154 312 136 268 140 214Z" fill="#F7DDB0" stroke="${G}" stroke-width="5" stroke-linejoin="round"/>
<path d="M156 196 C170 180 230 180 244 196" fill="none" stroke="${G}" stroke-width="2.4" stroke-dasharray="1 6" stroke-linecap="round"/>
<!-- tilak -->
<path d="M182 206 C190 196 210 196 218 206" fill="none" stroke="${R}" stroke-width="3.6" stroke-linecap="round"/><path d="M186 214 C193 207 207 207 214 214" fill="none" stroke="${R}" stroke-width="3.6" stroke-linecap="round"/>
<path d="M200 218 C194 212 196 204 200 198 C204 204 206 212 200 218Z" fill="${R}"/>
${eye(174)}${eye(226)}
${cheek(1)}${cheek(-1)}
<!-- tusk -->
<path d="M226 322 C246 336 262 356 268 384 C248 378 232 366 222 346Z" fill="#FFF8E8" stroke="${G}" stroke-width="3.4" stroke-linejoin="round"/>
<!-- trunk -->
<path d="M200 252 C206 306 204 346 176 372 C152 392 124 376 136 350 C142 338 160 342 158 356" fill="none" stroke="${GD}" stroke-width="36" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M200 252 C206 306 204 346 176 372 C152 392 124 376 136 350 C142 338 160 342 158 356" fill="none" stroke="#F2CB6B" stroke-width="30" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M200 252 C206 306 204 346 176 372 C152 392 124 376 136 350 C142 338 160 342 158 356" fill="none" stroke="${G}" stroke-width="26" stroke-linecap="butt" stroke-dasharray="1.6 8" opacity=".75"/>
<path d="M192 258 C196 300 194 340 170 364" fill="none" stroke="#FFF1BE" stroke-width="3" stroke-linecap="round" opacity=".7"/>
<circle cx="200" cy="316" r="3.4" fill="${R}"/>
<!-- necklace -->
${neck}
<path d="M200 486 C190 470 192 458 200 448 C208 458 210 470 200 486Z" fill="${R}" stroke="${GD}" stroke-width="1.4"/><circle cx="200" cy="470" r="4" fill="${GL}"/>
<!-- lotus -->
${petals}
<path d="M70 532H330" stroke="${G}" stroke-width="2"/>
<text x="200" y="552" text-anchor="middle" font-family="Tiro Devanagari Hindi,Georgia,serif" font-size="17" fill="${GD}">॥ श्री गणेशाय नमः ॥</text>
</svg>`;})();
}
