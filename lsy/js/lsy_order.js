//我的订单初始显示界面
lsy_pag($('.lsy_orderAllware'), $('.lsy_orderspnPages span'), $('.lsy_orderspnPages'), $('.lsy_orderPages span'), 'lsy_orderspnPage', 3);
//我的订单点击页码翻页
lsy_Pageclick($('.lsy_orderspnPages'), 'lsy_orderspnPaged', $('.lsy_orderAllware'));
//我的订单删除键
// lsy_dels($('.lsy_orderAllwaredel'), $('.lsy_orderAllwaresCheck'), '.lsy_orderAllware', '.lsy_orderspnPage', '.lsy_orderspnPaged', $('.lsy_orderspnPages'), $('.lsy_orderPages span'), 3);

//我的购物车初始显示界面
lsy_pag($('.lsy_shopware'), $('.lsy_shopspnPages span'), $('.lsy_shopspnPages'), $('.lsy_shopPages span'), 'lsy_shopspnPage', 4);
//我的购物车点击页码翻页
lsy_Pageclick($('.lsy_shopspnPages'), 'lsy_shopspnPaged', $('.lsy_shopware'));
//我的购物车删除键
// lsy_dels($('.lsy_shopwaredel'), $('.lsy_shopwaresCheck'), '.lsy_shopware', '.lsy_shopspnPage', '.lsy_shopspnPaged', $('.lsy_shopspnPages'), $('.lsy_shopPages span'), 4);

//我的订单全选判断
lsy_Checkd($('.lsy_orderAll_Checks'), $('.lsy_orderAllwaresCheck'), $('.lsy_orderAllwaredel'), '.lsy_orderAllware');
//我的购物车全选判断
lsy_Checkd($('.lsy_shop_Checks'), $('.lsy_shopwaresCheck'), $('.lsy_shopwaredel'), '.lsy_shopware');


//复选框按钮判断
function lsy_Checkd(Checks, Check, lsy_del, lsy_ware) {
    var lsy_orderAll_Checks = Checks,
        lsy_orderAllwaresCheck = Check;
    //	console.log(lsy_orderAll_Checks);
    //	console.log($('.lsy_orderAllwares .lsy_orderAllwaresCheck'))
    lsy_orderAll_Checks.click(function() {
        for (var k in lsy_orderAllwaresCheck) {
            if (lsy_orderAll_Checks[0].checked || lsy_orderAll_Checks[1].checked) {
                lsy_orderAllwaresCheck[k].checked = true;
            } else if (lsy_orderAll_Checks[0].checked == false && lsy_orderAll_Checks[1].checked == false) {
                lsy_orderAllwaresCheck[k].checked = false;
            }
        }
    });
    lsy_orderAllwaresCheck.click(function() {
        if ($('.lsy_orderAllwaresCheck:checked').length == lsy_orderAllwaresCheck.length) {
            lsy_orderAll_Checks[1].checked = true;
        } else {
            lsy_orderAll_Checks[1].checked = false;
        }

    });

}

//删除键判断：
// function lsy_dels(waredel, waresCheck, ware, Page, Paged, Pageparent, AllPage, blocks) {
//     //删除键 多选按钮 要删除的父集 页码 当前显示的页码 页码的父集 总页码 每页要显示的页码；
//     waredel.on('click', function() {
//     	console.log(1);
//         var checkds = waresCheck;
//         $.each(checkds, function(k, v) {
//             if (checkds.eq(k).is(':checked')) {
//             	console.log(checkds.eq(k))
//                 var that = $(v);
//                 console.log($(v).parent().parent().find('h4'))
//                 var tit = $(v).parents('ul').find('h4').html();
//                 console.log(tit)
//                 $.ajax({
//                     type: 'post',
//                     url: 'js/car.php',
//                     data: {
//                         flag: 3,
//                         title: tit
//                     }
//                 }).done(function(data) {
//                     console.log(data)
//                 })
//                 $(v).parents('ul').remove();

//                 var lsy_pages = $(Page);
//                 lsy_pag($(ware), lsy_pages, Pageparent, AllPage, Page, blocks)
//                 lsy_Pageblock($(ware), $(Paged).index());
//             };

//         });
//         if ($(ware).length < blocks) {
//             $(ware).eq($(ware).length - 1).children('ul').css('border', 'none');
//         } else {
//             $(ware).eq(blocks - 1).children('ul').css('border', 'none');
//         };

//     });
// }


