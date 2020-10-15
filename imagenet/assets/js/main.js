$(document).ready(function(){
	console.log('hello world');

// filter
	$('.btn-past').click(function(){
		$('.cure').addClass('hide');
		$('.cure.past').removeClass('hide')
	});


	$('.btn-present').click(function(){
		$('.cure').addClass('hide');
		$('.cure.present').removeClass('hide')
	});


	$('.btn-useful').click(function(){
		$('.cure').addClass('hide');
		$('.cure.useful').removeClass('hide')
	});


	$('.btn-useless').click(function(){
		$('.cure').addClass('hide');
		$('.cure.useless').removeClass('hide')
	});


	$('.btn-physical').click(function(){
		$('.cure').addClass('hide');
		$('.cure.physical').removeClass('hide')
	});


	$('.btn-psychological').click(function(){
		$('.cure').addClass('hide');
		$('.cure.psychological').removeClass('hide')
	});

	$('.btn-reset').click(function(){
		$('.cure').removeClass('hide')
	});


// popup

$('.l-1').hover(
	function(){
	// first function here
	$('.i-1').addClass('show');
}, function(){
	// second function here
	$('.i-1').removeClass('show');
});

$('.l-2').hover(
	function(){
	// first function here
	$('.i-2').addClass('show');
}, function(){
	// second function here
	$('.i-2').removeClass('show');
});

$('.l-3').hover(
	function(){
	// first function here
	$('.i-3').addClass('show');
}, function(){
	// second function here
	$('.i-3').removeClass('show');
});

$('.l-4').hover(
	function(){
	// first function here
	$('.i-4').addClass('show');
}, function(){
	// second function here
	$('.i-4').removeClass('show');
});

$('.l-5').hover(
	function(){
	// first function here
	$('.i-5').addClass('show');
}, function(){
	// second function here
	$('.i-5').removeClass('show');
});

$('.l-6').hover(
	function(){
	// first function here
	$('.i-6').addClass('show');
}, function(){
	// second function here
	$('.i-6').removeClass('show');
});

$('.l-7').hover(
	function(){
	// first function here
	$('.i-7').addClass('show');
}, function(){
	// second function here
	$('.i-7').removeClass('show');
});

$('.l-8').hover(
	function(){
	// first function here
	$('.i-8').addClass('show');
}, function(){
	// second function here
	$('.i-8').removeClass('show');
});

$('.l-9').hover(
	function(){
	// first function here
	$('.i-9').addClass('show');
}, function(){
	// second function here
	$('.i-9').removeClass('show');
});

$('.l-10').hover(
	function(){
	// first function here
	$('.i-10').addClass('show');
}, function(){
	// second function here
	$('.i-10').removeClass('show');
});

$('.l-11').hover(
	function(){
	// first function here
	$('.i-11').addClass('show');
}, function(){
	// second function here
	$('.i-11').removeClass('show');
});

$('.l-12').hover(
	function(){
	// first function here
	$('.i-12').addClass('show');
}, function(){
	// second function here
	$('.i-12').removeClass('show');
});

$('.l-13').hover(
	function(){
	// first function here
	$('.i-13').addClass('show');
}, function(){
	// second function here
	$('.i-13').removeClass('show');
});

$('.l-14').hover(
	function(){
	// first function here
	$('.i-14').addClass('show');
}, function(){
	// second function here
	$('.i-14').removeClass('show');
});

$('.l-15').hover(
	function(){
	// first function here
	$('.i-15').addClass('show');
}, function(){
	// second function here
	$('.i-15').removeClass('show');
});

$('.l-16').hover(
	function(){
	// first function here
	$('.i-16').addClass('show');
}, function(){
	// second function here
	$('.i-16').removeClass('show');
});

$('.l-17').hover(
	function(){
	// first function here
	$('.i-17').addClass('show');
}, function(){
	// second function here
	$('.i-17').removeClass('show');
});

$('.l-18').hover(
	function(){
	// first function here
	$('.i-18').addClass('show');
}, function(){
	// second function here
	$('.i-18').removeClass('show');
});

$('.l-19').hover(
	function(){
	// first function here
	$('.i-19').addClass('show');
}, function(){
	// second function here
	$('.i-19').removeClass('show');
});

$('.l-20').hover(
	function(){
	// first function here
	$('.i-20').addClass('show');
}, function(){
	// second function here
	$('.i-20').removeClass('show');
});

$('.l-21').hover(
	function(){
	// first function here
	$('.i-21').addClass('show');
}, function(){
	// second function here
	$('.i-21').removeClass('show');
});

$('.l-22').hover(
	function(){
	// first function here
	$('.i-22').addClass('show');
}, function(){
	// second function here
	$('.i-22').removeClass('show');
});

$('.l-23').hover(
	function(){
	// first function here
	$('.i-23').addClass('show');
}, function(){
	// second function here
	$('.i-23').removeClass('show');
});

$('.l-24').hover(
	function(){
	// first function here
	$('.i-24').addClass('show');
}, function(){
	// second function here
	$('.i-24').removeClass('show');
});

$('.l-25').hover(
	function(){
	// first function here
	$('.i-25').addClass('show');
}, function(){
	// second function here
	$('.i-25').removeClass('show');
});

$('.l-26').hover(
	function(){
	// first function here
	$('.i-26').addClass('show');
}, function(){
	// second function here
	$('.i-26').removeClass('show');
});

$('.l-27').hover(
	function(){
	// first function here
	$('.i-27').addClass('show');
}, function(){
	// second function here
	$('.i-27').removeClass('show');
});

$('.l-28').hover(
	function(){
	// first function here
	$('.i-28').addClass('show');
}, function(){
	// second function here
	$('.i-28').removeClass('show');
});

$('.l-29').hover(
	function(){
	// first function here
	$('.i-29').addClass('show');
}, function(){
	// second function here
	$('.i-29').removeClass('show');
});

$('.l-30').hover(
	function(){
	// first function here
	$('.i-30').addClass('show');
}, function(){
	// second function here
	$('.i-30').removeClass('show');
});




// slide
$('.about').click(function() {
	$('.a-content').removeClass('out');
	$('.a-content').addClass('in');
	$('.back1').addClass('show')
});

$('.back1').click(function() {
  $('.a-content').removeClass('in');
  $('.a-content').addClass('out');
  $('.back1').removeClass('show')
});

$('.filter').click(function() {
	$('.f-content').removeClass('out');
	$('.f-content').addClass('in');
	$('.back2').addClass('show')
});

$('.back2').click(function() {
  $('.f-content').removeClass('in');
  $('.f-content').addClass('out');
  $('.back2').removeClass('show')
});

});




























