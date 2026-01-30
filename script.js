/* =========================================================
   PRELOADER
========================================================= */
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
        preloader.style.opacity = "0";
        setTimeout(() => preloader.style.display = "none", 500);
    }
});

/* =========================================================
   DARK / LIGHT MODE TOGGLE
========================================================= */
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    root.setAttribute("data-theme", savedTheme);
}

// Toggle theme
themeToggle.addEventListener("click", () => {
    const currentTheme = root.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
});

/* =========================================================
   TYPED EFFECT (HERO SECTION)
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
    new Typed("#typed", {
        strings: [
            "Full Stack Agency",
            "SEO & Marketing",
            "WordPress Agency",
            "TYPO3 Agency",
            "Tutorial Platform"
        ],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 1500,
        loop: true
    });
});

/* =========================================================
   BACK TO TOP BUTTON
========================================================= */
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/* =========================================================
   SMOOTH SCROLL FOR INTERNAL LINKS
========================================================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

/* =========================================================
   CONTACT FORM (Honeypot Protection)
========================================================= */
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        const honeypot = contactForm.querySelector('input[name="website"]');
        if (honeypot && honeypot.value.trim() !== "") {
            e.preventDefault(); // Bot detected
            return;
        }
    });
}