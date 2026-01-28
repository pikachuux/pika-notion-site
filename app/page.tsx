import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, LayoutTemplate, Zap, Microscope, Trophy, Mail, Calendar } from "lucide-react";

// --- DYNAMIC DATA: THE HIGH TICKET TRIO (IMAGES) ---
const FEATURED_PRODUCTS = [
  {
    title: "The Custom Home Builder Agency OS",
    price: "$147",
    description: "Manage million-dollar builds with precision. Track subcontractors, permits, material budgets, and construction timelines.",
    image: "/Custom Home Builder Tumbnail 2.png", // Keeping your filename exactly as is
    link: "https://pikachuux.gumroad.com/l/wpojp?layout=profile" 
  },
  {
    title: "The Marketing Agency OS",
    price: "$147",
    description: "The complete operating system for digital agencies. Manage client retainers, campaign sprints, and creative assets.",
    image: "/The marketing agency os tumbnail.png", // Keeping your filename exactly as is
    link: "https://pikachuux.gumroad.com/l/hcigl?layout=profile"
  },
  {
    title: "The Auto Shop Manager OS",
    price: "$147",
    description: "Optimize your garage operations. Track repair orders, parts inventory, and mechanic labor hours efficiently.",
    image: "/The Auto Shop Manager OS Tumbnail.png", // Keeping your filename exactly as is
    link: "https://pikachuux.gumroad.com/l/geaqwy?layout=profile"
  }
];

