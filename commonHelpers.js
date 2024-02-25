import{i as c,S as d}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();const u="42557363-2349d8dc8525cd1cea516a01b",p="https://pixabay.com/api/",m="";function f(r){const s=new URLSearchParams({key:u,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),i=`${p}${m}?${s}`;return fetch(i).then(o=>o.json()).catch(o=>{console.error("Error fetching data:",o)})}function y(r,s){if(r.hits.length===0)c.error({title:"",backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});else{const i={captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animation:250,widthRatio:.9,scaleImageToRatio:!0},o=r.hits.map(e=>`
              <li class="gallery-item">
                  <a href="${e.webformatURL}" class="image-link">
                      <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}">
                  </a>
                  <div class="comments">
                      <div class="desc">
                          <p class="label">Likes</p>
                          <p class="value">${e.likes}</p>
                      </div>
                      <div class="desc">
                          <p class="label">Views</p>
                          <p class="value">${e.views}</p>
                      </div>
                      <div class="desc">
                          <p class="label">Comments</p>
                          <p class="value">${e.comments}</p>
                      </div>
                      <div class="desc">
                          <p class="label">Downloads</p>
                          <p class="value">${e.downloads}</p>
                      </div>
                  </div>
              </li>
              `).join("");s.insertAdjacentHTML("afterbegin",o),new d(".gallery a",i).refresh(),form.reset()}}const g=document.querySelector("#form"),a=document.querySelector(".loader"),l=document.querySelector(".gallery");a.style.display="none";document.addEventListener("DOMContentLoaded",()=>{g.addEventListener("submit",r=>{r.preventDefault();const s=document.getElementById("search").value.trim();s&&(a.style.display="inline-block",l.innerHTML="",f(s).then(i=>y(i,l)).finally(()=>{a.style.display="none"}))})});
//# sourceMappingURL=commonHelpers.js.map
