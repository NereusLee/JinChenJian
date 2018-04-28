					
;(function($) {
    $.fn.extend({
        // goSearch: function() {
        //     // var that=$(this)
        //     var opt = arguments;
        //     var rawUrl;
        //     // console.log(opt[0])
        //     rawUrl = 'https://s.taobao.com/search?data-key=s&data-value=44&ajax=true&_ksTS=1514541567667_869&callback=jsonp870&q=' + opt[0] + '&imgfile=&ie=utf8&bcoffset=10&ntoffset=3&p4ppushleft=1%2C48';

        //     $('#u').empty();
        //     $.ajax({
        //         type: "get",
        //         url: rawUrl,
        //         dataType: 'jsonp',
        //         jsonpCallback: 'jsonp870'
        //     }).done(function(data) {
        //         console.log(data)
        //         var rawData = data.mods.itemlist.data.auctions;

        //         if (rawData.length === 0) {
        //             alert('数据为空')
        //             return
        //         }

        //         for (var k = 0; k < 5; k++) {
        //             for (var i = 0; i < 200; i++) {
        //                 li = $('<li></li>')
        //                 li.append('<div class="tutu"><img height=200 src=http:' + rawData[i].pic_url + '></div>')
        //                 li.append('<p class="ly_product">' + rawData[i].raw_title + '</p>')
        //                 li.append('<span class="ly_price">' + rawData[i].view_price + '</span>&nbsp;&nbsp;&nbsp; ')
        //                 li.append('<span class="tu_right">' + rawData[i].view_sales + '</span>')
        //                 li.attr({
        //                     "links": rawData[i].comment_url,
        //                     "lyid": rawData[i].user_id
        //                 })
        //                 $('#u').append(li)
        //             }
        //         }
        //     }).fail(function(data) {
        //         console.log(data)
        //         console.log('网络连接失败，请检查网络')
        //     })
        // },
        taob2: function(data) {
            $.ajax({
                type: "post",
                url: "taob2.php",
                async: false,
                data: {
                    bgP: data.bgp,
                    smP: data.smp,
                    goodsTitle: data.gtitle,
                    goodsPrice: data.gprice,
                    colors: data.colors,
                    introduce: data.introduce,
                    // alt: data.alt.join(','),
                    flag: 1
                }
            }).done(function(data) {
                console.log(data)
            })
        },
        check: function() {
            $.ajax({
                type: 'get',
                url: 'getData.php?flag=2',
            }).done(function(data) {
                // console.log(data)
                var jso = JSON.parse(data)
                var img = data.replace(/\\\//g, '/').match(/http[^\"\"\,]+jpg/g);
                console.log(data.replace(/\\\//g, '/'))
                for (i = 0; i < img.length; i++) {
                    console.log(img[i])
                    var im = $('<img src="' + img[i] + '">');
                    $('body').append(im);
                }
            });
        }
    })
})($)



$('#u').on("click", "li", function() {
    var that = this;
    var itemId = that.getAttribute("lyid")
    window.open('http://nereus.gotoip2.com/jin/wang/danpin10.html')
    returnData.gtitle = $(this).children('.ly_product').text();
    // console.log(123);
    // console.log(returnData);
    $.ajax({
        type: 'post',
        url: "qq.php",
        data: { 'id': itemId },
        async: false,
    }).done(function(da) {
        dad = da.split('lyd:');
        // console.log(dad[1])

        var data1 = JSON.parse(dad[0].replace(/detail_recommend_viewed\(/g, "").replace(/\}\)\;/g, "}"))
        var data2 = JSON.parse(dad[1].replace(/detail_recommend_bought\(/g, "").replace(/\}\)\;/g, "}"))
        // console.log(data1, data2)
        detail_recommend_viewed(data1, data2)
    })
});

var detail_recommend_viewed = function(data1, data2) {
    // console.log(data)
    bgp = data1.result[0].pic;
    smp = data1.result[1].pic + "";
    var gprice = data1.result[0].price;
    returnData.bgp = bgp;
    returnData.smp = smp;
    returnData.gprice = gprice;

    var introduce = data2.result[0].pic;

    // console.log(introduce)
    var colors = data2.result[1].pic;

    returnData.introduce = introduce;
    returnData.colors = colors;

    $.fn.taob2(returnData)
}
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
		$.ajax({
			type: "get",
			url: rawUrl,
			dataType: 'jsonp',
			jsonpCallback: 'jsonp870'
		}).done(function(data) {
            let startTime=new Date()
			var rawData = data.mods.itemlist.data.auctions;
            // console.log(rawData)

			if (rawData.length === 0) {
				alert('数据为空')
				return
			}
            let mock = document.createDocumentFragment()
			for (var k = 0; k < 50; k++) {
				for (var i = 0; i < 45; i++) {
                    if(rawData[i]){
					   let li = $('<li></li>')
                        li.append('<div class="tutu"><img height=200 src=http:' + rawData[i].pic_url + '></div>')
                        li.append('<p class="ly_product">' + rawData[i].raw_title + '</p>')
                        li.append('<span class="ly_price">' + rawData[i].view_price + '</span>')
                        li.append('<span class="tu_right">' + rawData[i].view_sales + '</span>')
                        li.attr({
                            "links": rawData[i].comment_url,
                            "lyid": rawData[i].user_id
                        })
                        mock.appendChild(li[0])
                        // $('#u').append(li)
                    }
					
				}
			}
            $('#u').empty();
            document.querySelector('#u').appendChild(mock)

            console.log(new Date()-startTime)
		}).fail(function(data) {
			console.log(data)
			console.log('网络连接失败，请检查网络')
		})
	}
	})
})($)