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
var files = rreaddir(path.resolve(path.dirname(process.argv[1]), '..'));

// create database
var data = {}, count = 0;
files.forEach(function (file) {
    // is bin file
    if (file.slice(-4) !== '.bin') {
        return;
    }
    // create item data
    var hash = md5(file),
        category = path.basename(path.dirname(path.dirname(file))),
        dirname = path.basename(path.dirname(file)),
        attr = dirname.split('_'),
        reso = dirname.match(/(\d{3,4})(?:\-|_|x|\*)(\d{3,4})/i),
        model = reso ? dirname.split(reso[0])[0].slice(0, -1).replace(/_/g, '-') : '',
        key = dirname.match(/(5|7)(?:k(?:ey)?)_/i);
    if (category.match(/(5|7)(?:k(?:ey)?)/i)) {
        category = path.basename(path.dirname(path.dirname(path.dirname(path.dirname(file))))) + '/'
            + path.basename(path.dirname(path.dirname(path.dirname(file)))) + '/'
            + category;
    }
    var fileData = {
        filepath: file,
        attributes: attr,
        category: category,
        model: model,
        r840: dirname.indexOf('R840') !== -1 || dirname.indexOf('r840') !== -1,
        resolution: (reso ? [+reso[1], +reso[2]] : []),
        key: key ? +key[1] : null,
    };
    // save
    if (data[hash]) {
        data[hash].push(fileData);
        console.error(hash);
    } else {
        data[hash] = [fileData];
    }
});


console.log(JSON.stringify(data, null, 4));