import { useState, useEffect } from 'react';
import {
  CheckCircle2,
  Clock,
  FileText,
  ShieldCheck,
  Scale,
  Heart,
  ArrowRight,
  BookOpen,
  ChevronRight,
  Sparkles,
  FileCheck,
  Check,
  Compass,
  Award,
  ChevronDown,
  Info,
  Calendar,
  Lock,
  PhoneCall,
  UserCheck
} from 'lucide-react';

interface StageData {
  number: string;
  id: string;
  title: string;
  duration: string;
  focus: string;
  tagline: string;
  narrative: string;
  milestones: string[];
  documentsRequired: string[];
  caseworkerRole: string;
  parentMindset: string;
}

const PROCESS_STAGES: StageData[] = [
  {
    number: '01',
    id: 'orientation',
    title: 'Orientation & Statutory Eligibility Self-Assessment',
    duration: 'Weeks 1 – 4',
    focus: 'Clarity, statutory prerequisites, and mutual self-reflection.',
    tagline: 'Understanding the legal landscape before submitting paperwork.',
    narrative: 'Your adoption journey begins with an informative, pressure-free orientation. You will explore statutory eligibility prerequisites, domestic versus intercountry pathways, financial breakdowns, and regional family court expectations.',
    milestones: [
      'Attend preliminary informational orientation session (in-person or live webinar)',
      'Initial statutory eligibility check (age differential, residency status, criminal record pre-clearance)',
      'Self-reflection regarding family capacity, age openness, and special healthcare readiness',
      'Assignment of a dedicated intake coordinator for personalized guidance'
    ],
    documentsRequired: [
      'Valid government-issued photo ID (Passport / Driver’s License)',
      'Proof of current legal residence tenure (Lease agreement or Property Deed)',
      'Preliminary household demographic disclosure form'
    ],
    caseworkerRole: 'An empathetic intake coordinator provides honest jurisdiction-specific realities, answers personal questions, and clarifies expectations.',
    parentMindset: 'Approach this phase with curiosity and openness. Ask candid questions about timelines, emotional challenges, and post-placement realities.'
  },
  {
    number: '02',
    id: 'application',
    title: 'Formal Application & Dossier Assembly',
    duration: 'Months 2 – 3',
    focus: 'Compiling legal, medical, and personal background certifications.',
    tagline: 'Transforming administrative rigor into an organized family portfolio.',
    narrative: 'Once formally registered, prospective parents assemble their adoption dossier. This collection of verified state, medical, and character records proves household safety and legal standing to the child welfare authorities.',
    milestones: [
      'Formal submission of comprehensive agency/statutory intake dossier',
      'Scheduling comprehensive medical examinations with licensed physicians',
      'Fingerprinting appointments for local, state, and federal criminal registry checks',
      'Soliciting three non-family personal character reference letters'
    ],
    documentsRequired: [
      'Certified copy of birth certificates and marriage/divorce certificates (if applicable)',
      'Official physician physical fitness clearances (Freedom from debilitating illness)',
      'Federal and state criminal background & child protection registry clearances',
      'Recent certified tax returns (W-2s/1040s) and employment verification letters'
    ],
    caseworkerRole: 'Your dossier coordinator audits every certificate for expiration dates, notary seals, and statutory compliance before submission to the courts.',
    parentMindset: 'Stay organized with a digital and physical filing binder. View paperwork not as an obstacle, but as a protective shield guarding vulnerable children.'
  },
  {
    number: '03',
    id: 'home-study',
    title: 'Home Study & Psychosocial Assessment',
    duration: 'Months 3 – 6',
    focus: 'A supportive, constructive preparation—not an interrogation.',
    tagline: 'Deepening parenting resilience and trauma-informed readiness.',
    narrative: 'The home study is the cornerstone of adoption. A licensed social worker conducts multiple in-home observational visits and reflective interviews to ensure your home offers physical safety, psychological warmth, and emotional stability.',
    milestones: [
      'Room-by-room home safety inspection (fire safety, medicine storage, child personal space)',
      'Individual and joint interviews covering childhood upbringing, marital communication, and values',
      'Completion of 24–36 accredited training hours in Trust-Based Relational Intervention (TBRI®)',
      'Drafting, reviewing, and certifying the final formal Home Study Report'
    ],
    documentsRequired: [
      'Complete certified Home Study Report signed by licensed social worker and supervisor',
      'Certificate of completion for mandatory trauma-informed adoption parent training',
      'Home safety inspection checklist and local water/fire safety verification'
    ],
    caseworkerRole: 'Your caseworker acts as a mentor, identifying family strengths, offering guidance on attachment, and preparing you for the child’s unique needs.',
    parentMindset: 'Caseworkers look for genuine warmth, emotional safety, and self-awareness—not luxury mansions. Be authentic about your fears and family history.'
  },
  {
    number: '04',
    id: 'matching',
    title: 'Ethical Matching & Independent Review',
    duration: 'Timeline Varies Ethically',
    focus: 'Multi-disciplinary committee oversight ensuring genuine compatibility.',
    tagline: 'Centering the child’s evaluated best interest above all adult convenience.',
    narrative: 'Matching is conducted with profound privacy by an independent multidisciplinary board (pediatricians, child psychologists, and family advocates). Profiles are matched based on specific healthcare, emotional, and sibling preservation criteria.',
    milestones: [
      'Multidisciplinary match committee evaluates awaiting child dossiers against family profiles',
      'Preservation of biological sibling bonds prioritized whenever legally feasible',
      'Official presentation of child’s complete, unvarnished medical and developmental file',
      'Prospective parents consult independent pediatricians with full file transparency'
    ],
    documentsRequired: [
      'Official Referral Presentation Dossier and Child Medical Summary',
      'Parental Acceptance & Readiness Declaration Form',
      'Statutory Match Committee Approval Resolution'
    ],
    caseworkerRole: 'Presents unvarnished health and neurodevelopmental observations so parents can make an informed, heartfelt lifelong commitment without pressure.',
    parentMindset: 'Take time to consult pediatric specialists. Ensure your family possesses the emotional, physical, and community capacity to support the child wholeheartedly.'
  },
  {
    number: '05',
    id: 'transition',
    title: 'Pre-Placement Transition & Supervised Bonding',
    duration: 'Months 6 – 10',
    focus: 'Gentle, co-regulated bonding tailored strictly to the child’s pace.',
    tagline: 'Building emotional security through predictable, loving rhythms.',
    narrative: 'Placement begins with structured, trauma-sensitive pre-placement visits. Moving from neutral settings to day outings and overnight stays, the child gradually transitions into your home with constant caseworker guidance.',
    milestones: [
      'Supervised introductory visits facilitated by the child’s current caregiver or foster family',
      'Gradual progression from short play outings to overnight weekend stays in the adoptive home',
      'Official physical placement ceremony and transfer of routine daily care',
      'Commencement of bi-weekly post-placement supervisory visits by your social worker'
    ],
    documentsRequired: [
      'Pre-Placement Agreement and Foster-to-Adopt Placement Authorization',
      'Child’s complete immunization, medical transfer, and school enrollment records',
      'Individualized Attachment and Sensory Routine Plan'
    ],
    caseworkerRole: 'Observes early bonding, coaching parents in bedtime routines, co-regulation techniques, sensory diet adaptations, and transition anxiety management.',
    parentMindset: 'Lower behavioral expectations and maximize connection. Prioritize eye contact, predictable meal routines, and physical comfort over discipline.'
  },
  {
    number: '06',
    id: 'finalization',
    title: 'Legal Placement & Family Court Final Decree',
    duration: 'Months 10 – 14',
    focus: 'Irrevocable parental rights granted by the judicial bench.',
    tagline: 'The gavel falls, sealing a permanent and legal lifelong family.',
    narrative: 'After the mandatory statutory supervisory period (typically 6 months), your social worker submits a final recommendation report to the family court judge. A formal hearing is held, and the judge signs the final Adoption Decree.',
    milestones: [
      'Submission of comprehensive supervisory post-placement reports to the family court',
      'Filing of the official Petition for Adoption by certified adoption legal counsel',
      'Formal family court hearing with the judge, accompanied by adoptive family and child',
      'Judicial issuance of the Permanent Adoption Order and amended official Birth Certificate'
    ],
    documentsRequired: [
      'Certified Final Decree of Adoption issued by the family court judge',
      'Amended Official Birth Certificate reflecting adoptive parents as legal parents',
      'New Social Security / National Identity Card registration'
    ],
    caseworkerRole: 'Files the formal supervisory recommendation certifying that the placement is flourishing and the adoption serves the minor’s permanent best interests.',
    parentMindset: 'Celebrate this momentous milestone. Your child now holds all the same irrevocable legal, inheritance, and familial rights as a biological child.'
  },
  {
    number: '07',
    id: 'lifelong-support',
    title: 'Lifelong Post-Adoption Support & Preservation',
    duration: 'Lifelong Partnership',
    focus: 'Community, adolescent identity, counseling, and reunions.',
    tagline: 'Our partnership does not end at the courthouse; it matures with your family.',
    narrative: 'Adoption is an indelible lifelong identity. RK-Adoption remains your lifelong companion through every developmental milestone, offering adolescent identity workshops, family counseling, peer cohorts, and heritage search guidance.',
    milestones: [
      'Enrollment in regional Adoptive Family Circles and parent coffee mornings',
      'Access to specialized adoption-competent child and family therapy referrals',
      'Participation in annual youth camps and adult adoptee mentorship programs',
      'Guidance and counseling regarding consensual biological heritage searches and reunions'
    ],
    documentsRequired: [
      'Lifetime Family Support Enrollment Dossier',
      'Adoption Disclosure & Life Story Book (For the growing child)',
      'Post-Placement Annual Follow-Up Reports (for Intercountry Hague agreements)'
    ],
    caseworkerRole: 'Our post-adoption preservation specialists provide behavioral coaching during adolescence, school advocacy, and adult search-and-reunion navigation.',
    parentMindset: 'Adoption is a conversation that unfolds over decades. Emphasize honesty, celebrate your child’s origins, and lean on our community whenever needed.'
  }
];

