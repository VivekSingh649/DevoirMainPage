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
const phoneNumber = 9810416275;
const servicePageContainer = document.getElementById("servicePage");
const mainMenuContainer = document.querySelectorAll(".mainmenu");

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
                            ${chageLogo()}
                            <img class="stickys" src="assets/logo/logo-black.png" alt="axela-logo">
                        </a>
                        <!-- logo area end -->
                    </div>
                    <div class="col-lg-7 d-none d-xl-block">
                        <div class="main-header">
                            <nav class="main-nav">
                                <ul class="mainmenu">
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        <a href="about.html">About</a>
                                    </li>
                                    <li class="has-droupdown">
                                        <a href="#">Services</a>
                                        <ul class="submenu">
                                            <li><a class="single" href="service.html">Our Services</a></li>
                                            <li><a class="single" href="service-details.html">Service Details</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="contactus.html">Contact</a>
                                    </li>
                                    <li>
                                        <a href="https://portfolio.devoirdesigns.com/">Portfolio</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-10 col-md-9 col-8">
    
                        <div class="header-right">
                            <a href="tel:+919810416275" class="rts-btn btn-secondary call-btn">Let’s Talk
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
                                           <img src="assets/logo/logo-white.png" alt="Footer_logo" style="max-width: 40px;">
                                           <h5 style="margin: 0; margin-left: 25px; color: #fff;">Devoir Design</h5>
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
                                                       class="fab fa-facebook-f"></i></a></li>
                                           <li data-sal-delay="250" data-sal="slide-up" data-sal-duration="800"
                                               class="sal-animate"><a target="_blank"
                                                   href="https://www.instagram.com/devoirdesigns/"><i
                                                       class="fab fa-instagram"></i></a></li>
                                           <li data-sal-delay="350" data-sal="slide-up" data-sal-duration="800"
                                               class="sal-animate"><a target="_blank"
                                                   href="https://www.linkedin.com/company/devoir-designs/"><i
                                                       class="fab fa-linkedin-in"></i></a></li>
           
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
                                                   <a href="tel:+919810416275"><i
                                                           class="far fa-chevron-double-right"></i>Branding</a>
                                               </li>
                                               <li><a href="tel:+919810416275"><i class="far fa-chevron-double-right"></i>Digital
                                                       Marketing</a>
                                               </li>
                                               <li><a href="tel:+919810416275"><i class="far fa-chevron-double-right"></i>Web
                                                       Development</a>
                                               </li>
                                               <li><a href="tel:+919810416275"><i class="far fa-chevron-double-right"></i>Graphic
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
                                                   <i class="fas fa-map-marker-alt"></i>
                                               </div>
                                               <a href="#" class="map">
                                                   3, First Floor Nilgiri
                                                   Shopping Complex, New Delhi - 110019
           
                                               </a>
                                           </div>
                                           <div class="rts-footer-contact">
                                               <div class="icon">
                                                   <i class="fas fa-phone-alt"></i>
                                               </div>
                                               <a href="#" class="call">
                                                   +2154-215.123648
                                               </a>
                                           </div>
                                           <div class="rts-footer-contact">
                                               <div class="icon">
                                                   <i class="fas fa-envelope"></i>
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
              <button class="close-icon-menu"><i class="far fa-times"></i></button>
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
                                    target="_blank" href="https://www.facebook.com/devoirdesignsofficial"><i class="fab fa-facebook-f"></i></a></li>
                            <li data-sal-delay="350" data-sal="slide-up" data-sal-duration="800" class="sal-animate"><a
                                    target="_blank" href="https://www.linkedin.com/company/devoir-designs/"><i class="fab fa-linkedin-in"></i></a></li>
                            <li data-sal-delay="450" data-sal="slide-up" data-sal-duration="800" class="sal-animate"><a
                                    target="_blank" href="https://www.instagram.com/devoirdesigns/"><i class="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                    <div class="get-in-touch mt--50">
                        <!-- title -->
                        <div class="h6 title">Get In Touch</div>
                        <!-- title End -->
                        <div class="wrapper">
                            <!-- single -->
                            <div class="single">
                                <i class="fas fa-phone-alt"></i>
                                <a href="__phone_num">+91 9810416275</a>
                            </div>
                            <!-- single ENd -->
                            <!-- single -->
                            <div class="single">
                                <i class="fas fa-envelope"></i>
                                <a href="mailto:info@devoirdesigns.com">info@devoirdesigns.com</a>
                            </div>
                            <!-- single ENd -->
                            <!-- single -->
                            <div class="single">
                                <i class="fas fa-globe"></i>
                                <a href="https://portfolio.devoirdesigns.com/">Portfolio</a>
                            </div>
                            <!-- single ENd -->
                            <!-- single -->
                            <div class="single">
                                <i class="fas fa-map-marker-alt"></i>
                                <a href="#">3, First Floor Nilgiri Shopping Complex, New Delhi - 110019</a>
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
                                    target="_blank" href="https://www.facebook.com/devoirdesignsofficial"><i class="fab fa-facebook-f"></i></a></li>
                            <li data-sal-delay="350" data-sal="slide-up" data-sal-duration="800" class="sal-animate"><a
                                    target="_blank" href="https://www.linkedin.com/company/devoir-designs/"><i class="fab fa-linkedin-in"></i></a></li>
                            <li data-sal-delay="450" data-sal="slide-up" data-sal-duration="800" class="sal-animate"><a
                                    target="_blank" href="https://www.instagram.com/devoirdesigns/"><i class="fab fa-instagram"></i></a></li>
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
const clientsLogosTemplate = (clientElement) => {
  if (clientElement) {
    brandLogos.forEach((brand) => {
      const card = document.createElement("div");
      card.classList.add("col-4", "col-md-3", "col-lg-2");
      card.innerHTML = `<img src="${brand}" alt="brands images"/>`;
      clientElement.appendChild(card);
    });
  }
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
                  <div class="service_body">
                    <h3 class="c-light">${service.name}</h3>
                    <p class="disc c-light">${service.content}</p>
                  </div>
        </div>
      `;
    parientContainer.appendChild(serviceCard);
  });
};

// Main Menu Template
// const mainMenuTemplate = (parientContainer) => {
//   if (!parientContainer) {
//     console.log("Main menu parent container not found!");
//     return false;
//   }
//   mainMenu.forEach((menu) => {
//     const menuLink = document.createElement("li");
//     if (menu.subMenu) {
//       menuLink.classList.add("has-dropdown");
//       let subMenuLink = document.createElement("li");
//       let subMenuRef = parientContainer.querySelector(".submenu");
//       menuLink.innerHTML = `
//       <a href="${menu.link}">${menu.name}</a>
//       `;
//       subMenuRef.appendChild(subMenuLink);
//     }
//     menuLink.innerHTML = `<a href="${menu.link}">${menu.name}</a>`;
//     parientContainer.appendChild(menuLink);
//   });
// };

// Assuming there is an HTML container for the main menu

document.addEventListener("DOMContentLoaded", () => {
  headerTemplate(header);
  footerTemplate(footerContainer);
  sidebarTemplate(sideBar);
  clientsLogosTemplate(brandWrapper);
  processBarTemplate(processBar);
  addPhone();
  servicePageTemplate(servicePageContainer);
  //   mainMenuContainer.forEach((menu) => mainMenuTemplate(menu));
});
