const socialButton = document.getElementById('social-button');
const socialIconsContainer = document.querySelector('.social-icons-container');

socialButton.addEventListener('click', () => {
  socialIconsContainer.classList.toggle('show');
});

// alert('Hello World');