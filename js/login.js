$(function(){
	//自动登陆选项
	$(".auto-login >div").on("click",function(){
		var autoBtn = $(this).find(".icon-login");
		autoBtn.toggleClass('active').attr("data-auto",autoBtn.attr("data-auto") == '0' ? '1' :'0');
	});

	//登录
	$(".btn-login").on("click",function(){
		var account = $("#account").val(),
			psd = $("#password").val(),
			auto = $(".icon-login").attr("data-auto");
		if(BUD.isEmpty(account) || BUD.isEmpty(psd)){
			BUD.alert('请输入完整账号或密码！');
			return false;
		}else if(!BUD.isPhone(account)){
			BUD.alert('请输入正确的手机号码！');
			return false;
		}
		
		//如果正确
		window.location.href = 'achievement.html';
	});
	
	//忘记密码
	$(".login-forget > button").on("click",function(){
		window.location.href  = "forget.html";
	});
	
	//注册
	$(".btn-register").on("click",function(){
		window.location.href = 'register.html';
	});
})