export default function AdoptionProcess() {
  // Determine active stage / tab
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const activeStage = PROCESS_STAGES[activeStageIndex];

  // Document checklist toggle state for interactive preparation vault
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});

  // Active FAQ item
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const toggleDoc = (docId: string) => {
    setCheckedDocs(prev => ({ ...prev, [docId]: !prev[docId] }));
  };

  const totalVaultDocs = 12;
  const completedCount = Object.values(checkedDocs).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / totalVaultDocs) * 100);

  // Auto-scroll when navigated via deep-links from Header dropdown
  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes('requirements')) {
      const el = document.getElementById('documentation-vault');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (path.includes('timeline')) {
      const el = document.getElementById('timeline-overview');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="rk-process-container font-sans text-[#1A202C] antialiased bg-[#FAF9F5]">
      {/* 
        ========================================================================
        PAGE-SPECIFIC STYLES: "Verdant Emerald & Burnished Copper"
        - Deep Evergreen: #0B1F1C / #0F2925 / #143631
        - Emerald Jade: #1D705C / #248870 / #145344
        - Burnished Copper: #C26338 / #D97346 / #EAA67F
        - Champagne Gold: #CF9F42 / #E0B257 / #FAF5E8
        - Canvas: #FAF9F5 / #F4F1EA / #FFFFFF
        ========================================================================
      */}
      <style>{`
        .rk-process-container {
          --rk-forest-900: #0B1F1C;
          --rk-forest-800: #0F2925;
          --rk-emerald-700: #145344;
          --rk-emerald-600: #1D705C;
          --rk-emerald-500: #248870;
          --rk-emerald-50:  #F0F8F5;
          --rk-copper-600:  #A8512B;
          --rk-copper-500:  #C26338;
          --rk-copper-400:  #D97346;
          --rk-copper-50:   #FDF6F2;
          --rk-gold-500:    #CF9F42;
          --rk-silk-border: #E5DFD5;
          --rk-canvas-bg:   #FAF9F5;
        }

        .font-serif-process {
          font-family: 'Cormorant Garamond', Georgia, serif;
          letter-spacing: -0.015em;
        }

        .rk-glass-panel {
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(16px);
          border: 1px solid var(--rk-silk-border);
          box-shadow: 0 4px 24px -2px rgba(11, 31, 28, 0.04);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .rk-glass-panel:hover {
          box-shadow: 0 16px 40px -4px rgba(11, 31, 28, 0.08);
          border-color: #D3CAC0;
        }

        .rk-btn-emerald {
          background: linear-gradient(135deg, #1D705C 0%, #145344 100%);
          color: #FFFFFF;
          box-shadow: 0 4px 18px 0 rgba(29, 112, 92, 0.3);
          transition: all 0.25s ease;
        }

        .rk-btn-emerald:hover {
          background: linear-gradient(135deg, #248870 0%, #17604F 100%);
          transform: translateY(-1px);
          box-shadow: 0 8px 24px 0 rgba(29, 112, 92, 0.42);
        }

        .rk-btn-copper {
          background: linear-gradient(135deg, #C26338 0%, #A8512B 100%);
          color: #FFFFFF;
          box-shadow: 0 4px 18px 0 rgba(194, 99, 56, 0.3);
          transition: all 0.25s ease;
        }

        .rk-btn-copper:hover {
          background: linear-gradient(135deg, #D47144 0%, #B85830 100%);
          transform: translateY(-1px);
          box-shadow: 0 8px 24px 0 rgba(194, 99, 56, 0.42);
        }

        .rk-stage-badge {
          background-color: var(--rk-emerald-50);
          color: var(--rk-emerald-600);
          border: 1px solid rgba(29, 112, 92, 0.22);
        }
      `}</style>

      {/* ── BREADCRUMB ── */}
      <div className="bg-[#F4F1EA] border-b border-[#E5DFD5] py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#64748B]">
          <a href="/" className="hover:text-[#0B1F1C] transition-colors">Home</a>
          <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8]" />
          <span className="text-[#1D705C] font-semibold">Adoption Process</span>
        </div>
      </div>

      {/* ── SECTION 1: CINEMATIC EDITORIAL HERO ── */}
      <section className="relative pt-16 pb-24 bg-gradient-to-b from-[#F4F1EA] via-[#FAF9F5] to-[#FAF9F5] border-b border-[#E5DFD5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading & Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full rk-stage-badge text-xs font-semibold">
                <Compass className="w-3.5 h-3.5 text-[#1D705C]" />
                <span>The Complete Statutory & Clinical Adoption Pathway</span>
              </div>

              <h1 className="font-serif-process text-4xl sm:text-5xl lg:text-6xl text-[#0B1F1C] font-normal leading-[1.12]">
                From First Inquiry to Legal Decree:{' '}
                <span className="italic text-[#1D705C] underline decoration-[#C26338]/40 underline-offset-8">
                  The Journey Home
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-light max-w-2xl">
                Adoption is a sacred legal and psychological metamorphosis. RK-Adoption de-escalates bureaucratic anxiety into an empowering, supportive sequence of seven clearly defined stages—guided by licensed social workers, pediatricians, and family court advocates.
              </p>

              {/* Statutory Legal Disclaimer Banner */}
              <div className="p-4 rounded-2xl bg-white border border-[#E5DFD5] shadow-xs text-xs text-[#475569] flex items-start gap-3 leading-relaxed">
                <Scale className="w-5 h-5 text-[#C26338] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0B1F1C] block mb-0.5">Essential Legal Notice:</strong>
                  Actual procedural checkpoints, statutory timelines, background checks, and judicial decrees are strictly governed by the child welfare authorities and certified family courts in your specific jurisdiction. RK-Adoption provides accredited facilitation and licensed preparation.
                </div>
              </div>

              {/* Quick Jump Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a 
                  href="#stages-navigator" 
                  className="rk-btn-emerald px-8 py-3.5 rounded-xl font-medium text-sm flex items-center gap-2"
                >
                  <span>Explore The 7 Stages</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a 
                  href="#documentation-vault" 
                  className="px-6 py-3.5 rounded-xl bg-white border border-[#E5DFD5] text-[#0B1F1C] hover:bg-[#F4F1EA] font-medium text-sm flex items-center gap-2 transition-colors shadow-xs"
                >
                  <FileText className="w-4 h-4 text-[#C26338]" />
                  <span>Dossier Document Vault</span>
                </a>
              </div>

              {/* Trust Metrics Pill */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#64748B] border-t border-[#E5DFD5]/60">
                <span className="flex items-center gap-1.5 font-medium text-[#0B1F1C]">
                  <Award className="w-4 h-4 text-[#1D705C]" />
                  Hague Accredited Agency
                </span>
                <span className="flex items-center gap-1.5 font-medium text-[#0B1F1C]">
                  <ShieldCheck className="w-4 h-4 text-[#1D705C]" />
                  TBRI® Trauma-Informed Preparation
                </span>
                <span className="flex items-center gap-1.5 font-medium text-[#0B1F1C]">
                  <Lock className="w-4 h-4 text-[#1D705C]" />
                  Encrypted Confidential Dossier
                </span>
              </div>
            </div>

            {/* Right Column: Hero Visual Frame */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#E9E4DC]">
                <img 
                  src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=1000&q=80" 
                  alt="Loving family smiling together in gentle natural sunlight"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F1C]/85 via-transparent to-transparent" />
                
                {/* Embedded Quote Box */}
                <div className="absolute bottom-6 left-6 right-6 text-white p-5 rounded-2xl bg-[#0B1F1C]/80 backdrop-blur-md border border-white/10">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#CF9F42] block mb-1">
                    The Caseworker's Promise
                  </span>
                  <p className="text-xs font-light text-slate-200 leading-relaxed">
                    "Every home visit, every document verification, and every counseling session exists for one singular purpose: ensuring your family becomes an unbreakable sanctuary for a waiting child."
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 2: INTERACTIVE 7-STAGE JOURNEY NAVIGATOR ── */}
      <section id="stages-navigator" className="py-24 bg-white border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#1D705C]">
              Step-by-Step Architecture
            </span>
            <h2 className="font-serif-process text-3xl sm:text-4xl lg:text-5xl text-[#0B1F1C] mt-2 mb-4 font-normal">
              The Seven Milestones of the Adoption Journey
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] font-light leading-relaxed">
              Click any stage on the interactive timeline below to inspect the timeline, procedural milestones, required paperwork, and social worker role:
            </p>
          </div>

          {/* Interactive Stage Selector Rail */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 mb-12">
            {PROCESS_STAGES.map((stage, idx) => {
              const isSelected = activeStageIndex === idx;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`text-left p-3.5 rounded-2xl border transition-all ${
                    isSelected
                      ? 'bg-[#0B1F1C] text-white border-[#0B1F1C] shadow-md transform -translate-y-1'
                      : 'bg-[#FAF9F5] text-[#475569] border-[#E5DFD5] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[10px] font-mono font-bold ${
                      isSelected ? 'text-[#CF9F42]' : 'text-[#1D705C]'
                    }`}>
                      Stage {stage.number}
                    </span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-[#CF9F42]" />}
                  </div>
                  <div className="text-xs font-semibold line-clamp-2">
                    {stage.title}
                  </div>
                  <div className={`text-[10px] mt-1 font-mono ${
                    isSelected ? 'text-slate-300' : 'text-[#94A3B8]'
                  }`}>
                    {stage.duration}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Inspector Card */}
          <div className="rk-glass-panel rounded-3xl p-8 sm:p-12 border border-[#E5DFD5] shadow-lg">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-[#E5DFD5] pb-8">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full rk-stage-badge text-xs font-semibold">
                  <Clock className="w-3.5 h-3.5 text-[#1D705C]" />
                  <span>Estimated Timeframe: {activeStage.duration}</span>
                </div>
                <h2 className="font-serif-process text-3xl sm:text-4xl text-[#0B1F1C]">
                  Stage {activeStage.number}: {activeStage.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#C26338] font-medium italic">
                  "{activeStage.tagline}"
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E5DFD5] max-w-sm">
                <span className="text-[10px] uppercase font-semibold text-[#64748B] block mb-1">Primary Objective:</span>
                <span className="text-xs font-medium text-[#0B1F1C] leading-snug">{activeStage.focus}</span>
              </div>
            </div>

            {/* Narrative & Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-8">
              
              {/* Left Column: Procedural Narrative & Milestones */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#0B1F1C] mb-2 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#1D705C]" />
                    <span>Stage Overview & Narrative:</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-light">
                    {activeStage.narrative}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#0B1F1C] mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1D705C]" />
                    <span>Key Milestones & Concrete Checkpoints:</span>
                  </h3>
                  <div className="space-y-2.5 text-xs text-[#334155]">
                    {activeStage.milestones.map((m, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#E5DFD5] flex items-start gap-3">
                        <span className="w-4 h-4 rounded-full bg-[#F0F8F5] text-[#1D705C] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Required Documents, Caseworker Role & Mindset */}
              <div className="lg:col-span-5 space-y-5">
                {/* Dossier Documents Needed */}
                <div className="p-5 rounded-2xl bg-[#FDF6F2] border border-[#F5DACB] space-y-2.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#C26338] flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-[#C26338]" />
                    <span>Dossier Certificates for this Stage:</span>
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#475569]">
                    {activeStage.documentsRequired.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#C26338] font-bold mt-0.5">•</span>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Role of Your Social Worker */}
                <div className="p-5 rounded-2xl bg-[#0B1F1C] text-white space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#CF9F42] flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Role of Your Social Worker:</span>
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {activeStage.caseworkerRole}
                  </p>
                </div>

                {/* Recommended Parent Mindset */}
                <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-[#E5DFD5] space-y-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#1D705C] block">
                    Recommended Family Mindset:
                  </span>
                  <p className="text-xs text-[#475569] leading-relaxed italic">
                    "{activeStage.parentMindset}"
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom Step Switcher */}
            <div className="pt-8 mt-8 border-t border-[#E5DFD5] flex items-center justify-between text-xs text-[#64748B]">
              <span>Stage {activeStageIndex + 1} of {PROCESS_STAGES.length}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveStageIndex(prev => (prev > 0 ? prev - 1 : PROCESS_STAGES.length - 1))}
                  className="px-4 py-2 rounded-xl bg-[#FAF9F5] border border-[#E5DFD5] text-[#0B1F1C] hover:bg-white font-medium"
                >
                  Previous Stage
                </button>
                <button
                  onClick={() => setActiveStageIndex(prev => (prev < PROCESS_STAGES.length - 1 ? prev + 1 : 0))}
                  className="px-4 py-2 rounded-xl rk-btn-emerald font-medium"
                >
                  Next Milestone
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE HOME STUDY ASSESSMENT DEMYSTIFIED ── */}
      <section className="py-24 bg-[#F4F1EA] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Understanding the Assessment */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase font-semibold tracking-wider text-[#1D705C]">
                Clinical & Psychosocial Readiness
              </span>
              <h2 className="font-serif-process text-3xl sm:text-4xl lg:text-5xl text-[#0B1F1C] font-normal leading-tight">
                Demystifying the Home Study: Preparation, Not Judgment
              </h2>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-light">
                Many prospective parents dread the home study, imagining an intimidating white-glove inspection. In reality, modern adoption assessment is a therapeutic, educational collaboration designed to prepare you for the emotional realities of welcoming an adopted child.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-[#E5DFD5] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F0F8F5] text-[#1D705C] flex items-center justify-center shrink-0">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#0B1F1C] uppercase tracking-wide">
                      Psychosocial Stability, Not Perfection
                    </h3>
                    <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                      Social workers look for emotional resilience, how you resolve interpersonal conflict, and how you process grief or vulnerability. Flawless lives do not exist; honest resilience does.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#E5DFD5] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FDF6F2] text-[#C26338] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#0B1F1C] uppercase tracking-wide">
                      Physical Safety Standards
                    </h3>
                    <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                      Practical requirements focus on physical child safety: working smoke detectors, locked medication cabinets, fenced pools, and a dedicated, welcoming personal space for the child.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#E5DFD5] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF5E8] text-[#CF9F42] flex items-center justify-center shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#0B1F1C] uppercase tracking-wide">
                      Trauma-Informed Education (TBRI®)
                    </h3>
                    <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                      Every prospective family completes certified Trust-Based Relational Intervention (TBRI®) coursework to master attachment styles, sensory regulation, and neurodevelopmental support.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Infographic Card */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#0B1F1C] text-white shadow-2xl relative overflow-hidden border border-white/10">
                <div className="space-y-6 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-semibold text-[#CF9F42]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>The 3 In-Home Assessment Visits</span>
                  </div>

                  <h3 className="font-serif-process text-2xl sm:text-3xl text-white">
                    What Happens During the Social Worker's Visits?
                  </h3>

                  <div className="space-y-4 text-xs">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                      <span className="text-[#CF9F42] font-semibold block">Visit 1: Family History & Upbringing</span>
                      <p className="text-slate-300 font-light leading-relaxed">
                        Explores your childhood, parenting values, cultural traditions, motivation to adopt, and family support systems.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                      <span className="text-[#CF9F42] font-semibold block">Visit 2: Home Safety & Environmental Walkthrough</span>
                      <p className="text-slate-300 font-light leading-relaxed">
                        A collaborative walkthrough ensuring standard child safety safeguards, neighborhood resources, and bedroom setup.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                      <span className="text-[#CF9F42] font-semibold block">Visit 3: Final Synthesis & Recommendation Review</span>
                      <p className="text-slate-300 font-light leading-relaxed">
                        A transparent review of the draft Home Study report with your caseworker before certification and court submission.
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 text-[11px] text-slate-400 italic">
                    Note: An approved home study remains active for 12 to 24 months depending on state/country renewal requirements.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 4: INTERACTIVE DOSSIER DOCUMENTATION VAULT ── */}
      <section id="documentation-vault" className="py-24 bg-[#FAF9F5] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#C26338]">
              Documentation Guidance
            </span>
            <h2 className="font-serif-process text-3xl sm:text-4xl lg:text-5xl text-[#0B1F1C] mt-2 mb-4 font-normal">
              The Adoption Dossier Preparation Vault
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] font-light leading-relaxed">
              Every adoption authority requires rigorous documentary verification to ensure the physical, emotional, and financial safety of the child. Use this interactive preparation checklist:
            </p>

            {/* Interactive Progress Bar */}
            <div className="mt-6 p-4 rounded-2xl bg-white border border-[#E5DFD5] shadow-xs max-w-md mx-auto">
              <div className="flex items-center justify-between text-xs font-semibold mb-2">
                <span className="text-[#0B1F1C]">Vault Preparation Checklist</span>
                <span className="text-[#1D705C]">{completedCount} of {totalVaultDocs} Checked ({progressPercent}%)</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-[#E5DFD5] overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#1D705C] to-[#248870] transition-all duration-300 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Category 1: Legal & Identity */}
            <div className="p-7 rounded-3xl bg-white border border-[#E5DFD5] shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 text-[#1D705C] text-xs font-semibold uppercase tracking-wider">
                <Scale className="w-4 h-4" />
                <span>Legal & Identity Records</span>
              </div>
              <p className="text-xs text-[#64748B]">Certified copies establishing citizenship, identity, and civil status:</p>
              
              <div className="space-y-2 text-xs">
                {[
                  'Certified government birth certificates of both applicants',
                  'Valid passports (with at least 18 months validity remaining)',
                  'Marriage certificate or proof of single status',
                  'Certified divorce or legal separation decrees (if applicable)'
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => toggleDoc(`legal-${idx}`)}
                    className={`w-full p-2.5 rounded-xl border text-left flex items-start justify-between gap-2 transition-all ${
                      checkedDocs[`legal-${idx}`] 
                        ? 'bg-[#F0F8F5] border-[#1D705C] text-[#0B1F1C]' 
                        : 'bg-[#FAF9F5] border-[#E5DFD5] text-[#475569]'
                    }`}
                  >
                    <span>{item}</span>
                    <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 mt-0.5 ${
                      checkedDocs[`legal-${idx}`] ? 'bg-[#1D705C] border-[#1D705C] text-white' : 'border-[#CBD5E1]'
                    }`}>
                      {checkedDocs[`legal-${idx}`] && <Check className="w-3 h-3" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Category 2: Medical & Psychological */}
            <div className="p-7 rounded-3xl bg-white border border-[#E5DFD5] shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 text-[#C26338] text-xs font-semibold uppercase tracking-wider">
                <Heart className="w-4 h-4" />
                <span>Medical & Psychological</span>
              </div>
              <p className="text-xs text-[#64748B]">Demonstrating healthy physical stamina and psychological stability:</p>
              
              <div className="space-y-2 text-xs">
                {[
                  'Full physical examination report signed by licensed physician',
                  'Tuberculosis (TB) screening clearances & immunization proof',
                  'Laboratory screening tests & freedom from life-limiting illness',
                  'Mental health stability verification letter from clinician (if requested)'
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => toggleDoc(`med-${idx}`)}
                    className={`w-full p-2.5 rounded-xl border text-left flex items-start justify-between gap-2 transition-all ${
                      checkedDocs[`med-${idx}`] 
                        ? 'bg-[#FDF6F2] border-[#C26338] text-[#0B1F1C]' 
                        : 'bg-[#FAF9F5] border-[#E5DFD5] text-[#475569]'
                    }`}
                  >
                    <span>{item}</span>
                    <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 mt-0.5 ${
                      checkedDocs[`med-${idx}`] ? 'bg-[#C26338] border-[#C26338] text-white' : 'border-[#CBD5E1]'
                    }`}>
                      {checkedDocs[`med-${idx}`] && <Check className="w-3 h-3" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Category 3: Background Clearances */}
            <div className="p-7 rounded-3xl bg-white border border-[#E5DFD5] shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 text-[#145344] text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Safeguarding & Background</span>
              </div>
              <p className="text-xs text-[#64748B]">Rigorous fingerprinting and child abuse registry verifications:</p>
              
              <div className="space-y-2 text-xs">
                {[
                  'State & FBI biometric fingerprint criminal history clearance',
                  'Child Protective Services (CPS) child abuse registry checks',
                  'Local county sheriff / police department clearance certificates',
                  'Driving record abstracts & motor vehicle safety checks'
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => toggleDoc(`sec-${idx}`)}
                    className={`w-full p-2.5 rounded-xl border text-left flex items-start justify-between gap-2 transition-all ${
                      checkedDocs[`sec-${idx}`] 
                        ? 'bg-[#F0F8F5] border-[#1D705C] text-[#0B1F1C]' 
                        : 'bg-[#FAF9F5] border-[#E5DFD5] text-[#475569]'
                    }`}
                  >
                    <span>{item}</span>
                    <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 mt-0.5 ${
                      checkedDocs[`sec-${idx}`] ? 'bg-[#1D705C] border-[#1D705C] text-white' : 'border-[#CBD5E1]'
                    }`}>
                      {checkedDocs[`sec-${idx}`] && <Check className="w-3 h-3" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Dossier Authentications & Expiration Notice */}
          <div className="mt-12 p-6 rounded-3xl bg-white border border-[#E5DFD5] flex items-start gap-4">
            <Info className="w-5 h-5 text-[#CF9F42] shrink-0 mt-0.5" />
            <div className="text-xs text-[#475569] leading-relaxed space-y-1">
              <strong className="text-[#0B1F1C] block text-sm">Apostilles, Notary Seals & Document Expiration:</strong>
              <p>
                Many documents (especially medical fitness exams, criminal clearances, and tax declarations) carry statutory validity windows ranging from 6 to 12 months. For international adoptions, documents must be notarized, state-certified, and authenticated with an official Hague Apostille. Your dossier coordinator provides an individualized tracking schedule to ensure documents remain valid throughout your matching process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: REALISTIC TIMELINES COMPARISON ── */}
      <section id="timeline-overview" className="py-24 bg-white border-b border-[#E5DFD5]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#1D705C]">
              The Realistic Horizon
            </span>
            <h2 className="font-serif-process text-3xl sm:text-4xl text-[#0B1F1C]">
              What to Expect: Realistic Adoption Timelines
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] font-light leading-relaxed">
              Timelines depend on judicial processing times, the age of the child you are prepared to welcome, and statutory authority queues. We believe in total honesty:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-[#FAF9F5] border border-[#E5DFD5] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C26338] block">
                  Foster Care Adoption
                </span>
                <Calendar className="w-4 h-4 text-[#C26338]" />
              </div>
              <div className="text-3xl font-serif-process font-bold text-[#0B1F1C]">
                8 – 14 Months
              </div>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Fastest statutory pathway for approved families open to older youth (ages 7+) or sibling sets. Children have already had parental rights legally severed by courts.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#FAF9F5] border border-[#E5DFD5] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1D705C] block">
                  Domestic Infant Adoption
                </span>
                <Calendar className="w-4 h-4 text-[#1D705C]" />
              </div>
              <div className="text-3xl font-serif-process font-bold text-[#0B1F1C]">
                12 – 24 Months
              </div>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Timeline is variable because matching depends on expectant birth parents selecting the adoptive family profile that resonates with their personal values.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#FAF9F5] border border-[#E5DFD5] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#CF9F42] block">
                  Intercountry Hague Adoption
                </span>
                <Calendar className="w-4 h-4 text-[#CF9F42]" />
              </div>
              <div className="text-3xl font-serif-process font-bold text-[#0B1F1C]">
                18 – 32 Months
              </div>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Involves dual sovereignty approvals: immigration clearance by USCIS/home authority plus foreign central authority dossiers, translations, and consular visas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: PROCESS FREQUENTLY ASKED QUESTIONS ── */}
      <section className="py-24 bg-[#FAF9F5] border-b border-[#E5DFD5]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#1D705C]">
              Clear Answers
            </span>
            <h2 className="font-serif-process text-3xl sm:text-4xl text-[#0B1F1C]">
              Frequently Asked Questions About the Process
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] font-light">
              Transparent answers regarding legal procedures, finances, and casework requirements.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'Do we have to own a large home or earn a high income to be approved?',
                a: 'No. You do not need to own a home or have high wealth. Adoption authorities evaluate whether your income is stable enough to care for a child and whether your home has a safe, dedicated bedroom space. Renters and modest households are fully eligible.'
              },
              {
                q: 'Can single individuals, unmarried partners, or LGBTQ+ families adopt?',
                a: 'Yes. In many jurisdictions and under modern domestic adoption laws, single individuals and LGBTQ+ individuals or couples have full statutory rights to adopt. Certain intercountry programs have specific country-level restrictions, which our coordinators will review with you transparently.'
              },
              {
                q: 'What occurs during the final Family Court hearing?',
                a: 'The finalization hearing is a joyous and celebratory judicial proceeding. The family court judge reviews your caseworker’s supervisory reports, confirms statutory consent, and issues the permanent Decree of Adoption. Children often receive a commemorative gavel strike.'
              },
              {
                q: 'What happens if we receive a child referral with medical complexities?',
                a: 'Every family is provided with the child’s complete medical and developmental history before making a decision. You are encouraged to consult independent pediatric specialists. You are never obligated to accept a referral if you feel your family is not equipped to meet the child’s needs.'
              },
              {
                q: 'What post-adoption support is provided after the legal decree is signed?',
                a: 'Our post-adoption department provides ongoing counseling referrals, educational advocacy for school accommodations, crisis co-regulation coaching, and teen identity peer groups for years to come.'
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="rounded-2xl border border-[#E5DFD5] bg-white overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-medium text-xs sm:text-sm text-[#0B1F1C] hover:bg-[#FAF9F5] transition-colors"
                >
                  <span>{item.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#1D705C] shrink-0 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="p-5 pt-0 text-xs text-[#475569] leading-relaxed border-t border-[#E5DFD5]/60 font-light">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: FINAL CALL TO ACTION ── */}
      <section className="py-20 bg-[#0B1F1C] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs uppercase font-semibold tracking-wider text-[#CF9F42]">
            Begin Your Orientation
          </span>
          <h2 className="font-serif-process text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
            Ready to Begin Stage 01 of Your Adoption Journey?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
            Our licensed intake social workers are available to answer your personal questions, assess eligibility, and outline your jurisdiction’s specific steps.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a 
              href="tel:+18001234567" 
              className="rk-btn-emerald px-8 py-4 rounded-xl text-sm font-semibold flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Intake Counselor (+1 800-123-4567)</span>
            </a>
            <a 
              href="/adoption/eligibility" 
              className="px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 text-sm font-medium transition-colors"
            >
              <span>Check Eligibility Criteria</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
