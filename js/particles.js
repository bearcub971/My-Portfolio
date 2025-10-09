particlesJS("particles-js", {
  particles: {
    number: { value: 70, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 2 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" }, // éloigne les particules
      onclick: { enable: true, mode: "push" } // ajoute des particules au clic
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 }
    }
  },
  retina_detect: true
});
