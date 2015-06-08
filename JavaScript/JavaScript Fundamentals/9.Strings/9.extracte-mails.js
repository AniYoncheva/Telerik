//Write a function for extracting all email addresses from given text.
//All sub-strings that match the format <identifier>@<host>�<domain> should be recognized as emails.
//Return the emails as array of strings.


var text = 'blablao@abv.bg sdsd tralala@gmail.com titi Imalo_Edno_vreme@yahoo.com sdd ' +
    'blablao@abv.bg sdsd tralala@gmail.com titi Imalo_Edno_vreme@yahoo.com sdd';

function emailExtract(text) {
    var textArray = [], array = text.split(' '), dotIndex, indexMonkey, isCorrectEmail,
        indexDomain, indexEnd, indexUsername, regex = /\d/g;
    for (var i = 0; i < array.length; i++) {
        indexMonkey = array[i].indexOf('@');
        dotIndex = array[i].indexOf('.');
        indexDomain = dotIndex - indexMonkey - 1;
        indexEnd = array[i].length - dotIndex - 1;
        indexUsername = array[i].substring(0, indexMonkey);
        isCorrectEmail = dotIndex && indexMonkey && indexDomain > 1 && indexEnd > 1
                                  && indexUsername.length > 1 && !regex.test(array[i]);
        if (isCorrectEmail) {
            textArray.push(array[i] + ' ');
        }
    }
    return textArray;
}
console.log(emailExtract(text));