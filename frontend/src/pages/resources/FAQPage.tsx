import { useState, useMemo } from 'react';
import {
  Search,
  HelpCircle,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Scale,
  DollarSign,
  Sparkles,
  ArrowRight,
  Globe,
  Users,
  Check,
  Download,
  PhoneCall,
  MessageSquare,
  Filter,
  Info,
  Heart
} from 'lucide-react';

// --- Types ---
interface FAQItem {
  id: string;
  category: string;
  question: string;
  shortAnswer: string;
  detailedContent: string[];
  legalNotes?: string;
  tags: string[];
}

interface MythItem {
  myth: string;
  reality: string;
  explanation: string;
  statOrCitation: string;
}

// --- Data Constants ---
const FAQ_CATEGORIES = [
  { id: 'all', label: 'All Questions', icon: HelpCircle },
  { id: 'eligibility', label: 'Eligibility & Requirements', icon: CheckCircle2 },
  { id: 'finances', label: 'Costs & Grants', icon: DollarSign },
  { id: 'homestudy', label: 'Home Study & Clearances', icon: ShieldCheck },
  { id: 'legal', label: 'Legal & Consent', icon: Scale },
  { id: 'parenting', label: 'Trauma & Attachment', icon: Heart },
  { id: 'international', label: 'Hague & Intercountry', icon: Globe },
  { id: 'postplacement', label: 'Post-Adoption & Care', icon: Users },
];

