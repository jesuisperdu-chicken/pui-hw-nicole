$(document).ready(function (){
    $(".homeLink1").textillate({});
});
$(document).ready(function (){
    $(".homeLink2").textillate({});
});
$(document).ready(function (){
    $(".homeLink3").textillate({});
});

var loader;

function loadNow(opacity) {
    if (opacity <= 0) {
        displayContent();
    } else {
        loader.style.opacity = opacity;
        window.setTimeout(function() {
            loadNow(opacity - 10.0);
        }, 1800);
    }
}

function displayContent() {
    loader.style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    loader = document.getElementById('loader');
    loadNow(5);
});
// this helped me load the gif to my website and delay the homepage reveal 
// https://nishanc.medium.com/how-to-add-a-gif-pre-loader-to-your-website-dcfd29bd055d

