const PROFILE_DATA={name:"Navvora Telugu",handle:"@navvoratelugu"};
const SOCIAL_LINKS=[
 {title:"Instagram",name:"Navvora Telugu",icon:"◎",accent:"#e1306c",desc:"🎬 Telugu Cinema, One Clip at a Time 🔥 Latest Movie Scenes, Song Clips, Trending Moments & Cinematic Edits.",cta:"Follow on Instagram",url:"https://www.instagram.com/navvoratelugu/"},
 {title:"YouTube",name:"Navvora Telugu",icon:"▶",accent:"#ff3040",desc:"🎬 Telugu Cinema, One Clip at a Time 🔥 Latest Movie Scenes, Song Clips, Trending Moments & Cinematic Edits. 🍿 New Releases • 🎵 Songs • ⚡ Viral Scenes • ❤️ TFI Vibes.",cta:"Watch on YouTube",url:"https://www.youtube.com/@navvora"},
 {title:"Telegram",name:"Navvora Telugu",icon:"➤",accent:"#2aa7df",desc:"🎬 Welcome to the Navvora Telugu! 🔥 Latest Telugu Movies, Web Series, OTT releases, trending titles & evergreen classics — everything cinema lovers need in one place.",cta:"Join Telegram",url:"https://t.me/navvoratelugu"},
 {title:"Facebook",name:"Navvora Telugu",icon:"f",accent:"#1877f2",desc:"🎬 Telugu Cinema, One Clip at a Time 🔥 Latest Movie Scenes, Song Clips, Trending Moments & Cinematic Edits. 🍿 New Releases • 🎵 Songs • ⚡ Viral Scenes • ❤️ TFI Vibes.",cta:"Follow on Facebook",url:"https://www.facebook.com/navvoratelugu/"}
];

const galleryData=[
 ["Heroes","Add TFI Image"],["Heroines","Add TFI Image"],["Directors","Add TFI Image"],
 ["Music","Add TFI Image"],["Upcoming Movies","Add TFI Image"],["Iconic Cinema","Add TFI Image"]
];
const placeholderCards=[
 ["Movie Spotlight","Movie poster / title goes here","Add movie data here."],
 ["Viral Scene","Trending movie moment","Add verified content here."],
 ["Song Clip","Latest cinematic sound","Add verified content here."]
];
const latestData=[["LATEST REEL","Add reel thumbnail","Add your latest reel title."],["LATEST VIDEO","Add video thumbnail","Add your latest YouTube video."],["LATEST UPDATE","Add update thumbnail","Add your latest cinema update."]];

const $=s=>document.querySelector(s);
const socialGrid=$("#socialGrid");
SOCIAL_LINKS.forEach(s=>socialGrid.insertAdjacentHTML("beforeend",`<article class="social-card glass" style="--accent:${s.accent}"><span class="arrow">↗</span><div class="social-icon">${s.icon}</div><h3>${s.title}</h3><span class="username">${s.name} • @navvoratelugu</span><p>${s.desc}</p><a class="card-cta" href="${s.url}" target="_blank" rel="noopener">${s.cta} ↗</a></article>`));

function renderFeature(containerId,data){
 const el=$("#"+containerId);
 data.forEach(x=>el.insertAdjacentHTML("beforeend",`<article class="feature-card"><div class="feature-art"></div><div class="feature-content"><small>${x[0]}</small><h3>${x[1]}</h3><p>${x[2]}</p></div></article>`));
}
renderFeature("movies",placeholderCards); renderFeature("trending",placeholderCards);

const gallery=$("#gallery");
galleryData.forEach((x,i)=>gallery.insertAdjacentHTML("beforeend",`<article class="gallery-card"><div class="fake-art"></div><div class="gallery-overlay"><strong>${x[1]}</strong><small>${x[0]}</small></div></article>`));

const latest=$("#latest");
latestData.forEach(x=>latest.insertAdjacentHTML("beforeend",`<article class="latest-card glass"><div><small class="eyebrow">${x[0]}</small><h3>${x[1]}</h3><p>${x[2]}</p></div><span>↗</span></article>`));

const toast=$("#toast");
function showToast(msg){toast.textContent=msg;toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),1800)}
function openShare(){ $("#shareModal").classList.add("open");$("#shareModal").setAttribute("aria-hidden","false")}
function closeShare(){ $("#shareModal").classList.remove("open");$("#shareModal").setAttribute("aria-hidden","true")}
$("#shareBtn").onclick=openShare;$("#shareHero").onclick=openShare;$("#closeShare").onclick=closeShare;$("#closeShareBtn").onclick=closeShare;
$("#nativeShare").onclick=async()=>{if(navigator.share){try{await navigator.share({title:"Navvora Telugu",text:"Telugu Cinema, One Clip at a Time",url:location.href})}catch{}}else showToast("Share is not supported here")};
$("#copyLink").onclick=async()=>{try{await navigator.clipboard.writeText(location.href);showToast("Link copied ✓")}catch{showToast("Copy failed")}};

window.addEventListener("scroll",()=>$("#backTop").classList.toggle("show",scrollY>600));
$("#backTop").onclick=()=>scrollTo({top:0,behavior:"smooth"});

document.querySelectorAll(".social-card").forEach(card=>{
 card.addEventListener("mousemove",e=>{const r=card.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(900px) rotateX(${-y*4}deg) rotateY(${x*4}deg) translateY(-7px)`});
 card.addEventListener("mouseleave",()=>card.style.transform="");
});

for(let i=0;i<28;i++){const p=document.createElement("i");p.className="particle";p.style.left=Math.random()*100+"%";p.style.top=(70+Math.random()*50)+"%";p.style.animationDuration=(8+Math.random()*14)+"s";p.style.animationDelay=(-Math.random()*12)+"s";$("#particles").appendChild(p)}

window.addEventListener("load",()=>setTimeout(()=>$("#loader").classList.add("done"),850));
