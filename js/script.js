window.REEL='assets/clips/travel-reel.mp4';window.REELP='assets/clips/travel-reel.jpg';
window.V={};
window.TINT='assets/photo-color.webp';
const $=s=>document.querySelector(s),RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
const ld=$('#loader');document.body.style.overflow='hidden';
const lc=$('#lember'),lx=lc.getContext('2d');let lps=[];const lsz=()=>{lc.width=innerWidth;lc.height=innerHeight;lps=Array.from({length:46},()=>({x:Math.random()*lc.width,y:Math.random()*lc.height,r:Math.random()*2+.6,v:Math.random()*.4+.1,p:Math.random()*6}))};lsz();addEventListener('resize',lsz);
(function ld2(t){lx.clearRect(0,0,lc.width,lc.height);lps.forEach(q=>{const a=.3+.4*Math.sin(t/500+q.p);lx.fillStyle='rgba(225,230,240,'+a+')';lx.beginPath();lx.arc(q.x,q.y,q.r,0,7);lx.fill();if(!RM){q.y-=q.v;q.x+=Math.sin(t/900+q.p)*.15;if(q.y<-5){q.y=lc.height+5;q.x=Math.random()*lc.width}}});if(!ld.classList.contains('done'))requestAnimationFrame(ld2)})(0);

$('#lg').src=$('#lf').src=document.querySelector('#pic img').src;
let p=0;const t=setInterval(()=>{p=Math.min(100,p+Math.ceil(Math.random()*4));$('#pct').textContent=p+'%';ld.style.setProperty('--p',p+'%');if(p>=100){clearInterval(t);$('#lt').textContent='Card ready';$('#enter').hidden=false;$('#enter').focus()}},60);
$('#enter').onclick=()=>{ld.classList.add('done');document.body.style.overflow=''};
const roles=['Video Editor','Graphic Designer','UI/UX Designer','Web Developer'],tw=$('#tw');
if(RM)tw.textContent=roles[0];else{let r=0,c=0,del=false;(function s(){const w=roles[r];c+=del?-1:1;tw.textContent=w.slice(0,c);let d=del?40:85;if(!del&&c===w.length){del=true;d=1500}else if(del&&c===0){del=false;r=(r+1)%roles.length;d=300}setTimeout(s,d)})()}
const cord=$('#cord');cord.onclick=()=>{const r=document.documentElement,to=r.dataset.theme==='dark'?'light':'dark';r.dataset.theme=to;
 cord.classList.remove('pull');void cord.offsetWidth;cord.classList.add('pull');
 const fl=$('#flash');fl.className='';void fl.offsetWidth;fl.className='go '+(to==='dark'?'d':'l');
 navigator.vibrate&&navigator.vibrate(18);window.curLi&&setY(window.curLi);setTimeout(()=>cord.classList.remove('pull'),1000)};
