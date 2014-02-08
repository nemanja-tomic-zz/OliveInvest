$(document).on('click', '#descriptionBtn', function () {
    if ($('#cont1').is(':visible')) {
        $('#cont1').fadeOut();
    } else {
        centroralizer("#cont1");
        $('#cont2').hide();
        $('#cont1').fadeIn();
    }

});
$(document).on('click', '#floorplansBtn', function () {
    if ($('#cont2').is(':visible')) {
        $('#cont2').fadeOut();
    } else {
        centroralizer("#cont2");
        $('#cont1').hide();
        $('#cont2').fadeIn();
    }
});
$(document).on('click', '.planLink', function (e) {
    e.preventDefault();
    var htmlCode = "";
    var selected = $(this).attr('id');

    $(".strelicaSpan").text('');
    $(this).find("span").text("►");

    switch (selected) {
        case 'garage':
            htmlCode = '<img src="/Images/Floor%20Plans/Garage%20Floorplans.png" />';
            break;
        case 'groundFloor':
            htmlCode = '<img src="/Images/Floor%20Plans/Ground%20Floor.png" />';
            break;
        case 'firstFloor':
            htmlCode = '<img src="/Images/Floor%20Plans/First%20Floor.png" />';
            break;
        case 'secondFloor':
            htmlCode = '<img src="/Images/Floor%20Plans/Second%20Floor.png" />';
            break;
        case 'roof':
            htmlCode = '<img src="/Images/Floor%20Plans/Roof.png" />';
            break;
        default:
            htmlCode = '<img src="~/Images/Floor%20Plans/Garage%20Floorplans.png" />';
    }
    $('#plans').html(htmlCode);
});

var listaSlika = [
    { url: '/Images/CurrentBg/Hotel%20Pontus,%20Tivat%20-1.jpg', text: '' },
    { url: '/Images/CurrentBg/Hotel%20Pontus,%20Tivat%20-2.jpg', text: '' },
    { url: '/Images/CurrentBg/Hotel%20Pontus,%20Tivat%20-3.jpg', text: '' },
    { url: '/Images/CurrentBg/Hotel%20Pontus,%20Tivat%20-4.jpg', text: '' },
    { url: '/Images/CurrentBg/Hotel%20Pontus,%20Tivat%20-5.jpg', text: '' }
];

$(document).ready(function () {
    setHeight("#body");
    setHeight(".currentDev");
    setPicture(listaSlika[listaSlika.length - 1]);
    renderButtons(listaSlika);
    atilaSlider(listaSlika, sliderTimeout);
    havrz('.forHavrz');
    havrz('.planLink');
});

$(window).resize(function () {
    setHeight("#body");
    setHeight(".currentDev");
    centroralizer("#cont1");
    centroralizer("#cont2");
});

function setHeight(element) {
    var totalHeight = $(window).height();
    var headerHeight = $("header").height();
    var footerHeight = $("footer").height();
    var b = totalHeight - headerHeight - footerHeight - 60 - 31;
    $(element).height(b);
}

function centroralizer(element) {
    var totalWidth = $(window).width();
    var elementWidth = $(element).width();
    var vrednost = (totalWidth - elementWidth) / 2;
    $(element).css('left', vrednost);
}

function havrz(element) {
    $(element).hover(function () {
        $(this).css('cursor', 'pointer');

    });
}