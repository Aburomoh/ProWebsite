var MaxEffect = document.documentElement.clientHeight;

function myscrollFunction(){
	//console.log(window.scrollY);
	//document.getElementById("banner").style.borderRadius = window.scrollY/5 + "vw";

	document.getElementsByClassName("banner")[0].style.opacity = 1-0.5*window.scrollY/MaxEffect;
	document.getElementsByTagName("nav")[0].style.opacity = window.scrollY/MaxEffect;

	if (100-(window.scrollY/MaxEffect*100)>0) {
		document.getElementById("scrollup").style.top = Math.min(100-(window.scrollY/MaxEffect*100),100) + "vh";
	}
	else {
		document.getElementById("scrollup").style.top = 0;
	}

	//console.log(100-(window.scrollY/MaxEffect*100))
}