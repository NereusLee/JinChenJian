<?php
	$name=$_POST['name'];
	$password=$_POST['password'];
	$Email=$_POST['Email'];
	$phone=$_POST['phone'];
	$flag=$_POST['flag'];
	
	$sql=new mysqli();
	$sql->connect('localhost','nereus','123123','nereus');
	$sql->set_charset('utf8');
	$link=mysql_connect('localhost','nereus','123123','nereus');
	if(!$link) echo "FAILD!连接错误，用户名密码不对";
	else echo "OK!可以连接  "; 
	
	if($flag==1){
		//写注册，注册就是给数据库添加数据
		
		//用$sql对象执行数据库添加的语句，执行完之后，返回一个结果，结果用$res保存
		$res = $sql -> query("INSERT INTO `register` (`name`, `password`,`Email`,`phone`) VALUES ('".$name."', '".$password."','".$Email."','".$phone."')");
		
		//上面这句话执行完，就把数据添加到数据库了
		
		
		//$res就是执行操作语句的返回值，如果这个值为1，则表示添加数据成功，否则，失败
		if($res==1){
			echo '注册成功';
		}else{
			echo '注册失败';
		}
	}else{
		
		//执行数据库查找语句
		//查找语句与添加语句不同，添加语句，如果成功返回1，而查找语句如果成功，则返回查找的结果集
		$res = $sql -> query("SELECT * FROM `register` WHERE `name` = '".$name."'");
		
		//结果集用不了的，所以要遍历
		$row = $res -> fetch_row();
		
		if($name==$row[0]&&$password==$row[2]){
			echo '登录成功';
		}else{
			echo '登录失败';
		}
		
		
		
	}
	
	
	
	
	
	
	
	
	
	
	
?>