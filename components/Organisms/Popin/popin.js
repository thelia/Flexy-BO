export const popin = () => {
  const popins = document.querySelectorAll('.Popin');
  const popinOverlay = document.querySelector('.Popin-overlay');

  let startY = 0;
  let currentY = 0;
  let dragging = false;

  popinOverlay.addEventListener('click', () => {
    popins.forEach((popin) => {
      popin.classList.remove('Popin--open');
    });
  });

  document.querySelectorAll('.popin-trigger').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const popin = document.querySelector(`#${trigger.dataset.popinId}`);

      popin.classList.add('Popin--open');
    });
  });

  popins.forEach((popin) => {
    popin.querySelector('.Popin-close').addEventListener('click', () => {
      popin.classList.remove('Popin--open');
    });

    popin.addEventListener('touchstart', function (event) {
      startY = event.touches[0].clientY;
      dragging = true;
      popin.classList.add('dragging');
    });

    popin.addEventListener('touchmove', function (event) {
      if (dragging && window.innerWidth <= 768) {
        currentY = event.touches[0].clientY;
        if (currentY - startY > 100) {
          // Threshold for closing
          popin.classList.remove('Popin--open');
        }
      }
    });

    popin.addEventListener('touchend', function () {
      dragging = false;
      popin.classList.remove('dragging');
    });

    // Mouse events for desktop devices
    popin.addEventListener('mousedown', function (event) {
      startY = event.clientY;
      dragging = true;
      popin.classList.add('dragging');
    });

    popin.addEventListener('mousemove', function (event) {
      if (dragging && window.innerWidth <= 768) {
        currentY = event.clientY;
        if (currentY - startY > 100) {
          // Threshold for closing
          popin.classList.remove('Popin--open');
        }
      }
    });

    popin.addEventListener('mouseup', function () {
      dragging = false;
      popin.classList.remove('dragging');
    });

    popin.addEventListener('mouseleave', function () {
      dragging = false;
      popin.classList.remove('dragging');
    });
  });
};
