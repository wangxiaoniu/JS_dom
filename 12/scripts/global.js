//加载函数
function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload !='function'){
		window.onload=func;
	}else{
		window.onload=function (){
			oldonload();
			func();
		}
	}
}
//在元素之后加元素
function insertAfter(newElement,targetElement){
	var parent=targetElement.parentNode;
	if(parent.lastChild == targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertAfter(newElement,targetElement.nextSibling);
	}
}
//添加样式
function addClass(element,value){
	if(!element.className){
		element.className=value;
	}else{
		newClassName=element.className;
		newClassName+=" ";
		newClassName+=value;
		element.className=newClassName;
	}
}
// 链接高亮
function hightlightPage(){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	var headers=document.getElementsByTagName('header');
	if(headers.length==0) return false;
	var navs=headers[0].getElementsByTagName('nav');
	if(navs.length==0) return false;
	var links=document.getElementsByTagName('a');
	var linkurl;
	for(var i=0;i<links.length;i++){
		linkurl=links[i].getAttribute('href');
		if(window.location.href.indexOf(linkurl) != -1){
			links[i].className='here';
		}
	}
}

addLoadEvent(hightlightPage);