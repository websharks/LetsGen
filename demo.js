// Optional: You can add more JavaScript functionality here
// For example, stopping the video when the user scrolls down

document.addEventListener('DOMContentLoaded', function () {
    var headerVideo = document.getElementById('header-video');

    window.addEventListener('scroll', function () {
        if (isInViewport(headerVideo)) {
            headerVideo.play();
        } else {
            headerVideo.pause();
        }
    });

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});
