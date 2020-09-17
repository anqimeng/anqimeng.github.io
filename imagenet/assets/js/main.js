$(document).ready(function(){
	console.log('hello world');

	$('.btn-past').click(function(){
		$('.item').addClass('hide');
		$('.item.past').removeClass('hide')
	});


	$('.btn-present').click(function(){
		$('.item').addClass('hide');
		$('.item.present').removeClass('hide')
	});


	$('.btn-useful').click(function(){
		$('.item').addClass('hide');
		$('.item.useful').removeClass('hide')
	});


	$('.btn-useless').click(function(){
		$('.item').addClass('hide');
		$('.item.useless').removeClass('hide')
	});


	$('.btn-physical').click(function(){
		$('.item').addClass('hide');
		$('.item.physical').removeClass('hide')
	});


	$('.btn-psychological').click(function(){
		$('.item').addClass('hide');
		$('.item.psychological').removeClass('hide')
	});

	$('.btn-reset').click(function(){
		$('.item').removeClass('hide')
	});

});