import { useState } from "react";
import {
  Heart,
  ShieldCheck,
  Scale,
  BookOpen,
  Users,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Clock,
  FileText,
  PhoneCall,
  Mail,
  Compass,
  Lock,
  EyeOff,
  FileCheck,
  AlertCircle,
  Search,
  ExternalLink,
  BadgeCheck,
  GraduationCap,
  HeartHandshake,
  Check,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────
// DATA STRUCTURES & CONTENT
// ─────────────────────────────────────────────────────────────

interface ProcessStep {
  id: number;
  title: string;
  duration: string;
  tagline: string;
  description: string;
  keyCheckpoints: string[];
  documents: string[];
  roleOfWorker: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: "Exploration & Eligibility Orientation",
    duration: "Weeks 1 – 4",
    tagline: "Clarity, legal prerequisites, and mutual self-assessment.",
    description:
      "Your journey starts with transparent guidance. Attend an informative orientation to understand statutory adoption criteria, age thresholds, household requirements, and domestic vs. intercountry legal frameworks.",
    keyCheckpoints: [
      "Initial orientation seminar and informal Q&A",
      "Statutory eligibility pre-screening check",
      "Self-reflection on family capacity and motivation",
      "Assigning your accredited adoption intake counselor",
    ],
    documents: [
      "Government-issued identity and citizenship proofs",
      "Residence tenure verification and marriage/single-status certificate",
      "Preliminary household financial disclosure",
    ],
    roleOfWorker:
      "An empathetic caseworker answers all initial questions, explains jurisdiction-specific realities, and conducts a friendly, no-pressure intake assessment.",
  },
  {
    id: 2,
    title: "Home Study & Comprehensive Assessment",
    duration: "Months 2 – 5",
    tagline: "Constructive preparation, not an interrogation.",
    description:
      "The home study is a therapeutic, supportive assessment designed to ensure your physical and emotional environment is ready to nurture an adopted child. Social workers explore family background, parenting values, and support systems.",
    keyCheckpoints: [
      "Multiple scheduled in-home observational visits",
      "Trauma-informed parenting readiness interviews",
      "Comprehensive criminal background & child protection registry checks",
      "Medical evaluations and character references verification",
    ],
    documents: [
      "Certified medical fitness records from licensed physicians",
      "Official criminal record clearance certificates (local and federal)",
      "Three non-family personal reference letters",
      "Proof of stable income, employment, and comprehensive health insurance",
    ],
    roleOfWorker:
      "A licensed social worker collaborates with your family as a mentor, identifying unique family strengths and offering targeted preparation modules.",
  },
  {
    id: 3,
    title: "Matching & Independent Committee Review",
    duration: "Timeline Varies Ethically",
    tagline: "Centering the child's psychological and emotional best interest.",
    description:
      "Matching is never arbitrary or catalog-based. An independent multidisciplinary panel—comprising pediatricians, social workers, and child advocates—reviews prospective profiles to identify the family best equipped to meet an individual child's specific needs.",
    keyCheckpoints: [
      "Child welfare dossier assessment by multidisciplinary match board",
      "Preservation of sibling bonds whenever legally feasible",
      "Cultural, linguistic, and developmental suitability assessment",
      "Presentation of child health and developmental history to prospective parents",
    ],
    documents: [
      "Approved Home Study Report (Formally Certified)",
      "Parental Readiness Profile and Special Needs Acceptance Matrix",
      "Regional or Central Adoption Authority Registration Dossier",
    ],
    roleOfWorker:
      "Case managers present comprehensive, unvarnished developmental reports so prospective parents can make an informed, heartfelt lifelong commitment.",
  },
  {
    id: 4,
    title: "Supervised Transition & Foster Bonding",
    duration: "Months 6 – 10",
    tagline: "Gradual, trauma-sensitive bonding tailored to the child's pace.",
    description:
      "Placement begins with gentle, pre-placement visits designed to respect the child's emotional security. Visits progress from neutral settings to day outings, before moving into supervised pre-adoptive foster care in your home.",
    keyCheckpoints: [
      "Initial supervised video or in-person introductory visits",
      "Gradual day-outings transitioning to weekend overnight stays",
      "Placement ceremony with caregiving institution or foster family",
      "Regular bi-weekly post-placement visits by your dedicated social worker",
    ],
    documents: [
      "Pre-Placement Agreement and Foster Placement Authorization",
      "Child's Complete Immunization and Medical Transfer File",
      "Individualized Attachment and Routine Care Plan",
    ],
    roleOfWorker:
      "Specialized attachment counselors observe early bonding, offering gentle coaching on co-regulation, bedtime routines, and transition anxiety.",
  },
  {
    id: 5,
    title: "Legal Finalization & Lifelong Support",
    duration: "Lifelong Partnership",
    tagline:
      "Irrevocable parental rights, followed by permanent community support.",
    description:
      "Your social worker files the final supervisory assessment with the family court. A judge issues the final adoption decree, generating a revised birth certificate. Our community then remains by your side through every childhood phase.",
    keyCheckpoints: [
      "Submission of comprehensive supervisory reports to family court",
      "Judicial hearing and granting of the Permanent Adoption Order",
      "Issuance of amended legal birth certificate naming adoptive parents",
      "Enrollment in post-adoption youth camps, peer circles, and educational grants",
    ],
    documents: [
      "Final Court Decree of Adoption",
      "Amended Official Birth Certificate",
      "Permanent Legal Guardianship Records",
    ],
    roleOfWorker:
      "Our post-adoption team provides ongoing family therapy resources, adolescent identity workshops, and future search-and-reunion guidance if desired.",
  },
];

interface StoryItem {
  id: string;
  category: string;
  headline: string;
  family: string;
  timeline: string;
  quote: string;
  narrative: string;
  photoUrl: string;
  badge: string;
}

const FAMILY_STORIES: StoryItem[] = [
  {
    id: "infant-open",
    category: "Domestic Open Adoption",
    headline: "Transforming Uncertainty into a Sacred Extended Family",
    family: "Elena, Marcus & Baby Liam",
    timeline: "14-Month Journey",
    quote:
      "We thought the home study would be judgmental. Instead, our caseworker helped us discover emotional depths we never knew we had.",
    narrative:
      "When Elena and Marcus began their adoption path, the paperwork felt daunting. Through RK-Adoption’s structured education modules, they learned about respectful open adoption. Today, they share milestone letters with Liam’s birth mother, creating a circle of unreserved love and mutual transparency.",
    photoUrl:
      "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=800&q=80",
    badge: "Illustrative Profile",
  },
  {
    id: "siblings",
    category: "Sibling Group Preservation",
    headline: "Keeping Two Loving Sisters Under One Safe Roof",
    family: "The Thorne-Bennett Household",
    timeline: "18-Month Journey",
    quote:
      "Separating biological siblings is a profound heartbreak. Keeping Maya and Chloe together gave them the stability to heal together.",
    narrative:
      "Maya (6) and Chloe (4) needed a family willing to welcome two lively personalities simultaneously. Through RK-Adoption's specialized sibling preparation coaching, David and Julian adapted their home and parenting rhythms. Watching the sisters fall asleep holding hands in their forever home reaffirmed everything.",
    photoUrl:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
    badge: "Illustrative Profile",
  },
  {
    id: "single-parent",
    category: "Single Parent Adoption",
    headline: "A Purpose-Driven Heart Building a Sanctuary for Kiran",
    family: "Dr. Ananya Roy & Kiran",
    timeline: "11-Month Journey",
    quote:
      "Being single never meant being alone. The community backing from RK-Adoption became my extended family from day one.",
    narrative:
      "As a practicing pediatrician, Ananya had spent her career caring for other children while dreaming of motherhood. The legal team at RK-Adoption clearly mapped the legal single-parent adoption statutes, helping her build an airtight support network of grandparents, godparents, and trusted caregivers.",
    photoUrl:
      "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?auto=format&fit=crop&w=800&q=80",
    badge: "Illustrative Profile",
  },
];

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  legalNote?: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    category: "Process & Timeline",
    question:
      "How long does the comprehensive adoption process typically take?",
    answer:
      "While every case is unique, the statutory timeline typically spans 10 to 24 months. The home study, background verifications, and educational modules take approximately 3 to 6 months. The matching timeframe depends on the age range, special healthcare criteria prospective parents are open to, and statutory registry waitlists in your regional jurisdiction.",
    legalNote:
      "Timelines are strictly regulated by government adoption authorities and judicial processing schedules.",
  },
  {
    id: "faq-2",
    category: "Eligibility",
    question:
      "Can single individuals or unmarried partners legally adopt through this platform?",
    answer:
      "In many jurisdictions, single women and men are legally eligible to adopt children of specified genders under statutory family codes. RK-Adoption supports all legally eligible prospective adoptive parents regardless of marital status, religion, or background, strictly in accordance with the statutory laws of your specific country and state.",
    legalNote:
      "Regional statutory restrictions may govern single male adoption of female children in select jurisdictions.",
  },
  {
    id: "faq-3",
    category: "Child Matching",
    question:
      "Why does RK-Adoption not display searchable photos or lists of children?",
    answer:
      "Children in adoption care are not consumer products. Publicly publishing photographs, medical files, or identifiable dossiers of vulnerable minors violates international child rights conventions (including the UNCRC and the Hague Convention). Matching is conducted strictly through confidential, multidisciplinary professional panels matching validated family capabilities with an individual child's evaluated needs.",
    legalNote:
      "Child privacy and anti-trafficking safeguarding are paramount ethical obligations.",
  },
  {
    id: "faq-4",
    category: "Costs & Transparency",
    question:
      "What are the financial costs involved, and is there a breakdown?",
    answer:
      "Ethical adoption does not charge for children. Legitimate expenses are strictly restricted to: state statutory registration fees, licensed home study evaluations, fingerprinting and federal background checks, independent medical assessments, legal court filing fees, and specialized pre-placement parent education courses. RK-Adoption mandates itemized financial transparency with zero hidden gratuities.",
    legalNote:
      "Any request for informal payments or expediting fees constitutes illegal trafficking under international law.",
  },
  {
    id: "faq-5",
    category: "Home Study",
    question: "What happens if our home is modest or we live in an apartment?",
    answer:
      "Home study social workers do not look for luxury mansions or immense wealth. They evaluate physical safety, emotional stability, genuine warmth, hygiene, adequate sleeping arrangements for the child, and healthy family dynamics. Living in an apartment or modest rental home is completely acceptable as long as it provides a safe, nurturing environment.",
    legalNote:
      "Stability, safety, and emotional readiness outweigh material affluence.",
  },
  {
    id: "faq-6",
    category: "Post-Adoption",
    question:
      "What support is available to our family after the adoption is finalized?",
    answer:
      "Our commitment is lifelong. Families gain access to post-adoption attachment counseling, speech and occupational therapy referrals, regional adoptive parent coffee circles, webinars on explaining adoption to your growing child, and crisis behavioral coaching during adolescent years.",
    legalNote:
      "Post-adoption follow-up reports are legally required for 1 to 2 years in most jurisdictions.",
  },
];

