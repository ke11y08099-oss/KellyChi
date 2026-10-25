/* cursor.js - a circle that follows the mouse, under the normal arrow */
(function () {
  // skip touch devices and people who prefer reduced motion
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var dot = document.createElement('div');
  dot.className = 'cursor-dot';
  document.body.appendChild(dot);
  // no "has-custom-cursor" class, so the normal arrow stays visible

  window.addEventListener('mousemove', function (e) {
    dot.style.transform = 'translate3d(' + e.clientX + 'px,' + e.clientY + 'px,0)';
    dot.classList.add('is-visible');
  });

  document.addEventListener('mouseleave', function () {
    dot.classList.remove('is-visible');
  });

  document.addEventListener('mouseover', function (e) {
    var t = e.target;
    var overImage = !!t.closest('img, video, .card-image, .moda-item');
    // small, soft dot over photos and video
    dot.classList.toggle('is-image', overImage);
    // grows over links/cards only when NOT over a photo
    dot.classList.toggle('is-hover', !overImage && !!t.closest('a, button, .btn, .card'));
  });
})();