$(function(){

var totalRed = 0;
var totalYellow = 0;
var totalGreen = 0;
var totalBlue = 0;


$('.color-button').on('click', function(){

  if ($(this).attr('data-color') == "red"){
    totalRed += 1;
    $('#red').html('Total red: ' + totalRed);
    $('.container').append('<div class="color-cube red"></div>');
  };


  if ($(this).attr('data-color') == "yellow"){
    totalYellow += 1;
    $('#yellow').html('Total yellow: ' + totalYellow);
    $('.container').append('<div class="color-cube yellow"></div>');
  };


  if ($(this).attr('data-color') == "green"){
    totalGreen += 1;
    $('#green').html('Total green: ' + totalGreen);
    $('.container').append('<div class="color-cube green"></div>');
  };


  if ($(this).attr('data-color') == "blue"){
    totalBlue += 1;
    $('#blue').html('Total blue: ' + totalBlue);
    $('.container').append('<div class="color-cube blue"></div>');
  };

})


$('.reset-button').on('click', function(){
  $('.container').empty();
  $('#red').text('Total red: 0');
  totalRed = 0;

  $('.container').empty();
  $('#yellow').text('Total yellow: 0');
  totalYellow = 0;

  $('.container').empty();
  $('#green').text('Total green: 0');
  totalGreen = 0;

  $('.container').empty();
  $('#blue').text('Total blue: 0');
  totalBlue = 0;

})



//END
})