if(!RM){let th=0,w=0,t2=0,w2=0,lx=0,ls=scrollY,lt=performance.now();const bead=cord.querySelector('i'),kick=v=>{w=Math.max(-6,Math.min(6,w+v))};
addEventListener('pointermove',e=>{const r=cord.getBoundingClientRect(),dx=e.clientX-lx;lx=e.clientX;if(e.clientX>r.left-50&&e.clientX<r.right+50&&e.clientY<r.bottom+40)kick(-Math.max(-45,Math.min(45,dx))*.05)},{passive:true});
addEventListener('scroll',()=>{const d=scrollY-ls;ls=scrollY;kick(Math.max(-40,Math.min(40,d))*.02)},{passive:true});
(function loop(now){const dt=Math.min(.033,(now-lt)/1000||.016);lt=now;const idle=Math.sin(now/1300)*.03;
w+=(-26*th-1.8*w)*dt;th=Math.max(-.7,Math.min(.7,th+w*dt));w2+=(-70*(t2-th*.55)-3.2*w2)*dt;t2+=w2*dt;
if(!cord.classList.contains('pull')){cord.style.transform='rotate('+(th+idle)+'rad)';bead.style.transform='rotate('+t2+'rad)'}
requestAnimationFrame(loop)})(performance.now())}
const pic=$('#pic');if(!RM)pic.addEventListener('pointermove',e=>{const b=pic.getBoundingClientRect();pic.style.setProperty('--ry',((e.clientX-b.left)/b.width-.5)*12+'deg');pic.style.setProperty('--rx',-((e.clientY-b.top)/b.height-.5)*12+'deg')});
const tint=pic.querySelector('.tint');tint.src=window.TINT;
const spot=e=>{const b=pic.getBoundingClientRect();tint.style.setProperty('--mx',(e.clientX-b.left)+'px');tint.style.setProperty('--my',(e.clientY-b.top)+'px');tint.style.setProperty('--r',Math.round(b.width*.42)+'px')};
['pointerenter','pointermove','pointerdown'].forEach(t=>pic.addEventListener(t,spot));
['pointerleave','pointercancel'].forEach(t=>pic.addEventListener(t,()=>tint.style.setProperty('--r','0px')));
pic.addEventListener('pointerleave',()=>{pic.style.setProperty('--ry','0deg');pic.style.setProperty('--rx','0deg')});
// mouse devices: colour is painted in around the cursor and fades out slowly behind it
if(matchMedia('(hover:hover) and (pointer:fine)').matches&&!RM){
 const cv=document.createElement('canvas');cv.className='brush';cv.setAttribute('aria-hidden','true');pic.insertBefore(cv,pic.querySelector('span'));
 const cx2=cv.getContext('2d'),mk=document.createElement('canvas'),mx2=mk.getContext('2d');
 const col=new Image();let ready=false;col.onload=()=>{ready=true};col.src=window.TINT;
 let w=0,h=0,dpr=1,last=null,raf=0,idle=0,R=0,endT=0;
 const size=()=>{dpr=Math.min(2,devicePixelRatio||1);w=Math.round(pic.offsetWidth*dpr);h=Math.round(pic.offsetHeight*dpr);cv.width=mk.width=w;cv.height=mk.height=h;R=w*.22};
 size();addEventListener('resize',size);
 const dab=(x,y)=>{const g=mx2.createRadialGradient(x,y,0,x,y,R);g.addColorStop(0,'rgba(255,255,255,1)');g.addColorStop(.45,'rgba(255,255,255,.85)');g.addColorStop(1,'rgba(255,255,255,0)');mx2.fillStyle=g;mx2.fillRect(x-R,y-R,R*2,R*2)};
 const frame=()=>{
  if(ready){
   mx2.globalCompositeOperation='destination-out';mx2.fillStyle='rgba(0,0,0,.028)';mx2.fillRect(0,0,w,h);mx2.globalCompositeOperation='source-over';
   cx2.globalCompositeOperation='source-over';cx2.clearRect(0,0,w,h);cx2.drawImage(col,0,0,w,h);cx2.globalCompositeOperation='destination-in';cx2.drawImage(mk,0,0);cx2.globalCompositeOperation='source-over';
  }
  if(performance.now()-idle>2200){raf=0;cv.style.transition='opacity .4s ease';cv.style.opacity='0';endT=setTimeout(()=>{mx2.clearRect(0,0,w,h);cx2.clearRect(0,0,w,h);cv.style.transition='';cv.style.opacity=''},430);return}
  raf=requestAnimationFrame(frame)};
 const move=e=>{const b=pic.getBoundingClientRect();const x=(e.clientX-b.left)/b.width*w,y=(e.clientY-b.top)/b.height*h;
  if(last){const dx=x-last.x,dy=y-last.y,n=Math.max(1,Math.ceil(Math.hypot(dx,dy)/(R*.25)));for(let i=1;i<=n;i++)dab(last.x+dx*i/n,last.y+dy*i/n)}else dab(x,y);
  last={x,y};idle=performance.now();if(endT){clearTimeout(endT);endT=0;cv.style.transition='';cv.style.opacity=''}if(!raf)raf=requestAnimationFrame(frame)};
 pic.classList.add('bm');
 pic.addEventListener('pointermove',e=>{if(e.pointerType==='mouse')move(e)});
 pic.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse'){last=null;size()}});
 pic.addEventListener('pointerleave',()=>{last=null;idle=performance.now()});
}

