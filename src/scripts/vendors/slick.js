import 'slick-carousel/slick/slick.min';
import 'slick-carousel/slick/slick.less';
import 'slick-carousel/slick/slick-theme.less';

$(() => {

    (() => {

        const $tabsWrapper = $('.tm-tabs-wrapper');

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
            pauseOnFocus: true,
            speed: 2800
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

        $sliderTop.on('init', function () {
            const $image = $sliderTop.find('.slick-current img');

            //$image.css('width',0);
            // $image.css('left','150%');
            // $image.animate({
            //     //width: '100%',
            //     left: '50%'
            // }, 2000);

            // $image.animate({  textIndent: 0 /* или любое другое не очень-то нужное здесь свойство */ }, {
            //     step: function(now, fx) {
            //         $(this).css('transform','translateX(' + now + '%)');
            //     },
            //     duration: 'slow'
            // }, 'linear');

            // console.log($image);
            // $image.removeClass('slick-active').delay(1000).addClass('slick-active');
            //
            // //$image.addClass('no-transition');
            $image.addClass('animate-on-start');
            // setTimeout(function () {
            //     $image.addClass('animate-on-start');
            // }, 800);


            // $image.removeClass('no-transition');
            // $image.addClass('reanimate-on-start');
            // $image.animate({
            //     opacity: 1
            // }, 5000, function() {
            //     // Animation complete.
            // });
        });

        // $sliderTop.on('beforeChange', function () {
        //
        //     const $image = $(this).find('.slick-current img');
        //     console.log($image);
        //     $image.animate({
        //         left: '150%'
        //     }, 800, function () {
        //         $image.css('left','50%');
        //     });
        //
        // });

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

        function sliderPause() {
            $sliderTop.slick('slickPause');
            setTimeout(function () {
                $sliderTop.slick('slickPlay');
            }, 50000);
        }
    })();
});


