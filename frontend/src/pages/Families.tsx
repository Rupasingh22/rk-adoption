import {
  Heart,
  Users,
  Home,
  ShieldCheck,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Star,
  PhoneCall,
  Compass,
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';

export default function Families() {
  return (
    <div className="rk-families-gateway font-sans text-[#1E293B] antialiased bg-[#FAF8F5]">
      <style>{`
        .font-serif-gateway {
          font-family: 'Cormorant Garamond', Georgia, serif;
          letter-spacing: -0.015em;
        }

        .rk-portal-card {
          background: #FFFFFF;
          border: 1px solid #EAE4D9;
          box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.04);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .rk-portal-card:hover {
          box-shadow: 0 20px 40px -4px rgba(15, 23, 42, 0.1);
          border-color: #D3C9BC;
          transform: translateY(-2px);
        }
      `}</style>

      {/* ── BREADCRUMB STRIP ── */}
      <div className="bg-[#F3EFEA] border-b border-[#EAE4D9] py-3.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-[#64748B]">
          <div className="flex items-center gap-2">
            <a href="/" className="hover:text-[#0E1726] transition-colors">Home</a>
            <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8]" />
            <span className="text-[#0E1726] font-semibold">Families</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[#475569]">
            <HeartHandshake className="w-3.5 h-3.5 text-[#D97706]" />
            <span>Dedicated Family Support Hotline: <strong>+1 (800) 123-4567</strong></span>
          </div>
        </div>
      </div>

      {/* ── EDITORIAL GATEWAY HERO ── */}
      <section className="relative pt-16 pb-20 bg-gradient-to-b from-[#F3EFEA] via-[#FAF8F5] to-[#FAF8F5] border-b border-[#EAE4D9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEF3C7] border border-[#D97706]/30 text-xs font-semibold text-[#B45309]">
            <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
            <span>The Adoption Constellation: Three Distinct Journeys, One Sacred Trust</span>
          </div>

          <h1 className="font-serif-gateway text-4xl sm:text-5xl lg:text-6xl text-[#0E1726] font-normal leading-tight max-w-4xl mx-auto">
            Honoring Every Heart in the{' '}
            <span className="italic text-[#D97706] underline decoration-[#D97706]/35 underline-offset-8">
              Adoption Circle
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-light max-w-3xl mx-auto">
            Adoption is not a one-sided transaction; it is a lifelong triad connecting prospective parents, courageous birth families, and growing adoptive households. Explore the dedicated portal designed specifically for your unique path:
          </p>
        </div>
      </section>

      {/* ── THE THREE DEDICATED PORTALS ── */}
      <section className="py-20 bg-white border-b border-[#EAE4D9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* PORTAL 1: PROSPECTIVE PARENTS */}
            <div className="rk-portal-card rounded-3xl p-8 flex flex-col justify-between space-y-8">
              <div className="space-y-5">
                <div className="w-14 h-14 rounded-2xl bg-[#FEF3C7] text-[#B45309] flex items-center justify-center">
                  <Heart className="w-7 h-7" />
                </div>
                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#D97706]">
                  Pathway 01 · Starting Out
                </div>
                <h2 className="font-serif-gateway text-3xl text-[#0E1726]">
                  Prospective Adoptive Parents
                </h2>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  For individuals and couples exploring adoption. Compare domestic, foster, and international pathways, assess family readiness, and prepare your heart and home.
                </p>

                <ul className="space-y-2 text-xs text-[#334155] pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0" />
                    <span>Adoption pathways comparison matrix</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0" />
                    <span>Readiness self-reflection checklists</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0" />
                    <span>Orientation webinar registration</span>
                  </li>
                </ul>
              </div>

              <a 
                href="/families/prospective"
                className="w-full py-4 px-6 rounded-2xl bg-[#0E1726] text-white hover:bg-[#1E293B] text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <span>Enter Prospective Parents Portal</span>
                <ArrowRight className="w-4 h-4 text-[#D97706]" />
              </a>
            </div>

            {/* PORTAL 2: BIRTH FAMILIES */}
            <div className="rk-portal-card rounded-3xl p-8 flex flex-col justify-between space-y-8 border-[#EBDED6]">
              <div className="space-y-5">
                <div className="w-14 h-14 rounded-2xl bg-[#FDF3F1] text-[#C05646] flex items-center justify-center">
                  <Users className="w-7 h-7" />
                </div>
                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C05646]">
                  Pathway 02 · Unconditional Respect
                </div>
                <h2 className="font-serif-gateway text-3xl text-[#1C2826]">
                  Expectant & Birth Families
                </h2>
                <p className="text-xs text-[#526360] leading-relaxed">
                  Facing an unexpected pregnancy or exploring options? Receive free, confidential, non-coercive support, learn about your legal rights, and explore open adoption plans.
                </p>

                <ul className="space-y-2 text-xs text-[#334155] pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C05646] shrink-0" />
                    <span>Birth Parent Bill of Rights</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C05646] shrink-0" />
                    <span>The Spectrum of Openness selector</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C05646] shrink-0" />
                    <span>24/7 confidential call & text line</span>
                  </li>
                </ul>
              </div>

              <a 
                href="/families/birth"
                className="w-full py-4 px-6 rounded-2xl bg-[#8D3A2C] text-white hover:bg-[#A64737] text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <span>Enter Birth Families Portal</span>
                <ArrowRight className="w-4 h-4 text-[#FDE8E5]" />
              </a>
            </div>

            {/* PORTAL 3: ADOPTIVE FAMILIES */}
            <div className="rk-portal-card rounded-3xl p-8 flex flex-col justify-between space-y-8 border-[#EAE4D9]">
              <div className="space-y-5">
                <div className="w-14 h-14 rounded-2xl bg-[#EDF4F1] text-[#1D4B3E] flex items-center justify-center">
                  <Home className="w-7 h-7" />
                </div>
                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#1D4B3E]">
                  Pathway 03 · Lifelong Partnership
                </div>
                <h2 className="font-serif-gateway text-3xl text-[#13332A]">
                  Post-Placement Adoptive Families
                </h2>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  For families who have completed their adoption. Access clinical trauma-informed attachment guidance, school advocacy, age-by-age developmental milestones, and parent cohorts.
                </p>

                <ul className="space-y-2 text-xs text-[#334155] pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1D4B3E] shrink-0" />
                    <span>Developmental stages navigator</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1D4B3E] shrink-0" />
                    <span>Therapeutic de-escalation scripts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1D4B3E] shrink-0" />
                    <span>Peer coffee circles & teen mentors</span>
                  </li>
                </ul>
              </div>

              <a 
                href="/families/adoptive"
                className="w-full py-4 px-6 rounded-2xl bg-[#13332A] text-white hover:bg-[#1D4B3E] text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <span>Enter Adoptive Families Portal</span>
                <ArrowRight className="w-4 h-4 text-[#F1A362]" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── ETHICAL CORNERSTONE SECTION ── */}
      <section className="py-20 bg-[#FAF8F5] border-b border-[#EAE4D9]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-white border border-[#EAE4D9] flex items-center justify-center mx-auto text-[#D97706]">
            <Compass className="w-6 h-6" />
          </div>

          <h3 className="font-serif-gateway text-3xl sm:text-4xl text-[#0E1726]">
            The RK-Adoption Triad Standard
          </h3>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-light">
            We believe that adoption is strongest when all three sides of the constellation are treated with equal honor, statutory transparency, and lifelong clinical care. Children thrive when their adoptive parents hold deep, compassionate reverence for their biological roots.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-semibold text-[#0E1726]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#1D4B3E]" />
              Hague Convention Accredited
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-[#D97706]" />
              TBRI® Trauma-Informed Preparation
            </span>
            <span className="flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-[#C05646]" />
              Zero-Coercion Birth Parent Rights
            </span>
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="py-20 bg-[#0E1726] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs uppercase font-semibold tracking-wider text-[#F59E0B]">
            Need Confidential Guidance?
          </span>
          <h2 className="font-serif-gateway text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
            Our Family Advisors Are Here to Assist You
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
            Reach out to our intake department for an introductory orientation or immediate birth parent counseling.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a 
              href="tel:+18001234567" 
              className="px-8 py-4 rounded-xl bg-[#D97706] hover:bg-[#B45309] text-white font-semibold text-sm transition-colors flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call +1 (800) 123-4567</span>
            </a>
            <a 
              href="/contact" 
              className="px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 text-sm font-medium transition-colors"
            >
              <span>Send Confidential Message</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
