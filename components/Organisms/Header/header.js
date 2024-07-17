export const header = () => {
  const header = document.querySelector('.Header');
  const closeSearchbar = header.querySelector('.Header-searchbar-close');
  const openSearchbar = header.querySelector('.ButtonSearch');
  const menu = header.querySelector('.Header-left-menu');
  const sidebar = document.querySelector('.Header-sidebar');
  const sidebarClose = sidebar.querySelector('.Header-sidebar-close');
  const sidebarTitle = sidebar.querySelector('.Header-sidebar-title');
  const sidebarBack = sidebar.querySelector('.Header-sidebar-back');
  const sidebarMenu = sidebar.querySelector('.SidebarMenu');
  const configMenu = sidebar.querySelector('.ConfigMenu');
  const langMenu = sidebar.querySelector('.LangMenu');
  const configButton = sidebar.querySelector(
    '.Header-sidebar-menus-config > .Button'
  );
  const langButton = sidebar.querySelector(
    '.Header-sidebar-menus-lang > .Button'
  );

  openSearchbar.addEventListener('click', () => {
    header.classList.add('Header-searchbar--open');
  });

  closeSearchbar.addEventListener('click', () => {
    header.classList.remove('Header-searchbar--open');
  });

  window.addEventListener('resize', () => {
    if (
      window.innerWidth < 768 ||
      (window.innerWidth > 1280 &&
        header.classList.contains('Header-searchbar--open'))
    ) {
      header.classList.remove('Header-searchbar--open');
    }

    if (window.innerWidth > 768) {
      sidebar.classList.remove('Header-sidebar--open');
    }
  });

  menu.addEventListener('click', () => {
    sidebar.classList.toggle('Header-sidebar--open');
  });

  sidebarClose.addEventListener('click', () => {
    sidebar.classList.remove('Header-sidebar--open');
    sidebarTitle.textContent = 'Menu';
    sidebarClose.classList.add('Header-sidebar-close--withoutBack');
    sidebarMenu.classList.add('SidebarMenu--open');
    configMenu.classList.remove('ConfigMenu--open');
    langMenu.classList.remove('LangMenu--open');
    sidebarBack.classList.remove('Header-sidebar-back--active');
  });

  configButton.addEventListener('click', () => {
    configMenu.classList.toggle('ConfigMenu--open');
    sidebarBack.classList.add('Header-sidebar-back--active');
    sidebarClose.classList.remove('Header-sidebar-close--withoutBack');

    sidebarTitle.textContent = 'Configuration';

    sidebarMenu.classList.remove('SidebarMenu--open');
    langMenu.classList.remove('LangMenu--open');
  });

  langButton.addEventListener('click', () => {
    langMenu.classList.toggle('LangMenu--open');
    sidebarBack.classList.add('Header-sidebar-back--active');
    sidebarClose.classList.remove('Header-sidebar-close--withoutBack');

    sidebarTitle.textContent = 'Langue';

    sidebarMenu.classList.remove('SidebarMenu--open');
    configMenu.classList.remove('ConfigMenu--open');
  });

  sidebarBack.addEventListener('click', () => {
    sidebarBack.classList.remove('Header-sidebar-back--active');
    sidebarTitle.textContent = 'Menu';

    sidebarClose.classList.add('Header-sidebar-close--withoutBack');
    sidebarMenu.classList.add('SidebarMenu--open');
    configMenu.classList.remove('ConfigMenu--open');
    langMenu.classList.remove('LangMenu--open');
  });
};
