const fs = require('fs');

let css = fs.readFileSync('styles.css', 'utf8');
css = css.replace(
    /^\.fade-in \{\s*opacity: 1;\s*transform: translateY\(20px\);\s*transition: opacity 0\.8s ease, transform 0\.8s ease;\s*\}/m,
    '.fade-in {\n    opacity: 0;\n    transform: translateY(20px);\n    transition: opacity 0.8s ease, transform 0.8s ease;\n}'
);
fs.writeFileSync('styles.css', css);

console.log('Fixed fade-in opacity in styles.css');
