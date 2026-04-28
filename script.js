// ===== CONTACT FORM HANDLING =====

// Select form and message area
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

// Add event listener when form is submitted
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    // Display success message
    message.textContent = "Message sent successfully!";
    message.style.color = "green";

    // Clear form fields
    form.reset();
});


// ===== OPTIONAL: SMOOTH SCROLL (extra control) =====

// Select all navigation links
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});
