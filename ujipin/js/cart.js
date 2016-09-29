$(function(){
	ajax("get","json/main.json","",function(data){
		var arr = JSON.parse(data)._data;
		for(var i = 0; i < arr.length; i++){
			
		}
	})
})