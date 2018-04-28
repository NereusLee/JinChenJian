<?php 
	header("Content-type: text/html; charset=gbk;Access-Control-Allow-Origin:*"); 
	$id=$_POST['id'];
	// $file1 = file_get_contents("https://tui.taobao.com/recommend?_ksTS=1514702042530_769&callback=detail_recommend_viewed&appid=9&count=12&sellerid=".$id."&itemid=".$id."&categoryid=110308");

	$file2 = file_get_contents("https://tui.taobao.com/recommend?_ksTS=1514727436777_844&callback=detail_recommend_bought&appid=11&count=12&sellerid=".$id."&itemid=".$id."&categoryid=50005909");
	echo $file1."lyd:".$file2;

	https://tui.taobao.com/recommend?_ksTS=1514727436777_844&callback=detail_recommend_bought&appid=11&count=12&sellerid=2616786136564&itemid=2616786136564&categoryid=50005909
	
?>

2616786136564
