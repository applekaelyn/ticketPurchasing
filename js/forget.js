$(function(){
	//发送验证码
	$("#identify-code").on("click",function(){
		var phone = $("#phone").val();
		if(BUD.isEmpty(phone)){
		BUD.alert('请填写手机号！');
		}else BUD.alert('发送成功，验证码是123');
	});
		
	//下一步
	$(".btn-forget-next").on('click',function(){
		var phone = $("#phone").val(),
			identify = $("#identify").val();
		if(BUD.isEmpty(phone) || BUD.isEmpty(identify)){
			BUD.alert('请填写完整！');
		}else if(!BUD.isPhone(phone)){
				BUD.alert('请填写正确的手机号码！');
				return false;
		}else if(identify!='123'){
			BUD.alert('验证码错误！');
		}else {
			window.location.href = 'reset.html';			
		}
	});
	
	
})