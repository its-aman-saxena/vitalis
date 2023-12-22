var swiper = new Swiper(".cat-content", {
    slidesPerView: 8,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 4,
        },
        520: {
            slidesPerView: 4,
        },
        950: {
            slidesPerView: 8,
        },
    }
});
var swiper = new Swiper(".p2-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    }
});
var swiper = new Swiper(".p5-content", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 1,
        },
        950: {
            slidesPerView: 1,
        },
    }
});
var swiper = new Swiper(".a3-content", {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 4,
        },
    }
});
var swiper = new Swiper(".ss-content", {
    slidesPerView: 6,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    autoplay:{
        delay:2000,
    },
    breakpoints: {
        0: {
            slidesPerView: 3,
        },
        520: {
            slidesPerView: 6,
        },
        950: {
            slidesPerView: 6,
        },
    }
});

$(document).ready(function () {
    $('.item').slice(0, 4).fadeIn();
    $('.btn').click(function () {
        $('.item').slice(0, 12).fadeIn();
        $(this).fadeOut();
    });
});

let bigImg = document.querySelector('.big-img');
function showImg(pic) {
    bigImg.src = pic;
}