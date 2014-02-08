var sliderTimeout = 5000;
var activeImage = "";

function atilaSlider(picList, timeout, picIndex) {
    var defaultIndex = 0;

    if (picIndex != undefined && picIndex < picList.length) {
        defaultIndex = picIndex;
    }

    window.CurDevSlider = setInterval(function () {
        defaultIndex = (defaultIndex != undefined && defaultIndex < picList.length) ? defaultIndex : 0;
        setPicture(picList[defaultIndex]);
        defaultIndex++;
    }, timeout);
}

function renderButtons(aoImageList) {
    $.each(aoImageList, function (i, toImage) {
        $(".sliderButtons").append('<div class="xzca" data-x="' + i + '" id="image"' + i + '" data-id="' + i + '" data-url="' + toImage.url + '"></div>');
    });
}

function startSlider() {
    //throw new notimplementedexception() :)
}

function stopSlider() {
    clearInterval(window.CurDevSlider);
}

function setPictureInstant(aoPicture) {
    activeImage = aoPicture.url;
    $('.currentDev').css('background', 'url("' + aoPicture.url + '") no-repeat center center fixed');
    $('.currentDev').css('-webkit-background-size', 'cover');
    $('.currentDev').css('background-size', 'cover');
    $('.currentDev').css('-moz-background-size', 'cover');
    $('.currentDev').css('-o-background-size', 'cover');
    $('.mojText').html(aoPicture.text);
}

function setPicture(aoPicture) {
    activeImage = aoPicture.url;
    $('.currentDev').fadeTo(800, 0.15, function () {
        $('.currentDev').css('background', 'url("' + aoPicture.url + '") no-repeat center center  fixed');
        $('.currentDev').css('-webkit-background-size', 'cover');
        $('.currentDev').css('background-size', 'cover');
        $('.currentDev').css('-moz-background-size', 'cover');
        $('.currentDev').css('-o-background-size', 'cover');
        $('.mojText').html(aoPicture.text);

        $('.xzca').each(function () {
            $(this).css('background-color', 'transparent');
            if (activeImage == $(this).attr('data-url')) {
                $(this).css('background-color', '#dfb15c');
            }
        });

    }).fadeTo(800, 1, function () { });
}

$(document).on('click', '.xzca', function () {
    var liCurrentImageID = parseInt($(this).data('id'), 10);
    if ($(this).data('url') == activeImage) {
        return;
    }
    setPicture(listaSlika[liCurrentImageID]);
    stopSlider();

    atilaSlider(listaSlika, sliderTimeout, liCurrentImageID + 1)
});

var BrutalniSlajder = function () {
    this.picList = "";
    this.timeout = 3000;
    this.container = "";

    this.initSlider = function () {
    }
}