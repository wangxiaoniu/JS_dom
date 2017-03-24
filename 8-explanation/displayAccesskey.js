
/*wangxiaoniu
2017-03-24
dom编程艺术 第八章*/
function displayAccesskey(){

	var links=document.getElementsByTagName('a');
	var accesskey=[];
	for(var i=0;i<links.length;i++){
		current_link=links[i];
		if(!current_link.getAttribute('accesskey')) continue;
		//取得accesskey
		var key=current_link.getAttribute('accesskey');
		//取得含有accesskey的超链接文本
		var text_links=current_link.lastChild.nodeValue;
		accesskey[key]=text_links;
	}
	var list =document.createElement('ul');
	for(key in accesskey){
		var text_links=accesskey[key];
		//创建一个字符串内容
		var str=key+':'+text_links;
		var item=document.createElement('li');
		var item_text=document.createTextNode(str);
		item.appendChild(item_text);
		list.appendChild(item);
	}
	//创建标题
	var header=document.createElement("h2");
	var header_text=document.createTextNode("Accesskey");
	header.appendChild(header_text);
	//
	document.body.appendChild(header);
	document.body.appendChild(list);
}
addLoadEvent(displayAccesskey);