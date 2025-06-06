// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.toggle("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));

    showMenu = true;
  } else {
    menuBtn.classList.toggle("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));

    showMenu = false;
  }
}

// Modal functionality
const modal = document.getElementById("project-modal");
const modalTitle = modal.querySelector(".modal-title");
const modalImage = modal.querySelector(".modal-image");
const closeBtn = modal.querySelector(".close-btn");
const prevBtn = modal.querySelector(".prev-btn");
const nextBtn = modal.querySelector(".next-btn");

let currentImageIndex = 0;
let images = [];

document.querySelectorAll(".projects .project-link").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const img = this.querySelector("img");
    const title = img.alt;

    const imagesAttr = this.dataset.images;
    images = imagesAttr ? imagesAttr.split(",") : [img.src];

    currentImageIndex = 0;
    updateCarouselButtons();

    modalTitle.textContent = title;
    modalImage.src = images[currentImageIndex];

    modal.style.display = "block";
  });
});

function updateCarouselButtons() {
  if (images.length > 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
}

nextBtn.addEventListener("click", function () {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  modalImage.src = images[currentImageIndex];
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