//删除按键
$('.lsy_shopwaredel').on('click',function(){
	console.log(9)
	var checked=$('input[type="checkbox"]');
	$.each(checked,function(k,v){
		if(v.checked){
			var tt=$(v).parents('ul').find('h4').html()
			$.fn.cardel(tt)
			$(v).parents('ul').remove()
		}
	})
})


//订单页面分页
function lsy_pag(lsy_ware, lsy_Page, lsy_spnPages, lsy_Pages, lsy_spanname, blocks) {
    (function() {
        if (Math.ceil(lsy_ware.length / blocks) != lsy_Page.length) {
            if (Math.ceil(lsy_ware.length / blocks) > lsy_Page.length) {
                for (var i = lsy_Page.length; i < Math.ceil(lsy_ware.length / blocks); i++) {
                    lsy_spnPages.append("<span class=" + lsy_spanname + ">" + (i + 1) + "</span>");
                }
            } else {
                for (var i = lsy_Page.length; i > Math.ceil(lsy_ware.length / blocks); i--) {
                    lsy_Page.eq(i - 1).remove();
                }
            }
        };
        lsy_Pages[0].innerHTML = Math.ceil(lsy_ware.length / blocks);
    })();
};

//点击页码翻页
function lsy_Pageclick(lsy_spnPages, lsy_spancheckdname, lsy_ware) {
    lsy_spnPages.on('click', 'span', function() {
        console.log(1)
        $(this).addClass(lsy_spancheckdname).siblings().removeClass(lsy_spancheckdname);
        var lsy_wares = $(this).index();
        lsy_Pageblock(lsy_ware, lsy_wares);
    });

};

//上下翻页键
//	console.log($('.lsy_orderPage p'));	
$('.lsy_orderPage p').on('click', function() {
    var lsy_Paged = $('.lsy_orderspnPaged')[0].innerText;
    if ($(this).index() == 0) {
        if (lsy_Paged == 1) {
            return
        } else {
            lsy_Pagechange(lsy_Paged - 2);
            lsy_Pageblock($('.lsy_orderAllware'), lsy_Paged - 2);
        }
    }
    if ($(this).index() == 2) {
        if (lsy_Paged == $('.lsy_orderspnPage').length) {
            return
        } else {
            lsy_Pagechange(lsy_Paged);
            lsy_Pageblock($('.lsy_orderAllware'), lsy_Paged);
        }
    }
});

//跳页键
var lsy_skipReg = /^([1-9][0-9]*){1,3}$/;
$(document).keyup(function() {
    var lsy_Skip = $('.lsy_ordertabSkip input').val();
    if (lsy_skipReg.test(lsy_Skip) && lsy_Skip <= $('.lsy_orderspnPage').length) {
        $('.lsy_ordertabSkip input').css('border-color', 'black');
        $('.lsy_ordertabSkip button').on('click', function() {
            lsy_Pageblock($('.lsy_orderAllware'), lsy_Skip - 1);
            lsy_Pagechange(lsy_Skip - 1);
        })
    } else {
        $('.lsy_ordertabSkip input').css('border-color', 'red');
    };
});

//页码更换
function lsy_Pagechange(Paged) {
    $('.lsy_orderspnPaged').removeClass('lsy_orderspnPaged');
    $('.lsy_orderspnPage').eq(Paged).addClass('lsy_orderspnPaged');
};

//要显示的订单页面
function lsy_Pageblock(ware, spnPage) {
    for (var i = 0; i < ware.length; i++) {
        ware.eq(i).css('display', 'none');
    }
    for (var j = spnPage * 3; j < (spnPage + 1) * 3; j++) {
        ware.eq(j).css('display', 'block');
    }
};

//	商品评价
//星级评定
var orderwholestar = $('.orderwholestar span'),
    waresstar = $('.waresstar span'),
    attitudestar = $('.attitudestar span'),
    logisticsstar = $('.logisticsstar span');

lsy_star(orderwholestar);
lsy_star(waresstar);
lsy_star(attitudestar);
lsy_star(logisticsstar);

