document.querySelector('#desktop_nav>.mobile-open-button').addEventListener('click', function() {
    document.querySelector('#mobile_nav').style.transform = 'translateX(0)';
});
document.querySelector('#mobile_nav>.mobile-close-button').addEventListener('click', function() {
    document.querySelector('#mobile_nav').style.transform = 'translateX(100%)';
});