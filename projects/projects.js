(function () {
    $('.card-wrapper').bind({
        mouseenter: function() {
            $(this).find('.card').addClass('flipped');
        },
        mouseleave: function() {
            $(this).find('.card').removeClass('flipped');
        }
    })
})();
