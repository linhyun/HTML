$(function(){
	//鼠标划过mend标签
	$(".mend").hover(function(){
		$(".arrow").css("display","block").hover(function(){
			$(".arrow").css("background-color","RGBA(0,0,0,.7)")
		},function(){
			$(".arrow").css("background","RGBA(0,0,0,.3)")
		})
	},function(){
		$(".arrow").css("display","none")
	})

	//var oMend = $(".mend")
	//var oneWidth = $(".mend li").eq(0).width()
	// var prev = $('#prev')
 //    var next = $('#next')
	// var tag = null;
	var iPage = 0;
	//$(".mend").css({position:'absolute'})
	// $(".mend").hover(function(){
	// 	clearInterval(tag)
	// },function(){
	// 	autoPlay()
	// })
	$("#prev").click(function(){
		iPage--;
		if(iPage < 0){
			iPage = 1;
		}
		$(".mend").stop().animate({left:-1160 * iPage},400)
		// clearInterval(tag)
	})
	$("#next").click(function(){

			iPage++
			if(iPage > 1){
				iPage = 0
			}
		$(".mend").stop().animate({left:-1160 * iPage},400)
		// clearInterval(tag)
	})
	$("#next").hover(function(){
		$(this).css({display:"block",width:"50px",height:"60px"})
		$("#prev").css({display:"block",width:"50px",height:"60px"})
	},function(){
		$(this).css({display:"none",width:"50px",height:"60px"})
		$("#prev").css({display:"none",width:"50px",height:"60px"})
	});
	$("#prev").hover(function(){
		$(this).css({display:"block",width:"50px",height:"60px"})
		$("#next").css({display:"block",width:"50px",height:"60px"})
	},function(){
		$(this).css({display:"none",width:"50px",height:"60px"})
		$("#next").css({display:"none",width:"50px",height:"60px"})
	})




	ajax("get",'json/main.json',"",function(data){
		var aLi = $(".mend").find("li").css({height:'323px',width:'222px',marginRight:'10px',background:'#fff',float:'left'})
		var arr = JSON.parse(data)._data;
		for(var i = 0; i < 10; i++){
			var index = i % 10
			var oImg = $("<img>").attr("src",arr[i].images).appendTo($(".mend").find("li").eq(index)).css({width:'222px',height:'220px'});
			var oDl = $("<dl></dl>")
			$(oDl).insertAfter($(oImg)).css({width:'206px',height:'93px',paddingLeft:'16px',paddingTop:'8px'})
			var oDt = $("<dt><a href = '#'></a></dt>")
			$(oDt).find("a").html(arr[i].blank).css({color:'#4a4a4a'})
			$(oDt).appendTo($(oDl)).css({width:'184px',height:'32px',fontSize:'12px',lineHeight:'16px',color:'#4a4a4a'})
			var oDd = $("<dd></dd>")
			$(oDd).appendTo($(oDl)).css({width:'206px',height:'36px',marginTop:'5px'})
			var oSpan = $("<span></span>")
			$(oSpan).html(arr[i].special_price)
			$(oSpan).appendTo($(oDd)).css({height:'17px',fontSize:'9px',marginRight:'15px',linHeight:'17px',display:'block',color:'#c93a2c',float:'left'})
			var oDel = $("<del></del>")
			$(oDel).html(arr[i].market_price)
			$(oDel).appendTo($(oDd)).css({height:'17px',fontSize:'9px',marginRight:'15px',linHeight:'17px',display: 'block',color:'#828282',float:'left'})




			// var mend_a = $('<a href = "#"></a>')
			// var mend_img = $("<img/>")
			// $(mend_img).appendTo($(mend_a))
			// $(mend_img).attr("src",arr[i].images).css({width:'222px',height:'220px'}).appendTo($(aLi).eq(index))
			// $(mend_img).wrap("<div>").parent().css({height:"323px",width:'222px',marginBottom:'20px'})
			// var oDl = $("<dl></dl>")
			// $(oDl).insertAfter($(mend_img)).css({width:'206px',height:'93px',paddingLeft:'16px',paddingTop:'8px'})
			// var oDt = $("<dt><a href = '#'></a></dt>")
			// $(oDt).find("a").html(arr[i].blank).css({color:'#4a4a4a'})
			// $(oDt).appendTo($(oDl)).css({width:'184px',height:'32px',fontSize:'12px',lineHeight:'16px',color:'#4a4a4a'})
			// var oDd = $("<dd></dd>")
			// $(oDd).appendTo($(oDl)).css({width:'206px',height:'36px',marginTop:'5px'})
			// var oSpan = $("<span></span>")
			// $(oSpan).html(arr[i].special_price)
			// $(oSpan).appendTo($(oDd)).css({height:'17px',fontSize:'9px',marginRight:'15px',linHeight:'17px',display:'block',color:'#c93a2c',float:'left'})
			// var oDel = $("<del></del>")
			// $(oDel).html(arr[i].market_price)
			// $(oDel).appendTo($(oDd)).css({height:'17px',fontSize:'9px',marginRight:'15px',linHeight:'17px',display: 'block',color:'#828282',float:'left'})
		}
	})

	//
})