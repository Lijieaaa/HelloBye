window.onload=function(){
	var music=document.getElementById("music");
	var audio=document.getElementsByTagName("audio")[0];
	var page0=document.getElementById("page0");
	var page1=document.getElementById("page1");
	var page2=document.getElementById("page2");
	var page3=document.getElementById("page3");
	var left=document.getElementById("left");
	var right=document.getElementById("right");
	var p3_title=document.getElementById("p3_title")
	audio.addEventListener("ended",function(event){
		music.setAttribute("class","");
		//this.style.animationPlayState="paused";
	    //this.style.webkitAnimationPlayState="paused"
	},false)
	//点击音乐图标 控制播放效果
	music.onclick=function(){
		if(audio.paused){
			audio.play();
			this.setAttribute("class","play");
			//this.style.animationPlayState="running";
			//this.style.webkitAnimationPlayState="running"
		}
		else{
			audio.pause();
			this.setAttribute("class","")
			//低版本安卓不兼容 webkit前缀兼容iPhone6兼容
			//this.style.animationPlayState="paused";
			//this.style.webkitAnimationPlayState="paused"
		}
		}
	music.addEventListener("touchstart",function(event){
 
       if(audio.paused){
			audio.play();
			this.setAttribute("class","play");
		}
		else{
			audio.pause();
			this.setAttribute("class","")
		}
	},false);
	 var handler=function(event){
 	page0.style.display="none";
 	page1.style.display="block";
 	left.setAttribute("class" ,"");
 	right.setAttribute("class","");
 	page2.style.left="100%";
   	page2.style.display="block";
   	p3_title.setAttribute("class","");
   	page3.style.display="block";
   	page3.style.top="100%";
    var time1=setTimeout(function(){
   		page1.setAttribute("class","page fadeOut");
   		page2.setAttribute("class","page fadeIn");
        left.setAttribute("class" ,"p2_mask left");
        right.setAttribute("class" ,"p2_mask right");
   	},7000)
   	var time2=setTimeout(function(){
   		page2.style.left="0";
   		page2.setAttribute("class","page fadeOut")
   		page3.setAttribute("class","page fadeIn")
        p3_title.setAttribute("class","p3_title")
   	},12000)
}
   page0.addEventListener("touchstart",handler,false);
   page0.addEventListener("click",handler,false)

}