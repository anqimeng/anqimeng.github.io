$(document).ready(function(){

var word1 = [
	"toenail",
	"socks",
	"sausage",
	"spoon",
	"bowknot"
];

var randomWord1 = word1[Math.floor(Math.random()*word1.length)];

var word2 = [
  "kicked",
  "killed",
  "ate",
  "married",
  "buried"
];

var randomWord2 = word2[Math.floor(Math.random()*word2.length)];

var word3 = [
  "a sloth",
  "a guinea pig",
  "Dobby",
  "Shrek",
  "Hello Kitty"
];

var randomWord3 = word3[Math.floor(Math.random()*word3.length)];

$( ".word1" ).html(randomWord1);
$( ".word2" ).html(randomWord2);
$( ".word3" ).html(randomWord3);

});


//レイヤーを移動させると手間が大きいので
//グラデーションの中央を移動させる
$(document).mousemove(function(e){
  $('.spotlight').attr({  'style':'background:radial-gradient(50px 50px at '+ e.clientX +'px '+ e.clientY +'px, transparent, transparent 100px, rgba(0,0,0,0.6) 150px)'
  });
});











