document.addEventListener("DOMContentLoaded", () => {
  
   //Lang switcher 
  const toggle = document.getElementById("lang-toggle");
  let currentLang = "en";

  toggle.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "es" : "en";
    toggle.textContent = currentLang === "en" ? "ES" : "EN";
    setLanguage(currentLang);
  });

  // Inicial
  setLanguage(currentLang);

  // HERO TEXT OPACITY ON SCROLL
const heroText = document.getElementById("hero-text");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const fadeStart = 50;
  const fadeUntil = 300;
  const opacity = 1 - Math.min(Math.max((scrollY - fadeStart) / (fadeUntil - fadeStart), 0), 1);
  heroText.style.opacity = opacity;
});

// GALERÍA: APARECER DESDE LADOS
const imgItems = document.querySelectorAll(".img-item");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

imgItems.forEach(img => observer.observe(img));

// FILTRADO
document.querySelectorAll(".filtro").forEach(btn => {
  btn.addEventListener("click", () => {
    const filtro = btn.getAttribute("data-filtro");

    document.querySelectorAll(".filtro").forEach(b => b.classList.remove("activo"));
    btn.classList.add("activo");

    document.querySelectorAll(".img-item").forEach(img => {
      if (filtro === "all" || img.classList.contains(filtro)) {
        img.style.display = "block";
      } else {
        img.style.display = "none";
      }
    });
  });
});

});
