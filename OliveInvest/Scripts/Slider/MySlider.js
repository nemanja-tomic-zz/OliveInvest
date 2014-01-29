﻿var listaSlika = [
    { url: '/Images/Backgrounds/Olive%20invest-second%20slidet.jpg', text: '<div class="slider1"><h1>A LEADER IN REAL ESTATE</br>DEVELOPMENT</h1><p style="text-align:left"><a href="/AboutUs">READ MORE</a></p><div>' },
    { url: '/Images/Backgrounds/Olive%20invest-Third%20slidet.jpg', text: '<div class = "slider2"><h1>PRIME REAL ESTATE IN BOKA BAY</h1><p style="color:#dfb15c; font-size:12px;">Etiam egestas ultrices magna. Pellentesque convallis tristique nibh, id molestie risus. Vestilbulum lancinia justo ac leo facilisis porta.</br> Nullam vel mauris id purus condimentum bibendum ut quis ante. Nullam eu velit tristique, hendrerit purus quis, venenatis mi.</p><p><a href="/CurrentDevelopment">FIND OUT MORE</a></p></div>' },
    { url: '/Images/Backgrounds/Olive%20invest-first%20slidet.jpg', text: '<div class="slider3"><h1>PONTUS HOTEL & RESIDENCES</h1><p style="color:#dfb15c; font-size:12px;">Luxury hotel and residences is set on the main Tivat ponta (small jetty). Overlooking the blue waters of the bay,</br> the 9 apartments with Adriatic inspired interiors and exclusive resaurant Pontus, appeal to all senses.</p><p><a href="/CurrentDevelopment">FIND OUT MORE</a></p></div>' }

];

$(document).ready(function () {
    $('.homePage').css('background', 'url("' + listaSlika[2].url + '") no-repeat center center fixed');
    $('.homePage').css('-webkit-background-size', 'cover');
    $('.homePage').css('background-size', 'cover');
    $('.homePage').css('-moz-background-size', 'cover');
    $('.homePage').css('-o-background-size', 'cover');
    $('.mojText').html(listaSlika[2].text);

    atilaSlider(listaSlika, 6500);
});

function atilaSlider(picList, timeout, intro) {
    var i = (intro == undefined || intro > picList.length - 1) ? 0 : intro;

    setTimeout(function () {
        $('.homePage').fadeTo(800, 0.15, function () {
            $(this).css('background', 'url("' + picList[i - 1].url + '") no-repeat center center fixed');
            $(this).css('-webkit-background-size', 'cover');
            $(this).css('background-size', 'cover');
            $(this).css('-moz-background-size', 'cover');
            $(this).css('-o-background-size', 'cover');
            $('.mojText').html(picList[i - 1].text);

        }).fadeTo(800, 1, function () { });
        i++;
        atilaSlider(picList, timeout, i);
    }, timeout);
}
