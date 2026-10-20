document.addEventListener("DOMContentLoaded", () => {

    const menuButton = document.getElementById("menuButton");
    const navLinks = document.querySelector(".nav-links");
    const navbar = document.querySelector(".navbar");

    /* =========================
       MOBILE MENU
    ========================= */

    if (menuButton && navLinks) {

        menuButton.addEventListener("click", () => {
            navLinks.classList.toggle("show");
            menuButton.classList.toggle("open");
        });

        // Close menu after clicking a link
        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {
                navLinks.classList.remove("show");
                menuButton.classList.remove("open");
            });

        });
    }


    /* =========================
       NAVBAR SCROLL EFFECT
    ========================= */

    window.addEventListener("scroll", () => {

        if (window.scrollY > 30) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });

});// document.addEventListener("DOMContentLoaded", () => {

//     const menuButton = document.getElementById("menuButton");
//     const navLinks = document.querySelector(".nav-links");
//     const navbar = document.querySelector(".navbar");

//     /* =========================
//        MOBILE MENU
//     ========================= */

//     if (menuButton && navLinks) {

//         menuButton.addEventListener("click", () => {
//             navLinks.classList.toggle("show");
//             menuButton.classList.toggle("open");
//         });

//         // Close menu after clicking a link
//         navLinks.querySelectorAll("a").forEach(link => {

//             link.addEventListener("click", () => {
//                 navLinks.classList.remove("show");
//                 menuButton.classList.remove("open");
//             });

//         });
//     }


//     /* =========================
//        NAVBAR SCROLL EFFECT
//     ========================= */

//     window.addEventListener("scroll", () => {

//         if (window.scrollY > 30) {
//             navbar.classList.add("scrolled");
//         } else {
//             navbar.classList.remove("scrolled");
//         }

//     });

// });


//     /* =========================================
//        HERO ENTRANCE ANIMATION
//     ========================================= */

//     const heroContent = document.querySelector(".hero-content");

//     if (heroContent) {

//         setTimeout(() => {

//             heroContent.classList.add("hero-loaded");

//         }, 150);

//     }

// Contact Form

const contactForm = document.querySelector("#contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const name = document.querySelector("#name").value;

        alert(`Thanks ${name}! We'll get back to you soon.`);

        contactForm.reset();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    // Show/Hide button on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add("show");
        } else {
            scrollTopBtn.classList.remove("show");
        }
    });

    // Scroll smoothly to top on click
    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

//////////////////////////////navbar/////////////////////////


document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("section[id]");
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    // 1. Toggle background style on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        // Show/Hide Go To Top Button
        if (scrollTopBtn) {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add("show");
            } else {
                scrollTopBtn.classList.remove("show");
            }
        }

        // 2. Highlight Nav Link on Scroll (Scrollspy)
        let currentSectionId = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 120; // Offset for fixed navbar height
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });
    });

    // 3. Move active green underline immediately on link click
    navLinks.forEach((link) => {
        link.addEventListener("click", function () {
            navLinks.forEach((nav) => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // 4. Scroll smoothly to top on Go To Top click
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});


// Trigger "Why Choose NexByte" card animation on scroll
document.addEventListener("DOMContentLoaded", () => {
    const whySection = document.querySelector(".why-nexbyte");

    if (whySection) {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        whySection.classList.add("animate");
                        observer.unobserve(entry.target); // Run only once
                    }
                });
            },
            { threshold: 0.2 } // Triggers when 20% of the section is visible
        );

        observer.observe(whySection);
    }
});

// Interactive 3D Tilt Effect for the N visual card
document.addEventListener("DOMContentLoaded", () => {
    const visualCard = document.querySelector(".visual-window");

    if (visualCard) {
        visualCard.addEventListener("mousemove", (e) => {
            const rect = visualCard.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            // Calculates tilt angles
            const tiltX = (y / (rect.height / 2)) * -12;
            const tiltY = (x / (rect.width / 2)) * 12;

            visualCard.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.03, 1.03, 1.03)`;
        });

        visualCard.addEventListener("mouseleave", () => {
            // Reset position on mouse leave
            visualCard.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
        });
    }
});


