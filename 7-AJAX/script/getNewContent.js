function getNewContent(){
	var request=getHTTPObject();
	if (request) {
		request.open("GET","example.txt",true);//指定请求目标
		request.onreadystatechange=function(){
			if (request.readyState==4) {//明确处理响应之后要做的事情
				var para= document.createElement('p');
				var txt=document.createTextNode(request.responseText);//request.responseText用于保存文本字符串形式的数据（从服务器发送回来的数据）
				para.appendChild(txt);
				document.getElementById('new').appendChild(para);
			}
		};
		request.send(null);//send方法发送请求
	}else{
		alert("对不起，你的浏览器不支持XMLHttpRequest，无法继续");

	}
	
}
addLoadEvent(getNewContent);
















