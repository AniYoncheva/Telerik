//Extract text from HTML
//Write a function that extracts the content of a html page given as text.
//The function should return anything that is in a tag, without the tags.

function removeTags(text) {
    for (var j = 0; j < text.length; j++) {
        var indexStart = text.indexOf('<');
        var indexEnd = text.indexOf('>');
        text = (text.replace(text.substring(indexStart, indexEnd + 1), ''));
    }
    return text
}

var text = '<div><!DOCTYPE html><htmla <head lang="en"> <meta charset="UTF-8"> <title>zaglavie</title> </head>' + +' <body> <div>asen</div> <div>ivan</div> <p>pesho</p> </script>  ';


var result = removeTags(text);
console.log(result);