const nav=$('#nav'),mb=$('#menuBtn');const setNav=o=>{nav.classList.toggle('open',o);mb.setAttribute('aria-expanded',o)};
mb.onclick=()=>setNav(true);$('#closeNav').onclick=()=>setNav(false);nav.querySelectorAll('a').forEach(a=>a.onclick=e=>{setNav(false);room.classList.remove('on');lock(false);if(a.dataset.skill){e.preventDefault();setTimeout(()=>goRoom(+a.dataset.skill),400)}});
// doors + 3D enter + skill page
const mon=(t,c1,c2,bg='#f5f1e8',fg='#1a1818')=>`<div class="mon"><div class="scr" style="--b:${bg}"><div class="nv"><i></i><i></i><i></i></div><b class="hl" style="color:${fg}">${t}</b><div class="bl" style="background:linear-gradient(135deg,${c1},${c2})"></div></div><div class="st"></div></div>`;
const ph=(t,c1,c2)=>`<div class="ph"><div class="nc"></div><b class="pt">${t}</b><div class="rw" style="background:linear-gradient(135deg,${c1},${c2})"></div><div class="rw"></div><div class="rw"></div></div>`;
const ps=a=>`<div class="ps">${a.map((x,k)=>`<div class="po" style="--r:${[-4,3,-2][k]}deg;background:linear-gradient(160deg,${x[1]},${x[2]})"><b>${x[0]}</b></div>`).join('')}</div>`;
const vd=(c1,c2)=>`<div class="vd"><div class="vf" style="background:linear-gradient(135deg,${c1},${c2})"><span class="play">▶</span></div><div class="tk"><i style="--w:70%;--l:0;--c:#7C8CFF"></i><i style="--w:45%;--l:20%;--c:#FFD84D"></i><i style="--w:60%;--l:8%;--c:#3DBE6B"></i></div></div>`;
const clip=k=>`<div class="vp"><img src="${V[k]}" alt="Sample motion clip"><i class="rec"></i><span class="tm">▶ loop</span><div class="vpb"><i></i></div></div>`;
const reel=(src=window.REEL,pos=window.REELP,lab='Travel reel',dur=34)=>`<div class="vp"><video src="${src}" poster="${pos}" muted loop playsinline autoplay preload="auto"></video><i class="rec"></i><span class="tm">${lab}</span><button class="snd" type="button" aria-label="Sound on or off">🔇</button><div class="vpb"><i style="animation-duration:${dur}s"></i></div></div>`;
const SC='Sample concept';
const info_={'food':1.9475,'trav':2.4575,'head':2.0387};
const PG={food:'assets/pages/food.jpg',trav:'assets/pages/trav.jpg',head:'assets/pages/head.jpg'};
const spage=(k,lab)=>{const ar=info_[k];const end=((1-1.25/ar)*100).toFixed(1);const d=(8+10*(ar-1.25)).toFixed(0);return `<div class="spg" style="--d:${d}s"><img src="${PG[k]}" alt="${lab} website design" loading="lazy"><span class="tm">Website preview</span></div>`};

const PO={cafe1:'assets/posters/cafe1.jpg',cafe2:'assets/posters/cafe2.jpg',cafe3:'assets/posters/cafe3.jpg',cafe4:'assets/posters/cafe4.jpg',cafe5:'assets/posters/cafe5.jpg',cafe6:'assets/posters/cafe6.jpg',fit1:'assets/posters/fit1.jpg',fit2:'assets/posters/fit2.jpg',fit3:'assets/posters/fit3.jpg',fit4:'assets/posters/fit4.jpg',logo1:'assets/posters/logo1.jpg',logo10:'assets/posters/logo10.jpg',logo11:'assets/posters/logo11.jpg',logo12:'assets/posters/logo12.jpg',logo13:'assets/posters/logo13.jpg',logo14:'assets/posters/logo14.jpg',logo15:'assets/posters/logo15.jpg',logo16:'assets/posters/logo16.jpg',logo17:'assets/posters/logo17.jpg',logo18:'assets/posters/logo18.jpg',logo19:'assets/posters/logo19.jpg',logo2:'assets/posters/logo2.jpg',logo3:'assets/posters/logo3.jpg',logo4:'assets/posters/logo4.jpg',logo5:'assets/posters/logo5.jpg',logo6:'assets/posters/logo6.jpg',logo7:'assets/posters/logo7.jpg',logo8:'assets/posters/logo8.jpg',logo9:'assets/posters/logo9.jpg',perf1:'assets/posters/perf1.jpg',perf2:'assets/posters/perf2.jpg',perf3:'assets/posters/perf3.jpg',perf4:'assets/posters/perf4.jpg',perf5:'assets/posters/perf5.jpg'};
const poster=(n,pre,ar,lab,unit='posters')=>{const L=Array.from({length:n},(_,k)=>PO[pre+(k+1)]);const im=(u,k)=>`<img src="${u}" alt="${lab} ${k+1}" loading="lazy">`;return `<div class="pcar" data-n="${n}" data-i="0" style="--ar:${ar}"><div class="pt">${L.map(im).join('')}${im(L[0],0)}</div><span class="tm">${lab} · ${n} ${unit}</span><div class="dots">${L.map((_,k)=>`<i${k?'':' class="on"'}></i>`).join('')}</div></div>`};
setInterval(()=>{const rm=document.getElementById('room');if(!rm||!rm.classList.contains('on'))return;document.querySelectorAll('.pcar').forEach(el=>{const r=el.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;const n=+el.dataset.n,t=el.firstChild;let i=(+el.dataset.i)+1;el.dataset.i=i;t.style.transition='';t.style.transform=`translateX(-${i*100}%)`;el.querySelectorAll('.dots i').forEach((d,k)=>d.classList.toggle('on',k===i%n));if(i===n){setTimeout(()=>{t.style.transition='none';t.style.transform='translateX(0)';el.dataset.i=0},650)}})},2000);

