$(function(){
	//点击搜索的时候

	$(".txt").focus(function(){
		$(this).animate({width:300,marginLeft:-100,height:34,marginTop:-1,},function(){
			$(this).css("background","#fff").css('borderRadius','10px').css("border","1px solid #f8f8f8").css("float","left");
			$(".seek").css("display","block");
		})
	});
	$(".txt").blur(function(){
		$(".seek").css("display","none");
		$(this).animate({background:'#f8f8f8',width:200,marginLeft:0,height:34,marginTop:-1,},function(){
			$(this).css("background","#f8f8f8").css('borderRadius','10px').css("border","1px solid #f8f8f8").css("float","left");
		})
	})
	ajax("get","json/header.json","",function(data){
		var arr = JSON.parse(data)._hunt;
		for(var i = 0; i < arr.length; i++){
			var header_a = $("<p><a href = '#'></a></p>");
			$(header_a).children().html(arr[i].title).css({height:'28px',width:'260px',fontSize:'16px',background:'#fff',color:'#5c5f61',lineHeight:'28px',textIndent:'10px',display:'block'});
			$(header_a).appendTo(".seek");
			$(header_a).children().html(arr[i].title).hover(function(){
				$(this).css({height:'28px',width:'260px',fontSize:'16px',background:'#f8f8f8',color:'#5c5f61',lineHeight:'28px',textIndent:'10px',display:'block'});
			},function(){
				$(this).css({height:'28px',width:'260px',fontSize:'16px',background:'#fff',color:'#5c5f61',lineHeight:'28px',textIndent:'10px',display:'block'});
			})
		}
	})


	//鼠标划过app标签
	$(".a1").hover(function(){
		$(this).css("color","#b93a2c");
		$(this).find("div").css("display","block");
	},function(){
		$(this).find("div").css("display","none");
	});

	$(".oImg").hover(function(){
		$(".d1").css("display","block");
	},function(){
		$(".d1").css("display","none");
	})



	ajax("get","json/nav.json","",function(data){
		var arr = JSON.parse(data)._tasty;
		
		for (var i = 0; i < arr.length; i++) {
			var a = $("<a></a>");
			var span = $("<span>");
			span.appendTo(a);
			span.html(arr[i].title);
			a.appendTo($(".li_31"));
		}
		var arr2 = JSON.parse(data)._textiles;
		
		for (var i = 0; i < arr2.length; i++) {
			var a = $("<a></a>");
			var span = $("<span>");
			span.appendTo(a);
			span.html(arr2[i].title);
			a.appendTo($(".li_41"));
		}

		var arr3 = JSON.parse(data)._exist;
		
		for (var i = 0; i < arr3.length; i++) {
			var a = $("<a></a>");
			var span = $("<span>");
			span.appendTo(a);
			span.html(arr3[i].title);
			a.appendTo($(".li_51"));
		}

	var arr4 = JSON.parse(data)._fitness;
		
		for (var i = 0; i < arr4.length; i++) {
			var a = $("<a></a>");
			var span = $("<span>");
			span.appendTo(a);
			span.html(arr4[i].title);
			a.appendTo($(".li_61"));
		}

	var arr5 = JSON.parse(data)._stationery;
		
		for (var i = 0; i < arr5.length; i++) {
			var a = $("<a></a>");
			var span = $("<span>");
			span.appendTo(a);
			span.html(arr5[i].title);
			a.appendTo($(".li_71"));
		}

		var aLis = $(".nav_ul").find("li");
		for (var i = 2; i < aLis.length - 1; i++) {
			aLis.hover(function(){
				$(this).find("div").css("display","block");
				$(this).find('div').hover(function(){
					$(this).css({display:"block",position:'absolute'})

				},function(){})
			},function(){
				$(this).find("div").css("display","none");
			})
		}
	});
	

	var oUl = $(".banner01");
	var oSpan = $(".radio01 span");
	// var oneWidth = $(".banner01 li").eq(0).width();
	var prev = $('#prev');
    var next = $('#next');
	var tag = null;
	var iPage = 0;
	oSpan.on("click",function(){
		$(this).addClass("on").siblings().removeClass("on");
		var index = $(this).index();
		iPage = index;
		oUl.animate({
			"left":-1903 * iPage,
		});
	});
	$(".banner01").hover(function(){
		clearInterval(tag);
	},function(){
		autoPlay();
	})
	$("#prev").click(function(){
		iPage--;
		if(iPage < 0){
			iPage = 3;
		}
		$(".banner01").stop().animate({left:-1903 * iPage},400);
		oSpan.eq(iPage).trigger("click");
		clearInterval(tag);
	});
	$("#next").click(function(){
			iPage++
			if(iPage > oSpan.length - 1){
				iPage = 0
			}
		$(".banner01").stop().animate({left:-1903 * iPage},400);
		oSpan.eq(iPage).trigger("click");
		clearInterval(tag);
	})
	function autoPlay(){
		tag = setInterval(function(){
			iPage++;
			if(iPage > oSpan.length - 1){
				iPage = 0;
			}
			$(".banner01").animate({left:-1903 * iPage},400)
			oSpan.eq(iPage).trigger("click");
		},3000);
	}
	autoPlay();



	ajax("get",'json/main.json',"",function(data){
		var aLis = $(".matter").find("li").css({width:"222px",float:'left',marginRight:'10px',});
		var arr = JSON.parse(data)._data;
		for(var i = 0; i < arr.length; i++){
			if(i % 5 == 4){
				$(aLis[i]).css({marginRight:'0'});
			}
			var index = i % 5;
			var main_a = $('<a href = "#"></a>');
			var main_img = $("<img/>");
			$(main_img).appendTo($(main_a));
			$(main_img).attr("src",arr[i].images).css({width:'222px',height:'220px'}).appendTo($(aLis).eq(index));
			$(main_img).wrap("<div>").parent().css({position:'relative',height:"323px",width:'222px',marginBottom:'20px'})

			var oDl = $("<dl></dl>");
			$(oDl).insertAfter($(main_img)).css({width:'206px',height:'93px',paddingLeft:'16px',paddingTop:'8px'});
			var oDt = $("<dt></dt>");
			$(oDt).appendTo($(oDl)).css({width:'206px',height:'48px'});
			var main_h3 = $("<h3><a href = '#'></a></h3>");
			$(main_h3).find("a").html(arr[i].brand).css({color:'#828282',});
			$(main_h3).appendTo($(oDt)).css({fontSize:'12px',marginTop:'3px',width:'184px',height:'17px',});
			var main_h4 = $("<h4><a href = '#'></a></h4>");
			$(main_h4).find("a").html(arr[i].blank).css({color:'#4a4a4a',});
			$(main_h4).appendTo($(oDt)).css({width:'184px',height:'32px',fontSize:'11px',lineHeight:'16px',marginTop:'4px'});

			var oDd = $("<dd></dd>");
			$(oDd).appendTo($(oDl)).css({width:'206px',height:'36px',marginTop:'5px'})
			var oSpan = $("<span></span>");
			$(oSpan).html(arr[i].special_price);
			$(oSpan).appendTo($(oDd)).css({height:'17px',fontSize:'9px',marginRight:'15px',linHeight:'17px',display:'block',color:'#c93a2c',float:'left'});
			var oDel = $("<del></del>");
			$(oDel).html(arr[i].market_price);
			$(oDel).appendTo($(oDd)).css({height:'17px',fontSize:'9px',marginRight:'15px',linHeight:'17px',display: 'block',color:'#828282',float:'left'});
			var oDiv = $("<div></div>").appendTo($(main_img).parent()).css({position:'absolute',height:"323px",width:'222px',background:"#000",zIndex:'4',top:'0',opacity:'0.1',display:'none'});
			$(main_img).parent().hover(function(){
				$(this).find("div").css({display:'block'})
			},function(){
				$(this).find("div").css({display:'none'})
			})
			// $(oDiv).css({})
			// $(aLis).hover(function(){

			// })

		}
		
	})
});
















