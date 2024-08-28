
document.addEventListener("DOMContentLoaded", function() {
    const navMenu = document.querySelector("nav ul");
    navMenu.addEventListener("click", function(event) {
      if (event.target.tagName === "A") {
        event.preventDefault();
        const href = event.target.getAttribute("href");
        window.location.href = href;
      }
    });
  });
  
  
  document.addEventListener("DOMContentLoaded", function() {
    const heroBannerButtons = document.querySelectorAll(".hero-banner button");
    heroBannerButtons.forEach(function(button) {
      button.addEventListener("click", function(event) {
        event.preventDefault();
        const href = button.getAttribute("href");
        window.location.href = href;
      });
    });
  });
  
