var replaceFile = require('replace-in-file');
var package = require("./package.json");
var buildVersion = package.version;
const options = {
 files: 'src/environments/environment.prod.ts',
 from: /version: '(.*)'/g,
 to: "version: '"+ buildVersion + "'",
 allowEmptyPaths: false,
};


try {
 let changeFiles = replaceFile.sync(options);
 if (changeFiles == 0) {
 throw "Please make sure file have version";
 }
 console.log('Build version set: ' + buildVersion);
}
catch (error) {
 console.error('Error occurred:', error);
 throw error
}

var someFile = "./angular.json";
var angjson = require("./angular.json");
var fs = require('fs')
fs.readFile(someFile, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

var ddd=angjson.projects.VisitorSystem.architect.build.options.outputPath;


var result = data.replace(`"outputPath": "`+ ddd+'"','"outputPath": "dist/Visitor'+buildVersion+`"`);

  fs.writeFile(someFile, result, 'utf8', function (err) {
     if (err) return console.log(err);
   
  });
});