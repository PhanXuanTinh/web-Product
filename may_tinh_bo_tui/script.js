function calcalator(){
	var result= document.getElementById("result");
	result.value=eval(result.value);
	var ans=document.getElementById("Ans");
	ans.value=result.value;
}
function ac(){
	var result= document.getElementById("result");
	result.innerHTML="";
}
function dec(){
	var result= document.getElementById("result");
	var n=result.innerHTML.length;
	var new_result=result.innerHTML.slice(0,n-1);
	result.innerHTML=new_result;
}


