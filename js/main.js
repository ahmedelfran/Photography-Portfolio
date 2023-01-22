
new CircleType(document.getElementById('p'));
new CircleType(document.getElementById('Pp'));
new CircleType(document.getElementById('Ppp'));


// ====================== swiper ======================
var swiper = new Swiper(".gallery", {
    slidesPerView: 3,
    spaceBetween: 50,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    gragCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        DynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    }
});


// ======================== nav bar ========

let navLinks = document.querySelector(".nav-links");
let navOpen = document.getElementById("nav-toggle-open");
let navClose = document.getElementById("nav-toggle-close");

navOpen.addEventListener("click", () => {
    navLinks.style.display = "flex";
    navOpen.style.display = "none"
    navClose.style.display = "flex";
});

let CloseNav = () => {
    navLinks.style.display = "none";
    navOpen.style.display = "flex"
    navClose.style.display = "none"
};

navClose.addEventListener("click", CloseNav);



if (document.body.clientWidth < 1024) {
    navLinks.querySelectorAll('li a').forEach(navLink => {
        navLink.addEventListener("click", CloseNav)
    });
}
