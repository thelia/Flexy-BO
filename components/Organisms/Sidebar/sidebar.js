export const sidebar = () => {
  const buttons = document.querySelectorAll('.Sidebar-menu .MainMenuButton');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const isSelected = button.classList.contains('MainMenuButton--selected');
      const hasSubMenus = button.classList.contains(
        'MainMenuButton--hasSubMenus'
      );
      const subMenus = button.nextElementSibling;

      buttons.forEach((b) => {
        if (b !== button) {
          b.classList.remove('MainMenuButton--selected');
          if (b.classList.contains('MainMenuButton--hasSubMenus')) {
            const bSubMenus = b.nextElementSibling;
            if (bSubMenus) {
              bSubMenus.classList.remove('Sidebar-menu-item-submenu--open');
              b.querySelector('.MainMenuButton-minus').classList.add('hidden');
              b.querySelector('.MainMenuButton-plus').classList.remove(
                'hidden'
              );
            }
          }
        }
      });

      button.classList.toggle('MainMenuButton--selected', !isSelected);

      if (hasSubMenus && subMenus) {
        subMenus.classList.toggle(
          'Sidebar-menu-item-submenu--open',
          !isSelected
        );

        button
          .querySelector('.MainMenuButton-plus')
          .classList.toggle('hidden', !isSelected);

        button
          .querySelector('.MainMenuButton-minus')
          .classList.toggle('hidden', isSelected);
      }
    });
  });
};
