$(document).ready(function () {
    let currentFloor = 2;
    let floorPath = $('.home-image path');
    let counterUp = $('.counter-up');
    let counterDown = $('.counter-down');
    console.log("Сайт готов к манипуляции")
    floorPath.on('mouseover', function(){
        floorPath.removeClass("current-floor");
        currentFloor = $(this).attr('data-floor');
        $('.counter').text(currentFloor);
    });

    counterUp.on('click', function () {
       if(currentFloor<18){
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor = ${usCurrentFloor}]`).toggleClass("current-floor");
       }
    });

    counterDown.on('click', function () {
        if(currentFloor>2){
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor = ${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });

});

