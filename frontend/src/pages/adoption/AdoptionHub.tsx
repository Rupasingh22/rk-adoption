import { useState } from 'react';
import {
  Heart,
  Baby,
  BookOpen,
  ClipboardList,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Users,
  ChevronRight,
  Home
} from 'lucide-react';

export default function AdoptionHub() {
  // Interactive Pathway Finder State
  const [selectedChildAge, setSelectedChildAge] = useState<'infant' | 'older' | 'siblings' | 'open'>('open');
  const [selectedTimeline, setSelectedTimeline] = useState<'flexible' | 'urgent' | 'moderate'>('moderate');
  const [selectedLocation, setSelectedLocation] = useState<'domestic' | 'international' | 'either'>('either');

  // Calculate recommendation based on selections
  const getRecommendation = () => {
    if (selectedChildAge === 'siblings' || selectedChildAge === 'older') {
      return {
        pathway: 'Foster-to-Adopt / Waiting Children Placement',
        timeline: '8 – 14 Months',
        idealFor: 'Families with deep emotional reserves, ready to embrace children who need immediate stability and sibling unification.',
        href: '/adoption/children',
        badge: 'Highest Community Need'
      };
    }
    if (selectedLocation === 'international') {
      return {
        pathway: 'Hague Convention Intercountry Adoption',
        timeline: '18 – 30 Months',
        idealFor: 'Families open to cross-border placement with international travel, embracing transcultural heritage and bilateral legal processes.',
        href: '/adoption/types',
        badge: 'Global Intercountry Pathway'
      };
    }
    return {
      pathway: 'Domestic Open & Semi-Open Adoption',
      timeline: '12 – 24 Months',
      idealFor: 'Families seeking domestic infant or toddler placement, with a collaborative relationship of mutual respect with birth parents.',
      href: '/adoption/types',
      badge: 'Domestic Family Pathway'
    };
  };

  const recommendation = getRecommendation();

  return (
    <div className="rk-adopt-hub-container font-sans text-[#1A202C] antialiased bg-[#FCFBF7]">
      {/* 
        ========================================================================
        PAGE-SPECIFIC STYLES: "Royal Amethyst & Sunlit Champagne"
        - Amethyst Primary: #6B2D5C / #8B3A78 / #522146
        - Sunlit Champagne: #D49B42 / #E8B668 / #B87F28
        - Royal Obsidian: #0C131F / #111C2E / #19273E
        - Canvas: #FCFBF7 / #F6F4ED / #FFFFFF
        ========================================================================
      */}
      <style>{`
        .rk-adopt-hub-container {
          --rk-amethyst-900: #522146;
          --rk-amethyst-800: #6B2D5C;
          --rk-amethyst-700: #8B3A78;
          --rk-amethyst-50:  #FDF6FA;
          --rk-champagne-600: #B87F28;
          --rk-champagne-500: #D49B42;
          --rk-champagne-400: #E8B668;
          --rk-champagne-50:  #FDF8EE;
          --rk-obsidian-900: #0C131F;
          --rk-obsidian-800: #111C2E;
          --rk-obsidian-700: #19273E;
          --rk-silk-border: #E8E2D5;
          --rk-canvas-bg: #FCFBF7;
        }

        .font-serif-luxury {
          font-family: 'Cormorant Garamond', Georgia, serif;
          letter-spacing: -0.02em;
        }

        .rk-luxury-glass {
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(16px);
          border: 1px solid var(--rk-silk-border);
          box-shadow: 0 10px 30px -4px rgba(12, 19, 31, 0.05), 0 2px 8px -2px rgba(12, 19, 31, 0.03);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .rk-luxury-glass:hover {
          box-shadow: 0 20px 48px -6px rgba(12, 19, 31, 0.1), 0 6px 16px -2px rgba(12, 19, 31, 0.05);
          border-color: #D6CCA8;
        }

        .rk-btn-amethyst {
          background: linear-gradient(135deg, #6B2D5C 0%, #522146 100%);
          color: #FFFFFF;
          box-shadow: 0 4px 18px 0 rgba(107, 45, 92, 0.32);
          transition: all 0.3s ease;
        }

        .rk-btn-amethyst:hover {
          background: linear-gradient(135deg, #7D346C 0%, #602752 100%);
          transform: translateY(-1.5px);
          box-shadow: 0 8px 26px 0 rgba(107, 45, 92, 0.44);
        }

        .rk-btn-champagne {
          background: linear-gradient(135deg, #D49B42 0%, #B87F28 100%);
          color: #FFFFFF;
          box-shadow: 0 4px 18px 0 rgba(212, 155, 66, 0.3);
          transition: all 0.3s ease;
        }

        .rk-btn-champagne:hover {
          background: linear-gradient(135deg, #E0A64C 0%, #C4892E 100%);
          transform: translateY(-1.5px);
          box-shadow: 0 8px 24px 0 rgba(212, 155, 66, 0.42);
        }

        .rk-glow-radial {
          background: radial-gradient(circle at 50% 50%, rgba(212, 155, 66, 0.12) 0%, transparent 70%);
        }

        .rk-hero-grid {
          background-image: radial-gradient(rgba(107, 45, 92, 0.06) 1px, transparent 1px);
          background-size: 24px 24px;
        }
      `}</style>

      {/* ── BREADCRUMB NAVIGATION ── */}
      <div className="bg-[#F6F4ED] border-b border-[#E8E2D5] py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#718096]">
          <a href="/" className="hover:text-[#0C131F] transition-colors">Home</a>
          <ChevronRight className="w-3.5 h-3.5 text-[#A0AEC0]" />
          <span className="text-[#6B2D5C] font-semibold">Adoption Overview</span>
        </div>
      </div>

      {/* ── SECTION 1: CINEMATIC EDITORIAL HERO ── */}
      <section className="relative pt-16 pb-24 overflow-hidden bg-gradient-to-b from-[#F6F4ED] via-[#FCFBF7] to-[#FCFBF7] border-b border-[#E8E2D5] rk-hero-grid">
        {/* Ambient atmospheric glows */}
        <div className="absolute top-0 right-10 w-[550px] h-[550px] rk-glow-radial pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-7">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FDF6FA] border border-[#6B2D5C]/25 text-xs font-semibold text-[#6B2D5C]">
                <Heart className="w-3.5 h-3.5 fill-[#6B2D5C]" />
                <span>The Sacred Journey of Forever Belonging</span>
              </div>

              <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#0C131F] font-normal leading-[1.12]">
                Guiding Compassionate Hearts Home to Awaiting{' '}
                <span className="italic text-[#6B2D5C] underline decoration-[#D49B42]/50 decoration-2 underline-offset-8">
                  Children
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed font-light max-w-2xl">
                RK-Adoption unites prospective adoptive families with children in need of permanent, loving homes. Rooted in trauma-informed social care, uncompromised child dignity, and ironclad statutory standards across domestic and international legal frameworks.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a 
                  href="/adoption/children" 
                  className="rk-btn-amethyst px-8 py-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 text-center"
                >
                  <Baby className="w-4 h-4" />
                  <span>Explore Children Waiting</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a 
                  href="/adoption/types" 
                  className="px-7 py-4 rounded-xl bg-white border border-[#E8E2D5] text-[#0C131F] hover:bg-[#F6F4ED] font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-xs text-center"
                >
                  <BookOpen className="w-4 h-4 text-[#D49B42]" />
                  <span>Compare Adoption Types</span>
                </a>
              </div>

              {/* Verified Trust Metrics */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#E8E2D5] max-w-xl">
                <div>
                  <div className="text-2xl font-semibold text-[#0C131F] tracking-tight">12,400+</div>
                  <div className="text-xs text-[#718096] mt-0.5">Placements Finalized</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-[#0C131F] tracking-tight">100%</div>
                  <div className="text-xs text-[#718096] mt-0.5">Judicially Audited</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-[#0C131F] tracking-tight">40+</div>
                  <div className="text-xs text-[#718096] mt-0.5">Sovereign Jurisdictions</div>
                </div>
              </div>
            </div>

            {/* Right Cinematic Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#E8E2D5]">
                  <img 
                    src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=1000&q=80" 
                    alt="Adoptive mother and father holding their young child with joyous expressions"
                    className="w-full h-[480px] object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C131F]/85 via-transparent to-transparent" />
                  
                  {/* Photo Overlay Badge */}
                  <div className="absolute bottom-6 left-6 right-6 text-white p-5 rounded-2xl bg-[#0C131F]/80 backdrop-blur-md border border-white/10">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#E8B668] block mb-1">
                      Child Welfare Sanctuary
                    </span>
                    <p className="text-xs font-light text-slate-200 leading-relaxed">
                      "Adoption is an act of profound courage—acknowledging a child’s whole history while offering an unconditional forever."
                    </p>
                  </div>
                </div>

                {/* Floating micro trust card */}
                <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-[#E8E2D5] flex items-center gap-3 max-w-[240px]">
                  <div className="w-10 h-10 rounded-xl bg-[#FDF6FA] text-[#6B2D5C] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#0C131F]">Hague Aligned</div>
                    <div className="text-[11px] text-[#718096]">Zero Commercialization</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE 3 ADOPTION PORTALS GATEWAY ── */}
      <section className="py-24 bg-white border-b border-[#E8E2D5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#6B2D5C]">
              Adoption Pathways
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#0C131F] mt-2 mb-4 font-normal">
              Explore the Adoption Section Portals
            </h2>
            <p className="text-sm sm:text-base text-[#718096] font-light leading-relaxed">
              Every prospective family arrives with unique capacities, hopes, and readiness. Explore our three dedicated adoption destinations:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Portal 1: Children Available */}
            <a 
              href="/adoption/children" 
              className="rk-luxury-glass rounded-3xl p-8 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#FDF6FA] text-[#6B2D5C] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Baby className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#6B2D5C] block">
                  Portal 01 • Ethical Matching
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#0C131F] group-hover:text-[#6B2D5C] transition-colors">
                  Children Available
                </h3>
                <p className="text-xs sm:text-sm text-[#718096] leading-relaxed font-light">
                  Learn how dignified, privacy-protected family matching works for awaiting infants, sibling pairs, older youth, and children with specialized medical needs.
                </p>
              </div>

              <div className="pt-8 mt-6 border-t border-[#E8E2D5] flex items-center justify-between text-xs font-semibold text-[#6B2D5C]">
                <span>View Matching Portal</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </a>

            {/* Portal 2: Types of Adoption */}
            <a 
              href="/adoption/types" 
              className="rk-luxury-glass rounded-3xl p-8 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#FDF8EE] text-[#D49B42] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BookOpen className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#D49B42] block">
                  Portal 02 • Legal Pathways
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#0C131F] group-hover:text-[#D49B42] transition-colors">
                  Types of Adoption
                </h3>
                <p className="text-xs sm:text-sm text-[#718096] leading-relaxed font-light">
                  A side-by-side comparison of Domestic Infant, Foster Care Adoption, Hague Intercountry treaties, Kinship care, and Sibling Group placements.
                </p>
              </div>

              <div className="pt-8 mt-6 border-t border-[#E8E2D5] flex items-center justify-between text-xs font-semibold text-[#D49B42]">
                <span>Compare All Types</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </a>

            {/* Portal 3: Eligibility Criteria */}
            <a 
              href="/adoption/eligibility" 
              className="rk-luxury-glass rounded-3xl p-8 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#F0F7F5] text-[#1B5E55] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ClipboardList className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#1B5E55] block">
                  Portal 03 • Self-Assessment
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#0C131F] group-hover:text-[#1B5E55] transition-colors">
                  Eligibility Criteria
                </h3>
                <p className="text-xs sm:text-sm text-[#718096] leading-relaxed font-light">
                  Explore statutory prerequisites including age limits, housing safety, background clearances, medical reviews, and take our interactive readiness check.
                </p>
              </div>

              <div className="pt-8 mt-6 border-t border-[#E8E2D5] flex items-center justify-between text-xs font-semibold text-[#1B5E55]">
                <span>Check Your Eligibility</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: INTERACTIVE "FIND YOUR ADOPTION PATHWAY" ENGINE ── */}
      <section className="py-24 bg-[#FCFBF7] border-b border-[#E8E2D5]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#D49B42]">
              Interactive Guidance Tool
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#0C131F] mt-2 mb-4 font-normal">
              Find the Adoption Pathway Suited to Your Family
            </h2>
            <p className="text-sm sm:text-base text-[#718096] font-light leading-relaxed">
              Answer three quick reflections below to receive instant guidance on the legal pathway that aligns with your family capacity:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Controls Column */}
            <div className="lg:col-span-7 space-y-6 rk-luxury-glass rounded-3xl p-8 border border-[#E8E2D5]">
              {/* Question 1: Child Age & Group */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#0C131F] block mb-3">
                  1. Child Age Profile & Family Capacity:
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    onClick={() => setSelectedChildAge('open')}
                    className={`p-3 rounded-xl text-left border text-xs transition-all ${
                      selectedChildAge === 'open' 
                        ? 'bg-[#6B2D5C] text-white border-[#6B2D5C] font-semibold' 
                        : 'bg-white text-[#4A5568] border-[#E8E2D5] hover:bg-[#F6F4ED]'
                    }`}
                  >
                    Open to All Ages (0–12 yrs)
                  </button>
                  <button
                    onClick={() => setSelectedChildAge('infant')}
                    className={`p-3 rounded-xl text-left border text-xs transition-all ${
                      selectedChildAge === 'infant' 
                        ? 'bg-[#6B2D5C] text-white border-[#6B2D5C] font-semibold' 
                        : 'bg-white text-[#4A5568] border-[#E8E2D5] hover:bg-[#F6F4ED]'
                    }`}
                  >
                    Infant / Toddler (0–3 yrs)
                  </button>
                  <button
                    onClick={() => setSelectedChildAge('siblings')}
                    className={`p-3 rounded-xl text-left border text-xs transition-all ${
                      selectedChildAge === 'siblings' 
                        ? 'bg-[#6B2D5C] text-white border-[#6B2D5C] font-semibold' 
                        : 'bg-white text-[#4A5568] border-[#E8E2D5] hover:bg-[#F6F4ED]'
                    }`}
                  >
                    Sibling Group (2+ children)
                  </button>
                  <button
                    onClick={() => setSelectedChildAge('older')}
                    className={`p-3 rounded-xl text-left border text-xs transition-all ${
                      selectedChildAge === 'older' 
                        ? 'bg-[#6B2D5C] text-white border-[#6B2D5C] font-semibold' 
                        : 'bg-white text-[#4A5568] border-[#E8E2D5] hover:bg-[#F6F4ED]'
                    }`}
                  >
                    Older Youth / Teen (8–17 yrs)
                  </button>
                </div>
              </div>

              {/* Question 2: Geography */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#0C131F] block mb-3">
                  2. Geographic Scope & Travel Flexibility:
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    onClick={() => setSelectedLocation('domestic')}
                    className={`p-3 rounded-xl text-center border text-xs transition-all ${
                      selectedLocation === 'domestic' 
                        ? 'bg-[#6B2D5C] text-white border-[#6B2D5C] font-semibold' 
                        : 'bg-white text-[#4A5568] border-[#E8E2D5] hover:bg-[#F6F4ED]'
                    }`}
                  >
                    Domestic Only
                  </button>
                  <button
                    onClick={() => setSelectedLocation('international')}
                    className={`p-3 rounded-xl text-center border text-xs transition-all ${
                      selectedLocation === 'international' 
                        ? 'bg-[#6B2D5C] text-white border-[#6B2D5C] font-semibold' 
                        : 'bg-white text-[#4A5568] border-[#E8E2D5] hover:bg-[#F6F4ED]'
                    }`}
                  >
                    Intercountry (Hague)
                  </button>
                  <button
                    onClick={() => setSelectedLocation('either')}
                    className={`p-3 rounded-xl text-center border text-xs transition-all ${
                      selectedLocation === 'either' 
                        ? 'bg-[#6B2D5C] text-white border-[#6B2D5C] font-semibold' 
                        : 'bg-white text-[#4A5568] border-[#E8E2D5] hover:bg-[#F6F4ED]'
                    }`}
                  >
                    Open to Either
                  </button>
                </div>
              </div>

              {/* Question 3: Timeline Expectations */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#0C131F] block mb-3">
                  3. Timeline Flexibility:
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    onClick={() => setSelectedTimeline('urgent')}
                    className={`p-3 rounded-xl text-center border text-xs transition-all ${
                      selectedTimeline === 'urgent' 
                        ? 'bg-[#6B2D5C] text-white border-[#6B2D5C] font-semibold' 
                        : 'bg-white text-[#4A5568] border-[#E8E2D5] hover:bg-[#F6F4ED]'
                    }`}
                  >
                    Ready ASAP
                  </button>
                  <button
                    onClick={() => setSelectedTimeline('moderate')}
                    className={`p-3 rounded-xl text-center border text-xs transition-all ${
                      selectedTimeline === 'moderate' 
                        ? 'bg-[#6B2D5C] text-white border-[#6B2D5C] font-semibold' 
                        : 'bg-white text-[#4A5568] border-[#E8E2D5] hover:bg-[#F6F4ED]'
                    }`}
                  >
                    Within 1–2 Years
                  </button>
                  <button
                    onClick={() => setSelectedTimeline('flexible')}
                    className={`p-3 rounded-xl text-center border text-xs transition-all ${
                      selectedTimeline === 'flexible' 
                        ? 'bg-[#6B2D5C] text-white border-[#6B2D5C] font-semibold' 
                        : 'bg-white text-[#4A5568] border-[#E8E2D5] hover:bg-[#F6F4ED]'
                    }`}
                  >
                    Patiently Flexible
                  </button>
                </div>
              </div>
            </div>

            {/* Dynamic Results Card */}
            <div className="lg:col-span-5">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#0C131F] text-white shadow-xl space-y-6 relative overflow-hidden">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#E8B668] text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{recommendation.badge}</span>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 block mb-1">
                    Recommended Pathway
                  </span>
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white">
                    {recommendation.pathway}
                  </h3>
                  <div className="text-xs text-[#E8B668] font-mono mt-1">
                    Typical Placement Timeframe: {recommendation.timeline}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {recommendation.idealFor}
                </p>

                <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                  <a
                    href={recommendation.href}
                    className="rk-btn-champagne py-3 px-6 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 text-center"
                  >
                    <span>Explore This Pathway in Depth</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="/contact"
                    className="py-2.5 px-6 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-medium text-center transition-colors"
                  >
                    Schedule Free Caseworker Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: THE SACRED TRIAD OF ETHICAL ADOPTION ── */}
      <section className="py-24 bg-white border-b border-[#E8E2D5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#6B2D5C]">
              The Adoption Triad
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#0C131F] mt-2 mb-4 font-normal">
              Respecting Every Voice in the Adoption Journey
            </h2>
            <p className="text-sm sm:text-base text-[#718096] font-light leading-relaxed">
              Ethical adoption is never one-sided. It is a lifelong covenant upholding the dignity, truth, and voice of all three members of the triad:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#FCFBF7] border border-[#E8E2D5] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FDF6FA] text-[#6B2D5C] flex items-center justify-center">
                <Heart className="w-6 h-6 fill-[#6B2D5C]" />
              </div>
              <h3 className="font-serif-luxury text-2xl text-[#0C131F]">
                1. The Child
              </h3>
              <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed font-light">
                The absolute focal point. Every child holds the sacred right to safety, emotional permanence, genetic truth, cultural continuity, and trauma-informed parental empathy.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#FCFBF7] border border-[#E8E2D5] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FDF8EE] text-[#D49B42] flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury text-2xl text-[#0C131F]">
                2. The Birth Family
              </h3>
              <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed font-light">
                Honored with lifelong dignity, free from coercion. Provided independent counseling, legal advocacy, and mutually agreed-upon updates or openness.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#FCFBF7] border border-[#E8E2D5] space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F0F7F5] text-[#1B5E55] flex items-center justify-center">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury text-2xl text-[#0C131F]">
                3. The Adoptive Parents
              </h3>
              <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed font-light">
                Prepared with therapeutic education, transparent legal guidance, and permanent community backing from the home study into teenage years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: FINAL INVITATION ── */}
      <section className="py-20 bg-[#0C131F] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs uppercase font-semibold tracking-wider text-[#E8B668]">
            Begin Your Inquiry
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
            Take Your First Confident Step with Our Caseworkers
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
            Our licensed social work team is honored to walk beside you, providing confidential, jurisdiction-specific answers without pressure.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a 
              href="/adoption/children" 
              className="rk-btn-champagne px-8 py-4 rounded-xl text-sm font-semibold flex items-center gap-2"
            >
              <span>Explore Children Waiting</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="/adoption/eligibility" 
              className="px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 text-sm font-medium transition-colors"
            >
              <span>Review Eligibility Criteria</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
