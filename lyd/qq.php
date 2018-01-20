<?php 
	header("Content-type: text/html; charset=gbk"); 
	$id=$_POST['id'];
	$file1 = file_get_contents("https://tui.taobao.com/recommend?_ksTS=1514702042530_769&callback=detail_recommend_viewed&appid=9&count=12&sellerid=".$id."&itemid=".$id."&categoryid=110308");

	$file2 = file_get_contents("https://tui.taobao.com/recommend?_ksTS=1514727436777_844&callback=detail_recommend_bought&appid=11&count=12&sellerid=".$id."&itemid=".$id."&categoryid=50005909");
	echo $file1."lyd:".$file2;
	
	// $files = array($file1,$file2);
	
	// $str=urldecode($file1); //解码 
	// $str =iconv("UTF-8","GB2312",$str); //编码转换 
	
	// echo json_encode($files);

	// $url1="https://tui.taobao.com/recommend?_ksTS=1514702042530_769&callback=detail_recommend_viewed&appid=9&count=12&sellerid=".$id."&itemid=".$id."&categoryid=110308";
	// $url2="https://tui.taobao.com/recommend?_ksTS=1514727436777_844&callback=detail_recommend_bought&appid=11&count=12&sellerid=".$id."&itemid=540635098157&categoryid=50005909";
	// $gzip=false;
	// // echo $url1;
	// // function curl_get($url, $gzip=FALSE){
	//   $curl=curl_init();
	//   curl_setopt($curl, CURLOPT_URL, $url1);
	// 　curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
	// 　curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, 10);
	// 　if($gzip) curl_setopt($curl, CURLOPT_ENCODING, "gzip");
	//   //关键在这里
	// 　$content = curl_exec($curl);
	//   if($content === FALSE ){
	// 	 echo "CURL Error:".curl_error($curl);
	//   }
	//   echo $content;
	// 　curl_close($curl);
	// 　return $content;
	// }
	// echo curl_get($url1, $gzip=false)."lyd:".curl_get($url2, $gzip=false);
	
	// $f1=curl_get($url1, $gzip);
	// $f2=curl_get($url2, $gzip);
	// echo $f1."lyd:".$f2;

	
//方法3
	// $url = "http://localhost/web_services.php";
// 　　$post_data = array ("username" => "bob","key" => "12345");
// 　　$ch =curl_init();

// 　　curl_setopt($ch, CURLOPT_URL, $url1);
// 　　curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
// 　　// post数据
// 　　curl_setopt($ch, CURLOPT_POST, 1);
// 　　// post的变量
// // 　　curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);

// 	curl_setopt($ch, CURLOPT_ENCODING, "gzip");
// 　　$output = curl_exec($ch);
// 　　curl_close($ch);

// 　　//打印获得的数据
// 　　print_r($output);
	
//方法四
// 	if (!function_exists('gzdecode')) {      
//     function gzdecode ($data) {      
//         $flags = ord(substr($data, 3, 1));      
//         $headerlen = 10;      
//         $extralen = 0;      
//         $filenamelen = 0;      
//         if ($flags & 4) {      
//             $extralen = unpack('v' ,substr($data, 10, 2));      
//             $extralen = $extralen[1];      
//             $headerlen += 2 + $extralen;      
//         }      
//         if ($flags & 8) // Filename      
//             $headerlen = strpos($data, chr(0), $headerlen) + 1;      
//         if ($flags & 16) // Comment      
//             $headerlen = strpos($data, chr(0), $headerlen) + 1;      
//         if ($flags & 2) // CRC at end of file      
//             $headerlen += 2;      
//         $unpacked = @gzinflate(substr($data, $headerlen));      
//         if ($unpacked === FALSE)      
//               $unpacked = $data;      
//         return $unpacked;      
//      }      
// } 	

// 	$file1 = file_get_contents("https://tui.taobao.com/recommend?_ksTS=1514702042530_769&callback=detail_recommend_viewed&appid=9&count=12&sellerid=".$id."&itemid=".$id."&categoryid=110308");

// 	$file2 = file_get_contents("https://tui.taobao.com/recommend?_ksTS=1514727436777_844&callback=detail_recommend_bought&appid=11&count=12&sellerid=".$id."&itemid=540635098157&categoryid=50005909");
// 	// echo $file1;
// 	echo gzdecode($file1);
	// .match([/[^\u4e00-\u9fa5\w\s]+/g])
?>

