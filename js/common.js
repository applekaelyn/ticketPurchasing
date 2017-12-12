var BUD={};
//此函数用于弹出提示。str参数为要提示的文本，可修改
$(function(){
	$("body").append('<div class="alert-txt hide">弹出提示信息！</div>');
	var _baseURL = baseURL ? baseURL :'images/';
	$('body').append('<div class="dialog fixed hide"><div class="dialog-inner"><img src="' + _baseURL + '/dialog_bg.png" alt="" /><p id="dialog-txt"></p></div></div>');
});

BUD.alert = function(str){
	window.msgTimer && clearTimeout(msgTimer);
	var txt = $(".alert-txt");
	txt.hide();
	txt.text(str);
	txt.css({
		display:"block",
		opacity:1
	});
	window.msgTimer = setTimeout(function(){
		txt.fadeOut();
	},1300);
}

//dialog
//文本，关闭时间，回调
BUD.dialog = function(str,cb,time){
	var _str = str ? str : '提交成功！',
		_br = 0;
	_str = _str.replace(/\/n/g,function(){
		_br++;
		return "<br />";
	});
	$("#dialog-txt").css({
		top:7.5 - _br*0.8 + 'rem'
	}).html(_str);
	$(".dialog").show();
	setTimeout(function(){
		$(".dialog").fadeOut();
		typeof cb == 'function' && cb();
	},time ? time : 1000);
}

//去首尾空格
BUD.isEmpty = function(str){
	return str.replace(/(^\s*)|(\s*$)/g, "") ? false : true;
}

//验证邮箱格式
BUD.isEmail = function(str){
	return /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/i.test(str);
}

//验证手机号
BUD.isPhone = function (str){
	if(typeof str === 'number'){
		str = str.toString();
	}
	return /^0?1[3|4|5|7|8][0-9]\d{8}$/.test(str);
}
//验证密码是否符合规范
BUD.isPassword = function(str, begin, end) {
	if(arguments.length === 2 && typeof arguments[1] === 'number'){
		var reg = new RegExp("^(?![0-9]+$)(?![a-zA-Z]+$).{" + begin + ",}$");
	}else if(arguments.length === 3 && typeof arguments[1] === 'number' && typeof arguments[2] === 'number' && arguments[1] < arguments[2]){
		var reg = new RegExp("^(?![0-9]+$)(?![a-zA-Z]+$).{" + begin + "," + end + "}$");
	}else{
		var reg = /^(?![0-9]+$)(?![a-zA-Z]+$).{6,18}$/;
	}
	return reg.test(str);
}
//show page load
BUD.pageLoad = {
	show: function(str) {  //可以传入参数，自定义提示文字
			var txt = str ? str : '',
				pageload=$('#pageload');
			if(pageload.length){
				pageload.remove();
			}
            $('body').append('<div id="pageload" class="fixed"><div class="innerLoading-cover"></div><div class="box-ct"><div class="box-bd"><div><div class="cm-loading-spinner"><span class="loading-top"></span><span class="loading-right"></span><span class="loading-bottom"></span><span class="loading-left"></span></div> <div class="msg">'+txt+'</div></div></div></div></div>');
		},
	hide: function() {
		$('#pageload').remove();
	}
}
//聚焦
function onInputFocus(){
	var li = $(this).closest('li');
	li.removeClass('warn').addClass('active');
	li.find('.line').animate({"width":"100%"},500);
	li.find('.icon').removeClass('warn').addClass('active');
	if($(this).closest('.input-wrap').parent().hasClass('reset-cont')){
		$(".reset-format").hide();
	}
}

//失焦
function onInputBlur(){
	$(this).closest('li').removeClass('active').find('.icon').removeClass('active');
	$(this).closest('li').find('.line').animate({"width":"0"},0);
}

//input聚焦效果
$(".input-wrap input").on({
	'focus':onInputFocus,
	'blur':onInputBlur
});

//输入框聚焦
$('#form-table input').on('focus',function(){
	$(this).closest('dl').addClass('active').find('.line').animate({"width":"100%"},500);		
})
//输入框失去焦点
$('#form-table input').on('blur',function(){
	$(this).closest('dl').removeClass('active').find('.line').animate({"width":"0"},0);		
})