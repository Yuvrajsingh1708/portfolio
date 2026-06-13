AOS.init({
    duration: 1000,
    once: true
});

/* -------------------------
   PARTICLES BACKGROUND
--------------------------*/
particlesJS("particles-js", {
    particles: {
        number: { value: 60 },
        color: { value: "#38bdf8" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 3 },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#8b5cf6",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2
        }
    }
});

/* -------------------------
   TYPING EFFECT
--------------------------*/
const typingText = document.querySelector(".typing-text");

const roles = [
    "Senior Software Engineer",
    "Java Backend Developer",
    "Microservices Architect",
    "Cloud Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;

function typeRole() {
    if (charIndex < roles[roleIndex].length) {
        typingText.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeRole, 100);
    } else {
        setTimeout(eraseRole, 1500);
    }
}

function eraseRole() {
    if (charIndex > 0) {
        typingText.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseRole, 50);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeRole, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeRole();
});

/* -------------------------
   COUNTER ANIMATION
--------------------------*/
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCount, 30);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});

/* -------------------------
   MOBILE MENU
--------------------------*/
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* -------------------------
   DARK / LIGHT MODE
--------------------------*/
const themeToggle = document.getElementById("themeToggle");

let darkMode = true;

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    darkMode = !darkMode;
    themeToggle.textContent = darkMode ? "🌙" : "☀️";
});

/* -------------------------
   CONTACT FORM (basic demo)
--------------------------*/
const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Message sent successfully 🚀 (Demo only)");

    form.reset();
});

/* -------------------------
   SMOOTH SCROLL NAV CLOSE
--------------------------*/
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});