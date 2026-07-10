const fs = require('fs');

let r1 = fs.readFileSync('rebuild_site_modern.js', 'utf8');
r1 = r1.replace(/Thu Duc City, HCMC, VN/g, 'Wyoming, USA');
r1 = r1.replace(/v=10/g, 'v=11');
fs.writeFileSync('rebuild_site_modern.js', r1);

let r2 = fs.readFileSync('rebuild_site_modern2.js', 'utf8');
r2 = r2.replace(/Thu Duc City, HCMC, VN/g, 'Wyoming, USA');

// Also update the Google Maps iframe to point to Wyoming
const oldMapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x3175276398969f7b%3A0x9672b7efd0893fc4!2sThu%20Duc%2C%20Ho%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s';
const newMapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x534c114f6b0bfbe9%3A0x5a189fcf2d3fb846!2sWyoming%2C%20USA!5e0!3m2!1sen!2s!4v1700000000001!5m2!1sen!2s';
r2 = r2.replace(oldMapUrl, newMapUrl);

r2 = r2.replace(/v=10/g, 'v=11');
fs.writeFileSync('rebuild_site_modern2.js', r2);

console.log('Address changed to Wyoming, USA');
