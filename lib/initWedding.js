import { WEDDING } from "./config";
import { archSVG } from "./archSvg";

let started = false;

/* Poore page ka interactive logic: countdown, schedule, chatbot, music, intro. */
export function initWedding() {
  if (started) return;            // React StrictMode (dev) do baar effect chalata hai
  started = true;
const $=id=>document.getElementById(id);
$("heroPlace").textContent = WEDDING.venue.addr.split(",").slice(-2,-1)[0].trim();
$("letterH").textContent = WEDDING.bride+" aur "+WEDDING.groom+" ke vivah mein aap sabhi ko saparivaar amantrit karte hain.";
$("famB").textContent=WEDDING.families.bride.names; $("famBt").textContent=WEDDING.families.bride.text;
$("famG").textContent=WEDDING.families.groom.names; $("famGt").textContent=WEDDING.families.groom.text;
$("vName").textContent=WEDDING.venue.name; $("vAddr").textContent=WEDDING.venue.addr; $("vMap").href=WEDDING.venue.map;
$("info").innerHTML=[["Rukne ki jagah",WEDDING.stay],["Parking",WEDDING.parking],["Aane ka raasta",WEDDING.travel]].map(t=>`<div><b>${t[0]}</b><span>${t[1]}</span></div>`).join("");
$("nums").innerHTML=WEDDING.contacts.map(c=>`<div>${c.name}<small>${c.tel}</small></div>`).join("");

/* Mehraab (arch) */
$("arch").innerHTML=archSVG(WEDDING);


/* Jodi frames */
(function(){
  const arc=(ini,ph)=>ph?`<svg viewBox="0 0 300 380"><defs><clipPath id="c${ini}"><path d="M20 380V140A130 130 0 0 1 280 140V380Z"/></clipPath></defs><image href="${ph}" x="20" y="10" width="260" height="370" preserveAspectRatio="xMidYMid slice" clip-path="url(#c${ini})"/><path d="M20 380V140A130 130 0 0 1 280 140V380Z" fill="none" stroke="#C8A45C" stroke-width="3"/><path d="M8 380V140A142 142 0 0 1 292 140V380" fill="none" stroke="#C8A45C" stroke-width=".8"/></svg>`:
  `<svg viewBox="0 0 300 380" role="img" aria-label="${ini}"><defs><linearGradient id="g${ini}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#95303F"/><stop offset="1" stop-color="#4A0F1E"/></linearGradient><pattern id="p${ini}" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M15 0L30 15L15 30L0 15Z" fill="none" stroke="#E6CF9A" stroke-opacity=".2" stroke-width=".8"/></pattern><clipPath id="c${ini}"><path d="M20 380V140A130 130 0 0 1 280 140V380Z"/></clipPath></defs><path d="M20 380V140A130 130 0 0 1 280 140V380Z" fill="url(#g${ini})"/><rect width="300" height="380" fill="url(#p${ini})" clip-path="url(#c${ini})"/><path d="M20 380V140A130 130 0 0 1 280 140V380Z" fill="none" stroke="#C8A45C" stroke-width="3"/><path d="M8 380V140A142 142 0 0 1 292 140V380" fill="none" stroke="#C8A45C" stroke-width=".8"/><path d="M36 380V142A114 114 0 0 1 264 142V380" fill="none" stroke="#E6CF9A" stroke-opacity=".45" stroke-dasharray="2 5"/><text x="150" y="222" text-anchor="middle" font-family="Bodoni Moda,Georgia,serif" font-style="italic" font-size="120" fill="#E6CF9A">${ini}</text><text x="150" y="300" text-anchor="middle" font-family="Jost,Arial,sans-serif" font-size="11" letter-spacing="5" fill="#E6CF9A" fill-opacity=".8">PHOTO YAHAN AAYEGI</text></svg>`;
  const one=(id,p,name)=>{$(id).innerHTML=arc(name[0],p.photo)+`<h3>${name}</h3><div class="role">${p.role}</div><p>${p.line}</p>`};
  one("ppB",WEDDING.people.bride,WEDDING.bride); one("ppG",WEDDING.people.groom,WEDDING.groom);
})();

/* Petals */
(function(){
  if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  const c=$("petals"),h=c.parentElement,x=c.getContext("2d");let W,H,P=[];
  const fit=()=>{const r=h.getBoundingClientRect();W=c.width=r.width;H=c.height=r.height;};fit();addEventListener("resize",fit);
  const cols=["#F59E0B","#E8770A","#FFC857","#D9435E"];
  const mk=(top)=>({x:Math.random()*W,y:top?-20:Math.random()*H,s:4+Math.random()*6,v:.4+Math.random()*.9,w:Math.random()*6.28,ws:.01+Math.random()*.02,r:Math.random()*6.28,c:cols[Math.random()*4|0],a:.5+Math.random()*.5});
  for(let i=0;i<26;i++)P.push(mk(false));
  function f(){x.clearRect(0,0,W,H);for(const p of P){p.y+=p.v;p.w+=p.ws;p.x+=Math.sin(p.w)*.7;p.r+=.02;if(p.y>H+20)Object.assign(p,mk(true));x.save();x.translate(p.x,p.y);x.rotate(p.r);x.globalAlpha=p.a;x.fillStyle=p.c;x.beginPath();x.ellipse(0,0,p.s,p.s*.55,0,0,6.28);x.fill();x.restore();}requestAnimationFrame(f);}
  f();
})();

/* Countdown */
const target = new Date(WEDDING.countdownTo).getTime();
function tick(){
  const d=target-Date.now(), el=$("count");
  if(d<=0){el.innerHTML='<div class="cu" style="flex:1"><b class="foil" style="font-size:30px">Shubh Vivah!</b><small>Aashirwad dene ke liye shukriya</small></div>';return false;}
  const s=Math.floor(d/1000),v=[[Math.floor(s/86400),"Din"],[Math.floor(s%86400/3600),"Ghante"],[Math.floor(s%3600/60),"Minute"],[s%60,"Second"]];
  el.innerHTML=v.map(([n,l])=>`<div class="cu"><b class="foil">${String(n).padStart(2,"0")}</b><small>${l}</small></div>`).join("");
  return true;
}
if(tick()){const t=setInterval(()=>{if(!tick())clearInterval(t)},1000);}

/* Schedule */
const ICONS={
 haldi:'<svg viewBox="0 0 48 48"><path d="M7 22h34c0 11-7.5 18-17 18S7 33 7 22Z"/><ellipse cx="24" cy="22" rx="17" ry="4"/><circle cx="17" cy="12" r="1.8"/><circle cx="24" cy="8" r="1.8"/><circle cx="31" cy="12" r="1.8"/></svg>',
 mehendi:'<svg viewBox="0 0 48 48"><path d="M15 42V26l-4-8a2.4 2.4 0 0 1 4-2l4 6V9a2.4 2.4 0 0 1 4.8 0v14V7.5a2.4 2.4 0 0 1 4.8 0V23V9.5a2.4 2.4 0 0 1 4.8 0V26l4-6a2.4 2.4 0 0 1 3.6 3L36 34c-2 5-4 8-8 8Z"/><circle cx="26" cy="33" r="3"/></svg>',
 sangeet:'<svg viewBox="0 0 48 48"><circle cx="15" cy="36" r="5"/><circle cx="35" cy="32" r="5"/><path d="M20 36V12l20-4v24"/><path d="M20 19l20-4"/></svg>',
 baraat:'<svg viewBox="0 0 48 48"><path d="M8 17c0-3 3-5 16-5s16 2 16 5v14c0 3-3 5-16 5S8 34 8 31Z"/><ellipse cx="8" cy="24" rx="2.5" ry="7"/><ellipse cx="40" cy="24" rx="2.5" ry="7"/><path d="M14 13l5 22M24 12v24M34 13l-5 22"/></svg>',
 phere:'<svg viewBox="0 0 48 48"><path d="M24 5c-9 9-11 14-11 20a11 11 0 0 0 22 0c0-6-2-11-11-20Z"/><path d="M24 20c-4 4-5 7-5 9a5 5 0 0 0 10 0c0-2-1-5-5-9Z"/><path d="M8 43l32-4M8 39l32 4"/></svg>',
 reception:'<svg viewBox="0 0 48 48"><path d="M10 6h11l-1.5 14a4 4 0 0 1-8 0Z" transform="rotate(-10 15 20)"/><path d="M27 6h11l-1.5 14a4 4 0 0 1-8 0Z" transform="rotate(10 33 20)"/><path d="M14 22v16M10 40h10M34 22v16M28 40h10"/><path d="M24 5v4M20 8l2 2M28 8l-2 2"/></svg>'
};
const days=[];
WEDDING.events.forEach(e=>{const p=e.day.split(", ");let g=days.find(x=>x.d===p[0]);if(!g){g={d:p[0],w:p[1]||"",ev:[]};days.push(g);}g.ev.push(e);});
$("sched").innerHTML=days.map(g=>{const q=g.d.split(" ");return `
 <div class="day"><div class="dd"><span class="dn foil">${q[0]}</span><span class="dm">${q[1]} 2027</span><span class="dw">${g.w}</span></div>
 <div class="dl">${g.ev.map(e=>`
  <article class="ev">
   <div class="tm">${e.time}</div>
   <div class="mn"><div class="ic" aria-hidden="true">${ICONS[e.key]||""}</div>
    <div><h3>${e.name}<span class="dv">${e.dv}</span></h3><div class="hi">${e.hi}</div><p>${e.ras}</p></div></div>
   <div class="wh"><div class="k">Jagah</div><div>${e.where}</div><div class="k">Dress code</div>
    <div class="dc"><span class="sw" aria-hidden="true">${e.colors.map(c=>`<i style="background:${c}"></i>`).join("")}</span><span>${e.dress}</span></div></div>
  </article>`).join("")}</div></div>`;}).join("");

/* FAQ */

/* Google Calendar */
$("cal").href="https://calendar.google.com/calendar/render?action=TEMPLATE&text="+encodeURIComponent(WEDDING.bride+" weds "+WEDDING.groom)+"&dates=20270219/20270223&details="+encodeURIComponent("Shaadi ke functions: "+WEDDING.events.map(e=>e.name+" ("+e.day+", "+e.time+")").join("; "))+"&location="+encodeURIComponent(WEDDING.venue.name+", "+WEDDING.venue.addr);

/* Chatbot */
const E=k=>WEDDING.events.find(e=>e.key===k);
const evLine=e=>`${e.name} (${e.hi}): ${e.day}, ${e.time}, ${e.where}.`;
const dressAll=WEDDING.events.map(e=>`${e.name}: ${e.dress}`).join("\n");
const one=k=>()=>evLine(E(k))+"\nDress code: "+E(k).dress+".";
const intents=[
  {k:["namaste","namaskar","hello","hi","hey","hii","pranam","ram ram"],a:()=>"Namaste! Main Shaadi Sahayak hoon. Function ke time, venue, dress code, rukne ki jagah ya raaste ke baare mein kuch bhi poochiye."},
  {k:["kab","date","tarikh","tareekh","din","when"],a:()=>"Shaadi 21 February 2027 (Ravivaar) ko hai. Function 19 Feb se shuru hokar 22 Feb tak chalenge.\n\n"+WEDDING.events.map(e=>e.name+": "+e.day).join("\n")},
  {k:["haldi"],a:one("haldi")},
  {k:["mehendi","mehndi","henna"],a:one("mehendi")},
  {k:["sangeet","sangit","dance","naach","cocktail"],a:one("sangeet")},
  {k:["baraat","barat","ghodi","dhol","milni","baraati"],a:one("baraat")},
  {k:["phere","pheras","jaimala","varmala","wedding","shaadi","shadi","vivah","muhurat","mandap"],a:one("phere")},
  {k:["reception","dawat","dinner"],a:one("reception")},
  {k:["time","samay","schedule","timing","kitne baje","baje","events","functions","function","program"],a:()=>"Poora schedule:\n\n"+WEDDING.events.map(evLine).join("\n\n")},
  {k:["kahan","kahaan","venue","jagah","location","address","where","map","pata"],a:()=>`Venue hai ${WEDDING.venue.name}, ${WEDDING.venue.addr}.\nMap ka link "Kahaan aana hai" section mein hai.`},
  {k:["dress","kapde","kya pehnu","pehen","outfit","colour","color","rang","lehenga","sherwani"],a:()=>"Function ke hisaab se dress code:\n\n"+dressAll},
  {k:["stay","hotel","room","rukna","ruk","accommodation","thaharna"],a:()=>WEDDING.stay},
  {k:["parking","gaadi","car","valet"],a:()=>WEDDING.parking},
  {k:["airport","station","train","flight","raasta","route","cab","uber","ola","reach","pahunch","aana"],a:()=>WEDDING.travel},
  {k:["gift","tohfa","shagun","lifafa","present"],a:()=>WEDDING.gifts},
  {k:["rsvp","confirm","confirmation"],a:()=>"RSVP ki koi zaroorat nahi hai! Bas time pe aaiye aur khoob enjoy kariye."},
  {k:["kids","bachche","baccha","children","family","plus one","saath"],a:()=>"Bachche aur parivaar sabhi ka swagat hai. Poore parivaar ke saath aaiye!"},
  {k:["food","khana","menu","veg","jain","non veg","bhojan","khaana"],a:()=>"Khane mein pure vegetarian menu hoga, Jain options bhi milenge. Live chaat aur mithai counters bhi honge."},
  {k:["contact","number","phone","call","baat","help","madad"],a:()=>"Seedha baat karne ke liye:\n\n"+WEDDING.contacts.map(c=>c.name+": "+c.tel).join("\n")},
  {k:["kitne din","countdown","baaki","remaining"],a:()=>{const d=Math.max(0,Math.ceil((target-Date.now())/864e5));return d>0?`Baraat mein sirf ${d} din baaki hain!`:"Shaadi ka din aa gaya hai!";}},
  {k:["dulha","dulhan","bride","groom","couple","kaun"],a:()=>`${WEDDING.bride} aur ${WEDDING.groom} ki shaadi mein aapka swagat hai!`},
  {k:["thanks","thank","shukriya","dhanyavad","thank you"],a:()=>"Aapka bhi shukriya! Milte hain shaadi mein."}
];
const chipList=["Shaadi kab hai?","Schedule dikhao","Venue kahaan hai?","Dress code kya hai?","Rukne ki jagah?","Contact number"];
const msgs=$("msgs"), inp=$("inp");
function add(t,who){const d=document.createElement("div");d.className="m "+who;d.textContent=t;msgs.appendChild(d);msgs.scrollTop=msgs.scrollHeight;}
function norm(s){return " "+s.toLowerCase().replace(/[^a-z0-9ऀ-ॿ ]/g," ").replace(/\s+/g," ").trim()+" ";}
function reply(q){
  const n=norm(q); let best=null,score=0;
  intents.forEach(it=>{let sc=0;it.k.forEach(w=>{if(n.includes(" "+w+" ")||(w.length>4&&n.includes(w)))sc+=w.length;});if(sc>score){score=sc;best=it;}});
  return best?best.a():"Maaf kijiye, ye mujhe samajh nahi aaya. Aap function ka time, venue, dress code, stay ya parking ke baare mein poochh sakte hain, ya neeche diye numbers pe call kar lijiye.";
}
function ask(q){if(!q.trim())return;add(q,"me");setTimeout(()=>add(reply(q),"bot"),350);}
$("chips").innerHTML=chipList.map(c=>`<button type="button" class="chip">${c}</button>`).join("");
$("chips").addEventListener("click",e=>{if(e.target.classList.contains("chip"))ask(e.target.textContent);});
$("form").addEventListener("submit",e=>{e.preventDefault();ask(inp.value);inp.value="";});
function toggle(open){$("chat").hidden=!open;$("fab").hidden=open;$("fab").setAttribute("aria-expanded",open);if(open){inp.focus();}}
$("fab").onclick=()=>toggle(true); $("close").onclick=()=>toggle(false);
add("Namaste! Main Shaadi Sahayak hoon. Function, venue, dress code ya stay ke baare mein kuch bhi poochiye.","bot");

/* ===== Music (song file: public/leja.mp3) ===== */
const Music=(()=>{
  let audio,fade,playing=false;
  const VOL=.6, START=50;
  function ramp(to,done){
    clearInterval(fade);
    fade=setInterval(()=>{
      const v=audio.volume+(to>audio.volume?.05:-.05);
      if(Math.abs(to-audio.volume)<=.05){audio.volume=to;clearInterval(fade);done&&done();}
      else audio.volume=Math.min(1,Math.max(0,v));
    },60);
  }
  function init(){
    audio=new Audio("/leja.mp3#t="+START);audio.preload="auto";audio.volume=0;
    audio.addEventListener("ended",()=>{audio.currentTime=START;if(playing)audio.play().catch(()=>{});});
  }
  return{
    get on(){return playing;},
    start(){if(!audio)init();playing=true;audio.play().then(()=>ramp(VOL)).catch(()=>{playing=false;setMusUI();});},
    stop(){playing=false;if(audio)ramp(0,()=>audio.pause());},
    hide(h){if(!audio)return;if(h)audio.pause();else if(playing)audio.play().catch(()=>{});}
  };
})();
document.addEventListener("visibilitychange",()=>Music.hide(document.hidden));
function setMusUI(){const on=Music.on;$("mus").setAttribute("aria-pressed",on);$("musT").textContent=on?"Music on":"Music off";$("wave").style.display=on?"":"none";}
$("mus").onclick=()=>{Music.on?Music.stop():Music.start();setMusUI();};
/* ===== Darwaze ===== */
const intro=$("intro");
$("openBtn").onclick=()=>{
  intro.classList.add("open");Music.start();setMusUI();
  setTimeout(()=>{intro.classList.add("gone");document.body.style.overflow="";},1600);
  setTimeout(()=>{intro.hidden=true;},2300);
};
if(matchMedia("(prefers-reduced-motion: reduce)").matches){intro.hidden=true;}
else{document.body.style.overflow="hidden";}
}
