;(function($){
	$.fn.extend({
		goSearch : function(options) {
		var that=$(this)
		var defaults={
			li_class: null,
			div_class:'tutu',
			img_width:'200px',
			title_class:'ly_product',
			price_class:'ly_price',
			span_class:'tu_right',
		}
		var opt=$.extend({},defaults,options)
		var rawUrl;
		rawUrl = 'https://s.taobao.com/search?data-key=s&data-value=44&ajax=true&_ksTS=1514541567667_869&callback=jsonp870&q=' + that.val() + '&imgfile=&ie=utf8&bcoffset=10&ntoffset=3&p4ppushleft=1%2C48';
		$('#u').empty();
		$.ajax({
			type: "get",
			url: rawUrl,
			dataType: 'jsonp',
			jsonpCallback: 'jsonp870'
		}).done(function(data) {
			console.log(data)
			var rawData = data.mods.itemlist.data.auctions;

			if (rawData.length === 0) {
				alert('数据为空')
				return
			}

			for (var k = 0; k < 5; k++) {
				for (var i = 0; i < 200; i++) {
					li = $('<li></li>')
					li.append('<div class="tutu"><img height=200 src=http:' + rawData[i].pic_url + '></div>')
					li.append('<p class="ly_product">' + rawData[i].raw_title + '</p>')
					li.append('<span class="ly_price">' + rawData[i].view_price + '</span>')
					li.append('<span class="tu_right">' + rawData[i].view_sales + '</span>')
					li.attr({
						"links": rawData[i].comment_url,
						"lyid": rawData[i].user_id
					})
					$('#u').append(li)
				}
			}
		}).fail(function(data) {
			console.log(data)
			console.log('网络连接失败，请检查网络')
		})
	}
	})
})($)
	