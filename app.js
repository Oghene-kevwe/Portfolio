// MAIN
const menuBtn = document.querySelector(".menu-btn > button");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");
const linksContainer = document.querySelector(".links-container");
const navLinks = document.querySelector(".links");
const footerDate = document.querySelector(".date");

// DYNAMIC DATE
const dynamicDate = new Date().getFullYear();
footerDate.textContent = dynamicDate;

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

    let position = element.offsetTop - navheight;

    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});

// profile image
const protraitBorder = document.querySelector(".profile-img-border");
const profileImgContainer = document.querySelector(".profile-img-container");

profileImgContainer.addEventListener("mouseover", () => {
  protraitBorder.style.top = "0.7rem";
  protraitBorder.style.left = "0.7rem";
});

profileImgContainer.addEventListener("mouseout", () => {
  protraitBorder.style.top = "1.2rem";
  protraitBorder.style.left = "1.2rem";
});

//  WORKS CONTENT
const workContent = [
  {
    id: 12,
    title: "Terminus",
    img: "./images/works/terminus.png",
    desc: "A fintech POS Monitoring solution for tracking transactions of a POS terminal",
    github: "#",
    livelink: "#",
    tool1: "C#",
    tool2: "JavaScript",
    tool3: "React.JS",
  },
  {
    id: 13,
    title: "CRM solution for a delivery company",
    img: "./images/works/Delivery-CRM.png",
    desc: "This is the Admin Dashboard section to manage riders, users and orders ",
    github: "https://github.com/Oghene-kevwe/CRM-BootStrap",
    livelink: "https://crmridersite.netlify.app/",
    tool1: "C#",
    tool2: "JavaScript",
    tool3: "React.JS",
  },
  {
    img: "./images/works/loveMe.jpg",
    id: 7,
    title: "Love-Me",
    desc: "Web app for generating different kinds of love letters using AI",
    github: "https://github.com/workshopapps/loveletterwriter.web",
    livelink: "https://love-me.app/",
    tool1: "C#",
    tool2: "React.js",
    tool3: "GPT-3",
  },
  {
    id: 9,
    title: "CoreInfra",
    img: "./images/works/core-Infra.png",
    desc: "Website for CoreInfra Solutions Ltd",
    github: "#",
    livelink: "https://core-infra.netlify.app/",
    tool1: "TailwindCSS",
    tool2: "JavaScript",
    tool3: "React.JS",
  },
  {
    id: 0,
    title: "KIP Store",
    img: "./images/works/KipStore.png",
    desc: "This is an ecommerce web app featuring add to cart, sorting, remove from cart and total cart items",
    github: "https://github.com/Oghene-kevwe/KIP-Store",
    livelink: "https://oghene-kevwe.github.io/KIP-Store/",
    tool1: "TailwindCSS",
    tool2: "JavaScript",
    tool3: "FakeStoreAPI",
  },
  {
    id: 15,
    title: "Sureplug",
    img: "./images/works/surePlug.jpeg",
    desc: "Mobile chat application for connecting cryptocurrency buyers ",
    github: "https://github.com/Oghene-kevwe/sureplug-clone",
    livelink: "#",
    tool1: "React Native",
    tool2: "JavaScript",
    tool3: "Supabase",
  },
  {
    id: 6,
    title: "Settlement Dashboard",
    img: "./images/works/settlementDashboard.png",
    desc: "This webapp shows a settlement dashboard for fintech",
    github: "https://github.com/Oghene-kevwe/dashboard",
    livelink: "https://settlement-db.netlify.app/",
    tool1: "TailwindCSS",
    tool2: "JavaScript",
    tool3: "React.JS",
  },
  {
    img: "./images/works/creditry.png",
    id: 8,
    title: "Creditry",
    desc: "Landing page for a financial loan B2B platform",
    github: "https://github.com/creditry",
    livelink: "https://creditry.netlify.app/",
    tool1: "TailwindCSS",
    tool2: "React.js",
    tool3: " ",
  },
  {
    id: 11,
    title: "Fredacom",
    img: "./images/works/fredacom.png",
    desc: "Website for Fredacom, a market place for buying and selling data",
    github: "#",
    livelink: "https://fredacom.com/",
    tool1: "TailwindCSS",
    tool2: "JavaScript",
    tool3: "React.JS",
  },
  {
    img: "./images/works/Deboniare.png",
    id: 10,
    title: "Debonaire",
    desc: "Website for a Hair business",
    github: "https://github.com/Oghene-kevwe/Zuri-Astro",
    livelink: "https://zurikevwe.netlify.app/",
    tool1: "TailwindCSS",
    tool2: "Astro",
    tool3: " ",
  },
  {
    img: "./images/works/May&Joh.png",
    id: 1,
    title: "Ableton",
    desc: "Recreated Ableton About page",
    github: "https://github.com/Oghene-kevwe/May-and-Joh",
    livelink: "https://oghene-kevwe.github.io/May-and-Joh/",
    tool1: "HTML",
    tool2: "CSS",
    tool3: " ",
  },
  {
    id: 5,
    title: "Musica",
    img: "./images/works/musica.jpg",
    desc: "This is a music player web app. The Top charts section changes at random. I used React for the frontend, Strapi CMS for the backend and hosted media files on cloudinary.",
    github: "https://github.com/Oghene-kevwe/musica",
    livelink: "https://musica-idise.netlify.app",
    tool1: "TailwindCSS",
    tool2: "React.JS",
    tool3: "Strapi",
  },
  {
    img: "./images/works/metaBnb.jpg",
    id: 2,
    title: "Meta BNB",
    desc: "This is a landing page for NFT hotel in the metaverse",
    github: "https://github.com/Oghene-kevwe/metabnb",
    livelink: "https://idisemetabnb.netlify.app/",
    tool1: "TailwindCSS",
    tool2: "React.js",
    tool3: " ",
  },
  {
    img: "./images/works/linktree.jpg",
    id: 3,
    title: "Link Tree",
    desc: "This is a site you can use to show your links to different online platforms",
    github: "https://github.com/Oghene-kevwe/linktree",
    livelink: "https://linktreeehng.netlify.app/",
    tool1: "TailwindCSS",
    tool2: "React.js",
    tool3: " ",
  },
  {
    img: "./images/works/ratingApp.jpg",
    id: 4,
    title: "Interactive rating app",
    desc: "This is a webapp for collecting feedbacks from customers",
    github: "https://github.com/Oghene-kevwe/Interactive-Rating-App",
    livelink: "https://oghene-kevwe.github.io/Interactive-Rating-App/",
    tool1: "TailwindCSS",
    tool2: "JavaScript",
    tool3: " ",
  },
];

