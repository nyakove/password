function getPassword(min, max, length) {
a = min;
b = max;
password = [];
for (i = 0; i < length;) {
	char = Math.floor(Math.random() * (b-a+1) + a);
	if (char > 57 && char < 65) continue;
	if (char > 90 && char < 97) continue;
	password.push(String.fromCharCode(char));
	i++;
}
return password.join('');
}
