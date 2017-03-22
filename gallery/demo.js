//加载函数
function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}
//在目标元素之后插入新元素
function insertAfter(newElement,targetElement){
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}
//在html中加入代码
function preparePlaceholder(){

	var placeholder=document.createElement("img");//创建一个img标签元素
	placeholder.setAttribute("id","placeholder");//给img标签设置id属性值为placeholder
	placeholder.setAttribute("src","images/placeholder.jpg");
	placeholder.setAttribute("alt","my image");
	var description = document.createElement("p");//创建一个p标签元素
	description.setAttribute("id","description");//给p标签元素加id属性且值为description
	var desctxt=document.createTextNode("chose an image.");//创建一个文本节点，值为chose...
	description.appendChild(desctxt);
	var gallery =document.getElementById("imagegallery");
	insertAfter(placeholder,gallery);
	insertAfter(description,placeholder);
}

//点击切换图片
function prepareGallery(){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;

	if(!document.getElementById('imagegallery')){
		return false;
	}
	var gallery=document.getElementById('imagegallery');
	var links = gallery.getElementsByTagName('a');
	for(var i=0; i < links.length; i++){
		links[i].onclick = function(){
			return !Showpic(this);
		}
	}

}

//获取目标图片的地址及title赋值给placeholder
function Showpic(whichpic){
	if(!document.getElementById('placeholder')) {
		return false;
	}
	var source=whichpic.getAttribute('href');
	var placeholder=document.getElementById('placeholder');
	placeholder.setAttribute("src",source);
	if(document.getElementById('description')){
		//var text =whichpic.getAttribute('title');
		if(whichpic.getAttribute('title')){
			var text =whichpic.getAttribute('title');
		}else{
			var text = "";
		}
		var description=document.getElementById('description');
		description.firstChild.nodeValue=text;
	}
	return true;
}


addLoadEvent(preparePlaceholder)
addLoadEvent(prepareGallery)