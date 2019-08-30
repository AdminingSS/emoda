import 'slick-carousel/slick/slick.min';
import 'slick-carousel/slick/slick.less';
import 'slick-carousel/slick/slick-theme.less';

$(() => {
    (() => {
        const $tabsWrapper = $('.tm-tabs-wrapper');
        const $sliderTop = $('.tm-slider-top-body');
        const $prevArrowTop = $('.tm-slider-top-wrap .tm-button-round-left');
        const $nextArrowTop = $('.tm-slider-top-wrap .tm-button-round-right');
        const $sliderTopImages = $('.tm-slider-top-image >div');
        const $sliderTopImage = [];
        const $image = $($sliderTopImages[0]);
        const $sliderSales = $tabsWrapper.find('.tm-tab-slider');
        const $prevArrowSales = $('.tm-tabs-sales .tm-button-round-left');
        const $nextArrowSales = $('.tm-tabs-sales .tm-button-round-right');
        const sliderTopOptions = {
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: $prevArrowTop,
            nextArrow: $nextArrowTop,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: true,
            pauseOnFocus: true,
            speed: 800
        };
        const sliderSalesOptions = {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            swipe: true,
            swipeToSlide: true,
            responsive: [
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        $sliderTopImages.each(function () {
            $sliderTopImage.push($(this));
        });

        $sliderTopImages.removeClass('uk-hidden');

        $sliderTop.on('init', loadFirstImage);
        $sliderTop.on('beforeChange', function (event,slick,currentSlide) {
            removeImage(currentSlide);
        });
        $sliderTop.on('afterChange', function (event,slick,currentSlide) {
            loadImage(currentSlide);
        });

        $sliderTop.slick(sliderTopOptions);
        $sliderSales.slick(sliderSalesOptions);

        $prevArrowTop.on('click', sliderPause);
        $nextArrowTop.on('click', sliderPause);

        $prevArrowSales.on('click', function () {
            const $activeSlider = $tabsWrapper.find('.uk-active .tm-tab-slider');
            $activeSlider.slick('slickPrev');
        });
        $nextArrowSales.on('click', function () {
            const $activeSlider = $tabsWrapper.find('.uk-active .tm-tab-slider');
            $activeSlider.slick('slickNext');
        });

        function loadFirstImage() {

            setTimeout(function () {
                $image.addClass('tm-active');
            },500);

        }

        function removeImage (num) {
            //$($sliderTopImages[num]).removeClass('tm-active');
            $sliderTopImage[num].removeClass('tm-active');
        }

        function loadImage (num) {
            //$($sliderTopImages[num]).addClass('tm-active');
            $sliderTopImage[num].addClass('tm-active');
        }

        function sliderPause() {
            $sliderTop.slick('slickPause');
            setTimeout(function () {
                $sliderTop.slick('slickPlay');
            }, 50000);
        }
    })();
});