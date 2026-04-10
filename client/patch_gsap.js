const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.match(/scrollTrigger/i)) {
    let modified = false;

    // missing import entirely
    if (!content.includes('from "gsap/ScrollTrigger"') && !content.includes("from 'gsap/ScrollTrigger'")) {
      content = content.replace(/import gsap from ['"]gsap['"];/, 'import gsap from "gsap";\nimport { ScrollTrigger } from "gsap/ScrollTrigger";');
      modified = true;
    }

    // missing register at top level
    if (!content.match(/gsap\.registerPlugin\(ScrollTrigger\)/)) {
      content = content.replace(/import \{ ScrollTrigger \} from ['"]gsap\/ScrollTrigger['"];/, 'import { ScrollTrigger } from "gsap/ScrollTrigger";\n\nif (typeof window !== "undefined") {\n  gsap.registerPlugin(ScrollTrigger);\n}\n');
      modified = true;
    } else {
      // If it has it inside useEffect but we want it at top level?
      // Actually we are modifying this only if there is a problem.
      // If it's there we skip.
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Patched', file);
    }
  }
}
