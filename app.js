// SELECT ELEMENTS
const menuBtn = document.querySelector(".menu-btn");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");
const linksContainer = document.querySelector(".links-container");
const navLinks = document.querySelector(".links");
const footerDate = document.querySelector(".date");

// DYNAMIC DATE
const dynamicDate = new Date().getFullYear();
footerDate.innerHTML = dynamicDate;

// MENU BTN
menuBtn.addEventListener("click", (e) => {
  main.classList.toggle("add-blur");
  footer.classList.toggle("add-blur");
  let containerHeight = linksContainer.getBoundingClientRect().height;
  let linksHeight = navLinks.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// REMOVE BLUR
main.addEventListener("click", () => {
  const bodyBlur = main.classList.contains("add-blur");
  const footerBlur = main.classList.contains("add-blur");
  if (bodyBlur && footerBlur) {
    main.classList.remove("add-blur");
    footer.classList.remove("add-blur");
    linksContainer.style.height = 0;
  }
});

// DISPLAY BACK TO TOP BUTTON AND FIXED NAV
const navBar = document.querySelector(".nav-container");
const BacktoTop = document.querySelector(".top-link");
window.addEventListener("scroll", () => {
  const navheight = navBar.getBoundingClientRect().height;
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > navheight) {
    navBar.classList.add("fixed-nav");
  } else {
    navBar.classList.remove("fixed-nav");
  }

  if (scrollHeight > 1300) {
    BacktoTop.classList.add("show-link");
  } else {
    BacktoTop.classList.remove("show-link");
  }
});

// SMOOTH SCROLL
const links = document.querySelectorAll(".links-container a");
links.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    main.classList.remove("add-blur");
    footer.classList.remove("add-blur");

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navheight = navBar.getBoundingClientRect().height;
    let containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navBar.classList.contains("fixed-nav");

    let position = element.offsetTop - navheight;

    if (navheight > 82) {
      position = position + containerHeight;
    }

    if (!fixedNav) {
      position = position - navheight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});

// ADD WORKS CONTENT
const workContent = [
  {
    id: 1,
    img: "./images/Works/Chirp.png",
    title: "Chirp",
    link: "https://github.com/Oghene-kevwe/CHIRP-LANDING-PAGE",
  },
  {
    id: 3,
    img: "./images/Works/Rating-App.png",
    title: "Rating App",
    link: "https://github.com/Oghene-kevwe/Interactive-Rating-App",
  },
  {
    id: 2,
    img: "./images/Works/Ondeck.png",
    title: "Ondeck",
    link: "https://github.com/Oghene-kevwe/ON-DECK",
  },
];

let image = document.querySelector(".work-img");
let title = document.querySelector(".work-link");
let info = document.querySelector(".work-info");

window.addEventListener("DOMContentLoaded", () => {
  showWork();
});

let currentVal = 0;
function showWork() {
  let item = workContent[currentVal];
  image.src = item.img;
  title.textContent = item.title;
  title.setAttribute("href", item.link);
}

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

prevBtn.addEventListener("click", () => {
  currentVal--;
  if (currentVal < 0) {
    currentVal = workContent.length - 1;
  }
  showWork();
});

nextBtn.addEventListener("click", () => {
  currentVal++;
  if (currentVal > workContent.length) {
    currentVal = 0;
  }
  showWork();
});

// REAVEAL ON SCROLL
window.addEventListener("scroll", reveal);
function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((item) => {
    let windowHeight = window.innerHeight;
    let revealTop = item.getBoundingClientRect().top;
    revealPoint = 100;
    if (revealTop < windowHeight - revealPoint) {
      item.classList.add("active");
    }
  });
}
