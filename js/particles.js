document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#66ffff',
    lineColor: '#99ccff',
    maxSpeedX: 0.5,
    maxSpeedY: 0.5,
    density: 11000,
    particleRadius: 8,
    proximity: 120,
    parallaxMultiplier: 6
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);
