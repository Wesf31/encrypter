function Encryption(str: string, amount: number) : string {
	if (amount < 0)
		return Encryption(str, amount + 26);
	var encryptedCode : string = '';
	for (var i = 0; i < str.length; i ++) {
		var c = str[i];
		if (c.match(/[a-z]/i)) {
			var code = str.charCodeAt(i);
			if ((code >= 65) && (code <= 90))
				c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
			else if ((code >= 97) && (code <= 122))
				c = String.fromCharCode(((code - 97 + amount) % 26) + 97);

		}
		encryptedCode += c;
	}
	return encryptedCode;
};
console.log(Encryption('Attack at dawn!', 12))

module.exports = Encryption