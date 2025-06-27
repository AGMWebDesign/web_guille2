const translations = {
  en: {
    h1: "Guille Tattoo",
    subtitle: "Custom tattoos from Gold Coast, Australia."
  },
  es: {
    h1: "Guille Tattoo",
    subtitle: "Tatuajes personalizados desde Gold Coast, Australia."
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}
