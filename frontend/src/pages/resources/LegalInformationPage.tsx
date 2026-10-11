import { useState } from 'react';
import {
  Scale,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Building2,
  Download,
  Search,
  ArrowRight,
  ChevronRight,
  Info,
  Lock,
  Check,
  FileCheck,
  Gavel,
} from 'lucide-react';

interface JurisdictionData {
  id: string;
  name: string;
  region: string;
  flag: string;
  statutoryCode: string;
  governingAuthority: string;
  centralConvention: string;
  keyRequirements: string[];
  consentRevocationWindow: string;
  citizenshipPath: string;
  supervisionPeriod: string;
}

const JURISDICTIONS: JurisdictionData[] = [
  {
    id: 'us',
    name: 'United States of America',
    region: 'North America',
    flag: '🇺🇸',
    statutoryCode: 'Uniform Adoption Act & State Family Codes; Intercountry Adoption Act of 2000',
    governingAuthority: 'U.S. Department of State (Office of Children’s Issues) & State Family Courts',
    centralConvention: 'Hague Convention on Intercountry Adoption (1993) Party since 2008',
    keyRequirements: [
      'Accredited home study by licensed agency or certified social worker',
      'Federal FBI fingerprint criminal background & child abuse registry clearance',
      'USCIS Form I-800A or I-600A suitability determination for international corridors',
      'Interstate Compact on the Placement of Children (ICPC) clearance for interstate births'
    ],
    consentRevocationWindow: 'Strictly state-mandated: Immediate upon judicial surrender (e.g. CA/FL) to 10–30 days statutory grace period (e.g. NY/TX).',
    citizenshipPath: 'Automatic upon arrival via IH-3/IR-3 visas under Child Citizenship Act of 2000 (8 U.S.C. § 1431).',
    supervisionPeriod: '3 to 6 months post-placement supervisory visits prior to final judicial decree.'
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    region: 'Europe',
    flag: '🇬🇧',
    statutoryCode: 'Adoption and Children Act 2002; Children and Social Work Act 2017',
    governingAuthority: 'Department for Education (DfE), Regional Adoption Agencies (RAAs) & Family Court',
    centralConvention: 'Hague Convention on Protection of Children (1993) Ratified 2003',
    keyRequirements: [
      'Two-stage prospective adopter assessment (Stage 1: initial checks; Stage 2: intensive evaluation)',
      'Independent Adoption Panel review and Agency Decision Maker (ADM) formal approval',
      'Enhanced Disclosure and Barring Service (DBS) criminal background checks',
      'Proof of permanent habitual residence in the UK for at least one continuous year'
    ],
    consentRevocationWindow: 'Birth mother consent cannot legally be given until child is at least 6 weeks old (Section 52). Irrevocable once Placement Order granted.',
    citizenshipPath: 'Automatic British citizenship granted upon issuance of UK Adoption Order (British Nationality Act 1981 Section 1(5)).',
    supervisionPeriod: 'Child must live with adoptive family for at least 10 weeks prior to Adoption Order application.'
  },
  {
    id: 'canada',
    name: 'Canada',
    region: 'North America',
    flag: '🇨🇦',
    statutoryCode: 'Provincial Child, Youth and Family Services Acts; Citizenship Act (Bill C-14)',
    governingAuthority: 'Provincial Ministries of Children & Family Development & Immigration, Refugees and Citizenship Canada (IRCC)',
    centralConvention: 'Hague Convention on Protection of Children (1993) Implemented Provincially',
    keyRequirements: [
      'PRIDE (Parent Resources for Information, Development, and Education) training completion',
      'SAFE (Structured Analysis Family Evaluation) standardized home study methodology',
      'Provincial child abuse register and RCMP vulnerable sector security checks',
      'Federal Letter of No Involvement / No Objection from provincial Central Authority'
    ],
    consentRevocationWindow: 'Provincially regulated: ranges from 21 days (Ontario) to 30 days (British Columbia) post-birth.',
    citizenshipPath: 'Direct route to Canadian citizenship (Part 1, Citizenship Act) without needing permanent resident stage.',
    supervisionPeriod: '6 months probation with monthly social worker reports prior to finalization.'
  },
  {
    id: 'india',
    name: 'India',
    region: 'Asia-Pacific',
    flag: '🇮🇳',
    statutoryCode: 'Juvenile Justice (Care and Protection of Children) Amendment Act 2021; CARA Adoption Regulations 2022',
    governingAuthority: 'Central Adoption Resource Authority (CARA) & District Magistrate (DM) Adoption Orders',
    centralConvention: 'Hague Convention on Protection of Children (1993) Ratified 2003',
    keyRequirements: [
      'Mandatory registration through online portal CARINGS (Child Adoption Resource Information & Guidance System)',
      'Home Study Report (HSR) prepared by Specialized Adoption Agency (SAA)',
      'Strict Composite Age Criteria: Maximum combined age of couple must not exceed 90–110 years depending on child age',
      'Medical clearance certifying absence of life-threatening physical or mental illness'
    ],
    consentRevocationWindow: 'Surrender deed allows a mandatory 60-day reconsideration window for biological parents before child is declared legally free.',
    citizenshipPath: 'District Magistrate issues formal Adoption Order; NOC issued by CARA for passport and foreign visa processing.',
    supervisionPeriod: 'Post-placement progress reports submitted every quarter for first year, every 6 months for second year (total 2 years).'
  },
  {
    id: 'australia',
    name: 'Australia',
    region: 'Asia-Pacific',
    flag: '🇦🇺',
    statutoryCode: 'State and Territory Adoption Acts; Family Law (Hague Convention on Intercountry Adoption) Regulations',
    governingAuthority: 'State/Territory Central Authorities (e.g. DCJ NSW, DFFH Victoria) & Commonwealth Attorney-General’s Department',
    centralConvention: 'Hague Convention on Protection of Children (1993) Entered into force 1998',
    keyRequirements: [
      'Comprehensive State Department suitability assessment & National Police History Check',
      'Working with Children Check (WWCC) clearances for all adult household residents',
      'Health, emotional resilience, and financial capacity screening by registered medical practitioners',
      'Compliance with strict partner country quota and eligibility criteria'
    ],
    consentRevocationWindow: 'Typically 30 days statutory cooling-off period following written consent before court proceedings commence.',
    citizenshipPath: 'Full Hague adoption recognized under Australian law; child granted Australian citizenship by conferral.',
    supervisionPeriod: 'Post-placement supervision for 12 months with minimum 4 formal social worker reports.'
  }
];