const worksContainer = document.querySelector(".works-container");

worksContainer.innerHTML = workContent
  .map((item) => {
    const { title, img, desc, github, livelink, tool1, tool2, tool3 } = item;
    return `
  <div class=" work-container">
  <div class= "work-image">
  <a href="${livelink}" target="_blank">
  <img src="${img}"  alt= "${title}">
  </a>
  </div>
  <div class="work-content-container">
  <h3 class=" work-title" >${title}</h3>
  <p class="desc" >${desc}</p>
  <div class="work-link ">
    <a href="${livelink}"  target="_blank">
    <img src="./images/Social-Icons/link-icon.min.svg" class="card-icon" alt="livelink">
    </a>
    <a href="${github}" class="github" target="_blank"><img src="./images/Social-Icons/Github.min.svg" class="card-icon" alt="github link"
    /></a>
  </div>
  <div class="work-tools">
  <h1>Tools:</h1>
  <div>
    <span class="tool1">${tool1}</span>
    <span class="tool2">${tool2}</span>
    <span class="tool2">${tool3}</span>
    </div>
  </div>
  </div>
</div>
  `;
  })
  .join("");

const workContainer = document.querySelectorAll(".work-container");

workContainer.forEach((card) => {
  card.addEventListener("click", (e) => {
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
