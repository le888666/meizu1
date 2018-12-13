$("#meizu-header-link-product-hd1,#meizu-header-link-product-hd3").hover(function(){
	$("#meizu-header-sub-hd1").stop().slideDown();
	$("#meizu-header-container").css("background-color","rgba(0,0,0,0)")	
	
},function(){
	$("#meizu-header-sub-hd1").stop().slideUp();
	$("#meizu-header-container").css("background-color","rgba(0,0,0,0)")
})

$("#meizu-header-user").hover(function(){
	$("#meizu-header-user-dropdown").stop().show();
},function(){
	$("#meizu-header-user-dropdown").stop().hide(200);
})