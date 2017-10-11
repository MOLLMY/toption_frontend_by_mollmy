/**********view处的数据获取*******************************/
function general(){
	var data=['WEAINE',1300];
	$('#username').text(data[0]);
	$('#accountbalance').text(data[1]);
}




$(document).ready(function(){
	general();
	
	$('#aboutus-wrap').css("height",$('.col-right').height());
	//左侧menu选中后效果
	$('.list').click(function() {
		$('.list').removeClass('leftlist-active');
   		$(this).addClass('leftlist-active');		  
	});
	
});
	