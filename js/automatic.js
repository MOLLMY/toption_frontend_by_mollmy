/*function tbodywidth(){  
    $("table").children("thead").find("td,th").each(function(){  
        var idx = $(this).index();  
        var td = $(this).closest("table").children("tbody")  
                        .children("tr:first").children("td,th").eq(idx);  
        $(this).width() > td.width() ? td.width($(this).width()) : $(this).width(td.width());  
    });  
}*/



/*function ShowMenu(obj,menuid){
	var block =	document.getElementById(menuid);
	var n = menuid.substr(menuid.length-1);
	if(menuid.length==4)
	{
		var ul = document.getElementById(menuid.substring(0,3)).getElementsByTagName("ul");
		var h2 = document.getElementById(menuid.substring(0,3)).getElementsByTagName("h2");
		for(var i=0; i<h2.length;i++)
		{
			h2[i].innerHTML = h2[i].innerHTML.replace("+","-");
			h2[i].style.color = "";
		}
		obj.style.color = "#FF0000";
		for(var i=0; i<ul.length; i++)
		{
			if(i!=n)
			{
				ul[i].className = "no";}
			}
	}
	else
	{
		var span = document.getElementById("menu").getElementsByTagName("span");
		var h1 = document.getElementById("menu").getElementsByTagName("h1");
		for(var i=0; i<h1.length;i++)
		{
			h1[i].innerHTML = h1[i].innerHTML.replace("+","-");
			h1[i].style.color = "";
		}
		obj.style.color = "#0000FF";
		for(var i=0; i<span.length; i++)
		{
			if(i!=n)
			{
				span[i].className = "no";
			}
		}
	}
	if(block.className == "no")
	{
		block.className = "";
		obj.innerHTML = obj.innerHTML.replace("-","+");
	}
	else
	{
		block.className = "no";
		obj.style.color = "";
	}
}*/


//填充期权表格
function options_sheet() {
	$.getScript("http://gaojingming.com/spider_futures/option_data.php", function() {
		$("#tradingOptionSheets").html("");
		
		$.each(json, function(index, meta) {
			$.each(meta, function(subIndex, subMeta) {
				if (subMeta[1] instanceof Array) putData = subMeta[1][2].split(",");
				else putData = ["-", "-", "-", "-", "-", "-", "-"];
				
				if (subMeta[0] instanceof Array) callData = subMeta[0][2].split(",");
				else callData = ["-", "-", "-", "-", "-", "-", "-"];
				
				if (subMeta[1][0] != undefined) putId = subMeta[1][0];
				else putId = "-";
				
				if (subMeta[0][0] != undefined) callId = subMeta[0][0];
				else callId = "-";
				
				if (putData[6] != "-") exercisePrice = putData[6];
				else exercisePrice = callData[6];
				
				if (putData[2].substr(0, 1) == "-") {
					if (putData[2].length == 1) putClass = "'empty'";
					else putClass = "'drop'";
				}
				else putClass = "'rise'";
				
				if (callData[2].substr(0, 1) == "-") {
					if (callData[2].length == 1) callClass = "'empty'";
					else callClass = "'drop'";
				}
				else callClass = "'rise'";
				
				$("<tr><td>" + putId +
					"</td><td>" + putData[3] +
					"</td><td>" + putData[0] +
					"</td><td>" + putData[0] +
					"</td><td class=" + putClass + ">" + putData[2] +
					"</td><td class=" + putClass + ">" + putData[0] +
					"</td><td>" + exercisePrice +
					"</td><td class=" + callClass + ">" + callData[0] +
					"</td><td class=" + callClass + ">" + callData[2] +
					"</td><td>" + callData[0] +
					"</td><td>" + callData[0] +
					"</td><td>" + callData[3] +
					"</td><td>" + callId +
					"</td></tr>").appendTo("#tradingOptionSheets");
			});
		});
		
		$(".drop").css("color", "#0f0");
		$(".rise").css("color", "#f00");
	});
}
//刷新数据
function refresh_data() {
	
	options_sheet();
}



$(document).ready(function(){
	refresh_data();	
	
	refresh_interval = setInterval(refresh_data, 5000);

	$('.indicators-wrap').css("height", 0.90775 * $(window).height());
	$('.table-wrap').css("height",0.3688 * $(window).height());
	
	$('.conditions-tbody').css("height",0.3191 * $(window).height());
    $('.tradingOptions-tbody').css("height",0.2869 * $(window).height());
	
	/*$('#button-confirm').click(function(){		
	if($('.check').prop("checked")==false)
		alert('请选择条件');
	});*/	

	$('.lhead').click(function(){	
		$(this).next('ul').toggle();
		$(this).toggleClass("open");		
	});
		
	$('.lbody>li').click(function() {
		$('.item').removeClass('active');
   		$(this).children().addClass('active');
		   
		/*indicator=$(this).children().val();
		alert(indicator);
		$('.indicator-item').text(indicator);	*/  
	});
	
});

