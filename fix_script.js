const fs = require('fs');

let content = fs.readFileSync('script.js', 'utf8');
// Fix the literal "\n" which is causing a JS syntax error
content = content.replace(/\\n\n/g, ''); 
content = content.replace(/^\\n$/m, '');
fs.writeFileSync('script.js', content);
console.log('Fixed script.js');
