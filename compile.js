(async () => {
  const fs = require('fs');
  const prompt = require('./prompt.js');
  var file = await prompt("Input file path  ");
  if (file == undefined || file == null || file == "") return console.log("You must enter a file path");
  var fileoutput = await prompt("Output file path  ");
  if (fileoutput == undefined || fileoutput == null || fileoutput == "") return console.log("You must enter a file path");
  var time = Date.now();
  const data = fs.readFileSync(file, 'utf-8');
  const output = data.split`\n`.map((item, index) => "L"+index+"="+item).join`\n`;
  fs.writeFileSync(__dirname + fileoutput, output, 'utf-8');
  console.log("Operation completed in "+((Date.now()-time)/1000)+" seconds.")
})();
