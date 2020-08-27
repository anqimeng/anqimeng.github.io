$( document ).ready(function() {
    
// toggle
$( ".title-1" ).click(function() {
  $( ".t-1" ).slideToggle( "slow" );
});

$( ".title-2" ).click(function() {
  $( ".t-2" ).slideToggle( "slow" );
});

$( ".title-3" ).click(function() {
  $( ".toggle-3" ).slideToggle( "slow" );
});



// popup
$('.l-1').hover(function() {
  $('.i-1').addClass('show');
});

$('.l-2').hover(function() {
  $('.i-2').addClass('show');
});

$('.l-3').hover(function() {
  $('.i-3').addClass('show');
});

$('.l-4').hover(function() {
  $('.i-4').addClass('show');
});

$('.l-5').hover(function() {
  $('.i-5').addClass('show');
});

$('.l-6').hover(function() {
  $('.i-6').addClass('show');
});


$('.images').click(function() {
  $(this).removeClass('show');
});
// CLOSE ANY OPEN SHAPE








});