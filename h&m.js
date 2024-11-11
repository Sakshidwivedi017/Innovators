

document.addEventListener("DOMContentLoaded", function() {
  const userIcon = document.querySelector('.redesign-of-h-m-page .user');
  const overlapBlock = document.querySelector('.redesign-of-h-m-page .overlap-6');

  userIcon.addEventListener('click', function() {
    overlapBlock.classList.toggle('show');
  });
});


// Function to toggle the side panel visibility
function toggleSidePanel() {
  const sidePanel = document.getElementById("side-panel");
  sidePanel.classList.toggle("open");
}

// Close the side panel when clicked outside of it
document.addEventListener('click', function(event) {
  const sidePanel = document.getElementById("side-panel");
  const topBar = document.querySelector(".top-bar");  // The top bar where the menu icon is
  if (!sidePanel.contains(event.target) && !topBar.contains(event.target)) {
    sidePanel.classList.remove("open");
  }
});
