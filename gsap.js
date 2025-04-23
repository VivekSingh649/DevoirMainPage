gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".scroll-text").forEach((textRow, index) => {
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

const revealContainers = document.querySelectorAll(".reveal");
if (revealContainers.length) {
  revealContainers.forEach((container) => {
    const image = container.querySelector("img");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        toggleActions: "play none none none",
      },
    });
    tl.set(container, { autoAlpha: 1 });
    tl.from(container, {
      duration: 1.5,
      xPercent: -100,
      ease: "power2.out",
    });
    tl.from(
      image,
      {
        duration: 1.5,
        xPercent: 100,
        scale: 1.3,
        delay: -1.5,
        ease: "power2.out",
      },
      0
    );
  });
} else {
  console.log("No length Found!");
}
