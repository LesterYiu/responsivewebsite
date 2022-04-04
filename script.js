$(function(){

    //For open/close sliding navigation buttons
    $('.exitButton').on('click', function(){
        $('.slidingMenu').addClass('disappearNav');
    })

    $('.slidingNav a').on('click', function(){
        $('.slidingMenu').addClass('disappearNav');
    })

    $('#toggleButton').on('click', function(){
        $('#targetSliding').removeClass('disappearNav');
    })

});