const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const aboutHtml = fs.readFileSync('about.html', 'utf8');

function extractSection(html, sectionId) {
    const regex = new RegExp(`<section id="${sectionId}"[\\s\\S]*?</section>`, 'g');
    const match = html.match(regex);
    return match ? match[0] : '';
}

// 1. Build financials.html
let financialsHtml = aboutHtml;
const transparencySection = extractSection(aboutHtml, 'transparency');
// Remove <section id="about"> and <section id="team">
financialsHtml = financialsHtml.replace(/<section id="about"[\s\S]*?<\/section>/g, '');
financialsHtml = financialsHtml.replace(/<section id="team"[\s\S]*?<\/section>/g, '');
fs.writeFileSync('financials.html', financialsHtml, 'utf8');

// Also remove transparency section from about.html
const updatedAboutHtml = aboutHtml.replace(/<!-- Financial Transparency Section -->[\s\S]*?<\/section>/g, '');
fs.writeFileSync('about.html', updatedAboutHtml, 'utf8');


// 2. Build join-us.html
let joinUsHtml = aboutHtml;
const joinSection = extractSection(indexHtml, 'join');
// Remove about sections and insert join section
joinUsHtml = joinUsHtml.replace(/<section id="about"[\s\S]*?<\/section>/g, '');
joinUsHtml = joinUsHtml.replace(/<section id="transparency"[\s\S]*?<\/section>/g, '');
joinUsHtml = joinUsHtml.replace(/<section id="team"[\s\S]*?<\/section>/g, joinSection);
fs.writeFileSync('join-us.html', joinUsHtml, 'utf8');

// Also remove join section from index.html
let updatedIndexHtml = indexHtml.replace(/<!-- Join Us Section -->[\s\S]*?<\/section>/g, '');


// 3. Build contact.html
let contactHtml = aboutHtml;
const contactSection = extractSection(indexHtml, 'contact');
contactHtml = contactHtml.replace(/<section id="about"[\s\S]*?<\/section>/g, '');
contactHtml = contactHtml.replace(/<section id="transparency"[\s\S]*?<\/section>/g, '');
contactHtml = contactHtml.replace(/<section id="team"[\s\S]*?<\/section>/g, contactSection);
fs.writeFileSync('contact.html', contactHtml, 'utf8');

// Also remove contact section from index.html
updatedIndexHtml = updatedIndexHtml.replace(/<!-- Contact Section -->[\s\S]*?<\/section>/g, '');
fs.writeFileSync('index.html', updatedIndexHtml, 'utf8');

console.log("Pages built successfully.");
