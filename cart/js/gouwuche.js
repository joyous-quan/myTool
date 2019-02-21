
$.ajax({
    type:"get",
    url:"data/cart.json",
    success:function(res) {
    	//1.加载数据成功 进行字符串拼接
        $(".alljson").html('');
		//热销推荐
        $.each(res,function (index,item) {
		    $(".alljson").append("<dl class='containdl'><dt><a href='detail.html?id="
                +item.id+"'><img src='"+item.img+"'/></a></dt><dd><a href='#'>"
                +item.name1+"</a></dd><p>"+item.name2+"</p><b>"+item.price1+"</b><del>"
                +item.price2+"</del><span>"+item.price3+"</span><strong>"
                +item.num+"<strong><button class='shop' id='"+item.id+"'>立即抢购</button><dl>"
            )

            $('.shop').click(function(){
				//点击让遮罩显示  框显示
				$('#show').css({
					'display':'block'
				})
				$('#mark').css({
					'display':'block'
				})		
			})
            $('.containdl').eq($(this).index()).hover(function(){
	 			$('.containdl .shop').eq($(this).index()).show()
		    },function(){
				$('.containdl .shop').eq($(this).index()).hide()
			})
        })
        //遍历结束，页面渲染完成
        //加入购物车功能，存cookie
        
        $('.shop').click(function(){   	
        	if(!$.cookie("goodsList")){
                $.cookie("goodsList",'[{"id":"'+this.id+'","num":"1"}]');
            }else{
            	//添加数据
            	var cookieArr = JSON.parse($.cookie("goodsList"));
            	console.log(cookieArr)
            	//查看是否有一样的
            	var isSame = false;
            	for(var i=0;i<cookieArr.length;i++){
            		if(cookieArr[i].id == this.id){
            			cookieArr[i].num++;
            			isSame = true;
            			break;
            		}	
            	}
            	if(!isSame){
            		var goods = {"id":this.id,"num":"1"};
            		cookieArr.push(goods);
            	}
            	//更新cookie
            	var cookieStr = JSON.stringify(cookieArr);
            	$.cookie("goodsList",cookieStr);
            }
            //console.log($.cookie("goodsList"))
            getCarNum()	
        })
        getCarNum()
        function getCarNum(){
        	var cookieArr = JSON.parse($.cookie("goodsList"))
        	var res = 0;
        	for(var i = 0;i < cookieArr.length;i++){
        		res +=Number(cookieArr[i].num);
        	}
        	$('.new-cart-number').html(res);
        	$('#toolBar-shopcar').html(res);   
        	
        }
        //购物车商品拼接
        $.ajax("data/cart.json").then(function(res){
        	var cookieArr = JSON.parse($.cookie("goodsList"));
        	console.log(cookieArr.length)
        	var html = '';
        	$.each(cookieArr, function(index,item) {
        		html +='<dl><button class="flo"></button><dt><img src="'+res[item.id].img+'"/></dt><dd>'+res[item.id].name2+'</dd><dd><span style="color:orange">'+res[item.id].price1+'x'+cookieArr[index].num+"</span>件</dd></dl>"
        		 $('.btn_goshopcart').attr("href","shopcar.html?id="+res[item.id].id)
        		 
        	    $('.cen_name').html("名称：" + res[item.id].name2)
        	    $('.cen_price').html("价格：￥"+res[item.id].price1)
        	     count=0;
        	     count +=res[item.id].price1 * cookieArr[index].num; 
                //console.log(count)
        	})
        	var htmll="";
        	htmll+="<dl class='mardl'><dd class='mardd'></dd><dd width:111px height:33px>?<a href='shopcar.html'><img src='images/gouwu.png' class='marleft'/></a></dd></dl>"
        	$('.newHome-shopCar-all').html(html)
        	$('.mardd').html('共计：￥' + count)
        	$('.newHome-shopCar-all').append(html +htmll);             	
        })
        $('.newHome-shopCar-all .flo').click(function(){
        	$(this).parent('dl').hide()             		
        })           
    }        
})
			
//购物车部分开始
$('.close,.conshop').click(function(){
	$('#show').hide()
	$('#mark').hide()
})					