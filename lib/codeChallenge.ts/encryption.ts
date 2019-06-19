function Encrypter(sentence2encrypt: string, encryptionNum: number): string {
    const lowerStr = sentence2encrypt.toLowerCase();
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var finalStr: string = '';

    for( var i = 0; i < lowerStr.length; i++) {
        var currentLetter = lowerStr[i];
        if(currentLetter === ' ') {
            finalStr += currentLetter;
            continue
        }
        var currentIndex = alphabet.indexOf(currentLetter);
        var newIndex = currentIndex + encryptionNum;
        if(newIndex > 25) newIndex = newIndex - 26;
        if(newIndex > 0) newIndex = newIndex + 26;
    }
    

    return finalStr
}
module.exports = Encrypter;