$(document).ready(function(){
    startCounter();
});

function startCounter (){

    var startOfYear = '01/01/2022';
    var endOfYear = '12/31/2022';

    var date = moment();

    var total = 61000;

    var days = date.dayOfYear();
    var hours = date.hour();
    var minutes = date.minutes();
    var seconds = date.seconds();

    var totalDays = (total / 365) * days;

    console.log('total days: ' + totalDays);

    var totalHours = ((total / 365) / 24) * hours;

    console.log('total hours: ' + totalHours);

    var totalMinutes = (((total / 365) / 24) / 60) * minutes;

    console.log('total minutes' + totalMinutes);

    var totalSeconds = ((((total / 365) / 24) / 60) / 60) * seconds;

    console.log('total seconds' + totalSeconds);

    var totalSmiles = totalDays + totalHours + totalMinutes + totalSeconds;

    totalSmiles = Math.round(totalSmiles);

    $('.smiles').text(totalSmiles);

    var secondsPerYear = 31556926;

    var intervalPerSecond = Math.ceil(secondsPerYear / total) * 1000;

    console.log(intervalPerSecond);

    setInterval(function(){

        totalSmiles += 1;

        $('.smiles').text(totalSmiles);

    }, intervalPerSecond);

}
