$(document).ready(function () {
    $('.loaderScreen').fadeOut();
    //initialize parent section height
    const body = document.getElementById('fullWidth');
    let screenHeight = window.innerHeight + 'px';
    body.style.height = screenHeight;
    $(window).on('resize', function () {
        let screenHeight = window.innerHeight + 'px';
        body.style.height = screenHeight;
    });

});
