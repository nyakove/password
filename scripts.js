
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
	var pass = password.join('');
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
document.getElementById('password').value = password.join('');

}

//window.onload = getPassword(document.getElementById('length').value), printValue();
document.getElementById('copy').addEventListener('click', copy);
document.getElementById('length').addEventListener('input', printValue);
document.getElementById('length').addEventListener('input', function () {getPassword(document.getElementById('length').value);});
document.getElementById('gen').addEventListener('click', function () {getPassword(document.getElementById('length').value);});
document.getElementById('specialchar').addEventListener('click', function () {getPassword(document.getElementById('length').value);});
document.addEventListener('DOMContentLoaded', printValue);
document.addEventListener('DOMContentLoaded', function () {getPassword(document.getElementById('length').value);});