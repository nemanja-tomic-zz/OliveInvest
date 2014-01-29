var sliderTimeout = 5500;
var activeImage = "";

function atilaSlider(picList, timeout, intro) {
    console.log("atilaSlider init...");
    console.log("passed image index: " + intro);
    if (stopSlider) {
        stopSlider = false;
        return;
    }
    var i = (intro == undefined || intro > picList.length - 1) ? 0 : intro;
    
    setPicture(picList[i]);
    setTimeout(function () {
        i++
        console.log("atilaSlider end.");
        atilaSlider(picList, timeout, i)
    }, timeout);
}

function renderButtons(aoImageList) {
    $.each(aoImageList, function (i, toImage) {
        $(".sliderButtons").append("<input type='button' class='changeImageBtn' id='image" + i + "' data-id='" + i + "' data-url='" + toImage.url + "' />");
    });
}

function setPicture(aoPicture) {
    activeImage = aoPicture.url;
    $('.homePage').fadeTo(800, 0.15, function () {
        $('.homePage').css('background', 'url("' + aoPicture.url + '") no-repeat center center fixed');
        $('.homePage').css('-webkit-background-size', 'cover');
        $('.homePage').css('background-size', 'cover');
        $('.homePage').css('-moz-background-size', 'cover');
        $('.homePage').css('-o-background-size', 'cover');
        $('.mojText').html(aoPicture.text);
    }).fadeTo(800, 1, function () { });
}