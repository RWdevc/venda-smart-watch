const fs = require('fs');

const jsx = fs.readFileSync('old/code.jsx', 'utf8');

// Ensure components dir exists
if (!fs.existsSync('src/components')) {
  fs.mkdirSync('src/components', { recursive: true });
}

function extractTag(tag, content, occurrence = 0) {
  const regex = new RegExp(`<${tag}[^>]*>[\\s\\S]*?<\\/${tag}>`, 'g');
  const matches = [...content.matchAll(regex)];
  return matches[occurrence] ? matches[occurrence][0] : null;
}

const header = extractTag('header', jsx);
const sections = [...jsx.matchAll(/<section[^>]*>[\s\S]*?<\/section>/g)].map(m => m[0]);
// find the top banner div which is between <div className="flex flex-col w-full text-on-surface"> and the first section
const mainContent = extractTag('main', jsx);
const topBannerMatch = mainContent.match(/<div[^>]*w-full bg-surface-container-lowest border-b[^>]*>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/);
let topBanner = "";
if (topBannerMatch) {
  // Try a generic extraction of that div block
  const lines = mainContent.split('\n');
  let inBanner = false;
  let bannerLines = [];
  let divs = 0;
  for (const line of lines) {
    if (line.includes('TOP BANNER DE URGÊNCIA')) continue;
    if (line.includes('bg-surface-container-lowest border-b')) {
      inBanner = true;
    }
    if (inBanner) {
      bannerLines.push(line);
      divs += (line.match(/<div/g) || []).length;
      divs -= (line.match(/<\/div/g) || []).length;
      if (divs === 0) {
        break;
      }
    }
  }
  topBanner = bannerLines.join('\n');
}

// Write the files
const writeComponent = (name, content) => {
  if (!content) return;
  const fixedContent = content.replace(/class=/g, 'className=').replace(/for=/g, 'htmlFor=').replace(/<!--[\s\S]*?-->/g, '');
  const finalCode = `import React from 'react';\nimport { motion } from 'framer-motion';\n\nexport default function ${name}() {\n  return (\n    <>\n${fixedContent}\n    </>\n  );\n}\n`;
  fs.writeFileSync(`src/components/${name}.jsx`, finalCode);
};

writeComponent('Header', header);
writeComponent('TopBanner', topBanner);
writeComponent('Hero', sections[0]);
writeComponent('Features', sections[1]);
writeComponent('Health', sections[2]);
writeComponent('Customization', sections[3]);
writeComponent('Dials', sections[4]);
writeComponent('Specs', sections[5]);
writeComponent('Guarantee', sections[6]);
writeComponent('Testimonials', sections[7]);

// Extract footer which is inside main but not a section?
// In the original html, the FAQ and footer were inside main but after the last section.
const parts = jsx.split(/<\/section>/g);
const afterSections = parts[parts.length - 1];
// Find <footer ...> 
const footerMatch = extractTag('footer', afterSections);
if (footerMatch) writeComponent('Footer', footerMatch);
else {
  // The rest might be a div block containing FAQ and footer
  const faqIdx = afterSections.indexOf('Perguntas Frequentes');
  if (faqIdx > -1) {
    // we'll just dump the rest
    const lastDiv = afterSections.match(/<div[^>]*mt-space-xl[^>]*>[\s\S]*<\/div>\s*<\/main>/);
    if (lastDiv) {
      writeComponent('Footer', lastDiv[0].replace(/<\/main>/, ''));
    }
  }
}

console.log("Components extracted!");