const S=[
{n:'Video Editing',d:'Reels, shorts and YouTube videos, cut for pace and built to hold attention.',c:[
['Travel Reel','A travel reel cut for story and pace, with text titles and natural colour.','My edit',['Storytelling','Text titles','Colour & sound'],reel()],
['YouTube Explainer','A long-form explainer with clear pacing, b-roll, titles and clean sound.','My edit',['Pacing','B-roll','Sound mix'],reel('assets/clips/youtube-explainer.mp4','assets/clips/youtube-explainer.jpg','Explainer',34)],
['Brand Promo','A short promo with motion titles, transitions and a strong opening hook.','My edit',['Motion titles','Transitions','Export'],reel('assets/clips/brand-promo.mp4','assets/clips/brand-promo.jpg','Brand promo',26)]]},
{n:'Graphic Design',d:'One look across every platform: creatives, posters and brand visuals.',c:[
['Café Social Campaign','Posts and stories that keep a small brand consistent, from feed to story.',SC,['Social posts','Stories','Brand colours'],poster(6,'cafe','3/4','Café')],
['Fitness Brand Posts','High-contrast creatives with bold type and a clear call to action.',SC,['Carousels','Typography','CTA'],poster(4,'fit','4/5','Fitness')],
['Perfume Poster Set','A luxury poster series with one grid, one typeface and a dark, premium look.',SC,['Posters','Layout','Product ads'],poster(5,'perf','3/4','Perfume')],
['Logo Design','Logos and brand marks for small businesses, creators and startups, from a single mark to a simple identity.',SC,['Logo marks','Wordmarks','Brand colours'],poster(19,'logo','1/1','Logos','logos')]]},
{n:'UI/UX Design',d:'Interfaces researched, structured and prototyped around real people.',c:[
['Headphone Store Website','An e-commerce site for premium audio, with clear categories, offers and a simple path to buy.','',['Web UI','E-commerce','Visual design'],spage('head','Headphone store')],
['Food Delivery Website','A food ordering site, from a bold hero and cuisine categories to popular dishes and offers.','',['Web UI','Ordering flow','Visual design'],spage('food','Food delivery')],
['Travel Booking Website','A tour booking site with destinations, packages and a clear 3-step booking journey.','',['Web UI','Booking flow','Visual design'],spage('trav','Travel booking')]]},
{n:'Web Development',d:'Websites and web apps, built end to end from first sketch to launch.',c:[
['AI Resume Analyzer','A web app that reviews a resume with AI and shows what to improve.','Live project',['Python','Flask','MySQL','Google Gemini'],reel('assets/clips/resume-analyzer.mp4','assets/clips/resume-analyzer.jpg','Resume Analyzer',24),'https://resumeanalyzer-rr8k.onrender.com/'],
['Spider Portfolio','A dark, animated personal portfolio: a bold spider-themed hero, a photo that reveals on hover, project cards and a contact form.','Live project',['Animation','Dark UI','Portfolio'],reel('assets/clips/spider-portfolio.mp4','assets/clips/spider-portfolio.jpg','Spider Portfolio',20),'https://spiderportfolio-sk.vercel.app/']]}];
const doors=[...document.querySelectorAll('.door')],room=$('#room'),en=$('#gate');
const lock=v=>document.body.style.overflow=v?'hidden':'';
const fitSpg=()=>{const rm=document.getElementById('room'),lap=matchMedia('(min-width:761px)').matches;document.querySelectorAll('.spg').forEach(f=>{const card=f.closest('.rcard');if(!card)return;const top=parseFloat(getComputedStyle(card).top)||0;const other=card.offsetHeight-f.offsetHeight;const fh=Math.max(220,Math.min(lap?580:440,rm.clientHeight-top-other-20));f.style.setProperty('--fh',fh+'px')})
 document.querySelectorAll('.pcar').forEach(f=>{const card=f.closest('.rcard');if(!card)return;const top=parseFloat(getComputedStyle(card).top)||0;const other=card.offsetHeight-f.offsetHeight;const mh=Math.max(220,Math.min(lap?660:560,rm.clientHeight-top-other-20));f.style.maxHeight=mh+'px';const q=(f.style.getPropertyValue('--ar')||'3/4').split('/');const ratio=(+q[0])/(+q[1]||1);f.style.maxWidth=Math.min(lap?540:340,mh*ratio)+'px'})};
