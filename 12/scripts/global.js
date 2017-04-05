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
			var linktext=links[i].lastChild.nodeValue.toLowerCase();
			document.body.setAttribute('id',linktext);
		}
	}
}

function moveElement(elementID,final_x,final_y,interval){
	if(!document.getElementById) return false;
	if(!document.getElementById(elementID)) return false;
	var elem=document.getElementById(elementID);
	if(elem.movement){
		clearTimeout(elem.movement);
	}
	if(!elem.style.left){
		elem.style.left="0px";
	}
	if(!elem.style.top){
		elem.style.top="0px";
	}
	var xpos=parseInt(elem.style.left);
	var ypos=parseInt(elem.style.top);
	if(xpos == final_x && ypos=final_y){
		return true;
	}
	if(xpos<final_x){
		//math.ceil(x)返回大于参数x的最小整数,即对浮点数向上取整. 
		var dist=Math.ceil((final_x - xpos)/10);
		xpos=xpos +dist;
	}
	if(xpos>final_x){
		var dist=Math.ceil((xpos-fina_x)/10);
		xpos= xpos -dist;
	}
	if(ypos < final_y){
		var dist =Math.ceil((final_y-ypos)/10);
		ypos=ypos+dist;
	}
	if(ypos>final_y){
		var dist =Math.ceil((ypos-fina_y)/10);
		ypos=ypos -dist;
	}
	elem.style.left=xpos+"px";
	elem.style.top=ypos+'px';
	var repeat="moveElement('"elementID+"',"+final_x+","+final_y+","+interval+")";
	elem.movement=setTimeout(repeat,interval);
}

addLoadEvent(hightlightPage);