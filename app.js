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

//   // {
//   //   id: 5,
//   //   title: "Musica",
//   //   desc: "This is a music player web app.",
//   //   github: "https://github.com/Oghene-kevwe/musica",
//   //   livelink: "https://musica-idise.netlify.app",
//   // },
//   // {
//   //   id: 10,
//   //   title: "Debonaire",
//   //   desc: "Website for a Hair business",
//   //   github: "https://github.com/Oghene-kevwe/Zuri-Astro",
//   //   livelink: "https://zurikevwe.netlify.app/",
//   // },
//   // {
//   //   id: 1,
//   //   title: "Ableton",
//   //   desc: "Recreated Ableton About page",
//   //   github: "https://github.com/Oghene-kevwe/May-and-Joh",
//   //   livelink: "https://oghene-kevwe.github.io/May-and-Joh/",
//   // },
//   // {
//   //   id: 2,
//   //   title: "Meta BNB",
//   //   desc: "This is a landing page for NFT hotel in the metaverse",
//   //   github: "https://github.com/Oghene-kevwe/metabnb",
//   //   livelink: "https://idisemetabnb.netlify.app/",
//   // },
//   // {
//   //   id: 3,
//   //   title: "Link Tree",
//   //   desc: "This is a site you can use to show your links to different online platforms",
//   //   github: "https://github.com/Oghene-kevwe/linktree",
//   //   livelink: "https://linktreeehng.netlify.app/",
//   // },
//   // {
//   //   id: 4,
//   //   title: "Interactive rating app",
//   //   desc: "This is a webapp for collecting feedbacks from customers",
//   //   github: "https://github.com/Oghene-kevwe/Interactive-Rating-App",
//   //   livelink: "https://oghene-kevwe.github.io/Interactive-Rating-App/",
//   // },
// ];

const workContent = [
  {
    id: 18,
    title: "PayInfra",
    desc: "This is a payment infrasturcture and loyalty system built for a franchise ",
    github: "#",
    livelink: "#",
    tools: ["React", "ASP.NET", "SQL Server"],
  },
  {
    id: 12,
    title: "Terminus",
    desc: "A fintech POS Monitoring solution for tracking transactions of a POS terminal",
    github: "https://github.com/Oghene-kevwe/PavilionPOSMerchantWebApp",
    livelink: "https://pavilion-dev.netlify.app/login",
    tools: ["React", "ASP.NET", "SQL Server"],
  },
  {
    id: 20,
    title: "504 Driving School",
    desc: "This is a driving school platform for managing students bookings, classes and courses",
    github: "#",
    livelink: "https://504driving.netlify.app",
    tools: ["React", "ASP.NET", "SQL Server"],
  },
  {
    id: 13,
    title: "CRM solution for Legal Drop",
    desc: "This is the Admin platform to manage riders, users and orders ",
    github: "https://github.com/Oghene-kevwe/CRM-BootStrap",
    livelink: "https://crmridersite.netlify.app",
    tools: ["Node.js", "React", "Typescript", "Google Maps API"],
  },
  {
    id: 19,
    title: "The Delivery Ease Logistics",
    desc: "This is a logistics platform for managing deliveries and riders",
    github: "#",
    livelink: "https://thedeliveryeaselogistics.com",
    tools: ["React", "Laravel", "MySQL", "Google Maps API", "AWS"],
  },
  {
    id: 9,
    title: "CoreInfra",
    desc: "Website for CoreInfra Solutions Ltd",
    github: "#",
    livelink: "https://core-infra.netlify.app/",
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
    id: 15,
    title: "Sureplug",
    desc: "Mobile chat application for connecting cryptocurrency buyers ",
    github: "https://github.com/Oghene-kevwe/sureplug-clone",
    livelink: "#",
    tools: ["React Native", "Expo", "Supabase"],
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
    desc: "A Restaurant backend web app for managing orders, users and menu items",
    github: "https://github.com/Oghene-kevwe/KIP-Restaurant",
    livelink: "#",
    tools: ["ASP.NET", "SQL Server"],
  },
  {
    id: 14,
    title: "Medical Advance Platform",
    desc: "This is the Qoute dashboard showing the UX flow for a qoute response ",
    github: "https://github.com/Oghene-kevwe/MAP-interview-project",
    livelink: "https://medicaladvancedplatform.netlify.app/",
    tools: ["React", "TailwindCSS"],
  },
  {
    id: 0,
    title: "KIP Store",
    desc: "This is an ecommerce website showing products from the FakestoreAPI",
    github: "https://github.com/Oghene-kevwe/KIP-Store",
    livelink: "https://oghene-kevwe.github.io/KIP-Store/",
    tools: ["TailwindCSS", "FakestoreAPI", "JavaScript"],
  },
  {
    id: 11,
    title: "Fredacom",
    desc: "Web app for Fredacom, a market place for buying and selling research data",
    github: "https://github.com/TheFredacom",
    livelink: "https://fredacom.com/",
    tools: ["TailwindCSS", "React", "Node.js"],
  },
  {
    id: 6,
    title: "Settlement Dashboard",
    desc: "This webapp shows a settlement dashboard for fintech",
    github: "https://github.com/Oghene-kevwe/dashboard",
    livelink: "https://settlement-db.netlify.app/",
    tools: ["React", "TailwindCSS"],
  },
  {
    id: 8,
    title: "Creditry",
    desc: "Landing page for a financial loan B2B platform",
    github: "https://github.com/creditry",
    livelink: "https://creditry.netlify.app/",
    tools: ["React", "TailwindCSS"],
  },
];

const worksContainer = document.querySelector(".works-container");

worksContainer.innerHTML = workContent
  .map((item) => {
    const { title, desc, github, livelink, tools } = item;
    return `
      <div class="work-container">
        <div class="work-content-container">
          <h3 class="work-title">${title}</h3>
          <p class="desc">${desc}</p>
          <div class="work-link">
            <a href="${livelink}" target="_blank">
              <img src="./images/Social-Icons/link-icon.min.svg" class="card-icon" alt="livelink">
            </a>
            <a href="${github}" class="github" target="_blank">
              <img src="./images/Social-Icons/Github.min.svg" class="card-icon" alt="github link">
            </a>
          </div>
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
