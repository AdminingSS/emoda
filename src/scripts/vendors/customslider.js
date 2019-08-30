$(()=>{

    (() => {

        const $sliderAbout = $('.tm-about-slider');
        const $sliderAboutSlides = $('.tm-about-slider-img-wrapper');
        const $sliderAboutPrevArrow = $('.tm-about-slider-controls .tm-button-round-left');
        const $sliderAboutNextArrow = $('.tm-about-slider-controls .tm-button-round-right');
        const slidesCount = $sliderAboutSlides.length;
        let currentSlideNumber = 0;
        let lastAction = '';
        let animationInProgress = false;
        let autoplayPaused = false;
        //let prevSlideNumber = slidesCount - 1;
        $($sliderAboutSlides[slidesCount - 1]).addClass('prev-slide');
        $($sliderAboutSlides[currentSlideNumber]).addClass('current-slide');
        $($sliderAboutSlides[currentSlideNumber + 1]).addClass('next-slide');

        let sliderAutoplay = setTimeout(nextSlide, 3000);

        $sliderAboutPrevArrow.on('click', manualPrevSlide);
        $sliderAboutNextArrow.on('click', manualNextSlide);

        function manualNextSlide() {
            pauseAutoplay();
            nextSlide();
        }

        function manualPrevSlide() {
            pauseAutoplay();
            prevSlide();
        }

        function pauseAutoplay() {
            autoplayPaused = true;
            clearTimeout(sliderAutoplay);
            setTimeout(function () {
                autoplayPaused = false;
                clearTimeout(sliderAutoplay);
                sliderAutoplay = setTimeout(nextSlide, 3000);
            }, 10000);
        }

        function prevSlide() {
            if(animationInProgress) return;
            animationInProgress = true;
            const prevSlideNumber = (currentSlideNumber === 0) ? slidesCount - 1 : currentSlideNumber - 1;
            const nextSlideNumber = (currentSlideNumber + 1 === slidesCount) ? 0 : currentSlideNumber + 1;
            const newPrevSlideNumber = (prevSlideNumber === 0) ? slidesCount - 1 : prevSlideNumber - 1;

            $($sliderAboutSlides[currentSlideNumber]).addClass('old-slide').removeClass('current-slide');
            $($sliderAboutSlides[prevSlideNumber]).addClass('current-slide').removeClass('prev-slide');
            $($sliderAboutSlides[newPrevSlideNumber]).addClass('prev-slide');
            $($sliderAboutSlides[nextSlideNumber]).removeClass('next-slide');

            setTimeout(function () {
                $($sliderAboutSlides[currentSlideNumber]).removeClass('old-slide').addClass('next-slide');
                currentSlideNumber = prevSlideNumber;
                animationInProgress = false;
            }, 700);

            if(!autoplayPaused) {
                clearTimeout(sliderAutoplay);
                sliderAutoplay = setTimeout(nextSlide, 3000);
            }
        }

        function nextSlide() {
            if(animationInProgress) return;
            animationInProgress = true;
            const prevSlideNumber = (currentSlideNumber === 0) ? slidesCount - 1 : currentSlideNumber - 1;
            const nextSlideNumber = (currentSlideNumber + 1 === slidesCount) ? 0 : currentSlideNumber + 1;
            const newNextSlideNumber = (nextSlideNumber + 1 === slidesCount) ? 0 : nextSlideNumber + 1;

            $($sliderAboutSlides[currentSlideNumber]).addClass('old-slide').removeClass('current-slide');
            $($sliderAboutSlides[nextSlideNumber]).addClass('current-slide').removeClass('next-slide');
            $($sliderAboutSlides[newNextSlideNumber]).addClass('next-slide');
            $($sliderAboutSlides[prevSlideNumber]).removeClass('prev-slide');

            setTimeout(function () {
                $($sliderAboutSlides[currentSlideNumber]).removeClass('old-slide').addClass('prev-slide');
                currentSlideNumber = nextSlideNumber;
                animationInProgress = false;
            }, 700);

            if(!autoplayPaused) {
                clearTimeout(sliderAutoplay);
                sliderAutoplay = setTimeout(nextSlide, 3000);
            }
        }
    })();
});


