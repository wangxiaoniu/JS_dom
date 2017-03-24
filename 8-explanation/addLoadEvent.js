function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload != "function"){
		window.onload=func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}

/*监听事件方法来加载多个函数
function addLoadListener(fn){
  if(window.addEventListener){
    window.addEventListener('load',fn,false)
  }else{
    var oldfn = window.onload
    if(typeof window.onload != 'function'){
      window.onload = fn
    }else{
      window.onload = function(){
          oldfn()
          fn()
      }
    }
  }
}*/