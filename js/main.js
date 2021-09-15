$('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: '.slider__arrow-prev',
    responsive: [
        {
            breakpoint: 790,
            settings: {
                slidesToShow: 1,
                dots: true,
                nextArrow: '.slider__arrow-next',
                prevArrow: '.slider__arrow-prev',
            }
        }
    ],
  });

const shoes = [
    {
        name: 'Soft Black',
        images: [
            './images/gallery/shoes-black-2.jpg',
            './images/gallery/shoes-black-2.jpg',
            './images/gallery/shoes-black-2.jpg',
            './images/gallery/shoes-black-2.jpg',
        ],
    },
    {
        name: 'Soft Red',
        images: [
            './images/gallery/shoes-red-2.jpg',
            './images/gallery/shoes-red-2.jpg',
            './images/gallery/shoes-red-2.jpg',
            './images/gallery/shoes-red-2.jpg',
        ],
    },
];

const $shoes         = $('.shoes__image');
const $control       = $('.view__control button');
const $galleryLinks  = $('.gallery:visible a');
const $galleryImages = $('.gallery:visible a img');
const $shoesModel    = $('.form__shoes-model');

$control.on('click', function() {
    $shoes.toggleClass('active');

    const $active = $('.shoes__image.active');
    const index   = parseInt($active.data().shoesid);

    $galleryLinks.each(function (i, el) {
        el.href = shoes[index].images[i];
    });

    $galleryImages.each(function (i, el) {
        el.src = el.parentElement.pathname;
    });

    $shoesModel.text(shoes[index].name);
});

$('.gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{
        enabled:true
    }
});

$('.show_form').on('click', function() {
    $('.overlay').toggleClass('hide');
    $('.form__order').toggleClass('show');
});

$("a[href='#']").on('click', function(e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: parseInt($(".shoes-order").offset().top)
    }, 2000);
});