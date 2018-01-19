//轮播图  开始
    var arr = ['images/lunbotu/1.png','images/lunbotu/2.png','images/lunbotu/3.png']
    var lunbo = document.getElementsByClassName('lunbotu')[0]
    var btn = document.getElementsByClassName('lunbotu_btn')[0]
	var btns = document.querySelectorAll(".lunbotu_btn button");
    var inps = document.querySelector(".lunbotu_button_left");
    var inpr= document.querySelector(".lunbotu_button_right");
    var ige = document.querySelector('.lunbotu_image')
    var img = document.querySelector(".lunbotu_image img");
    var timer = null;
    var n = 0;
    
    
    $(".lunbotu_btn button").on("mouseenter", function(){
        	var a=$(this).index()
        	console.log(arr[a])
//          return function(){
                clearInterval(timer)
                for(var i =0;i<btns.length;i++){
                    btns[i].style.backgroundColor="#999999";
                }
                btns[a].style.backgroundColor="black";
                img.src = arr[a]
//          }
        })
    for(var i =0;i<btns.length;i++){
//  	console.log(i);
        btns[i].index = i;
		btns[i].onmouseout = function (){
			timer = setInterval(fun,2000)
		    n = this.index;
	        }
	    }
	    inps.onclick = function (){
	        change(true)

	    }
	    inpr.onclick = function (){
	        change(false)
	    }

	    function change(flag){
	        if(flag){
	        	n--;
	        	if(n<0){n=2}           
	            bg(n)
	        }else{
	        	n++;
	            if(n>2){n=0}
	            bg(n)
	        }
//	        console.log(n)
	    }
	    timer = setInterval(fun,2000)
	    function fun(){
	        n++;
	        if(n>2){
	        n=0
	        }  
	        bg(n)
	     }
	    function bg(n){
	        img.src = arr[n];
	        for(var i =0;i<btns.length;i++){
	            btns[i].style.backgroundColor="#999999";
	        }
	            btns[n].style.backgroundColor="black";
	    }
     
	    inps.onmouseover =function (){
	        clearInterval(timer)
	    }
	    inpr.onmouseover =function (){
	        clearInterval(timer)
	    }
	    inps.onmouseout =function (){
	        timer = setInterval(fun,2000)
	    }
	    inpr.onmouseout =function (){
	        timer = setInterval(fun,2000)
	    }
//轮播图  结束



