// import { clientsLogos } from "./assets/js/clientslogo";
const header = document.createElement("header");
const sideBar = document.createElement("div");
const footerContainer = document.createElement("footer");
const projectWrapper = document.getElementById("projectcontainer");
const brandWrapper = document.getElementById("brandWrapper");
sideBar.classList.add("side-bar");
sideBar.setAttribute("id", "side-bar");
header.setAttribute("class", "header-one five header--sticky");
footerContainer.setAttribute(
  "class",
  "rts-footer-three-area rts-section-gapTop bg_black"
);
const dataBackground = document.querySelectorAll("[data-bg]");
const processBar = document.getElementById("processBar");
const phoneNumber = 9811173841;
const servicePageContainer = document.getElementById("servicePage");
const projectCardsContainer = document.querySelector(".portfolio_card_wrapper");
const formDataContainer = document.getElementById("formWrapper");
const marqueeContainer = document.getElementById("brandMarquee");
const gridClients = document.getElementById("clients-logo-grid");
const homePageServiceContainer = document.getElementById("home-page-service");
const clinetsTestimonialsContainer = document.getElementById(
  "clients-testimonials"
);

// BLACK OR WHITE LOGO ACC.. PAGE
const chageLogo = () => {
  if (document.body.classList.contains("homepage")) {
    return `<img class="normal" src="assets/logo/logo-white.png" alt="Devoir logo">`;
  } else {
    return `<img class="normal" src="assets/logo/logo-black.png" alt="Devoir logo">`;
  }
};
// Header Building
const headerTemplate = (headerElement) => {
  headerElement.innerHTML = `
         <div class="container-full-screen">
                <div class="row align-items-center">
                    <div class="col-lg-2 col-md-3 col-4">
                        <!-- logo area start -->
                        <a href="/" class="thumbnail">
                            <img class="normal" src="https://ddlanding.netlify.app/assets/logo/logo-white.png" alt="axela-logo">
                        </a>
                        <!-- logo area end -->
                    </div>
                    <div class="col-lg-7 d-none d-xl-block">
                        <div class="main-header">
                            <nav class="main-nav">
                                <ul class="mainmenu"></ul>
                            </nav>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-10 col-md-9 col-8">
    
                        <div class="header-right">
                            <a href="tel:+919811173841" class="rts-btn btn-secondary call-btn">Let’s Talk
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none">
                                    <path
                                        d="M5.96875 7C5.96875 6.46875 5.5 6 4.96875 6H4.5C3.375 6 2.5 6.90625 2.5 8.03125V9.5C2.5 10.625 3.375 11.5 4.5 11.5H5C5.53125 11.5 6 11.0625 6 10.5L5.96875 7ZM8 0C3.5 0 0.125 3.75 0 8V9.25C0 9.6875 0.3125 10 0.71875 10C1.09375 10 1.5 9.6875 1.5 9.25V8C1.5 4.4375 4.40625 1.53125 8 1.53125C11.5625 1.53125 14.5 4.4375 14.5 8V12.5C14.5 13.2188 13.9375 13.75 13.25 13.75H9.78125C9.53125 13.3125 9.03125 13 8.5 13H7.53125C6.8125 13 6.15625 13.5 6 14.2188C5.84375 15.1875 6.5625 16 7.46875 16H8.5C9.03125 16 9.53125 15.7188 9.78125 15.25H13.25C14.75 15.25 16 14.0312 16 12.5V8C15.8438 3.75 12.4688 0 8 0ZM11.5 11.5C12.5938 11.5 13.5 10.625 13.5 9.5V8.03125C13.5 6.90625 12.5938 6 11.5 6H11C10.4375 6 10 6.46875 10 7.03125V10.5C10 11.0625 10.4375 11.5 11 11.5H11.5Z"
                                        fill="#dc2626" />
                                </svg>
                            </a>
                            <a id="menu-btn" href="#" class="rts-btn btn-secondary menu-btn" onclick="event.preventDefault();">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
                                    <rect y="12" width="18" height="2" fill="#dc2626"></rect>
                                    <rect x="5" y="6" width="8" height="2" fill="#dc2626"></rect>
                                    <rect width="18" height="2" fill="#dc2626"></rect>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
  document.body.insertAdjacentElement("afterbegin", headerElement);
};
// Footer Bulding
const footerTemplate = (footerElement) => {
  footerElement.innerHTML = `
            <div class="container">
                       <div class="row g-0">
                           <div class="col-lg-4">
                               <div class="single-footer-three-wized">
                                   <div class="header">
                                       <a href="#" style="display: flex; align-items: center;">
                                           <img src="https://ddlanding.netlify.app/assets/logo/logo-white.png" alt="Footer_logo" style="max-width: 40px;">
                                           <h5 style="margin: 0; margin-left: 25px; color: #fff;">Devoir Designs</h5>
                                       </a>
                                   </div>
                                   <div class="body left" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                       <p class="disc">
                                           Devoir Designs is your one-stop destination for comprehensive marketing and creative
                                           solutions that drive results.
                                       </p>
                                       <ul class="social-area">
                                           <li data-sal-delay="150" data-sal="slide-up" data-sal-duration="800"
                                               class="sal-animate"><a target="_blank"
                                                   href="https://www.facebook.com/devoirdesignsofficial"><i
                                                       class="bi bi-facebook"></i></a></li>
                                           <li data-sal-delay="250" data-sal="slide-up" data-sal-duration="800"
                                               class="sal-animate"><a target="_blank"
                                                   href="https://www.instagram.com/devoirdesigns/"><i
                                                       class="bi bi-instagram"></i></a></li>
                                           <li data-sal-delay="350" data-sal="slide-up" data-sal-duration="800"
                                               class="sal-animate"><a target="_blank"
                                                   href="https://www.linkedin.com/company/devoir-designs/"><i
                                                       class="bi bi-linkedin"></i></a></li>
           
                                       </ul>
                                   </div>
                               </div>
                           </div>
                           <div class="col-lg-8">
                               <div class="footer-right-three">
                                   <div class="single-footer-three-wized" data-sal-delay="250" data-sal="slide-up"
                                       data-sal-duration="800">
                                       <div class="header">
                                           <h5 class="title">
                                               Our Solution
                                           </h5>
                                       </div>
                                       <div class="body">
                                           <ul class="list">
                                               <li>
                                                   <a href="/service/branding.html">
                                                   <i class="bi bi-chevron-double-right"></i>Branding</a>
                                               </li>
                                               <li><a href="/service/marketing.html"><i class="bi bi-chevron-double-right"></i>Digital
                                                       Marketing</a>
                                               </li>
                                               <li><a href="/service/web-development.html"><i class="bi bi-chevron-double-right"></i>Web
                                                       Development</a>
                                               </li>
                                               <li><a href="/service/designing.html"><i class="bi bi-chevron-double-right"></i>Graphic
                                                       Designing</a>
                                               </li>
                                           </ul>
                                       </div>
                                   </div>
                                   <div class="single-footer-three-wized" data-sal-delay="350" data-sal="slide-up"
                                       data-sal-duration="800">
                                       <div class="header">
                                           <h5 class="title">
                                               Office Info
                                           </h5>
                                       </div>
                                       <div class="body">
                                           <div class="rts-footer-contact">
                                               <div class="icon">
                                                   <i class="bi bi-geo-alt-fill"></i>
                                               </div>
                                               <a href="#" class="map">
                                                   3, First Floor Nilgiri
                                                   Shopping Complex, New Delhi - 110019
           
                                               </a>
                                           </div>
                                           <div class="rts-footer-contact">
                                               <div class="icon">
                                                   <i class="bi bi-telephone-fill"></i>
                                               </div>
                                               <a href="__phone_num" class="call">
                                                   +91 9811173841
                                               </a>
                                           </div>
                                           <div class="rts-footer-contact">
                                               <div class="icon">
                                                   <i class="bi bi-envelope-arrow-down-fill"></i>
                                               </div>
                                               <a href="mailto:info@devoirdesigns.com" class="call">
                                                   info@devoirdesigns.com
                                               </a>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                       </div>
                       <div class="rts-copyright-area-three">
                           <div class="row">
                               <div class="col-12">
                                   <div class="wrapper">
                                       <div class="mid">
                                           <p>© 2024 Devoir Designs. All rights reserved. </p>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
            `;
  document.body.insertAdjacentElement("beforeend", footerElement);
};
// SideBar Building
const sidebarTemplate = (sidebarElement) => {
  sidebarElement.innerHTML = `
              <button class="close-icon-menu"><i class="bi bi-x-lg"></i></button>
            <!-- inner menu area desktop start -->
            <div class="rts-sidebar-menu-desktop">
                <a class="logo-1" href="index.html">
                    <img class="logo" src="./assets/logo/logo-black.png" alt="axela_logo">
                </a>
                <div class="body d-none d-xl-block">
                    <p class="disc">
                        Devoir Designs is your one-stop destination for comprehensive marketing and creative solutions that drive results.
                    </p>
                    <div class="social-wrapper-two">
                        <ul class="social-area">
                            <li data-sal-delay="150" data-sal="slide-up" data-sal-duration="800" class="sal-animate"><a
                                    target="_blank" href="https://www.facebook.com/devoirdesignsofficial"><i class="bi bi-facebook"></i></a></li>
                            <li data-sal-delay="350" data-sal="slide-up" data-sal-duration="800" class="sal-animate"><a
                                    target="_blank" href="https://www.linkedin.com/company/devoir-designs/"><i class="bi bi-linkedin"></i></a></li>
                            <li data-sal-delay="450" data-sal="slide-up" data-sal-duration="800" class="sal-animate"><a
                                    target="_blank" href="https://www.instagram.com/devoirdesigns/"><i class="bi bi-instagram"></i></a></li>
                        </ul>
                    </div>
                    <div class="get-in-touch mt--50">
                        <!-- title -->
                        <div class="h6 title">Get In Touch</div>
                        <!-- title End -->
                        <div class="wrapper">
                            <!-- single -->
                            <div class="single">
                                <i class="bi bi-telephone-fill"></i>
                                <a href="__phone_num">+91 9811173841</a>
                            </div>
                            <!-- single ENd -->
                            <!-- single -->
                            <div class="single">
                                <i class="bi bi-envelope-arrow-down-fill"></i>
                                <a href="mailto:info@devoirdesigns.com">info@devoirdesigns.com</a>
                            </div>
                            <!-- single ENd -->
                            <!-- single -->
                            <div class="single">
                                <i class="bi bi-geo-alt-fill"></i>
                                <a href="#">3, First Floor Nilgiri Shopping Complex, New Delhi - 110019</a>
                            </div>
                            <!-- single ENd -->
                            <!-- single -->
                            <div class="single">
                                <i class="bi bi-collection"></i>
                                <a href="https://portfolio.devoirdesigns.com/">Portfolio</a>
                            </div>
                            <!-- single ENd -->
                        </div>
                    </div>
                </div>
                <div class="body-mobile d-block d-xl-none">
                    <nav class="nav-main mainmenu-nav mt--30">
                        <ul class="mainmenu" id="mobile-menu-active"></ul>
                    </nav>
                    <div class="social-wrapper-two mt--50">
                        <ul class="social-area">
                             <li data-sal-delay="150" data-sal="slide-up" data-sal-duration="800" class="sal-animate"><a
                                    target="_blank" href="https://www.facebook.com/devoirdesignsofficial"><i class="bi bi-facebook"></i></a></li>
                            <li data-sal-delay="350" data-sal="slide-up" data-sal-duration="800" class="sal-animate"><a
                                    target="_blank" href="https://www.linkedin.com/company/devoir-designs/"><i class="bi bi-linkedin"></i></a></li>
                            <li data-sal-delay="450" data-sal="slide-up" data-sal-duration="800" class="sal-animate"><a
                                    target="_blank" href="https://www.instagram.com/devoirdesigns/"><i class="bi bi-instagram"></i></a></li>
                        </ul>
                    </div>
                    <!-- <a href="__phone_num" class="rts-btn btn-primary ml--20 ml_sm--5 header-one-btn quote-btnmenu">Get Quote</a> -->
                </div>
            </div>
            <!-- inner menu area desktop End -->
      `;
  header.insertAdjacentElement("afterend", sidebarElement);
};

// Cliets Section Building
const clientsLogosTemplateGrid = (parientContainer) => {
  if (!parientContainer) {
    console.log(
      "Parent Container not found of ClientGridSection",
      parientContainer
    );
    return false;
  }

  logos.forEach((brand, index) => {
    const deleteLogo = [4, 17, 38];
    if (deleteLogo.includes(index + 1)) return false;
    const card = document.createElement("div");
    card.classList.add("col");
    card.innerHTML = `<img src="${brand}" alt="Brand Logo ${index + 1}"/>`;
    parientContainer.appendChild(card);
  });
};
// Background Image Attribute
dataBackground.forEach((element) => {
  let BackgroundValue = element.getAttribute("data-bg");
  if (BackgroundValue.includes("url(")) {
    element.style.backgroundImage = BackgroundValue;
  }
  element.style.backgroundColor = BackgroundValue;
});
// Commoan animation on all same element
const addAnimation = (element, index) => {
  const animateDealy = `${index + 1}${50}`;
  element.dataset.sal = "slide-up";
  element.dataset.salDuration = "800";
  element.dataset.salDelay = animateDealy;
};
// Process Bar About us
const processBarTemplate = (parientContainer) => {
  if (!parientContainer) {
    console.log("Our value parent element not found");
    return false;
  }

  ourValues.forEach((process, index) => {
    let processElement = document.createElement("div");
    processElement.classList.add("col-md-6", "col-lg-3");
    addAnimation(processElement, index);
    processElement.innerHTML = `
    <div class="our-process">
              <div class="circle-badge"></div>

              <div class="process-icon">
                <img
                  src="${process.icon}"
                  alt="${process.title}"
                />
              </div>
              <div class="process-info">
                <h3>${process.title}</h3>
                <p>${process.bodyContent}</p>
              </div>
              <div class="process-count">
                <h2>0${index + 1}</h2>
              </div>
     </div>
    `;
    parientContainer.insertAdjacentElement("beforeEnd", processElement);
  });
};
// Link phone number to button
const addPhone = () => {
  document.querySelectorAll("a").forEach((link) => {
    let href = link.getAttribute("href");
    if (href.includes("__phone_num")) {
      link.setAttribute("href", `tel:+91${phoneNumber}`);
    }
  });
};
// Service Page Template
const servicePageTemplate = (parientContainer) => {
  if (!parientContainer) {
    console.log("Parent not found of all service");
    return false;
  }
  mainServices.forEach((service, index) => {
    const serviceCard = document.createElement("div");
    serviceCard.classList.add("col-lg-6");
    addAnimation(serviceCard, index);
    serviceCard.innerHTML = `
        <div class="service_wrapper">
                  <img src="${service.thumbnail}" alt="${service.name}" />
                  <a href="${service.link}" class="service_body">
                    <h3 class="c-light">${service.name}</h3>
                    <p class="disc c-light">${service.content}</p>
                  </a>
        </div>
      `;
    parientContainer.appendChild(serviceCard);
  });
};
// Main Menu Template
const mainMenuTemplate = (parientContainer) => {
  if (!parientContainer) {
    console.log("Main menu parent container not found!", parientContainer);
    return false;
  }
  mainMenu.forEach((menu) => {
    const menuLink = document.createElement("li");
    menuLink.innerHTML = `<a href="${menu.link}">${menu.name}</a>`;
    if (menu.subMenu) {
      menuLink.classList.add("has-droupdown");
      let subMenuLink = document.createElement("ul");
      subMenuLink.classList.add("submenu");
      menu.subMenu.forEach((subMenu) => {
        const subMenuLinkRef = document.createElement("li");
        subMenuLinkRef.innerHTML = `<a class="single" href="${subMenu.link}">${subMenu.name}</a>`;
        subMenuLink.appendChild(subMenuLinkRef);
      });
      menuLink.appendChild(subMenuLink);
    }
    parientContainer.appendChild(menuLink);
  });
};
// Path change for service innerpage
const changePathForServicePage = (parientContainer) => {
  if (!parientContainer) {
    console.log("Service inner page not found container ", parientContainer);
    return false;
  }
  if (document.body.classList.contains("service_details_page")) {
    parientContainer.forEach((src) => {
      const srcPath = src.getAttribute("src");
      if (!srcPath.includes("../assets")) {
        src.setAttribute("src", `../${srcPath}`);
      }
    });
  }
};
// Portfolio Home page
const portfolioTemplate = (parientContainer) => {
  if (!parientContainer) {
    console.log("Portfolio container not found ", parientContainer);
    return false;
  }
  portFolio.forEach((project, index) => {
    const projectElment = document.createElement("div");
    addAnimation(projectElment, index);
    projectElment.classList.add("col-12", "col-md-6");
    if (index == 0 || index == 5) {
      projectElment.classList.add("col-lg-8");
    }
    if (index == 1 || index == 4) {
      projectElment.classList.add("col-lg-4");
    }
    projectElment.innerHTML = `
            <div class="portfolio_card">
              <img src="${project.image}" alt="${project.name}" />
              <div class="content_body">
                <h3 class="c-light">${project.name}</h3>
                <p class="c-light">${project.keyword}</p>
                <a href="${project.link}" target="_blank" class="link_badge">
                  <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
    `;
    parientContainer.appendChild(projectElment);
  });
};
// Form Data Creating
const formFieldsTemplate = (parientContainer) => {
  if (!parientContainer) {
    console.log("Form container not found ", parientContainer);
    return false;
  }
  formStructure.forEach((field) => {
    let inputField;
    if (field.type === "textarea") {
      inputField = document.createElement("textarea");
    } else {
      inputField = document.createElement("input");
    }
    inputField.type = field.type;
    inputField.placeholder = field.placeHolder;
    inputField.required = field.required;
    inputField.name = field.name;
    parientContainer.appendChild(inputField);
  });
};
const homePageService = (parientContainer) => {
  if (!parientContainer) {
    console.log("Home Page container not found ", parientContainer);
    return false;
  }
  mainServices.forEach((service, index) => {
    const serviceCard = document.createElement("div");
    serviceCard.classList.add(
      "col-xl-3",
      "col-lg-4",
      "col-md-6",
      "col-sm-6",
      "col-12"
    );
    addAnimation(serviceCard);

    serviceCard.innerHTML = `
            <!-- single service area start -->
            <div class="rts-single-service-one home-three text-center">
              <div class="icon">
                <img src="${service.icon}" alt="axela_service" />
              </div>
              <a href="service-details.html">
                <h5 class="title">${service.name}</h5>
              </a>
              <p class="disc">
                ${service.content}
              </p>
              <a href="${service.link}" class="rts-read-more two"
                >Read More<i class="bi bi-arrow-right"></i
              ></a>
            </div>
            <!-- single service area end -->
    `;
    parientContainer.appendChild(serviceCard);
  });
};

function handleSubmitForm() {
  const contactForm = document.querySelectorAll(".contact-form");
  const resMessage = document.querySelector(".res-message");
  const apiKey = "239f16c3-66b8-4d0a-87ec-17041c56b689";
  contactForm.forEach((form) => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      resMessage.style.display = "block";
      resMessage.textContent = "Sending";
      const formData = new FormData(e.target);
      formData.append("access_key", apiKey);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        resMessage.style.color = "green";
        resMessage.textContent = data.message;
        e.target.reset();
      } else {
        console.log("Error", data);
        resMessage.textContent = data.message;
      }
      setTimeout(() => {
        resMessage.style.display = "none";
        resMessage.textContent = "";
      }, 500);
    });
  });
}

function clientsFeedbacks(parientContainer) {
  if (!parientContainer) {
    if (!parientContainer) {
      console.log("Testimonials Container not found ", parientContainer);
      return false;
    }
  }
  clinetsTestimonials.forEach((review, index) => {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");
    slide.innerHTML = `
          <div class="single-testimonial-one">
                        <div class="body">
                          <p class="disc">
                            ”${review.reviewContent}”
                          </p>
                        </div>
                        <div class="footer">
                          <div class="header-area">
                          <img src="https://avatar.iran.liara.run/public/1"
                          alt="client Logo"
                          style="max-width: 65px"
                        />
                          <div class="name-desig">
                            <a href="#">
                              <h6>${review.name}</h6>
                            </a>
                        </div>
                          </div>
                        </div>
              </div>
    `;
    parientContainer.appendChild(slide);
  });
}

const firstGroup = clientsLogos.slice(0, 18);
const secondGroup = clientsLogos.slice(18, 37);
const thirdGroup = clientsLogos.slice(37);

function createLogoElements() {
  const marqueeLists = document.querySelectorAll(".marquee-content");

  marqueeLists.forEach((list, index) => {
    const logoGroup =
      index === 0 ? firstGroup : index === 1 ? secondGroup : thirdGroup;

    [...logoGroup, ...logoGroup].forEach((logoUrl) => {
      const img = document.createElement("img");
      img.src = logoUrl;
      img.alt = "Logo";
      img.className = "logo-img";
      list.appendChild(img);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  headerTemplate(header);
  sidebarTemplate(sideBar);
  footerTemplate(footerContainer);
  processBarTemplate(processBar);
  addPhone();
  servicePageTemplate(servicePageContainer);
  const mainMenuContainer = document.querySelectorAll(".mainmenu");
  mainMenuContainer.forEach((menu) => mainMenuTemplate(menu));
  // const pathChangeServiePage = document.body.querySelectorAll("img[src]");
  // changePathForServicePage(pathChangeServiePage);
  portfolioTemplate(projectCardsContainer);
  formFieldsTemplate(formDataContainer);
  clientsLogosTemplateGrid(gridClients);
  homePageService(homePageServiceContainer);
  handleSubmitForm();
  clientsFeedbacks(clinetsTestimonialsContainer);
  createLogoElements();
});
