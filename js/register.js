$(function(){
	//提交
	$(".btn-register-submit").on("click",function(){
		var psd = $("#password1").val(),
			psd2 = $("#password2").val(),
			phone = $("#phone").val(),
			address = $("#address").val(),
			company = $("#company").val(),
			code = $("#identify").val();
		//空
		if(BUD.isEmpty(psd2) || BUD.isEmpty(psd) || BUD.isEmpty(phone) || BUD.isEmpty(address) || BUD.isEmpty(company) || BUD.isEmpty(code)){
			BUD.alert('请填写完整！');
			return false;
		}
		
		//密码
		if(!BUD.isPassword(psd,6,18)){
			BUD.alert('密码格式为6-18位数字+字母组合！');
			$(".input-wrap >li").eq(0).addClass('warn').find(".icon").addClass('icon-lock-warn');
			return false;
		}
		
		//一致
		if(psd != psd2){
			BUD.alert('密码输入不一致！');
			$("#password1,#password2").closest('li').addClass('warn');
			return false;
		}
		
		//手机
		if(!BUD.isPhone(phone)){
			BUD.alert('手机号码格式不正确！');
			return false;
		}
		
		if(code!='123'){
			BUD.alert('验证码错误！');
		}else {
			window.location.href = 'achievement.html';			
		}
	});	
	//发送验证码
	$("#identify-code").on("click",function(){
		var phone = $("#phone").val();
		if(BUD.isEmpty(phone)||!BUD.isPhone(phone)){
		BUD.alert('请填写正确的手机号！');
		}else BUD.alert('发送成功，验证码是123');
	});
})
