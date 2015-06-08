//Write a script that parses an URL address given in the format: `[protocol]://[server]/[resource]`
//and extracts from it the `[protocol]`, `[server]` and `[resource]` elements.
//Return the elements in a JSON object.

var url1 = 'http://telerikacademy.com/Courses/Courses/Details/239';
var url = 'ftp: // telerikacademy.com /Courses/Courses';

function getUrl(url) {
    var i, index, protocol, array, server, resourses;
    for (i = 0; i < url.length; i++) {
        url = url.replace(' ', '');
    }
    index = url.indexOf('//');
    protocol = url.substring(0, index - 1);
    url = url.split("//").pop();//delete from start of string until string''//'including,
    array = url.split('/');
    server = array[0];
    resourses = url.replace(server, '');
    console.log('Protocol: ' + protocol + '\n' + ' Server: ' + server + '\n' + ' Resourses: ' + resourses);
}
getUrl(url);
getUrl(url1);