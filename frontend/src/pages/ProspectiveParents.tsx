import { useState } from 'react';
import {
  Heart,
  Compass,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  FileCheck,
  PhoneCall,
  Search,
  Check,
  Building,
  MapPin,
  Calendar
} from 'lucide-react';

interface Pathway {
  id: string;
  title: string;
  badge: string;
  duration: string;
  focus: string;
  description: string;
  idealFor: string;
  considerations: string[];
}

const ADOPTION_PATHWAYS: Pathway[] = [
  {
    id: 'domestic-infant',
    title: 'Domestic Infant Adoption',
    badge: 'Voluntary Relinquishment',
    duration: '12 – 24 Months',
    focus: 'Welcoming a newborn through open, cooperative partnership with birth parents.',
    description: 'In domestic infant adoption, expectant birth parents thoughtfully select and build a relationship with prospective adoptive families. You will participate in hospital planning and establish healthy, lifelong open communication.',
    idealFor: 'Families eager to welcome a child from birth and comfortable with ongoing, transparent open adoption communication.',
    considerations: [
      'Variable wait times depending on birth parent preferences and family openness',
      'Requires comfort with mutual sharing of milestones and updates with birth family',
      'Full legal certainty achieved following statutory birth parent revocation periods'
    ]
  },
  {
    id: 'foster-to-adopt',
    title: 'Foster-to-Adopt & Older Youth',
    badge: 'Child Welfare System',
    duration: '8 – 15 Months',
    focus: 'Providing permanent sanctuary to children whose parental rights are severed.',
    description: 'Over 100,000 children in state foster care systems await permanent families. These are predominantly older children (ages 6–17), sibling pairs, or children with medical needs who have experienced instability.',
    idealFor: 'Compassionate parents ready to meet children where they are, prioritize sibling bonds, and champion trauma-informed healing.',
    considerations: [
      'Children often carry developmental or emotional trauma from past instability',
      'Substantially lower agency costs with state subsidies and medical coverage provided',
      'Greatest societal need is for sibling pairs and teenage youth'
    ]
  },
  {
    id: 'intercountry',
    title: 'Hague Intercountry Adoption',
    badge: 'International Central Authority',
    duration: '18 – 36 Months',
    focus: 'Welcoming an orphaned or legally relinquished child from an accredited partner nation.',
    description: 'Governed by the international Hague Convention, intercountry adoption pairs eligible families with children awaiting families in partner countries across Europe, Latin America, Asia, and Africa.',
    idealFor: 'Families committed to embracing dual heritage, travel abroad, and supporting a child’s cultural and linguistic roots.',
    considerations: [
      'Involves dual sovereignty approvals (USCIS/Home Country + Foreign Central Authority)',
      'Requires travel abroad (often 1 to 3 in-country trips for court and bonding)',
      'Most awaiting international children are ages 3+ or have identified medical needs'
    ]
  }
];

