<?php
	header('Access-Control-Allow-Origin:*');
	$pic=$_POST['pic'];
	// $title=$_POST['title'];
	$price=$_POST['price'];
	$flag=$_POST['flag'];
	$title=$_POST['title'];

	$sql=new mysqli();
	$sql->connect('localhost','nereus','123123','nereus');
	$sql->set_charset('utf8');
	$link=mysqli_connect('localhost','nereus','123123','nereus');
	if(!$link) echo "FAILD!连接错误，用户名密码不对";

	if($flag==1){  //单品页添加进购物车
		$res=$sql -> query("INSERT INTO `shoplist`(`pic`,`title`, `price`) VALUES ('".$pic."', '".$title."', '".$price."')");

		if($res==1){
			echo "添加成功";

		}else{
			echo "添加失败";
		}
	}
	if($flag==2){    //购物车添加数据
		$res = $sql -> query("SELECT * FROM `shoplist`");
		$content=array();
		while($arr = $res -> fetch_array()){
            $content[] = $arr;
        }
		echo json_encode($content);
	}
	if($flag==3){   //购物车页删除订单
		$res = $sql -> query("DELETE FROM `shoplist` WHERE `title` = '".$title."'");
        if($res==1){
			echo '删除成功';
		}else{
			echo '删除失败';
		}
	}
?>