const GLOSSARY_TERMS = [
  {
    term: 'Article 16 Report',
    definition: 'A mandatory legal dossier compiled by the sending country\'s Central Authority under the Hague Convention. Contains verified medical history, developmental records, psychological background, and legal proof that the child is legally free for intercountry adoption.'
  },
  {
    term: 'Best Interests of the Child',
    definition: 'The supreme legal doctrine governing all adoption jurisprudence worldwide (enshrined in UNCRC Article 3). Mandates that judicial and administrative bodies prioritize the child’s safety, permanence, and emotional welfare above the desires of adults.'
  },
  {
    term: 'Central Authority',
    definition: 'The official governmental agency designated by each signatory nation under the 1993 Hague Convention to oversee, regulate, and monitor intercountry adoptions (e.g., U.S. Department of State, CARA in India, DfE in the UK).'
  },
  {
    term: 'Decree of Adoption',
    definition: 'The final, irreversible judicial order signed by a family court judge that severs legal ties with biological parents and establishes the adoptive parents as the child’s legal parents in perpetuity, granting full inheritance and custody rights.'
  },
  {
    term: 'Dossier',
    definition: 'The authenticated, apostilled, and officially translated collection of legal, financial, medical, and psychological documents submitted by prospective adoptive parents to a foreign government.'
  },
  {
    term: 'ICPC (Interstate Compact)',
    definition: 'A statutory contract between all 50 U.S. states, D.C., and the U.S. Virgin Islands establishing uniform procedures for placing children across state lines. Families cannot leave the child\'s birth state until both state ICPC offices issue approval.'
  },
  {
    term: 'PACA (Post-Adoption Contact Agreement)',
    definition: 'A written voluntary agreement between adoptive parents and birth parents outlining future communication (letters, photos, visits). Legal enforceability varies depending on state or national jurisdiction.'
  },
  {
    term: 'Putative Father Registry',
    definition: 'A state database where an unmarried man who believes he may have fathered a child can register to receive legal notice of any pending adoption or parental rights termination proceedings.'
  },
  {
    term: 'Re-Adoption',
    definition: 'A state court proceeding in the United States where adoptive parents finalize or validate a foreign adoption decree domestically, ensuring issuance of a state Certificate of Foreign Birth and redundant legal protection.'
  },
  {
    term: 'Subsidiarity Principle',
    definition: 'The core ethical mandate of the Hague Convention (Article 4) stating that intercountry adoption may only be considered after all viable domestic placement options (family reunification, domestic foster-to-adopt) have been genuinely exhausted.'
  },
  {
    term: 'Termination of Parental Rights (TPR)',
    definition: 'A legal court order permanently severing all legal rights, duties, and privileges between a biological parent and their child, rendering the child legally free for adoption.'
  },
  {
    term: 'Child Citizenship Act of 2000',
    definition: 'U.S. federal statute (Public Law 106-395) providing automatic U.S. citizenship to children adopted abroad by a U.S. citizen parent upon lawful entry into the United States on an IR-3 or IH-3 visa.'
  }
];

