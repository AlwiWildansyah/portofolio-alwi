// Animasi saat elemen masuk ke layar
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

// Pilih elemen yang akan dianimasikan
const elements = document.querySelectorAll(
    "#coding, #projects, #contact"
);

elements.forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
});

// NAVBAR MOBILE
const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
    );
});

// Tutup menu setelah link diklik
navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Buka menu navigasi");
    });
});


// ANIMASI KARTU SAAT SCROLL
const cards = document.querySelectorAll(
    ".project-card, .skill-card"
);

const cardObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const index = Array.from(cards).indexOf(
                    entry.target
                );

                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, (index % 3) * 120);

                cardObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.1
    }
);

cards.forEach((card) => {
    cardObserver.observe(card);
});