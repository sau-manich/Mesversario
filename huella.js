let container = document.querySelector('#container');

let text = document.querySelector('#text');
let check = document.querySelector('#check');
let oval = document.querySelector('#Oval');

let fingerprintPaths1 = document.getElementsByClassName('pathType1');
let fingerprintPaths2 = document.getElementsByClassName('pathType2');

let addClasses = () => {
	text.classList.add('animate-text');
	check.classList.add('animate-check');
	oval.classList.add('animate-oval');
	console.log(fingerprintPaths2);
	console.log(fingerprintPaths1);
	for(i = 0; i < fingerprintPaths1.length; ++i) {
		fingerprintPaths1[i].classList.add('animate-path');
	} 
	for(i = 0; i < fingerprintPaths2.length; ++i) {
		fingerprintPaths2[i].classList.add('animate-path-delay');
	}
}

let removeClasses = () => {
	text.classList.remove('animate-text');
	check.classList.remove('animate-check');
	oval.classList.remove('animate-oval');
	console.log(fingerprintPaths2);
	console.log(fingerprintPaths1);
	for(i = 0; i < fingerprintPaths1.length; ++i) {
		fingerprintPaths1[i].classList.remove('animate-path');
	} 
	for(i = 0; i < fingerprintPaths2.length; ++i) {
		fingerprintPaths2[i].classList.remove('animate-path-delay');
		window.location.href = "carta.html";
	} 
}

let playAnimation = () => {
	addClasses();
	setTimeout(removeClasses, 3000);
}

container.addEventListener('click', playAnimation);