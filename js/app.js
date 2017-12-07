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
            i: 1,
            name: "DAMIR",
            html: `

            <div class="lesson-heading">
                <p><span id="docs-internal-guid-a4fb56cc-322f-f5f7-6f7d-b89e7acab739"><span style="font-size: 18pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; font-weight: 700; vertical-align: baseline; white-space: pre-wrap;">1. DAMIR </span><span style="font-size: 18pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">- izgovaranje zamjenice HU</span><span style="font-size: 18pt; font-family: &quot;Traditional Arabic&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;"> &nbsp;</span><span style="font-size: 28pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">هُ</span><span style="font-size: 18pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; font-weight: 700; vertical-align: baseline; white-space: pre-wrap;">&nbsp;</span></span></p>
            </div>
            <div class="lesson-content">
                <p class="explanation"><span id="docs-internal-guid-a4fb56cc-321b-3398-23b2-ba2ea18986ea"><span style="font-size: 16pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">Kada prije zamjenice (h</span><span style="font-size: 16pt; font-family: Times; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">u</span><span style="font-size: 16pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">) &nbsp;</span><span style="font-size: 28pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">هُ</span><span style="font-size: 18pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; font-weight: 700; vertical-align: baseline; white-space: pre-wrap;"> </span><span style="font-size: 16pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">dođe </span><span style="font-size: 16pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; font-weight: 700; vertical-align: baseline; white-space: pre-wrap;">dugi </span><span style="font-size: 16pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">vokal</span><span style="font-size: 18pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">: </span><span style="font-size: 28pt; font-family: &quot;Traditional Arabic&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">ا</span><span style="font-size: 28pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;"> ـَ</span><span style="font-size: 18pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;"> (</span><span style="font-size: 18pt; font-family: Times; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">a</span><span style="font-size: 18pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">) </span><span style="font-size: 24pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">,</span><span style="font-size: 18pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;"> </span><span style="font-size: 28pt; font-family: &quot;Traditional Arabic&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">ى</span><span style="font-size: 28pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;"> ـِ</span><span style="font-size: 18pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;"> (</span><span style="font-size: 18pt; font-family: Times; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">i</span><span style="font-size: 18pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">) </span><span style="font-size: 24pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">, ـُ و </span><span style="font-size: 18pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">(</span><span style="font-size: 18pt; font-family: Times; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">u</span><span style="font-size: 18pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">) ili </span><span style="font-size: 18pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; font-weight: 700; vertical-align: baseline; white-space: pre-wrap;">sukun </span><span style="font-size: 18pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">&nbsp;</span><span style="font-size: 24pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">ـْ</span><span style="font-size: 18pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;"> , zamjenica </span><span style="font-size: 16pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">(hu)</span><span style="font-size: 18pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;"> &nbsp;</span><span style="font-size: 28pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">هُ</span><span style="font-size: 18pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; font-weight: 700; vertical-align: baseline; white-space: pre-wrap;"> &nbsp;</span><span style="font-size: 18pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">se uči </span><span style="font-size: 18pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; font-weight: 700; vertical-align: baseline; white-space: pre-wrap;">kratko:</span></span></p>
                <div class="examples">
                    <a href="#" id="damir-1" class="example"><span id="docs-internal-guid-a4fb56cc-321b-fbc3-8320-78d75828b3b0"><span style="font-size: 28pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">اَبِـ</span><span style="font-size: 28pt; font-family: &quot;Times New Roman&quot;; color: rgb(255, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">يـهِ</span></span></a>
                    <span class="separator"></span>
                    <a href="#" id="damir-2" class="example"><span id="docs-internal-guid-a4fb56cc-321c-b0df-d4ef-dc878186517b"><span style="font-size: 28pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">يَـد</span><span style="font-size: 28pt; font-family: &quot;Times New Roman&quot;; color: rgb(255, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">َاه</span></span></a>
                    <span class="separator"></span>
                    <a href="#" id="damir-3" class="example"><span id="docs-internal-guid-a4fb56cc-3223-4d55-757e-337d61931771"><span style="font-size: 28pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">اِلَـ</span><span style="font-size: 28pt; font-family: &quot;Times New Roman&quot;; color: rgb(255, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">يْـهِ</span><span style="font-size: 18pt; font-family: &quot;Traditional Arabic&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;"> </span></span></a>
                    <span class="separator"></span>
                    <a href="#" id="damir-4" class="example"><span id="docs-internal-guid-a4fb56cc-3223-ef34-2404-60fcb0495886"><span style="font-size: 24pt; font-family: &quot;Traditional Arabic&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">إِنَّا أَنزَلْنَ</span><span style="font-size: 24pt; font-family: &quot;Traditional Arabic&quot;; color: rgb(255, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">اهُ</span><span style="font-size: 24pt; font-family: &quot;Traditional Arabic&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;"> فِي لَيْلَةِ الْقَدْرِ</span></span></a>
                    <span class="separator"></span>
                    <a href="#" id="damir-5" class="example"><span id="docs-internal-guid-a4fb56cc-3225-24c6-7540-e629b93a741f"><span style="font-size: 24pt; font-family: &quot;Traditional Arabic&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">إِنَّا </span><span style="font-size: 24pt; font-family: &quot;Traditional Arabic&quot;; color: rgb(255, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">لِلَّهِ</span><span style="font-size: 24pt; font-family: &quot;Traditional Arabic&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;"> وَإِنَّا إِلَ</span><span style="font-size: 24pt; font-family: &quot;Traditional Arabic&quot;; color: rgb(255, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">يْهِ</span><span style="font-size: 24pt; font-family: &quot;Traditional Arabic&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;"> رَاجِعُونَ</span></span></a>
                    <span class="separator"></span>
                    <a href="#" id="damir-6" class="example"><span id="docs-internal-guid-a4fb56cc-3225-b8b3-9b7a-7f92382d0c9f"><span style="font-size: 24pt; font-family: &quot;Traditional Arabic&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">وَإِذْ قَالَ إِبْرَاهِيمُ لِأَبِ</span><span style="font-size: 24pt; font-family: &quot;Traditional Arabic&quot;; color: rgb(255, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">يهِ</span><span style="font-size: 24pt; font-family: &quot;Traditional Arabic&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;"> آزَرَ</span></span></a>
                </div>
                <p class="explanation"><span id="docs-internal-guid-a4fb56cc-3229-9ac1-7871-6ec6ee6b4481"><span style="font-size: 18pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">Kada prije zamjenice </span><span style="font-size: 16pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">(h</span><span style="font-size: 16pt; font-family: Times; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">u</span><span style="font-size: 16pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">)</span><span style="font-size: 18pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;"> &nbsp;</span><span style="font-size: 28pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">هُ</span><span style="font-size: 18pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;"> </span><span style="font-size: 18pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; font-weight: 700; vertical-align: baseline; white-space: pre-wrap;">&nbsp;</span><span style="font-size: 18pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">dođe </span><span style="font-size: 18pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; font-weight: 700; vertical-align: baseline; white-space: pre-wrap;">kratki </span><span style="font-size: 18pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">vokal: (e) </span><span style="font-size: 26pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">ـَ</span><span style="font-size: 18pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;"> </span><span style="font-size: 26pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">,</span><span style="font-size: 18pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">(i) &nbsp;</span><span style="font-size: 26pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">ـِ</span><span style="font-size: 18pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;"> </span><span style="font-size: 26pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">,</span><span style="font-size: 18pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">(u) </span><span style="font-size: 26pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">ـُ,</span><span style="font-size: 18pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;"> zamjenica </span><span style="font-size: 16pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">(h</span><span style="font-size: 16pt; font-family: Times; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">u</span><span style="font-size: 16pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">)</span><span style="font-size: 18pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;"> </span><span style="font-size: 18pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; font-weight: 700; vertical-align: baseline; white-space: pre-wrap;">&nbsp;</span><span style="font-size: 28pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; font-weight: 700; vertical-align: baseline; white-space: pre-wrap;">هُ</span><span style="font-size: 18pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; font-weight: 700; vertical-align: baseline; white-space: pre-wrap;"> </span><span style="font-size: 18pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">&nbsp;se uči </span><span style="font-size: 18pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; font-weight: 700; vertical-align: baseline; white-space: pre-wrap;">dugo</span><span style="font-size: 18pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">:</span></span></p>               
                <div class="examples">
                    <a href="#" id="damir-7" class="example"><span id="docs-internal-guid-a4fb56cc-322a-52ac-ed66-a75168e94222"><span style="font-size: 28pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">بِـ</span><span style="font-size: 28pt; font-family: &quot;Times New Roman&quot;; color: rgb(255, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">هِ</span></span></a>
                    <span class="separator"></span>
                    <a href="#" id="damir-8" class="example"><span id="docs-internal-guid-a4fb56cc-322b-29a9-13e8-92663061cad4"><span style="font-size: 28pt; font-family: &quot;Times New Roman&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">لَـ</span><span style="font-size: 28pt; font-family: &quot;Times New Roman&quot;; color: rgb(255, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">هُ</span></span></a>
                    <span class="separator"></span>
                    <a href="#" id="damir-9" class="example"><span id="docs-internal-guid-a4fb56cc-322c-356f-f8e5-b0dc6468014d"><span style="font-size: 28pt; font-family: &quot;Traditional Arabic&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">اِسْـمُــ</span><span style="font-size: 28pt; font-family: &quot;Traditional Arabic&quot;; color: rgb(255, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">هُ</span></span></a>
                    <span class="separator"></span>
                    <a href="#" id="damir-10" class="example"><span id="docs-internal-guid-a4fb56cc-322c-ed43-cb64-48f3dd86ac7a"><span style="font-size: 28pt; font-family: &quot;Traditional Arabic&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">فَأُم</span><span style="font-size: 28pt; font-family: &quot;Traditional Arabic&quot;; color: rgb(255, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">ُّهُ</span><span style="font-size: 28pt; font-family: &quot;Traditional Arabic&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;"> هَاوِيَةٌ</span></span></a>
                    <span class="separator"></span>
                    <a href="#" id="damir-11" class="example"><span id="docs-internal-guid-a4fb56cc-322e-0c40-5e32-82c9ff58a31e"><span style="font-size: 28pt; font-family: &quot;Traditional Arabic&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">وَمَلَائِكَتِ</span><span style="font-size: 28pt; font-family: &quot;Traditional Arabic&quot;; color: rgb(255, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">هِ</span><span style="font-size: 28pt; font-family: &quot;Traditional Arabic&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;"> وَكُتُبِ</span><span style="font-size: 28pt; font-family: &quot;Traditional Arabic&quot;; color: rgb(255, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">هِ</span><span style="font-size: 28pt; font-family: &quot;Traditional Arabic&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;"> وَرُسُلِ</span><span style="font-size: 28pt; font-family: &quot;Traditional Arabic&quot;; color: rgb(255, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">هِ</span><span style="font-size: 28pt; font-family: &quot;Traditional Arabic&quot;; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;"> وَأَمَّا مَنْ خَفَّتْ مَوَازِينُ</span><span style="font-size: 28pt; font-family: &quot;Traditional Arabic&quot;; color: rgb(255, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">هُ</span></span></a>
                </div>
            </div>

            `
        },
        {
            i: 2,
            name: "LAFZATULLAH",
            html: ""
        },
        {
            i: 3,
            name: "IDGAM MISLEJN",
            html: ""
        },
        {
            i: 4,
            name: "IDGAM MISLEJN MEAL-GUNNEH",
            html: ""
        },
        {
            i: 5,
            name: "IDGAM MEAL-GUNNEH",
            html: ""
        },
        {
            i: 6,
            name: "IDGAM BILA GUNNNEH",
            html: ""
        },
        {
            i: 7,
            name: "IKLAB",
            html: ""
        },
        {
            i: 8,
            name: "IZHAR",
            html: ""
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
        e.innerHTML = '<div class="lesson n_' + ls[i].i + '" onClick="goTo(' + ls[i].i + ')">' + ls[i].i + '. ' + ls[i].name + '</div>';
        el.appendChild(e);
    }
}

var setLessonsContent = function (ls) {
    var b = document.getElementById('bb-bookblock');

    for (var i = 0; i < ls.length; i++) {
        var x = document.createElement('div');
        x.id = ls[i].i;
        x.className = 'page';
        x.innerHTML = ls[i].html;
        b.appendChild(x);
    }
};