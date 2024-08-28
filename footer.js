
document.addEventListener("DOMContentLoaded", function() {
    const footerLinks = document.querySelectorAll("footer a");
    footerLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const href = link.getAttribute("href");
        window.location.href = href;
      });
    });
  });