addEventListener('resize',fitSpg);
const fill=i=>{const s=S[i];$('#rt').textContent=s.n;$('#rs').textContent=s.d;$('#rc').innerHTML=s.c.map((c,k)=>`<article class="rcard" style="--i:${k}"><div>${c[2]?`<small>${c[2]}</small>`:''}<h3>${c[0]}</h3><p>${c[1]}</p><div class="chips">${c[3].map(x=>`<span>${x}</span>`).join('')}</div>${c[5]?`<a class="btn" href="${c[5]}" target="_blank" rel="noopener">Open live site ↗</a>`:''}</div><div class="mk">${c[4]}</div></article>`).join('');room.scrollTop=0;fitSpg();setTimeout(fitSpg,400)};
let cur=null;
const goRoom=(i)=>{cur=i;room.classList.remove('on');lock(true);
 const src=doors[i];let r=src.querySelector('.arch').getBoundingClientRect();
 if(r.bottom<0||r.top>innerHeight||!r.width){const w=Math.min(innerWidth*.22,200),hh=w*1.55;r={left:(innerWidth-w)/2,top:(innerHeight-hh)/2,width:w,height:hh}}
 const c=src.cloneNode(true);c.classList.remove('open');c.querySelector('.enter')?.remove();c.removeAttribute('aria-label');c.removeAttribute('role');c.removeAttribute('tabindex');
 const eb=$('#ebd');eb.style.cssText=`left:${r.left}px;top:${r.top}px;width:${r.width}px;height:${r.height}px;transition:none;transform:none;opacity:1`;
 eb.replaceChildren(c);$('#et').textContent='Shubham Kangale · '+S[i].n;
 if(RM){fill(i);room.classList.add('on');return}
 en.classList.add('on');
 const dx=innerWidth/2-(r.left+r.width/2),dy=innerHeight*.47-(r.top+r.height/2),s=Math.min(innerHeight*.6/r.height,innerWidth*.72/r.width);
 requestAnimationFrame(()=>requestAnimationFrame(()=>{eb.style.transition='transform 1.15s cubic-bezier(.65,0,.25,1)';eb.style.transform=`translate(${dx}px,${dy}px) scale(${s})`;c.classList.add('open')}));
 setTimeout(()=>{eb.style.transition='transform 1s cubic-bezier(.5,0,.9,.4),opacity .45s ease .55s';eb.style.transform=`translate(${dx}px,${dy}px) scale(${s*9})`;eb.style.opacity=0},1500);
 setTimeout(()=>{fill(i);room.classList.add('on')},2250);
 setTimeout(()=>en.classList.remove('on'),2800)};
const closeRoom=()=>{setTimeout(()=>{if(!room.classList.contains('on'))$('#rc').innerHTML=''},700);room.classList.remove('on');en.classList.remove('on','zoom');lock(false);doors.forEach(d=>d.classList.remove('open'));$('#work').scrollIntoView();if(cur!==null)doors[cur].focus({preventScroll:true})};
doors.forEach((d,i)=>d.onclick=()=>goRoom(i));
// laptop only: hover a door to open it a little and show what is behind it
const DI=[
 ['Reels, shorts and YouTube videos','Cuts built for pace and story','Motion titles and captions','Colour and sound clean-up','Clean exports for every platform'],
 ['Social posts and campaign creatives','Posters and print-ready layouts','Brand visuals with one consistent style','Typography and colour systems','Files ready for web and print'],
 ['Research and user flows','Wireframes and page structure','High-fidelity website and app screens','Interactive prototypes','Clean handoff for developers'],
 ['Planning and page structure','Responsive front-end builds','3D, motion and scroll effects','Fast, clean and accessible code','Launch and updates']];
const hoverMQ=matchMedia('(hover:hover) and (pointer:fine) and (min-width:761px)');
const wallEl=document.querySelector('.wall');let dp=null;
const hoverOff=()=>{doors.forEach(d=>d.classList.remove('hv'));wallEl.classList.remove('hv');if(dp)dp.classList.remove('on')};
const hoverOn=i=>{if(!hoverMQ.matches)return;
 if(!dp){dp=document.createElement('div');dp.className='dpanel';dp.setAttribute('aria-hidden','true');wallEl.appendChild(dp)}
 const d=doors[i],s=S[i];
 dp.innerHTML=`<h3>${s.n}</h3><p>${s.d}</p><ul>${DI[i].map(x=>`<li>${x}</li>`).join('')}</ul>`;
 dp.style.left=dp.style.right='';
 if(i<2){dp.style.left=(d.offsetLeft+d.offsetWidth+28)+'px'}else{dp.style.right=(wallEl.offsetWidth-d.offsetLeft+28)+'px'}
 doors.forEach((x,k)=>x.classList.toggle('hv',k===i));wallEl.classList.add('hv');
 dp.classList.remove('on');void dp.offsetWidth;dp.classList.add('on')};
