document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
  // Abrir / Cerrar al tocar el botón hamburguesa
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navMenu.classList.toggle('active');
  });

  // Cerrar el menú automáticamente al tocar cualquier enlace
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navMenu.classList.remove('active');
    });
  });
}

const screenshotDialog = document.querySelector('.screenshot-dialog');
const screenshotDialogImage = document.querySelector('.screenshot-dialog-img');

if (screenshotDialog instanceof HTMLDialogElement && screenshotDialogImage instanceof HTMLImageElement) {
  document.querySelectorAll('.screenshot-button').forEach(button => {
    button.addEventListener('click', () => {
      const image = button.querySelector('img');
      if (!image) return;

      screenshotDialogImage.src = image.src;
      screenshotDialogImage.alt = image.alt;
      screenshotDialog.showModal();
    });
  });

  screenshotDialog.querySelector('.screenshot-dialog-close')?.addEventListener('click', () => {
    screenshotDialog.close();
  });

  screenshotDialog.addEventListener('click', event => {
    if (event.target === screenshotDialog) screenshotDialog.close();
  });

  screenshotDialog.addEventListener('cancel', () => {
    screenshotDialog.close();
  });
}