document.addEventListener("DOMContentLoaded", () => {
  const heroText = document.getElementById("hero-text");
  const toggle = document.getElementById("lang-toggle");
  let currentLang = "en";

  // Scroll para desvanecer hero
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const fadeStart = 50;
    const fadeUntil = 300;
    const opacity = 1 - Math.min(Math.max((scrollY - fadeStart) / (fadeUntil - fadeStart), 0), 1);
    heroText.style.opacity = opacity;
  });

  // Cambiar idioma
  toggle.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "es" : "en";
    toggle.textContent = currentLang === "en" ? "ES" : "EN";
    setLanguage(currentLang);
  });

  // Cargar idioma inicial
  setLanguage(currentLang);
});
