$(function(){
	//添加新业绩
	$('#add').on('click',function(){
		$('.achievement-add').show().animate({
			"height":"100%"
		},300);
		
		$('.achievement-add .form-table').mCustomScrollbar();
		$('#mCSB_1_scrollbar_vertical').animate({
			"opacity":1
		},500)
	})
	
	//关闭新业绩
	$('.opacity-box').on('click',function(){
		
		$('.achievement-add').animate({
			"height":"0"
		},300);
	})
	
	//点击提交业绩
	$('.form-table .submit').on('click',beforeSubmit)
	
		//选择季度
	var _TIME = (new Date().getMonth()/3 | 0 ) + 1;     //当前季度
	
	$('.time span').on('click',function(){
		var _ID = $(this).data('time');
		if(_ID <= _TIME){
			$(this).siblings('span').removeClass('active');
			$(this).toggleClass('active');
		}else{
			BUD.alert("超过当前季度不可选")
		}
	})
	//上传图片
	$("#fileScreen").on("change", function(){
		var _this = $(this);
	    var files = !!this.files ? this.files : [];
	    if (!files.length || !window.FileReader) {
	    	//add codes here...
	    	return false;
	    };
	    if (/^image/.test( files[0].type)){
	        var reader = new FileReader();
	        reader.readAsDataURL(files[0]);
	        reader.onloadend = function(){
	      		 _this.siblings("img").attr("src",this.result).show();
	      		 _this.closest('.file-box').css({'background':'#f5f5f5','border':'2px dashed #ccc'})
	        }
	    }
	 
	});
})

//提交前验证
function beforeSubmit(){
	var ticket = $('#form-table').find('input[name="number"]').val();
	var money = $('#form-table').find('input[name="money"]').val();
	var timeId = $('.time').find('span.active').data('time') | 0;
	if(BUD.isEmpty(ticket) || BUD.isEmpty(money)){
		BUD.alert("请填写完整！");
		return false;
	}
	if($("#fileScreen").get(0).files.length === 0){
		BUD.alert("请上传一张图片！");
		return false;
	}
	if(timeId === 0){
		BUD.alert("请选择季度！");
		return false;
	}
	
	BUD.pageLoad.show('提交中...');
	//上传图片
	REQ.upload($("#preview-img").attr("src"),function(res){
		if(res.status == 1){
			//提交数据
			REQ.agentSubmit({
				'quarter':timeId,
				'account':money,
				'ticket':ticket,
				'imgurl':res.info.path
			},function(res){
				BUD.pageLoad.hide();
				if(res.status == 1){
					BUD.dialog('提交成功！自动跳转中...',function(){
						window.location.href = '/app/index/index/';
					});
					return true;
				}else{
					BUD.alert('提交失败！');
					return false;
				}
			});
		}else{
			BUD.pageLoad.hide();
			BUD.alert('图片上传失败！');
			return false;
		}
	});
	
	return true;
}
