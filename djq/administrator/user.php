<?php
	error_reporting(0);
	header("Content-type: text/html; charset=UTF-8");
	$flag = $_POST['flag'];
	$name = $_POST['name'];
	$sex = $_POST['sex'];
	$birthday = $_POST['birthday'];
	$Email = $_POST['Email'];
	$phone = $_POST['phone'];
	$QQ = $_POST['QQ'];
	$realName = $_POST['realName'];
	$idNum = $_POST['idNum'];
	$password=$_POST['password'];


	$sql=new mysqli();
	$sql->connect('localhost','nereus','123123','nereus');
	$sql->set_charset('utf8');
	$link=mysqli_connect('localhost','nereus','123123','nereus');
	if(!$link) echo "FAILD!连接错误，用户名密码不对";


	if($flag==1){
		$res=$sql->query("SELECT * FROM `register` WHERE name='".$name."'");
		$content=array();
		while($arr = $res -> fetch_array()){
            $content[] = $arr;
        }
		echo json_encode($content);
	}

	if($flag==2){
		$sql->query("DELETE FROM `nereus`.`register` WHERE name='".$name."'");
		$res=$sql->query("INSERT INTO `register`(`name`,`Email`, `password`,  `phone`,`sex`, `birthday`, `QQ`, `realName`, `idNum`) VALUES ('".$name."', '".$Email."', '".$password."','".$phone."','".$sex."', '".$birthday."', '".$QQ."', '".$realName."', '".$idNum."')");
		if($res==1){
			echo "添加成功";
		}else{
			echo "添加失败";
		}
	}
?>
