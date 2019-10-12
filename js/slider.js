$(function(){
    //轮播
	var flag = "left";
	function my_slider(container,prev,next,slider,speed,auto){
		var container = $(container), prev = $(prev), next = $(next), slider = $(slider), speed = speed;
		var w = slider.find('li').outerWidth(true);
		prev.click(function(){
			slider.animate({ marginLeft : -w},function(){
				slider.find('li').eq(0).appendTo(slider);
				slider.css({marginLeft : 0});
			});
			flag = "left";
		});
		next.click(function(){
			slider.find('li:last').prependTo(slider);
			slider.css({ marginLeft : -w});
			slider.animate({ marginLeft : 0});
			flag = "right";
		})
		if(auto == true) {
			timer = setInterval(function(){
				flag = "left" ? prev.click() : next.click();
			},speed);
			container.hover(
				function(){clearInterval(timer)},
				function(){
					timer = setInterval(function(){
						flag = "left" ? prev.click() : next.click();
					},speed);
				}
			)
		}
	}
	my_slider('.container','.next','.prev','.slider', 3000, true);
})