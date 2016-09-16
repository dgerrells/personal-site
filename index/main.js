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
                    mobileHA: false,
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
    var $about = $('#about'),
        $blog = $('#blog'),
        $projects = $('#projects'),
        $email = $('#email'),
        $linkedin = $('#linkedin'),
        $codepen = $('#codepen'),
        $github = $('#github');
    $about.click(getClickHandler($about, './about/about.html', true));
    $blog.click(getClickHandler($blog, 'https://www.tekker.solutions', true));
    $projects.click(getClickHandler($projects, './projects/projects.html', true));
    $email.click(getClickHandler($email, 'mailto:dgerrell@msudenver.edu'));
    $linkedin.click(getClickHandler($linkedin, 'https://www.linkedin.com/in/david-gerrells-73a9108a'));
    $github.click(getClickHandler($github, 'https://github.com/dgerrells'));
    $codepen.click(getClickHandler($codepen, 'https://codepen.io/gerrells-david/'));
})();
