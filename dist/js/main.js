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
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));

    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
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
const modalDescription = modal.querySelector(".modal-description");
const closeBtn = modal.querySelector(".close-btn");
const prevBtn = modal.querySelector(".prev-btn");
const nextBtn = modal.querySelector(".next-btn");

let currentImageIndex = 0;
let images = [];

document.querySelectorAll(".projects .item").forEach(item => {
  item.addEventListener("click", function() {
    const img = this.querySelector("img");
    const title = img.alt;
    let description = "Description for " + title; // Default description

    // Specific description for Ellicottville Ski Club
    if (title === "evSkiClub") {
      description = "The Ellicottville Ski Club website was designed using the MERN stack and React Redux. It features a dynamic and responsive interface that allows users to explore ski club activities, membership details, and event schedules.";

      // Set images array for the Ellicottville Ski Club project
      images = [
        img.src, // First image
        "img/projects/evskiclub_project2.png", // Second image
        "img/projects/evskiclub_project3.png"  // Third image
        // Add more image URLs as needed
      ];
    } else {
      // Default to a single image if no specific images are set
      images = [img.src];
    }

    currentImageIndex = 0;
    updateCarouselButtons();

    modalTitle.textContent = title;
    modalImage.src = images[currentImageIndex];
    modalDescription.textContent = description;

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

nextBtn.addEventListener("click", function() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  modalImage.src = images[currentImageIndex];
});

closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
