/*viewTable的数据获取*******************************/
function viewTable(){
	
	var viewData = [1200,1200,1200,1200,1200,1200,1200,1200,'2015-7','14:02'];
		$("#viewTable").html('<td>'+viewData[0]+'</td>'+'<td>'+viewData[1]+'</td>'+'<td>'+viewData[2]+'</td>'+
		'<td>'+viewData[3]+'</td>'+'<td>'+viewData[4]+'</td>'+'<td>'+viewData[5]+'</td>'+'<td>'+viewData[6]+'</td>'+'<td>'+viewData[7]+'</td>'+
		'<td>'+viewData[8]+'</td>'+'<td>'+viewData[9]+'</td>');
		
	if(viewData[1]>0)
	{
		$("#a").addClass("x");
	}
	else if(viewData[1]<0)
	{
		$("#a").css("color","#0f0");
	}
	if(viewData[2]>0)
	{
		$("#b").css("color","#f00");
	}
	else if(viewData[2]<0)
	{
		$("#b").css("color","#f00");
	}
	if(viewData[3]>0)
	{
		$("#c").css("color","#f00");
	}
	else if(viewData[3]<0)
	{
		$("#c").css("color","#f00");
	}
	if(viewData[4]>0)
	{
		$("#d").css("color","#f00");
	}
	else if(viewData[4]<0)
	{
		$("#d").css("color","#f00");
	}
}

/***********contentTable的数据获取***********************/
function contentTable(){
	var data=[['A',1200,1200,1200,'10%',1200,1200,1200,'10%',1200,1200,1200,'A'],['A',1200,1200,1200,'10%',1200,1200,1200,'10%',1200,1200,1200,'A'],
	['A',1200,1200,1200,'10%',1200,1200,1200,'10%',1200,1200,1200,'A'],['A',1200,1200,1200,'10%',1200,1200,1200,'10%',1200,1200,1200,'A'],
	['A',1200,1200,1200,'10%',1200,1200,1200,'10%',1200,1200,1200,'A'],['A',1200,1200,1200,'10%',1200,1200,1200,'10%',1200,1200,1200,'A'],
	['A',1200,1200,1200,'10%',1200,1200,1200,'10%',1200,1200,1200,'A'],['A',1200,1200,1200,'10%',1200,1200,1200,'10%',1200,1200,1200,'A'],
	['A',1200,1200,1200,'10%',1200,1200,1200,'10%',1200,1200,1200,'A'],['A',1200,1200,1200,'10%',1200,1200,1200,'10%',1200,1200,1200,'A'],
	['A',1200,1200,1200,'10%',1200,1200,1200,'10%',1200,1200,1200,'A']];

	for(var i=0, length_i=data.length; i<length_i; i++){
			var data_temp = data[i];
			
			var tr = $('<tr>').appendTo($('#contentTable'));
		
			for(var j=0, length_j=data_temp.length; j<length_j; j++){
				var td = $('<td>').text(data_temp[j]).appendTo(tr);
			}
		}	
}

/*******策略信息部分的数据获取****************************/
function xinxi(){
	var data=[2,1200.00,1200.00,'10.0%'];
	$('#buy').text(data[0]);
	$('#money').text(data[1]);
	$('#make').text(data[2]);
	$('#rate').text(data[3]);
	
}

$(document).ready(function(){
		viewTable();
		contentTable();
		xinxi();
			window.onresize = function(){
		var w = window.innerWidth();
		if(w<900){
			return false;
		}
}
	})
	