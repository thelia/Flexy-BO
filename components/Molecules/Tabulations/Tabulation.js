document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.Tab');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        if (!tab.classList.contains('disabled')) {
          tabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
        }
      });
    });
  });
  