const COMPREHENSIVE_FAQS: FAQItem[] = [
  // Eligibility
  {
    id: 'eligibility-1',
    category: 'eligibility',
    question: 'Can single individuals adopt through RK-Adoption?',
    shortAnswer: 'Yes. Single men and single women adopt domestically and internationally through our accredited programs every year.',
    detailedContent: [
      'Over 28% of all completed domestic adoptions in our network are finalized by single parents. Legal eligibility is established based on personal maturity, emotional readiness, financial stability, and the presence of a strong local support circle.',
      'For intercountry adoption, individual country mandates vary. Certain partner nations welcome single applicants without restrictions, while others have specific requirements regarding applicant age or minimum years of financial independence.',
      'Our social workers will review your personal profile during the preliminary consultation to match you with partner jurisdictions that celebrate single-parent households.'
    ],
    legalNotes: 'Conforms to UNCRC Non-Discrimination principles and federal adoption non-discrimination guidelines.',
    tags: ['Single Parents', 'Eligibility', 'Qualifications']
  },
  {
    id: 'eligibility-2',
    category: 'eligibility',
    question: 'Is there a strict upper age limit for prospective adoptive parents?',
    shortAnswer: 'In domestic infant and foster adoption, there is generally no statutory maximum age limit, provided parents possess good health and longevity potential.',
    detailedContent: [
      'In domestic programs, our primary assessment focuses on the parent\'s physical vitality, emotional resilience, and active life expectancy to nurture a child into adulthood.',
      'For intercountry adoptions governed by the Hague Convention, sending nations often set age differentials (frequently specifying that the parent should not be more than 40 to 45 years older than the child being adopted).',
      'For older child and sibling group placements, mature parents (aged 45 to 60+) often bring invaluable patience, life perspective, and stability, making them ideal adoptive guardians.'
    ],
    legalNotes: 'Subject to sending country bilateral agreements and medical clearance certifications.',
    tags: ['Age Limits', 'Health', 'Parent Qualifications']
  },
  {
    id: 'eligibility-3',
    category: 'eligibility',
    question: 'Do we need to own our home, or is renting fully acceptable?',
    shortAnswer: 'Renting is 100% acceptable. Homeownership is never a legal prerequisite for adoption.',
    detailedContent: [
      'A persistent myth in child welfare is that only homeowners can adopt. Social workers evaluate safety, stability, cleanliness, and space rather than mortgage ownership.',
      'Your residence must have adequate space for the child—specifically, an individual bed and appropriate privacy as they grow. Sibling groups may share a bedroom according to age and gender guidelines in your jurisdiction.',
      'Your lease terms and landlord consent to minor residents must simply be documented as part of your physical environment assessment.'
    ],
    tags: ['Housing', 'Home Requirements', 'Myths']
  },
  {
    id: 'eligibility-4',
    category: 'eligibility',
    question: 'Are LGBTQ+ couples and individuals legally eligible to adopt?',
    shortAnswer: 'Yes. RK-Adoption is fiercely committed to equal parenting rights, supporting LGBTQ+ individuals and couples across domestic and receptive international pathways.',
    detailedContent: [
      'Domestically, same-sex couples have identical statutory rights to joint and second-parent adoption under federal equality jurisprudence.',
      'For intercountry adoption, legal opportunities are determined by sending country legislation. Several European and Latin American partner nations enthusiastically place children with married same-sex couples.',
      'Our dedicated caseworkers will provide an honest, up-to-date assessment of open international corridors that affirm LGBTQ+ family dignity.'
    ],
    legalNotes: 'Protection under Obergefell v. Hodges (US) and relevant European Court of Human Rights charters.',
    tags: ['LGBTQ+', 'Equality', 'Domestic Adoption']
  },

  // Finances & Costs
  {
    id: 'finances-1',
    category: 'finances',
    question: 'How much does adoption honestly cost, and why are fees required?',
    shortAnswer: 'Costs range from virtually $0 for foster care adoptions to $25,000–$48,000 for domestic or international programs, funding licensed social work, legal filings, and birth mother care.',
    detailedContent: [
      'Foster care adoption: Costs range between $0 and $2,500, with most fees reimbursed through federal Title IV-E subsidies alongside continuing monthly support for eligible children.',
      'Domestic infant adoption: Expenses ($25,000 to $45,000) cover licensed social worker home studies, birth parent medical care, independent court-appointed attorneys for both parties, court filing fees, and 24/7 post-placement crisis care.',
      'Intercountry adoption: Expenses ($32,000 to $55,000) include Hague accreditation compliance, foreign government processing, translation of legal dossiers, consular immigrant visa petitions, and mandatory post-adoption reporting over several years.',
      'RK-Adoption enforces strict itemized escrow accounting. Zero finder fees or arbitrary matching markups are ever permitted.'
    ],
    legalNotes: 'Comports with the Hague Convention Article 32: No one shall derive improper financial gain from an activity relating to an intercountry adoption.',
    tags: ['Costs', 'Breakdown', 'Transparency', 'Escrow']
  },
  {
    id: 'finances-2',
    category: 'finances',
    question: 'What financial grants, subsidies, and tax credits are available to offset costs?',
    shortAnswer: 'Multiple non-repayable grants, employer adoption benefits, and the Federal Adoption Tax Credit (up to $16,810) substantially lower the financial barrier.',
    detailedContent: [
      'Federal Adoption Tax Credit (IRC Section 23): Offers a dollar-for-dollar tax credit (indexed annually to inflation, currently up to $16,810 per child) covering qualified adoption expenses. For children classified with special needs adopted from foster care, the full credit can be claimed without itemizing actual receipts.',
      'Non-profit charitable grants: Organizations such as Help Us Adopt, Gift of Adoption, and Show Hope provide competitive need-based grants ranging from $3,000 to $15,000 once your home study is completed.',
      'Corporate adoption benefits: Many corporate benefit plans provide $5,000 to $20,000 in adoption assistance alongside 6 to 16 weeks of paid parental leave.',
      'RK-Adoption maintains a dedicated Financial Stewardship Office to assist prospective families in building tailored debt-free funding blueprints.'
    ],
    tags: ['Tax Credit', 'Grants', 'Subsidies', 'Financial Planning']
  },

  // Home Study
  {
    id: 'homestudy-1',
    category: 'homestudy',
    question: 'What actually happens during an adoption home study, and what will disqualify us?',
    shortAnswer: 'A home study is an educational and evaluative process designed to prepare you for parenting, not an intrusive white-glove inspection looking for dust.',
    detailedContent: [
      'The process encompasses criminal background checks (FBI fingerprinting, child abuse registries), physical health verifications from your primary physician, personal character references, verification of financial stability, and 2–3 structured in-person interviews.',
      'Social workers are not looking for mansion perfection. They ensure your home has working smoke detectors, locked medication cabinets, child-safe window guards, and a nurturing atmosphere.',
      'Actual disqualifications include: convictions for violent crimes or crimes against children, active substance addiction, severe unmanaged psychiatric instability that impedes parenting, or intentional deception on disclosure forms.'
    ],
    legalNotes: 'Conducted under state licensing statutes and Hague Convention accreditation standards.',
    tags: ['Home Study', 'Background Check', 'Disqualifications']
  },
  {
    id: 'homestudy-2',
    category: 'homestudy',
    question: 'How long does a home study take to complete, and how long does it remain valid?',
    shortAnswer: 'A typical home study requires between 8 to 14 weeks to complete, and remains legally valid for 12 months in most jurisdictions.',
    detailedContent: [
      'The timeline primarily depends on how quickly you gather vital records (birth certificates, tax returns, reference letters, medical clearances).',
      'Once finalized and approved by a court or licensed agency, a home study is valid for 12 months. An annual update (requiring a single follow-up home visit and updated background clearances) keeps it current.',
      'If you experience a major life change—such as moving to a new home, a job transition, or a change in household occupants—an addendum must be promptly filed.'
    ],
    tags: ['Home Study', 'Timeline', 'Validity', 'Renewal']
  },

  // Legal & Consent
  {
    id: 'legal-1',
    category: 'legal',
    question: 'Can a birth mother legally change her mind and reclaim the child after placement?',
    shortAnswer: 'Once parental rights are legally terminated according to statutory revocation periods, the adoption is permanent and irrevocable.',
    detailedContent: [
      'Prior to signing legal relinquishment documents (which can never occur before the birth of the child), an expectant mother has 100% legal authority to choose to parent.',
      'After birth, statutory "revocation windows" vary strictly by state or country: some jurisdictions allow 72 hours to 10 days for consent revocation, while others make consent irrevocable the moment it is signed in court before a judge.',
      'RK-Adoption mandates independent, separate legal counsel and compassionate trauma counseling for birth parents, ensuring consent is fully informed and free of coercion. As a result, contested adoptions in our program are statistically below 0.2%.'
    ],
    legalNotes: 'Governed by statutory state adoption codes and Uniform Adoption Act provisions.',
    tags: ['Birth Mother Rights', 'Revocation Window', 'Legal Finalization']
  },
  {
    id: 'legal-2',
    category: 'legal',
    question: 'What is the Interstate Compact on the Placement of Children (ICPC)?',
    shortAnswer: 'ICPC is statutory law that governs the legal transfer of a child between two U.S. states to ensure safety and jurisdictional compliance.',
    detailedContent: [
      'If you reside in Texas and adopt a newborn born in Ohio, you must remain in the birth state with the child until both the sending state and receiving state ICPC offices review and approve the paperwork.',
      'This approval typically takes 5 to 10 business days after hospital discharge. Leaving the birth state prior to receiving formal written ICPC clearance is a violation of law and can endanger adoption finalization.',
      'Our team coordinates expedited electronic dossier filings through the National Electronic Interstate Compact Enterprise (NEICE) to minimize wait times.'
    ],
    tags: ['ICPC', 'Interstate', 'Travel Clearance']
  },

  // Parenting & Attachment
  {
    id: 'parenting-1',
    category: 'parenting',
    question: 'What is Trust-Based Relational Intervention (TBRI), and why is it essential?',
    shortAnswer: 'TBRI is an evidence-based, trauma-informed parenting model created for children who have experienced institutionalization, neglect, or relational trauma.',
    detailedContent: [
      'Traditional behavior-modification systems (time-outs, punishment, reward charts) often trigger hypervigilance in adopted children because fear is interpreted as abandonment.',
      'TBRI emphasizes three core pillars: Empowering Principles (meeting physical needs like blood sugar stability, sensory regulation, and safe hydration), Connecting Principles (mindful engagement and eye contact), and Correcting Principles (proactive emotional regulation scripts).',
      'RK-Adoption integrates 24 hours of TBRI training into your pre-placement curriculum, empowering families with lifelong therapeutic attunement.'
    ],
    tags: ['TBRI', 'Trauma-Informed', 'Attachment', 'Neurobiology']
  },
  {
    id: 'parenting-2',
    category: 'parenting',
    question: 'How do open adoption relationships realistically work over time?',
    shortAnswer: 'Open adoptions are dynamic relationships centered around the child’s identity, allowing safe letters, photos, phone calls, or annual visits with birth family.',
    detailedContent: [
      'Over 90% of contemporary domestic infant adoptions involve some level of ongoing communication. Openness eliminates the mystery, shame, and unanswered questions often felt by adoptees.',
      'Openness is not co-parenting; adoptive parents retain 100% legal, parental, and custodial authority.',
      'Communication agreements are documented in a Post-Adoption Contact Agreement (PACA) and can be securely maintained via our confidential online portal if mutual privacy is preferred.'
    ],
    tags: ['Open Adoption', 'Contact', 'Birth Family', 'Communication']
  },

  // International
  {
    id: 'international-1',
    category: 'international',
    question: 'What is the Hague Convention on Intercountry Adoption, and how does it protect children?',
    shortAnswer: 'The 1993 Hague Convention is an international treaty that establishes binding safeguards against child trafficking, improper financial gain, and illegal placement.',
    detailedContent: [
      'The treaty ensures that intercountry adoption only takes place when the child is legally proven to be eligible for adoption and domestic placement options have been thoroughly exhausted (subsidiarity principle).',
      'It mandates that both sending and receiving countries maintain accredited Central Authorities to oversee dossiers, verify medical truthfulness, and eliminate illicit payments.',
      'RK-Adoption is fully COA-accredited (Council on Accreditation) under the Intercountry Adoption Act, providing complete federal accountability.'
    ],
    legalNotes: 'Hague Convention of 29 May 1993 on Protection of Children and Co-operation in Respect of Intercountry Adoption.',
    tags: ['Hague Treaty', 'Global Integrity', 'Accreditation']
  },
  {
    id: 'international-2',
    category: 'international',
    question: 'How long must parents travel and stay in the child’s birth country?',
    shortAnswer: 'Depending on the country program, in-country travel ranges from one 7-day trip to two multi-week visits to complete court proceedings and child bonding.',
    detailedContent: [
      'Certain countries (e.g., Colombia, Bulgaria, India) require one trip of approximately 10 to 21 days where parents meet the child, attend a regional family court hearing, and visit the U.S. Embassy for the immigrant visa interview.',
      'Other nations require two separate trips: the first to bond and confirm acceptance of the referral, and the second 2 to 4 months later to finalize guardianship.',
      'Our in-country liaison teams accompany you at every step—from airport arrival and court appearances to medical appointments and translation services.'
    ],
    tags: ['Travel', 'In-Country Stay', 'Court Hearings']
  },

  // Post-Placement
  {
    id: 'postplacement-1',
    category: 'postplacement',
    question: 'What is post-placement supervision, and how many social worker visits are required?',
    shortAnswer: 'Post-placement supervision involves scheduled home visits by your social worker following placement to support attachment before legal finalization.',
    detailedContent: [
      'Most domestic jurisdictions mandate 3 to 6 months of supervision, during which a social worker visits your home 2 to 4 times to evaluate sleep, feeding, emotional bonding, and pediatrician checkups.',
      'For intercountry adoptions, sending countries often mandate post-adoption progress reports (with photos and medical updates) for 1 to 5 years following finalization.',
      'These visits are supportive rather than adversarial; your caseworker is there to troubleshoot challenges and connect you with specialized occupational therapists or speech pathologists.'
    ],
    tags: ['Supervision', 'Post-Adoption', 'Finalization', 'Home Visits']
  },
  {
    id: 'postplacement-2',
    category: 'postplacement',
    question: 'What ongoing support does RK-Adoption provide 5, 10, or 20 years down the road?',
    shortAnswer: 'Our commitment is lifelong: we offer continuing parent education, adolescent identity seminars, peer support circles, and search-and-reunion guidance.',
    detailedContent: [
      'Adoption is a lifelong identity journey, not a singular legal event. When children reach school age, puberty, or early adulthood, new questions of identity and heritage naturally arise.',
      'We host annual family retreats, offer transracial parenting workshops, and provide specialized clinical counseling referrals whenever needed.',
      'When adult adoptees reach the age of majority and choose to explore biological heritage or initiate search and reunion, our social workers provide compassionate, ethical navigation.'
    ],
    tags: ['Lifelong Support', 'Adoptee Identity', 'Reunion Support']
  }
];

