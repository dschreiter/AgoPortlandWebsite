$(document).ready(function(){

//controls jumbotron fade IN content

	$("#index").fadeIn(1500);
	$("#join").fadeIn(1500);
	$("#news").fadeIn(1500);
	$("#events").fadeIn(1500);
	$("#scholarships").fadeIn(1500);
	$("#jobs").fadeIn(1500);
	$("#contact").fadeIn(1500);
	$("#pedalingAround").fadeIn(1500);


// pedaling around tabs
	$("#tab1").click(function(){
		$("#agoResources").slideDown(500);
		$("#localOrgans").hide();
		$("#links").hide();
		$("#lendingLibrary").hide();
	})
	$("#tab2").click(function(){
		$("#localOrgans").slideDown(500);
		$("#agoResources").hide();
		$("#links").hide();
		$("#lendingLibrary").hide();
	})
	$("#tab3").click(function(){
		$("#links").slideDown(500);
		$("#localOrgans").hide();
		$("#agoResources").hide();
		$("#lendingLibrary").hide();
	})
	$("#tab4").click(function(){
		$("#lendingLibrary").slideDown(500);
		$("#links").hide();
		$("#agoResources").hide();
		$("#localOrgans").hide();
	})

})