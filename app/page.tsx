import FadeIn from "@/components/FadeIn";
import { Camera, Drone, Clapperboard, MonitorPlay, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Replace src with your actual cinematic reel */}
        <div className="absolute inset-0 z-0 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-b after:from-brand-black/60 after:via-brand-black/40 after:to-brand-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-70"
          >
            <source src="/hero-reel.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
          <FadeIn direction="up">
            <h1 className="font-montserrat font-bold text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-6">
              Document. <br className="md:hidden" /> Create. Inspire.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2} direction="up">
            <p className="font-inter text-lg md:text-xl text-brand-softGray max-w-2xl mx-auto mb-10 opacity-90">
              Creative Visual Production for individuals, communities, UMKM, and businesses.
            </p>
          </FadeIn>
          <FadeIn delay={0.4} direction="up">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-brand-orange hover:bg-brand-lightOrange text-white font-inter font-medium px-8 py-4 rounded-[16px] transition-all w-full sm:w-auto transform hover:scale-105">
                Book a Project
              </button>
              <button className="bg-brand-darkGray/40 backdrop-blur-md border border-white/20 hover:border-brand-orange text-white font-inter font-medium px-8 py-4 rounded-[16px] transition-all w-full sm:w-auto group">
                View Portfolio <ArrowRight className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. TRUST SECTION */}
      <section className="border-y border-white/5 bg-brand-black py-6">
        <div className="max-w-7xl mx-auto px-6 flex overflow-x-auto whitespace-nowrap gap-12 hide-scrollbar opacity-70 hover:opacity-100 transition-opacity duration-500">
          {[
            "100+ Projects Completed",
            "Fast Delivery",
            "Professional Workflow",
            "Drone Services",
            "Creative Storytelling"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 font-montserrat font-semibold text-sm uppercase tracking-widest text-brand-softGray">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-16 text-center">Our Expertise</h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-brand-darkGray rounded-[16px] p-8 border border-white/5 hover:border-brand-orange/50 transition-all group relative overflow-hidden h-full flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 blur-[50px] -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-orange/20 transition-all"></div>
                <div>
                  <div className="text-brand-orange mb-6">{service.icon}</div>
                  <h3 className="font-montserrat font-bold text-xl text-white mb-3">{service.title}</h3>
                  <p className="font-inter text-brand-softGray/70 text-sm leading-relaxed">{service.desc}</p>
                </div>
                <button className="text-brand-orange font-inter text-sm font-medium mt-8 flex items-center opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 4. PRICING PREVIEW */}
      <section className="py-24 bg-brand-darkGray/30 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-4">Transparent Pricing</h2>
              <p className="font-inter text-brand-softGray/70">Premium quality tailored to your needs.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING.map((tier, index) => (
              <FadeIn key={index} delay={index * 0.2}>
                <div className={`rounded-[16px] p-8 relative ${tier.popular ? 'bg-brand-darkGray border-2 border-brand-orange' : 'bg-brand-black border border-white/10'}`}>
                  {tier.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-montserrat font-bold text-2xl text-white mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-white mb-6 font-inter">{tier.price}</div>
                  <div className="h-px w-full bg-white/10 mb-6"></div>
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feat, i) => (
                      <li key={i} className="flex items-start text-sm text-brand-softGray/80 font-inter">
                        <span className="text-brand-orange mr-3">✓</span> {feat}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-[12px] font-inter font-medium transition-all ${tier.popular ? 'bg-brand-orange text-white hover:bg-brand-lightOrange' : 'bg-white/5 text-white hover:bg-white/10'}`}>
                    Choose Package
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

// Data Arrays for Clean Code
const SERVICES = [
  { title: "Graduation", desc: "Cinematic documentation of your proudest moments with premium color grading.", icon: <Camera size={32} strokeWidth={1.5} /> },
  { title: "Commercial Ads", desc: "High-conversion product videos and promotional content for modern brands.", icon: <MonitorPlay size={32} strokeWidth={1.5} /> },
  { title: "Event Aftermovie", desc: "Dynamic, fast-paced event coverage that captures the true energy of the crowd.", icon: <Clapperboard size={32} strokeWidth={1.5} /> },
  { title: "Drone Coverage", desc: "Breathtaking 4K aerial videography for travel, real estate, and company profiles.", icon: <Drone size={32} strokeWidth={1.5} /> },
];

const PRICING = [
  { name: "Graduation", price: "Start from Rp X", popular: false, features: ["1 Hour Session", "50 Edited Photos", "1 Cinematic Teaser (1 Min)", "Google Drive Delivery"] },
  { name: "Commercial & UMKM", price: "Custom Quote", popular: true, features: ["Concept & Storyboarding", "Professional Lighting Setup", "Social Media Optimized Ratios", "Premium Color Grading"] },
  { name: "Event Coverage", price: "Start from Rp Y", popular: false, features: ["Half/Full Day Coverage", "Multi-camera Setup", "Raw Files Included", "Next-Day Teaser Delivery"] },
];
