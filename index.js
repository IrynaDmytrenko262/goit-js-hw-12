import{a as w,S as P,i as l}from"./assets/vendor-BGjKfUOh.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const B="53335895-4d104a908de65f21952c0d536",E="https://pixabay.com/api/";function m(t){return w.get(E,{params:{key:B,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(a=>a.data)}const p=document.querySelector(".js-btn"),f=document.querySelector(".gallery"),h=document.querySelector(".loader");let M=new P(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function g(t){const a=t.map(({webformatURL:o,largeImageURL:r,tags:e,likes:s,views:i,comments:S,downloads:q})=>`
        <li class="gallery-item">
          <a href="${r}">
            <img src="${o}" alt="${e}"/>
          </a>
          <ul class="stats">
  <li class="stats-item">
    <span class="stats-label">Likes</span>
    <span class="stats-value">${s}</span>
  </li>
  <li class="stats-item">
    <span class="stats-label">Views</span>
    <span class="stats-value">${i}</span>
  </li>
  <li class="stats-item">
    <span class="stats-label">Comments</span>
    <span class="stats-value">${S}</span>
  </li>
  <li class="stats-item">
    <span class="stats-label">Downloads</span>
    <span class="stats-value">${q}</span>
  </li>
</ul>
</li>
    `).join("");f.insertAdjacentHTML("beforeend",a),M.refresh()}function R(){f.innerHTML=""}function y(){h.classList.remove("hidden")}function L(){h.classList.add("hidden")}function b(){p.classList.remove("hidden")}function u(){p.classList.add("hidden")}const $=document.querySelector(".form"),D=document.querySelector(".js-btn"),O=15;let d,c="",n=0;$.addEventListener("submit",async t=>{if(t.preventDefault(),c=new FormData(t.target).get("search-text").trim(),c===""){l.error({message:"Please enter a search query",position:"topRight"});return}y(),R(),u(),n=1;try{const o=await m(c,n),{hits:r}=o;if(d=Math.ceil(o.totalHits/O),r.length===0){l.error({message:"No images found. Try another query.",position:"topRight"});return}g(r),v()}catch{l.error({message:"Request failed",position:"topRight"})}finally{L(),t.target.reset()}});D.addEventListener("click",async()=>{n+=1,u(),y();try{const t=await m(c,n);g(t.hits),v(),x()}catch{l.error({message:"Failed to load more images. Please try again.",position:"topRight"}),n<d&&b()}finally{L()}});function x(){const t=document.querySelector(".gallery-item");if(!t)return;const a=t.getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}function v(){n<d?b():(u(),l.info({message:"We're sorry, but you've reached the end of search results",position:"topRight"}))}
//# sourceMappingURL=index.js.map
