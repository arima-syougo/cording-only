$(function(){
    $('#header__menu').click(function(){
        $('body').toggleClass('is-active');
        $('#hum').toggleClass('is-active');
        $('.header__nav').toggleClass('is-active');
        $('.filter').fadeToggle();
        $('.header__menu-txt').toggleClass('white');
    });
    $(window).scroll(function(){
        if($(window).scrollTop() > $('.fv').outerHeight()-50){
            $('.hum__bar').addClass('black');
            $('.header__menu').addClass('black');
        }  else {
            $('.hum__bar').removeClass('black');
            $('.header__menu').removeClass('black');
        }
        if ($(window).scrollTop() > $('.fv__bg').outerHeight()-50){
            $('.site__svg').addClass('is-active');
        } else {
            $('.site__svg').removeClass('is-active');
        }
    })
    $(function(){
        $('a[href^="#"]').click(function(){
            let speed = 500;
            let href= $(this).attr("href");
            let target = $(href == "#" || href == "" ? 'html' : href);
            let position = target.offset().top;
            $("html, body").animate({scrollTop:position}, speed, "swing");
            return false;
        });
    });
});