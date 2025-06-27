const translations = {
  en: {
    h1: "Guille Tattoo",
    subtitle: "Custom tattoos from Gold Coast, Australia.",
    "services-title": "Services",
    "about-title": "About Me",
    "about-text": `
      <p>
        I’m Guille, a tattoo artist based in Gold Coast with over 2 years of experience.<br>
        I specialize in detailed realism, clean fine lines, and bold lettering.<br>
        My goal is to turn your story into a piece of art that lives on your skin forever.
      </p>
    `,
    "contact-title": "Contact & Booking",
    "legal-title": "Legal Notice",
"legal-text": `
  <p>&copy; 2025 Guille Tattoo. All rights reserved.</p>
  <p>We may use cookies to improve user experience. By continuing, you agree to our cookie usage.</p>
`,
"cookie-text": "We use cookies to enhance your experience. By continuing, you accept them.",
"cookie-accept": "Accept"

  },
  es: {
    h1: "Guille Tattoo",
    subtitle: "Tatuajes personalizados desde Gold Coast, Australia.",
    "services-title": "Servicios",
    "about-title": "Sobre mí",
    "about-text": `
      <p>
        Soy Guille, tatuador en Gold Coast con más de 2 años de experiencia.<br>
        Me especializo en realismo detallado, líneas finas limpias y lettering potente.<br>
        Mi objetivo es convertir tu historia en una obra de arte que viva en tu piel para siempre.
      </p>
    `,
    "contact-title": "Contacto y Reservas",
    "legal-title": "Aviso legal",
"legal-text": `
  <p>&copy; 2025 Guille Tattoo. Todos los derechos reservados.</p>
  <p>Podemos utilizar cookies para mejorar tu experiencia. Al continuar, aceptas su uso.</p>
`,
"cookie-text": "Usamos cookies para mejorar tu experiencia. Al continuar, las aceptas.",
"cookie-accept": "Aceptar"

  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}
