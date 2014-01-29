﻿var listaSlika = [
    { url: '/Images/Backgrounds/Olive%20invest-second%20slidet.jpg', text: '<div class="slider1"><h1>A LEADER IN REAL ESTATE</br>DEVELOPMENT</h1><p style="text-align:left"><a href="/AboutUs">READ MORE</a></p><div>' },
    { url: '/Images/Backgrounds/Olive%20invest-Third%20slidet.jpg', text: '<div class = "slider2"><h1>PRIME REAL ESTATE IN BOKA BAY</h1><p style="color:#dfb15c; font-size:12px;">Etiam egestas ultrices magna. Pellentesque convallis tristique nibh, id molestie risus. Vestilbulum lancinia justo ac leo facilisis porta.</br> Nullam vel mauris id purus condimentum bibendum ut quis ante. Nullam eu velit tristique, hendrerit purus quis, venenatis mi.</p><p><a href="/CurrentDevelopment">FIND OUT MORE</a></p></div>' },
    { url: '/Images/Backgrounds/Olive%20invest-first%20slidet.jpg', text: '<div class="slider3"><h1>PONTUS HOTEL & RESIDENCES</h1><p style="color:#dfb15c; font-size:12px;">Luxury hotel and residences is set on the main Tivat ponta (small jetty). Overlooking the blue waters of the bay,</br> the 9 apartments with Adriatic inspired interiors and exclusive resaurant Pontus, appeal to all senses.</p><p><a href="/CurrentDevelopment">FIND OUT MORE</a></p></div>' }
];
var stopSlider = false;
var waitForChange = false;

$(document).ready(function () {
    setPicture(listaSlika[2]);
    renderButtons(listaSlika);
    setTimeout(function () {
        atilaSlider(listaSlika, sliderTimeout);
    }, sliderTimeout);

});

$(document).on('click', '.changeImageBtn', function () {
    var liCurrentImageID = parseInt($(this).data('id'), 10);
    if ($(this).data('url') == activeImage) {
        return;
    }
    stopSlider = true;

    setPicture(listaSlika[liCurrentImageID]);
    setTimeout(function () {
        atilaSlider(listaSlika, sliderTimeout, (liCurrentImageID + 1));
    }, sliderTimeout);

    console.log("kurac masni");
    waitForChange = true;
});