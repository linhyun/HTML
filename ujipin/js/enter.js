$(function(){
	function testUser(){
		var input = $("#phone_num");
		var phone = $(".phone_num");
		var span = phone.find("span");
		var oValue = input.value.replace(/ /g, "");
		$("#phone_num").click(function(){
		input.value = oValue;
			if(oValue.length < 1){
				$(".phone_num").find("span").css("display","block");
			}
		})
	}
	function code(){
		var input = document.getElementById("password");
		var span = document.getElementById("password_span");
		var cValue = input.value.replace(/ /g, "");
		input.value = cValue;
		if(cValue.length >= 1){
			// span.innerHTML = "";
		}else{
			span.innerHTML = "密码不能为空";
		}
	}
	function obtain(){
			Verification_span.innerHTML = testCode(4);
		}

		function testCode(n){
			var arr = [];
			for(var i = 0; i < n; i++){
				var num = parseInt(Math.random() * 100);
				if(num >= 0 && num <= 9){
					arr.push(num);
				}else if(num >= 10 && num <= 35){
					arr.push(String.fromCharCode(num + 87));
				}else if(num >= 65 && num <= 90){
					arr.push(String.fromCharCode(num));
				}else{
					i--;
				}
			}
			return arr.join("");
		}
})