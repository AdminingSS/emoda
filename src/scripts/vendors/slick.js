import 'slick-carousel/slick/slick.min';
import 'slick-carousel/slick/slick.less';
import 'slick-carousel/slick/slick-theme.less';

$(()=>{

    (() => {

        const $tabsWrapper= $('.tm-tabs-wrapper');

        const $sliderTop = $('.tm-slider-top');
        const $prevArrowTop = $('.tm-slider-top-wrap .tm-button-round-left');
        const $nextArrowTop = $('.tm-slider-top-wrap .tm-button-round-right');

        const $sliderSales = $tabsWrapper.find('.tm-tab-slider');
        const $prevArrowSales = $('.tm-tabs-sales .tm-button-round-left');
        const $nextArrowSales = $('.tm-tabs-sales .tm-button-round-right');

        //const $sliderAbout = $('.tm-about-slider');

        const sliderTopOptions = {
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: $prevArrowTop,
            nextArrow: $nextArrowTop,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: true,
            pauseOnFocus: true
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
        // const sliderAboutOptions = {
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //     prevArrow: '.tm-about-slider-controls .tm-button-round-left',
        //     nextArrow: '.tm-about-slider-controls .tm-button-round-right'
        // };

        $sliderTop.slick(sliderTopOptions);
        $sliderSales.slick(sliderSalesOptions);
        //$sliderAbout.slick(sliderAboutOptions);

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

        function sliderPause () {
            $sliderTop.slick('slickPause');
            setTimeout(function () {
                $sliderTop.slick('slickPlay');
            }, 50000);
        }
    })();
});


