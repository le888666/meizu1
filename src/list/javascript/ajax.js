$(document).ready(function(){
	List.init();
});
var List ={
	init(){
		this.getData()
	},
	getData(){
		$.ajax({
			type:"get",
			url:"list.json",
		success:(data)=>{
			this.read(data)
		}	
		})
	},
	read(res){
		let str ="";
		for(let i=0;i<res.list.length;i ++){
			let item = res.list[i];
			str +=`
			<li class="gl-item">
			<a href="../details/details.html">
				<div class="gl-item-wrap">
					<div class="mod-pic" id="${item["id"]}">
						<img width="220" height="220" class="lazy j-modProduct" src="../images/${item["src1"]}" style="display: inline;" />
					</div>
					<div class="item-slide j-pro-wrap">
						<dl style="display: block; width: 150px; left: 25px;">
							<dd class="active">
								<img width="40" height="40" class="lazy" src="../images/${item["src2"]}" style="display: inline"/>
							</dd>
							<dd class="active">
								<img width="40" height="40" class="lazy" src="../images/${item["src3"]}" style="display: inline"/>
							</dd>
							<dd class="active">
								<img width="40" height="40" class="lazy" src="../images/${item["src4"]}" style="display: inline"/>
							</dd>
						</dl>
					</div>
					<h2>${item["h2"]}</h2>
					<h3 class="red">${item["h3"]}</h3>
					<dd class="mod-price">
						<span>${item["span1"]}</span>
						<span class="vm-price">${item["span2"]}</span>
						
						<span class="vm-start">${item["span3"]}</span>
	
					</dd>
				</div>
			</a>
			<button class="btn-car">加入购物车</button>

			</li>	
			`
		}
		$("#goodsListWrap").html(str)



//为您推荐 
 let atr = "";
 for (let i=0;i<res.for.length;i ++){
	 let item = res.for[i];
	 atr +=
	 `
	 <li class="rs-item" style="width: 245.6px; margin-right: 5px; float: left; display: block;">
	 	<a class="rs-item-wrap" href="../details/details.html">
	 		<div class="mod-pic">
	 			<img class="lazy" width="180" height="180" src="../images/${item["src"]}" style="display: inline;" />
	 		</div>
	 		<div class="mod-desc">
	 			<h4 class="vm-title">${item["h4"]}</h4>
	 			<h6 class="vm-subtitle"></h6>
	 			<p class="vm-price">
	 				<span>${item["span1"]}</span>
	 				<span class="vm-price-text">${item["span2"]}</span>
	 				<span class="vm-start">${item["span3"]}</span>

				</p>
	 		</div>
	 	</a>
		<button class="btn-car">加入购物车</button>

	 </li>
	 
	 
	 `
 }
 $("#recommend-slider-wrap").html(atr)
 }
 }
 
 
 
//  $("#goodsListWrap").on("click","button",function(){
// 		var startObj = $(this);//起始按钮
// 		var endObj = $(".sp"); //结束按钮
// 		var $imgObj = $(this).parent().find("img");//获取当前按钮对应的大图对象
// 		//抛物线方法调用
// 		$.fnInit(startObj,endObj).fnMove($imgObj);
// 		
// 		var flag = true;//假设值为true时  向arr中push新的商品对象
// 		var arr = [];//存放多个商品对象
// 		//data()方法用来获取data-*的自定义属性值
// 		//存放一个商品对象的信息
// 		var json = {
// 			"id": $(this).data('pid'),
// 			"h2":$(this).data('pname'),
// 			"src1":$(this).data('src'),
// 			"span2":$(this).data('price'),
// 			"count":1
// 		}
//  
//  var brr = getCookie("");
// 		//第一次购买商品时  直接将这个商品存入到arr就可以
// 		if( brr.length != 0 ){
// 			arr = brr;
// 			//遍历数组arr  判断当前购买的商品在arr中是否存在
// 			//如果存在 就将商品的count++
// 			for( var i = 0 ; i < arr.length ; i++ ){
// 				if( json.id == arr[i].id ){
// 					arr[i].count++;
// 					flag = false;
// 					break;
// 				}
// 			}
// 		}
// 		
// 		if( flag ){
// 			//将当前购买的商品对象存入到数组中
// 			arr.push( json );
// 		}
// 			setCookie( "goodsListWrap",JSON.stringify( arr )  );
// 		console.log(document.cookie);
// 	})
// 	
// 	getCount();
// 	function getCount(){
// 		var brr = getCookie("goodsListWrap");
// 		var count = 0;
// 		if( brr.length != 0 ){
// 			for( var i = 0 ; i < brr.length ; i++ ){
// 				count += brr[i].count;
// 			}
// 			$("#shopNum").html(count);
// 		}
// 	}