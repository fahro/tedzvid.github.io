// var Page = (function () {     var config = {             $bookBlock:
// $('#bb-bookblock'),             $navNext: $('#bb-nav-next'),
// $navPrev: $('#bb-nav-prev'),             $navFirst: $('#bb-nav-first'),
//       $navLast: $('#bb-nav-last')         },         init = function () {
//         config                 .$bookBlock                 .bookblock({speed:
// 1000, shadowSides: 0.8, shadowFlip: 0.4});             initEvents();
// },         initEvents = function () {             var $slides = config
//          .$bookBlock                 .children();             // add
// navigation events             config                 .$navNext
//  .on('click touchstart', function () {                     config
//             .$bookBlock                         .bookblock('next');
//           return false;                 });             config
//  .$navPrev                 .on('click touchstart', function () {
//        config                         .$bookBlock
// .bookblock('prev');                     return false;                 });
//         config                 .$navFirst                 .on('click
// touchstart', function () {                     config
// .$bookBlock                         .bookblock('first');
// return false;                 });             config
// .$navLast                 .on('click touchstart', function () {
//       config                         .$bookBlock
// .bookblock('last');                     return false;                 });
//         // add swipe events             $slides.on({
// 'swipeleft': function (event) {                     config
//      .$bookBlock                         .bookblock('next');
//    return false;                 },                 'swiperight': function
// (event) {                     config                         .$bookBlock
//                    .bookblock('prev');                     return false;
//            }             });             // add keyboard events
// $(document).keydown(function (e) {                 var keyCode = e.keyCode ||
// e.which,                     arrow = {                         left: 37,
//                    up: 38,                         right: 39,
//         down: 40                     };                 switch (keyCode) {
//                  case arrow.left:                         config
//                .$bookBlock                             .bookblock('prev');
//                      break;                     case arrow.right:
//             config                             .$bookBlock
//          .bookblock('next');                         break;                 }
//             });         };     return {init: init, config: config}; })();

var goTo = function (p) {
    // Page     .config     .$bookBlock     .bookblock('jump', p)

    document
        .getElementById(p)
        .scrollIntoView({behavior: 'smooth'});
};

var setLessons = function () {
    var lessons = [
        {
            i: 1
        },
        {
            i: 2
        },
        {
            i: 3
        }         
    ];

    setLessonsMenu(lessons);
    setLessonsContent(lessons);

    // Page.init();
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

    for (var i = 0; i < ls.length; i++) {
        var x = document.createElement('div');
        x.id = ls[i].i;
        x.className = 'page';
        x.innerHTML = `<p>
        Kada prije zamjenice (hu)  هُ dođe dugi vokal: ا ـَ (a) , ى ـِ (i) , ـُ و(u) ili sukun  ـْ , zamjenica (hu)  هُ  se uči kratko: </br> 
        يَـدَاهُ, اَبِـيـهِ اِلَـيْـهِ </br>
        إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ ؛  إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ  ؛ وَإِذْ قَالَ إِبْرَاهِيمُ لِأَبِيهِ آزَرَ </br>
        Kada prije zamjenice (hu)  هُ  dođe kratki vokal: (e) ـَ ,(i)  ـِ ,(u) ـُ, zamjenica (hu)  هُ  se uči dugo:  اِسْـمُــهُ  , لَـهُ    ,    بِـهِ </br>
        فَأُمّّهُ هَاوِيَةٌ ؛ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ وَأَمّّا مَنْ خَفّّتْ مَوَازِينُهُ      
        </p>`;
    
        b.appendChild(x);
    }
};