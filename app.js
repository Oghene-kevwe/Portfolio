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
    key: "kip-inventory",
    title: "Kip Inventory",
    desc: "ERP-grade inventory system with multi-warehouse tracking, purchase order lifecycle management, approval workflows, low-stock auto-reorder, and full audit trails.",
    github: "https://github.com/praise-idise/KipInventoryMGT-FE",
    livelink: "https://kipinventory.com",
    tools: [
      "React",
      "TypeScript",
      "ASP.NET Core",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Hangfire",
    ],
  },
  {
    key: "campus-bridge",
    title: "Campus Bridge",
    desc: "Full-stack student accommodation platform with listing management, real-time chat, KYC verification, and payment workflows.",
    github: "https://github.com/praise-idise/CampusBridge-BE",
    livelink: "https://campusbridgeapp.netlify.app/",
    tools: ["React", "TypeScript", "ASP.NET", "SQL Server", "SignalR"],
  },
  {
    key: "smart-library",
    title: "Smart Library",
    desc: "Full-stack library platform with book cataloging, borrowing/return workflows, JWT auth with refresh tokens, role-based dashboards, and automated overdue reminders.",
    github: "https://github.com/praise-idise/SmartLibrary_FE",
    livelink: "https://smart-library-app.netlify.app",
    tools: [
      "React",
      "TypeScript",
      "ASP.NET Core",
      "SQL Server",
      "Redis",
      "Stripe",
      "Hangfire",
    ],
  },
  {
    key: "qurexa",
    title: "Qurexa",
    desc: "Engineered the complete backend infrastructure for Qurexa, covering API design, authentication, data modeling, and production deployment.",
    github: "#",
    livelink: "https://qurexa.co.uk",
    tools: ["Node", "Express", "MongoDB", "AWS"],
  },
  {
    key: "payinfra",
    title: "PayInfra",
    desc: "Developed a payment infrastructure and loyalty system for a franchise.",
    github: "#",
    livelink: "#",
    tools: ["React", "ASP.NET", "SQL Server"],
  },
  {
    key: "terminus",
    title: "Terminus",
    desc: "Built a fintech POS monitoring solution for tracking transactions and performance of POS terminals.",
    github: "https://github.com/praise-idise/PavilionPOSMerchantWebApp",
    livelink: "https://pavilion-dev.netlify.app/login",
    tools: ["React", "ASP.NET", "SQL Server"],
  },
  {
    key: "504-driving-school",
    title: "504 Driving School",
    desc: "Developed a platform for managing student bookings, classes, and courses for 504 Driving School.",
    github: "#",
    livelink: "https://504driving.netlify.app",
    tools: ["React", "ASP.NET", "SQL Server"],
  },
  {
    key: "legal-drop-crm",
    title: "CRM solution for Legal Drop",
    desc: "Built an admin platform for managing riders, users, and orders for Legal Drop.",
    github: "https://github.com/praise-idise/CRM-BootStrap",
    livelink: "https://legaldrop.ca/",
    tools: ["Node.js", "React", "Typescript", "Google Maps API"],
  },
  {
    key: "delivery-ease-logistics",
    title: "The Delivery Ease Logistics",
    desc: "Rebuilt the backend with real-time Google Maps tracking and optimized the React frontend.",
    github: "#",
    livelink: "https://thedeliveryeaselogistics.com",
    tools: ["React", "Laravel", "MySQL", "Google Maps API", "AWS"],
  },
  {
    key: "coreinfra",
    title: "CoreInfra",
    desc: "Built the official website for CoreInfra Solutions Ltd.",
    github: "#",
    livelink: "https://coreinfrahq.com/",
    tools: ["React", "TailwindCSS"],
  },
  {
    key: "love-me",
    title: "Love-Me",
    desc: "Web app for generating different kinds of love letters using GPT-3.",
    github: "https://github.com/workshopapps/loveletterwriter.web",
    livelink: "https://love-me.app/",
    tools: ["React", "Node.js", "OpenAI API"],
  },
  {
    key: "log-analyzer",
    title: "Log Analyzer",
    desc: "C# Library API for analyzing and sorting log files.",
    github: "https://github.com/praise-idise/LogAnalyzerLibrary",
    livelink:
      "https://documenter.getpostman.com/view/27915658/2sAYQXpDao#intro",
    tools: ["C#", "ASP.NET", "Postman"],
  },
  {
    key: "kip-restaurant",
    title: "Kip Restaurant",
    desc: "Developed a backend web app for managing restaurant orders, users, and menu items.",
    github: "https://github.com/praise-idise/KIP-Restaurant",
    livelink: "#",
    tools: ["ASP.NET", "SQL Server"],
  },
  {
    key: "medical-advance-platform",
    title: "Medical Advance Platform",
    desc: "Developed a Quote Dashboard demonstrating the UX flow for quote responses.",
    github: "https://github.com/praise-idise/MAP-interview-project",
    livelink: "https://medicaladvancedplatform.netlify.app/",
    tools: ["React", "TailwindCSS"],
  },
  {
    key: "kip-store",
    title: "KIP Store",
    desc: "Built an eCommerce website that displays products dynamically from the FakeStore API.",
    github: "https://github.com/praise-idise/KIP-Store",
    livelink: "https://praise-idise.github.io/KIP-Store/",
    tools: ["TailwindCSS", "FakestoreAPI", "JavaScript"],
  },
  {
    key: "settlement-dashboard",
    title: "Settlement Dashboard",
    desc: "Developed a fintech settlement dashboard for monitoring transactions and settlements.",
    github: "https://github.com/praise-idise/dashboard",
    livelink: "https://settlement-db.netlify.app/",
    tools: ["React", "TailwindCSS"],
  },
  {
    key: "sureplug",
    title: "Sureplug",
    desc: "Mobile chat application for connecting cryptocurrency buyers.",
    github: "https://github.com/praise-idise/sureplug-clone",
    livelink: "#",
    tools: ["React Native", "Expo", "Supabase"],
  },
  {
    key: "creditry",
    title: "Creditry",
    desc: "Designed and built a landing page for Creditry, a financial B2B loan platform.",
    github: "https://github.com/creditry",
    livelink: "https://creditry.netlify.app/",
    tools: ["React", "TailwindCSS"],
  },
  {
    key: "fredacom",
    title: "Fredacom",
    desc: "Built a web app marketplace for buying and selling research data for Fredacom.",
    github: "https://github.com/TheFredacom",
    livelink: "https://fredacom.com/",
    tools: ["TailwindCSS", "React", "Node.js"],
  },
];

const worksContainer = document.querySelector(".works-container");

const privateProjectKeys = new Set(["payinfra", "terminus"]);
const githubHiddenKeys = new Set([
  "qurexa",
  "504-driving-school",
  "delivery-ease-logistics",
  "legal-drop-crm",
  "coreinfra",
]);

worksContainer.innerHTML = workContent
  .map((item) => {
    const { key, title, desc, github, livelink, tools } = item;
    const isPrivate = privateProjectKeys.has(key);
    const hideGithub = githubHiddenKeys.has(key);

    const linkSection = isPrivate
      ? '<p class="private-text">(Private project)</p>'
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
          <div class="work-container" data-key="${key}">
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
