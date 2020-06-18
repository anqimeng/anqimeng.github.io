
$(document).ready(function(){
	console.log("I'm Ready!")

// slidein essay
// 1
	$('.fell').click(function() {
  		$('.slidein1').addClass('slide');
	});

	$('.c-1').click(function() {
  		$('.slidein1').removeClass('slide');
  	});
// 2
  	$('.test').click(function() {
  		$('.slidein2').addClass('slide');
	});

	$('.c-2').click(function() {
  		$('.slidein2').removeClass('slide');
  	});
  // 3
  	$('.exploit').click(function() {
  		$('.slidein3').addClass('slide');
	});

	$('.c-3').click(function() {
  		$('.slidein3').removeClass('slide');
  	});
  // 4
  $('.pollute').click(function() {
  		$('.slidein4').addClass('slide');
	});

	$('.c-4').click(function() {
  		$('.slidein4').removeClass('slide');
  	});



// toggle
	$('.m-1').click(function(){
		$('.t-1').slideToggle("slow");
	});

	$('.m-2').click(function(){
		$('.t-2').slideToggle("slow");
	});


// POP
$('.l-1').click(function() {
  $('.p-1').addClass('show');
});

$('.l-2').click(function() {
  $('.p-2').addClass('show');
});

$('.l-3').click(function() {
  $('.p-3').addClass('show');
});

$('.l-4').click(function() {
  $('.p-4').addClass('show');
});

$('.l-5').click(function() {
  $('.p-5').addClass('show');
});

$('.l-6').click(function() {
  $('.p-6').addClass('show');
});

$('.l-7').click(function() {
  $('.p-7').addClass('show');
});

$('.l-8').click(function() {
  $('.p-8').addClass('show');
});

$('.l-9').click(function() {
  $('.p-9').addClass('show');
});

$('.l-10').click(function() {
  $('.p-10').addClass('show');
});

// CLOSE PIC
$('.pic').click(function() {
  $(this).removeClass('show');
});



// time out
setTimeout(function(){
    $('.title-1').addClass('active')
},1000);

setTimeout(function(){
    $('.title-2').addClass('active')
},2000);

setTimeout(function(){
    $('.title-3').addClass('active')
},3000);

setTimeout(function(){
    $('.image-container').addClass('active')
},4000);















});