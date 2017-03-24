
/*wangxiaoniu
2017-03-24
dom编程艺术 第八章*/
function displayCitation(){
	var quote=document.getElementsByTagName('blockquote');
	for(var i =0;i<quote.length;i++){//遍历blockquote标签
		if(!quote[i].getAttribute('cite')) continue;
		var url = quote[i].getAttribute('cite');
		var quoteChildren=quote[i].getElementsByTagName("*");//把所有blockquote的标签（元素节点）都找出来
		if(quoteChildren.length<1) continue;
		//blockquote标签的最后一个子节点
		var elem=quoteChildren[quoteChildren.length-1];
		//创建a标签
		var link=document.createElement('a');
		var link_text=document.createTextNode("source");
		link.appendChild(link_text);
		link.setAttribute('href',url);
		//创建上标 元素节点
		var superscript=document.createElement('sup');
		superscript.appendChild(link);
		elem.appendChild(superscript);
	}

}
addLoadEvent(displayCitation);