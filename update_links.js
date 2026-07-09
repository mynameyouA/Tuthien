const fs = require('fs');

function updateFile(filename) {
    let content = fs.readFileSync(filename, 'utf8');
    
    // Change the Donate button in the header
    content = content.replace(/<button class="btn btn-primary" onclick="openGenericModal\('donateModal'\)">Donate Now<\/button>/g, '<a href="donate.html" class="btn btn-primary">Donate Now</a>');

    // Remove the donateModal from the footer
    content = content.replace(/<!-- Donate Modal -->[\s\S]*?<!-- Scripts -->/g, '<!-- Scripts -->');

    fs.writeFileSync(filename, content);
}

updateFile('rebuild_site_modern.js');
updateFile('rebuild_site_modern2.js');

console.log('Updated headers and removed modals.');
