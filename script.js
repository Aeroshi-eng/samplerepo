// 1. Welcome Message

function showWelcome() {
    alert("Welcome to Aeroshi's Portfolio!");
}


// 2. Dark and Light Mode

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeToggle.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        themeToggle.textContent = "🌙";

        localStorage.setItem("theme", "light");

    }

});


// Load Saved Theme

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeToggle.textContent = "☀️";

}


// 3. Mobile Navigation

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close Menu After Clicking a Link

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// 4. Contact Form Validation

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {

        formMessage.textContent = "Please fill in all fields.";

        return;

    }

    formMessage.textContent =
        "Thank you, " + name + "! Your demo message was submitted.";

    contactForm.reset();

});


// 5. Display Current Year

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// 6. Scroll To Top Button

const scrollTop = document.getElementById("scrollTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        scrollTop.style.display = "block";

    } else {

        scrollTop.style.display = "none";

    }

});

scrollTop.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});