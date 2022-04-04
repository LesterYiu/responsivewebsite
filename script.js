let score = 0;

$(function(){

    //PSEUDO CODE
        //everytime player click button, the current page they are on will disappear by adding the nextpage class
        //change the HTML h3score depending on answers
        //maybe add a timer?

//Homepage javascript
    $('.homeButton').on('click', function(){
        $('.home').addClass('nextPage');
        $('.questionOne').removeClass('nextPage');
    })

//Pop-up Message

    $('.exitButton').on('click', function(){
        $('.wrongMessage').addClass('nextPage');
        $('.correctMessage').addClass('nextPage');
        $('h3').text(`Score: ${score}/5`);
    })

//Question one

    $('.optionLeft').on('click', function(){
        $('.wrongMessage').removeClass('nextPage');
        $('.questionOne').addClass('nextPage');
        $('.questionTwo').removeClass('nextPage');
    })

    $('.optionRight').on('click', function(){
        $('.correctMessage').removeClass('nextPage');
        $('.questionOne').addClass('nextPage');
        $('.questionTwo').removeClass('nextPage');
        score = score + 1;
    })
//Question two

    $('.optionLeftTwo').on('click', function(){
        $('.correctMessage').removeClass('nextPage');
        $('.questionTwo').addClass('nextPage');
        $('.questionThree').removeClass('nextPage');
        score = score + 1;
    })

    $('.optionRightTwo').on('click', function(){
        $('.wrongMessage').removeClass('nextPage');
        $('.questionTwo').addClass('nextPage');
        $('.questionThree').removeClass('nextPage');
    })

//Question Three
    $('.optionLeftThree').on('click', function(){
        $('.wrongMessage').removeClass('nextPage');
        $('.questionThree').addClass('nextPage');
        $('.questionFour').removeClass('nextPage');
    })

    $('.optionRightThree').on('click', function(){
        $('.correctMessage').removeClass('nextPage');
        $('.questionThree').addClass('nextPage');
        $('.questionFour').removeClass('nextPage');
        score = score + 1;
    })

//Question Four
    $('.optionLeftFour').on('click', function(){
        $('.correctMessage').removeClass('nextPage');
        $('.questionFour').addClass('nextPage');
        $('.questionFive').removeClass('nextPage');
        score = score + 1;
    })

    $('.optionRightFour').on('click', function(){
        $('.wrongMessage').removeClass('nextPage');
        $('.questionFour').addClass('nextPage');
        $('.questionFive').removeClass('nextPage');
    })
//Question Five
    $('.optionLeftFive').on('click', function(){
        $('.correctMessage').removeClass('nextPage');
        $('.questionFive').addClass('nextPage');
        score = score + 1;
        $('.ending').removeClass('nextPage');
        if (score === 5){
            $('.endingScore').text(`Your score is ${score}/5`);
            $('.endingParagraph').text('Identify fraud is no longer an issue on the S.S chihuahua!');
        } else if (score < 5 && score > 0){
            $('.endingScore').text(`Your score is ${score}/5`);
            $('.endingParagraph').text(`The ship still smells like corruption and blueberries`);
        } else {
            $('.endingScore').text(`Your score is ${score}/5`);
            $('.endingParagraph').text(`You ejected all the innocent chihuahuas... I will be letting your supervisor know about today's incident.`);
        };
    })

    $('.optionRightFive').on('click', function(){
        $('.wrongMessage').removeClass('nextPage');
        $('.questionFive').addClass('nextPage');
        $('.ending').removeClass('nextPage');
        if (score === 5){
            $('.endingScore').text(`Your score is ${score}/5`);
            $('.endingParagraph').text('Identify fraud is no longer an issue on the S.S chihuahua!');
        } else if (score < 5 && score > 0){
            $('.endingScore').text(`Your score is ${score}/5`);
            $('.endingParagraph').text(`The ship still smells like corruption and blueberries`);
        } else {
            $('.endingScore').text(`Your score is ${score}/5`);
            $('.endingParagraph').text(`You ejected all the innocent chihuahuas... I will be letting your supervisor know about today's incident.`);
        };
    })

})