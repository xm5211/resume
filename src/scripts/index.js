var Swiper = require("./components/swiper/swiper-3.3.1.min");
var SwiperAnimate = require("./components/swiper/swiper.animate1.0.2.min");
//console.log(Swiper);
        //动画
var swiper=new Swiper(".swiper-container", {
  onInit: function(swiper){ 
  	//Swiper2.x的初始化是onFirstInit
    SwiperAnimate.swiperAnimateCache(swiper); //隐藏动画元素 
    SwiperAnimate.swiperAnimate(swiper); //初始化完成开始动画
  }, 
  onSlideChangeEnd: function(swiper){ 
    SwiperAnimate.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
  } 
})   
var $ = require('zepto-modules/zepto');
require('zepto-modules/event');
require('zepto-modules/ajax');
require('zepto-modules/touch');

module.exports = $;
$(".swiper-container").show();
$("#IScroll").hide();
$("#name").css('transform','rotate(15deg)');
//点击解了解更多
$("#enter").tap(function(){
	$(".swiper-container").hide();
	$("#IScroll").show();
	$('.header_span').html('个人技能');
	
	window.setTimeout(function(){
		//引进iscroll的js并且调用
		var IScroll=require("./components/iscroll/iscroll");
		var myScroll = new IScroll('#wrapper', {mouseWheel: false});
		document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	},500);

//	$.post('/api/skill',{},function(data){
	$.post('http://1430356518.applinzi.com/www/mock/skill.php',{},function(data){
			 pos=data.indexOf("<");
            dataStr=data.substring(0,pos);
            data=JSON.parse(dataStr);
		console.log(data[0].name);
		
		for(var i=0;i<data.length;i++){
			$('#scroller').append("<ul class='skul'><li class='skli1'>"+data[i].category+"</li><li class='skli2'><p>"+data[i].name+"</p><p>时间："+data[i].time+"</p><p>程度："+data[i].level+"</p></li></ul>");
		}
	});
});
//技能请求
$("#skill").tap(function(){

	$('#scroller').html("");
	$('.header_span').html('个人技能');
	$('#IScroll').css('background','#fff');
	$('#header').css('background','url(img/btn6.png)');
	$("#header").css('background-size','100% 100%');
	$("#header").css('background-repeat','no-repeat');
	$("#footer>div").css('background','url(img/btn6.png)');
	$("#footer>div").css('background-size','100% 100%');
	$("#footer>div").css('background-repeat','no-repeat');
	window.setTimeout(function(){
		//引进iscroll的js并且调用
		var IScroll=require("./components/iscroll/iscroll");
		var myScroll = new IScroll('#wrapper', {mouseWheel: false});
		document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	},500);

//	$.post('/api/skill',{},function(data){
	$.post('http://1430356518.applinzi.com/www/mock/skill.php',{},function(data){
			 pos=data.indexOf("<");
            dataStr=data.substring(0,pos);
            data=JSON.parse(dataStr);
		for(var i=0;i<data.length;i++){
			$('#scroller').append("<ul class='skul'><li class='skli1'>"+data[i].category+"</li><li class='skli2'><p>"+data[i].name+"</p><p>时间："+data[i].time+"</p><p>程度："+data[i].level+"</p></li></ul>");
		}
	})
	
})
//经历请求