export default function LegalInformationPage() {
  const [selectedJurisdictionId, setSelectedJurisdictionId] = useState<string>('us');
  const [glossarySearch, setGlossarySearch] = useState<string>('');
  const [checklistState, setChecklistState] = useState<{ [key: string]: boolean }>({
    'check-1': true,
    'check-2': true,
    'check-3': false,
    'check-4': false,
    'check-5': false,
    'check-6': false,
    'check-7': false,
    'check-8': false
  });
  const [modalHandbookOpen, setModalHandbookOpen] = useState<boolean>(false);

  const activeJurisdiction = JURISDICTIONS.find((j) => j.id === selectedJurisdictionId) || JURISDICTIONS[0];

  const filteredGlossary = GLOSSARY_TERMS.filter((term) =>
    term.term.toLowerCase().includes(glossarySearch.toLowerCase()) ||
    term.definition.toLowerCase().includes(glossarySearch.toLowerCase())
  );

  const toggleChecklist = (id: string) => {
    setChecklistState((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completedChecks = Object.values(checklistState).filter(Boolean).length;

  return (
    <div className="rk-legal-master-container min-h-screen bg-[#FAF9F6] text-[#1E293B] antialiased">
      {/* --- PAGE-SPECIFIC SCOPED CSS --- */}
      <style>{`
        .rk-legal-master-container {
          --rk-navy: #0B1626;
          --rk-navy-surface: #122238;
          --rk-rosewood: #BC4F32;
          --rk-rosewood-hover: #A54127;
          --rk-rosewood-tint: #FDF5F1;
          --rk-gilt: #C59A3F;
          --rk-gilt-tint: #FAF4E5;
          --rk-aegean: #185265;
          --rk-aegean-tint: #EBF4F7;
          --rk-silk-border: #E5DFD5;
          --rk-canvas: #FAF9F6;
        }

        .font-serif-display {
          font-family: 'Cormorant Garamond', Georgia, serif;
          letter-spacing: -0.015em;
        }

        .rk-legal-card {
          background: #ffffff;
          border: 1px solid var(--rk-silk-border);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .rk-legal-card:hover {
          box-shadow: 0 12px 32px -4px rgba(11, 22, 38, 0.08);
          border-color: #D3CAC0;
        }
      `}</style>

      {/* ── BREADCRUMB STRIP ── */}
      <div className="bg-[#F4EFE6] border-b border-[#E5DFD5] py-3.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#64748B]">
          <a href="/" className="hover:text-[#0B1626] transition-colors">Home</a>
          <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8]" />
          <a href="/resources" className="hover:text-[#0B1626] transition-colors">Resources</a>
          <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8]" />
          <span className="text-[#BC4F32] font-semibold">Legal Information & Statutory Governance</span>
        </div>
      </div>

      {/* ── SECTION 1: HERO & STATUTORY SAFEGUARD DECLARATION ── */}
      <section className="relative pt-16 pb-20 bg-gradient-to-b from-[#F4EFE6] via-[#FAF9F6] to-[#FAF9F6] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF4F7] border border-[#185265]/30 text-xs font-semibold text-[#185265]">
                <Scale className="w-4 h-4 text-[#185265]" />
                <span>Statutory Compliance · Hague Accredited Child Protection</span>
              </div>

              <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#0B1626] font-normal leading-[1.12]">
                Legal Integrity, Due Process & Sovereign Child{' '}
                <span className="italic text-[#BC4F32] underline decoration-[#BC4F32]/30 underline-offset-8">
                  Safeguarding
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-light max-w-3xl">
                Every adoption is a solemn judicial proceeding governed by statutory family codes, bilateral conventions, and constitutional safeguards. RK-Adoption operates under strict zero-tolerance anti-trafficking protocols, providing prospective parents and birth families with absolute transparency.
              </p>

              {/* Statutory Notice Banner */}
              <div className="p-4 rounded-2xl bg-[#FAF4E5] border border-[#C59A3F]/30 text-xs text-[#785C1C] flex items-start gap-3">
                <Info className="w-5 h-5 text-[#C59A3F] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold text-[#5B4412]">Mandatory Statutory Notice: </span>
                  <p className="leading-relaxed">
                    The information provided across this platform represents educational legal guidance and does not constitute formal attorney-client legal counsel. All adoptions must be formally certified by accredited caseworkers and finalized in competent family courts of proper jurisdiction.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4 flex-wrap">
                <button
                  onClick={() => setModalHandbookOpen(true)}
                  className="px-6 py-3.5 rounded-xl bg-[#0B1626] hover:bg-[#122238] text-white text-xs font-semibold flex items-center gap-2 shadow-sm transition-all"
                >
                  <Download className="w-4 h-4 text-[#C59A3F]" />
                  <span>Download International Legal Dossier Protocol</span>
                </button>
                <a
                  href="#checklist"
                  className="px-6 py-3.5 rounded-xl border border-[#E5DFD5] bg-white text-[#0B1626] hover:bg-[#FAF8F5] text-xs font-semibold transition-all"
                >
                  Inspect Legal Dossier Audit Checklist
                </a>
              </div>
            </div>

            {/* Hague Treaty Seal Card */}
            <div className="lg:col-span-4">
              <div className="rk-legal-card rounded-3xl p-8 bg-white border border-[#E5DFD5] space-y-6 shadow-md">
                <div className="w-14 h-14 rounded-2xl bg-[#EBF4F7] text-[#185265] flex items-center justify-center">
                  <Gavel className="w-7 h-7" />
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#185265]">Global Standards</span>
                  <h3 className="font-serif-display text-2xl text-[#0B1626] font-semibold">The 1993 Hague Convention</h3>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    All intercountry adoption corridors managed by RK-Adoption adhere strictly to the 1993 Hague Convention on Protection of Children and Co-operation in Respect of Intercountry Adoption.
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-[#E5DFD5] text-xs text-[#334155]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#185265]" />
                    <span>Zero Improper Financial Gain (Art. 32)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#185265]" />
                    <span>Exhaustive Subsidiarity Review (Art. 4)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#185265]" />
                    <span>Certified Medical Dossiers (Art. 16)</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="/about/accreditations"
                    className="block text-center w-full py-2.5 rounded-xl border border-[#185265] text-[#185265] hover:bg-[#EBF4F7] text-xs font-semibold transition-colors"
                  >
                    Verify International Licensure Status
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: INTERACTIVE JURISDICTION SELECTOR & LEGAL MATRIX ── */}
      <section className="py-16 bg-white border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold text-[#BC4F32] uppercase tracking-wider">Multi-Jurisdictional Framework</span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B1626] font-normal mt-2">
              Statutory Legal Comparison by Country
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Select a sovereign territory below to review governing authorities, statutory revocation windows, and citizenship timelines.
            </p>
          </div>

          {/* Country Selector Tabs */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {JURISDICTIONS.map((j) => (
              <button
                key={j.id}
                onClick={() => setSelectedJurisdictionId(j.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
                  selectedJurisdictionId === j.id
                    ? 'bg-[#BC4F32] text-white shadow-sm'
                    : 'bg-[#F4EFE6] text-[#475569] hover:bg-[#EAE2D5] hover:text-[#0B1626]'
                }`}
              >
                <span>{j.flag}</span>
                <span>{j.name}</span>
              </button>
            ))}
          </div>

          {/* Active Jurisdiction Overview Panel */}
          <div className="rk-legal-card rounded-3xl p-8 sm:p-10 bg-[#FAF9F6] border border-[#E5DFD5] space-y-8">
            <div className="flex items-start justify-between flex-wrap gap-4 pb-6 border-b border-[#E5DFD5]">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{activeJurisdiction.flag}</span>
                  <h3 className="font-serif-display text-2xl sm:text-3xl text-[#0B1626] font-semibold">
                    {activeJurisdiction.name}
                  </h3>
                </div>
                <p className="text-xs text-[#64748B]">Region: {activeJurisdiction.region}</p>
              </div>

              <div className="text-right">
                <span className="inline-block px-3 py-1 rounded-full bg-[#EBF4F7] text-[#185265] text-xs font-bold">
                  {activeJurisdiction.centralConvention}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-white border border-[#E5DFD5] space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#BC4F32]">Statutory Code</span>
                <p className="text-xs text-[#0B1626] font-medium leading-relaxed">{activeJurisdiction.statutoryCode}</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#E5DFD5] space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#C59A3F]">Governing Central Authority</span>
                <p className="text-xs text-[#0B1626] font-medium leading-relaxed">{activeJurisdiction.governingAuthority}</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#E5DFD5] space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#185265]">Birth Parent Revocation Window</span>
                <p className="text-xs text-[#0B1626] font-medium leading-relaxed">{activeJurisdiction.consentRevocationWindow}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-serif-display text-xl text-[#0B1626] font-semibold">
                Core Statutory Prerequisites for Applicants
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#475569]">
                {activeJurisdiction.keyRequirements.map((req, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white border border-[#E5DFD5] flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#BC4F32] shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#E5DFD5] text-xs text-[#475569]">
              <div>
                <strong className="text-[#0B1626] block mb-1">Citizenship & Immigration Path:</strong>
                <p>{activeJurisdiction.citizenshipPath}</p>
              </div>
              <div>
                <strong className="text-[#0B1626] block mb-1">Mandatory Post-Placement Supervision:</strong>
                <p>{activeJurisdiction.supervisionPeriod}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE 1993 HAGUE CONVENTION IN-DEPTH BREAKDOWN ── */}
      <section className="py-16 bg-[#FAF9F6] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold text-[#BC4F32] uppercase tracking-wider">Treaty Safeguards</span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B1626] font-normal mt-2">
              The Four Mandatory Pillars of the Hague Convention
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Established in the Netherlands in 1993, this treaty serves as the bedrock of international child protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rk-legal-card rounded-2xl p-6 bg-white border border-[#E5DFD5] space-y-3">
              <div className="w-9 h-9 rounded-xl bg-[#FDF5F1] text-[#BC4F32] flex items-center justify-center font-bold text-xs">
                Art. 4
              </div>
              <h4 className="font-serif-display text-lg font-semibold text-[#0B1626]">The Subsidiarity Principle</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Intercountry adoption can only be authorized if the child cannot be returned to biological family and suitable domestic adoptive care within the country of origin has been proven impossible.
              </p>
            </div>

            <div className="rk-legal-card rounded-2xl p-6 bg-white border border-[#E5DFD5] space-y-3">
              <div className="w-9 h-9 rounded-xl bg-[#FAF4E5] text-[#C59A3F] flex items-center justify-center font-bold text-xs">
                Art. 15
              </div>
              <h4 className="font-serif-display text-lg font-semibold text-[#0B1626]">Applicant Suitability</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                The receiving state's Central Authority must formally evaluate prospective adoptive parents through accredited social workers before any foreign match or referral can legally take place.
              </p>
            </div>

            <div className="rk-legal-card rounded-2xl p-6 bg-white border border-[#E5DFD5] space-y-3">
              <div className="w-9 h-9 rounded-xl bg-[#EBF4F7] text-[#185265] flex items-center justify-center font-bold text-xs">
                Art. 16
              </div>
              <h4 className="font-serif-display text-lg font-semibold text-[#0B1626]">Child Dossier Truthfulness</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                The origin state Central Authority must prepare a thorough dossier establishing the child's identity, adoptability, background, medical history, and verified counseling of biological relatives.
              </p>
            </div>

            <div className="rk-legal-card rounded-2xl p-6 bg-white border border-[#E5DFD5] space-y-3">
              <div className="w-9 h-9 rounded-xl bg-[#F4EFE6] text-[#0B1626] flex items-center justify-center font-bold text-xs">
                Art. 32
              </div>
              <h4 className="font-serif-display text-lg font-semibold text-[#0B1626]">Anti-Commercialization</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Strict prohibition of improper financial gain. No person or agency shall receive unreasonable remuneration or finder's fees. All expenses must be audited and published in public schedules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: THE 6-STAGE LEGAL SEQUENCE FLOW DIAGRAM ── */}
      <section className="py-16 bg-white border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold text-[#BC4F32] uppercase tracking-wider">Due Process</span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B1626] font-normal mt-2">
              Statutory Legal Sequence: From Dossier to Final Decree
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              How an adoption moves through judicial oversight to establish permanent, irrevocable parentage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-[#E5DFD5] space-y-2">
              <div className="text-[11px] font-bold text-[#BC4F32]">STAGE 01</div>
              <h4 className="font-serif-display text-base font-semibold text-[#0B1626]">Home Study Certification</h4>
              <p className="text-[11px] text-[#64748B] leading-relaxed">
                Court-approved social worker verifies criminal, physical, and psychological fitness.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-[#E5DFD5] space-y-2">
              <div className="text-[11px] font-bold text-[#C59A3F]">STAGE 02</div>
              <h4 className="font-serif-display text-base font-semibold text-[#0B1626]">Statutory Matching</h4>
              <p className="text-[11px] text-[#64748B] leading-relaxed">
                Child referral certified by Central Authority or child placement committee.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-[#E5DFD5] space-y-2">
              <div className="text-[11px] font-bold text-[#185265]">STAGE 03</div>
              <h4 className="font-serif-display text-base font-semibold text-[#0B1626]">Parental Relinquishment</h4>
              <p className="text-[11px] text-[#64748B] leading-relaxed">
                Birth parent consent executed in court with separate independent legal counsel.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-[#E5DFD5] space-y-2">
              <div className="text-[11px] font-bold text-[#0B1626]">STAGE 04</div>
              <h4 className="font-serif-display text-base font-semibold text-[#0B1626]">Interstate / Visas</h4>
              <p className="text-[11px] text-[#64748B] leading-relaxed">
                ICPC approval or consular immigrant visa issuance (IH-3/IH-4) authorized.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-[#E5DFD5] space-y-2">
              <div className="text-[11px] font-bold text-[#BC4F32]">STAGE 05</div>
              <h4 className="font-serif-display text-base font-semibold text-[#0B1626]">Supervisory Period</h4>
              <p className="text-[11px] text-[#64748B] leading-relaxed">
                Mandatory 3 to 6 months post-placement social worker home visits.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-[#E5DFD5] space-y-2">
              <div className="text-[11px] font-bold text-[#C59A3F]">STAGE 06</div>
              <h4 className="font-serif-display text-base font-semibold text-[#0B1626]">Judicial Final Decree</h4>
              <p className="text-[11px] text-[#64748B] leading-relaxed">
                Family court judge signs Decree of Adoption. New birth certificate issued.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: TERMINATION OF PARENTAL RIGHTS & REVOCATION WINDOWS ── */}
      <section className="py-16 bg-[#FAF9F6] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-[#BC4F32] uppercase tracking-wider">Parental Sovereignty</span>
              <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B1626] font-normal leading-tight">
                Termination of Parental Rights (TPR) & Voluntary Relinquishment
              </h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                Parental rights are protected under constitutional due process. Adoption cannot occur without strict, legally verifiable termination of prior biological rights.
              </p>

              <div className="space-y-3 text-xs text-[#475569]">
                <div className="p-3.5 rounded-xl bg-white border border-[#E5DFD5]">
                  <strong className="text-[#0B1626]">Voluntary Relinquishment: </strong>
                  Birth parents sign consent only after birth, before a notary or judge, following independent legal advice. Pre-birth surrender contracts are strictly illegal and void.
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-[#E5DFD5]">
                  <strong className="text-[#0B1626]">Involuntary Termination: </strong>
                  Occurs solely through state child welfare dependency court proceedings involving clear and convincing evidence of severe abuse, abandonment, or uncorrected neglect.
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-[#E5DFD5]">
                  <strong className="text-[#0B1626]">Putative Father Protections: </strong>
                  Biological fathers must receive formal notice under state putative father registries or publication statutes to prevent post-placement challenges.
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 rounded-3xl bg-white border border-[#E5DFD5] space-y-6 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FDF5F1] text-[#BC4F32] flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif-display text-xl font-semibold text-[#0B1626]">The RK Legal Guarantee</h3>
                    <p className="text-xs text-[#64748B]">Contested Adoption Prevention</p>
                  </div>
                </div>

                <p className="text-xs text-[#475569] leading-relaxed">
                  By requiring separate legal counsel for all birth mothers and executing consents strictly according to local statutory revocation windows, RK-Adoption maintains a 99.8% unassailable decree record over 15 years.
                </p>

                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5] text-xs text-[#334155] space-y-1">
                  <span className="font-bold text-[#0B1626]">Independent Legal Representation Escrow:</span>
                  <p>We fund private, independent attorneys for birth parents who report solely to the birth parents, eliminating conflicts of interest.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: THE INTERSTATE COMPACT (ICPC) IN US ADOPTIONS ── */}
      <section className="py-16 bg-white border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-[#BC4F32] uppercase tracking-wider">Interstate Placements</span>
              <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B1626] font-normal leading-tight">
                Navigating the Interstate Compact on the Placement of Children (ICPC)
              </h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                When an adoptive family lives in a different state from where the child is born, the Interstate Compact governs the child's movement across state lines.
              </p>

              <div className="space-y-3 text-xs text-[#475569]">
                <div className="p-3 rounded-xl bg-[#FAF9F6] border border-[#E5DFD5]">
                  <strong className="text-[#0B1626]">The Sending State Review: </strong>
                  The birth state ICPC office reviews birth mother surrender documents, hospital release records, and the agency's licensure.
                </div>
                <div className="p-3 rounded-xl bg-[#FAF9F6] border border-[#E5DFD5]">
                  <strong className="text-[#0B1626]">The Receiving State Review: </strong>
                  The adoptive parents' home state ICPC office verifies that their home study is currently valid and compliant with state standards.
                </div>
                <div className="p-3 rounded-xl bg-[#FAF9F6] border border-[#E5DFD5]">
                  <strong className="text-[#0B1626]">NEICE Electronic Expedited Filing: </strong>
                  RK-Adoption utilizes the National Electronic Interstate Compact Enterprise, reducing typical approval wait times from 3 weeks to 5–8 business days.
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 rounded-3xl bg-[#FAF8F5] border-2 border-dashed border-[#E5DFD5] space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#BC4F32]">
                  <AlertCircle className="w-4 h-4 text-[#BC4F32]" />
                  <span>CRITICAL LEGAL WARNING: Do Not Cross State Lines</span>
                </div>
                <p className="text-xs text-[#334155] leading-relaxed">
                  Adoptive parents must remain in the child's birth state until formal written approval is granted by both state ICPC compact administrators. Taking a child across state lines without written ICPC clearance is a misdemeanor or felony under state laws and can invalidate the adoption.
                </p>
                <div className="p-3 rounded-xl bg-white border border-[#E5DFD5] text-[11px] text-[#64748B]">
                  Our local family coordinator will assist you with hotel accommodations and pediatrician visits during the brief ICPC waiting window.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: IMMIGRATION & CITIZENSHIP FRAMEWORKS (IH-3, IH-4, CCA 2000) ── */}
      <section className="py-16 bg-[#FAF9F6] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold text-[#BC4F32] uppercase tracking-wider">Immigration Law</span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B1626] font-normal mt-2">
              U.S. Immigrant Visa Classifications & Automatic Citizenship
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Understanding the difference between IH-3, IH-4, IR-3, and IR-4 visas under the Child Citizenship Act of 2000.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-[#E5DFD5] space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-[#EBF4F7] text-[#185265] text-xs font-bold">
                IH-3 & IR-3 Visas (Full In-Country Finalization)
              </div>
              <h3 className="font-serif-display text-2xl text-[#0B1626] font-semibold">Immediate Automatic Citizenship</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Issued when both adoptive parents (or single parent) personally saw and bonded with the child prior to or during foreign court proceedings, and the foreign court granted a full, final adoption decree.
              </p>
              <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E5DFD5] space-y-2 text-xs text-[#334155]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#185265]" />
                  <span>Child becomes a U.S. citizen the instant they pass through U.S. port of entry customs.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#185265]" />
                  <span>Certificate of Citizenship (Form N-560) is automatically mailed to the home address.</span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E5DFD5] space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-[#FAF4E5] text-[#C59A3F] text-xs font-bold">
                IH-4 & IR-4 Visas (Guardianship for U.S. Finalization)
              </div>
              <h3 className="font-serif-display text-2xl text-[#0B1626] font-semibold">Requires State Finalization</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Issued when the foreign country grants legal custody or guardianship to the prospective parents for the purpose of adopting the child in the United States, or only one parent traveled.
              </p>
              <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E5DFD5] space-y-2 text-xs text-[#334155]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C59A3F]" />
                  <span>Child enters the United States as a Lawful Permanent Resident (Green Card holder).</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C59A3F]" />
                  <span>Citizenship is triggered automatically once adoption is finalized in your state family court.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: POST-PLACEMENT STATUTORY SUPERVISION MANDATES ── */}
      <section className="py-16 bg-white border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#BC4F32] uppercase tracking-wider">Supervisory Compliance</span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B1626] font-normal mt-2">
              Post-Placement Supervisory Reporting Protocols
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Prior to court finalization and for international treaty compliance, social workers conduct mandatory supervisory visits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#E5DFD5] space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#FDF5F1] text-[#BC4F32] flex items-center justify-center font-bold text-xs">
                30 Days
              </div>
              <h4 className="font-serif-display text-lg font-semibold text-[#0B1626]">Initial Home Adjustment</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Observation of physical health, weight gain, sleep cycles, and caregiver emotional attunement during the first month.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#E5DFD5] space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#FAF4E5] text-[#C59A3F] flex items-center justify-center font-bold text-xs">
                90 Days
              </div>
              <h4 className="font-serif-display text-lg font-semibold text-[#0B1626]">Developmental Progress</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Review of pediatrician checkups, immunizations, linguistic development, and sibling dynamics.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#E5DFD5] space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#EBF4F7] text-[#185265] flex items-center justify-center font-bold text-xs">
                180 Days
              </div>
              <h4 className="font-serif-display text-lg font-semibold text-[#0B1626]">Final Court Summary</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Formal written recommendation submitted to the family court judge recommending entry of the final adoption decree.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: FINANCIAL INTEGRITY & ANTI-CORRUPTION AUDITS ── */}
      <section className="py-16 bg-[#FAF9F6] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="rk-legal-card rounded-3xl p-8 sm:p-12 bg-white border border-[#E5DFD5]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF5F1] text-[#BC4F32] text-xs font-bold">
                  <Lock className="w-4 h-4" />
                  <span>Itemized Accounting Mandate</span>
                </div>
                <h3 className="font-serif-display text-3xl text-[#0B1626] font-normal leading-tight">
                  Zero Finder's Fees. Itemized Sworn Affidavits Filed with the Court.
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  In every adoption handled by RK-Adoption, a comprehensive financial disclosure affidavit is filed directly under oath with the family court. Every dollar expended on living assistance, medical care, or legal filing is verified.
                </p>
              </div>

              <div className="lg:col-span-7 space-y-3 text-xs text-[#334155]">
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5]">
                  <strong className="text-[#0B1626]">Hague Article 32 Compliance: </strong>
                  Prohibits any excessive director salaries or bonuses tied to the volume of completed adoptions.
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5]">
                  <strong className="text-[#0B1626]">Independent Third-Party Annual Audits: </strong>
                  Our financial records are independently audited annually by a recognized CPA firm and submitted to state licensing boards.
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5]">
                  <strong className="text-[#0B1626]">Birth Parent Living Assistance Caps: </strong>
                  Expectant mother assistance is strictly limited to verifiable rent, utilities, food, and maternity apparel permitted under state statutory caps.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: OPEN ADOPTION POST-ADOPTION CONTACT AGREEMENTS (PACA) ── */}
      <section className="py-16 bg-white border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#BC4F32] uppercase tracking-wider">Contractual Law</span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B1626] font-normal mt-2">
              Post-Adoption Contact Agreements (PACA): Legal Enforceability
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              How post-adoption contact agreements function in family court across differing legal jurisdictions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#E5DFD5] space-y-3">
              <span className="text-xs font-bold text-[#BC4F32] uppercase tracking-wider">Legally Enforceable</span>
              <h4 className="font-serif-display text-lg font-semibold text-[#0B1626]">Approximately 30 U.S. States</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Courts can approve and enforce written agreements for letters, photos, or visits. If disputes arise, parties participate in court mediation. However, failure to permit contact cannot overturn the adoption decree.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#E5DFD5] space-y-3">
              <span className="text-xs font-bold text-[#C59A3F] uppercase tracking-wider">Moral Agreements</span>
              <h4 className="font-serif-display text-lg font-semibold text-[#0B1626]">States Without Statutory PACA</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Contact agreements are considered moral commitments based on mutual trust rather than enforceable contracts. The legal parents retain sole discretion over child privacy and contact.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#E5DFD5] space-y-3">
              <span className="text-xs font-bold text-[#185265] uppercase tracking-wider">International Corridors</span>
              <h4 className="font-serif-display text-lg font-semibold text-[#0B1626]">Central Authority Reports</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Intercountry adoptions generally require semi-annual or annual progress reports submitted through the foreign Central Authority rather than direct contact with biological relatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 11: BIRTH RECORDS & ADOPTEE RIGHTS LEGISLATION ── */}
      <section className="py-16 bg-[#FAF9F6] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-[#BC4F32] uppercase tracking-wider">Adoptee Rights</span>
              <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B1626] font-normal leading-tight">
                Original Birth Certificate (OBC) Access & Open Records Movement
              </h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                Historically, adoption records were sealed indefinitely. Today, a growing international movement recognizes an adult adoptee's fundamental human right to access their own biological truth and vital records.
              </p>

              <div className="space-y-3 text-xs text-[#475569]">
                <div className="p-3.5 rounded-xl bg-white border border-[#E5DFD5]">
                  <strong className="text-[#0B1626]">Unrestricted Access States: </strong>
                  Over 15 U.S. states (including NY, NJ, CT, CO) now grant adult adoptees unrestricted access to their original birth certificate upon reaching age 18.
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-[#E5DFD5]">
                  <strong className="text-[#0B1626]">Mutual Consent Registries: </strong>
                  State and national registries connect adult adoptees and birth relatives when both parties register reciprocal interest.
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-[#E5DFD5]">
                  <strong className="text-[#0B1626]">RK Lifelong File Preservation: </strong>
                  We preserve comprehensive, non-identifying and identifying case dossiers in encrypted secure cold storage, accessible to adoptees upon reaching legal majority.
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 rounded-3xl bg-gradient-to-br from-[#122238] to-[#0B1626] text-white shadow-xl space-y-5">
                <span className="text-xs uppercase tracking-wider text-[#C59A3F] font-bold">Policy Position</span>
                <h3 className="font-serif-display text-2xl font-semibold">
                  "Every adult human being has the moral right to know their biological identity, medical genetics, and heritage."
                </h3>
                <p className="text-xs text-[#CBD5E1] leading-relaxed">
                  RK-Adoption formally supports national legislative initiatives granting unrestricted access to original birth certificates for adult adoptees. Secrecy belongs to the past; transparency builds lifelong dignity.
                </p>
                <div className="pt-2">
                  <a
                    href="/about/mission"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#C59A3F] hover:underline"
                  >
                    <span>Read Our Complete Ethical Charter</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 12: STATUTORY ADOPTION TERMINOLOGY & LEGAL GLOSSARY ── */}
      <section className="py-16 bg-white border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10 flex items-center justify-between flex-wrap gap-4">
            <div>
              <span className="text-xs font-bold text-[#BC4F32] uppercase tracking-wider">Reference Dictionary</span>
              <h2 className="font-serif-display text-3xl text-[#0B1626] font-normal mt-1">
                Statutory Adoption Legal Glossary
              </h2>
            </div>
            <div className="relative min-w-[260px]">
              <Search className="w-4 h-4 text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={glossarySearch}
                onChange={(e) => setGlossarySearch(e.target.value)}
                placeholder="Search legal terminology..."
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-[#E5DFD5] text-xs text-[#0B1626] placeholder-[#94A3B8] focus:outline-none focus:border-[#BC4F32]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGlossary.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#E5DFD5] space-y-2 flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-serif-display text-lg font-semibold text-[#0B1626]">
                    {item.term}
                  </h4>
                  <p className="text-xs text-[#475569] leading-relaxed mt-2">
                    {item.definition}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 13: UN CONVENTION ON THE RIGHTS OF THE CHILD (UNCRC) ── */}
      <section className="py-16 bg-[#FAF9F6] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#BC4F32] uppercase tracking-wider">International Human Rights</span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B1626] font-normal mt-2">
              UNCRC Articles 20 & 21: Child Rights in Alternative Care
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              The United Nations Convention on the Rights of the Child codifies non-negotiable protections for children deprived of their family environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-[#E5DFD5] space-y-4">
              <span className="text-xs font-bold text-[#BC4F32] uppercase tracking-wider">UNCRC Article 20</span>
              <h3 className="font-serif-display text-2xl text-[#0B1626] font-semibold">Special Protection and Assistance</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                A child temporarily or permanently deprived of his or her family environment, or in whose own best interests cannot be allowed to remain in that environment, shall be entitled to special protection and assistance provided by the State.
              </p>
              <div className="text-xs text-[#185265] font-semibold pt-2">
                Mandate: Preservation of cultural, religious, and linguistic continuity in placement.
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E5DFD5] space-y-4">
              <span className="text-xs font-bold text-[#C59A3F] uppercase tracking-wider">UNCRC Article 21</span>
              <h3 className="font-serif-display text-2xl text-[#0B1626] font-semibold">Adoption Paramountcy</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                States Parties that recognize the system of adoption shall ensure that the best interests of the child shall be the paramount consideration, authorized only by competent authorities upon informed consent of persons concerned.
              </p>
              <div className="text-xs text-[#BC4F32] font-semibold pt-2">
                Mandate: Child safety precedes parental preference in all legal proceedings.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 14: OFFICIAL AUTHORITY DIRECTORY & CENTRAL REGISTRIES ── */}
      <section className="py-16 bg-white border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#BC4F32] uppercase tracking-wider">Governmental Contacts</span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B1626] font-normal mt-2">
              Official Central Authority Registry
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Verified statutory bodies governing adoption legality across key partner nations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#E5DFD5] space-y-3">
              <Building2 className="w-6 h-6 text-[#185265]" />
              <h4 className="font-semibold text-xs text-[#0B1626]">U.S. Department of State</h4>
              <p className="text-[11px] text-[#64748B]">Office of Children's Issues (Central Authority for the USA)</p>
              <div className="text-[11px] text-[#185265] font-semibold pt-1">travel.state.gov</div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#E5DFD5] space-y-3">
              <Building2 className="w-6 h-6 text-[#BC4F32]" />
              <h4 className="font-semibold text-xs text-[#0B1626]">UK Department for Education</h4>
              <p className="text-[11px] text-[#64748B]">Intercountry Adoption Section (ICA), London</p>
              <div className="text-[11px] text-[#BC4F32] font-semibold pt-1">gov.uk/child-adoption</div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#E5DFD5] space-y-3">
              <Building2 className="w-6 h-6 text-[#C59A3F]" />
              <h4 className="font-semibold text-xs text-[#0B1626]">CARA India</h4>
              <p className="text-[11px] text-[#64748B]">Central Adoption Resource Authority, New Delhi</p>
              <div className="text-[11px] text-[#C59A3F] font-semibold pt-1">cara.wcd.gov.in</div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#E5DFD5] space-y-3">
              <Building2 className="w-6 h-6 text-[#0B1626]" />
              <h4 className="font-semibold text-xs text-[#0B1626]">HCCH Hague Conference</h4>
              <p className="text-[11px] text-[#64748B]">Permanent Bureau of the Hague Conference, The Hague</p>
              <div className="text-[11px] text-[#0B1626] font-semibold pt-1">hcch.net</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 15: INTERACTIVE LEGAL READINESS & DOSSIER AUDIT CHECKLIST ── */}
      <section id="checklist" className="py-16 bg-[#FAF8F5] border-b border-[#E5DFD5]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="rk-legal-card rounded-3xl p-8 sm:p-12 bg-white border border-[#E5DFD5] shadow-lg space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF4F7] text-[#185265] text-xs font-semibold">
                <FileCheck className="w-4 h-4" />
                <span>Interactive Audit Tool</span>
              </div>
              <h2 className="font-serif-display text-3xl text-[#0B1626] font-normal">
                Statutory Dossier Completeness Audit
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B]">
                Track your legal preparation progress across the mandatory document requirements.
              </p>
            </div>

            <div className="flex items-center justify-between text-xs text-[#64748B] pb-2 border-b border-[#E5DFD5]">
              <span>Audit Progress: {completedChecks} of 8 verified</span>
              <span className="font-bold text-[#BC4F32]">{Math.round((completedChecks / 8) * 100)}% Complete</span>
            </div>

            <div className="space-y-3">
              {[
                { id: 'check-1', label: 'Certified government birth certificates & marriage licenses for all adult applicants' },
                { id: 'check-2', label: 'FBI fingerprint criminal records & state child abuse registry clearances' },
                { id: 'check-3', label: 'Comprehensive physical health examination reports signed by registered MDs' },
                { id: 'check-4', label: 'Signed Form I-800A / I-600A preliminary approval letter from USCIS (for international)' },
                { id: 'check-5', label: 'Certified W-2 tax transcripts, 1040 returns, and proof of employment stability' },
                { id: 'check-6', label: 'Three signed personal reference letters from non-family community members' },
                { id: 'check-7', label: 'State Secretary apostille certification on all foreign-destined legal documents' },
                { id: 'check-8', label: 'Approved Hague-compliant Home Study Report prepared by licensed agency' },
              ].map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleChecklist(item.id)}
                  className={`p-4 rounded-xl border text-xs flex items-center justify-between cursor-pointer transition-all ${
                    checklistState[item.id]
                      ? 'border-[#185265] bg-[#EBF4F7]/40 text-[#0B1626]'
                      : 'border-[#E5DFD5] bg-white text-[#475569] hover:border-[#D3CAC0]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${
                      checklistState[item.id] ? 'bg-[#185265] border-[#185265] text-white' : 'border-[#CBD5E1] bg-white'
                    }`}>
                      {checklistState[item.id] && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <span>{item.label}</span>
                  </div>
                  <span className="text-[10px] font-bold text-[#64748B] uppercase">
                    {checklistState[item.id] ? 'Verified' : 'Pending'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 16: CONTEXTUAL LEGAL ADVISORY CTA ── */}
      <section className="py-20 bg-gradient-to-br from-[#0B1626] via-[#122238] to-[#0B1626] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-[#C59A3F]">
            <Scale className="w-4 h-4 text-[#C59A3F]" />
            <span>Schedule Legal Consultation</span>
          </div>

          <h2 className="font-serif-display text-4xl sm:text-5xl font-normal max-w-3xl mx-auto leading-tight">
            Consult with Our Accredited Legal & Social Work Directors
          </h2>

          <p className="text-sm sm:text-base text-[#CBD5E1] max-w-2xl mx-auto leading-relaxed">
            Whether evaluating interstate placement under the ICPC or navigating bilateral requirements under the Hague Convention, our legal caseworkers ensure absolute statutory peace of mind.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap pt-4">
            <a
              href="/contact"
              className="px-6 py-3.5 rounded-xl bg-[#BC4F32] hover:bg-[#A54127] text-white text-xs sm:text-sm font-semibold shadow-lg transition-all"
            >
              Book Confidential Legal Orientation
            </a>
            <button
              onClick={() => setModalHandbookOpen(true)}
              className="px-6 py-3.5 rounded-xl bg-[#C59A3F] hover:bg-[#B38730] text-[#0B1626] text-xs sm:text-sm font-bold transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Statutory Legal Protocol (PDF)</span>
            </button>
          </div>
        </div>
      </section>

      {/* --- STATUTORY HANDBOOK MODAL --- */}
      {modalHandbookOpen && (
        <div className="fixed inset-0 z-50 bg-[#0B1626]/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl border border-[#E5DFD5] space-y-5 animate-fade-in-down">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#BC4F32]">Official Publication</span>
                <h3 className="font-serif-display text-2xl text-[#0B1626] font-semibold">
                  2026 Statutory Adoption Legal Protocol
                </h3>
              </div>
              <button
                onClick={() => setModalHandbookOpen(false)}
                className="text-[#94A3B8] hover:text-[#0B1626] p-1 rounded-lg text-lg"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-[#475569] leading-relaxed">
              Contains complete statutory citations, ICPC interstate packet filing guides, Hague Convention Article 16 dossier templates, and USCIS Form I-800A/I-600A instructions.
            </p>

            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter email to receive secure download link"
                className="w-full px-4 py-3 rounded-xl border border-[#E5DFD5] text-xs text-[#0B1626] focus:outline-none focus:border-[#BC4F32]"
              />
              <button
                onClick={() => {
                  alert('Thank you! The legal protocol dossier has been emailed to your address.');
                  setModalHandbookOpen(false);
                }}
                className="w-full py-3 rounded-xl bg-[#BC4F32] hover:bg-[#A54127] text-white text-xs font-bold transition-all shadow-md"
              >
                Send Legal Protocol to My Email
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
