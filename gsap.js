gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".scroll-text").forEach((textRow, index) => {
  const direction = index % 2 === 0 ? 100 : -100;

  gsap.to(textRow, {
    xPercent: direction,
    ease: "power2.out",
    scrollTrigger: {
      trigger: textRow,
      start: "top bottom",
      end: "bottom top",
      scrub: 0.5,
      toggleActions: "play none none reverse",
    },
    onStart: () => {
      textRow.style.willChange = "transform";
    },
    onComplete: () => {
      textRow.style.willChange = "auto";
    },
  });
});

document.querySelectorAll("img").forEach((img) => {
  img.setAttribute("loading", "lazy");
});