const MYTHS_AND_REALITIES: MythItem[] = [
  {
    myth: 'Adoption takes 7 to 10 years for almost every family.',
    reality: 'Average domestic placement takes 9 to 18 months; international takes 14 to 28 months.',
    explanation: 'While waiting times depend on parent openness to child age, medical profile, and race, realistic matching timelines through proactive, accredited agencies average just over one year.',
    statOrCitation: 'Source: National Council for Adoption (NCFA) Benchmark Report'
  },
  {
    myth: 'Birth mothers can take a child back years after adoption is finalized.',
    reality: 'Once a court issues the final Decree of Adoption, it is legally permanent and irrevocable.',
    explanation: 'Popular media sensationalizes rare, highly irregular legal disputes. Once the statutory revocation window expires and a judge signs the decree, adoptive parents have the exact same constitutional status as biological parents.',
    statOrCitation: 'Uniform Adoption Code Section 3-706'
  },
  {
    myth: 'You have to be exceptionally wealthy or earn six figures to adopt.',
    reality: 'Financial screening checks for budget stability and living within your means, not wealth.',
    explanation: 'Thousands of teachers, nurses, tradespeople, and civil servants adopt every year. Combined with federal tax credits, non-profit grants, and employer assistance, adoption is within reach for diverse income levels.',
    statOrCitation: 'Over 62% of adoptive households earn within median national household brackets.'
  },
  {
    myth: 'Children in foster care or orphanages are irrevocably broken or damaged.',
    reality: 'With felt safety, trauma-informed attunement, and consistency, the brain demonstrates incredible neuroplasticity.',
    explanation: 'Trauma impacts the developing nervous system, but children possess profound resilience. Attachment-focused therapies and predictable loving homes enable children to thrive academically and emotionally.',
    statOrCitation: 'American Academy of Pediatrics Child Development Study'
  },
  {
    myth: 'Open adoption confuses children about who their real parents are.',
    reality: 'Research proves open adoption gives children clarity, removes shame, and improves self-esteem.',
    explanation: 'Children understand that one family brought them into the world and another family provides daily parenting. Having open answers prevents deep feelings of rejection and romanticized fantasies.',
    statOrCitation: 'Minnesota/Texas Adoption Research Project (MTARP Longitudinal Study)'
  },
  {
    myth: 'Biological siblings must be separated because few families want more than one child.',
    reality: 'RK-Adoption successfully places over 92% of matched sibling groups together in one home.',
    explanation: 'Keeping siblings intact is one of the highest protective factors against long-term trauma. We provide specialized stipends and community support to families welcoming sibling pairs or triads.',
    statOrCitation: 'Child Welfare Information Gateway 2024 Sibling Protection Data'
  }
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>('eligibility-1');
  const [userQuestion, setUserQuestion] = useState({ name: '', email: '', category: 'eligibility', question: '' });
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Filter FAQs based on category and query
  const filteredFaqs = useMemo(() => {
    return COMPREHENSIVE_FAQS.filter((faq) => {
      const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === '' ||
        faq.question.toLowerCase().includes(q) ||
        faq.shortAnswer.toLowerCase().includes(q) ||
        faq.detailedContent.some((line) => line.toLowerCase().includes(q)) ||
        faq.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleAccordion = (id: string) => {
    setExpandedFaqId((prev) => (prev === id ? null : id));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userQuestion.name && userQuestion.email && userQuestion.question) {
      setSubmissionSuccess(true);
      setTimeout(() => {
        setUserQuestion({ name: '', email: '', category: 'eligibility', question: '' });
        setSubmissionSuccess(false);
      }, 5000);
    }
  };

  return (
    <div className="rk-faq-master-container min-h-screen bg-[#FAF9F6] text-[#1E293B] antialiased">
      {/* --- PAGE-SPECIFIC SCOPED CSS --- */}
      <style>{`
        .rk-faq-master-container {
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

        .rk-card-elevated {
          background: #ffffff;
          border: 1px solid var(--rk-silk-border);
          box-shadow: 0 4px 20px -2px rgba(11, 22, 38, 0.05);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .rk-card-elevated:hover {
          box-shadow: 0 12px 32px -4px rgba(11, 22, 38, 0.08);
          border-color: #D3CAC0;
        }

        .rk-gradient-badge {
          background: linear-gradient(135deg, #FDF5F1 0%, #FAF4E5 100%);
          border: 1px solid rgba(188, 79, 50, 0.2);
        }

        .rk-accordion-item {
          transition: all 0.25s ease-in-out;
        }

        .rk-accordion-item:hover {
          border-color: #BC4F32;
        }
      `}</style>

      {/* ── BREADCRUMB STRIP ── */}
      <div className="bg-[#F4EFE6] border-b border-[#E5DFD5] py-3.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#64748B]">
          <a href="/" className="hover:text-[#0B1626] transition-colors">Home</a>
          <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8]" />
          <a href="/resources" className="hover:text-[#0B1626] transition-colors">Resources</a>
          <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8]" />
          <span className="text-[#BC4F32] font-semibold">Frequently Asked Questions</span>
        </div>
      </div>

      {/* ── SECTION 1: HERO SECTION ── */}
      <section className="relative pt-16 pb-20 bg-gradient-to-b from-[#F4EFE6] via-[#FAF9F6] to-[#FAF9F6] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full rk-gradient-badge text-xs font-semibold text-[#BC4F32]">
                <ShieldCheck className="w-4 h-4 text-[#BC4F32]" />
                <span>Verified by Hague-Accredited Social Work Supervisors</span>
              </div>

              <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#0B1626] font-normal leading-[1.12]">
                Clear, Unvarnished Answers for Every Step of the{' '}
                <span className="italic text-[#BC4F32] underline decoration-[#BC4F32]/30 underline-offset-8">
                  Adoption Journey
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-light max-w-3xl">
                Adoption is one of the most profound legal and emotional milestones in human life. It should never be obscured by ambiguous paperwork, bureaucratic jargon, or hidden costs. Explore our comprehensive repository of factual, peer-reviewed adoption guidance.
              </p>

              {/* Live search input in hero */}
              <div className="pt-2 max-w-2xl">
                <div className="relative flex items-center shadow-lg rounded-2xl overflow-hidden border-2 border-[#E5DFD5] focus-within:border-[#BC4F32] transition-colors bg-white">
                  <Search className="w-5 h-5 text-[#94A3B8] ml-4 shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by keyword: e.g. single parent, home study, costs, TBRI, Hague..."
                    className="w-full px-4 py-4 text-sm sm:text-base text-[#0B1626] placeholder-[#94A3B8] focus:outline-none"
                    aria-label="Search frequently asked questions"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="mr-3 text-xs bg-[#F1EBE1] text-[#64748B] hover:text-[#0B1626] px-2.5 py-1 rounded-md"
                    >
                      Clear
                    </button>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-2 mt-3 text-xs text-[#64748B]">
                  <span className="font-semibold text-[#0B1626]">Popular Topics:</span>
                  {['Costs & Grants', 'Single Parents', 'Home Study Clearances', 'Hague Treaty', 'Open Adoption'].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearchQuery(tag)}
                      className="px-2.5 py-0.5 rounded-full bg-[#EFE9DF] hover:bg-[#E5DFD5] text-[#475569] transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Hero Quick Statistics / Assurance Card */}
            <div className="lg:col-span-4">
              <div className="rk-card-elevated rounded-3xl p-7 space-y-6 bg-gradient-to-br from-white to-[#FAF8F5] border border-[#E5DFD5]">
                <div className="flex items-center gap-3 pb-4 border-b border-[#E5DFD5]">
                  <div className="w-12 h-12 rounded-2xl bg-[#FDF5F1] flex items-center justify-center text-[#BC4F32]">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif-display text-lg font-semibold text-[#0B1626]">The RK Assurance</h3>
                    <p className="text-xs text-[#64748B]">Unconditional Transparency</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs text-[#475569]">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#BC4F32] shrink-0 mt-0.5" />
                    <span><strong>100% Zero-Commission Matching:</strong> We reject speculative match bidding and broker fees.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#BC4F32] shrink-0 mt-0.5" />
                    <span><strong>Hague Accredited & Monitored:</strong> Regulated under federal oversight and international treaty standards.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#BC4F32] shrink-0 mt-0.5" />
                    <span><strong>Lifelong Family Support:</strong> Ongoing post-placement counseling, adolescent cohorts, and adult adoptee registries.</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="w-full py-3 px-4 rounded-xl bg-[#0B1626] hover:bg-[#122238] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <Download className="w-4 h-4 text-[#C59A3F]" />
                    <span>Download Complete 64-Page FAQ Handbook</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: INTERACTIVE CATEGORY SELECTOR & FILTER HUB ── */}
      <section className="py-8 bg-white border-b border-[#E5DFD5] sticky top-[72px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0B1626]">
              <Filter className="w-4 h-4 text-[#BC4F32]" />
              <span>Browse by Category:</span>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full no-scrollbar">
              {FAQ_CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`whitespace-nowrap px-3.5 py-2 rounded-xl text-xs font-medium flex items-center gap-2 transition-all ${
                      isActive
                        ? 'bg-[#BC4F32] text-white shadow-sm'
                        : 'bg-[#F4EFE6] text-[#475569] hover:bg-[#EAE2D5] hover:text-[#0B1626]'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#BC4F32]'}`} />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: TOP 4 MOST CRITICAL DILEMMAS (FEATURED EDITORIAL) ── */}
      <section className="py-16 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold text-[#BC4F32] uppercase tracking-wider">Crucial Pre-Adoption Insights</span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B1626] font-normal mt-2">
              The Four Questions Every Prospective Family Must Ask First
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Before signing an agency contract or depositing funds, review the bedrock principles of ethical child placement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rk-card-elevated rounded-3xl p-8 bg-white border border-[#E5DFD5] space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#FDF5F1] text-[#BC4F32] flex items-center justify-center font-bold text-base">
                01
              </div>
              <h3 className="font-serif-display text-xl text-[#0B1626] font-semibold">
                Are fees tied to the child\'s demographic background or health status?
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                <strong className="text-[#BC4F32]">The RK Standard:</strong> Absolutely never. Any agency pricing children differently according to race, gender, or medical status violates fundamental human dignity. Our program fees reflect uniform social work services, legal filings, and clinical preparation, independent of a child's characteristics.
              </p>
            </div>

            <div className="rk-card-elevated rounded-3xl p-8 bg-white border border-[#E5DFD5] space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#FAF4E5] text-[#C59A3F] flex items-center justify-center font-bold text-base">
                02
              </div>
              <h3 className="font-serif-display text-xl text-[#0B1626] font-semibold">
                What independent legal counsel is provided to biological parents?
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                <strong className="text-[#C59A3F]">The RK Standard:</strong> In every domestic placement, birth mothers and fathers have the right to separate, independent legal representation funded by the agency escrow. Relinquishment must be fully informed, uncoerced, and supported by continuous trauma counseling before and after delivery.
              </p>
            </div>

            <div className="rk-card-elevated rounded-3xl p-8 bg-white border border-[#E5DFD5] space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#EBF4F7] text-[#185265] flex items-center justify-center font-bold text-base">
                03
              </div>
              <h3 className="font-serif-display text-xl text-[#0B1626] font-semibold">
                How thorough is the child\'s medical dossier and psychological review?
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                <strong className="text-[#185265]">The RK Standard:</strong> Every child matched through RK-Adoption undergoes evaluation by a board-certified pediatric specialist. In international cases, videos, developmental milestones, and prenatal exposure records are reviewed by our medical director before family referral acceptance.
              </p>
            </div>

            <div className="rk-card-elevated rounded-3xl p-8 bg-white border border-[#E5DFD5] space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#F4EFE6] text-[#0B1626] flex items-center justify-center font-bold text-base">
                04
              </div>
              <h3 className="font-serif-display text-xl text-[#0B1626] font-semibold">
                What happens if our family experiences post-placement crisis or attachment challenges?
              </h3>
              <p className="text-sm text-[#0B1626] leading-relaxed">
                <strong className="text-[#BC4F32]">The RK Standard:</strong> Adoption is an enduring commitment. Our post-adoption clinical team offers on-call crisis intervention, respite coordination, specialized pediatric occupational therapists, and TBRI coaching at any point following legal decree finalization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: THE MASTER ACCORDION FAQ ENGINE ── */}
      <section className="py-16 bg-white border-y border-[#E5DFD5]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
            <div>
              <h2 className="font-serif-display text-2xl sm:text-3xl text-[#0B1626] font-normal">
                Detailed Answers ({filteredFaqs.length} {filteredFaqs.length === 1 ? 'Question' : 'Questions'} Found)
              </h2>
              <p className="text-xs text-[#64748B] mt-1">
                Showing questions matching <span className="font-semibold text-[#0B1626]">"{selectedCategory === 'all' ? 'All Categories' : selectedCategory}"</span>
                {searchQuery && <span> and search term "{searchQuery}"</span>}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setExpandedFaqId(null)}
                className="text-xs text-[#64748B] hover:text-[#0B1626] px-3 py-1.5 rounded-lg border border-[#E5DFD5]"
              >
                Collapse All
              </button>
            </div>
          </div>

          {filteredFaqs.length === 0 ? (
            <div className="text-center py-16 bg-[#FAF9F6] rounded-3xl border border-dashed border-[#E5DFD5] p-8">
              <HelpCircle className="w-12 h-12 text-[#94A3B8] mx-auto mb-3" />
              <h3 className="font-serif-display text-xl text-[#0B1626]">No Questions Found</h3>
              <p className="text-sm text-[#64748B] mt-1 max-w-md mx-auto">
                We couldn't find any questions matching your query. Try resetting your search or submit your question below directly to our caseworkers.
              </p>
              <button
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                className="mt-4 px-4 py-2 bg-[#BC4F32] text-white text-xs font-semibold rounded-xl"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq) => {
                const isOpen = expandedFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`rk-accordion-item rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? 'border-[#BC4F32] bg-[#FDFBF9] shadow-sm'
                        : 'border-[#E5DFD5] bg-white hover:border-[#D3CAC0]'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(faq.id)}
                      className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#F4EFE6] text-[#BC4F32]">
                            {faq.category}
                          </span>
                          {faq.tags.map((tag) => (
                            <span key={tag} className="text-[10px] text-[#64748B] bg-white border border-[#E5DFD5] px-2 py-0.5 rounded-md">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="font-serif-display text-lg sm:text-xl text-[#0B1626] font-semibold">
                          {faq.question}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#475569] font-normal leading-relaxed line-clamp-2">
                          {faq.shortAnswer}
                        </p>
                      </div>

                      <div className={`mt-2 p-1.5 rounded-full border shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-[#BC4F32] text-white border-[#BC4F32]' : 'bg-[#FAF8F5] text-[#64748B] border-[#E5DFD5]'
                      }`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-2 border-t border-[#E5DFD5]/80 space-y-4 text-sm text-[#334155] leading-relaxed">
                        {faq.detailedContent.map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}

                        {faq.legalNotes && (
                          <div className="p-3.5 rounded-xl bg-[#FAF4E5] border border-[#C59A3F]/30 flex items-start gap-2.5 text-xs text-[#785C1C]">
                            <Info className="w-4 h-4 text-[#C59A3F] shrink-0 mt-0.5" />
                            <div>
                              <span className="font-semibold text-[#5B4412]">Statutory & Legal Benchmark: </span>
                              {faq.legalNotes}
                            </div>
                          </div>
                        )}

                        <div className="pt-2 flex items-center justify-between text-xs text-[#64748B] border-t border-[#E5DFD5]/60">
                          <span>Have more specific questions regarding this topic?</span>
                          <a
                            href="/contact"
                            className="text-[#BC4F32] hover:underline font-semibold flex items-center gap-1"
                          >
                            <span>Consult Social Work Director</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ── SECTION 5: FINANCIAL TRANSPARENCY & COST BREAKDOWN COMPARATOR ── */}
      <section className="py-16 bg-[#FAF9F6] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#BC4F32] uppercase tracking-wider">Zero Hidden Surcharges</span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B1626] font-normal mt-2">
              Comprehensive Adoption Cost Comparison Matrix
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Every fee charged in our pathways reflects strictly itemized professional work. Review expected ranges across the three primary pathways.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Foster Care Pathway */}
            <div className="rk-card-elevated rounded-3xl p-8 bg-white border border-[#E5DFD5] flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-[#EBF4F7] text-[#185265] text-xs font-bold mb-4">
                  Public Foster Care Adoption
                </div>
                <h3 className="font-serif-display text-2xl text-[#0B1626] font-semibold">Foster-to-Adopt</h3>
                <div className="mt-4 pb-4 border-b border-[#E5DFD5]">
                  <span className="font-serif-display text-4xl font-bold text-[#0B1626]">$0 – $2,500</span>
                  <p className="text-xs text-[#64748B] mt-1">Virtually all legal fees reimbursed via Title IV-E</p>
                </div>

                <ul className="mt-6 space-y-3 text-xs text-[#475569]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#185265]" />
                    <span>Home study fully funded through county welfare agency</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#185265]" />
                    <span>Monthly state maintenance subsidy until child reaches age 18</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#185265]" />
                    <span>Medicaid coverage for the child throughout minor years</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#185265]" />
                    <span>State university tuition waivers available in many states</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E5DFD5]">
                <a
                  href="/adoption/types"
                  className="block text-center w-full py-2.5 rounded-xl border border-[#185265] text-[#185265] hover:bg-[#EBF4F7] text-xs font-semibold transition-colors"
                >
                  Explore Foster-to-Adopt Pathway
                </a>
              </div>
            </div>

            {/* Domestic Infant Pathway */}
            <div className="rk-card-elevated rounded-3xl p-8 bg-white border-2 border-[#BC4F32] relative flex flex-col justify-between shadow-md">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#BC4F32] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                Most Common Private Pathway
              </div>
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-[#FDF5F1] text-[#BC4F32] text-xs font-bold mb-4">
                  Domestic Private Infant
                </div>
                <h3 className="font-serif-display text-2xl text-[#0B1626] font-semibold">Newborn Placement</h3>
                <div className="mt-4 pb-4 border-b border-[#E5DFD5]">
                  <span className="font-serif-display text-4xl font-bold text-[#BC4F32]">$28,000 – $44,000</span>
                  <p className="text-xs text-[#64748B] mt-1">Offset by Federal Adoption Tax Credit (up to $16,810)</p>
                </div>

                <ul className="mt-6 space-y-3 text-xs text-[#475569]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#BC4F32]" />
                    <span>Complete home study evaluation and post-placement visits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#BC4F32]" />
                    <span>Independent legal representation for adoptive and birth parents</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#BC4F32]" />
                    <span>Birth mother medical, housing, and life coaching escrow</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#BC4F32]" />
                    <span>Comprehensive hospital social work delivery coordination</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E5DFD5]">
                <a
                  href="/adoption/types"
                  className="block text-center w-full py-2.5 rounded-xl bg-[#BC4F32] hover:bg-[#A54127] text-white text-xs font-semibold transition-colors"
                >
                  Explore Domestic Infant Pathway
                </a>
              </div>
            </div>

            {/* Intercountry Hague Pathway */}
            <div className="rk-card-elevated rounded-3xl p-8 bg-white border border-[#E5DFD5] flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-[#FAF4E5] text-[#C59A3F] text-xs font-bold mb-4">
                  Intercountry Hague Adoption
                </div>
                <h3 className="font-serif-display text-2xl text-[#0B1626] font-semibold">International Corridor</h3>
                <div className="mt-4 pb-4 border-b border-[#E5DFD5]">
                  <span className="font-serif-display text-4xl font-bold text-[#0B1626]">$34,000 – $56,000</span>
                  <p className="text-xs text-[#64748B] mt-1">Includes foreign government statutory fees & dossiers</p>
                </div>

                <ul className="mt-6 space-y-3 text-xs text-[#475569]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C59A3F]" />
                    <span>Foreign government central authority accreditation filing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C59A3F]" />
                    <span>Certified legal translation and apostille notarization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C59A3F]" />
                    <span>In-country legal representation and court decrees</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C59A3F]" />
                    <span>USCIS immigrant visa filings (I-800A/I-800 or I-600A)</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E5DFD5]">
                <a
                  href="/about/global"
                  className="block text-center w-full py-2.5 rounded-xl border border-[#C59A3F] text-[#785C1C] hover:bg-[#FAF4E5] text-xs font-semibold transition-colors"
                >
                  Explore International Corridors
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: THE 6 MYTHS VS. REALITY COMPARATIVE PANEL ── */}
      <section className="py-16 bg-white border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold text-[#BC4F32] uppercase tracking-wider">Evidence-Based Realities</span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B1626] font-normal mt-2">
              Debunking Common Adoption Myths: Fact vs. Fiction
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Sensationalized Hollywood cinema and outdated historical misconceptions cause unnecessary anxiety. Let us examine the empirical reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MYTHS_AND_REALITIES.map((item, index) => (
              <div
                key={index}
                className="rk-card-elevated rounded-2xl p-6 bg-[#FAF9F6] border border-[#E5DFD5] space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-xs font-bold text-[#BC4F32]">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#BC4F32]" />
                    <span>MYTH: "{item.myth}"</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-[#E5DFD5] text-xs font-semibold text-[#0B1626]">
                    <strong className="text-[#185265]">REALITY: </strong>
                    {item.reality}
                  </div>

                  <p className="text-xs text-[#475569] leading-relaxed">
                    {item.explanation}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E5DFD5] text-[11px] text-[#64748B] italic">
                  {item.statOrCitation}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: HOME STUDY PREPARATION CHECKLIST GUIDE ── */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold text-[#BC4F32] uppercase tracking-wider">Demystifying the Home Study</span>
              <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B1626] font-normal leading-tight">
                What Social Workers Are Actually Inspecting in Your Home
              </h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                The home visit often feels daunting to prospective parents. In reality, caseworkers are not evaluating interior decorating or culinary skill; they are assessing physical safety, emotional stability, and child readiness.
              </p>

              <div className="p-4 rounded-2xl bg-white border border-[#E5DFD5] space-y-2 text-xs text-[#475569]">
                <div className="font-semibold text-[#0B1626] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#BC4F32]" />
                  <span>The 3 Fundamental Safety Safeguards:</span>
                </div>
                <p>1. Working smoke/carbon monoxide detectors on every floor.</p>
                <p>2. Securely locked storage for prescription medication and firearms.</p>
                <p>3. A dedicated bedroom space with suitable window egress.</p>
              </div>

              <div className="pt-2">
                <a
                  href="/process/requirements"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#BC4F32] hover:text-[#A54127] transition-colors"
                >
                  <span>Review Complete Home Study Requirements Matrix</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white border border-[#E5DFD5] space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#FDF5F1] text-[#BC4F32] flex items-center justify-center font-bold text-xs">
                    01
                  </div>
                  <h4 className="text-sm font-semibold text-[#0B1626]">Document Gatherings</h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Birth certificates, marriage licenses, tax returns (W-2s/1040s), certified bank statements, and personal references from non-relatives.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#E5DFD5] space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF4E5] text-[#C59A3F] flex items-center justify-center font-bold text-xs">
                    02
                  </div>
                  <h4 className="text-sm font-semibold text-[#0B1626]">Background Clearances</h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    FBI fingerprint background checks, state child protective service registers, and sex offender database verification.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#E5DFD5] space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#EBF4F7] text-[#185265] flex items-center justify-center font-bold text-xs">
                    03
                  </div>
                  <h4 className="text-sm font-semibold text-[#0B1626]">Medical Health Reports</h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Comprehensive physical examination by your physician certifying good health, normal life expectancy, and emotional fitness.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#E5DFD5] space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#F4EFE6] text-[#0B1626] flex items-center justify-center font-bold text-xs">
                    04
                  </div>
                  <h4 className="text-sm font-semibold text-[#0B1626]">Personal Autobiographies</h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    In-depth interviews exploring childhood experiences, conflict resolution, parenting philosophies, and motivations to adopt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: LEGAL RIGHTS & REVOCATION TIMELINES ACROSS JURISDICTIONS ── */}
      <section className="py-16 bg-white border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#BC4F32] uppercase tracking-wider">Statutory Protections</span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B1626] font-normal mt-2">
              Birth Parent Consent Revocation Periods Explained
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Every country and U.S. state establishes specific legal windows during which a birth parent may change their mind before adoption becomes irrevocable.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-[#475569] border border-[#E5DFD5] rounded-2xl overflow-hidden bg-white">
              <thead className="bg-[#FAF8F5] text-[#0B1626] font-semibold uppercase tracking-wider border-b border-[#E5DFD5]">
                <tr>
                  <th className="py-4 px-6">Jurisdiction Type</th>
                  <th className="py-4 px-6">Earliest Consent Timing</th>
                  <th className="py-4 px-6">Revocation Window Duration</th>
                  <th className="py-4 px-6">Court Finalization Mandate</th>
                  <th className="py-4 px-6">Child Safeguard Benchmark</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5DFD5]">
                <tr>
                  <td className="py-4 px-6 font-semibold text-[#0B1626]">Strict Immediate Judicial (e.g. California, Florida)</td>
                  <td className="py-4 px-6">Upon hospital discharge or 48-72 hours post-birth</td>
                  <td className="py-4 px-6 text-[#BC4F32] font-semibold">Immediate upon in-court judicial signature or 72 hours</td>
                  <td className="py-4 px-6">Final decree issued at 6 months post-placement</td>
                  <td className="py-4 px-6">Zero contestation after formal judicial allocution</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-[#0B1626]">Standard Statutory Period (e.g. Texas, New York)</td>
                  <td className="py-4 px-6">48 hours post-delivery</td>
                  <td className="py-4 px-6 text-[#C59A3F] font-semibold">10 to 30 days statutory grace period</td>
                  <td className="py-4 px-6">Final decree issued at 6 months post-placement</td>
                  <td className="py-4 px-6">Independent counseling confirmation required</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-[#0B1626]">United Kingdom & Commonwealth</td>
                  <td className="py-4 px-6">6 weeks after child's birth (Section 52 Adoption Act)</td>
                  <td className="py-4 px-6 text-[#185265] font-semibold">Irrevocable once Placement Order granted by Family Court</td>
                  <td className="py-4 px-6">Adoption Order hearing after 10 weeks of residence</td>
                  <td className="py-4 px-6">CAFCASS reporting officer independently verifies consent</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-[#0B1626]">Hague Intercountry Receiving Nations</td>
                  <td className="py-4 px-6">Determined by Central Authority in country of origin</td>
                  <td className="py-4 px-6 font-semibold text-[#0B1626]">Completed prior to Article 16 referral to adoptive parents</td>
                  <td className="py-4 px-6">Court decree issued in origin country or re-adoption domestically</td>
                  <td className="py-4 px-6">Subsidiarity test: Domestic placement verified impossible first</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-4 rounded-2xl bg-[#FDF5F1] border border-[#BC4F32]/25 text-xs text-[#782813] flex items-center justify-between flex-wrap gap-3">
            <span>
              <strong>Crucial Note:</strong> RK-Adoption ensures that prospective parents are never matched in jurisdictions without independent birth parent legal representation.
            </span>
            <a href="/resources/legal" className="text-[#BC4F32] font-bold hover:underline flex items-center gap-1">
              <span>Read Full Legal Documentation Hub</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: TRANSITION & ATTACHMENT MILESTONES (TBRI PARENTING) ── */}
      <section className="py-16 bg-[#FAF9F6] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold text-[#BC4F32] uppercase tracking-wider">Clinical Guidance</span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B1626] font-normal mt-2">
              Navigating the First 180 Days of Attachment & Felt Safety
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              When a child joins your family, their nervous system requires predictable, trauma-informed attunement to heal from separation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="rk-card-elevated rounded-2xl p-6 bg-white border border-[#E5DFD5] space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-[#BC4F32]">Days 1 – 30</div>
              <h3 className="font-serif-display text-lg font-semibold text-[#0B1626]">The Nesting Period</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Limit outside visitors, loud environments, and external stimulation. Keep the primary caregivers as the sole source of food, comforting, and physical holding to anchor primary attachment.
              </p>
              <div className="text-[11px] font-semibold text-[#BC4F32] pt-2">Focus: Sensory regulation & predictable routines.</div>
            </div>

            <div className="rk-card-elevated rounded-2xl p-6 bg-white border border-[#E5DFD5] space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-[#C59A3F]">Days 31 – 60</div>
              <h3 className="font-serif-display text-lg font-semibold text-[#0B1626]">The Testing Phase</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                As the "honeymoon period" recedes, the child may test boundaries to see if love is truly unconditional. Respond with calm voice tones, proximity, and connection before correction.
              </p>
              <div className="text-[11px] font-semibold text-[#C59A3F] pt-2">Focus: Reassurance that permanence cannot be broken.</div>
            </div>

            <div className="rk-card-elevated rounded-2xl p-6 bg-white border border-[#E5DFD5] space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-[#185265]">Days 61 – 120</div>
              <h3 className="font-serif-display text-lg font-semibold text-[#0B1626]">Attunement & Routine</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                The child's cortisol levels begin normalizing. Joint play, shared eye contact rituals, and predictable circadian sleep rhythms foster cognitive and linguistic leaps.
              </p>
              <div className="text-[11px] font-semibold text-[#185265] pt-2">Focus: Playful engagement & emotional vocabulary.</div>
            </div>

            <div className="rk-card-elevated rounded-2xl p-6 bg-white border border-[#E5DFD5] space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-[#0B1626]">Days 121 – 180+</div>
              <h3 className="font-serif-display text-lg font-semibold text-[#0B1626]">Integration & Trust</h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                Deep felt safety takes root. The child recognizes that their physical and emotional needs will be met consistently. Family traditions and school transitions are safely introduced.
              </p>
              <div className="text-[11px] font-semibold text-[#0B1626] pt-2">Focus: Identity celebration & broader community connections.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: SIBLING GROUP PRESERVATION & SPECIAL CONSIDERATIONS ── */}
      <section className="py-16 bg-white border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF4E5] text-[#C59A3F] text-xs font-bold">
                <Users className="w-4 h-4" />
                <span>Sibling Protection Charter</span>
              </div>

              <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B1626] font-normal leading-tight">
                Why Keeping Sibling Groups Together is Our Highest Priority
              </h2>

              <p className="text-sm text-[#475569] leading-relaxed">
                In child welfare, brothers and sisters are frequently separated due to family housing limitations or fear of handling multiple placements. At RK-Adoption, over 92% of matched sibling groups remain together.
              </p>

              <div className="space-y-3 text-xs text-[#334155]">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#BC4F32] shrink-0 mt-0.5" />
                  <span><strong>Highest Emotional Protective Factor:</strong> Sibling continuity preserves genetic identity, shared history, and mutual comforting during transition.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#BC4F32] shrink-0 mt-0.5" />
                  <span><strong>Dedicated Sibling Stipends:</strong> We provide specialized grant matching and housing modification guidance for families welcoming sibling groups of 2, 3, or more children.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#BC4F32] shrink-0 mt-0.5" />
                  <span><strong>Parenting Coaching for Multiple Transitions:</strong> Tailored strategies to balance birth order dynamics and individualized one-on-one bonding time.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rk-card-elevated rounded-3xl p-8 bg-gradient-to-br from-[#FAF8F5] to-white border border-[#E5DFD5] space-y-6">
                <h3 className="font-serif-display text-xl text-[#0B1626] font-semibold">
                  Frequently Asked Questions About Sibling Adoptions
                </h3>

                <div className="space-y-4 text-xs text-[#475569]">
                  <div className="p-3.5 rounded-xl bg-white border border-[#E5DFD5] space-y-1">
                    <span className="font-bold text-[#0B1626]">Can siblings share a bedroom during the home study?</span>
                    <p>Yes. Same-gender siblings may share a bedroom, provided each child has their own individual bed, adequate closet storage, and appropriate floor space.</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-[#E5DFD5] space-y-1">
                    <span className="font-bold text-[#0B1626]">Do agency fees double when adopting a sibling pair?</span>
                    <p>No. Professional agency services (home study, pre-placement education, post-placement visits) are billed per family case, not per child, keeping sibling adoptions financially accessible.</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-[#E5DFD5] space-y-1">
                    <span className="font-bold text-[#0B1626]">What if one sibling has higher medical or emotional needs?</span>
                    <p>Our clinical team provides dual specialized care plans, ensuring the sibling dynamic is preserved while targeted behavioral therapies are delivered.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 11: INTERNATIONAL ADOPTION & HAGUE CONVENTION TIMELINES ── */}
      <section className="py-16 bg-[#FAF9F6] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold text-[#BC4F32] uppercase tracking-wider">Intercountry Framework</span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B1626] font-normal mt-2">
              The 6-Stage Timeline of an Intercountry Hague Adoption
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Every step is structured by international treaty to guarantee child protection, legal authenticity, and diplomatic compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#E5DFD5] space-y-3">
              <div className="text-xs font-bold text-[#BC4F32] uppercase tracking-wider">Stage 1 (Months 1–3)</div>
              <h4 className="font-serif-display text-lg font-semibold text-[#0B1626]">Home Study & USCIS I-800A Filing</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Completion of Hague-accredited home study, FBI background checks, and preliminary eligibility determination by the U.S. Citizenship and Immigration Services.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E5DFD5] space-y-3">
              <div className="text-xs font-bold text-[#C59A3F] uppercase tracking-wider">Stage 2 (Months 4–6)</div>
              <h4 className="font-serif-display text-lg font-semibold text-[#0B1626]">Dossier Preparation & Apostille</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Certified legal translations, state secretary apostilles, and submission of your family dossier to the Central Authority of the foreign country.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E5DFD5] space-y-3">
              <div className="text-xs font-bold text-[#185265] uppercase tracking-wider">Stage 3 (Months 6–14)</div>
              <h4 className="font-serif-display text-lg font-semibold text-[#0B1626]">Article 16 Referral & Medical Review</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Receipt of the child's comprehensive Article 16 dossier, complete with medical histories, developmental evaluations, and social history, reviewed with your pediatrician.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E5DFD5] space-y-3">
              <div className="text-xs font-bold text-[#0B1626] uppercase tracking-wider">Stage 4 (Months 14–16)</div>
              <h4 className="font-serif-display text-lg font-semibold text-[#0B1626]">USCIS I-800 Petition & Article 5 Letter</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                The U.S. Embassy issues the Article 5 letter confirming the child's eligibility to immigrate, clearing the way for foreign court scheduling.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E5DFD5] space-y-3">
              <div className="text-xs font-bold text-[#BC4F32] uppercase tracking-wider">Stage 5 (Months 16–18)</div>
              <h4 className="font-serif-display text-lg font-semibold text-[#0B1626]">Travel, In-Country Court & Visa</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Travel to country of origin, bonding period, appearance before the foreign family court, and issuance of the child's IH-3 or IH-4 immigrant visa at the U.S. Embassy.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E5DFD5] space-y-3">
              <div className="text-xs font-bold text-[#C59A3F] uppercase tracking-wider">Stage 6 (Post-Arrival)</div>
              <h4 className="font-serif-display text-lg font-semibold text-[#0B1626]">Automatic Citizenship & Re-Adoption</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Upon entry to the United States on an IH-3 visa, the child automatically acquires U.S. citizenship under the Child Citizenship Act of 2000. Re-adoption ensures state birth records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 12: MEDICAL DISCLOSURES & INDEPENDENT PEDIATRIC REVIEWS ── */}
      <section className="py-16 bg-white border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-[#BC4F32] uppercase tracking-wider">Healthcare Truthfulness</span>
              <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B1626] font-normal leading-tight">
                How We Safeguard Against Undisclosed Medical Diagnoses
              </h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                Prospective parents naturally worry about unexpected neurodevelopmental or medical conditions. At RK-Adoption, our independent pediatric protocols ensure total clinical transparency before you make any final commitment.
              </p>

              <div className="space-y-3 text-xs text-[#475569]">
                <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-[#E5DFD5]">
                  <strong className="text-[#0B1626]">Independent Pediatrician Specialty Review: </strong>
                  We partner with specialized international adoption medical clinics (such as those at major children's hospitals) to review lab work, ultrasound reports, and growth charts.
                </div>
                <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-[#E5DFD5]">
                  <strong className="text-[#0B1626]">Standardized Developmental Video Analysis: </strong>
                  Unedited video footage of the child engaging in motor play, feeding, and social interaction is evaluated by physical and speech therapists to verify milestone age appropriateness.
                </div>
                <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-[#E5DFD5]">
                  <strong className="text-[#0B1626]">Full Prenatal Disclosure Records: </strong>
                  Any maternal health factors, known genetic histories, or hospital delivery notes are provided without redactions or selective summaries.
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 rounded-3xl bg-gradient-to-br from-[#122238] to-[#0B1626] text-white shadow-xl space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#BC4F32] flex items-center justify-center text-white">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif-display text-xl font-semibold">Special Medical Needs Programs</h3>
                    <p className="text-xs text-[#94A3B8]">Cleft Palate, Congenital Heart, Limb Differences</p>
                  </div>
                </div>

                <p className="text-xs text-[#CBD5E1] leading-relaxed">
                  Many children awaiting forever families have fully correctable surgical needs (such as unilateral cleft lip/palate, clubfoot, or minor cardiac septal defects) or manageable conditions.
                </p>

                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 space-y-2 text-xs">
                  <div className="font-semibold text-[#C59A3F]">RK Specialized Medical Grants:</div>
                  <p className="text-[#E2E8F0]">
                    Families adopting children with documented special medical needs are automatically eligible for our $5,000–$12,000 surgical subsidy program to assist with early pediatric care upon arrival.
                  </p>
                </div>

                <a
                  href="/adoption/children"
                  className="block text-center w-full py-3 rounded-xl bg-[#C59A3F] hover:bg-[#B38730] text-[#0B1626] font-bold text-xs transition-colors"
                >
                  View Waiting Children Profiles & Special Needs Corridors
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 13: ADOPTEE PERSPECTIVES & SEARCH-AND-REUNION FAQ ── */}
      <section className="py-16 bg-[#FAF9F6] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#BC4F32] uppercase tracking-wider">Lifelong Identity</span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B1626] font-normal mt-2">
              Centering the Voice and Dignity of the Adoptee
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Adoption is an ongoing journey that evolves across childhood, adolescence, and adulthood. How we prepare families to support identity exploration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rk-card-elevated rounded-2xl p-6 bg-white border border-[#E5DFD5] space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#FDF5F1] text-[#BC4F32] flex items-center justify-center font-bold text-xs">
                A
              </div>
              <h4 className="font-serif-display text-lg font-semibold text-[#0B1626]">Telling the Adoption Story Early</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                A child should never remember a day when they did not know they were adopted. Open, age-appropriate storytelling builds trust, prevents shock, and frames adoption as an act of profound love.
              </p>
            </div>

            <div className="rk-card-elevated rounded-2xl p-6 bg-white border border-[#E5DFD5] space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#FAF4E5] text-[#C59A3F] flex items-center justify-center font-bold text-xs">
                B
              </div>
              <h4 className="font-serif-display text-lg font-semibold text-[#0B1626]">Transracial & Cultural Heritage</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Parents adopting transracially must actively surround their child with adult role models, books, food traditions, and cultural celebrations that mirror the child's heritage.
              </p>
            </div>

            <div className="rk-card-elevated rounded-2xl p-6 bg-white border border-[#E5DFD5] space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#EBF4F7] text-[#185265] flex items-center justify-center font-bold text-xs">
                C
              </div>
              <h4 className="font-serif-display text-lg font-semibold text-[#0B1626]">Search & Reunion Support</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                When adult adoptees express curiosity about biological roots, our post-adoption team provides confidential intermediary services to locate biological relatives ethically and respectfully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 14: INTERACTIVE QUESTION SUBMISSION & HELP DESK ── */}
      <section className="py-16 bg-white border-b border-[#E5DFD5]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="rk-card-elevated rounded-3xl p-8 sm:p-12 bg-white border border-[#E5DFD5] shadow-lg">
            <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF5F1] text-[#BC4F32] text-xs font-semibold">
                <MessageSquare className="w-4 h-4" />
                <span>Confidential Help Desk</span>
              </div>
              <h2 className="font-serif-display text-3xl text-[#0B1626] font-normal">
                Have a Unique Question Not Answered Here?
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B]">
                Submit your query directly to our licensed social work supervisory team. We provide thoughtful, confidential answers within 24 business hours.
              </p>
            </div>

            {submissionSuccess ? (
              <div className="p-6 rounded-2xl bg-[#EBF4F7] border border-[#185265]/30 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-[#185265] mx-auto" />
                <h3 className="font-serif-display text-xl text-[#185265] font-semibold">Question Received</h3>
                <p className="text-xs text-[#334155] max-w-md mx-auto">
                  Thank you! Your inquiry has been routed to our clinical case director. A licensed caseworker will email you a detailed response within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0B1626] mb-1.5">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={userQuestion.name}
                      onChange={(e) => setUserQuestion({ ...userQuestion, name: e.target.value })}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full px-4 py-3 rounded-xl border border-[#E5DFD5] text-xs text-[#0B1626] focus:outline-none focus:border-[#BC4F32] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0B1626] mb-1.5">Your Email Address *</label>
                    <input
                      type="email"
                      required
                      value={userQuestion.email}
                      onChange={(e) => setUserQuestion({ ...userQuestion, email: e.target.value })}
                      placeholder="e.g. eleanor@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#E5DFD5] text-xs text-[#0B1626] focus:outline-none focus:border-[#BC4F32] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B1626] mb-1.5">Question Category</label>
                  <select
                    value={userQuestion.category}
                    onChange={(e) => setUserQuestion({ ...userQuestion, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#E5DFD5] text-xs text-[#0B1626] focus:outline-none focus:border-[#BC4F32] transition-colors bg-white"
                  >
                    <option value="eligibility">Eligibility & Personal Qualifications</option>
                    <option value="finances">Costs, Loans & Tax Credits</option>
                    <option value="homestudy">Home Study Inspection & Documents</option>
                    <option value="legal">Legal Procedures & Birth Parent Rights</option>
                    <option value="parenting">Trauma, Attachment & Pediatric Care</option>
                    <option value="international">Intercountry Hague Adoption</option>
                    <option value="other">General Inquiries</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B1626] mb-1.5">Your Detailed Question *</label>
                  <textarea
                    rows={4}
                    required
                    value={userQuestion.question}
                    onChange={(e) => setUserQuestion({ ...userQuestion, question: e.target.value })}
                    placeholder="Describe your circumstances, jurisdiction, or questions regarding timeline and procedures..."
                    className="w-full px-4 py-3 rounded-xl border border-[#E5DFD5] text-xs text-[#0B1626] focus:outline-none focus:border-[#BC4F32] transition-colors resize-none"
                  />
                </div>

                <div className="flex items-center justify-between flex-wrap gap-3 pt-2">
                  <div className="flex items-center gap-2 text-[11px] text-[#64748B]">
                    <ShieldCheck className="w-4 h-4 text-[#BC4F32]" />
                    <span>Strict privacy guaranteed. Zero solicitation or email marketing.</span>
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-[#BC4F32] hover:bg-[#A54127] text-white text-xs font-semibold shadow-sm transition-colors flex items-center gap-2"
                  >
                    <span>Submit Question to Social Worker</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── SECTION 15: CRISIS & IMMEDIATE ASSISTANCE DIRECTORY ── */}
      <section className="py-12 bg-[#FAF8F5] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#E5DFD5] flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#FDF5F1] text-[#BC4F32] flex items-center justify-center shrink-0">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-[#0B1626]">Expectant Mother 24/7 Helpline</h4>
                <p className="text-xs text-[#64748B]">Free, confidential, zero-pressure crisis counseling for pregnant mothers.</p>
                <a href="tel:+18005552367" className="text-xs font-bold text-[#BC4F32] hover:underline block pt-1">
                  1-800-555-ADOPT (24/7)
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E5DFD5] flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#FAF4E5] text-[#C59A3F] flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-[#0B1626]">Post-Adoption Family Support Desk</h4>
                <p className="text-xs text-[#64748B]">Therapeutic support and crisis intervention for existing adoptive parents.</p>
                <a href="mailto:support@rk-adoption.org" className="text-xs font-bold text-[#C59A3F] hover:underline block pt-1">
                  support@rk-adoption.org
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E5DFD5] flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#EBF4F7] text-[#185265] flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-[#0B1626]">Intercountry Ombudsman Liaison</h4>
                <p className="text-xs text-[#64748B]">Hague Convention compliance verification and dossier tracking.</p>
                <a href="/about/accreditations" className="text-xs font-bold text-[#185265] hover:underline block pt-1">
                  Verify Accreditation & Diplomatic Status
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 16: CONTEXTUAL CALL TO ACTION ── */}
      <section className="py-20 bg-gradient-to-br from-[#0B1626] via-[#122238] to-[#0B1626] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-[#C59A3F]">
            <Sparkles className="w-4 h-4 text-[#C59A3F]" />
            <span>Take the Next Step with Complete Peace of Mind</span>
          </div>

          <h2 className="font-serif-display text-4xl sm:text-5xl font-normal max-w-3xl mx-auto leading-tight">
            Ready to Begin Your Adoption Journey with Clarity, Dignity, and Compassion?
          </h2>

          <p className="text-sm sm:text-base text-[#CBD5E1] max-w-2xl mx-auto leading-relaxed">
            Every forever family began with a single conversation. Schedule a confidential preliminary orientation with an RK-Adoption caseworker to evaluate your personal eligibility and explore pathways.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap pt-4">
            <a
              href="/adoption/eligibility"
              className="px-6 py-3.5 rounded-xl bg-[#BC4F32] hover:bg-[#A54127] text-white text-xs sm:text-sm font-semibold shadow-lg transition-all"
            >
              Check Your Eligibility Online
            </a>
            <a
              href="/process/guide"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-semibold transition-all"
            >
              Read Step-by-Step Adoption Guide
            </a>
            <button
              onClick={() => setModalOpen(true)}
              className="px-6 py-3.5 rounded-xl bg-[#C59A3F] hover:bg-[#B38730] text-[#0B1626] text-xs sm:text-sm font-bold transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Full 64-Page FAQ Handbook</span>
            </button>
          </div>
        </div>
      </section>

      {/* --- DOWNLOAD MODAL --- */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-[#0B1626]/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl border border-[#E5DFD5] space-y-5 animate-fade-in-down">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#BC4F32]">Official Publication</span>
                <h3 className="font-serif-display text-2xl text-[#0B1626] font-semibold">
                  2026 Comprehensive Adoption Guidebook
                </h3>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="text-[#94A3B8] hover:text-[#0B1626] p-1 rounded-lg text-lg"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-[#475569] leading-relaxed">
              This 64-page educational document contains unedited cost schedules, state-by-state consent laws, home study safety blueprints, and medical questionnaire templates prepared by our legal and clinical directorate.
            </p>

            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5] space-y-2 text-xs text-[#334155]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#BC4F32]" />
                <span>Format: PDF (Verified Digital Dossier, 4.2 MB)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#BC4F32]" />
                <span>Includes itemized financial ledger & grant directory</span>
              </div>
            </div>

            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter email to receive secure download link"
                className="w-full px-4 py-3 rounded-xl border border-[#E5DFD5] text-xs text-[#0B1626] focus:outline-none focus:border-[#BC4F32]"
              />
              <button
                onClick={() => {
                  alert('Thank you! The complete 64-page guide has been dispatched to your email.');
                  setModalOpen(false);
                }}
                className="w-full py-3 rounded-xl bg-[#BC4F32] hover:bg-[#A54127] text-white text-xs font-bold transition-all shadow-md"
              >
                Send Guidebook Directly to My Inbox
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
