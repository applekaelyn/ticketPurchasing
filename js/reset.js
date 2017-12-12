$(function(){
	//提交新密码
	$(".btn-reset-submit").on("click",function(){
		var psd1 = $("#password1").val(),
			psd2 = $("#password2").val();
		//留空
		if(BUD.isEmpty(psd1) || BUD.isEmpty(psd2)){
			BUD.alert('请输入新密码！');
			return false;
		}
		//格式
		if(!BUD.isPassword(psd1,6,18)){
			$(".reset-format").show();
			return false;
		}
		//不一致
		if(psd1 !== psd2){
			$(".reset-cont .input-wrap >li").eq(1).addClass('warn');
			return false;
		}
		BUD.alert('修改成功！准备跳转到登录界面');
		setTimeout(function(){
			window.location.href = 'achievement.html';
		},2000);
	});
})
