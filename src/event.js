const setParallaxHeight = () => {
    const height = $(window).height();
    $('#christmas_scene .layer-photo').css('height', height);
};

const setElementsHeight = () => {
    var height = $(window).height();

    if (height <= 400) {
        var width = $(window).height() / 2;
    } else if (height <= 500) {
        var width = $(window).height() / 3.5;
    } else if (height <= 700) {
        var width = $(window).height() / 3;
    } else if (height <= 800) {
        var width = $(window).height() / 2.8;
    } else {
        var width = $(window).height() / 2.5;
    }
    $('#christmas_tree').css({
        'width': width,
        'margin-left': -(width / 2)
    });
    $('#mail_pole').css('margin-left', -(width / 1.2));
    $('#mail_pole img').css('width', width / 3);
};

export {
    setParallaxHeight,
    setElementsHeight
}