function lsy_star(obj) {
    obj.on('mousemove', function() {
        //		console.log($(this).index());
        $(this).text('★').prevAll('span').text('★').end().nextAll('span').text('☆');
        $(this).css('color', 'red').prevAll('span').css('color', 'red').end().nextAll('span').css('color', 'black');
    }).click(function() {
        $(this).addClass('lsy_stard').prevAll('span').addClass('lsy_stard').end().nextAll('span').removeClass('lsy_stard');
        var lsy_stards = $(this).siblings('.lsy_stard');
        $(this).siblings('p')[0].innerHTML = (lsy_stards.length + 1) * 2;
    });
    obj.parent().on('mouseleave', function() {
        $(this).children('span').text('☆').css('color', 'black');
        $(this).children('.lsy_stard').text('★').css('color', 'red');
    });
};
//评论发表		
$(document).keyup(function() {
    var lsy_orderCommentVul = $('.lsy_orderComment').val();
    if (lsy_orderCommentVul.length > 300) {
        alert('对不起，您的评论过长了');
        $('.lsy_orderComment').attr('disabled', true);
        $('.lsy_orderdetailsusers').on('click', function() {
            $('.lsy_orderComment').attr('disabled', false);
        });
    };
});
$('.lsy_Commentsubmit').on('click', function() {
    console.log($('.lsy_orderComment').val()); //提供后台，供商品评价页面获取
    window.open('https://www.baidu.com/'); //跳转页面待获取。
});


//购物车结算
$('.CheckdshopAmounts').on('click', function() {
    //页面切换
    let price = $('.lsy_shopwaresCheck:checked').parents('.lsy_shopwaresContent').find('.lsy_total');
    let sum = 0;
    for (let i = 0; i < price.length; i++) {
        console.log(price[i].innerHTML.replace(/￥/, ''));
        sum += Number(price[i].innerHTML.replace(/￥/, ''));
    }
    console.log(sum);
    localStorage.setItem('price', sum);

    $('.lsy_orderpay').css('display', 'block').siblings().css('display', 'none');
    $('.lsy_payFor').html('￥' + localStorage.getItem('price'));
})

$('.lsy_payFor').html('￥' + localStorage.getItem('price'));

//购物车加减商品
$('.lsy_shopwares').on('click', '.Amountbutton1', function() {
    if ($(this).siblings('.Amountnumber').val() == 1) {
        return;
    } else {
        $(this).siblings('.Amountnumber').val(Number($(this).siblings('.Amountnumber').val()) - 1);
        var lsy_Sale = Number($(this).parents('ul').find('.waresSale').html().replace(/￥/, ''));
        //商品总价lsy_Total
        console.log(lsy_Sale)
        var lsy_Total = $(this).parents('.lsy_shopwaresAmount').siblings('.lsy_shopwaresTotal').find('p');
        //商品数量lsy_num
        var lsy_num = Number($(this).siblings('.Amountnumber').val());
        lsy_Total.html('￥' + lsy_Sale * lsy_num);
    }
})
console.log($('.Amountbutton2'));

$('.lsy_shopwares').on('click', '.Amountbutton2', function() {
    console.log($('.Amountnumber'));
    $(this).siblings('.Amountnumber').val(Number($(this).siblings('.Amountnumber').val()) + 1);
    //商品单价
    var lsy_Sale = Number($(this).parents('ul').find('.waresSale').html().replace(/￥/, ''));
    //商品总价lsy_Total
    var lsy_Total = $(this).parents('.lsy_shopwaresAmount').siblings('.lsy_shopwaresTotal').find('p');
    //商品数量lsy_num
    var lsy_num = Number($(this).siblings('.Amountnumber').val());
    console.log($(this).parents('ul').find('.waresSale'))
    console.log(lsy_Sale, lsy_Total, lsy_num, lsy_Sale * lsy_num)
    lsy_Total.html('￥' + lsy_Sale * lsy_num);

})


//支付方式选择
$('.lsy_payWay').on('mouseenter', function() {
    $.each($(this).children(), function(k, v) {

    })
});






//支付账号
$('.lsy_payAccount').on('input', function() {
    $(this).css('border-color', '#CCCCCC');
    if (isNaN($(this).val()) || $(this).val() == ' ') {
        $(this).css('border-color', 'red');
        $(this).blur();
    };
})



//支付密码

$('.lsy_payPassword input').on('input', function() {
    $(this).nextAll().attr('disabled', false);
    if (!isNaN($(this).val()) && $(this).val() != ' ') {
        $(this).css('border-color', '#03a9f4e8');
    } else {
        $(this).css('border-color', 'red');
        $(this).nextAll().attr('disabled', true);
    }
    if ($(this).val().length >= 1) {
        $(this).siblings().eq($(this).index()).focus();
    } else if ($(this).val().length == 0) {
        $(this).siblings().eq($(this).index() - 1).focus();
    }
})

//收货地址
//$('.lsy_address').html('收货地址：'+localStorage.getItem('address'))