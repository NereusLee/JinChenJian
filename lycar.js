;
(function($) {
	$.fn.extend({
		car: function() {
			$.ajax({
				type: 'post',
				url: 'car.php',
				data: {
					pic: bigPicture,
					title: goodsTitle,
					price: goodsPrice,
					flag: 1
				}
			}).done(function(data) {
				console.log(data);
			});
		},
		leng: function() {//购物车的高度设置
				var opt = $(this);
				console.log(opt,opt.find("button :last-child"))
				var ll = opt.find("button :last-child").offset().top;
				alert(ll)
				if (ll > 740) {
					opt.css('height', ll + 'px');
				} else {
					opt.css('height', '740px');
				}
		},
		cardel: function() {
			var opt = arguments;
			$.ajax({
				type: 'post',
				url: 'js/car.php',
				data: {
					title: opt[0],
					flag: 3
				}
			}).done(function(data) {
				console.log(data);
				$('.lsy_shopcart').leng()
			});

		},
		lsyAdd: function() {
			//三个参数  表单选项,文本或图片,数量
//			alert(2)
			var opt = arguments;
			var that = $(this);
			$.ajax({
				type: 'post',
				url: 'js/car.php',
				data: {
					flag: 2,
				},
				dataType: 'json'
			}).done(function(data) {
				console.log(data);
				var dat = JSON.stringify(data);
				var img = dat.replace(/\\\//g, '/').match(/http[^\"\"\,]+jpg/g);
				var lyprice = dat.match(/"price"\:\"[^\,\"\}]+/g);
				var lytitle = dat.match(/"title"\:\"[^\,\"\}]+/g);
				var lyimg = dat.match(/"pic"\:\"[^\,\"\}]+/g);
				var lyli = $('.lsy_shopware').eq(0);
//				console.log(lyimg);
//				that.children('.lsy_shopware').empty();
				for(let i = 0; i < lyprice.length; i++) {
					var llii=$('.lsy_shopware').eq(0).clone()
					var lli = llii;
//					console.log(lli.find('.waresSale'))
//					console.log(lli)
					lli.find('img').attr('src' ,lyimg[i].replace(/"pic"\:\"/, ''));
					lli.find('h4').html(lytitle[i].replace(/"title"\:\"/, ''));
					lli.find('.waresSale').html(lyprice[i].replace(/"price"\:\"/, ''));				
					lli.find('.lsy_total').html(lyprice[i].replace(/"price"\:\"/, ''));
					// console.log(lyprice[i].replace(/"price"\:\"/, ''))
					that.append(lli);
				};
				$('.lsy_shopware').eq(0).remove();
				$('.lsy_shopcart').leng()
			});
		}
	});
})($);