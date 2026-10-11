import { useState } from 'react';
import {
  BookOpen,
  ChevronRight,
  ArrowRight,
  Coins,
  ShieldCheck,
  FileCheck
} from 'lucide-react';

interface AdoptionType {
  id: string;
  title: string;
  shortDesc: string;
  tagline: string;
  typicalTimeline: string;
  expenseProfile: string;
  ageRange: string;
  opennessLevel: string;
  whoItIsFor: string;
  legalProcess: string[];
  keyConsiderations: string[];
  badgeColor: string;
}

const ADOPTION_TYPES: AdoptionType[] = [
  {
    id: 'domestic-infant',
    title: 'Domestic Infant Adoption (Open & Semi-Open)',
    shortDesc: 'Welcoming an infant domestically with a relationship of mutual respect with the birth family.',
    tagline: 'Empathy, mutual consent, and lifelong transparency between adoptive and birth parents.',
    typicalTimeline: '12 – 24 Months on Average',
    expenseProfile: 'Moderate to High (Covers legal counsel, birth parent counseling, agency licensure & court filings)',
    ageRange: 'Newborns up to 12 Months',
    opennessLevel: 'Semi-Open to Fully Open (Photos, letters, and agreed visits)',
    whoItIsFor: 'Prospective parents seeking newborn adoption, who value building a respectful extended-family dynamic with birth parents.',
    legalProcess: [
      'Completion and certification of pre-placement home study',
      'Birth parent counseling and creation of voluntary post-adoption contact agreement',
      'Revocation period compliance under regional statutory family codes',
      'Post-placement caseworker supervisory visits (typically 6 months)',
      'Final legal decree issued in authorized family court'
    ],
    keyConsiderations: [
      'Emotional readiness for open communication with birth family members',
      'Honoring the birth mother’s autonomy and counseling rights',
      'Flexible nursery preparation timeline based on birth plan timing'
    ],
    badgeColor: '#6B2D5C'
  },
  {
    id: 'foster-to-adopt',
    title: 'Foster Care Adoption (Waiting Children & Sibling Groups)',
    shortDesc: 'Providing a permanent forever home to children whose parental rights have been legally terminated by state courts.',
    tagline: 'The greatest humanitarian need in our communities—healing trauma through unconditional love.',
    typicalTimeline: '6 – 14 Months',
    expenseProfile: 'Minimal to Zero (Publicly funded, state subsidies and college tuition grants available)',
    ageRange: 'Ages 3 to 17 (High focus on siblings and teens)',
    opennessLevel: 'Varies (Closed, or mediated sibling/kinship contact)',
    whoItIsFor: 'Parents eager to welcome children who have experienced institutional care or trauma, and families open to preserving sibling sets.',
    legalProcess: [
      'Completion of state-certified PRIDE or TBRI foster-to-adopt parent training',
      'Comprehensive background, criminal, and in-home safety evaluation',
      'Matching with awaiting children registered with state adoption exchanges',
      'Pre-placement transition visits and mandatory foster supervision period',
      'Finalization in family court with immediate eligibility for federal adoption tax credits'
    ],
    keyConsiderations: [
      'Deep mastery of Trust-Based Relational Intervention (TBRI) and co-regulation',
      'Willingness to support the child’s grief and biological identity questions',
      'Commitment to never separating bonded biological siblings'
    ],
    badgeColor: '#D49B42'
  },
  {
    id: 'international-hague',
    title: 'Intercountry & Hague Convention Adoption',
    shortDesc: 'Adopting a child from an accredited sovereign partner nation under international treaty safeguards.',
    tagline: 'Bridging continents with strict bilateral anti-trafficking compliance and cultural celebration.',
    typicalTimeline: '18 – 36 Months',
    expenseProfile: 'High (Includes international dossier authentication, translation, travel, and consular filings)',
    ageRange: 'Ages 18 Months to 15 Years',
    opennessLevel: 'Generally Closed, with comprehensive cultural heritage archives',
    whoItIsFor: 'Families with cultural connections to specific nations, willingness to travel abroad, and commitment to transcultural heritage.',
    legalProcess: [
      'Hague-accredited home study and USCIS/immigration pre-approval dossier',
      'Dossier apostille, translation, and submission to foreign Central Adoption Authority',
      'Official referral review with independent developmental pediatric consultation',
      'In-country bonding period (1 to 3 weeks travel to child’s birth country)',
      'Foreign court decree and issuance of immigrant visa / certificate of citizenship'
    ],
    keyConsiderations: [
      'Commitment to preserving the child’s native language and cultural heritage',
      'Preparation for international travel and cross-border bureaucratic timelines',
      'Long-term post-adoption supervisory reports submitted back to the birth country'
    ],
    badgeColor: '#1B5E55'
  },
  {
    id: 'kinship-relative',
    title: 'Kinship Care & Relative Guardianship',
    shortDesc: 'Legal permanent placement of a child with grandparents, aunts, uncles, or adult siblings.',
    tagline: 'Preserving family continuity, generational roots, and biological heritage within the family tree.',
    typicalTimeline: '4 – 9 Months',
    expenseProfile: 'Low (Legal aid assistance and state kinship caregiver stipends often available)',
    ageRange: 'Infants through 17 Years',
    opennessLevel: 'Naturally Open within family dynamics',
    whoItIsFor: 'Extended family members stepping forward to protect a relative child when biological parents are incapacitated.',
    legalProcess: [
      'Expedited relative home study and safety assessment',
      'Transfer of formal legal guardianship or filing of petition for relative adoption',
      'Termination of parental rights or voluntary relinquishment by parents',
      'Judicial review ensuring best interests of the minor',
      'Permanent adoption decree or permanent legal guardianship order'
    ],
    keyConsiderations: [
      'Navigating complex intra-family dynamics and boundary setting',
      'Securing relative caregiver benefits and pediatric healthcare transitions',
      'Maintaining clear, loving emotional safety for the child'
    ],
    badgeColor: '#6B2D5C'
  },
  {
    id: 'stepparent-adult',
    title: 'Stepparent & Adult Confirmatory Adoption',
    shortDesc: 'Legally securing the existing emotional bond between a stepparent and child or confirming adult parentage.',
    tagline: 'Formalizing the unbreakable emotional bonds that already exist in your everyday household.',
    typicalTimeline: '3 – 6 Months',
    expenseProfile: 'Minimal (Direct court filing and documentation fees)',
    ageRange: 'Any age (Minors & Adults 18+)',
    opennessLevel: 'Internal to the household',
    whoItIsFor: 'Stepparents actively raising a spouse’s biological child, ensuring equal legal, inheritance, and healthcare rights.',
    legalProcess: [
      'Filing of stepparent adoption petition in local family court',
      'Obtaining consent of non-custodial biological parent or proving abandonment',
      'Abbreviated background verification and home assessment (waived in select jurisdictions)',
      'Brief family court hearing with the judge',
      'Issuance of amended birth certificate reflecting the stepparent as legal parent'
    ],
    keyConsiderations: [
      'Consent of the non-custodial parent or statutory grounds for severance',
      'Child’s official assent (required for children age 10–14+ depending on jurisdiction)',
      'Immediate establishment of full inheritance and healthcare benefits'
    ],
    badgeColor: '#B87F28'
  }
];

