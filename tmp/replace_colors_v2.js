const fs = require('fs');
const path = require('path');

const walk = (dir, callback) => {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
    });
};

const replacements = [
  // Comprehensive patterns for text, bg, border, from, to, ring, shadow, via
  { regex: /(text|bg|border|from|to|ring|shadow|via|fill|stroke)-(blue|indigo|cyan|sky)-(50|100|200|300|400|500|600|700|800|900)/g, 
    replace: (match, prefix, color, shade) => {
      // Light shades often used for backgrounds or borders
      if (shade <= '100') return `${prefix}-accent/5`;
      if (shade <= '200') return `${prefix}-accent/10`;
      
      // Mid to dark shades map to accent or brand-navy
      if (shade >= '700') return `${prefix}-brand-navy`;
      return `${prefix}-accent`;
    }
  },
  // Catch patterns like border-t-indigo-600, border-b-blue-500
  { regex: /(border-[tblr])-(blue|indigo|cyan|sky)-(400|500|600|700|800|900)/g, 
    replace: (match, prefix, color, shade) => {
      if (shade >= '700') return `${prefix}-brand-navy`;
      return `${prefix}-accent`;
    }
  },
  // Hardcoded hex codes
  { regex: /#2563eb/g, replace: '#4338ca' }, // Indigo-700
  { regex: /#1d4ed8/g, replace: '#3730a3' }, // Indigo-800
  { regex: /#0ea5e9/g, replace: '#4338ca' }, // Cyan-500 -> accent
  { regex: /#22d3ee/g, replace: '#4338ca' }, // Cyan-400 -> accent
  { regex: /rgba\(37, 99, 235/g, replace: 'rgba(67, 56, 202' }, 
  { regex: /rgba\(59, 130, 246/g, replace: 'rgba(67, 56, 202' }, 
  { regex: /rgba\(34, 211, 238/g, replace: 'rgba(67, 56, 202' }, 
];

const targetDir = 'C:\\Users\\Krisc\\Downloads\\K Web 1\\client';
const extensions = ['.tsx', '.ts', '.css', '.js'];

walk(targetDir, (filePath) => {
    if (!extensions.includes(path.extname(filePath))) return;
    if (filePath.includes('node_modules') || filePath.includes('.next')) return;

    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    replacements.forEach(rep => {
        content = content.replace(rep.regex, rep.replace);
    });

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
    }
});
