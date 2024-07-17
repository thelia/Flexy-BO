export const userMenuButton = () => {
  const buttons = document.querySelectorAll('.UserMenuButton');

  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      button.classList.toggle('UserMenuButton--active');
    });
  });

  window.addEventListener('click', (e) => {
    if (!e.target.closest('.UserMenuButton')) {
      buttons.forEach((button) => {
        button.classList.remove('UserMenuButton--active');
      });
    }
  });
};