export default function ProspectiveParents() {
  const [activePathway, setActivePathway] = useState<string>('domestic-infant');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [checkedReadiness, setCheckedReadiness] = useState<Record<string, boolean>>({});

  const toggleCheck = (id: string) => {
    setCheckedReadiness(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const selectedPathwayData = ADOPTION_PATHWAYS.find(p => p.id === activePathway) || ADOPTION_PATHWAYS[0];

  return (
    <div className="rk-prospective-container font-sans text-[#1E293B] antialiased bg-[#FAF9F6]">
      {/* 
        ========================================================================
        PAGE-SPECIFIC STYLES: "Warm Honey Gold & Deep Slate Indigo"
        - Slate Indigo: #0F172A / #1E293B
        - Honey Gold: #D97706 / #B45309 / #F59E0B
        - Silk Ivory: #FAF9F6 / #F3EFEA
        - Forest Pine: #154238 / #1F5F51
        ========================================================================
      */}
      <style>{`
        .rk-prospective-container {
          --rk-slate-900: #0F172A;
          --rk-gold-600: #B45309;
          --rk-gold-500: #D97706;
          --rk-gold-400: #F59E0B;
          --rk-gold-50:  #FEF3C7;
          --rk-pine-700: #154238;
          --rk-border-subtle: #E2DBD0;
          --rk-bg-canvas: #FAF9F6;
        }

        .font-serif-prospective {
          font-family: 'Cormorant Garamond', Georgia, serif;
          letter-spacing: -0.015em;
        }

        .rk-card-prospective {
          background: #FFFFFF;
          border: 1px solid var(--rk-border-subtle);
          box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.04);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .rk-card-prospective:hover {
          box-shadow: 0 16px 36px -4px rgba(15, 23, 42, 0.08);
          border-color: #D3C9BC;
        }

        .rk-btn-gold {
          background: linear-gradient(135deg, #D97706 0%, #B45309 100%);
          color: #FFFFFF;
          box-shadow: 0 4px 18px 0 rgba(217, 119, 6, 0.28);
          transition: all 0.25s ease;
        }

        .rk-btn-gold:hover {
          background: linear-gradient(135deg, #F59E0B 0%, #C35D0C 100%);
          transform: translateY(-1px);
          box-shadow: 0 8px 24px 0 rgba(217, 119, 6, 0.38);
        }
      `}</style>

      {/* ── BREADCRUMB ── */}
      <div className="bg-[#F3EFEA] border-b border-[#E2DBD0] py-3.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-[#64748B]">
          <div className="flex items-center gap-2">
            <a href="/" className="hover:text-[#0F172A] transition-colors">Home</a>
            <span>/</span>
            <a href="/families" className="hover:text-[#0F172A] transition-colors">Families</a>
            <span>/</span>
            <span className="text-[#D97706] font-semibold">Prospective Parents</span>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-[#475569]">
            <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
            <span>Next Live Orientation Webinar: <strong>Thursday, 7:00 PM EST</strong></span>
          </div>
        </div>
      </div>

      {/* ── SECTION 1: EDITORIAL HERO ── */}
      <section className="relative pt-16 pb-24 bg-gradient-to-b from-[#F3EFEA] via-[#FAF9F6] to-[#FAF9F6] border-b border-[#E2DBD0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEF3C7] border border-[#D97706]/30 text-xs font-semibold text-[#B45309]">
                <Compass className="w-3.5 h-3.5 text-[#D97706]" />
                <span>The Prospective Parent Orientation Pathway</span>
              </div>

              <h1 className="font-serif-prospective text-4xl sm:text-5xl lg:text-6xl text-[#0F172A] font-normal leading-[1.12]">
                Your Journey to Welcoming a Child{' '}
                <span className="italic text-[#D97706] underline decoration-[#D97706]/35 underline-offset-8">
                  Begins with Clarity & Heart
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-light max-w-2xl">
                Contemplating adoption is one of the most consequential decisions of your life. Whether you are exploring adoption after fertility struggles, as a single parent, or out of a lifelong conviction to offer sanctuary to a waiting child—RK-Adoption de-mystifies the journey into an empowering, step-by-step experience.
              </p>

              {/* 3 Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="p-3.5 rounded-2xl bg-white border border-[#E2DBD0] space-y-1">
                  <span className="text-xs font-bold text-[#0F172A] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#154238]" />
                    Zero Pressure
                  </span>
                  <p className="text-[11px] text-[#64748B] leading-snug">
                    Take orientations at your own pace without administrative rush.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-[#E2DBD0] space-y-1">
                  <span className="text-xs font-bold text-[#0F172A] flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-[#D97706]" />
                    Full Transparency
                  </span>
                  <p className="text-[11px] text-[#64748B] leading-snug">
                    Honest breakdowns of timelines, expenses, and child welfare criteria.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-[#E2DBD0] space-y-1">
                  <span className="text-xs font-bold text-[#0F172A] flex items-center gap-1.5">
                    <Heart className="w-4 h-4 text-[#C05646]" />
                    Personal Guidance
                  </span>
                  <p className="text-[11px] text-[#64748B] leading-snug">
                    Paired with an experienced intake social worker from day one.
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a 
                  href="/process/guide" 
                  className="rk-btn-gold px-8 py-3.5 rounded-xl font-medium text-sm flex items-center gap-2"
                >
                  <span>Explore The 7 Adoption Stages</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a 
                  href="#pathways" 
                  className="px-6 py-3.5 rounded-xl bg-white border border-[#E2DBD0] text-[#0F172A] hover:bg-[#F3EFEA] font-medium text-sm flex items-center gap-2 transition-colors shadow-xs"
                >
                  <Search className="w-4 h-4 text-[#D97706]" />
                  <span>Compare Adoption Pathways</span>
                </a>
              </div>
            </div>

            {/* Right Hero Image Frame */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#E9E3D8]">
                <img 
                  src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=80" 
                  alt="Prospective parents holding hands and dreaming about family future"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white p-5 rounded-2xl bg-[#0F172A]/80 backdrop-blur-md border border-white/10">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#F59E0B] block mb-1">
                    The Intake Social Worker's Note
                  </span>
                  <p className="text-xs font-light text-slate-200 leading-relaxed italic">
                    "Adoption is not about replicating biological parenthood. It is about actively choosing to become the healing harbor for a child who deserves a permanent home."
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 2: ADOPTION PATHWAYS COMPARATOR ── */}
      <section id="pathways" className="py-24 bg-white border-b border-[#E2DBD0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#D97706]">
              Informed Decision Making
            </span>
            <h2 className="font-serif-prospective text-3xl sm:text-4xl lg:text-5xl text-[#0F172A]">
              Which Adoption Pathway Aligns with Your Family?
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] font-light leading-relaxed">
              Every pathway has distinct legal procedures, emotional dynamics, and timelines. Compare the primary options supported through RK-Adoption:
            </p>
          </div>

          {/* Pathway Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {ADOPTION_PATHWAYS.map((p) => {
              const isSelected = activePathway === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActivePathway(p.id)}
                  className={`text-left p-6 rounded-3xl border transition-all ${
                    isSelected
                      ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-lg transform -translate-y-1'
                      : 'bg-[#FAF9F6] text-[#475569] border-[#E2DBD0] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full ${
                      isSelected ? 'bg-[#D97706] text-white' : 'bg-[#FEF3C7] text-[#B45309]'
                    }`}>
                      {p.badge}
                    </span>
                    <span className={`text-xs font-mono ${isSelected ? 'text-slate-300' : 'text-[#64748B]'}`}>
                      {p.duration}
                    </span>
                  </div>
                  <h3 className={`font-serif-prospective text-2xl mb-1 ${isSelected ? 'text-white' : 'text-[#0F172A]'}`}>
                    {p.title}
                  </h3>
                  <p className={`text-xs leading-relaxed line-clamp-2 ${isSelected ? 'text-slate-300' : 'text-[#64748B]'}`}>
                    {p.focus}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Selected Pathway Deep-Dive Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF9F6] border border-[#E2DBD0] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <div className="text-xs font-semibold text-[#D97706] uppercase tracking-wider mb-1">
                    Pathway Deep-Dive
                  </div>
                  <h3 className="font-serif-prospective text-3xl sm:text-4xl text-[#0F172A]">
                    {selectedPathwayData.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mt-2 font-light">
                    {selectedPathwayData.description}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#E2DBD0] space-y-1.5">
                  <strong className="text-xs font-bold text-[#0F172A] block uppercase tracking-wide">
                    Who This Pathway Is Best Suited For:
                  </strong>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {selectedPathwayData.idealFor}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="p-6 rounded-2xl bg-white border border-[#E2DBD0] space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#0F172A] block">
                    Essential Realities & Considerations:
                  </span>
                  <ul className="space-y-2 text-xs text-[#475569]">
                    {selectedPathwayData.considerations.map((c, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href="/contact" 
                  className="w-full rk-btn-gold p-4 rounded-2xl text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <span>Request Pathway Counseling Session</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 3: INTERACTIVE SELF-REFLECTION MATRIX ── */}
      <section className="py-24 bg-[#F3EFEA] border-b border-[#E2DBD0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#154238]">
              Readiness Reflection
            </span>
            <h2 className="font-serif-prospective text-3xl sm:text-4xl lg:text-5xl text-[#0F172A]">
              The Four Dimensions of Prospective Parent Readiness
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] font-light leading-relaxed">
              Take time to reflect with your partner or personal support circle on these critical foundations before beginning your formal home study:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-7 rounded-3xl bg-white border border-[#E2DBD0] space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] text-[#B45309] flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif-prospective text-2xl text-[#0F172A]">
                1. Emotional Closure
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Have you fully grieved any involuntary childlessness or previous pregnancy losses? Children need parents who celebrate adoption as a primary choice, not a consolation prize.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-[#E2DBD0] space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#EDF4F1] text-[#154238] flex items-center justify-center">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="font-serif-prospective text-2xl text-[#0F172A]">
                2. Lifestyle Flexibility
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Can your career and schedule accommodate transitional attachment? Early post-placement months require intense presence, doctor visits, and predictable home routines.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-[#E2DBD0] space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] text-[#B45309] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif-prospective text-2xl text-[#0F172A]">
                3. Cultural Openness
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                If adopting transracially or internationally, are you genuinely excited to immerse your entire family in the child’s native heritage, food, hair care, and community?
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-[#E2DBD0] space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#EDF4F1] text-[#154238] flex items-center justify-center">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif-prospective text-2xl text-[#0F172A]">
                4. Village Alignment
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Are your extended family, friends, and trusted mentors supportive? Will grandparents embrace the child with unconditional affection and honor the child's story?
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 4: DEBUNKING COMMON PROSPECTIVE PARENT MYTHS ── */}
      <section className="py-24 bg-white border-b border-[#E2DBD0]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#D97706]">
              Facts Over Fear
            </span>
            <h2 className="font-serif-prospective text-3xl sm:text-4xl text-[#0F172A]">
              Debunking the Top Myths of Adoption
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] font-light">
              Misconceptions often delay wonderful families from taking their first step. Here is the actual reality:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-[#FAF9F6] border border-[#E2DBD0] space-y-2">
              <span className="text-xs font-bold text-[#C05646] uppercase block">Myth: "You have to own a luxury house and earn high wealth."</span>
              <p className="text-xs text-[#475569] leading-relaxed">
                <strong>Reality:</strong> Social workers look for financial stability and emotional security—not luxury. Renters and modest households with adequate bedroom space are fully eligible.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#FAF9F6] border border-[#E2DBD0] space-y-2">
              <span className="text-xs font-bold text-[#C05646] uppercase block">Myth: "Single individuals cannot adopt."</span>
              <p className="text-xs text-[#475569] leading-relaxed">
                <strong>Reality:</strong> Single men and women make up nearly 28% of all domestic adoptions and are celebrated as deeply devoted, highly successful adoptive parents.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#FAF9F6] border border-[#E2DBD0] space-y-2">
              <span className="text-xs font-bold text-[#C05646] uppercase block">Myth: "Birth parents can take the child back years later."</span>
              <p className="text-xs text-[#475569] leading-relaxed">
                <strong>Reality:</strong> Once legal consent revocation windows expire and the family court judge issues the final decree of adoption, the adoption is permanently irrevocable by law.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#FAF9F6] border border-[#E2DBD0] space-y-2">
              <span className="text-xs font-bold text-[#C05646] uppercase block">Myth: "Older children cannot form secure attachments."</span>
              <p className="text-xs text-[#475569] leading-relaxed">
                <strong>Reality:</strong> With trauma-informed parenting (TBRI®), neuroplasticity allows children of all ages to form deep, transformative bonds with patient, predictable parents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: INTERACTIVE PRE-ADOPTION CHECKLIST ── */}
      <section className="py-24 bg-[#FAF9F6] border-b border-[#E2DBD0]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#154238]">
              Actionable Milestones
            </span>
            <h2 className="font-serif-prospective text-3xl sm:text-4xl text-[#0F172A]">
              Interactive Pre-Adoption Action Checklist
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] font-light">
              Check off these practical preparatory tasks to measure your household momentum:
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#E2DBD0] shadow-sm space-y-4">
            {[
              { id: 'webinar', text: 'Attend a free live informational orientation session with an intake coordinator.' },
              { id: 'conversation', text: 'Have an open, candid family dialogue regarding age openness, race, and special health readiness.' },
              { id: 'finances', text: 'Review household debt-to-income and explore adoption tax credits and employer assistance programs.' },
              { id: 'bedroom', text: 'Identify the prospective bedroom space in your home and inspect smoke and carbon monoxide detectors.' },
              { id: 'reading', text: 'Read "The Connected Child" by Dr. Karyn Purvis to learn trauma-informed attachment fundamentals.' },
              { id: 'references', text: 'Identify three non-family personal character references who know your parenting character.' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => toggleCheck(item.id)}
                className={`w-full p-4 rounded-2xl border text-left flex items-start justify-between gap-3 transition-all ${
                  checkedReadiness[item.id]
                    ? 'bg-[#EDF4F1] border-[#154238] text-[#0F172A]'
                    : 'bg-[#FAF9F6] border-[#E2DBD0] text-[#475569]'
                }`}
              >
                <span className="text-xs font-medium leading-relaxed">{item.text}</span>
                <div className={`w-5 h-5 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 ${
                  checkedReadiness[item.id] ? 'bg-[#154238] border-[#154238] text-white' : 'border-[#CBD5E1]'
                }`}>
                  {checkedReadiness[item.id] && <Check className="w-3.5 h-3.5" />}
                </div>
              </button>
            ))}

            <div className="pt-4 flex items-center justify-between text-xs text-[#64748B] border-t border-[#E2DBD0]">
              <span>Completed {Object.values(checkedReadiness).filter(Boolean).length} of 6 preparation tasks</span>
              <a 
                href="/process/requirements" 
                className="text-[#D97706] font-semibold hover:underline flex items-center gap-1"
              >
                <span>View Complete Dossier Requirements</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: PROSPECTIVE PARENTS FAQ ── */}
      <section className="py-24 bg-white border-b border-[#E2DBD0]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#D97706]">
              Clarifying Inquiries
            </span>
            <h2 className="font-serif-prospective text-3xl sm:text-4xl text-[#0F172A]">
              Frequently Asked Questions by Prospective Parents
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'How long will we realistically wait after our home study is approved?',
                a: 'Wait times depend heavily on the pathway and your family’s openness. Families open to older youth (ages 7+) or sibling groups in foster care frequently match within 4 to 8 months. Domestic infant adoption ranges between 12 and 24 months as it depends on expectant mothers selecting profiles.'
              },
              {
                q: 'What is the federal adoption tax credit and how does it help?',
                a: 'The Federal Adoption Tax Credit allows eligible adoptive parents to offset substantial qualifying adoption expenses against their federal tax liability (currently exceeding $15,000 per child). Additionally, many employers offer paid parental leave and direct adoption grants.'
              },
              {
                q: 'Can we adopt if we live in an apartment or do not have a yard?',
                a: 'Yes. Adoption regulations require a safe, clean physical home and a dedicated bedroom space for the child with an egress window. Apartments, townhomes, and rental properties are completely acceptable.'
              },
              {
                q: 'What training are we required to complete before being approved?',
                a: 'Prospective parents complete 24 to 36 accredited parent education hours covering attachment science, trauma-informed parenting (TBRI®), grief, open adoption dynamics, and intercultural identity.'
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="rounded-2xl border border-[#E2DBD0] bg-white overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-medium text-xs sm:text-sm text-[#0F172A] hover:bg-[#FAF9F6] transition-colors"
                >
                  <span>{item.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#D97706] shrink-0 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="p-5 pt-0 text-xs text-[#475569] leading-relaxed border-t border-[#E2DBD0]/60 font-light">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: CALL TO ACTION ── */}
      <section className="py-20 bg-[#0F172A] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs uppercase font-semibold tracking-wider text-[#F59E0B]">
            Take Your Next Step
          </span>
          <h2 className="font-serif-prospective text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
            Ready to Begin an Honest Conversation?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
            Register for our next free orientation webinar or schedule a private, confidential consultation with a licensed intake coordinator.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a 
              href="/contact" 
              className="rk-btn-gold px-8 py-4 rounded-xl text-sm font-semibold flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Register for Orientation Webinar</span>
            </a>
            <a 
              href="tel:+18001234567" 
              className="px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 text-sm font-medium transition-colors flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#F59E0B]" />
              <span>Call Intake Counselor (+1 800-123-4567)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
