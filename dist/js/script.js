const mobileMenuButton = document.getElementById("mobile-menu-button");
const hamburgerIcon = mobileMenuButton.querySelector("svg#hamburger-icon");
const closeIcon = mobileMenuButton.querySelector("svg#close-icon");
const mobileMenu = document.getElementById("mobile-menu");

// Event listener untuk mobile menu button
mobileMenuButton.addEventListener("click", () => {
  const expanded =
    mobileMenuButton.getAttribute("aria-expanded") === "true" || false;
  mobileMenuButton.setAttribute("aria-expanded", !expanded);
  mobileMenu.classList.toggle("hidden");
  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

// Event listener untuk dokumen
document.addEventListener("click", (event) => {
  const isClickInsideMobileMenu = mobileMenu.contains(event.target);
  const isClickInsideMobileMenuButton = mobileMenuButton.contains(event.target);

  // Jika klik diluar kotak mobile menu dan mobile menu button, sembunyikan mobile menu
  if (!isClickInsideMobileMenu && !isClickInsideMobileMenuButton) {
    mobileMenu.classList.add("hidden");
    mobileMenuButton.setAttribute("aria-expanded", false);
    hamburgerIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  }
});

// border Navbar while Scrolling
const navbar = document.querySelector("nav");
let scrollPosition = 0;

window.addEventListener("scroll", () => {
  scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    navbar.classList.add("scroll-border");
  } else {
    navbar.classList.remove("scroll-border");
  }
});
// border navbar end

// percbaan btn like
// Dapatkan referensi ke elemen ikon
const heartIcon = document.getElementById("heartIcon");

// Tambahkan event listener untuk mengubah ikon saat diklik
// heartIcon.addEventListener("click", () => {
//   // Toggle kelas "fa-regular" dan "fa-solid" untuk mengubah ikon
//   heartIcon.classList.toggle("fa-regular");
//   heartIcon.classList.toggle("fa-solid");

//   // Toggle kelas "active" untuk memulai animasi
//   heartIcon.classList.toggle("active");

//   // Toggle style "color: #ec1f09;" untuk mengubah warna ikon saat berubah
//   heartIcon.style.color = heartIcon.classList.contains("fa-solid") ? "#ec1f09" : "";
// });
// percbaan btn like end