$("#work").tap(function(){

	$('#scroller').html("");
	$('.header_span').html('个人经历');
	$("#scroller").css('height','100%');
	$('#IScroll').css('background','#fff');
	$('#header').css('background','url(img/btn4.png)');
	$("#header").css('background-size','100% 100%');
	$("#header").css('background-repeat','no-repeat');
	$("#footer>div").css('background','url(img/btn4.png)');
	$("#footer>div").css('background-size','100% 100%');
	$("#footer>div").css('background-repeat','no-repeat');
	window.setTimeout(function(){
		var IScroll=require("./components/iscroll/iscroll");
		var myScroll = new IScroll('#wrapper', {mouseWheel: false});
		document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	},500);


//	$.post('/api/work',{},function(data){
$.post('http://1430356518.applinzi.com/www/mock/work.php',{},function(data){
			 pos=data.indexOf("<");
            dataStr=data.substring(0,pos);
            data=JSON.parse(dataStr);
		for(var i=0;i<data.length;i++){
			$('#scroller').append("<ul class='woul'><li>类型："+data[i].category+"</li><li>名称："+data[i].name+"</li><li>时间："+data[i].time+"</li><li>职位："+data[i].reportto+"</li><li>所做项目："+data[i].projects+"</ul>");
		}
	})

});
//项目请求
$("#project").tap(function(){

	$('#scroller').html("");
	$('.header_span').html('我的项目');
	$('#IScroll').css('background','#fff');
	$('#header').css('background','url(img/btn5.png)');
	$("#header").css('background-size','100% 100%');
	$("#header").css('background-repeat','no-repeat');
	$("#footer>div").css('background','url(img/btn5.png)');
	$("#footer>div").css('background-size','100% 100%');
	$("#footer>div").css('background-repeat','no-repeat');
	window.setTimeout(function(){
		//引进iscroll的js并且调用
		var IScroll=require("./components/iscroll/iscroll");
		var myScroll = new IScroll('#wrapper', {mouseWheel: false});
		document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	},500);
	var arry=['img/meilishuo.PNG','img/mogujie.png','img/gy.PNG','img/guomei.jpg'];
//	$.post('/api/project',{},function(data){
	$.post('http://1430356518.applinzi.com/www/mock/project.php',{},function(data){
			console.log(data[0].name);
			 pos=data.indexOf("<");
            dataStr=data.substring(0,pos);
            data=JSON.parse(dataStr);
		
		for(var i=0;i<data.length;i++){
			$('#scroller').append("<ul class='xmul'><li><img src='"+arry[i]+"'/></li><li><span>类型：</span>"+data[i].category+"</li><li><span>地址：</span>"+data[i].url+"</li><li><span>描述：</span>"+data[i].description+"</li><li><span>detail：</span>"+data[i].detail+"</li><li><span>涉及的技术：</span>"+data[i].tech+"</li></ul>");
		}   
	})

})
$("#my").tap(function(){
	$('#scroller').html("");
	$('.header_span').html('个人简历');
	$('#scroller').css("height",'100%');
	$("#IScroll").css('background','url(img/wobg.png)');
	$("#IScroll").css('background-size','100% 100%');
	$("#IScroll").css('background-repeat','no-repeat');
	$('#header').css("background",'url()');
	$("#footer>div").css('background','url(img/btn7.png)');
	$("#footer>div").css('background-size','100% 100%');
	$("#footer>div").css('background-repeat','no-repeat');
	$("#scroller").append("<img class='woimg1' src='img/wo1.png'/></br><img class='woimg2' src='img/wo2.png'/></br><p class='wop1'>我是<span>许敏</span></p><p class='wop2'>一个前端应用开发工程师</p><p class='wop3'>一个为生活努力奋斗的<br/>90后青年</p><img class='woimg3' src='img/wowin.jpg'/>");
});


// 扩展API加载完毕后调用onPlusReady回调函数 
	document.addEventListener( "plusready", onPlusReady, false );
	// 扩展API加载完毕，现在可以正常调用扩展API 
	function onPlusReady() {
		console.log("plusready");
	}
	// 拍照   
	function captureImage(){
		var cmr = plus.camera.getCamera();
		var res = cmr.supportedImageResolutions[0];
		var fmt = cmr.supportedImageFormats[0];
		console.log("Resolution: "+res+", Format: "+fmt);
		cmr.captureImage( function( path ){
				alert( "Capture image success: " + path );  
			},
			function( error ) {
				alert( "Capture image failed: " + error.message );
			},
			{resolution:res,format:fmt}
		);
	}
	// 监听plusready事件  
	
	function find(){
		plus.contacts.getAddressBook(plus.contacts.ADDRESSBOOK_PHONE, function (addressbook) {
			addressbook.find(["displayName","phoneNumbers"],function(contacts){
				for(var i in contacts){
					var name=contacts[i].displayName;
					var phone=contacts[i].phoneNumbers[0].value;
					var str=JSON.stringify(name);
					var str1=JSON.stringify(phone);
//					window.write(str+str1);
//					alert("姓名："+str+","+"电话"+str1);
					document.write("姓名："+str+","+"电话"+str1+"</br>");
//					alert(str1);  
				}
				
			}, function () {
				alert("error");
			},{multiple:true});
		},function(e){
			alert("Get address book failed: " + e.message);
		});
	}
	

 
