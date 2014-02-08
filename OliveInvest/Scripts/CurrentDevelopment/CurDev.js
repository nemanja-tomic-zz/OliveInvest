$(document).on('click', '#descriptionBtn', function () {
    if ($('#cont1').is(':visible')) {
        $('#cont1').fadeOut();
    } else {
        $('#cont2').hide();
        $('#cont1').fadeIn();
    }

});
$(document).on('click', '#floorplansBtn', function () {
    if ($('#cont2').is(':visible')) {
        $('#cont2').fadeOut();
    } else {
        $('#cont1').hide();
        $('#cont2').fadeIn();
    }
});
$(document).on('click', '.planLink', function (e) {
    e.preventDefault();
    var htmlCode = "";
    var selected = $(this).attr('id');

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
'/Images/CurrentBg/Hotel%20Pontus,%20Tivat%20-5.jpg',
'/Images/CurrentBg/Hotel%20Pontus,%20Tivat%20-1.jpg',
'/Images/CurrentBg/Hotel%20Pontus,%20Tivat%20-2.jpg',
'/Images/CurrentBg/Hotel%20Pontus,%20Tivat%20-3.jpg',
'/Images/CurrentBg/Hotel%20Pontus,%20Tivat%20-4.jpg'
];
$(document).ready(function () {
    setBg(listaSlika.length - 1);
    vrtiSlike(0);

})


function setBg(number) {
    $('.currentDev').fadeTo(800, 0.15, function () {
        $('.currentDev').css('background', 'url("' + listaSlika[number] + '") no-repeat center center fixed');
        $('.currentDev').css('-webkit-background-size', 'cover');
        $('.currentDev').css('background-size', 'cover');
        $('.currentDev').css('-moz-background-size', 'cover');
        $('.currentDev').css('-o-background-size', 'cover');
        $('.currentDev').css('transition', 'opacity .25s ease-in-out');

        $('.xzca').each(function () {
            $(this).css('background-color', 'transparent');
            if (number == $(this).attr('data-x')) {
                $(this).css('background-color', '#dfb15c');
            }
        });
    }).fadeTo(800, 1, function () { });

};

function vrtiSlike(brojSlike) {
    console.log(brojSlike);
    var showNum = 0;
    //set bg right away on click 
    if (brojSlike != undefined && brojSlike < listaSlika.length) {
        showNum = brojSlike;
    }

    window.MyInterval = setInterval(function () {
        showNum = (showNum < listaSlika.length) ? showNum : 0;
        setBg(showNum);
        showNum++;
    }, 3000)

};

$(document).on('click', '.xzca', function () {

    clearInterval(window.MyInterval);
    var x = parseInt($(this).attr('data-x'))
    setBg(x);
    vrtiSlike(x + 1);
});












