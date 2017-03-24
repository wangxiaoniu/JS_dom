function getHTTPObject(){
	if(typeof XMLHttpRequest == "undefined")
		XMLHttpRequest = function(){
			try {return new ActiveXObject("MSxml2.XMLHTTP.6,0");}
				catch(e){}
			try{return new ActiveXObject("MSxml2.XMLHTTP.3.0");}
				catch(e){}
			try{return new ActiveXObject("MSxml2.XMLHTTP");}
				catch(e){}
			return false;	
		}
	return new XMLHttpRequest();
	//getHTTPObject通过对象检测技术检测了XMLRequest.
	//如果失败，则继续检测其他方法
	//最终返回false或一个新的XMLHTTRequest(或XMLHTTP)对象
}