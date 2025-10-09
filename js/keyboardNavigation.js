// /js/keyboardNavigation.js

document.addEventListener("DOMContentLoaded", () => {
    const sections = Array.from(document.querySelectorAll("section"));
    let currentIndex = 0; // Index de la section actuelle
    let isScrolling = false;
  
    function scrollToSection(index) {
      if (index >= 0 && index < sections.length) {
        isScrolling = true;
        sections[index].scrollIntoView({ behavior: "smooth" });
        currentIndex = index;
        // Empêche le spam de touches
        setTimeout(() => (isScrolling = false), 1000);
      }
    }
  
    document.addEventListener("keydown", (event) => {
      if (isScrolling) return;
  
      if (event.key === "ArrowDown") {
        event.preventDefault();
        scrollToSection(currentIndex + 1);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        scrollToSection(currentIndex - 1);
      }
    });
  
    // Met à jour la section courante quand on scrolle à la main
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentIndex = sections.indexOf(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
  
    sections.forEach((section) => observer.observe(section));
  });
  

  // Met à jour l'année du footer automatiquement
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  });
  