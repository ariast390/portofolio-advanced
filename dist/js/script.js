const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

// Event listener untuk mobile menu button
mobileMenuButton.addEventListener("click", () => {
  const expanded = mobileMenuButton.getAttribute("aria-expanded") === "true" || false;
  mobileMenuButton.setAttribute("aria-expanded", !expanded);
  mobileMenu.classList.toggle("hidden");
});

// Event listener untuk dokumen
document.addEventListener("click", (event) => {
  const isClickInsideMobileMenu = mobileMenu.contains(event.target);
  const isClickInsideMobileMenuButton = mobileMenuButton.contains(event.target);

  // Jika klik diluar kotak mobile menu dan mobile menu button, sembunyikan mobile menu
  if (!isClickInsideMobileMenu && !isClickInsideMobileMenuButton) {
    mobileMenu.classList.add("hidden");
    mobileMenuButton.setAttribute("aria-expanded", false);
  }
});

// border Navbar while Scrolling
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    navbar.classList.add("scroll-border");
  } else {
    navbar.classList.remove("scroll-border");
  }
});
// border navbar end