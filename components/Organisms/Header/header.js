export const header = () => {
  const header = document.querySelector('.Header');
  const closeSearchbar = header.querySelector('.Header-searchbar-close');
  const openSearchbar = header.querySelector('.ButtonSearch');
  const menu = header.querySelector('.Header-left-menu');
  const sidebar = document.querySelector('.Header-sidebar');
  const sidebarClose = sidebar.querySelector('.Header-sidebar-close');

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
  });
};
