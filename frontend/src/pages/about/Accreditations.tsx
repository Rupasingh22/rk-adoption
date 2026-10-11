import { useState } from 'react';
import {
  ShieldCheck,
  Scale,
  Award,
  Lock,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  BadgeCheck
} from 'lucide-react';

interface AuditDoc {
  id: string;
  title: string;
  category: string;
  authority: string;
  validity: string;
  summary: string;
  keyProtocols: string[];
}

const AUDIT_DOCS: AuditDoc[] = [
  {
    id: 'hague',
    title: 'Hague Convention Intercountry Adoption Accreditation',
    category: 'International Statutory Compliance',
    authority: 'Council on Accreditation (COA) / Intercountry Central Authorities',
    validity: 'Current & Fully Certified (Quadrennial Audit)',
    summary: 'Certifies that RK-Adoption adheres to all standards of the 1993 Hague Convention on Protection of Children and Co-operation in Respect of Intercountry Adoption, ensuring ethical procedures and preventing unlawful financial gains.',
    keyProtocols: [
      'Comprehensive verification of child free-for-adoption status',
      'Mandatory pre-adoption trauma-informed parent training (min. 30 hours)',
      'Itemized transparent fee schedules filed with national regulatory bodies',
      'Post-placement supervisory reports delivered to birth-country central authorities'
    ]
  },
  {
    id: 'licensing',
    title: 'Central & State Child Welfare Agency Licensing',
    category: 'Regional Domestic Licensure',
    authority: 'Department of Family & Protective Services / Regional Family Courts',
    validity: 'Active Statutory License #CA-884192-CW',
    summary: 'Authorizes RK-Adoption to perform official home studies, pre-placement custody supervision, birth parent counseling, and submit final recommendations to certified family courts.',
    keyProtocols: [
      'Annual inspection of clinical case records and supervisor credentials',
      'Universal criminal history and child protection registry background audits',
      'Physical and psychological fitness review requirements for all prospective parents',
      'Strict fire, water, and home safety standards verification protocols'
    ]
  },
  {
    id: 'iso-privacy',
    title: 'ISO/IEC 27001 Data Security & Child Privacy Protocol',
    category: 'Digital Security & Confidentiality',
    authority: 'International Organization for Standardization / British Standards Institution',
    validity: 'Certified 2024–2027 (Annual Surveillance)',
    summary: 'Guarantees military-grade encryption and access controls protecting sensitive family dossiers, child medical files, birth parent identity records, and judicial documents.',
    keyProtocols: [
      'Zero public hosting or searchable indexation of minors’ photographs or profiles',
      'Zero-knowledge encrypted cloud vaults for adoption dossiers and medical files',
      'Multi-factor role-based biometric access restricted strictly to assigned caseworkers',
      'Continuous automated audits for unauthorized access attempts or data exfiltration'
    ]
  },
  {
    id: 'ethical-audit',
    title: 'Independent Anti-Trafficking & Financial Ethics Audit',
    category: 'Fiscal & Ethical Transparency',
    authority: 'Independent External Certified Public Accountants & Human Rights Jurists',
    validity: 'Clean Unqualified Audit Opinion (FY 2024/2025)',
    summary: 'An unannounced third-party financial and procedural audit verifying 100% absence of informal gratuities, expedite bounties, or monetization of parental placements.',
    keyProtocols: [
      '100% itemized audit of all fees paid by adoptive parents against licensed cost schedules',
      'Zero commission or bonus structures tied to caseworker placement volumes',
      'Independent verification of foreign caregiving institution subsidies and donations',
      'Whistleblower protection and anonymous ethics escalation hotline'
    ]
  }
];

