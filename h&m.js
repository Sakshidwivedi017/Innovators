document.addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.querySelector('.align-justify');
  const menuBlock = document.querySelector('.group-9');

  menuIcon.addEventListener('click', function() {
    menuBlock.classList.toggle('show');
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const userIcon = document.querySelector('.redesign-of-h-m-page .user');
  const overlapBlock = document.querySelector('.redesign-of-h-m-page .overlap-6');

  userIcon.addEventListener('click', function() {
    overlapBlock.classList.toggle('show');
  });
});


