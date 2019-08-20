$(()=>{

    (() => {
        const $tabsSwitches = $('.tm-tabs-switches a');
        const $tabsElems= $('.tm-tabs-wrapper .tm-tab');
        let currentTab = 0;

        $($tabsElems[currentTab]).addClass('uk-active');
        $($tabsSwitches[currentTab]).addClass('uk-active');

        $tabsSwitches.on('click', function (e) {
            e.preventDefault();

            const tabNumber = $(this).index();

            if(tabNumber === currentTab) return;

            $($tabsElems[currentTab]).removeClass('uk-active');
            $($tabsSwitches[currentTab]).removeClass('uk-active');
            $($tabsElems[tabNumber]).addClass('uk-active');
            $($tabsSwitches[tabNumber]).addClass('uk-active');
            currentTab = tabNumber;

        });
    })();
});


