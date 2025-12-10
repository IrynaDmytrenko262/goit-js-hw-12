import{a as w,S as B,i as c}from"./assets/vendor-BGjKfUOh.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();async function p(t,r=1){const o="53335895-4d104a908de65f21952c0d536",a="https://pixabay.com/api/",e={key:o,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15};try{return(await w.get(a,{params:e})).data}catch(s){return console.error("Помилка при запиті до Pixabay:",s),{hits:[],totalHits:0}}}const m=document.querySelector(".js-btn"),h=document.querySelector(".gallery"),y=document.querySelector(".loader");let n=null;function g(t){const r=t.map(({webformatURL:o,largeImageURL:a,tags:e,likes:s,views:l,comments:S,downloads:q})=>`
        <li class="gallery-item">
          <a href="${a}">
            <img src="${o}" alt="${e}"/>
          </a>
          <ul class="stats">
            <li class="stats-item">
              <span class="stats-label">Likes</span>
              <span class="stats-value">${s}</span>
            </li>
            <li class="stats-item">
              <span class="stats-label">Views</span>
              <span class="stats-value">${l}</span>
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
    `).join("");h.insertAdjacentHTML("beforeend",r),n&&n.destroy(),n=new B(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"}),n.refresh()}function E(){h.innerHTML="",n&&(n.destroy(),n=null)}function L(){y.classList.remove("hidden")}function b(){y.classList.add("hidden")}function v(){m.classList.remove("hidden")}function d(){m.classList.add("hidden")}const M=document.querySelector(".form"),R=document.querySelector(".js-btn"),$=15;let f=0,u="",i=0;M.addEventListener("submit",async t=>{if(t.preventDefault(),u=new FormData(t.target).get("search-text").trim(),!u){c.error({message:"Please enter a search query",position:"topRight"});return}L(),E(),d(),i=1;try{const o=await p(u,i),{hits:a,totalHits:e}=o;if(f=Math.ceil(e/$),a.length===0){c.error({message:"No images found. Try another query.",position:"topRight"});return}g(a),P()}catch(o){c.error({message:"Request failed. Please try again.",position:"topRight"}),console.error(o)}finally{b(),t.target.reset()}});R.addEventListener("click",async()=>{i+=1,d(),L();try{const t=await p(u,i);t.hits.length>0&&(g(t.hits),P(),D())}catch(t){c.error({message:"Failed to load more images. Please try again.",position:"topRight"}),console.error(t),i<f&&v()}finally{b()}});function D(){const t=document.querySelector(".gallery-item");if(!t)return;const r=t.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}function P(){i<f?v():(d(),c.info({message:"We're sorry, but you've reached the end of search results",position:"topRight"}))}
//# sourceMappingURL=index.js.map
