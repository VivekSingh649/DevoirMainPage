const mainServices = [
  {
    name: "Branding",
    thumbnail: "./assets/images/service/branding.webp",
    icon: "assets/images/service/09.svg",
    link: "service/branding.html",
    content:
      "Building brands from scratch and rejuvenating old ones, we integrate design thinking in our branding philosophy to create memorable brands.",
  },
  {
    name: "Marketing",
    thumbnail: "./assets/images/service/marketing.webp",
    link: "service/service-details.html",
    icon: "assets/images/service/10.svg",
    content:
      "We create meaningful first impressions of your brand through designs that are stunning & rousing.",
  },
  {
    name: "Designing",
    thumbnail: "./assets/images/service/graphic design.webp",
    link: "service/service-details.html",
    icon: "assets/images/service/11.svg",
    content:
      "We elevate your brand through successful marketing strategies that satisfy the needs of an ever-changing digital world.",
  },
  {
    name: "Web Development",
    thumbnail: "./assets/images/service/Web-developemt.webp",
    link: "service/service-details.html",
    icon: "assets/images/service/12.svg",
    content: `Transforming visions into digital realities, our website design
                and development services craft intuitive user experiences and
                visually stunning interfaces to captivate and engage audiences.`,
  },
];

const mainMenu = [
  {
    name: "Home",
    link: "/index",
  },
  {
    name: "About Us",
    link: "/about-us",
  },
  {
    name: "Our Services",
    link: "/our-services",
    subMenu: [
      { name: "Branding", link: "/service/branding" },
      { name: "Marketing", link: "/service/marketing" },
      { name: "Designing", link: "/service/designing" },
      { name: "Web Development", link: "/service/web-development" },
    ],
  },
  {
    name: "Contact Us",
    link: "/contact-us",
  },
  {
    name: "Portfolio",
    link: "https://portfolio.devoirdesigns.com/",
  },
];

const ourValues = [
  {
    title: "Timely Delivery",
    icon: "./assets/images/svg/timing.svg",
    bodyContent:
      "We understand the importance of deadlines and commit to delivering exceptional results on time.",
  },
  {
    title: "Unwavering Creativity",
    bodyContent:
      "Creativity is at the heart of What We Do?. We push boundaries and bring fresh, innovative ideas.",
    icon: "./assets/images/svg/solution.svg",
  },
  {
    title: "Synergistic Collaboration",
    bodyContent:
      "We believe in the power of teamwork. By working closely with you, we ensure that your vision and our expertise align perfectly for maximum impact.",
    icon: "./assets/images/svg/collaborate.svg",
  },
  {
    title: "Engaging Content Strategy",
    bodyContent:
      "Our approach goes beyond just creating content; we craft meaningful, engaging stories that resonate with your audience and elevate your brand.",
    icon: "./assets/images/svg/business.svg",
  },
];

const formStructure = [
  {
    type: "text",
    name: "full-name",
    placeHolder: "Your Name",
    required: true,
  },
  {
    type: "email",
    name: "email",
    placeHolder: "Enter Email",
    required: true,
  },
  {
    type: "text",
    name: "number",
    placeHolder: "Phone Number",
    required: true,
  },
  {
    type: "textarea",
    name: "message",
    placeHolder: "Write your message here..",
    required: false,
  },
];

const portFolio = [
  {
    name: "Oneiro Education",
    keyword: "Branding, Strategy, Art Design, Marketing",
    link: "https://oneiroeducation.com/",
    image: "./assets/projects/onerio.webp",
  },
  {
    name: "Deepmala Sarees",
    keyword: "Branding, Strategy,Art Design, Marketing",
    link: "https://www.instagram.com/deepmalasarees/",
    image: "./assets/projects/deepmala.webp",
  },
  {
    name: "On Woods Products",
    keyword: "Branding, Strategy, Art Design, Marketing",
    link: "https://onwoodproducts.co/",
    image: "./assets/projects/onwoods.png",
  },
  {
    name: "Resolve Rights",
    keyword: "Branding, Strategy, Art Design, Marketing",
    link: "https://onwoodproducts.co/",
    image: "./assets/projects/resolve-right.png",
  },
  {
    name: "Hartansh Official",
    keyword: "Branding, Strategy, Art Design, Marketing",
    link: "https://www.instagram.com/hartansh.official/",
    image: "./assets/projects/hartansh.official.webp",
  },
  {
    name: "Neumaticoshuecha",
    keyword: "Branding, Web Development, Marketing",
    link: "https://www.neumaticoshuecha.com/",
    image: "./assets/projects/neumaticoshuecha.webp",
  },
  {
    name: "Curagers",
    keyword: "Branding, Strategy, Art Design, Marketing",
    link: "https://curagers.com/",
    image: "./assets/projects/curagers.webp",
  },
  {
    name: "Kabsons Global",
    keyword: "Branding, Web Mangment, Marketing",
    link: "https://kabsonsglobal.com/",
    image: "./assets/projects/kaptions.webp",
  },
];

const logoCount = 55;
const logos = Array.from(
  { length: logoCount },
  (_, i) => `assets/logo/logo-${i + 1}.webp`
);
console.log(logos);
