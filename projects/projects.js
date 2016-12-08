(function () {

    $('.card-wrapper').bind({
        mouseenter: function() {
            $('.card').removeClass('flipped');
            $(this).find('.card').addClass('flipped');
        },
        mouseleave: function() {
            $(this).find('.card').removeClass('flipped');
        },
        mousedown: function() {
            $('.card').removeClass('flipped');
            $(this).find('.card').addClass('flipped');
        }
    })
})();
