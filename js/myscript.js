var times = 0

function myFunction(){
	console.log("You scrolled" + times + " times");
	times++;
	console.log(window.scrollY);
	var MaxEffect = 400;
	//document.getElementById("banner").style.borderRadius = window.scrollY/5 + "vw";
	document.getElementById("banner").style.opacity = 1-window.scrollY/MaxEffect;
	document.getElementsByTagName("nav")[0].style.opacity = window.scrollY/MaxEffect;
	document.getElementById("scrollup").style.bottom = Math.min(window.scrollY/12,MaxEffect/12) + "vh";
	//document.getElementById("banner").style.height = (120 - window.scrollY/4) + "vw";
}
