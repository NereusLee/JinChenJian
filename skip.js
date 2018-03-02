$('.top_box_1_02').find('li').on('click',function(){
	var sy=$(this).index();
	localStorage.TiaoZhuan=sy;
	switch(sy){
		case 0: 
		window.open('http://nereus.gotoip2.com/jin/lyd/register/kaitou  jiewei.html'); 
		break;
		case 1: 
		window.open('http://nereus.gotoip2.com/jin/lyd/register/kaitou  jiewei.html'); 
		break;
		case 2: 
		window.open('http://nereus.gotoip2.com/jin/lsy/lsy_order.html');
		break;
	}
})

$('.top_box_1_02').find('li').eq(3).on('click', function() {
		console.log(localStorage.getItem('userOpen') == 'true')
	if (localStorage.getItem('userOpen') == 'true') {
		window.open('http://nereus.gotoip2.com/jin/djq/administrator/administrator.html');
	}
})

$('.top_box_1_02').find('li').eq(0).html('Hi'+localStorage.getItem('userName'))

let tiao=$('.top_box_1_02').find('li');


$('.top_box1_icon').on('click',function(){
	console.log($('#top_box1_txt').val())
	localStorage.setItem('keywords',$('#top_box1_txt').val())
	window.open('http://nereus.gotoip2.com/jin/wang/fenlei.html')
})

$('.top_box1_shopCar').on('click',function(){
	window.open('http://nereus.gotoip2.com/jin/lsy/lsy_order.html')
})

if(localStorage.getItem('userOpen').length==0){
	localStorage.setItem('userOpen','false');
}

$(document).keydown(function() {
	if (event.keyCode == "13") { //keyCode=13是回车键
		$('.top_box1_icon').click();
	}
});

// window.onbeforeunload=function(){
// 	alert('closed')
// 	localStorage.setItem('userName','请登录');
// }