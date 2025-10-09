// /js/scrollAnimations.js
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
  
    const revealOnScroll = () => {
      const triggerBottom = window.innerHeight * 0.8;
  
      sections.forEach((section) => {
        const boxTop = section.getBoundingClientRect().top;
  
        if (boxTop < triggerBottom && !section.classList.contains("visible")) {
          // 1️⃣ Montre la section
          section.classList.add("visible");
  
          // 2️⃣ Fait apparaître les enfants avec délai progressif
          const fadeChildren = section.querySelectorAll(".fade-child");
          fadeChildren.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add("visible");
            }, index * 150); // délai de 150ms entre chaque élément
          });
        }
      });
    };
  
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
  });
  