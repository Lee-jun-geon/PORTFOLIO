document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll("header, .main-section > h1, .title-img > li, .about-section, .projects-section, .contact-section");

    elements.forEach((el, index) => {
        el.style.opacity = "0";
        el.style.transform = "translateX(-100px)";
        el.style.transition = `opacity 0.8s ease-out ${index * 0.2}s, transform 0.8s ease-out ${index * 0.2}s`;
    });

    setTimeout(() => {
        elements.forEach((el) => {
            el.style.opacity = "1";
            el.style.transform = "translateX(0)";
        });
    }, 100);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
