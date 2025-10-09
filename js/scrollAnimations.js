  document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          // Pour ne pas relancer l'animation à chaque fois :
        }
      });
    }, {
      threshold: 0.2 // le pourcentage de la section visible avant déclenchement
    });

    sections.forEach((section) => {
      observer.observe(section);
    });
  });
