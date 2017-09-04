
// var imgone = document.getElementsByClassName('sliderboximgone');
// var imgtwo = document.getElementsByClassName('sliderboximgtwo');
// // var s = new getSeconds();
// var timer;
// var shown = document.getElementById('apperweima');
// console.info(shown);
// var mouseo = document.getElementById('headerrightspanthr');
// window.onload = function ggg () {
// 	console.log(1,imgone[0].style);
// 	console.log(2);
// 	imgone[0].style.display = "block";
// 	imgtwo[0].style.display = "none";
// 	timer = setInterval('imgtwo[0].style.display = "block",imgone[0].style.display = "none"',1500);
// 	// end();
// };
// function end(){
//   clearInterval(timer);
//   window.onload;
//   console.log(window.onload)
// };
// end();
// function disp (){
// 	console.log(54355);
// 	if(mouseo.onmouseover){shown.style.display = "none";}
// };
console.log(2);
console.log($('.sliderboximgone'));
(function(){
	$('.sliderboximgone').css('display','block');
	$('.sliderboximgtwo').css('display','none');
	console.log(1);
	$('.headerrightspanthr').mouseover(function(){
		$('#apperweima').css('display','block');
		console.log(3);
	});
	$('.headerrightspanthr').mouseout(function(){
		$('#apperweima').css('display','none');
		console.log(4);
	});


	$('#absolutetop').mouseover(function(){
		$('#absolutetop-cursor').css('display','block');
		$('#absolutetop').css('display','none');
	});
	console.log(5);
	$('#absolutetop').mouseout(function(){
		$('#absolutetop-cursor').css('display','none');
		$('#absolutetop').css('display','block');
	});


	$('#absolutemsg').mouseover(function(){
		$('#absolutemsg-cursor').css('display','block');
		$('#absolutemsg').css('display','none');
	});
	console.log(6);
	$('#absolutemsg').mouseout(function(){
		$('#absolutemsg-cursor').css('display','none');
		$('#absolutemsg').css('display','block');
	});
	if($('.absolutecontainer').offset().top < 500){
			$('.absolutecontainer').css('display','none');
	};
	$(window).scroll(function(){
		console.log(7);
		if($('.absolutecontainer').offset().top < 500){
			$('.absolutecontainer').css('display','none');
		}else if($('.absolutecontainer').offset().top > 500){
			$('.absolutecontainer').css('display','block');
		};
	})
	
})();