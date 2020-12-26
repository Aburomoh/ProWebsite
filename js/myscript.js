var times = 0

function myFunction(){
	console.log("You scrolled" + times + " times");
	times++;
	console.log(window.scrollY);
	//document.getElementById("banner").style.borderRadius = window.scrollY/5 + "vw";
	document.getElementById("banner").style.opacity = 1-window.scrollY/400;

	//document.getElementById("banner").style.height = (120 - window.scrollY/4) + "vw";
}
