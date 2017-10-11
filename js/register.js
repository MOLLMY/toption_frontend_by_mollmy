function validateEmail() {
	return (new RegExp(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/)).test($("#email").val());
}

function validateUsername() {
	return (new RegExp(/^([a-zA-Z0-9]){6,16}$/)).test($("#username").val());
}

function validatePassword() {
	return (new RegExp(/^([a-zA-Z0-9]){6,16}$/)).test($("#password").val());
}

function validateRePassword() {
	return ($("#password").val() == $("#rePassword").val());
}

function showErrortipHolder(content) {
	$("#tipHolder").html(content);
	$("#tipHolder").fadeIn(500, function() {
	$("#tipHolder").fadeOut(4000);
	});
}

$(document).ready(function() {
	
	$("#email").keydown(function(event) {
		if (event.key.which == 13) $("#username").focus();
	});
	
	$("#username").keydown(function(event) {
		if (event.which == 13) $("#password").focus();
	});
	
	$("#password").keydown(function(event) {
		if (event.which == 13) $("#rePassword").focus();
	});
	
	$("#rePassword").keydown(function(event) {
		if (event.which == 13) {
			$("#submit").click();
			if (!validateRePassword()) 
				showErrortipHolder("两次输入的密码不一致");
		}
	});
	
	$('input').focus(function(){
		if(!validateEmail()&&$('#email').val()!="") 
			showErrortipHolder("错误的邮箱格式");
		if (!validateUsername()&& $('#username').val()!="") 
			showErrortipHolder("错误的用户名格式（6-16位字符，由数字和字母组成）");
		if (!validatePassword()&& $('#password').val()!="")
			showErrortipHolder("错误的密码格式（6-16位字符，由数字和字母组成）");		
	});
	
	$("#submit").click(function() {
		if (!(validateEmail() && validateUsername() && validatePassword() && validateRePassword()))
			 showErrortipHolder("注册信息存在错误，请核查");
		else ; // TODO: 提交注册
	});
});