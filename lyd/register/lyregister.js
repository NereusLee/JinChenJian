$('input[type="submit"]').on('click', function() {
	event.preventDefault();
})
//注册登录窗口切换
window.onload = function() {
	// sendMsg(e.data)
	$('.lyma').css('text-align', 'center')
	if (localStorage.getItem('TiaoZhuan') == '0') {
		$('.ly-tit').eq(0).trigger('click')
	} else if (localStorage.getItem('TiaoZhuan') == '1') {
		$('.ly-tit').eq(1).trigger('click')
	}
}

$('.ly-check').css({
	'width': '100px',
	'height': '25px'
})



;(function($, window) {
	function ReAndLog() {
		var lyre = $('.ly-form').find('input[type="submit"]')
		var lylog=$('.ly-form2').find('input[type="submit"]')
		lyre.on('click', function() {
			console.log(lyre)
			$.ajax({
				type: 'post',
				url: "zcdl-lyd.php",
				data: {
					name: $('#lyname').val(),
					password: $('#lypass').val(),
					Email: $('#lymail').val(),
					phone: $('#lyphone').val(),
					flag: 1
				}
			}).done(function(data) {
				console.log(data)
			})
		})
		lylog.on('click',function(){
			var lyn=$('.ly-form2').find('input[name="logname"]')
			var lyp=$('.ly-form2').find('input[name="pass"]')
			$.post({
				url: "zcdl-lyd.php",
				data: {
					name: lyn.val(),
					password: lyp.val(),
					flag: 2
				}
			}).done(function(data) {
				console.log(data)
				let sel=new RegExp('登录成功')
				console.log(lyn.val())
				if(sel.test(data)){
					alert('登录成功')
					localStorage.setItem('userName',lyn.val())
					localStorage.setItem('userOpen','true')
					window.parent.location.href='http://nereus.gotoip2.com/jin/djq/index/index.html';
				}else{
					alert('登录失败')
					localStorage.setItem('userName','请登录')
					localStorage.setItem('userOpen',false)
				}
			})
		})
//注册登录窗口切换
		ReAndLog.log = function() {
			$('.ly-form').hide();
			$('.ly-form2').show()
			identy($('.lyma'))
		}

		ReAndLog.regi = function() {
			$('.ly-form').show()
			$('.ly-form2').hide()
			identy($('.lyma'))
		}
	};
	window.R=window.ReAndLog=ReAndLog;
	return R();
})($, window)