export default function Accreditations() {
  const [selectedDocId, setSelectedDocId] = useState<string>('hague');
  const activeDoc = AUDIT_DOCS.find(d => d.id === selectedDocId) || AUDIT_DOCS[0];

  return (
    <div className="rk-accred-container font-sans text-[#1E293B] antialiased bg-[#FAF9F6]">
      <style>{`
        .rk-accred-container {
          --rk-navy: #0B1626;
          --rk-rosewood: #BC4F32;
          --rk-rosewood-hover: #A54127;
          --rk-gilt: #C59A3F;
          --rk-aegean: #185265;
          --rk-silk-border: #E5DFD5;
          --rk-canvas: #FAF9F6;
        }

        .font-serif-display {
          font-family: 'Cormorant Garamond', Georgia, serif;
          letter-spacing: -0.015em;
        }

        .rk-card-accred {
          background: #ffffff;
          border: 1px solid var(--rk-silk-border);
          box-shadow: 0 4px 20px -2px rgba(11, 22, 38, 0.04);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .rk-card-accred:hover {
          box-shadow: 0 12px 32px -4px rgba(11, 22, 38, 0.08);
          border-color: #D3CAC0;
        }

        .rk-btn-accred {
          background-color: var(--rk-rosewood);
          color: #ffffff;
          box-shadow: 0 4px 14px 0 rgba(188, 79, 50, 0.28);
          transition: all 0.25s ease;
        }

        .rk-btn-accred:hover {
          background-color: var(--rk-rosewood-hover);
          transform: translateY(-1px);
        }
      `}</style>

      {/* ── BREADCRUMB STRIP ── */}
      <div className="bg-[#F4EFE6] border-b border-[#E5DFD5] py-3.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#64748B]">
          <a href="/" className="hover:text-[#0B1626] transition-colors">Home</a>
          <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8]" />
          <a href="/about" className="hover:text-[#0B1626] transition-colors">About Us</a>
          <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8]" />
          <span className="text-[#BC4F32] font-semibold">Accreditations</span>
        </div>
      </div>

      {/* ── HERO SECTION ── */}
      <section className="relative pt-16 pb-20 bg-gradient-to-b from-[#F4EFE6] via-[#FAF9F6] to-[#FAF9F6] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF4E5] border border-[#C59A3F]/30 text-xs font-semibold text-[#C59A3F] mx-auto">
            <Award className="w-3.5 h-3.5" />
            <span>Statutory Verification & Global Recognition</span>
          </div>

          <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#0B1626] font-normal leading-[1.14] max-w-4xl mx-auto">
            Uncompromising Accreditations, Licensure & Ethical Governance
          </h1>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-light max-w-3xl mx-auto">
            RK-Adoption operates under the most stringent international adoption treaties and sovereign child welfare licensing standards. Every procedure is subject to independent legal, financial, and procedural scrutiny.
          </p>

          <div className="pt-4 flex flex-wrap justify-center items-center gap-4 text-xs font-semibold text-[#0B1626]">
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-[#E5DFD5] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#BC4F32]" />
              Hague Convention Certified
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-[#E5DFD5] flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-[#185265]" />
              ISO/IEC 27001 Data Vaults
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-[#E5DFD5] flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-[#C59A3F]" />
              UNCRC Article 21 Compliant
            </span>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE CREDENTIAL & AUDIT INSPECTOR ── */}
      <section className="py-20 bg-white border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#BC4F32]">
              Transparent Audits
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B1626] mt-2 mb-4 font-normal">
              Official Licensing & Verification Matrix
            </h2>
            <p className="text-sm text-[#64748B] font-light leading-relaxed">
              Select an accreditation below to inspect the certifying authority, statutory scope, and enforced protocols:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
            
            {/* Document Selector Column */}
            <div className="lg:col-span-5 space-y-3">
              {AUDIT_DOCS.map((doc) => {
                const isSelected = selectedDocId === doc.id;
                return (
                  <button
                    key={doc.id}
                    onClick={() => setSelectedDocId(doc.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all ${
                      isSelected
                        ? 'bg-[#0B1626] text-white border-[#0B1626] shadow-md transform -translate-y-0.5'
                        : 'bg-[#FAF9F6] text-[#475569] border-[#E5DFD5] hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[10px] font-semibold uppercase tracking-wider ${
                        isSelected ? 'text-[#C59A3F]' : 'text-[#BC4F32]'
                      }`}>
                        {doc.category}
                      </span>
                      <CheckCircle2 className={`w-3.5 h-3.5 ${isSelected ? 'text-[#C59A3F]' : 'text-[#94A3B8]'}`} />
                    </div>
                    <div className="text-sm font-semibold line-clamp-1">
                      {doc.title}
                    </div>
                    <div className={`text-[11px] mt-1 font-mono ${isSelected ? 'text-slate-300' : 'text-[#64748B]'}`}>
                      {doc.validity}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Document Detail Inspector Card */}
            <div className="lg:col-span-7">
              <div className="rk-card-accred rounded-3xl p-8 sm:p-10 border border-[#E5DFD5] shadow-lg space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF4F7] text-[#185265] text-xs font-semibold mb-3">
                    <BadgeCheck className="w-3.5 h-3.5" />
                    <span>{activeDoc.category}</span>
                  </div>
                  <h3 className="font-serif-display text-2xl sm:text-3xl text-[#0B1626]">
                    {activeDoc.title}
                  </h3>
                  <div className="text-xs text-[#64748B] mt-2 space-y-0.5">
                    <div><strong className="text-[#0B1626]">Certifying Authority:</strong> {activeDoc.authority}</div>
                    <div><strong className="text-[#0B1626]">Current Standing:</strong> {activeDoc.validity}</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E5DFD5] text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {activeDoc.summary}
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0B1626] mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#BC4F32]" />
                    <span>Enforced Statutory Protocols:</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-[#334155]">
                    {activeDoc.keyProtocols.map((proto, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-4 h-4 rounded-full bg-[#FDF5F1] text-[#BC4F32] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>{proto}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#E5DFD5] flex items-center justify-between text-xs text-[#64748B]">
                  <span>Full audit certificates available to prospective parents upon request</span>
                  <a href="/contact" className="text-[#BC4F32] font-semibold hover:underline flex items-center gap-1">
                    <span>Contact Compliance Officer</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PROSPECTIVE PARENTS' BILL OF RIGHTS ── */}
      <section className="py-20 bg-[#FAF9F6] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#185265]">
              Family Protection Charter
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B1626] mt-2 mb-4 font-normal">
              The RK-Adoption Prospective Parent Bill of Rights
            </h2>
            <p className="text-sm text-[#64748B] font-light leading-relaxed">
              Every applicant embarking on this journey is entitled to transparent, dignified, and legally protected treatment under our institutional charter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#E5DFD5] shadow-xs space-y-2">
              <div className="text-xs font-semibold text-[#BC4F32]">Right 01</div>
              <h3 className="text-sm font-semibold text-[#0B1626]">Transparent Itemized Fee Disclosure</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                You are guaranteed a complete written schedule of all anticipated statutory fees, medical checks, and court costs before signing any intake agreement. Zero hidden surprises.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E5DFD5] shadow-xs space-y-2">
              <div className="text-xs font-semibold text-[#BC4F32]">Right 02</div>
              <h3 className="text-sm font-semibold text-[#0B1626]">Unvarnished Medical Disclosure</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                You possess the inviolable right to receive all known developmental and medical observations of a matched child, with full freedom to seek independent pediatric opinions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E5DFD5] shadow-xs space-y-2">
              <div className="text-xs font-semibold text-[#BC4F32]">Right 03</div>
              <h3 className="text-sm font-semibold text-[#0B1626]">Non-Judgmental Therapeutic Guidance</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Home studies must be conducted as educational, supportive assessments rather than interrogations. Families are treated with profound human respect at every interview.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E5DFD5] shadow-xs space-y-2">
              <div className="text-xs font-semibold text-[#BC4F32]">Right 04</div>
              <h3 className="text-sm font-semibold text-[#0B1626]">Strict Data Confidentiality</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Your personal financial, medical, and psychological disclosures are protected under ISO/IEC 27001 encrypted systems and accessible solely to authorized evaluation clinicians.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E5DFD5] shadow-xs space-y-2">
              <div className="text-xs font-semibold text-[#BC4F32]">Right 05</div>
              <h3 className="text-sm font-semibold text-[#0B1626]">Independent Grievance Escalation</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                If an applicant feels unfairly evaluated, they have the right to request a formal review before our independent ethics oversight board without jeopardizing their status.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E5DFD5] shadow-xs space-y-2">
              <div className="text-xs font-semibold text-[#BC4F32]">Right 06</div>
              <h3 className="text-sm font-semibold text-[#0B1626]">Permanent Post-Adoption Support</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Placement finalization entitles your family to lifelong access to therapeutic counseling circles, specialized parent workshops, and crisis support hotlines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="py-16 bg-[#0B1626] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="font-serif-display text-3xl sm:text-4xl text-white">
            Have Questions About Regional or Hague Convention Compliance?
          </h2>
          <p className="text-sm text-slate-300 font-light max-w-xl mx-auto">
            Our legal compliance team is available to provide jurisdiction-specific statutory documentation and answer regulatory questions.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <a 
              href="/about/global" 
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs font-medium transition-colors"
            >
              Explore Global Reach (40+ Countries)
            </a>
            <a 
              href="/contact" 
              className="rk-btn-accred px-7 py-3 rounded-xl text-xs font-medium flex items-center gap-2"
            >
              <span>Speak with Legal Counsel</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
