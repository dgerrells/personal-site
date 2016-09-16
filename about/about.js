(function () {
    var getClickHandler = function ($element, dest, replace) {
        return function () {
            $element.velocity({
                properties: {
                    scale: 1.8,
                    opacity: 0
                },
                options: {
                    duration: 800,
                    easing: "easeOutQuart",
                    complete: function () {
                        $element.attr("style", "");
                        if (replace) {
                            window.location = dest;
                        } else {
                            window.open(dest, '_blank');
                        }
                    }
                }
            })
        };
    };
    var $back = $('#back');
    $back.click(getClickHandler($back, '../index.html', true));
})();
