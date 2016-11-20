var parse = require('tcx');
var fs = require('fs');
var xmldom = new (require('xmldom').DOMParser)();
var dirname = '../2016kanoroutes/'; 
// read in file list using readdirsync
var filenames = fs.readdirSync(dirname);1

var emptyJSON = {
  "type": "FeatureCollection",
  "features": []
}
filenames.forEach(function(filename) {
    var geojson = parse(xmldom.parseFromString(fs.readFileSync(dirname + filename, 'utf8')));
    fs.writeFileSync(filename.split(".")[0]+'.json', JSON.stringify(geojson), 'utf8');
    emptyJSON.features.push(geojson.features[0]);
});
console.log('outside')
fs.writeFileSync('allJson.json', JSON.stringify(emptyJSON),'utf8');
// append to the great json file we created before

