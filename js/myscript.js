var MaxEffect = document.documentElement.clientHeight;

function myclickFunction(){
	window.scroll(0,MaxEffect);
}

function myscrollFunction(){
	//console.log(window.scrollY);
	//document.getElementById("banner").style.borderRadius = window.scrollY/5 + "vw";
	document.getElementsByClassName("banner")[0].style.opacity = 1-window.scrollY/MaxEffect;
	
	if (window.scrollY/MaxEffect<1) {
		document.getElementById("scrollup").style.top = Math.min(20-(window.scrollY/MaxEffect*20),20) + "vh";
	}
	else {
		document.getElementById("scrollup").style.top = 0;
	}

	//console.log(100-(window.scrollY/MaxEffect*100))
}