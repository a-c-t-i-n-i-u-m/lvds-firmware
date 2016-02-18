var fs = require('fs');
var path = require('path');
var crypto = require('crypto');

// readdir recursive
var rreaddir = function(dir) {
    var result = [];
    dir = path.normalize(path.resolve(dir));
    fs.readdirSync(dir).forEach(function (item) {
        var filepath = path.resolve(dir, item),
            stat = fs.statSync(filepath);
        if (stat.isDirectory()) {
            result = result.concat(rreaddir(filepath));
        } else if (stat.isFile()) {
            result.push(filepath);
        }
    });
    return result;
};

// md5 of file
var md5 = function (file) {
    try {
        return crypto.createHash('md5').update(fs.readFileSync(file)).digest('hex');
    } catch (e) {
        return null;
    }
};

// listup files
var base = path.resolve(path.dirname(process.argv[1]), '..');
var files = rreaddir(base);

// create database
var data = {}, count = 0;
files.forEach(function (file) {
    // is bin file
    if (file.slice(-4) !== '.bin') {
        return;
    }
    var hash = md5(file);
    data[hash] = path.dirname(file.replace(base, '').replace(/\\/g, '/').slice(1));
});

var vals = [];
for (var k in data) {
    vals.push(data[k]);
}
console.log(JSON.stringify(vals, null, 4));