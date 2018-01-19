(function($){
	$.fn.extend({
		update:function(){
			var that=$(this);  //搜索词  数量   li的class  图片的class 价格的class 
			console.log(that.index())
//			that.addClass(arguments[0]);
			var oop = arguments;
			var rawUrl = 'https://s.taobao.com/search?data-key=s&data-value=44&ajax=true&_ksTS=1514541567667_869&callback=jsonp870&q=' +arguments[0]+ '&imgfile=&ie=utf8&bcoffset=10&ntoffset=3&p4ppushleft=1%2C48';
			$.ajax({
                type: "get",
                url: rawUrl,
                dataType: 'jsonp',
                jsonpCallback: 'jsonp870'
            }).done(function(data) {
            	console.log('成功')
            	var rawData = data.mods.itemlist.data.auctions;

                if (rawData.length === 0) {
                    alert('数据为空')
                    return
                }
                console.log(oop)
                for(var i=0;i<arguments[1].length;i++){
                	li = $('<li class='+oop[2]+'></li>')
                    li.append('<div class='+oop[3]+'><img src=http:' + rawData[i].pic_url + '></div>')//图片    
                    li.append('<h4 class='+oop[4]+'>' + rawData[i].raw_title + '</h4>')//标题
                    li.append('<span class='+oop[5]+'>' + rawData[i].view_price + '</span>')//价格
                    
                    li.attr({
                        "links": rawData[i].comment_url,
                        "lyid": rawData[i].user_id
                    })
                    that.append(li)
                    console.log(that)
                }
            }).fail(function(data){
                console.log(data)
                console.log('网络连接失败，请检查网络')
            })
		}
	})
})($)