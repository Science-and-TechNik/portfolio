const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll(".navbar a");
const revealItems = document.querySelectorAll(".reveal");
const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector(".form-status");

if (menuIcon && navbar) {
    menuIcon.addEventListener("click", () => {
        navbar.classList.toggle("active");
        menuIcon.textContent = navbar.classList.contains("active") ? "Close" : "Menu";
    });
}

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

    if (navbar && menuIcon) {
        navbar.classList.remove("active");
        menuIcon.textContent = "Menu";
    }
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.16 });

revealItems.forEach((item) => revealObserver.observe(item));

if (contactForm && formStatus) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        formStatus.textContent = "Message preview ready. Connect the form to EmailJS or a backend to send it.";
    });
}
