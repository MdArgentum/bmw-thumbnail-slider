// For Currency Dropdown Option
$(document).ready(function () {
    $('.currency-dropdown-toggle').click(function () {
        $('.currency-dropdown-menu').toggleClass('is-visible');
        $('.currency-dropdown-toggle i').css({
            'margin-left': '5px',
            'transition': 'transform 0.5s ease',
            'transform': 'rotate(180deg)',
        });

    });

    $('.currency-dropdown-menu li a').click(function () {
        var selectedCurrency = $(this).data('value');
        $('.currency-dropdown-toggle').html('Currency (' + selectedCurrency + ' ) <i class="fas fa-chevron-down"></i> ');
        $('.currency-dropdown-menu').removeClass('is-visible');

    });
});


// For Slider jQuery

$(function () {

    $('#thumbnail li').click(function () {
        var thisIndex = $(this).index()

        if (thisIndex < $('#thumbnail li.active').index()) {
            prevImage(thisIndex, $(this).parents("#thumbnail").prev("#image-slider"));
        } else if (thisIndex > $('#thumbnail li.active').index()) {
            nextImage(thisIndex, $(this).parents("#thumbnail").prev("#image-slider"));
        }

        $('#thumbnail li.active').removeClass('active');
        $(this).addClass('active');

    });
});

var width = $('#image-slider').width();

function nextImage(newIndex, parent) {
    parent.find('li').eq(newIndex).addClass('next-img').css('left', width).animate({ left: 0 }, 1000);
    parent.find('li.active-img').removeClass('active-img').css('left', '0').animate({ left: -width }, 1000);
    parent.find('li.next-img').attr('class', 'active-img');
}
function prevImage(newIndex, parent) {
    parent.find('li').eq(newIndex).addClass('next-img').css('left', -width).animate({ left: 0 }, 1000);
    parent.find('li.active-img').removeClass('active-img').css('left', '0').animate({ left: width }, 1000);
    parent.find('li.next-img').attr('class', 'active-img');
}

/* Thumbails */
var ThumbailsWidth = ($('#image-slider').width() - 18.5) / 7;
$('#thumbnail li').find('img').css('width', ThumbailsWidth);


var totalImages = $('#thumbnail li').length;
var visibleImages = 5; // Number of images to display at a time
var currentIndex = 0;

$('#prevBtn').click(function () {
    currentIndex = (currentIndex === 0) ? totalImages - visibleImages : currentIndex - 1;
    updateThumbnail();
});

$('#nextBtn').click(function () {
    currentIndex = (currentIndex === totalImages - visibleImages) ? 0 : currentIndex + 1;
    updateThumbnail();
});

function updateThumbnail() {
    $('#thumbnail li').hide().slice(currentIndex, currentIndex + visibleImages).show();
}
// Initially show the first four images
updateThumbnail();

$('#prevBtn').click(function () {
    var currentIndex = $('#thumbnail li.active').index();
    var newIndex = (currentIndex === 0) ? $('#thumbnail li').length - 1 : currentIndex - 1;
    $('#thumbnail li').eq(newIndex).click();
});

$('#nextBtn').click(function () {
    var currentIndex = $('#thumbnail li.active').index();
    var newIndex = (currentIndex === $('#thumbnail li').length - 1) ? 0 : currentIndex + 1;
    $('#thumbnail li').eq(newIndex).click();
});


// Light Box jQuery

function openModal() {
    $(document).ready(function () {
        $("#myModal").css("display", "block");
    })
}

function closeModal() {
    $(document).ready(function () {
        $("#myModal").css("display", "none");
    })
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = $(".mySlides");
    var dots = $(".demo");
    var captionText = $("#caption");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    slides.hide();
    dots.removeClass("active");
    slides.eq(slideIndex - 1).show();
    dots.eq(slideIndex - 1).addClass("active");
    captionText.html(dots.eq(slideIndex - 1).attr("alt"));
}

