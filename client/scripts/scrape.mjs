import fs from 'fs/promises';
import path from 'path';

const routes = [
  "/inventory-management-system",
  "/production-management-system",
  "/purchase-management-system",
  "/hr-management-system",
  "/employee-task-management-system",
  "/account-management-system",
  "/search-engine-optimization",
  "/social-media-optimization",
  "/paid-ads-management",
  "/gmb-creation",
  "/content-marketing",
  "/web-development",
  "/web-designing",
  "/online-reputation-management",
  "/indiamart-account-management",
  "/account-creation",
  "/account-management",
  "/catalog-management",
  "/ads-campaign-management",
  "/recruitment"
];

const generatePageContent = (title, subtitle, description, features) => `
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-white selection:bg-accent selection:text-white">
      <Navbar />
      
      <div className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-black tracking-widest text-indigo-600 hover:text-indigo-800 transition-colors mb-12 uppercase group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-foreground leading-[1.05]">
                ${title}
              </h1>
              
              {String(\`${subtitle.replace(/`/g, "'")}\`).length > 0 && (
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-800 mt-4 leading-snug">
                  ${subtitle.replace(/`/g, "'")}
                </h2>
              )}
              
              <div className="h-1 w-12 bg-accent mt-2 mb-4"></div>
              
              <p className="text-xl text-muted font-medium leading-relaxed max-w-2xl">
                ${description.replace(/`/g, "'")}
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="px-8 py-4 bg-foreground text-background font-bold rounded-full hover:bg-gray-800 transition-all shadow-lg hover:-translate-y-1 flex items-center gap-2">
                  Get Started <ChevronRight size={18} />
                </Link>
              </div>
            </div>
            
            <div className="lg:col-span-5 bg-gray-50/80 backdrop-blur-3xl border border-gray-100 rounded-[2rem] p-8 lg:p-10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              
              <h3 className="text-2xl font-black text-foreground mb-8 tracking-tight relative z-10">Key Benefits & Features</h3>
              <ul className="flex flex-col gap-5 relative z-10">
                {${JSON.stringify(features)}.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-gray-100 group-hover:scale-110 group-hover:bg-indigo-50 transition-all">
                      <CheckCircle2 className="text-indigo-600" size={18} />
                    </div>
                    <span className="text-gray-700 font-medium leading-relaxed pt-1">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10 bg-white">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-indigo-50/50 to-transparent rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-violet-50/50 to-transparent rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
      </div>
    </main>
  );
}
`;

async function scrapeAndGenerate() {
  const baseDir = path.join(process.cwd(), 'app');
  
  for (const route of routes) {
    console.log(`Scraping ${route}...`);
    try {
      const res = await fetch(`https://excellifes.com${route}/`, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });
      const html = await res.text();
      
      // ISOLATE CORE CONTENT to avoid header/footer nav links
      const h1Idx = html.toLowerCase().indexOf('<h1');
      let coreHtml = h1Idx > -1 ? html.substring(h1Idx) : html;
      const footerIdx = coreHtml.toLowerCase().indexOf('<footer');
      if (footerIdx > -1) coreHtml = coreHtml.substring(0, footerIdx);
      
      const titleMatch = coreHtml.match(/<h1[^>]*>(.*?)<\/h1>/is);
      const rawTitle = titleMatch ? titleMatch[1] : route.replace(/\//g, '').split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      const title = rawTitle.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
      
      const subMatch = coreHtml.match(/<h2[^>]*>(.*?)<\/h2>/is);
      const subtitle = subMatch ? subMatch[1].replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim() : '';
      
      // Find valid description paragraphs (longer than 60 chars, not containing nav patterns)
      const pMatches = [...coreHtml.matchAll(/<p[^>]*>(.*?)<\/p>/gis)]
        .map(m => m[1].replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim())
        .filter(p => p.length > 60 && !p.includes('HomeOur Solutions') && !p.includes('About usContact'));
        
      const description = pMatches.length > 0 ? pMatches[0] : 'Transform your business with our advanced digital solutions tailored to your unique operational needs.';
      
      // Extract benefits (prioritize H4 titles used by excellifes, fallback to generic list items)
      const features = [];
      const isNoise = (str) => {
        const lower = str.toLowerCase();
        return [
          'choose', 'excellifes', 'excel lifes', 'contact', 'blog', 
          'read more', 'learn more', 'about us', 'get in touch', 'our solutions', 
          'services', 'home', 'business automation', 'digital marketing'
        ].some(w => lower.includes(w));
      };

      const h4Matches = [...coreHtml.matchAll(/<h4[^>]*>(.*?)<\/h4>/gis)]
        .map(m => m[1].replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim())
        .filter(l => l.length > 10 && l.length < 120 && !isNoise(l));
        
      const liMatches = [...coreHtml.matchAll(/<li[^>]*>(.*?)<\/li>/gis)]
        .map(m => m[1].replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim())
        .filter(l => l.length > 15 && l.length < 120 && !isNoise(l) && !l.toLowerCase().includes('management system'));
      
      if (h4Matches.length >= 3) {
        features.push(...h4Matches.slice(0, 6));
      } else if (liMatches.length >= 3) {
        features.push(...liMatches.slice(0, 6));
      } else {
        features.push('Real-time Tracking & Analytics', 'Seamless Integration', 'Automated Workflows', 'Expert Support Strategy');
      }

      const dirPath = path.join(baseDir, route);
      await fs.mkdir(dirPath, { recursive: true });
      await fs.writeFile(path.join(dirPath, 'page.tsx'), generatePageContent(title, subtitle, description, [...new Set(features)]));
      console.log(`Generated ${route} page correctly.`);
      
    } catch (e) {
      console.error(`Failed ${route}: `, e.message);
    }
    await new Promise(resolve => setTimeout(resolve, 500));
  }
}

scrapeAndGenerate();