doors.forEach((d,i)=>{d.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse')hoverOn(i)});d.addEventListener('click',hoverOff)});
wallEl.addEventListener('pointerleave',hoverOff);
hoverMQ.addEventListener('change',hoverOff);

$('#back').onclick=closeRoom;$('#rmenu').onclick=()=>setNav(true);
addEventListener('keydown',e=>{if(e.key==='Escape'&&room.classList.contains('on'))closeRoom()});
const wl=document.querySelector('.wall'),mq=matchMedia('(max-width:760px)'),dts=[...document.querySelectorAll('.dots i')];
const DS=['Cut for pace, built to hold attention','One look, everywhere','Built around real people','End to end, from sketch to live site'];let pi=-1;
const pin=()=>{if(!mq.matches){wl.style.transform='';pi=-1;return}
 const sec=$('#work'),r=sec.getBoundingClientRect(),len=sec.offsetHeight-innerHeight,x=Math.max(0,Math.min(1,-r.top/len))*(doors.length-1),idx=Math.round(x);
 wl.style.transform=`translateX(${-x*100}vw)`;
 if(idx!==pi){pi=idx;$('#dt').textContent=S[idx].n;$('#dsub').textContent=DS[idx];dts.forEach((d,k)=>d.classList.toggle('on',k===idx))}};
addEventListener('scroll',pin,{passive:true});addEventListener('resize',pin);pin();
document.querySelectorAll('footer [data-skill]').forEach(a=>a.onclick=e=>{e.preventDefault();goRoom(+a.dataset.skill)});
const legal=$('#legal');
const openLegal=()=>{legal.classList.add('on');legal.setAttribute('aria-hidden','false');legal.scrollTop=0;lock(true)};
const closeLegal=()=>{if(!legal.classList.contains('on'))return;legal.classList.remove('on');legal.setAttribute('aria-hidden','true');lock(false);if(location.hash==='#legal'){try{history.replaceState(null,'',location.pathname+location.search)}catch(e){}}};
$('#crl').onclick=e=>{e.preventDefault();openLegal();try{history.pushState(null,'','#legal')}catch(e){}};
$('#lb').onclick=closeLegal;
addEventListener('keydown',e=>{if(e.key==='Escape')closeLegal()});
addEventListener('hashchange',()=>{if(location.hash==='#legal')openLegal();else if(legal.classList.contains('on')){legal.classList.remove('on');legal.setAttribute('aria-hidden','true');lock(false)}});
addEventListener('popstate',()=>{if(location.hash!=='#legal'&&legal.classList.contains('on')){legal.classList.remove('on');legal.setAttribute('aria-hidden','true');lock(false)}});
if(location.hash==='#legal')openLegal();
// ---- ability card ----
(()=>{const ac=$('#ac'),c3=$('#c3d'),brn=document.querySelector('.burn'),holo=document.querySelector('.holo'),gl=document.querySelector('.glare'),cv=$('#ember'),cx2=cv.getContext('2d');
let rx=0,ry=0,tx=0,ty=0,side=0,drag=false,sx=0,sry=0,moved=0,lastTap=0,tm=[],iv=0,anim=0,ps=[];
const T=(tr)=>{c3.style.transition=tr;c3.style.transform=`translate3d(${tx}px,${ty}px,0) rotateX(${rx}deg) rotateY(${ry}deg)`;holo.style.setProperty('--hp',(20+(ry-side)*2.2)+'%');c3.style.setProperty('--sp',(120-(ry-side)*4-tx*2)+'%');c3.style.setProperty('--ang',((ry-side)*2.5+tx*1.5)%360)};
const later=(f,ms)=>tm.push(setTimeout(f,ms));
const ember=()=>{const w=cv.width=innerWidth,hh=cv.height=innerHeight;ps=Array.from({length:46},()=>({x:Math.random()*w,y:Math.random()*hh,r:Math.random()*2+.6,v:Math.random()*.4+.1,p:Math.random()*6}));
 (function d(t){cx2.clearRect(0,0,w,hh);ps.forEach(q=>{const a=.35+.35*Math.sin(t/500+q.p);cx2.fillStyle=`rgba(255,${130+q.r*20|0},50,${a})`;cx2.beginPath();cx2.arc(q.x,q.y,q.r,0,7);cx2.fill();if(!RM){q.y-=q.v;q.x+=Math.sin(t/900+q.p)*.15;if(q.y<-5){q.y=hh+5;q.x=Math.random()*w}}});if(ac.classList.contains('on'))anim=requestAnimationFrame(d)})(0)};
const open=()=>{tm.forEach(clearTimeout);tm=[];clearInterval(iv);
 $('#acimg').src=window.TINT;$('#achint').textContent=matchMedia('(hover:none)').matches?'Drag to rotate · Double-tap to flip':'Hover to tilt · Drag to rotate · Double-click to flip';
 ac.classList.remove('cardon','hinted');ac.classList.add('on');lock(true);cancelAnimationFrame(anim);ember();
 side=0;rx=0;ry=0;brn.hidden=false;brn.style.transition='none';brn.style.setProperty('--b','0px');
 if(RM){ac.classList.add('cardon','hinted');brn.hidden=true;T('none');$('#acb').style.width='100%';return}
 ry=-85;c3.style.transition='none';c3.style.transform='rotateY(-85deg) scale(.85)';$('#acb').style.width='0';$('#acp').textContent='0%';
 let p=0;iv=setInterval(()=>{p=Math.min(100,p+1+Math.floor(Math.random()*4));$('#acp').textContent=p+'%';$('#acb').style.width=p+'%';
  if(p>=100){clearInterval(iv);later(()=>{ac.classList.add('cardon');ry=0;requestAnimationFrame(()=>T('transform 1.1s cubic-bezier(.2,.8,.2,1)'));
   later(()=>{brn.style.transition='--b 2s cubic-bezier(.45,0,.75,.55)';brn.style.setProperty('--b','720px')},700);
   later(()=>{brn.hidden=true;ac.classList.add('hinted')},2900)},300)}},45)};
const close=()=>{ac.classList.remove('on','cardon','hinted');lock(false);clearInterval(iv);tm.forEach(clearTimeout);tm=[];cancelAnimationFrame(anim)};
const pic=$('#pic');pic.addEventListener('click',open);pic.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open()}});
$('#acx').onclick=close;addEventListener('keydown',e=>{if(e.key==='Escape'&&ac.classList.contains('on'))close()});
const glare=e=>{const b=c3.getBoundingClientRect();gl.style.setProperty('--gx',(e.clientX-b.left)/b.width*100+'%');gl.style.setProperty('--gy',(e.clientY-b.top)/b.height*100+'%');gl.style.setProperty('--go',1)};
c3.addEventListener('pointerdown',e=>{if(!ac.classList.contains('hinted')&&brn&&!brn.hidden)return;drag=true;moved=0;sx=e.clientX;sry=ry;c3.setPointerCapture(e.pointerId);glare(e)});
c3.addEventListener('pointermove',e=>{if(!ac.classList.contains('cardon'))return;glare(e);const b=c3.getBoundingClientRect();
 if(drag){moved=Math.max(moved,Math.abs(e.clientX-sx));ry=sry+(e.clientX-sx)*.7;rx=-((e.clientY-b.top)/b.height-.5)*12;tx=Math.max(-42,Math.min(42,(e.clientX-sx)*.18));ty=((e.clientY-b.top)/b.height-.5)*22;T('none')}
 else{rx=-((e.clientY-b.top)/b.height-.5)*18;ry=side+((e.clientX-b.left)/b.width-.5)*18;tx=((e.clientX-b.left)/b.width-.5)*34;ty=((e.clientY-b.top)/b.height-.5)*34;T('transform .15s ease-out')}});
c3.addEventListener('pointerup',e=>{if(!drag)return;drag=false;const now=Date.now();
 if(moved<6){if(now-lastTap<340){side+=180;lastTap=0}else lastTap=now}else side=Math.round(ry/180)*180;
 rx=0;tx=0;ty=0;ry=side;T('transform .8s cubic-bezier(.2,.9,.3,1.15)')});
c3.addEventListener('pointerleave',()=>{if(drag||!ac.classList.contains('cardon'))return;rx=0;tx=0;ty=0;ry=side;T('transform .6s ease-out');gl.style.setProperty('--go',0)});
})();
$('#rc').addEventListener('click',e=>{const b=e.target.closest('.snd');if(!b)return;const v=b.parentElement.querySelector('video');v.muted=!v.muted;b.textContent=v.muted?'🔇':'🔊';if(!v.muted)v.play()});
// year odometer
const yr=$('#yr'),cols=[0,1,2,3].map(()=>{const i=document.createElement('i'),e=document.createElement('em');e.innerHTML=[...'0123456789'].map(n=>`<span>${n}</span>`).join('');i.appendChild(e);yr.appendChild(i);return e});
const lis=[...document.querySelectorAll('.tl li')];
const setY=li=>{String(li.dataset.y).split('').forEach((d,i)=>cols[i].style.transform=`translateY(-${d*1.2}em)`);$('#cnt').textContent='0'+(lis.indexOf(li)+1)+' / 0'+lis.length;$('#rng').textContent=li.querySelector('.when').textContent;$('#cbar').style.width=((lis.indexOf(li)+1)/lis.length*100)+'%';lis.forEach(l=>l.classList.toggle('on',l===li));window.curLi=li;$('#story').style.setProperty('--sc',li.dataset[document.documentElement.dataset.theme==='dark'?'c':'cl'])};
setY(lis[0]);new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)setY(e.target)}),{rootMargin:'-45% 0px -45% 0px'}).observe&&lis.forEach(l=>new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)setY(l)}),{rootMargin:'-45% 0px -45% 0px'}).observe(l));
// dust
const cv=$('#dust'),cx=cv.getContext('2d');let W,Hh,P=[];const rs=()=>{W=cv.width=cv.offsetWidth;Hh=cv.height=cv.offsetHeight;P=Array.from({length:45},()=>({x:Math.random()*W,y:Math.random()*Hh,r:Math.random()*1.6+.4,v:Math.random()*.25+.05}))};rs();addEventListener('resize',rs);
(function dr(){cx.clearRect(0,0,W,Hh);cx.fillStyle=document.documentElement.dataset.theme==='dark'?'rgba(255,230,150,.45)':'rgba(120,90,40,.35)';P.forEach(q=>{cx.beginPath();cx.arc(q.x,q.y,q.r,0,7);cx.fill();if(!RM){q.y-=q.v;if(q.y<0)q.y=Hh}});if(!RM)requestAnimationFrame(dr)})();
// contact
const dlg=$('#dlg');document.querySelectorAll('[data-contact]').forEach(b=>b.onclick=()=>{$('#f').hidden=false;$('#dh').hidden=false;$('#ok').hidden=true;if(room.classList.contains('on'))room.style.zIndex=30;dlg.showModal()});
$('#dx').onclick=()=>dlg.close();dlg.addEventListener('close',()=>room.style.zIndex='');
$('#f').onsubmit=e=>{e.preventDefault();const b=encodeURIComponent(`Name: ${$('#n').value}\nEmail: ${$('#e').value}\n\n${$('#m').value}`);$('#f').hidden=true;$('#dh').hidden=true;$('#ok').hidden=false;location.href=`mailto:shubhamkangale.info@gmail.com?subject=${encodeURIComponent('New project enquiry')}&body=${b}`};
const tick=()=>{$('#clock').innerHTML='Local time <b>'+new Date().toLocaleTimeString([],{hour:'numeric',minute:'2-digit'})+'</b>'};tick();setInterval(tick,30000);
$('#cy').textContent=new Date().getFullYear();
const pg=$('#pg');addEventListener('scroll',()=>{const m=document.documentElement.scrollHeight-innerHeight;pg.textContent=String(Math.round(scrollY/m*100)).padStart(3,'0')},{passive:true});

