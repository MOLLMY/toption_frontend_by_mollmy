//转换时间
function timestampToDatetime(timestamp) {
	return new Date(parseInt(timestamp) * 1000).toLocaleString().split(" ")[1];
}
//50ETF表格
function ETF_table_data() {
	$.getScript("http://weaine.com/TOption/50ETFRecorder/getCurrentMetas.php", function() {
		if (json == null) {
			$('#50ETF-table-content').html('<td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td>-<td>-</td>');
			return;
		}
		var changeAmount = json.price-json.s_price;
		var quoteChange = (json.price-json.s_price)/json.price*100;
		
		
		$('#50ETF-table-content').html('<td>'+json.price+'</td>'+
				'<td id="changeAmount">'+changeAmount.toFixed(2)+'</td>'+
				'<td id="quoteChange">'+ quoteChange.toFixed(2)+'%' +'</td>'+
				'<td>'+json.high+'</td>'+
				'<td>'+json.low+'</td>'+
				'<td>'+(json.volume/1000000).toFixed(2)+'万'+'</td>'+
				'<td>'+timestampToDatetime(json.timestamp)+'</td>');
			
		if(changeAmount > 0)//涨则为红色
		{
			$("#changeAmount").css("color", "#f00");			
			$('#quoteChange').css("color","#f00");			
		}
		else if(changeAmount < 0)//跌则为绿色
		{
			$("#changeAmount").css("color", "#0f0");			
			$('#quoteChange').css("color","#0f0");
		}
		
	});	
}
//相关新闻
function relatedNews(){
	$.getScript("http://weaine.com/TOption/getNews.php", function(){
		$.each(json, function(index, meta) {
			$("<tr><td rowspan=2><img src='" + meta.src 
				+ "' style='height: 2rem;' /></td><td><a href='http://weaine.com/TOption/getNewsContent.php?URL=" 
				 + meta.href + "&title=" + meta.title + "&time=" + meta.time + "' target='_blank'>" + meta.title  
				+ "</a></td></tr><tr id='newsTime'><td>" + meta.time + "</td></tr>").appendTo("#news");
		});
	});	
}
//填充期权表格
function optionsTableData() {
	$.getScript("http://gaojingming.com/spider_futures/option_data.php", function() {
		$("#optionDataSheets-table").html("");
		
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
					"</td></tr>").appendTo("#optionDataSheets-table");
			});
		});
		
		$(".drop").css("color", "#0f0");
		$(".rise").css("color", "#f00");
	});
}
//刷新数据
function refreshData() {
	ETF_table_data();
	optionsTableData();
}
//改变月份时
function changeMonthTable() {
	$.getScript("http://gaojingming.com/spider_futures/option_data.php", function() {
		if (json[month] != undefined) {
			clearInterval(refreshInterval);
			
			$("#optionDataSheets-table").html("");
			
			$.each(json[month], function(index, meta) {
				if (meta[1] instanceof Array) putData = meta[1][2].split(",");
				else putData = ["-", "-", "-", "-", "-", "-", "-"];
				
				if (meta[0] instanceof Array) callData = meta[0][2].split(",");
				else callData = ["-", "-", "-", "-", "-", "-", "-"];
				
				if (meta[1][0] != undefined) putId = meta[1][0];
				else putId = "-";
				
				if (meta[0][0] != undefined) callId = meta[0][0];
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
					"</td></tr>").appendTo("#optionDataSheets-table");
			});
		}
		else {
			clearInterval(monthlyRefreshInterval);
			alert("无在该月份到期的期权");
			refreshData();
			refreshInterval = setInterval(refreshData, 5000);
		}
	});
}

function changeMonth() {
	clearInterval(monthlyRefreshInterval);
	
	month = $("#dropDown-dueDate-menu-date").val().substr(5);
		
	if (month.substr(0, 1) == "0") month = month.substr(1, 1);
	
	changeMonthTable();
	
	monthlyRefreshInterval = setInterval(changeMonthTable, 5000);
}

//加载完成后
$(document).ready(function(){
	refreshData();	
	
	refreshInterval = setInterval(refreshData, 5000);
	monthlyRefreshInterval = setInterval(null, 5000);

	relatedNews();
	
	$(".scrollTable").css("height", 0.38 * $(window).height());
	$('#position-scroll').css("height", 0.22 * $(window).height());
	$('#newsWrap').css("height", 0.215 * $(window).height());	
	
	$("#dropDown-dueDate-menu-date").change(changeMonth);	
	
	/***************个人账户部分****************************/
	 $('#account-ico').mouseover(function(){
		 $('#account-menu').show();
	 });
	 $('#account-menu').mouseleave(function(){
		$('#account-menu').hide(); 
	 });
	 
	 

});