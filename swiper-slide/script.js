const swiper = new Swiper(".swiper", {
    loop: 1,
    pagination: {
        el: ".swiper-pagination"
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    speed: 2100,
});