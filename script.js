// Carga automática del video si existe en /public/video/Hero.mp4
(function loadHeroVideo(){
  const video = document.querySelector('.hero__video');
  if(!video) return;
  fetch('public/video/Hero.mp4', {method:'HEAD'})
    .then(r => { if(r.ok) video.src = 'public/video/Hero.mp4'; })
    .catch(()=>{});
})();

// Galería: hover/click en miniaturas -> reemplaza imagen principal
function wireGallery(thumbsEl){
  const targetId = thumbsEl.dataset.target;
  const mainImg  = document.getElementById(targetId);
  if(!mainImg) return;
  thumbsEl.querySelectorAll('img').forEach(img=>{
    const set = () => { mainImg.src = img.src; mainImg.alt = img.alt || ''; };
    img.addEventListener('mouseenter', set);
    img.addEventListener('click', set);
  });
}
document.querySelectorAll('.gallery__thumbs').forEach(wireGallery);

// Smooth scroll
document.querySelectorAll('.nav a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    const el = document.querySelector(a.getAttribute('href'));
    if(el) el.scrollIntoView({behavior:'smooth'});
  });
});