$(document).ready(function () {
    var view = true;
    $(".gnb_btn").on("click", function () {
        view = !view
        if (view == true) {
            $("header nav").stop().animate({
                "left": "-100%"
            }, 0);
        } else if (view == false) {
            $("header nav").stop().animate({
                "left": 0
            }, 0)
        }
        $("nav").toggleClass("active");
        $(this).toggleClass("on");
    });

    var swiper = new Swiper(".recom_content");
    swiper.on('slideChangeTransitionEnd', function () {
        var idx = $(".recommend .swiper-wrapper > .swiper-slide-active").index();
        $(".recommend .dots li").eq(idx).addClass("on").siblings().removeClass("on");
        $(".recom_txt p").eq(idx).stop().fadeIn().siblings().stop().fadeOut();
    });
});