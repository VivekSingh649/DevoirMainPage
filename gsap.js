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

setTimeout(() => {
  const revealContainers = document.querySelectorAll(".reveal");

  if (revealContainers.length) {
    revealContainers.forEach((container) => {
      const image = container.querySelector("img");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          // start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      tl.set(container, { autoAlpha: 0 });

      tl.to(container, {
        autoAlpha: 1,
        yPercent: 0,
        duration: 1,
        ease: "power2.out",
      });

      tl.fromTo(
        image,
        {
          yPercent: -100,
          scale: 1.3,
        },
        {
          yPercent: 0,
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
        },
        "<"
      );
    });
  } else {
    console.log("No reveal containers found!");
  }
}, 1500);
