$(document).ready(function () {
    $('.faq-item').on('click', function () {
        $(this).toggleClass('faq-item_active');
    });
    
    $('.header-burger_desktop').on('click', function () {
        $('.mobile-menu').css('display', 'flex');
    });

    $('.header-burger_mobile').on('click', function () {
        $('.mobile-menu').css('display', 'none');
    });

    $("#phone").mask("+7 (999) 999-99-99");
});