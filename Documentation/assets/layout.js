$(document).ready(function () {

    $(window).scroll(function() {
        var x = $('.docs-nav').offset().top + 3;
        $('.docs-single').each(function(index) {
            var id = $(this).attr('id');
            if ( x > ($(this).offset().top) && x <= ($(this).offset().top + $(this).outerHeight() ) ) {
                $('a[href="#'+id+'"]').addClass('active');
            } else {
                $('a[href="#'+id+'"]').removeClass('active');
            }
        });
    });
});