export default function Index() {
  // ── Section 4: Journey Tabs ──
  const [activeJourneyTab, setActiveJourneyTab] = useState<
    "eligibility" | "steps" | "consultation"
  >("steps");

  // ── Section 5: Process Inspector ──
  const [activeStepId, setActiveStepId] = useState<number>(1);
  const currentStep =
    PROCESS_STEPS.find((s) => s.id === activeStepId) || PROCESS_STEPS[0];

  // ── Section 8: Interactive Eligibility Checklist ──
  const [eligibilityAnswers, setEligibilityAnswers] = useState({
    age: false,
    residence: false,
    background: false,
    financial: false,
  });

  const toggleEligibility = (key: keyof typeof eligibilityAnswers) => {
    setEligibilityAnswers((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedCount =
    Object.values(eligibilityAnswers).filter(Boolean).length;

  // ── Section 9: Stories Selector ──
  const [activeStoryIndex, setActiveStoryIndex] = useState<number>(0);
  const currentStory = FAMILY_STORIES[activeStoryIndex];

  // ── Section 12: Resource Category Filter ──
  const [resourceCategory, setResourceCategory] = useState<
    "all" | "legal" | "emotional" | "checklists"
  >("all");

  // ── Section 13: FAQ Accordion ──
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>("faq-1");
  const [faqSearch, setFaqSearch] = useState<string>("");

  const filteredFaqs = FAQ_DATA.filter(
    (faq) =>
      faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.answer.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.category.toLowerCase().includes(faqSearch.toLowerCase()),
  );

  return (
    <div className="rk-home-container font-sans text-[#1E293B] antialiased">
      {/* 
        ========================================================================
        PAGE-SPECIFIC COMPREHENSIVE STYLING
        Palette: "Elysian Warmth & Nordic Slate"
        - Slate Midnight: #0B1523 / #0F1E32 / #16273F
        - Terra Cotta & Sunlit Amber: #C85A32 / #E07A5F / #D97736 / #FDF6F0
        - Deep Aegean Azure: #1E5F74 / #2D7D9A / #EBF5F8
        - Warm Cashmere & Fine Porcelain: #FAF8F5 / #F3EFEA / #FFFFFF
        - Silk Borders: #E5E0D8 / #DCD6CD
        ========================================================================
      */}
      <style>{`
        :root {
          --rk-midnight: #0B1523;
          --rk-slate-900: #0F1E32;
          --rk-slate-800: #16273F;
          --rk-slate-700: #1E3352;
          --rk-slate-600: #334B68;
          --rk-slate-500: #526781;
          --rk-terra-600: #B24C27;
          --rk-terra-500: #C85A32;
          --rk-terra-400: #DC6B44;
          --rk-terra-100: #FCECE4;
          --rk-terra-50:  #FDF6F1;
          --rk-amber-500: #D97736;
          --rk-amber-100: #FBF0E4;
          --rk-aegean-700: #164858;
          --rk-aegean-600: #1E5F74;
          --rk-aegean-500: #2D7D9A;
          --rk-aegean-50:  #EBF5F8;
          --rk-canvas-bg:  #FAF8F5;
          --rk-canvas-card: #FFFFFF;
          --rk-border-silk: #E6E1D8;
          --rk-border-light: #F0ECE4;
        }

        .rk-home-container {
          background-color: var(--rk-canvas-bg);
          color: #1E293B;
          overflow-x: hidden;
        }

        /* Ambient Lighting gradients */
        .ambient-radial-terra {
          background: radial-gradient(circle at 50% 50%, rgba(200, 90, 50, 0.08) 0%, rgba(250, 248, 245, 0) 70%);
        }

        .ambient-radial-aegean {
          background: radial-gradient(circle at 50% 50%, rgba(30, 95, 116, 0.07) 0%, rgba(250, 248, 245, 0) 70%);
        }

        /* Elevated Glassmorphism */
        .rk-glass-card {
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid var(--rk-border-silk);
          box-shadow: 0 4px 24px -2px rgba(11, 21, 35, 0.04), 0 2px 8px -2px rgba(11, 21, 35, 0.02);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .rk-glass-card:hover {
          box-shadow: 0 12px 36px -4px rgba(11, 21, 35, 0.08), 0 4px 12px -2px rgba(11, 21, 35, 0.04);
          border-color: #D6CFBF;
        }

        .rk-dark-card {
          background: linear-gradient(145deg, #0F1E32 0%, #16273F 100%);
          border: 1px solid #233A57;
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.25);
        }

        /* Typography & Editorial Accents */
        .rk-font-display {
          font-family: 'Cormorant Garamond', Georgia, serif;
          letter-spacing: -0.015em;
        }

        .rk-editorial-quote::before {
          content: "“";
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 5rem;
          line-height: 0;
          position: absolute;
          top: 2rem;
          left: 1.5rem;
          color: rgba(200, 90, 50, 0.15);
          pointer-events: none;
        }

        /* Custom Interactive Button Pill */
        .rk-btn-primary {
          background-color: var(--rk-terra-500);
          color: #FFFFFF;
          font-weight: 500;
          box-shadow: 0 4px 14px 0 rgba(200, 90, 50, 0.32);
          transition: all 0.25s ease;
        }

        .rk-btn-primary:hover {
          background-color: var(--rk-terra-600);
          transform: translateY(-1px);
          box-shadow: 0 6px 20px 0 rgba(200, 90, 50, 0.44);
        }

        .rk-btn-secondary {
          background-color: #FFFFFF;
          color: var(--rk-slate-900);
          border: 1px solid var(--rk-border-silk);
          transition: all 0.25s ease;
        }

        .rk-btn-secondary:hover {
          background-color: #F8F5EE;
          border-color: #D3CAB8;
          transform: translateY(-1px);
        }

        /* Decorative Badge */
        .rk-tag-terra {
          background-color: var(--rk-terra-50);
          color: var(--rk-terra-600);
          border: 1px solid rgba(200, 90, 50, 0.22);
        }

        .rk-tag-aegean {
          background-color: var(--rk-aegean-50);
          color: var(--rk-aegean-700);
          border: 1px solid rgba(30, 95, 116, 0.22);
        }

        /* Section divider subtle lines */
        .rk-section-divider {
          position: relative;
        }
        .rk-section-divider::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
          max-width: 1100px;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, var(--rk-border-silk) 50%, transparent 100%);
        }

        /* Micro animation pulse for active badge */
        @keyframes rk-gentle-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.04); }
        }
        .rk-pulsing-badge {
          animation: rk-gentle-pulse 3s infinite ease-in-out;
        }
      `}</style>

      {/* 
        ========================================================================
        SECTION 1: HERO SECTION
        A stunning full-width hero with adoption-focused headline, emotional
        supporting copy, high-end family photography, and dual primary CTAs.
        ========================================================================
      */}
      <section
        id="hero"
        className="relative pt-12 pb-20 md:pt-16 md:pb-28 lg:pt-20 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#F5F1E8]/70 via-[#FAF8F5] to-[#FAF8F5]"
      >
        {/* Ambient background orbs */}
        <div className="absolute top-10 right-0 w-[600px] h-[600px] ambient-radial-terra pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] ambient-radial-aegean pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Vision & Calls to Action */}
            <div className="lg:col-span-7 space-y-7">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full rk-tag-terra text-xs font-medium tracking-wide">
                <ShieldCheck className="w-4 h-4 text-[#C85A32]" />
                <span>
                  Ethical, Child-Centered Adoption Standards • Hague Aligned
                </span>
              </div>

              {/* Headline */}
              <h1 className="rk-font-display text-4xl sm:text-5xl lg:text-6xl text-[#0B1523] font-normal leading-[1.12]">
                Every Child Deserves the Lifelong Sanctuary of a{" "}
                <span className="italic font-serif text-[#C85A32] underline decoration-[#C85A32]/30 decoration-2 underline-offset-8">
                  Loving Family
                </span>
              </h1>

              {/* Supporting emotional copy */}
              <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl font-light">
                RK-Adoption unites prospective adoptive parents with children in
                need of permanent homes through compassionate social guidance,
                statutory integrity, and trauma-informed lifelong care. We
                replace uncertainty with clarity and human dignity.
              </p>

              {/* CTAs & Micro Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#start-journey"
                  className="rk-btn-primary px-7 py-3.5 rounded-xl font-medium text-sm flex items-center justify-center gap-2 group text-center"
                >
                  <span>Begin Your Adoption Journey</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#process"
                  className="rk-btn-secondary px-6 py-3.5 rounded-xl font-medium text-sm flex items-center justify-center gap-2 text-center"
                >
                  <Compass className="w-4 h-4 text-[#1E5F74]" />
                  <span>Explore the 5-Step Process</span>
                </a>
              </div>

              {/* Key Trust Micro-Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#E6E1D8]/80 max-w-xl">
                <div>
                  <div className="text-2xl font-semibold text-[#0B1523] tracking-tight">
                    100%
                  </div>
                  <div className="text-xs text-[#64748B] mt-0.5">
                    Statutory Transparency
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-[#0B1523] tracking-tight">
                    1-on-1
                  </div>
                  <div className="text-xs text-[#64748B] mt-0.5">
                    Licensed Caseworker
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-[#0B1523] tracking-tight">
                    Lifelong
                  </div>
                  <div className="text-xs text-[#64748B] mt-0.5">
                    Post-Placement Care
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Artwork */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Photography Frame */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#E9E4DC]">
                  <img
                    src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=1000&q=80"
                    alt="Adoptive family sharing a warm and joyful moment together outdoors"
                    className="w-full h-[460px] object-cover object-center transform hover:scale-102 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1523]/80 via-transparent to-transparent" />

                  {/* Photo Caption */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-xs uppercase tracking-widest text-[#E07A5F] font-semibold mb-1">
                      Family Preservation & Care
                    </p>
                    <p className="text-sm font-light text-white/95 leading-snug">
                      "Building a family through adoption is not just welcoming
                      a child; it is expanding your capacity for unconditional
                      grace."
                    </p>
                  </div>
                </div>

                {/* Floating Micro-Badge 1: Caseworker Guidance */}
                <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-[#E6E1D8] flex items-center gap-3 max-w-[240px]">
                  <div className="w-10 h-10 rounded-xl bg-[#FCECE4] flex items-center justify-center text-[#C85A32] shrink-0">
                    <Heart className="w-5 h-5 fill-[#C85A32]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#0B1523]">
                      Child Dignity First
                    </div>
                    <div className="text-[11px] text-[#64748B]">
                      Zero commercialization
                    </div>
                  </div>
                </div>

                {/* Floating Micro-Badge 2: Safeguarded Verification */}
                <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-[#E6E1D8] flex items-center gap-3 max-w-[260px]">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF5F8] flex items-center justify-center text-[#1E5F74] shrink-0">
                    <Scale className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#0B1523]">
                      Statutory Legal Safeguards
                    </div>
                    <div className="text-[11px] text-[#64748B]">
                      Judicial court oversight
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 2: TRUST AND CREDIBILITY SECTION
        Child welfare principles, transparency, professional social work
        standards, and verifiable platform values.
        ========================================================================
      */}
      <section id="trust" className="py-20 bg-white rk-section-divider">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#C85A32]">
              Ethical Integrity & Public Accountability
            </span>
            <h2 className="rk-font-display text-3xl sm:text-4xl text-[#0B1523] mt-2 mb-4 font-normal">
              Built on Unwavering Child Welfare Principles
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] font-light leading-relaxed">
              Adoption is an indelible sacred trust. RK-Adoption maintains
              uncompromising fidelity to child safeguarding, transparent
              procedural frameworks, and ethical social work practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pillar 1 */}
            <div className="rk-glass-card rounded-2xl p-7 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FCECE4] flex items-center justify-center text-[#C85A32] mb-5">
                  <Scale className="w-6 h-6" />
                </div>
                <h3 className="text-base font-semibold text-[#0B1523] mb-2.5">
                  Statutory Rule of Law
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Every placement pathway conforms strictly to authorized
                  central and regional child welfare statutes. We operate with
                  zero shortcuts, honoring family court jurisdictions.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-[#E6E1D8]/60 flex items-center text-[11px] font-medium text-[#C85A32]">
                <span>Judicially compliant process</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="rk-glass-card rounded-2xl p-7 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EBF5F8] flex items-center justify-center text-[#1E5F74] mb-5">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="text-base font-semibold text-[#0B1523] mb-2.5">
                  Trauma-Informed Social Work
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Led by certified child development professionals and licensed
                  caseworkers who prepare prospective parents for attachment
                  dynamics, emotional co-regulation, and unconditional care.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-[#E6E1D8]/60 flex items-center text-[11px] font-medium text-[#1E5F74]">
                <span>Certified professional staff</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="rk-glass-card rounded-2xl p-7 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FBF0E4] flex items-center justify-center text-[#D97736] mb-5">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-base font-semibold text-[#0B1523] mb-2.5">
                  Privacy-by-Design Architecture
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Sensitive adoption dossiers, medical reports, and family
                  background documents are guarded by end-to-end encryption.
                  Minors' identities are protected with strict non-public
                  protocols.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-[#E6E1D8]/60 flex items-center text-[11px] font-medium text-[#D97736]">
                <span>Encrypted documentation vault</span>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="rk-glass-card rounded-2xl p-7 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F0EBE1] flex items-center justify-center text-[#526781] mb-5">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-base font-semibold text-[#0B1523] mb-2.5">
                  Zero Commercialization
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  We enforce a strict ethical charter against hidden fees,
                  expedited queues, or monetization of placement. Itemized
                  statutory costs are disclosed with total clarity.
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-[#E6E1D8]/60 flex items-center text-[11px] font-medium text-[#526781]">
                <span>Anti-exploitation protocols</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 3: OUR MISSION AND VISION
        Explaining RK-Adoption’s mission to support children and prospective
        families through a compassionate, ethical, and responsible journey.
        ========================================================================
      */}
      <section id="mission" className="py-24 bg-[#FAF8F5] rk-section-divider">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#E6E1D8]">
                <img
                  src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=900&q=80"
                  alt="Mother gently reading a storybook to her child in an atmosphere of warmth"
                  className="w-full h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1523]/70 via-transparent to-transparent" />

                {/* Embedded Mission Pledge */}
                <div className="absolute bottom-6 left-6 right-6 text-white p-5 rounded-2xl bg-[#0B1523]/80 backdrop-blur-md border border-white/10">
                  <div className="flex items-center gap-2 text-[#E07A5F] text-xs font-semibold uppercase tracking-wider mb-1">
                    <Heart className="w-3.5 h-3.5 fill-[#E07A5F]" />
                    <span>The Sacred Mandate</span>
                  </div>
                  <p className="text-xs font-light text-slate-200 leading-relaxed">
                    "Every legal procedure, every home assessment, and every
                    counseling conversation exists to serve a single noble
                    purpose: the permanent emotional safety of a child."
                  </p>
                </div>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <span className="text-xs uppercase font-semibold tracking-wider text-[#1E5F74]">
                Purpose & Philosophy
              </span>
              <h2 className="rk-font-display text-3xl sm:text-4xl lg:text-5xl text-[#0B1523] font-normal leading-tight">
                Transforming Adoption from Administrative Complexity into a
                Compassionate Partnership
              </h2>
              <p className="text-base text-[#475569] leading-relaxed font-light">
                At RK-Adoption, we envision a world where no eligible child is
                left without a loving, permanently nurturing home, and where no
                hopeful parent is left stranded by opaque administrative
                procedures.
              </p>

              {/* Three Core Pillars */}
              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-[#E6E1D8] flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#FCECE4] flex items-center justify-center text-[#C85A32] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#0B1523]">
                      Unconditional Child-Centricity
                    </h3>
                    <p className="text-xs text-[#64748B] mt-0.5 leading-relaxed">
                      Adoption is fundamentally about finding the right loving
                      family for a child in need, not finding a child for a
                      family. This subtle distinction drives our entire ethical
                      framework.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E6E1D8] flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#EBF5F8] flex items-center justify-center text-[#1E5F74] shrink-0 mt-0.5">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#0B1523]">
                      Compassionate Education & Demystification
                    </h3>
                    <p className="text-xs text-[#64748B] mt-0.5 leading-relaxed">
                      We guide prospective families through pre-adoption
                      training on attachment psychology, grief, sibling
                      dynamics, and cultural continuity so parents are truly
                      prepared.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E6E1D8] flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#FBF0E4] flex items-center justify-center text-[#D97736] shrink-0 mt-0.5">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#0B1523]">
                      Permanent Post-Placement Stewardship
                    </h3>
                    <p className="text-xs text-[#64748B] mt-0.5 leading-relaxed">
                      Adoption does not conclude when the legal gavel falls. Our
                      platform stands as a lifelong companion through
                      developmental transitions, adolescent identity questions,
                      and community reunions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 4: START YOUR ADOPTION JOURNEY
        Interactive introduction for prospective adoptive parents, with clear
        options to understand eligibility, explore the process, and connect.
        ========================================================================
      */}
      <section id="start-journey" className="py-24 bg-white rk-section-divider">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#C85A32]">
              Your Gateway to Parenthood
            </span>
            <h2 className="rk-font-display text-3xl sm:text-4xl text-[#0B1523] mt-2 mb-4 font-normal">
              Begin Your Adoption Journey with Confidence
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] font-light leading-relaxed">
              Every beautiful family story starts with a single step of
              curiosity. Choose the pathway that matches where you currently are
              in your adoption reflections.
            </p>
          </div>

          {/* Interactive Tab Switcher */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1.5 rounded-2xl bg-[#F3EFEA] border border-[#E6E1D8] max-w-xl w-full">
              <button
                onClick={() => setActiveJourneyTab("steps")}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeJourneyTab === "steps"
                    ? "bg-white text-[#0B1523] shadow-sm font-semibold"
                    : "text-[#64748B] hover:text-[#0B1523]"
                }`}
              >
                1. Explore The Pathway
              </button>
              <button
                onClick={() => setActiveJourneyTab("eligibility")}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeJourneyTab === "eligibility"
                    ? "bg-white text-[#0B1523] shadow-sm font-semibold"
                    : "text-[#64748B] hover:text-[#0B1523]"
                }`}
              >
                2. Check General Criteria
              </button>
              <button
                onClick={() => setActiveJourneyTab("consultation")}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeJourneyTab === "consultation"
                    ? "bg-white text-[#0B1523] shadow-sm font-semibold"
                    : "text-[#64748B] hover:text-[#0B1523]"
                }`}
              >
                3. Confidential Guidance
              </button>
            </div>
          </div>

          {/* Tab Content Display */}
          <div className="max-w-4xl mx-auto">
            {activeJourneyTab === "steps" && (
              <div className="rk-glass-card rounded-3xl p-8 sm:p-10 border border-[#E6E1D8]">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="space-y-4 md:w-3/5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#C85A32]">
                      Stage-by-Stage Roadmap
                    </span>
                    <h3 className="text-2xl font-serif text-[#0B1523]">
                      Clear, Documented Milestones from Application to Final
                      Decree
                    </h3>
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                      Adoption involves legal safeguards designed to protect
                      vulnerable children. We break the multi-month journey into
                      transparent, manageable phases so you always know what to
                      expect.
                    </p>
                    <ul className="space-y-2 text-xs text-[#334155] pt-2">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#C85A32]" />
                        <span>
                          Preliminary orientation and statutory eligibility
                          clearance
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#C85A32]" />
                        <span>
                          Supportive Home Study with a licensed social worker
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#C85A32]" />
                        <span>
                          Judicial finalization in authorized family court
                        </span>
                      </li>
                    </ul>
                    <div className="pt-3">
                      <a
                        href="#process"
                        className="rk-btn-primary inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-medium"
                      >
                        <span>View Detailed Process Cards</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                  <div className="md:w-2/5 w-full">
                    <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E6E1D8] text-center space-y-3">
                      <div className="w-12 h-12 rounded-xl bg-[#FCECE4] text-[#C85A32] flex items-center justify-center mx-auto">
                        <Compass className="w-6 h-6" />
                      </div>
                      <h4 className="text-sm font-semibold text-[#0B1523]">
                        Average Readiness Time
                      </h4>
                      <div className="text-2xl font-semibold text-[#C85A32]">
                        3 – 5 Months
                      </div>
                      <p className="text-[11px] text-[#64748B] leading-snug">
                        For complete home study dossier validation and family
                        educational modules.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeJourneyTab === "eligibility" && (
              <div className="rk-glass-card rounded-3xl p-8 sm:p-10 border border-[#E6E1D8]">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="space-y-4 md:w-3/5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#1E5F74]">
                      Prerequisites & Preparation
                    </span>
                    <h3 className="text-2xl font-serif text-[#0B1523]">
                      Understanding Who Can Legally Adopt
                    </h3>
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                      Adoption laws prioritize the stability and emotional
                      readiness of the prospective parent. Most jurisdictions
                      evaluate health, criminal history clearances, living
                      environment, and age differentials.
                    </p>
                    <ul className="space-y-2 text-xs text-[#334155] pt-2">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#1E5F74]" />
                        <span>
                          Minimum legal age thresholds (typically 21–25
                          depending on state)
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#1E5F74]" />
                        <span>
                          Physical and mental fitness certified by licensed
                          doctors
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#1E5F74]" />
                        <span>
                          Clear background verification without history of child
                          abuse or violence
                        </span>
                      </li>
                    </ul>
                    <div className="pt-3">
                      <a
                        href="#eligibility"
                        className="rk-btn-secondary inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-medium"
                      >
                        <span>Take Self-Assessment Check</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                  <div className="md:w-2/5 w-full">
                    <div className="p-6 rounded-2xl bg-[#EBF5F8] border border-[#C5DFE7] text-center space-y-3">
                      <div className="w-12 h-12 rounded-xl bg-white text-[#1E5F74] flex items-center justify-center mx-auto shadow-sm">
                        <Scale className="w-6 h-6" />
                      </div>
                      <h4 className="text-sm font-semibold text-[#0B1523]">
                        Statutory Equality
                      </h4>
                      <p className="text-xs text-[#1E5F74] font-medium">
                        Single, Married, and Diverse Families
                      </p>
                      <p className="text-[11px] text-[#526781] leading-snug">
                        Subject to applicable regional statutory family laws and
                        adoption regulations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeJourneyTab === "consultation" && (
              <div className="rk-glass-card rounded-3xl p-8 sm:p-10 border border-[#E6E1D8]">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="space-y-4 md:w-3/5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#D97736]">
                      Human Connection
                    </span>
                    <h3 className="text-2xl font-serif text-[#0B1523]">
                      Speak with an Experienced Adoption Social Worker
                    </h3>
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                      Have questions about your specific situation? Our licensed
                      advisors offer confidential, no-obligation consultations
                      to address your personal concerns, timelines, and legal
                      questions.
                    </p>
                    <div className="space-y-2 pt-2 text-xs text-[#475569]">
                      <div className="flex items-center gap-2">
                        <PhoneCall className="w-4 h-4 text-[#D97736]" />
                        <span>
                          Confidential Helpline: +9191538326333 (24/7)
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-[#D97736]" />
                        <span>Email Inquiry: rupasingh10456@gmail.com</span>
                      </div>
                    </div>
                    <div className="pt-3">
                      <a
                        href="#final-cta"
                        className="rk-btn-primary inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-medium"
                      >
                        <span>Schedule Free Consultation</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                  <div className="md:w-2/5 w-full">
                    <div className="p-6 rounded-2xl bg-[#FBF0E4] border border-[#EED7C0] text-center space-y-3">
                      <div className="w-12 h-12 rounded-xl bg-white text-[#D97736] flex items-center justify-center mx-auto shadow-sm">
                        <Heart className="w-6 h-6 fill-[#D97736]" />
                      </div>
                      <h4 className="text-sm font-semibold text-[#0B1523]">
                        Zero Judgment Zone
                      </h4>
                      <p className="text-[11px] text-[#64748B] leading-snug">
                        Every consultation is conducted with profound respect
                        for your family's personal path and emotional
                        well-being.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 5: ADOPTION PROCESS OVERVIEW
        Displaying the adoption journey through beautiful step-based cards,
        from initial inquiry to post-adoption support, with clear statutory notice.
        ========================================================================
      */}
      <section id="process" className="py-24 bg-[#FAF8F5] rk-section-divider">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#1E5F74]">
              Statutory Procedural Roadmap
            </span>
            <h2 className="rk-font-display text-3xl sm:text-4xl lg:text-5xl text-[#0B1523] mt-2 mb-4 font-normal">
              The 5-Step Journey to Final Legal Placement
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] font-light leading-relaxed">
              Adoption is a legal and emotional metamorphosis. Below is our
              transparent step-by-step breakdown. Note: exact procedures and
              timelines depend on the statutory child welfare legal framework in
              your jurisdiction.
            </p>
          </div>

          {/* Interactive Step Navigator Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10 max-w-5xl mx-auto">
            {PROCESS_STEPS.map((step) => {
              const isSelected = step.id === activeStepId;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStepId(step.id)}
                  className={`text-left p-3.5 sm:p-4 rounded-2xl transition-all border ${
                    isSelected
                      ? "bg-[#0B1523] text-white border-[#0B1523] shadow-md transform -translate-y-0.5"
                      : "bg-white text-[#475569] border-[#E6E1D8] hover:bg-[#F3EFEA]"
                  }`}
                >
                  <div
                    className={`text-[10px] font-semibold uppercase tracking-wider mb-1 ${
                      isSelected ? "text-[#E07A5F]" : "text-[#64748B]"
                    }`}
                  >
                    Stage 0{step.id}
                  </div>
                  <div className="text-xs sm:text-sm font-medium line-clamp-1">
                    {step.title.split(" ")[0]} {step.title.split(" ")[1] || ""}
                  </div>
                  <div
                    className={`text-[11px] mt-1 font-mono ${
                      isSelected ? "text-slate-300" : "text-[#94A3B8]"
                    }`}
                  >
                    {step.duration}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Detailed Inspector Card */}
          <div className="max-w-5xl mx-auto rk-glass-card rounded-3xl p-8 sm:p-12 border border-[#E6E1D8] shadow-lg">
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              {/* Left Column: Overview & Milestones */}
              <div className="lg:w-3/5 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full rk-tag-terra text-xs font-medium mb-3">
                    <Clock className="w-3.5 h-3.5 text-[#C85A32]" />
                    <span>Estimated Duration: {currentStep.duration}</span>
                  </div>
                  <h3 className="rk-font-display text-2xl sm:text-3xl text-[#0B1523]">
                    {currentStep.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#C85A32] mt-1">
                    "{currentStep.tagline}"
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {currentStep.description}
                </p>

                {/* Key Checkpoints */}
                <div>
                  <h4 className="text-xs uppercase font-semibold tracking-wider text-[#0B1523] mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C85A32]" />
                    <span>Required Milestones & Activities</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-[#334155]">
                    {currentStep.keyCheckpoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-4 h-4 rounded-full bg-[#FCECE4] text-[#C85A32] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Required Paperwork & Social Worker Role */}
              <div className="lg:w-2/5 w-full space-y-5">
                {/* Documents Needed */}
                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E6E1D8]">
                  <h4 className="text-xs uppercase font-semibold tracking-wider text-[#1E5F74] mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#1E5F74]" />
                    <span>Essential Dossier Paperwork</span>
                  </h4>
                  <ul className="space-y-2 text-[11px] text-[#475569]">
                    {currentStep.documents.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#1E5F74] font-bold">•</span>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Caseworker Role */}
                <div className="p-5 rounded-2xl bg-[#0F1E32] text-white">
                  <div className="flex items-center gap-2 text-[#E07A5F] text-xs font-semibold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Role of Your Social Worker</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {currentStep.roleOfWorker}
                  </p>
                </div>
              </div>
            </div>

            {/* Statutory Disclaimer Box */}
            <div className="mt-8 pt-6 border-t border-[#E6E1D8] flex items-start gap-3 text-xs text-[#64748B]">
              <AlertCircle className="w-4 h-4 text-[#C85A32] shrink-0 mt-0.5" />
              <p>
                <strong className="text-[#0B1523]">
                  Statutory Legal Note:
                </strong>{" "}
                All procedures, statutory approvals, home study assessments, and
                final adoption decrees are subject exclusively to the certified
                family court system and statutory child welfare authorities in
                your jurisdiction. RK-Adoption provides educational and
                administrative facilitation under licensed guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 6: CHILDREN AND FAMILY MATCHING INFORMATION
        Sensitive, privacy-conscious section explaining how appropriate
        matching works. No identifiable child information or browsable catalog.
        ========================================================================
      */}
      <section id="matching" className="py-24 bg-white rk-section-divider">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Educational Policy & Dignity Statement */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full rk-tag-aegean text-xs font-medium">
                <EyeOff className="w-4 h-4 text-[#1E5F74]" />
                <span>
                  Zero Public Child Listings • Child Safeguarding Protocol
                </span>
              </div>

              <h2 className="rk-font-display text-3xl sm:text-4xl lg:text-5xl text-[#0B1523] font-normal leading-tight">
                Honoring the Sacred Dignity & Privacy of Every Child
              </h2>

              <p className="text-base text-[#475569] leading-relaxed font-light">
                Unlike commercial or outdated platforms, RK-Adoption strictly
                refuses to publish public photograph galleries, online shopping
                carts, or searchable catalogs of waiting children.
              </p>

              <div className="p-5 rounded-2xl bg-[#FAF8F5] border-l-4 border-[#C85A32] text-xs text-[#475569] leading-relaxed space-y-2">
                <p className="font-semibold text-[#0B1523]">
                  Why We Do Not Display Child Profiles:
                </p>
                <p>
                  A child awaiting a family is not a commodity to be browsed.
                  Minors possess an inherent human right to privacy, dignity,
                  and psychological protection under the United Nations
                  Convention on the Rights of the Child (UNCRC). Public
                  galleries expose vulnerable children to stigma and
                  commercialization.
                </p>
              </div>

              {/* How Ethical Matching Actually Happens */}
              <div className="space-y-3 pt-2">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0B1523]">
                  How Ethical Matching Operates at RK-Adoption:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white border border-[#E6E1D8]">
                    <div className="text-xs font-semibold text-[#0B1523] mb-1 flex items-center gap-1.5">
                      <Scale className="w-4 h-4 text-[#1E5F74]" />
                      <span>Multidisciplinary Review</span>
                    </div>
                    <p className="text-[11px] text-[#64748B] leading-relaxed">
                      Independent panels of pediatricians, psychologists, and
                      senior caseworkers match children based on specific
                      medical and emotional compatibility.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-[#E6E1D8]">
                    <div className="text-xs font-semibold text-[#0B1523] mb-1 flex items-center gap-1.5">
                      <Heart className="w-4 h-4 text-[#C85A32]" />
                      <span>Sibling Preservation</span>
                    </div>
                    <p className="text-[11px] text-[#64748B] leading-relaxed">
                      We actively seek adoptive families capable of welcoming
                      sibling sets together to protect vital biological and
                      emotional attachments.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Infographic of Matching Criteria */}
            <div className="lg:col-span-5">
              <div className="rk-dark-card rounded-3xl p-8 text-white relative overflow-hidden">
                {/* Subtle background glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#C85A32]/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-2 text-[#E07A5F] text-xs font-semibold uppercase tracking-wider mb-4">
                  <BadgeCheck className="w-4 h-4" />
                  <span>The Four Pillars of Ethical Matching</span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-xs font-semibold text-white mb-0.5">
                      1. Best Interest of the Child
                    </div>
                    <p className="text-[11px] text-slate-300">
                      The child's psychological needs dictate the selection of
                      parents, never administrative convenience.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-xs font-semibold text-white mb-0.5">
                      2. Medical & Developmental Clarity
                    </div>
                    <p className="text-[11px] text-slate-300">
                      Complete, unvarnished health and neurodevelopmental
                      dossiers are reviewed by prospective parents and their
                      independent pediatricians.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-xs font-semibold text-white mb-0.5">
                      3. Cultural & Linguistic Continuity
                    </div>
                    <p className="text-[11px] text-slate-300">
                      Where feasible, efforts are made to support the child's
                      heritage, identity roots, and mother-tongue familiarity.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-xs font-semibold text-white mb-0.5">
                      4. Child's Assent & Participation
                    </div>
                    <p className="text-[11px] text-slate-300">
                      For older children (typically age 5+), the child
                      participates in transition conversations at their own
                      developmental pace.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 text-center">
                  <span className="text-[11px] text-slate-400">
                    Strict adherence to the Hague Convention on Intercountry
                    Adoption
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 7: WHY CHOOSE RK-ADOPTION
        Values, user-focused guidance, privacy-conscious approach,
        transparent information, accessibility, and family support.
        ========================================================================
      */}
      <section
        id="why-choose"
        className="py-24 bg-[#FAF8F5] rk-section-divider"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#C85A32]">
              The RK-Adoption Distinction
            </span>
            <h2 className="rk-font-display text-3xl sm:text-4xl lg:text-5xl text-[#0B1523] mt-2 mb-4 font-normal">
              Why Prospective Families Trust Our Guidance
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] font-light leading-relaxed">
              We have re-engineered the adoption experience from an intimidating
              labyrinth of bureaucratic hurdles into an empowering, supportive,
              and emotionally grounded journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="rk-glass-card rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FCECE4] flex items-center justify-center text-[#C85A32] mb-6">
                  <Heart className="w-6 h-6 fill-[#C85A32]" />
                </div>
                <h3 className="text-lg font-serif text-[#0B1523] mb-2">
                  Empathy at Every Interaction
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  We understand the vulnerability, anxiety, and hopes of
                  prospective parents. Our caseworkers provide warm,
                  human-centered emotional support alongside regulatory
                  guidance.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E6E1D8]/60 text-xs font-medium text-[#C85A32]">
                Compassionate caseworkers
              </div>
            </div>

            {/* Card 2 */}
            <div className="rk-glass-card rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EBF5F8] flex items-center justify-center text-[#1E5F74] mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif text-[#0B1523] mb-2">
                  Strict Legal Safety & Compliance
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Every step is aligned with official state adoption bodies and
                  central adoption resource authorities. We safeguard your
                  family against illegal or invalid procedures.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E6E1D8]/60 text-xs font-medium text-[#1E5F74]">
                Ironclad statutory standing
              </div>
            </div>

            {/* Card 3 */}
            <div className="rk-glass-card rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FBF0E4] flex items-center justify-center text-[#D97736] mb-6">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif text-[#0B1523] mb-2">
                  World-Class Parent Education
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Access comprehensive preparation modules on therapeutic
                  parenting, transracial adoption dynamics, attachment repair,
                  and positive adoption language.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E6E1D8]/60 text-xs font-medium text-[#D97736]">
                Evidence-based training
              </div>
            </div>

            {/* Card 4 */}
            <div className="rk-glass-card rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F0EBE1] flex items-center justify-center text-[#526781] mb-6">
                  <FileCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif text-[#0B1523] mb-2">
                  Transparent Digital Dossiers
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Track your home study progress, pending medical checks, and
                  document expiration alerts in real time through an encrypted
                  family portal.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E6E1D8]/60 text-xs font-medium text-[#526781]">
                Clear milestones tracking
              </div>
            </div>

            {/* Card 5 */}
            <div className="rk-glass-card rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FCECE4] flex items-center justify-center text-[#C85A32] mb-6">
                  <Scale className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif text-[#0B1523] mb-2">
                  Honest Financial Transparency
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Zero unexpected costs. We provide comprehensive, itemized
                  breakdowns of legal filing fees, home study assessments, and
                  medical verification expenses up front.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E6E1D8]/60 text-xs font-medium text-[#C85A32]">
                Zero hidden fees
              </div>
            </div>

            {/* Card 6 */}
            <div className="rk-glass-card rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EBF5F8] flex items-center justify-center text-[#1E5F74] mb-6">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif text-[#0B1523] mb-2">
                  Lifelong Post-Placement Care
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Our involvement does not end at finalization. We host adoptive
                  parent coffee circles, provide child therapy referrals, and
                  organize annual family retreats.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E6E1D8]/60 text-xs font-medium text-[#1E5F74]">
                Lifelong family network
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 8: ELIGIBILITY AND REQUIREMENTS
        General eligibility considerations, documentation, and assessments.
        Includes interactive readiness checker with clear legal disclaimer.
        ========================================================================
      */}
      <section id="eligibility" className="py-24 bg-white rk-section-divider">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Overview of Legal Requirements */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase font-semibold tracking-wider text-[#1E5F74]">
                Statutory Criteria & Verification
              </span>
              <h2 className="rk-font-display text-3xl sm:text-4xl text-[#0B1523] font-normal leading-tight">
                General Adoption Eligibility & Legal Considerations
              </h2>
              <p className="text-sm text-[#475569] leading-relaxed font-light">
                Adoption regulations are enacted to ensure children enter safe,
                enduring, and psychologically nurturing homes. While exact
                statutes vary by jurisdiction, standard international
                requirements include:
              </p>

              {/* Requirement Checklist Items */}
              <div className="space-y-3.5 text-xs text-[#334155]">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EBF5F8] text-[#1E5F74] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <strong className="text-[#0B1523]">
                      Age Criteria & Differential:
                    </strong>{" "}
                    Prospective parents must meet legal age minimums (typically
                    21–25) with a maximum composite age difference depending on
                    the child's age.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EBF5F8] text-[#1E5F74] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <strong className="text-[#0B1523]">
                      Medical & Psychological Fitness:
                    </strong>{" "}
                    Physical and mental stability certified by authorized
                    medical physicians, confirming freedom from life-limiting
                    incapacitating illness.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EBF5F8] text-[#1E5F74] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <strong className="text-[#0B1523]">
                      Financial & Residential Stability:
                    </strong>{" "}
                    Consistent income, adequate health insurance, and a
                    hygienic, safe home environment with personal space for the
                    child.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EBF5F8] text-[#1E5F74] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <strong className="text-[#0B1523]">
                      Criminal & Safeguarding Clearance:
                    </strong>{" "}
                    Complete fingerprinting and background checks confirming
                    zero history of violence, neglect, or child offenses.
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6E1D8] text-[11px] text-[#64748B] leading-relaxed">
                <strong className="text-[#0B1523]">Legal Disclaimer:</strong>{" "}
                These requirements represent general comparative guidelines.
                They do not constitute formal legal counsel. Formal eligibility
                can only be established under the applicable statutory adoption
                acts of your specific country or state.
              </div>
            </div>

            {/* Interactive Self-Assessment Simulator */}
            <div className="lg:col-span-6">
              <div className="rk-glass-card rounded-3xl p-8 sm:p-10 border border-[#E6E1D8] shadow-md">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#C85A32]">
                      Self-Reflection Tool
                    </span>
                    <h3 className="text-xl font-serif text-[#0B1523] mt-0.5">
                      Adoption Readiness Quick-Check
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#FCECE4] text-[#C85A32] flex items-center justify-center font-bold text-sm">
                    {completedCount}/4
                  </div>
                </div>

                <p className="text-xs text-[#64748B] mb-6">
                  Select the statements that apply to your current circumstances
                  to view initial readiness guidance:
                </p>

                <div className="space-y-3">
                  <button
                    onClick={() => toggleEligibility("age")}
                    className={`w-full text-left p-3.5 rounded-xl border text-xs flex items-center justify-between transition-all ${
                      eligibilityAnswers.age
                        ? "bg-[#FDF6F1] border-[#C85A32] text-[#0B1523]"
                        : "bg-white border-[#E6E1D8] text-[#64748B] hover:border-[#D6CFBF]"
                    }`}
                  >
                    <span>
                      I / We meet the statutory age threshold (age 21+ with
                      stable residency)
                    </span>
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                        eligibilityAnswers.age
                          ? "bg-[#C85A32] border-[#C85A32] text-white"
                          : "border-[#CBD5E1]"
                      }`}
                    >
                      {eligibilityAnswers.age && (
                        <Check className="w-3.5 h-3.5" />
                      )}
                    </div>
                  </button>

                  <button
                    onClick={() => toggleEligibility("residence")}
                    className={`w-full text-left p-3.5 rounded-xl border text-xs flex items-center justify-between transition-all ${
                      eligibilityAnswers.residence
                        ? "bg-[#FDF6F1] border-[#C85A32] text-[#0B1523]"
                        : "bg-white border-[#E6E1D8] text-[#64748B] hover:border-[#D6CFBF]"
                    }`}
                  >
                    <span>
                      Our household provides a safe, stable home environment
                      with adequate space
                    </span>
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                        eligibilityAnswers.residence
                          ? "bg-[#C85A32] border-[#C85A32] text-white"
                          : "border-[#CBD5E1]"
                      }`}
                    >
                      {eligibilityAnswers.residence && (
                        <Check className="w-3.5 h-3.5" />
                      )}
                    </div>
                  </button>

                  <button
                    onClick={() => toggleEligibility("background")}
                    className={`w-full text-left p-3.5 rounded-xl border text-xs flex items-center justify-between transition-all ${
                      eligibilityAnswers.background
                        ? "bg-[#FDF6F1] border-[#C85A32] text-[#0B1523]"
                        : "bg-white border-[#E6E1D8] text-[#64748B] hover:border-[#D6CFBF]"
                    }`}
                  >
                    <span>
                      I / We can clear criminal background and child protection
                      registry checks
                    </span>
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                        eligibilityAnswers.background
                          ? "bg-[#C85A32] border-[#C85A32] text-white"
                          : "border-[#CBD5E1]"
                      }`}
                    >
                      {eligibilityAnswers.background && (
                        <Check className="w-3.5 h-3.5" />
                      )}
                    </div>
                  </button>

                  <button
                    onClick={() => toggleEligibility("financial")}
                    className={`w-full text-left p-3.5 rounded-xl border text-xs flex items-center justify-between transition-all ${
                      eligibilityAnswers.financial
                        ? "bg-[#FDF6F1] border-[#C85A32] text-[#0B1523]"
                        : "bg-white border-[#E6E1D8] text-[#64748B] hover:border-[#D6CFBF]"
                    }`}
                  >
                    <span>
                      I / We are prepared to commit to pre-adoption parent
                      education workshops
                    </span>
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                        eligibilityAnswers.financial
                          ? "bg-[#C85A32] border-[#C85A32] text-white"
                          : "border-[#CBD5E1]"
                      }`}
                    >
                      {eligibilityAnswers.financial && (
                        <Check className="w-3.5 h-3.5" />
                      )}
                    </div>
                  </button>
                </div>

                {/* Readiness Meter Result */}
                <div className="mt-6 p-4 rounded-xl bg-[#FAF8F5] border border-[#E6E1D8]">
                  <div className="flex items-center justify-between text-xs font-semibold mb-2">
                    <span className="text-[#0B1523]">
                      Initial Readiness Level:
                    </span>
                    <span className="text-[#C85A32]">
                      {completedCount === 4
                        ? "Excellent Potential Readiness"
                        : completedCount >= 2
                          ? "Promising Exploration Phase"
                          : "Early Information Stage"}
                    </span>
                  </div>
                  <div className="w-full bg-[#E6E1D8] h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-[#C85A32] h-full transition-all duration-500 rounded-full"
                      style={{ width: `${(completedCount / 4) * 100}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-[#64748B] mt-3 leading-snug">
                    {completedCount === 4
                      ? "You appear well-positioned to request an official orientation seminar and begin gathering documentation."
                      : "We recommend exploring our educational guides and scheduling an informal consultation to address specific questions."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 9: FAMILY STORIES AND EXPERIENCES
        Storytelling section featuring adoption experiences and family journeys.
        Clearly labeled as illustrative sample content to protect privacy.
        ========================================================================
      */}
      <section id="stories" className="py-24 bg-[#FAF8F5] rk-section-divider">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#C85A32]">
              Lived Experiences & Journeys
            </span>
            <h2 className="rk-font-display text-3xl sm:text-4xl lg:text-5xl text-[#0B1523] mt-2 mb-4 font-normal">
              Stories of Hope, Belonging, and Resilience
            </h2>
            <div className="inline-block px-3 py-1 rounded-full bg-[#F3EFEA] border border-[#E6E1D8] text-[11px] text-[#64748B] font-medium mt-1">
              Note: Sample profiles presented for illustrative purposes to
              protect child and family confidentiality.
            </div>
          </div>

          {/* Story Selector Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {FAMILY_STORIES.map((story, index) => (
              <button
                key={story.id}
                onClick={() => setActiveStoryIndex(index)}
                className={`py-2 px-4 rounded-xl text-xs font-medium transition-all ${
                  activeStoryIndex === index
                    ? "bg-[#0B1523] text-white shadow-sm font-semibold"
                    : "bg-white text-[#64748B] border border-[#E6E1D8] hover:bg-[#F3EFEA]"
                }`}
              >
                {story.family}
              </button>
            ))}
          </div>

          {/* Selected Story Spotlight Card */}
          <div className="max-w-5xl mx-auto rk-glass-card rounded-3xl overflow-hidden border border-[#E6E1D8] shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Photo Column */}
              <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full">
                <img
                  src={currentStory.photoUrl}
                  alt={currentStory.family}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-semibold text-[#0B1523] border border-white/50">
                    {currentStory.badge}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-[#0B1523]/85 backdrop-blur-md p-3.5 rounded-xl text-white">
                  <div className="text-xs font-semibold">
                    {currentStory.family}
                  </div>
                  <div className="text-[11px] text-slate-300 font-mono mt-0.5">
                    {currentStory.timeline}
                  </div>
                </div>
              </div>

              {/* Story Narrative Column */}
              <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="text-xs uppercase font-semibold tracking-wider text-[#C85A32]">
                    {currentStory.category}
                  </span>

                  <h3 className="rk-font-display text-2xl sm:text-3xl text-[#0B1523] leading-snug">
                    {currentStory.headline}
                  </h3>

                  {/* Emotional Quote */}
                  <div className="p-4 rounded-xl bg-[#FAF8F5] border-l-4 border-[#C85A32] italic text-xs sm:text-sm text-[#334155] leading-relaxed">
                    "{currentStory.quote}"
                  </div>

                  {/* Narrative Body */}
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-light">
                    {currentStory.narrative}
                  </p>
                </div>

                {/* Bottom Card Navigation */}
                <div className="pt-6 border-t border-[#E6E1D8] flex items-center justify-between text-xs">
                  <span className="text-[#64748B]">
                    Story {activeStoryIndex + 1} of {FAMILY_STORIES.length}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        setActiveStoryIndex((prev) =>
                          prev > 0 ? prev - 1 : FAMILY_STORIES.length - 1,
                        )
                      }
                      className="px-3 py-1.5 rounded-lg bg-white border border-[#E6E1D8] text-[#0B1523] hover:bg-[#F3EFEA]"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() =>
                        setActiveStoryIndex((prev) =>
                          prev < FAMILY_STORIES.length - 1 ? prev + 1 : 0,
                        )
                      }
                      className="px-3 py-1.5 rounded-lg bg-[#C85A32] text-white hover:bg-[#B24C27]"
                    >
                      Next Story
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 10: SUPPORT FOR PROSPECTIVE PARENTS
        Emotional preparation, counseling resources, educational materials,
        and professional guidance throughout the adoption journey.
        ========================================================================
      */}
      <section
        id="parent-support"
        className="py-24 bg-white rk-section-divider"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#1E5F74]">
              Holistic Care & Preparation
            </span>
            <h2 className="rk-font-display text-3xl sm:text-4xl lg:text-5xl text-[#0B1523] mt-2 mb-4 font-normal">
              Support Systems for Hopeful Parents
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] font-light leading-relaxed">
              Adopting is not merely a legal event; it is an emotional and
              spiritual awakening. We surround prospective mothers and fathers
              with trauma-informed resources at every milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pillar 1 */}
            <div className="p-7 rounded-2xl bg-[#FAF8F5] border border-[#E6E1D8] flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FCECE4] text-[#C85A32] flex items-center justify-center mb-5">
                  <Heart className="w-6 h-6 fill-[#C85A32]" />
                </div>
                <h3 className="text-base font-semibold text-[#0B1523] mb-2">
                  Pre-Adoption Counseling
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Confidential, non-evaluative therapy sessions designed to
                  process fertility grief, manage waitlist anxieties, and
                  strengthen spousal alignment.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-[#E6E1D8] text-[11px] font-medium text-[#C85A32]">
                Individual & Couples Circles
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-7 rounded-2xl bg-[#FAF8F5] border border-[#E6E1D8] flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EBF5F8] text-[#1E5F74] flex items-center justify-center mb-5">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-base font-semibold text-[#0B1523] mb-2">
                  Therapeutic Parenting Classes
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Evidence-based seminars on Trust-Based Relational Intervention
                  (TBRI), sensory integration, co-regulation, and positive
                  attachment building.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-[#E6E1D8] text-[11px] font-medium text-[#1E5F74]">
                Accredited Curriculum
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-7 rounded-2xl bg-[#FAF8F5] border border-[#E6E1D8] flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FBF0E4] text-[#D97736] flex items-center justify-center mb-5">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-base font-semibold text-[#0B1523] mb-2">
                  Prospective Parent Cohorts
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Join small, moderated peer groups of other couples and single
                  parents navigating the home study phase, building lasting
                  lifetime friendships.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-[#E6E1D8] text-[11px] font-medium text-[#D97736]">
                Monthly Peer Check-Ins
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="p-7 rounded-2xl bg-[#FAF8F5] border border-[#E6E1D8] flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F0EBE1] text-[#526781] flex items-center justify-center mb-5">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <h3 className="text-base font-semibold text-[#0B1523] mb-2">
                  Placement Crisis Hotline
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  A dedicated 24/7 helpline providing real-time coaching for
                  parents during the sensitive first 90 days of transition in
                  the home.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-[#E6E1D8] text-[11px] font-medium text-[#526781]">
                Immediate Crisis Navigation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 11: CHILD WELFARE AND PROTECTION
        Emphasizing children's rights, dignity, safety, privacy,
        safeguarding, and responsible adoption practices.
        ========================================================================
      */}
      <section
        id="child-welfare"
        className="py-24 bg-[#0B1523] text-white relative overflow-hidden"
      >
        {/* Subtle background glow */}
        <div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[350px] pointer-events-none opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, #C85A32 0%, transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#E07A5F]">
              Uncompromising Protection
            </span>
            <h2 className="rk-font-display text-3xl sm:text-4xl lg:text-5xl text-white mt-2 mb-4 font-normal">
              Child Rights, Safeguarding & Dignity First
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              Every child holds universal human rights under international law.
              RK-Adoption maintains a zero-tolerance policy regarding
              exploitation, unethical placement, or lack of transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C85A32]/20 text-[#E07A5F] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif text-white">
                Zero-Tolerance Anti-Trafficking
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                We stringently audit all institutional origin documentation,
                birth family relinquishments, and judicial free-for-adoption
                certifications to guarantee complete ethical and legal
                legitimacy.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#1E5F74]/30 text-[#60A5FA] flex items-center justify-center">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif text-white">
                Child Privacy & Data Protection
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Medical diagnostics, developmental observations, and case files
                of minors are treated with high-security confidentiality
                standards. Zero public dissemination or commercial profiling.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#D97736]/20 text-[#F59E0B] flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif text-white">
                Continuous Post-Placement Welfare
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Regular, supportive home visits during the post-placement
                supervisory period ensure the child is thriving emotionally,
                medically, and developmentally in their new home environment.
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 text-center max-w-4xl mx-auto">
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong className="text-white">
                Our International Commitment:
              </strong>{" "}
              RK-Adoption strictly adheres to the core tenets of the 1989 United
              Nations Convention on the Rights of the Child (UNCRC) and the 1993
              Hague Convention on Protection of Children and Co-operation in
              Respect of Intercountry Adoption.
            </p>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 12: EDUCATIONAL RESOURCES
        Articles, guides, checklists, adoption terminology, preparation materials.
        ========================================================================
      */}
      <section id="resources" className="py-24 bg-[#FAF8F5] rk-section-divider">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#C85A32]">
              Knowledge & Family Education
            </span>
            <h2 className="rk-font-display text-3xl sm:text-4xl lg:text-5xl text-[#0B1523] mt-2 mb-4 font-normal">
              Educational Guides & Preparation Toolkits
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] font-light leading-relaxed">
              Equip yourself with comprehensive literature developed by child
              psychologists, adoptive parents, and adoption attorneys.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            <button
              onClick={() => setResourceCategory("all")}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                resourceCategory === "all"
                  ? "bg-[#0B1523] text-white shadow-sm"
                  : "bg-white text-[#64748B] border border-[#E6E1D8] hover:bg-[#F3EFEA]"
              }`}
            >
              All Toolkits
            </button>
            <button
              onClick={() => setResourceCategory("legal")}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                resourceCategory === "legal"
                  ? "bg-[#0B1523] text-white shadow-sm"
                  : "bg-white text-[#64748B] border border-[#E6E1D8] hover:bg-[#F3EFEA]"
              }`}
            >
              Legal & Statutory
            </button>
            <button
              onClick={() => setResourceCategory("emotional")}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                resourceCategory === "emotional"
                  ? "bg-[#0B1523] text-white shadow-sm"
                  : "bg-white text-[#64748B] border border-[#E6E1D8] hover:bg-[#F3EFEA]"
              }`}
            >
              Attachment & Bonding
            </button>
            <button
              onClick={() => setResourceCategory("checklists")}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                resourceCategory === "checklists"
                  ? "bg-[#0B1523] text-white shadow-sm"
                  : "bg-white text-[#64748B] border border-[#E6E1D8] hover:bg-[#F3EFEA]"
              }`}
            >
              Practical Checklists
            </button>
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Resource 1 */}
            {(resourceCategory === "all" || resourceCategory === "legal") && (
              <div className="rk-glass-card rounded-2xl p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-[#EBF5F8] text-[#1E5F74] text-[10px] font-semibold uppercase">
                      Comprehensive Guide
                    </span>
                    <span className="text-[11px] text-[#94A3B8] font-mono">
                      PDF • 34 Pages
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-[#0B1523] mb-2">
                    The Complete Adoption Readiness Handbook
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    A thorough overview of statutory eligibility, home study
                    expectations, background certifications, and legal pathways.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#E6E1D8] flex items-center justify-between">
                  <span className="text-xs font-medium text-[#C85A32]">
                    Free Community Guide
                  </span>
                  <button
                    onClick={() =>
                      alert(
                        "The Adoption Readiness Handbook PDF is available through our guidance team.",
                      )
                    }
                    className="p-2 rounded-lg bg-[#FAF8F5] hover:bg-[#F3EFEA] text-[#0B1523] border border-[#E6E1D8]"
                    title="Download Handbook"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Resource 2 */}
            {(resourceCategory === "all" ||
              resourceCategory === "emotional") && (
              <div className="rk-glass-card rounded-2xl p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-[#FCECE4] text-[#C85A32] text-[10px] font-semibold uppercase">
                      Attachment Guide
                    </span>
                    <span className="text-[11px] text-[#94A3B8] font-mono">
                      PDF • 28 Pages
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-[#0B1523] mb-2">
                    Healing Roots: Trauma-Informed Parenting
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Strategies for fostering secure attachment in adopted
                    children, handling transition anxiety, and building
                    unconditional safety.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#E6E1D8] flex items-center justify-between">
                  <span className="text-xs font-medium text-[#C85A32]">
                    Free Community Guide
                  </span>
                  <button
                    onClick={() =>
                      alert(
                        "The Healing Roots Guide is available through our guidance team.",
                      )
                    }
                    className="p-2 rounded-lg bg-[#FAF8F5] hover:bg-[#F3EFEA] text-[#0B1523] border border-[#E6E1D8]"
                    title="Download Guide"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Resource 3 */}
            {(resourceCategory === "all" ||
              resourceCategory === "checklists") && (
              <div className="rk-glass-card rounded-2xl p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-[#FBF0E4] text-[#D97736] text-[10px] font-semibold uppercase">
                      Home Study Prep
                    </span>
                    <span className="text-[11px] text-[#94A3B8] font-mono">
                      Checklist • 4 Pages
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-[#0B1523] mb-2">
                    Home Safety Inspection Checklist
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Step-by-step room audit checklist covering fire safety,
                    medicine storage, emergency contacts, and child room
                    preparations.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#E6E1D8] flex items-center justify-between">
                  <span className="text-xs font-medium text-[#C85A32]">
                    Interactive Checklist
                  </span>
                  <button
                    onClick={() =>
                      alert("Home Safety Checklist available for download.")
                    }
                    className="p-2 rounded-lg bg-[#FAF8F5] hover:bg-[#F3EFEA] text-[#0B1523] border border-[#E6E1D8]"
                    title="Download Checklist"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Resource 4 */}
            {(resourceCategory === "all" || resourceCategory === "legal") && (
              <div className="rk-glass-card rounded-2xl p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-[#EBF5F8] text-[#1E5F74] text-[10px] font-semibold uppercase">
                      Legal Glossary
                    </span>
                    <span className="text-[11px] text-[#94A3B8] font-mono">
                      Reference Guide
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-[#0B1523] mb-2">
                    Adoption Terminology & Statutory Glossary
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Demystifying 60+ critical terms from 'Relinquishment' and
                    'Hague Convention' to 'Decree Absolute' and 'Post-Placement
                    Supervision'.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#E6E1D8] flex items-center justify-between">
                  <span className="text-xs font-medium text-[#C85A32]">
                    Open Glossary
                  </span>
                  <button
                    onClick={() => alert("Glossary reference is loaded.")}
                    className="p-2 rounded-lg bg-[#FAF8F5] hover:bg-[#F3EFEA] text-[#0B1523] border border-[#E6E1D8]"
                    title="View Glossary"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Resource 5 */}
            {(resourceCategory === "all" ||
              resourceCategory === "emotional") && (
              <div className="rk-glass-card rounded-2xl p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-[#FCECE4] text-[#C85A32] text-[10px] font-semibold uppercase">
                      Communication
                    </span>
                    <span className="text-[11px] text-[#94A3B8] font-mono">
                      Parent Toolkit
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-[#0B1523] mb-2">
                    Talking to Your Child About Their Adoption Story
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Age-appropriate scripts and conversational frameworks for
                    introducing your child's adoption story from toddlerhood
                    through adolescence.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#E6E1D8] flex items-center justify-between">
                  <span className="text-xs font-medium text-[#C85A32]">
                    Free Family Resource
                  </span>
                  <button
                    onClick={() =>
                      alert("Communication Guide available through counseling.")
                    }
                    className="p-2 rounded-lg bg-[#FAF8F5] hover:bg-[#F3EFEA] text-[#0B1523] border border-[#E6E1D8]"
                    title="Download Guide"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Resource 6 */}
            {(resourceCategory === "all" ||
              resourceCategory === "checklists") && (
              <div className="rk-glass-card rounded-2xl p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-[#FBF0E4] text-[#D97736] text-[10px] font-semibold uppercase">
                      Dossier Organization
                    </span>
                    <span className="text-[11px] text-[#94A3B8] font-mono">
                      Organizer • 6 Pages
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-[#0B1523] mb-2">
                    Statutory Document Preparation Binder
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    A printable document filing index with expiration date
                    tracking for police clearances, medical certificates, and
                    notary verifications.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#E6E1D8] flex items-center justify-between">
                  <span className="text-xs font-medium text-[#C85A32]">
                    Printable Kit
                  </span>
                  <button
                    onClick={() =>
                      alert("Document Binder Organizer template loaded.")
                    }
                    className="p-2 rounded-lg bg-[#FAF8F5] hover:bg-[#F3EFEA] text-[#0B1523] border border-[#E6E1D8]"
                    title="Download Template"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 13: FREQUENTLY ASKED QUESTIONS
        Interactive FAQ section with working expand/collapse functionality,
        category search, clear answers, and links to relevant pages.
        ========================================================================
      */}
      <section id="faq" className="py-24 bg-white rk-section-divider">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#C85A32]">
              Clear Answers to Critical Questions
            </span>
            <h2 className="rk-font-display text-3xl sm:text-4xl text-[#0B1523] mt-2 mb-4 font-normal">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#64748B] font-light leading-relaxed">
              Find transparent, honest answers regarding procedures, legal
              requirements, timelines, and post-placement realities.
            </p>
          </div>

          {/* FAQ Search Bar */}
          <div className="relative mb-8">
            <Search className="w-4 h-4 text-[#94A3B8] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search frequently asked questions (e.g., timeline, single parents, costs, home study)..."
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#FAF8F5] border border-[#E6E1D8] text-xs sm:text-sm text-[#0B1523] placeholder-[#94A3B8] focus:outline-none focus:border-[#C85A32] transition-colors"
            />
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isExpanded = expandedFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`rounded-2xl border transition-all ${
                      isExpanded
                        ? "bg-[#FAF8F5] border-[#C85A32]/40 shadow-sm"
                        : "bg-white border-[#E6E1D8] hover:border-[#D6CFBF]"
                    }`}
                  >
                    <button
                      onClick={() =>
                        setExpandedFaqId(isExpanded ? null : faq.id)
                      }
                      className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4"
                      aria-expanded={isExpanded}
                    >
                      <div>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#C85A32] block mb-1">
                          {faq.category}
                        </span>
                        <h3 className="text-sm sm:text-base font-semibold text-[#0B1523]">
                          {faq.question}
                        </h3>
                      </div>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                          isExpanded
                            ? "bg-[#C85A32] text-white rotate-180"
                            : "bg-[#F3EFEA] text-[#64748B]"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#E6E1D8]/60 space-y-3">
                        <p>{faq.answer}</p>
                        {faq.legalNote && (
                          <div className="p-3 rounded-xl bg-white border border-[#E6E1D8] text-[11px] text-[#64748B] flex items-center gap-2">
                            <Scale className="w-3.5 h-3.5 text-[#1E5F74] shrink-0" />
                            <span>{faq.legalNote}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="p-8 text-center text-xs text-[#64748B] bg-[#FAF8F5] rounded-2xl border border-[#E6E1D8]">
                No matching questions found for "{faqSearch}". Try searching for
                terms like "costs", "timeline", or "eligibility".
              </div>
            )}
          </div>

          <div className="mt-10 p-5 rounded-2xl bg-[#FAF8F5] border border-[#E6E1D8] text-center text-xs text-[#64748B]">
            Have an unanswered question specific to your family's circumstances?{" "}
            <a
              href="#final-cta"
              className="text-[#C85A32] font-semibold underline hover:text-[#B24C27]"
            >
              Contact our caseworkers directly for confidential advice.
            </a>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 14: COMMUNITY AND SUPPORT NETWORK
        Family education, support communities, peer mentorship,
        and responsible ways to contribute without unsubstantiated claims.
        ========================================================================
      */}
      <section id="community" className="py-24 bg-[#FAF8F5] rk-section-divider">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#1E5F74]">
              Connected in Shared Love
            </span>
            <h2 className="rk-font-display text-3xl sm:text-4xl lg:text-5xl text-[#0B1523] mt-2 mb-4 font-normal">
              An Enduring Community of Adoptive Families
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] font-light leading-relaxed">
              No family is meant to walk this road in isolation. RK-Adoption
              facilitates genuine peer connection, adoptive youth mentorship,
              and educational parent circles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Community Feature 1 */}
            <div className="bg-white rounded-2xl p-8 border border-[#E6E1D8] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FCECE4] text-[#C85A32] flex items-center justify-center mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif text-[#0B1523] mb-2">
                  Regional Coffee & Play Circles
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Connect informally with fellow adoptive parents in your
                  metropolitan region. Share milestones, navigate schools, and
                  allow children to grow up seeing peers who share their
                  adoption story.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E6E1D8] text-xs font-medium text-[#C85A32]">
                Monthly Parent Gatherings
              </div>
            </div>

            {/* Community Feature 2 */}
            <div className="bg-white rounded-2xl p-8 border border-[#E6E1D8] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EBF5F8] text-[#1E5F74] flex items-center justify-center mb-6">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif text-[#0B1523] mb-2">
                  Expert Webinars & Masterclasses
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Quarterly interactive digital workshops led by internationally
                  recognized developmental psychologists, adult adoptees, and
                  pediatric attachment specialists.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E6E1D8] text-xs font-medium text-[#1E5F74]">
                Quarterly Education Series
              </div>
            </div>

            {/* Community Feature 3 */}
            <div className="bg-white rounded-2xl p-8 border border-[#E6E1D8] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FBF0E4] text-[#D97736] flex items-center justify-center mb-6">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif text-[#0B1523] mb-2">
                  Foster Youth & Adoptee Mentorship
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Support initiatives that mentor older foster youth
                  transitioning out of care, and connect adolescent adoptees
                  with mature adult adoptee mentors who understand their
                  journey.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E6E1D8] text-xs font-medium text-[#D97736]">
                Volunteer & Mentorship Circle
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 15: FINAL CALL TO ACTION
        Visually striking, emotionally meaningful final banner inviting visitors
        to begin their journey or contact RK-Adoption, flowing seamlessly into the footer.
        ========================================================================
      */}
      <section
        id="final-cta"
        className="py-24 bg-[#0F1E32] text-white relative overflow-hidden"
      >
        {/* Warm ambient sunset glow behind the container */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none opacity-25 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, #C85A32 0%, #E07A5F 50%, transparent 80%)",
          }}
        />

        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-[#E07A5F]">
            <Heart className="w-3.5 h-3.5 fill-[#E07A5F]" />
            <span>A Lifelong Gift of Belonging</span>
          </div>

          <h2 className="rk-font-display text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight max-w-3xl mx-auto">
            A Child's Future Begins with One Compassionate Decision
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            Whether you are taking your very first exploratory step, seeking
            clarity on statutory eligibility, or ready to begin your home
            study—our licensed social work team is honored to walk beside you
            with dignity, patience, and warmth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#start-journey"
              className="rk-btn-primary px-8 py-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 w-full sm:w-auto text-center"
            >
              <span>Begin Your Adoption Application</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="tel:9191538326333"
              className="px-7 py-4 rounded-xl text-sm font-medium bg-white/10 hover:bg-white/15 text-white border border-white/20 flex items-center justify-center gap-2 w-full sm:w-auto transition-colors text-center"
            >
              <PhoneCall className="w-4 h-4 text-[#E07A5F]" />
              <span>Call Helpline: +9191538326333 ADOPT</span>
            </a>
          </div>

          {/* Reassurance Badges */}
          <div className="pt-8 flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-xs text-slate-400 border-t border-white/10 max-w-2xl mx-auto">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#E07A5F]" />
              <span>100% Confidential Inquiries</span>
            </div>
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#E07A5F]" />
              <span>Hague & UNCRC Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#E07A5F]" />
              <span>No Pressure • Respectful Support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
