const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf8');
let joinUsHtml = fs.readFileSync('join-us.html', 'utf8');

// Extract modals from index
const volunteerModalRegex = /<!-- Volunteer Modal -->[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
const partnerModalRegex = /<!-- Partner Modal -->[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;

const volunteerModal = indexHtml.match(volunteerModalRegex) ? indexHtml.match(volunteerModalRegex)[0] : '';
const partnerModal = indexHtml.match(partnerModalRegex) ? indexHtml.match(partnerModalRegex)[0] : '';

// Insert into join-us before donateModal
joinUsHtml = joinUsHtml.replace(/<!-- Premium Donation Modal/g, volunteerModal + '\n\n' + partnerModal + '\n\n<!-- Premium Donation Modal');
fs.writeFileSync('join-us.html', joinUsHtml, 'utf8');

// Remove from index.html
indexHtml = indexHtml.replace(volunteerModalRegex, '');
indexHtml = indexHtml.replace(partnerModalRegex, '');
fs.writeFileSync('index.html', indexHtml, 'utf8');

console.log("Modals moved successfully.");
