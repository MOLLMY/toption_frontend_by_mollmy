
function errorTipHolderFadeIn(tip) {
	$("#tipHolder").html(tip);
	$("#tipHolder").fadeIn(500, errorTipHolderAutoFadeOut);
}

function successTipHolderFadeIn() {
	$("#tipHolder").css("background", "#9BCD9B");
	$("#tipHolder").html("登录成功，将自动跳转至主界面");
	$("#tipHolder").fadeIn(500, successTipHolderAutoFadeOut);
}

function errorTipHolderAutoFadeOut() {
	setTimeout(function() {
		$("#tipHolder").fadeOut(500);
	}, 2000);
}

function successTipHolderAutoFadeOut() {
	setTimeout(function() {
		$("#tipHolder").fadeOut(500);
		setTimeout(function() {
			window.location.href = "./main.html";
		}, 500);
	}, 1500);
}

$(document).ready(function() {
	
	
	setInterval(function() {

	
	$("#username").keydown(function() {
		if (event.keyCode == 13) $("#password").focus();
	});
	
	
	$("#password").keydown(function() {
		
		if (event.keyCode == 13) $("#login").click();
	});
	
	$("#login").click(function() {
		/*$("#login").html("登录中...");
		
		loginAjax = $.ajax({type:"post", url:"./userManage/login.php", data:"username=" + $("#username").val() + "&password=" + hex_md5($("#password").val()), async:false});
		loginResponse = loginAjax.responseText;
		
		if (loginResponse == 0) {
			successTipHolderFadeIn();
			$("#login").html("登录成功");
		}
		else if (loginResponse == 1) {
			errorTipHolderFadeIn("该用户名未注册");
			$("#login").html("重新登录");
		}
		else if (loginResponse == 2) {
			errorTipHolderFadeIn("密码错误");
			$("#login").html("重新登录");
		}
		else {
			errorTipHolderFadeIn("发生未知登录错误");
			$("#login").html("重新登录");
		}
	});*/
	
	$("#forgetPswd").click(function() {
		/*弹出区域要求确认用户名，发送验证邮件，取消，*/
	});
	
});