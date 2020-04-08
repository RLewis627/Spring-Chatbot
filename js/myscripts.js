function ChkSuccessReg() {
	var FirstName = document.getElementById("FirstName").value;
	var UseName = document.getElementById("UseName").value;
	var EmailAdd = document.getElementById("EmailAdd").value;
	var pin = document.getElementById("pin").value;
	if(FirstName === "" || UseName === "" || EmailAdd === "" || pin === ""){
		document.getElementById("success").style.display = "none";
		document.getElementById("notsuccess").style.display = "block";
	}else{
		document.getElementById("success").style.display = "block";
		document.getElementById("BackToLogin").style.display = "block";
		document.getElementById("notsuccess").style.display = "none";
		document.getElementById("FirstName").style.display = "none";
		document.getElementById("UseName").style.display = "none";
		document.getElementById("EmailAdd").style.display = "none";
		document.getElementById("pin").style.display = "none";
		document.getElementById("DoneButton").style.display = "none";
	}
}

function ChkSignIn() {
	var LoginUseName = document.getElementById("LoginUseName").value;
	var Loginpin = document.getElementById("LoginPIN").value;
	if (LoginUseName === "" || Loginpin === "") {
		document.getElementById("SignInNotSuccess").style.display = "block";
	} else {
		document.getElementById("SignInNotSuccess").style.display = "none";
		location.href='ConversationPage.html';
	}
}

function AppendUserConvo(){
	var UserComment = document.getElementById("ConvoUserInput").value;
	document.getElementById("ConvoHistory").innerHTML += '<p id="UserComment">'+UserComment+'</p>';
	document.getElementById("ConvoHistory").innerHTML += '<p id="TherabotComment">'+TherabotResponse()+'</p>';
	$('#ConvoHistory').scrollTop($('#ConvoHistory')[0].scrollHeight);
}

function TherabotResponse(){
	return "FLARP FLERP FLORP";
}
