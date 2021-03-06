function isIE() {
	ua = window.navigator.userAgent;
	if (ua.match(/Trident/) != null || ua.match(/MSIE/) != null)
		return true
	else 
		return false
}

function printValue() {
value.innerText = document.getElementById('length').value;
}

function copy() {
var area = document.getElementById('password');
area.focus();
area.select();
document.execCommand("copy")
area.blur();
}

function getPassword(length) {
if (document.getElementById('length').value < 8) {
warning.innerText = 'Short passwords are unsafe!'
}
else {warning.innerText = '';}
password = [];
if (document.getElementById('specialchar').checked) {
	a = 33;
	b = 126;
	for (i = 0; i < length;) {
		char = Math.floor(Math.random() * (b-a+1) + a);
		if (char == 34 || char == 39 || char == 44 || char == 46 || char == 47 || char == 58 || char == 59 || char == 60 || char == 92 || char == 96) continue;
		password.push(String.fromCharCode(char));
		i++;
	}
	pass = password.join('');
	if (document.getElementById('length').value >= 8) {
		if (/[0-9]/.test(pass) != true || /[A-Z]/.test(pass) != true || /[a-z]/.test(pass) != true) {
		getPassword(document.getElementById('length').value);
		}
	}
	var isSpec = true;
	for (k = 0; k < pass.length; k++)
		if ('!#$%&()+*-<>=?@[]^{}|~'.indexOf(pass[k]) > -1) {
		isSpec = false;
		document.getElementById('password').value = pass;
		break;
		}
	if (isSpec) getPassword(document.getElementById('length').value);	
	return;
}
a = 48;
b = 122;
for (i = 0; i < length;) {
	char = Math.floor(Math.random() * (b-a+1) + a);
	if (char > 57 && char < 65) continue;
	if (char > 90 && char < 97) continue;
	password.push(String.fromCharCode(char));
	i++;
}
passSimple = password.join('');
if (document.getElementById('length').value >= 8) {
	if (/[0-9]/.test(passSimple) != true || /[A-Z]/.test(passSimple) != true || /[a-z]/.test(passSimple) != true) {
	getPassword(document.getElementById('length').value);
	}
}
document.getElementById('password').value =  passSimple;
}

function keyOps() {
	if(event.key == 'Enter') {
		getPassword(document.getElementById('length').value);
	}
	if (event.ctrlKey && event.code == 'KeyC') {
		event.preventDefault()
		copy();
	} 
}

document.addEventListener('keydown', keyOps);
document.getElementById('copy').addEventListener('click', copy);
document.getElementById('length').addEventListener('input', printValue);
document.getElementById('length').addEventListener('input', function () {getPassword(document.getElementById('length').value);});
document.getElementById('gen').addEventListener('click', function () {getPassword(document.getElementById('length').value);});
document.getElementById('specialchar').addEventListener('click', function () {getPassword(document.getElementById('length').value);});
document.addEventListener('DOMContentLoaded', printValue);
document.addEventListener('DOMContentLoaded', function () {getPassword(document.getElementById('length').value);});
if (isIE()) {
document.getElementById('length').addEventListener('change', printValue);
document.getElementById('length').addEventListener('change', function () {getPassword(document.getElementById('length').value);});
}