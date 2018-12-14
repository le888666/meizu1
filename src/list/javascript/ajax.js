$(document).ready(function(){
	Switch.init();
});

//获取json所有数据
var Switch = {
	init(){
		this.getData()
	},
	getData(){
		$.ajax({
			type:"get",
			url:"list.json",
			success:(data) =>{
				 this.read(data)
				 // console.log(data)
			}
		})
	},
	read(res){
		let str =""
		for(let i=0; i<res.list.length; i++){
			let item=res.list[i];
            str += `<li class="gl-item">
						<a href="javascript:;">
							<div class="gl-item-wrap">
								<div class="mod-pic" id="${item["id"]}">
									<img width="220" height="220" class="lazy j-modProduct" src="../images/${item["src1"]}" style="display: inline;" />
									<img width="220" height="220" class="lazy j-modProduct" src="../images/${item["src5"]}" style="display: none;" />
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
						<button class="btn-car" data-iid="${item["id"]}">加入购物车</button> 
	    			</li>`;
		}
//		console.log(str)
		$("#goodsListWrap").html(str)
// 		//ajax拼接结束
// 		this.chooseCard()
// 		
		//为您推荐
		let atr =""
		for(let i=0; i<res.for.length; i++){
			let item=res.for[i];
			atr += `<li class="rs-item" style="width: 245.6px; margin-right: 5px; float: left; display: block;">
						<a class="rs-item-wrap" href="javascript:;">
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
						<button class="btn-car" data-iid="${item["id"]}">加入购物车</button> 

					</li>`;
		}		
//		console.log(atr)
		$("#recommend-slider-wrap").html(atr)
 	}

}






