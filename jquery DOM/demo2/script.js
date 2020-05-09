$(document).ready(function(){
	$("#btn1").click(function(){
		$("h1,h2,p").addClass("red");
		$("div").addClass("important");
	});
	$("#btn2").click(function(){
		$("#div1").addClass(" important red");
	});
	$("#btn3").click(function(){
		$("h1, h2, p").removeClass("red");
	});
	$("#btn4").click(function(){
		$("h1, h2, p").toggleClass("red");
	});
});