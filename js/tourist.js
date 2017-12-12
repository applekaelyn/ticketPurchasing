$(function(){
		//点击提交业绩
	$('.form-table .submit').on('click',beforeSubmit);
})

//提交之前校验
function beforeSubmit(){
	var username = $('#form-table').find('input[name="wechat"]').val();
	var phone = $('#form-table').find('input[name="phone"]').val();
	var address = $('#form-table').find('input[name="address"]').val();
	var ticket = $('#form-table').find('input[name="ticket"]').val();
	var other = $("#other").val();
	if(BUD.isEmpty(username) || BUD.isEmpty(phone) || BUD.isEmpty(address)){
		BUD.alert("请填写必填项！");
		return false;
	}
	if(!BUD.isPhone(phone)){
		BUD.alert('手机格式不正确！');
		return false;
	}
	BUD.pageLoad.show('提交中...');
}