export default function TypesOfAdoption() {
  const [selectedTypeId, setSelectedTypeId] = useState<string>('domestic-infant');
  const currentType = ADOPTION_TYPES.find(t => t.id === selectedTypeId) || ADOPTION_TYPES[0];

  return (
    <div className="rk-types-container font-sans text-[#1A202C] antialiased bg-[#FCFBF7]">
      <style>{`
        .rk-types-container {
          --rk-amethyst-900: #522146;
          --rk-amethyst-800: #6B2D5C;
          --rk-champagne-500: #D49B42;
          --rk-champagne-400: #E8B668;
          --rk-obsidian-900: #0C131F;
          --rk-silk-border: #E8E2D5;
          --rk-canvas-bg: #FCFBF7;
        }

        .font-serif-luxury {
          font-family: 'Cormorant Garamond', Georgia, serif;
          letter-spacing: -0.02em;
        }

        .rk-pathway-card {
          background: #ffffff;
          border: 1px solid var(--rk-silk-border);
          box-shadow: 0 4px 20px -2px rgba(12, 19, 31, 0.04);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .rk-btn-amethyst {
          background: linear-gradient(135deg, #6B2D5C 0%, #522146 100%);
          color: #FFFFFF;
          box-shadow: 0 4px 18px 0 rgba(107, 45, 92, 0.3);
          transition: all 0.25s ease;
        }

        .rk-btn-amethyst:hover {
          background: linear-gradient(135deg, #7D346C 0%, #602752 100%);
          transform: translateY(-1px);
        }
      `}</style>

      {/* ── BREADCRUMB ── */}
      <div className="bg-[#F6F4ED] border-b border-[#E8E2D5] py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#718096]">
          <a href="/" className="hover:text-[#0C131F] transition-colors">Home</a>
          <ChevronRight className="w-3.5 h-3.5 text-[#A0AEC0]" />
          <a href="/adoption" className="hover:text-[#0C131F] transition-colors">Adoption</a>
          <ChevronRight className="w-3.5 h-3.5 text-[#A0AEC0]" />
          <span className="text-[#6B2D5C] font-semibold">Types of Adoption</span>
        </div>
      </div>

      {/* ── HERO SECTION ── */}
      <section className="relative pt-16 pb-20 bg-gradient-to-b from-[#F6F4ED] via-[#FCFBF7] to-[#FCFBF7] border-b border-[#E8E2D5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDF8EE] border border-[#D49B42]/30 text-xs font-semibold text-[#B87F28] mx-auto">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Comparative Legal & Clinical Roadmap</span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#0C131F] font-normal leading-[1.14] max-w-4xl mx-auto">
            The Five Recognized Statutory Adoption Pathways
          </h1>

          <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed font-light max-w-3xl mx-auto">
            Adoption is not a one-size-fits-all legal framework. Each statutory route carries distinct timelines, legal safeguards, financial expectations, and emotional requirements. Explore each pathway below to determine your family's calling.
          </p>
        </div>
      </section>

      {/* ── INTERACTIVE PATHWAY INSPECTOR TABS ── */}
      <section className="py-20 bg-white border-b border-[#E8E2D5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Navigation Pill List */}
          <div className="flex justify-center flex-wrap gap-2.5 mb-14 max-w-5xl mx-auto">
            {ADOPTION_TYPES.map((type) => {
              const isSelected = selectedTypeId === type.id;
              return (
                <button
                  key={type.id}
                  onClick={() => setSelectedTypeId(type.id)}
                  className={`py-3 px-5 rounded-2xl text-xs sm:text-sm font-medium transition-all text-left ${
                    isSelected
                      ? 'bg-[#0C131F] text-white shadow-md font-semibold transform -translate-y-0.5'
                      : 'bg-[#F6F4ED] text-[#4A5568] hover:bg-white border border-[#E8E2D5]'
                  }`}
                >
                  {type.title.split(' ')[0]} {type.title.split(' ')[1] || ''}
                </button>
              );
            })}
          </div>

          {/* Active Pathway Detailed View */}
          <div className="max-w-6xl mx-auto rk-pathway-card rounded-3xl p-8 sm:p-12 border border-[#E8E2D5] shadow-lg space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-[#E8E2D5] pb-8">
              <div className="space-y-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6B2D5C]">
                  Statutory Adoption Route
                </span>
                <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#0C131F]">
                  {currentType.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#D49B42] font-medium italic">
                  "{currentType.tagline}"
                </p>
              </div>

              <div className="flex flex-wrap gap-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-[#FCFBF7] border border-[#E8E2D5] min-w-[140px]">
                  <span className="text-[#718096] block text-[10px] uppercase font-semibold">Timeline:</span>
                  <strong className="text-[#0C131F]">{currentType.typicalTimeline}</strong>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#FCFBF7] border border-[#E8E2D5] min-w-[140px]">
                  <span className="text-[#718096] block text-[10px] uppercase font-semibold">Typical Ages:</span>
                  <strong className="text-[#0C131F]">{currentType.ageRange}</strong>
                </div>
              </div>
            </div>

            {/* Overview & Suitability */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#0C131F] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#6B2D5C]" />
                  <span>Pathway Overview & Who It Serves:</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed font-light">
                  {currentType.shortDesc}
                </p>
                <div className="p-4 rounded-2xl bg-[#FDF6FA] border border-[#F3D7EA] text-xs text-[#522146] leading-relaxed">
                  <strong>Best Suited For:</strong> {currentType.whoItIsFor}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#0C131F] flex items-center gap-2">
                  <Coins className="w-4 h-4 text-[#D49B42]" />
                  <span>Expense Profile & Openness:</span>
                </h3>
                <div className="p-4 rounded-2xl bg-[#FCFBF7] border border-[#E8E2D5] text-xs text-[#4A5568] space-y-2 leading-relaxed">
                  <div>
                    <strong className="text-[#0C131F] block">Financial Profile:</strong>
                    {currentType.expenseProfile}
                  </div>
                  <div className="pt-2 border-t border-[#E8E2D5]">
                    <strong className="text-[#0C131F] block">Degree of Openness:</strong>
                    {currentType.opennessLevel}
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Milestones Checklist */}
            <div className="pt-4 border-t border-[#E8E2D5] space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#0C131F] flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-[#1B5E55]" />
                <span>Statutory Legal Steps & Procedural Checkpoints:</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-[#334155]">
                {currentType.legalProcess.map((step, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#FCFBF7] border border-[#E8E2D5] flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#F0F7F5] text-[#1B5E55] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Emotional Considerations */}
            <div className="p-5 rounded-2xl bg-[#FDF8EE] border border-[#F2E5C8] space-y-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B87F28] block">
                Crucial Parental Considerations:
              </span>
              <ul className="space-y-1 text-xs text-[#4A5568]">
                {currentType.keyConsiderations.map((c, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-[#D49B42] font-bold">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="py-16 bg-[#0C131F] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white">
            Need Guidance Choosing Between Domestic, Foster, or Intercountry?
          </h2>
          <p className="text-sm text-slate-300 font-light max-w-xl mx-auto">
            Our licensed intake social workers can assess your family’s capacity and recommend the pathway most aligned with your goals.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <a 
              href="/adoption/eligibility" 
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs font-medium transition-colors"
            >
              Check Statutory Eligibility
            </a>
            <a 
              href="/contact" 
              className="rk-btn-amethyst px-7 py-3 rounded-xl text-xs font-medium flex items-center gap-2"
            >
              <span>Schedule Free Advisory Session</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
