
//查找提供参数的下一个元素节点
function getNextElement(node){
		//元素节点返回1，属性节点返回2
		if(node.nodeType ==1){
			return node;
		}
		//上一个不是，再来下一个？循环判断？
		if(node.nextSibling){
			return getNextElement(node.nextSibling);
		}
		return null
}
function addClassName(element,value){
	if(!element.className){
		element.className=value;
	}else{
		newClassName=element.className;
		newClassName+= " ";
		newClassName+= value;
		element.className=newClassName;
	}
}
function styleElementSiblings(tag,theclass){
	if(!document.getElementsByTagName) return false;
	//获取所有h1标签存入header
	var elems=document.getElementsByTagName(tag);
	var elem;
	for(var i=0;i<elems.length;i++){	
		elem=getNextElement(elems[i].nextSibling);
		addClassName(elem,theclass);
	}


}

addLoadEvent(function(){
	styleElementSiblings("h1","intro");
});