export default function Home() {
  return (
    // ADDED: scroll-smooth for nice animation when clicking links
    <div className="min-h-screen bg-[#0a0a0a] text-slate-50 selection:bg-yellow-500 selection:text-black font-sans scroll-smooth">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto flex items-center justify-between py-4 px-6 relative">
          
          <div className="flex items-center gap-2">
            <div className="relative h-9 w-9 overflow-hidden rounded-full border border-white/10">
               <Image 
                src="/logo.png" 
                alt="Pika Notion Logo" 
                fill 
                className="object-cover"
              />
            </div>
            <span className="font-bold text-lg tracking-tight">Pika Notion</span>
          </div>

          <div className="hidden md:flex items-center gap-12 absolute left-1/2 transform -translate-x-1/2">
            {/* FIX: Changed Link to <a> to force browser jump behavior */}
            <a href="#templates" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
              Templates
            </a>
            <a href="#services" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
              Services
            </a>
            <a href="#about" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
              About
            </a>
          </div>

          <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold h-9 px-4 text-sm">
            <Link href="https://cal.com/pika-notion/15min" target="_blank">
              Book a Call
            </Link>
          </Button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 flex flex-col items-center text-center px-4 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
          Turn Chaos into Clarity with <br />
          <span className="text-yellow-400">Engineering-Grade Systems</span>
        </h1>
        
        <p className="max-w-2xl text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
          Stop using Notion like a glorified notepad. I build scalable, interconnected workspaces for agencies and creators.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Button asChild size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold h-12 px-8 text-base">
            <Link href="https://cal.com/pika-notion/15min" target="_blank">
              Book a Free Audit <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          
          <Button asChild size="lg" variant="outline" className="border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white h-12 px-8 text-base bg-transparent">
            {/* FIX: Changed Link to <a> here as well */}
            <a href="#templates">
              View Templates
            </a>
          </Button>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      {/* ADDED: scroll-mt-24 to fix navbar overlap */}
      <section id="services" className="py-32 relative scroll-mt-24">
        <div className="container mx-auto px-4">
          
          <div className="flex flex-col items-center mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">How I Can Help You</h2>
            <p className="text-slate-400 text-xl max-w-2xl font-light">
              Simple solutions for complex problems. Here is exactly what I do.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Custom Systems */}
            <Card className="bg-[#111] border-white/5 hover:border-yellow-400/50 transition-all duration-300 flex flex-col group py-4">
              <CardHeader>
                <div className="h-14 w-14 rounded-xl bg-yellow-400/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="h-8 w-8 text-yellow-400" />
                </div>
                <CardTitle className="text-3xl font-bold text-white mb-2">Custom Systems</CardTitle>
                <CardDescription className="text-lg text-slate-400 leading-relaxed">
                  I build your entire workspace from scratch. You tell me how you run your business, and I create a system that fits it perfectly.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                 <ul className="text-base font-medium text-slate-300 space-y-4 mb-4">
                    <li className="flex items-center gap-3"><div className="h-2 w-2 bg-yellow-400 rounded-full"/> I design the structure</li>
                    <li className="flex items-center gap-3"><div className="h-2 w-2 bg-yellow-400 rounded-full"/> I automate the boring tasks</li>
                    <li className="flex items-center gap-3"><div className="h-2 w-2 bg-yellow-400 rounded-full"/> I teach your team how to use it</li>
                 </ul>
              </CardContent>
              <CardFooter className="pt-6">
                <Button size="lg" className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-lg h-12" asChild>
                    <Link href="https://cal.com/pika-notion/15min" target="_blank">Book Consultation</Link>
                </Button>
              </CardFooter>
            </Card>
            
            {/* Ready Templates */}
            <Card className="bg-[#111] border-white/5 hover:border-yellow-400/50 transition-all duration-300 flex flex-col group py-4">
              <CardHeader>
                <div className="h-14 w-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <LayoutTemplate className="h-8 w-8 text-blue-400" />
                </div>
                <CardTitle className="text-3xl font-bold text-white mb-2">Ready Templates</CardTitle>
                <CardDescription className="text-lg text-slate-400 leading-relaxed">
                  Don't want to wait? Download a pre-built system for your industry and start organizing your work immediately.
                </CardDescription>
              </CardHeader>
               <CardContent className="flex-grow">
                 <ul className="text-base font-medium text-slate-300 space-y-4 mb-4">
                    <li className="flex items-center gap-3"><div className="h-2 w-2 bg-blue-400 rounded-full"/> Instant Download</li>
                    <li className="flex items-center gap-3"><div className="h-2 w-2 bg-blue-400 rounded-full"/> Includes Video Tutorials</li>
                    <li className="flex items-center gap-3"><div className="h-2 w-2 bg-blue-400 rounded-full"/> Easy to Customize</li>
                 </ul>
              </CardContent>
              <CardFooter className="pt-6">
                <Button size="lg" className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-lg h-12" asChild>
                    {/* FIX: Changed to <a> to fix scrolling */}
                    <a href="#templates">View Products</a>
                </Button>
              </CardFooter>
            </Card>

            {/* Fixes & Coaching */}
            <Card className="bg-[#111] border-white/5 hover:border-yellow-400/50 transition-all duration-300 flex flex-col group py-4">
              <CardHeader>
                <div className="h-14 w-14 rounded-xl bg-green-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Microscope className="h-8 w-8 text-green-400" />
                </div>
                <CardTitle className="text-3xl font-bold text-white mb-2">Fixes & Coaching</CardTitle>
                <CardDescription className="text-lg text-slate-400 leading-relaxed">
                  Stuck? I will hop on a call to fix your broken Notion pages, speed up your slow databases, or teach you how to use Notion.
                </CardDescription>
              </CardHeader>
               <CardContent className="flex-grow">
                 <ul className="text-base font-medium text-slate-300 space-y-4 mb-4">
                    <li className="flex items-center gap-3"><div className="h-2 w-2 bg-green-400 rounded-full"/> I fix errors</li>
                    <li className="flex items-center gap-3"><div className="h-2 w-2 bg-green-400 rounded-full"/> I make it faster</li>
                    <li className="flex items-center gap-3"><div className="h-2 w-2 bg-green-400 rounded-full"/> I answer your questions</li>
                 </ul>
              </CardContent>
              <CardFooter className="pt-6">
                <Button size="lg" className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-lg h-12" asChild>
                    <Link href="https://cal.com/pika-notion/15min" target="_blank">Book Session</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* --- FEATURED TEMPLATES (Updated to Centered Layout) --- */}
      <section id="templates" className="py-24 bg-[#0f0f0f] border-t border-white/5 scroll-mt-24">
        <div className="container mx-auto px-4">
           
           {/* CHANGED: Now centered to match the 'Services' section above */}
           <div className="flex flex-col items-center text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Products</h2>
              <p className="text-slate-400 text-lg mb-8 max-w-2xl">
                Skip the build time. Download a proven system and start today.
              </p>
              
              <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold px-8">
                <Link href="https://pikachuux.gumroad.com" target="_blank">
                  View Full Catalog <ArrowRight className="ml-2 h-4 w-4"/>
                </Link>
              </Button>
           </div>

           <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {FEATURED_PRODUCTS.map((product, index) => (
                <div key={index} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] hover:border-yellow-400/50 transition-all flex flex-col">
                  {/* IMAGE CONTAINER */}
                  <div className="relative aspect-square w-full bg-slate-800 overflow-hidden">
                      <Image 
                        src={product.image} 
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                        <span className="text-yellow-400 font-bold text-lg">{product.price}</span>
                        <Button asChild size="sm" className="bg-white text-black hover:bg-slate-200">
                          <Link href={product.link} target="_blank">Get it Now</Link>
                        </Button>
                    </div>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      {/* ADDED: scroll-mt-24 to fix navbar overlap */}
      <section id="about" className="py-24 border-t border-white/5 bg-[#0a0a0a] scroll-mt-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col items-center text-center space-y-8">
            
            <div className="inline-flex items-center gap-3 bg-yellow-400/10 border border-yellow-400 text-yellow-400 px-6 py-2 rounded-full shadow-[0_0_20px_rgba(250,204,21,0.2)]">
               <Trophy className="h-6 w-6 fill-yellow-400" />
               <span className="text-lg font-bold tracking-wide uppercase">Notion Certified Admin</span>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              I’ve Built Systems for <span className="text-yellow-400">Dozens of Businesses.</span> <br/>
              Yours is Next.
            </h3>
            
            <p className="text-slate-300 leading-relaxed text-xl max-w-3xl font-light">
              I don't just build pages; I engineer <strong className="text-white font-semibold">business operating systems.</strong> I replace chaotic spreadsheets with fully interconnected, database-driven architectures. 
              My systems don't just sit there—they actively manage your workflows, <strong className="text-white font-semibold">automate your busywork</strong>, and scale with your company.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 w-full border-t border-white/5 mt-8">
              <div className="flex flex-col items-center">
                 <span className="text-4xl font-bold text-white mb-1">20+</span>
                 <span className="text-slate-500 text-sm font-medium uppercase tracking-wider">Clients Served</span>
              </div>
              <div className="flex flex-col items-center">
                 <span className="text-4xl font-bold text-white mb-1">50+</span>
                 <span className="text-slate-500 text-sm font-medium uppercase tracking-wider">Projects Built</span>
              </div>
              <div className="flex flex-col items-center">
                 <span className="text-4xl font-bold text-white mb-1">100%</span>
                 <span className="text-slate-500 text-sm font-medium uppercase tracking-wider">Custom Architecture</span>
              </div>
              <div className="flex flex-col items-center">
                 <span className="text-4xl font-bold text-white mb-1">∞</span>
                 <span className="text-slate-500 text-sm font-medium uppercase tracking-wider">Ongoing Support</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- CONTACT / FOOTER SECTION --- */}
      <footer className="py-20 bg-[#0a0a0a] border-t border-white/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          
          <h4 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start?</h4>
          <p className="text-slate-400 mb-12 text-lg">
            Choose the best way to get in touch. Whether you want to jump on a call or write a detailed email, I'm here to listen.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="bg-[#111] p-8 rounded-2xl border border-white/5 hover:border-yellow-400/30 transition-colors">
               <div className="h-12 w-12 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-6 w-6 text-yellow-400" />
               </div>
               <h5 className="text-xl font-bold text-white mb-2">Book a Call</h5>
               <p className="text-slate-400 text-sm mb-6">Best for discussing complex projects or getting immediate answers.</p>
               <Button asChild className="w-full bg-yellow-400 text-black hover:bg-yellow-500 font-bold">
                 <Link href="https://cal.com/pika-notion/15min" target="_blank">Select a Time</Link>
               </Button>
            </div>

            <div className="bg-[#111] p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-colors">
               <div className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-white" />
               </div>
               <h5 className="text-xl font-bold text-white mb-2">Send an Email</h5>
               <p className="text-slate-400 text-sm mb-6">Prefer to write? Send me your requirements and I'll respond within 24h.</p>
               <Button asChild variant="outline" className="w-full border-slate-700 text-white hover:bg-slate-800 hover:text-white bg-transparent">
                 <Link href="mailto:contact@pikanotion.com">contact@pikanotion.com</Link>
               </Button>
            </div>
          </div>

          <div className="text-slate-600 text-sm pt-8 border-t border-white/5">
            <p>© 2026 Pika Notion. All rights reserved.</p>
            <div className="flex justify-center gap-6 mt-4">
               {/* UPDATED FOOTER EMAIL LINK */}
               <a href="mailto:contact@pikanotion.com" className="hover:text-white transition-colors">contact@pikanotion.com</a>
               <Link href="https://x.com/Fehmiyoussef2" target="_blank" className="hover:text-white transition-colors">Twitter (X)</Link>
               <Link href="https://youtube.com/@Pika_Notion" target="_blank" className="hover:text-white transition-colors">YouTube</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}