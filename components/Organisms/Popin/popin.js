export const popin = () => {
  document.querySelectorAll('.Popin').forEach((popin) => {
    popin.querySelector('.Popin-close').addEventListener('click', () => {
      popin.classList.remove('Popin--open');
    });
  });

  document.querySelectorAll('.popin-trigger').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      console.log(trigger);
      const popin = document.querySelector(`#${trigger.dataset.popinId}`);

      popin.classList.add('Popin--open');
    });
  });
};
