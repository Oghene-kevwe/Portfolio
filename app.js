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
  const scrollHeight = window.scrollY;

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

const workContent = [
  {
    id: 21,
    title: "Qurexa",
    desc: "Engineered the complete backend infrastructure for Qurexa, covering API design, authentication, data modeling, and production deployment.",
    github: "#",
    livelink: "https://qurexa.co.uk",
    tools: ["Node", "Express", "MongoDB","AWS"],
  },
  {
    id: 18,
    title: "PayInfra",
    desc: "Developed a payment infrastructure and loyalty system for a franchise",
    github: "#",
    livelink: "#",
    tools: ["React", "ASP.NET", "SQL Server"],
  },
  {
    id: 12,
    title: "Terminus",
    desc: "Built a fintech POS monitoring solution for tracking transactions and performance of POS terminals.",
    github: "https://github.com/Oghene-kevwe/PavilionPOSMerchantWebApp",
    livelink: "https://pavilion-dev.netlify.app/login",
    tools: ["React", "ASP.NET", "SQL Server"],
  },
  {
    id: 20,
    title: "504 Driving School",
    desc: "Developed a platform for managing student bookings, classes, and courses for 504 Driving School.",
    github: "#",
    livelink: "https://504driving.netlify.app",
    tools: ["React", "ASP.NET", "SQL Server"],
  },
  {
    id: 13,
    title: "CRM solution for Legal Drop",
    desc: "Built an admin platform for managing riders, users, and orders for Legal Drop.",
    github: "https://github.com/Oghene-kevwe/CRM-BootStrap",
    livelink: "https://legaldrop.ca/",
    tools: ["Node.js", "React", "Typescript", "Google Maps API"],
  },
  {
    id: 19,
    title: "The Delivery Ease Logistics",
    desc: "Rebuilt and optimized the backend for The Delivery Ease Logistics. Added real-time tracking with Google Maps API and refined the React frontend.",
    github: "#",
    livelink: "https://thedeliveryeaselogistics.com",
    tools: ["React", "Laravel", "MySQL", "Google Maps API", "AWS"],
  },
  {
    id: 9,
    title: "CoreInfra",
    desc: "Built the official website for CoreInfra Solutions Ltd.",
    github: "#",
    livelink: "https://coreinfrahq.com/",
    tools: ["React", "TailwindCSS"],
  },
  {
    id: 7,
    title: "Love-Me",
    desc: "Web app for generating different kinds of love letters using GPT-3",
    github: "https://github.com/workshopapps/loveletterwriter.web",
    livelink: "https://love-me.app/",
    tools: ["React", "Node.js", "OpenAI API"],
  },
  {
    id: 16,
    title: "Log Analyzer",
    desc: "C# Library API for analyzing and sorting log files ",
    github: "https://github.com/Oghene-kevwe/LogAnalyzerLibrary",
    livelink:
      "https://documenter.getpostman.com/view/27915658/2sAYQXpDao#intro",
    tools: ["C#", "ASP.NET", "Postman"],
  },
  {
    id: 17,
    title: "Kip Restaurant",
    desc: "Developed a backend web app for managing restaurant orders, users, and menu items",
    github: "https://github.com/Oghene-kevwe/KIP-Restaurant",
    livelink: "#",
    tools: ["ASP.NET", "SQL Server"],
  },
  {
    id: 14,
    title: "Medical Advance Platform",
    desc: "Developed a Quote Dashboard demonstrating the UX flow for quote responses.",
    github: "https://github.com/Oghene-kevwe/MAP-interview-project",
    livelink: "https://medicaladvancedplatform.netlify.app/",
    tools: ["React", "TailwindCSS"],
  },
  {
    id: 0,
    title: "KIP Store",
    desc: "Built an eCommerce website that displays products dynamically from the FakeStore API.",
    github: "https://github.com/Oghene-kevwe/KIP-Store",
    livelink: "https://oghene-kevwe.github.io/KIP-Store/",
    tools: ["TailwindCSS", "FakestoreAPI", "JavaScript"],
  },
  {
    id: 6,
    title: "Settlement Dashboard",
    desc: "Developed a fintech settlement dashboard for monitoring transactions and settlements.",
    github: "https://github.com/Oghene-kevwe/dashboard",
    livelink: "https://settlement-db.netlify.app/",
    tools: ["React", "TailwindCSS"],
  },
  {
    id: 15,
    title: "Sureplug",
    desc: "Mobile chat application for connecting cryptocurrency buyers ",
    github: "https://github.com/Oghene-kevwe/sureplug-clone",
    livelink: "#",
    tools: ["React Native", "Expo", "Supabase"],
  },
  {
    id: 8,
    title: "Creditry",
    desc: "Designed and built a landing page for Creditry, a financial B2B loan platform.",
    github: "https://github.com/creditry",
    livelink: "https://creditry.netlify.app/",
    tools: ["React", "TailwindCSS"],
  },
  {
    id: 11,
    title: "Fredacom",
    desc: "Built a web app marketplace for buying and selling research data for Fredacom.",
    github: "https://github.com/TheFredacom",
    livelink: "https://fredacom.com/",
    tools: ["TailwindCSS", "React", "Node.js"],
  },
];
const worksContainer = document.querySelector(".works-container");
const privateProjectIds = [18, 12]; // your private IDs
const githubHiddenIds = [21, 20, 19, 13, 9];

worksContainer.innerHTML = workContent
  .map((item) => {
    const { id, title, desc, github, livelink, tools } = item;
    const isPrivate = privateProjectIds.includes(id);
    const hideGithub = githubHiddenIds.includes(id);

    // if private, show message instead of links
    const linkSection = isPrivate
      ? `<p class="private-text">(Private project – not publicly launched)</p>`
      : `
        <div class="work-link">
          <a href="${livelink}" target="_blank">
            <img src="./images/Social-Icons/link-icon.min.svg" class="card-icon" alt="livelink">
          </a>
          ${
            hideGithub
              ? ""
              : `<a href="${github}" class="github" target="_blank">
            <img src="./images/Social-Icons/Github.min.svg" class="card-icon" alt="github link">
          </a>`
          }
        </div>
      `;

    return `
      <div class="work-container">
        <div class="work-content-container">
          <h3 class="work-title">${title}</h3>
          <p class="desc">${desc}</p>
          ${linkSection}
          <div class="work-tools">
            ${tools?.map((tool) => `<span>${tool}</span>`).join("") || ""}
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
