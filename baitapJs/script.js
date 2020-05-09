function onDangki(){
	var div_dangki= document.getElementById("divdangki");
	var div_dangnhap= document.getElementById("divdangnhap");
	div_dangki.style.display="block";
	div_dangnhap.style.display="none";
}
function onDangnhap(){
	var div_dangki= document.getElementById("divdangki");
	var div_dangnhap= document.getElementById("divdangnhap");
	div_dangki.style.display="none";
	div_dangnhap.style.display="block";
}
function ktraBatBuocDK(){
	var thongBao=document.getElementById("thong-bao");
	var form_dangki=document.getElementById("form-dang-ki");
	var nghenghiep=document.getElementById("profession");
	var nam=document.getElementById("nam");
	var nu=document.getElementById("nu");
	if(form_dangki.name.value==""||form_dangki.password.name.value==""||form_dangki.email.value==""||form_dangki.old==""){
		form_dangki.name.style.border="solid 2px red";
		form_dangki.password.style.border="solid 2px red";
		form_dangki.email.style.border="solid 2px red";
		form_dangki.old.style.border="solid 2px red";
		thongBao.style.display="block";	
		thongBao.innerHTML ="Bạn cần nhập thông tin vào" +"<br/>";		
		return false;
	}else if(nghenghiep.selectedIndex==0){
			thongBao.style.display="block";
			thongBao.innerHTML="Bạn phải chọn nghề nghiệp <br/>";
			return false;
		}else if(!nam.checked&&!nu.checked){
			thongBao.style.display="block";
			thongBao.innerHTML="Bạn phải chọn giới tính <br/>";
			return false;
		}else{
		thongBao.style.display="none";
		return true;
	}
}
function ktrMinMax(Idtext,min,max){
	var thongBao=document.getElementById("thong-bao");
	var inputname=document.getElementById(Idtext);
	var ten=inputname.value;
	if(ten.length<min||ten.length>max){
		thongBao.style.display="block";
		thongBao.innerHTML="tên nằm trong khoảng"+min+"đến"+max+"kí tự";
		return false;
	}else{
		thongBao.style.display="none";
		return true;
	}
	
}
function ktrEmail(idText){
	var inputTag=document.getElementById(idText)
	var email=/^([\w\.])+@([a-zA-Z0-9\-])+\.([a-zA-Z]{2,4})(\.[a-zA-Z]{2,4})?$/;
	var thongBao=document.getElementById("thong-bao");
		if(inputTag.value.match(email)){
			thongBao.style.display="none";
			return true;
		}else{
			thongBao.style.display="block";
			thongBao.innerHTML="Email không hợp lệ!!!";
			return false;
		}
	
}
function ktrTuoi(Idtuoi,min,max){
	var input=document.getElementById(Idtuoi);
	var number=/^[0-9]+$/;
	var thongBao=document.getElementById("thong-bao");
		if(input.value.match(number)){
			var tuoi=parseInt(input.value);
			if(tuoi<min||tuoi>max){
				thongBao.style.display="block";
			    thongBao.innerHTML="tuổi nằm trong khoảng"+min+"đến"+max+"tuổi";
			    return false;
			}else{
				thongBao.style.display="none";
			return true;
			}
		}else{
			thongBao.style.display="block";
			    thongBao.innerHTML="tuổi phải nhập bằng chữ số!!!";
			    return false;
		}
}
function ktrHopLe(){
	return ktraBatBuocDK()&&ktrMinMax("name",1,5)&&ktrEmail("email")&&ktrTuoi("old",10,40);
}

