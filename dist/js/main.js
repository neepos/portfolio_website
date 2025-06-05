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
  item.addEventListener("click", function () {
    const img = this.querySelector("img");
    const title = img.alt;
    let description = "Description for " + title;

    if (title === "evSkiClub") {
      description = `evSkiClub is a React-based web application for a private ski club in Ellicottville, NY. Members can log in to manage their accounts, view club events, and stay up to date on announcements. The site features a clean, responsive UI and includes admin tools for handling invitations, payments, and permissions. I built this from scratch using the MERN stack to give the club an easy-to-maintain platform that feels fast and modern.

Tech Stack:
- Frontend: React, Redux, Bootstrap 5
- Backend: Node.js, Express, MongoDB
- Auth: JWT-based login and user role handling
- Hosting: Deployed on Vercel with serverless functions for contact and notification logic`;

      images = [
        img.src,
        "img/projects/evskiclub_project.png",
        "img/projects/evskiclub_login.png",
        "img/projects/evskiclub_gallery.png",
        "img/projects/evskiclub_events.png",
        "img/projects/evskiclub_calendar.png",
        "img/projects/evskiclub_editmember.png"
      ];
    } else if (title === "webCharms") {
      description = `webCHARMS is a browser-based application I built for law enforcement and municipal users to search, review, and report on booking and incident records. It’s designed to be fast, clean, and easy to use—something that works just as well in the field as it does behind a desk.

Users log in with agency credentials and can run detailed searches using a flexible form with filters for names, dates, physical descriptions, charges, and more. The results are fast and readable, with options to view full booking records, mugshots, arrest information, and related incident details. They can also generate reports—Booking Summaries, RAP Sheets, Arrest Logs—as PDFs right from the app.

Behind the interface, the app uses a modular form-loading system and a secure API to keep everything responsive and maintainable. The goal was to build a system that didn’t get in its own way—a focused, reliable tool that helps people do their jobs without making it harder.

Tech Stack:
- Frontend: TMS WEB Core (compiled Pascal), Bootstrap 5
- Backend: Delphi with TMS XData, PostgreSQL via UniDAC
- Authentication: JWT-based login and session handling
- Reporting: FastReports for on-demand PDF generation
- Deployment: Self-hosted app served with the XData server`;

      images = [
        img.src,
        "img/projects/evskiclub_project2.png",
        "img/projects/evskiclub_project3.png"
      ];
    } else {
      images = [img.src];
    }

    currentImageIndex = 0;
    updateCarouselButtons();

    modalTitle.textContent = title;
    modalImage.src = images[currentImageIndex];
    modalDescription.innerHTML = description.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>');

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
