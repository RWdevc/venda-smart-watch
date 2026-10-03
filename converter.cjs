const fs = require('fs');

const html = fs.readFileSync('old/code.html', 'utf8');

// Simple regex based conversion to JSX
let jsx = html
  .replace(/class=/g, 'className=')
  .replace(/for=/g, 'htmlFor=')
  .replace(/<img([^>]*[^\/])>/g, '<img$1 />')
  .replace(/<input([^>]*[^\/])>/g, '<input$1 />')
  .replace(/<br>/g, '<br />')
  .replace(/style="([^"]*)"/g, (match, p1) => {
    // very naive inline style to JSX converter for font-variation-settings
    if (p1.includes('font-variation-settings')) {
      return `style={{ fontVariationSettings: "'FILL' 1" }}`;
    }
    return match;
  })
  .replace(/<!--[\s\S]*?-->/g, '');

fs.writeFileSync('old/code.jsx', jsx);
console.log('Converted code.html to code.jsx');
