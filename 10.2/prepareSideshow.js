function prepareSideshow(){
	//确保浏览器支持DOM方法
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	//确保元素存在
	if(!document.getElementById('linklist')) return false;
	//创建div
	var slideshow = document.createElement("div");
	slideshow.setAttribute("id","slideshow");
	var preview = document.createElement("img");
	preview.setAttribute("src","topics.gif");
	preview.setAttribute("alt","building blocks of web design");
	preview.setAttribute("id","preview");
	slideshow.appendChild(preview);
	var list = document.getElementById("linklist");
	insertAfter(slideshow,list);
	//取得列表中的所有链接
	 var links = list.getElementsByTagName("a");
	//位mouseover事件添加动画
	links[0].onmouseover=function(){
		moveElement("preview",-100,0,10);
	}
	links[1].onmouseover=function(){
		moveElement("preview",-200,0,10);
	}
	links[2].onmouseover=function(){
		moveElement("preview",-300,0,10);
	}
}

addLoadEvent(prepareSideshow);