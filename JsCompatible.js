//封装一个获取行外样式的函数:(兼容所有浏览器,包括低版本IE6,7)
function getStyle(obj,attr){
    if(obj.currentStyle){
        //IE
        return obj.currentStyle[attr];
    }else{
        //Chrom,FF
        return getComputedStyle(obj,false)[attr];
    }
}

//多事件绑定封装成一个兼容函数:
function myAddEvent(obj,ev,fn){
  if(obj.attachEvent){
    //IE8以下
    obj.attachEvent('on'+ev,fn);
  }else{
    //FF,Chrome,IE9-10
    obj.attachEventLister(ev,fn,false);
  }
}

//阻止事件冒泡的兼容性写法
stopPropagation: function(event){
  if (event.stopPropagation){
    event.stopPropagation();
  } else {
    event.cancelBubble = true;
  }
}

 //阻止浏览器默认事件的兼容性写法
preventDefault: function(event){
  if (event.preventDefault){
    event.preventDefault();
  } else {
    event.returnValue = false;
  }
}