const tl=$('#tl'),prog=()=>{const r=tl.getBoundingClientRect();tl.style.setProperty('--pr',Math.max(0,Math.min(1,(innerHeight*.5-r.top)/r.height)))};addEventListener('scroll',prog,{passive:true});prog();
const rio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');rio.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.sec h2,.proj,.final .sub').forEach(el=>{el.classList.add('rv');rio.observe(el)});
const tk2=()=>{const d=new Date();$('#date').textContent=d.toLocaleDateString([],{day:'numeric',month:'long',year:'numeric'});$('#nclock').textContent=$('#ft').textContent=d.toLocaleTimeString([],{hour:'numeric',minute:'2-digit'})};tk2();setInterval(tk2,30000);

// laptop: fit the "Magic happens behind the doors" heading to one line, as large as the width allows
(()=>{const hd=document.querySelector('#work h2');if(!hd)return;const mq=matchMedia('(min-width:761px)');
 const fit=()=>{if(!mq.matches){hd.style.fontSize='';return}
  hd.style.fontSize='100px';const r=document.createRange();r.selectNodeContents(hd);const w=r.getBoundingClientRect().width;const avail=hd.clientWidth;
  if(w>0&&avail>0)hd.style.fontSize=Math.max(36,Math.min(120,100*avail*.97/w)).toFixed(1)+'px'};
 fit();addEventListener('resize',fit);mq.addEventListener('change',fit);
 if(document.fonts){document.fonts.ready.then(fit);document.fonts.addEventListener('loadingdone',fit)}})();

// projects on phones: scrolling moves the cards sideways, like the doors
(()=>{const sec=document.getElementById('project'),tr=sec&&sec.querySelector('.pjt');if(!tr)return;const cards=[...tr.children],dots=[...sec.querySelectorAll('.pjd i')],m=matchMedia('(max-width:760px)');let cur=-1;
 const go=()=>{if(!m.matches){tr.style.transform='';cur=-1;return}
  const r=sec.getBoundingClientRect(),len=sec.offsetHeight-innerHeight,x=Math.max(0,Math.min(1,len>0?-r.top/len:0))*(cards.length-1),idx=Math.round(x);
  tr.style.transform=`translateX(${-x*100}vw)`;if(idx!==cur){cur=idx;dots.forEach((d,k)=>d.classList.toggle('on',k===idx))}};
 addEventListener('scroll',go,{passive:true});addEventListener('resize',go);m.addEventListener('change',go);go()})();
