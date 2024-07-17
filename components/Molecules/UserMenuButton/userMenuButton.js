export const userMenuButton = () => {
  const buttons = document.querySelectorAll('.UserMenuButton');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      button.classList.toggle('UserMenuButton--active');
    });
  });
};
