const mainServices = [
  {
    name: "Branding",
    thumbnail:
      "https://ddlanding.netlify.app/.netlify/images/?url=assets/images/service/branding.webp",
    icon: "assets/images/service/09.svg",
    link: "service/branding.html",
    content:
      "Building brands from scratch and rejuvenating old ones, we integrate design thinking in our branding philosophy to create memorable brands.",
  },
  {
    name: "Marketing",
    thumbnail:
      "https://ddlanding.netlify.app/.netlify/images/?url=assets/images/service/marketing.webp",
    link: "service/service-details.html",
    icon: "assets/images/service/10.svg",
    content:
      "We create meaningful first impressions of your brand through designs that are stunning & rousing.",
  },
  {
    name: "Designing",
    thumbnail:
      "https://ddlanding.netlify.app/.netlify/images/?url=assets/images/service/graphic design.webp",
    link: "service/service-details.html",
    icon: "assets/images/service/11.svg",
    content:
      "We elevate your brand through successful marketing strategies that satisfy the needs of an ever-changing digital world.",
  },
  {
    name: "Web Development",
    thumbnail:
      "https://ddlanding.netlify.app/.netlify/images/?url=assets/images/service/Web-developemt.webp",
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
    link: "/index.html",
  },
  {
    name: "About Us",
    link: "/about-us.html",
  },
  {
    name: "Our Services",
    link: "/our-services.html",
    subMenu: [
      { name: "Branding", link: "/service/branding.html" },
      { name: "Marketing", link: "/service/marketing.html" },
      { name: "Designing", link: "/service/designing.html" },
      { name: "Web Development", link: "/service/web-development.html" },
    ],
  },
  {
    name: "Contact Us",
    link: "/contact-us.html",
  },
  {
    name: "Blogs",
    link: "https://blog.devoirdesigns.com/",
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
    type: "text",
    name: "subject",
    placeHolder: "Suject",
    required: false,
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
    keyword: "Art Design, Marketing, Web Development",
    link: "https://oneiroeducation.com/",
    image:
      "https://ddlanding.netlify.app/.netlify/images?url=assets/projects/onerio.webp",
    isPortrait: 70,
  },
  {
    name: "Deepmala Sarees",
    keyword: "Branding, Art Design, Marketing",
    link: "https://www.instagram.com/deepmalasarees/",
    image:
      "https://ddlanding.netlify.app/.netlify/images?url=assets/projects/deepmala.webp",
    isPortrait: 30,
  },
  {
    name: "OnWood Products",
    keyword: "Branding, Strategy, Art Design, Marketing, Web Development",
    link: "https://onwoodproducts.co/",
    image:
      "https://ddlanding.netlify.app/.netlify/images?url=assets/projects/onwoods.png",
    isPortrait: 50,
  },
  {
    name: "Resolve Rights",
    keyword: "Branding, Strategy, Art Design, Marketing, Web Development",
    link: "https://onwoodproducts.co/",
    image:
      "https://ddlanding.netlify.app/.netlify/images?url=assets/projects/resolve-right.png",
    isPortrait: 50,
  },
  {
    name: "Hartansh",
    keyword: "Branding, Art Design, Marketing, Web Development",
    link: "https://www.instagram.com/hartansh.official/",
    image:
      "https://ddlanding.netlify.app/.netlify/images?url=assets/projects/hartansh.official.webp",
    isPortrait: 70,
  },
  {
    name: "Neumaticoshuecha",
    keyword: "Branding, Web Development, Marketing",
    link: "https://www.neumaticoshuecha.com/",
    image:
      "https://ddlanding.netlify.app/.netlify/images?url=assets/projects/neumaticoshuecha.webp",
    isPortrait: 30,
  },
  {
    name: "Curagers",
    keyword: "Art Design, Marketing, Web Development",
    link: "https://curagers.com/",
    image:
      "https://ddlanding.netlify.app/.netlify/images?url=assets/projects/curagers.webp",
    isPortrait: 50,
  },
  {
    name: "Kabsons Global",
    keyword: "Branding, Web Mangment, Marketing",
    link: "https://kabsonsglobal.com/",
    image:
      "https://ddlanding.netlify.app/.netlify/images?url=assets/projects/kaptions.webp",
    isPortrait: 50,
  },
  {
    name: "The Fitsapiens",
    keyword: "Art Design, Marketing, Web Development",
    link: "https://thefitsapiens.com/",
    image:
      "https://ddlanding.netlify.app/.netlify/images?url=assets/projects/fitsapiens.webp",
    isPortrait: 30,
  },
  {
    name: "Mela Artisans",
    keyword: "Branding, Web Mangment, Marketing",
    link: "https://melaartisans.com/",
    image:
      "https://ddlanding.netlify.app/.netlify/images?url=assets/projects/melaartisans.com.webp",
    isPortrait: 70,
  },
];

const clinetsTestimonials = [
  {
    name: "Jatin Gupta",
    reviewContent:
      "Really great team, they helped us with really great work of creatives and content for our social media and websites. Would highly suggest them for someone looking for quality work at good price. <br>Cheers to team Babita.",
    brandLogo: "/assets/logo/green-earth.png",
  },
  {
    name: "Surbhi sachdeva",
    reviewContent:
      "Highly qualified and experienced team. They take care of eacha nsd every word told by their clients and make the social media look as beautiful and powerful as promised.",
    brandLogo: "/assets/logo/logo-26.webp",
  },
  {
    name: "Sagar Jaggal",
    reviewContent:
      "Absolutely commendable work. Committed and disciplined towards the work. 100 % recommended",
    brandLogo: "/assets/logo/cafe-by-soul.svg",
  },
  {
    name: "Ravi saxena",
    reviewContent:
      "Really appreciate their work and professionalism…all the best to Devoir team and thanks for their work",
    brandLogo: "/assets/logo/upgrada.jpg",
  },
];
