<?php
	$flag=$_GET["flag"];
	$myq=new mysqli();
	$myq->connect('localhost','nereus','123123','nereus');
	$myq->set_charset('utf8');
	$link=mysqli_connect('localhost','nereus','123123','nereus');;
	if(!$link) echo "FAILD!连接错误，用户名密码不对";
	switch($flag){
		case 0:
			$sel='goodsTitle'; break;//标题
		case 1:
			$sel='goodsPrice'; break;	//价格		
		case 2:
			$sel='bigPicture'; break;//大图
		case 3:
			$sel='smallPicture'; break;//左边小图
		case 4:
			$sel='colors'; break;//颜色分类
		case 5:
			$sel='introduce'; break; //商品详情大图
	}
		$res= $myq->query("SELECT ".$sel." FROM `product`");
		$content=array();
		while($arr = $res -> fetch_array()){
            $content[] = $arr;
        }
		echo json_encode($content);
?>