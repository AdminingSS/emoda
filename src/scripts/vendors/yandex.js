$(()=>{

    /*Yandex map*/
    (function(){
        if (!document.getElementById('map')) return;

        var firstScript = document.querySelectorAll('script')[0];
        var script = document.createElement('script');
        var placemarks = {
            0: {
                coords: [55.753215,37.622504],
                hintContent: 'Адрес 1',
                balloonContent: 'Москва'
            },
            1: {
                coords: [55.750000,37.620000],
                hintContent: 'Адрес 2',
                balloonContent: 'Москва'
            }
        };

        script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
        script.async = true;
        firstScript.parentNode.insertBefore(script, firstScript);

        script.addEventListener('load', function () {
            ymaps.ready(init);
        });

        function init(){
            var myMap = new ymaps.Map('map', {
                center: [55.753215,37.622504], //[55.7207,37.6234],
                zoom: 14
            }, {
                searchControlProvider: 'yandex#search'
            });

            myMap.behaviors.disable('scrollZoom');

            for (var currPlacemark in placemarks) {
                myMap.geoObjects.add(new ymaps.Placemark(placemarks[currPlacemark].coords, {
                    hintContent: placemarks[currPlacemark].hintContent,
                    balloonContent: placemarks[currPlacemark].balloonContent
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: 'images/icon-balloon.svg',
                    iconImageSize: [60, 68],
                    iconImageOffset: [-30, -34]
                }));
            }
        }
    })();
});


