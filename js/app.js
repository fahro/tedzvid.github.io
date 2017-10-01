var Page = (function () {
    var config = {
            $bookBlock: $('#bb-bookblock'),
            $navNext: $('#bb-nav-next'),
            $navPrev: $('#bb-nav-prev'),
            $navFirst: $('#bb-nav-first'),
            $navLast: $('#bb-nav-last')
        },
        init = function () {
            config
                .$bookBlock
                .bookblock({speed: 1000, shadowSides: 0.8, shadowFlip: 0.4});
            initEvents();
        },
        initEvents = function () {

            var $slides = config
                .$bookBlock
                .children();

            // add navigation events
            config
                .$navNext
                .on('click touchstart', function () {
                    config
                        .$bookBlock
                        .bookblock('next');
                    return false;
                });

            config
                .$navPrev
                .on('click touchstart', function () {
                    config
                        .$bookBlock
                        .bookblock('prev');
                    return false;
                });

            config
                .$navFirst
                .on('click touchstart', function () {
                    config
                        .$bookBlock
                        .bookblock('first');
                    return false;
                });

            config
                .$navLast
                .on('click touchstart', function () {
                    config
                        .$bookBlock
                        .bookblock('last');
                    return false;
                });

            // add swipe events
            $slides.on({
                'swipeleft': function (event) {
                    config
                        .$bookBlock
                        .bookblock('next');
                    return false;
                },
                'swiperight': function (event) {
                    config
                        .$bookBlock
                        .bookblock('prev');
                    return false;
                }
            });

            // add keyboard events
            $(document).keydown(function (e) {
                var keyCode = e.keyCode || e.which,
                    arrow = {
                        left: 37,
                        up: 38,
                        right: 39,
                        down: 40
                    };

                switch (keyCode) {
                    case arrow.left:
                        config
                            .$bookBlock
                            .bookblock('prev');
                        break;
                    case arrow.right:
                        config
                            .$bookBlock
                            .bookblock('next');
                        break;
                }
            });
        };

    return {init: init, config: config};
})();

var goTo = function (p) {
    Page
        .config
        .$bookBlock
        .bookblock('jump', p)
};

var setLessons = function () {
    var lessons = [
        {
            i: 1
        }
    ];

    setLessonsMenu(lessons);
    setLessonsContent(lessons);

    Page.init();
};

var setLessonsMenu = function (ls) {
    var el = document.getElementById('lessons');

    for (var i = 0; i < ls.length; i++) {
        var e = document.createElement('div');
        e.innerHTML = '<div class="lesson n_' + ls[i].i + '" onClick="goTo(' + ls[i].i + ')">1. Damir</div>';
        el.appendChild(e);
    }
}

var setLessonsContent = function (ls) {
    var b = document.getElementById('bb-bookblock');

    for (var i = 1; i <= ls.length; i++) {
        // var c = document.createElement('div'); c.classList.add('bb-item'); var
        // leftPage = document.createElement('div'); leftPage.className =
        // 'bb-custom-side left lsn_' + ls[i].i; leftPage.innerHTML = ls[i].i var
        // rightPage = document.createElement('div'); rightPage.className =
        // 'bb-custom-side right lsn_' + ls[i].i; rightPage.innerHTML = ls[i].i
        // c.appendChild(leftPage); c.appendChild(rightPage);

        $("#bb-bookblock").load('./lessons/' + i + '/template.html');

        // b.appendChild(c);
    }
};