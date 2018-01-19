<?php
	$bgP=$_POST["bgP"];
	$smP=$_POST["smP"];
	$goodsTitle=$_POST["goodsTitle"];
	$goodsPrice=$_POST["goodsPrice"];
	$introduce=$_POST["introduce"];
	$colors=$_POST["colors"];
	// $eval=$_POST["eval"];
	// $alt=$_POST["alt"];

	$flag=$_POST["flag"];


	$sql=new mysqli();
	$sql->connect('localhost','nereus','123123','nereus');
	$sql->set_charset('utf8');

	if($flag==1){
		$sql->query("DELETE FROM `nereus`.`product`");
		$res=$sql->query("INSERT INTO `product` (`goodsTitle`, `goodsPrice`, `bigPicture`, `smallPicture`,`colors`, `introduce`) VALUES ('".$goodsTitle."', '".$goodsPrice."', '".$bgP."', '".$smP."', '".$colors."', '".$introduce."')");
		if($res==1){
			echo "添加成功";
		}else{
			echo "添加失败";
		}
	}
	
 ?>