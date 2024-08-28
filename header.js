
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