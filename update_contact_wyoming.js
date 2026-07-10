const fs = require('fs');

let r2 = fs.readFileSync('rebuild_site_modern2.js', 'utf8');

// Update description
r2 = r2.replace(
    'SHF operates out of Southeast Asia to maintain direct, rapid access to our primary field operation zones across the developing world.',
    'SHF operates out of the United States to maintain direct, rapid access to global institutional funding and logistical hubs.'
);

// Update address
r2 = r2.replace(
    'Tang Nhon Phu Ward, Thu Duc City,<br>Ho Chi Minh City, Vietnam',
    'Cheyenne, Wyoming,<br>United States of America'
);

// Update iframe src
const newMapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.86178877546!2d-104.8202462!3d41.1399814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876f38762e73ef93%3A0xb10a30418f96f0b2!2sCheyenne%2C%20WY%2C%20USA!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s';

r2 = r2.replace(
    /src="https:\/\/www\.google\.com\/maps\/embed[^"]+"/,
    `src="${newMapSrc}"`
);

// Bump version
r2 = r2.replace(/v=10/g, 'v=11');
fs.writeFileSync('rebuild_site_modern2.js', r2);

let r1 = fs.readFileSync('rebuild_site_modern.js', 'utf8');
r1 = r1.replace(/v=10/g, 'v=11');
fs.writeFileSync('rebuild_site_modern.js', r1);

console.log('Successfully updated contact address and map to Wyoming.');
