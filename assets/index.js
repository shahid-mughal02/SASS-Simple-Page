$(function () {
    $('.slider_nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.banner_slider',
        prevArrow: '<button type="button" class="slick-prev"><svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg" data-svg="slidenav-previous"><polyline fill="none" stroke="#fff" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "></polyline></svg></button>',
        nextArrow: '<button type="button" class="slick-next active_arrow"><svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg" data-svg="slidenav-next"><polyline fill="none" stroke="#fff" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "></polyline></svg></button>'
    });
    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider_nav',
        dots: false,
        arrows: false,
        fade: true
    });
    $('.as_nav_box .slick-arrow').click(function(){
        $(this).addClass('active_arrow').siblings().removeClass('active_arrow');
    })
    $('.help_slider').slick({
        dots: true,
        arrows: false,
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 1
    });
    $(window).on({
        scroll: ()=>{
            window.scrollY > 200 ? $('.navbar_container').addClass('sticky_navbar') : $('.navbar_container').removeClass('sticky_navbar');
        }
    })
})