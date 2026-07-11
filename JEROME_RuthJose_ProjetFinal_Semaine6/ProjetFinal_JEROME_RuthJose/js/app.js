/* =========================================================
   PORTFOLIO — Ruth-Jose JEROME
   app.js : interactions front (menu, validation, feedback)
   Chargé avec "defer" pour ne pas bloquer le rendu de la page.
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  initMobileMenu();
  initActiveNavOnScroll();
  initSkillBars();
  initContactForm();
  initHeroTypewriter();
});

/* ---------- Effet "machine à écrire" sur le titre du Hero ---------- */
function initHeroTypewriter() {
  const el = document.getElementById("heroTypewriter");
  if (!el) return;

  const lines = [
    "Je suis Ruth-Jose JEROME,",
    "développeuse passionnée par les expériences numériques modernes.",
  ];

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Si la personne a demandé moins d'animations, on affiche le texte directement
  if (prefersReduced) {
    lines.forEach(function (line, i) {
      if (i > 0) el.appendChild(document.createElement("br"));
      el.appendChild(document.createTextNode(line));
    });
    return;
  }

  let lineIndex = 0;
  let charIndex = 0;

  function typeNextChar() {
    if (lineIndex >= lines.length) return;

    const currentLine = lines[lineIndex];

    if (charIndex === 0 && lineIndex > 0) {
      el.appendChild(document.createElement("br"));
    }

    el.appendChild(document.createTextNode(currentLine.charAt(charIndex)));
    charIndex++;

    if (charIndex < currentLine.length) {
      setTimeout(typeNextChar, 35);
    } else {
      lineIndex++;
      charIndex = 0;
      if (lineIndex < lines.length) {
        setTimeout(typeNextChar, 400);
      }
    }
  }

  setTimeout(typeNextChar, 300);
}

/* ---------- Menu mobile (hamburger) ---------- */
function initMobileMenu() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Ferme le menu automatiquement quand on clique sur un lien (mobile)
  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------- Mise en surbrillance du lien actif au scroll (page d'accueil) ---------- */
function initActiveNavOnScroll() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".main-nav a");
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach(function (link) {
            const href = link.getAttribute("href") || "";
            link.classList.toggle("active", href.endsWith("#" + id));
          });
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });
}

/* ---------- Animation des barres de compétences quand elles entrent dans l'écran ---------- */
function initSkillBars() {
  const bars = document.querySelectorAll(".skill-bar span[data-width]");
  if (!bars.length) return;

  const observer = new IntersectionObserver(
    function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const bar = entry.target;
          bar.style.width = bar.getAttribute("data-width") + "%";
          obs.unobserve(bar);
        }
      });
    },
    { threshold: 0.4 }
  );

  bars.forEach(function (bar) {
    observer.observe(bar);
  });
}

/* ---------- Validation du formulaire de contact (front uniquement) ---------- */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const feedback = document.getElementById("formFeedback");

  const fields = {
    nom: {
      input: document.getElementById("nom"),
      wrapper: document.getElementById("fieldNom"),
      error: document.getElementById("errNom"),
      validate: function (value) {
        if (!value.trim()) return "Merci d'indiquer votre nom.";
        if (value.trim().length < 2) return "Le nom doit contenir au moins 2 caractères.";
        return "";
      },
    },
    email: {
      input: document.getElementById("email"),
      wrapper: document.getElementById("fieldEmail"),
      error: document.getElementById("errEmail"),
      validate: function (value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) return "Merci d'indiquer votre adresse e-mail.";
        if (!emailRegex.test(value.trim())) return "Cette adresse e-mail ne semble pas valide.";
        return "";
      },
    },
    message: {
      input: document.getElementById("message"),
      wrapper: document.getElementById("fieldMessage"),
      error: document.getElementById("errMessage"),
      validate: function (value) {
        if (!value.trim()) return "Merci de rédiger un message.";
        if (value.trim().length < 10) return "Votre message est un peu court (10 caractères minimum).";
        return "";
      },
    },
  };

  // Validation en direct pendant la saisie
  Object.values(fields).forEach(function (field) {
    field.input.addEventListener("input", function () {
      validateField(field);
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isFormValid = true;
    Object.values(fields).forEach(function (field) {
      const valid = validateField(field);
      if (!valid) isFormValid = false;
    });

    if (isFormValid) {
      showFeedback("Merci ! Votre message a bien été envoyé (démonstration front-end).", "ok");
      form.reset();
      Object.values(fields).forEach(function (field) {
        field.wrapper.classList.remove("invalid");
      });
    } else {
      showFeedback("Merci de corriger les champs signalés avant d'envoyer le message.", "ko");
    }
  });

  function validateField(field) {
    const message = field.validate(field.input.value);
    field.error.textContent = message;
    field.wrapper.classList.toggle("invalid", Boolean(message));
    return !message;
  }

  function showFeedback(text, type) {
    feedback.textContent = text;
    feedback.className = "form-feedback show " + type;
  }
}
