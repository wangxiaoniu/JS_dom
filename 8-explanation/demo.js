/*wangxiaoniu
2017-03-24
dom编程艺术 第八章*/
function displayAbbrviations(){
	if(!document.getElementsByTagName || !document.createElement ||
		!document.createTextNode) return false;//向后兼容，检查兼容
	var abbr =document.getElementsByTagName('abbr');//获取所有缩略语
	var defs=[];
	for(var i=0;i<abbr.length;i++){//遍历缩略语
		var current_abbr=abbr[i];//把数组赋值给一个变量，只为增强可读性
		if(current_abbr.childNodes.length<1) continue;//如果当前元素没有子节点，离开此循环，立刻开始下一个循环
		var abbrtxt=current_abbr.lastChild.nodeValue;
		var abbrtitle=current_abbr.getAttribute('title');
		defs[abbrtxt]=abbrtitle;
	}
	var dlist=document.createElement('dl');//创建定义列表
	for(abbrtxt in defs){//遍历定义 defs数组
		var abbrtitle = defs[abbrtxt];
		var dtitle=document.createElement('dt');//创建定义列表标题
		var dtitle_txt=document.createTextNode(abbrtxt);//创建定义标题描述
		dtitle.appendChild(dtitle_txt);
		//创建定义描述
		var ddsec=document.createElement("dd");
		var ddsec_txt=document.createTextNode(abbrtitle);
		ddsec.appendChild(ddsec_txt);
		//把它们添加到定义列表
		dlist.appendChild(dtitle);
		dlist.appendChild(ddsec);
	}
	if(dlist.childNodes.length<1) return false;//如果dl定义列表没有任何子节点，立刻退出函数
	//创建标题
	var header =document.createElement('h2');
	var header_txt=document.createTextNode("Abbreviations");
	header.appendChild(header_txt);
	//把标题添加页面主体
	document.body.appendChild(header);
	//把列表添加到页面主体
	document.body.appendChild(dlist);
}
addLoadEvent(displayAbbrviations);