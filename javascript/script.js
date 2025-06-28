$(document).on('mousemove', function(e) {
  const winW = $(window).width();
  const winH = $(window).height();

  const mouseX = e.pageX;
  const mouseY = e.pageY;

  const mouseXpercentage = (mouseX / winW) * 100;
  const mouseYpercentage = (mouseY / winH) * 100;

  // Distanza dal centro
  const dx = mouseX - winW / 2;
  const dy = mouseY - winH / 2;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const maxDistance = Math.sqrt((winW / 2) ** 2 + (winH / 2) ** 2);

  // Invertiamo la logica: più vicino al centro = raggio maggiore
  const minRadius = 100;
  const maxRadius = 800;
  const invertedFactor = 1 - (distance / maxDistance); // vicino al centro → 1, ai bordi → 0
  const radius = minRadius + (invertedFactor * (maxRadius - minRadius));

  // Sfondo per .radial-gradient
  $('.radial-gradient').css({
    'background': 
      'radial-gradient(circle ' + radius + 'px at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, black, transparent), ' +
      'url(https://grainy-gradients.vercel.app/noise.svg)',
    'filter': 'contrast(370%) brightness(300%)'
  });

  // Sfondo per .radial-gradient-dark (puoi cambiare i parametri se vuoi differenziarli)
  $('.radial-gradient-dark').css({
    'background': 
      'radial-gradient(circle ' + radius + 'px at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, black, transparent), ' +
      'url(https://grainy-gradients.vercel.app/noise.svg)',
    'filter': 'contrast(370%) brightness(300%)'
  });
});

