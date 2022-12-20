// MAIN
const menuBtn = document.querySelector(".menu-btn");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");
const linksContainer = document.querySelector(".links-container");
const navLinks = document.querySelector(".links");
const footerDate = document.querySelector(".date");

// menu btn
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

// remove blur
main.addEventListener("click", () => {
  const bodyBlur = main.classList.contains("add-blur");
  const footerBlur = main.classList.contains("add-blur");
  if (bodyBlur && footerBlur) {
    main.classList.remove("add-blur");
    footer.classList.remove("add-blur");
    linksContainer.style.height = 0;
  }
});

// display back to top btn and add fixed nav
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

// smooth scroll
const links = document.querySelectorAll(".link");
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

// profile image
const protraitBg = document.querySelector(".profile-img-bg");
const protraitBorder = document.querySelector(".profile-img-border");
const profileImgContainer = document.querySelector(".profile-img-container");

profileImgContainer.addEventListener("mouseover", () => {
  protraitBg.style.opacity = 0;
  protraitBorder.style.top = "0.7rem";
  protraitBorder.style.left = "0.7rem";
});

profileImgContainer.addEventListener("mouseout", () => {
  protraitBg.style.opacity = 0.5;
  protraitBorder.style.top = "1.2rem";
  protraitBorder.style.left = "1.2rem";
});

//  WORKS CONTENT
const workContent = [
  {
    id: 0,
    title: "KIP Store",
    desc: "This is an ecommerce store pulling data from an API",
    img: "./images/Works/KIP-store.png",
    github: "https://github.com/Oghene-kevwe/KIP-Store",
    livelink: "https://oghene-kevwe.github.io/KIP-Store/",
    tool1: "TailwindCss",
    tool2: "JavaScript",
  },
  {
    id: 1,
    title: "Love-Me",
    desc: "I worked as a contributor on this project. It is a web app for generating different kinds of love letters using AI",
    img: "./images/Works/KIP-store.png",
    github: "https://github.com/workshopapps/loveletterwriter.web",
    livelink: "https://love-me.app/",
    tool1: "TailwindCss",
    tool2: "React.js",
  },
  {
    id: 2,
    title: "Meta BNB",
    desc: "This is a landing page for NFT hotel in the metaverse",
    img: "./images/Works/metabnb.png",
    github: "https://github.com/Oghene-kevwe/metabnb",
    livelink: "https://idisemetabnb.netlify.app/",
    tool1: "TailwindCss",
    tool2: "React.js",
  },
  {
    id: 3,
    title: "Link Tree",
    desc: "This is a site you can use to show your links to different online platforms",
    img: "./images/Works/linktree.png",
    github: "https://github.com/Oghene-kevwe/linktree",
    livelink: "https://linktreeehng.netlify.app/",
    tool1: "TailwindCss",
    tool2: "React.js",
  },
  {
    id: 4,
    title: "Interactive rating app",
    desc: "This is a webapp for collecting feedbacks from customers",
    img: "./images/Works/interactive-app.png",
    github: "https://github.com/Oghene-kevwe/Interactive-Rating-App",
    livelink: "https://oghene-kevwe.github.io/Interactive-Rating-App/",
    tool1: "TailwindCss",
    tool2: "JavaScript",
  },
];

const worksContainer = document.querySelector(".works-container");

worksContainer.innerHTML = workContent
  .map((item) => {
    const { title, desc, github, livelink, tool1, tool2 } = item;
    return `
  <div class=" work-container">
  <h3 class=" work-title" >${title}</h3>
  <p class="desc" >${desc}</p>
  <div class="work-link ">
    <a href="${livelink}"  target="_blank">
    <img src="./images/Social Icons/link-icon.min.svg" class="card-icon" alt="livelink">
    </a>
    <a href="${github}" class="github" target="_blank"><img src="./images/Social Icons/Github.min.svg" class="card-icon" alt="github link"
    /></a>
  </div>
  <div class="work-tools">
    <span class="tool1">${tool1}</span>
    <span class="tool2">${tool2}</span>
  </div>
</div>
  `;
  })
  .join("");

const workContainer = document.querySelectorAll(".work-container");

workContainer.forEach((card) => {
  card.addEventListener("click", (e) => {
    const cardLink = e.currentTarget.children[2].firstElementChild.href;
    if (!e.target.classList.contains("card-icon")) {
      window.open(cardLink);
    }
    card.classList.add("move-up");
    card.firstElementChild.style.color = "#a3e635";

    workContainer.forEach((item) => {
      if (item !== card) {
        item.classList.remove("move-up");
        item.firstElementChild.style.color = "#eaebef";
      }
    });
  });
});
