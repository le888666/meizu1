var loginBtn = document.querySelector("#nextStep");
var txtName = document.querySelector("#username");
var txtPwd = document.querySelector("#userpwd");
loginBtn.onclick = function(){
	var str = document.cookie ;
	var arr = str.split("; ");
	
	for( var i = 0 ; i < arr.length ; i++ ){
		var item = arr[i].split("=");
		if( item[0] == "username" ){
			username = item[1];
		}
		if( item[0] == "userpwd" ){
			userpwd = item[1];
		}
	}
	var uname = txtName.value;
	var upwd = txtPwd.value;
	
	if( username == uname && userpwd == upwd ){
		alert("登录成功");
		location.href="../index/index.html";
		
	}else{
		alert("用户名或密码错误");
	}
}