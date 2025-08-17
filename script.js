// Año automático y mini interacciones de galería
document.getElementById('y').textContent = new Date().getFullYear();

// Delegación para cambiar la imagen principal
document.querySelectorAll('.gallery').forEach(gal => {
  const main = gal.querySelector('.main');
  gal.querySelectorAll('.thumbs img').forEach(thumb => {
    thumb.addEventListener('mouseenter', () => { main.src = thumb.src; });
    thumb.addEventListener('focus', () => { main.src = thumb.src; });
    thumb.addEventListener('click', () => { main.src = thumb.src; });
  });
});
