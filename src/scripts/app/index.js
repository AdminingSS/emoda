$(()=>{

    //Animate banner
    (() => {
        const $animateElems = $('.awaiting-animation');
        const $window = $(window);

        $window.on('load', animateElems);

        $window.on('scroll', animateElems);

        function animateElems() {
            $animateElems.each(function () {
                let translateCompensator = 700;
                if($window.width() < 480) translateCompensator = 900;
                if(this === $animateElems[0]) {
                    if ( $window.scrollTop() + $window.height() > $(this).offset().top - 300 ) {
                        $(this).removeClass('awaiting-animation');
                    }
                }
                else if ( $window.scrollTop() + $window.height() > $(this).offset().top - translateCompensator ) {
                    $(this).removeClass('awaiting-animation');
                }
            });
        }
    })();

    //News marquee
    (() => {
        const $newsButton = $('.tm-news-button');
        const $newsMarquee = $('.tm-news');
        const $newsCloseButton = $newsMarquee.find('.tm-button-close');

        $newsCloseButton.on('click', function (e) {
            e.preventDefault();

            $newsMarquee.addClass('uk-hidden');
            $newsButton.removeClass('uk-hidden');
        });

        $newsButton.on('click', function (e) {
            e.preventDefault();

            $newsButton.addClass('uk-hidden');
            $newsMarquee.removeClass('uk-hidden');
        });

    })();

    //Anchors scroll
    (()=>{
        $(".tm-js-menu").on("click","a", function (e) {
            e.preventDefault();

            const anchor  = $(this).attr('href'),
            top = $(anchor).offset().top;

            $('body,html').animate({scrollTop: top}, 1500);
        });

    })();

    //Clients hover
    (()=>{
        const $clientContainers = $('.tm-accordion-badge');
        let $currentLogo = '', $currentBadge = '';

        $clientContainers.each(function () {
            const $clientContainer = $(this);
            const $triggers = $clientContainer.find('span');
            const $logos = $clientContainer.find('.tm-clients-logo img');
            const $badge = $clientContainer.find('.tm-badge-arrow');

            $triggers.hover(
                function() {
                    $($logos[$(this).index()]).removeClass( "uk-hidden" );
                    $badge.addClass('tm-open');
                }, function() {
                    $($logos[$(this).index()]).addClass( "uk-hidden" );
                    $badge.removeClass('tm-open');
                }
            );

            $triggers.click(function () {
                if($currentLogo.length) $currentLogo.addClass( "uk-hidden" );
                if($currentBadge.length) $currentBadge.removeClass('tm-open');
                $currentLogo = $($logos[$(this).index()]);
                $currentBadge = $badge;
                $currentLogo.removeClass( "uk-hidden" );
                $currentBadge.addClass('tm-open');
            });
        });

    })();
});

