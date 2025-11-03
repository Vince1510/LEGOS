document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const body = document.body;

  const toggleDrawer = () => {
    hamburger.classList.toggle("is-active");
    navLinks.classList.toggle("is-active");
    body.classList.toggle("drawer-open");
  };

  document.addEventListener("click", (e) => {
    const isDrawerOpen = body.classList.contains("drawer-open");

    // Toggle drawer if hamburger is clicked
    if (e.target.closest(".hamburger")) {
      toggleDrawer();
    } else if (isDrawerOpen) {
      // If the drawer is open, close it if a link is clicked OR if the click is outside the drawer.
      if (e.target.closest(".nav-links a") || !e.target.closest(".nav-links")) {
        toggleDrawer();
      }
    }
  });
});
