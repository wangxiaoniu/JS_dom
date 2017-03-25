//添加样式
function addClass(element,value){
	if(!document.getElementsByTagName) return false;
	if(!element.className){
		element.className=value;
	}else{
		newClassName=element.className;
		newClassName+= " ";
		newClassName+= value;
		element.className=newClassName;
	}
}

//间隔行添加样式，以实现隔行加背景色
function stripeTables(){ 
	if(!document.getElementsByTagName) return false;
	var tables=document.getElementsByTagName('table');
	var odd,rows;
	for(var i=0;i<tables.length;i++){
		odd=false;
		var rows=tables[i].getElementsByTagName('tr');
		for(var j=0;j<rows.length;j++){
			if(odd == true){
				addClass(rows[j],"odd")	
				odd=false;
			}else{
				odd=true;
			}
		}
	}

}
addLoadEvent(stripeTables);