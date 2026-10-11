import { useState } from 'react';
import {
  ClipboardList,
  Scale,
  ChevronRight,
  ArrowRight,
  Check
} from 'lucide-react';

export default function EligibilityCriteria() {
  // Interactive Self-Assessment Questions
  const [assessment, setAssessment] = useState({
    ageReq: false,
    residenceReq: false,
    backgroundReq: false,
    financialReq: false,
    medicalReq: false,
    trainingReq: false,
  });

  const toggleCheck = (key: keyof typeof assessment) => {
    setAssessment(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const completedCount = Object.values(assessment).filter(Boolean).length;
  const percentage = Math.round((completedCount / 6) * 100);

  // Myth vs Truth State
  const [activeMythId, setActiveMythId] = useState<number | null>(1);

  const myths = [
    {
      id: 1,
      myth: "I must own a large home or mansion to qualify to adopt.",
      law: "False. Adoption law mandates only that your home be safe, clean, and structurally sound, with adequate personal sleeping space for the child. Renting an apartment or modest condominium is completely acceptable in virtually all jurisdictions."
    },
    {
      id: 2,
      myth: "Single adults or unmarried partners are legally ineligible to adopt.",
      law: "False. Single women and men legally adopt thousands of children every year under statutory family law codes. Marital status does not preclude parental capability, provided personal stability and support networks are demonstrated."
    },
    {
      id: 3,
      myth: "I must be wealthy or earn a six-figure executive income.",
      law: "False. Caseworkers evaluate financial stability, not wealth. You must simply demonstrate steady income, responsible money management, and adequate healthcare coverage to care for your family without relying on placement subsidies as primary income."
    },
    {
      id: 4,
      myth: "A history of counseling or treated depression automatically disqualifies me.",
      law: "False. Seeking mental healthcare demonstrates emotional maturity and self-awareness. A history of treated depression or anxiety, supported by a physician’s letter confirming current stability, is routinely approved during home studies."
    },
    {
      id: 5,
      myth: "Adoption agencies prefer younger parents under age 35.",
      law: "False. While statutory minimum ages exist (typically 21–25), mature adults in their 40s, 50s, and older are actively sought—especially for awaiting sibling groups, school-age youth, and teenagers who thrive with experienced life guidance."
    }
  ];

  return (
    <div className="rk-eligibility-container font-sans text-[#1A202C] antialiased bg-[#FCFBF7]">
      <style>{`
        .rk-eligibility-container {
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

        .rk-elig-card {
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
          <span className="text-[#6B2D5C] font-semibold">Eligibility Criteria</span>
        </div>
      </div>

      {/* ── HERO SECTION ── */}
      <section className="relative pt-16 pb-20 bg-gradient-to-b from-[#F6F4ED] via-[#FCFBF7] to-[#FCFBF7] border-b border-[#E8E2D5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F0F7F5] border border-[#1B5E55]/30 text-xs font-semibold text-[#1B5E55] mx-auto">
            <ClipboardList className="w-3.5 h-3.5" />
            <span>Statutory Prerequisites & Legal Verification</span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#0C131F] font-normal leading-[1.14] max-w-4xl mx-auto">
            Understanding Statutory Adoption Eligibility
          </h1>

          <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed font-light max-w-3xl mx-auto">
            Adoption criteria exist to ensure children enter safe, enduring, and emotionally prepared families. We demystify the legal requirements so you can move forward with confidence and clarity.
          </p>
        </div>
      </section>

      {/* ── INTERACTIVE 6-POINT READINESS CHECKER ── */}
      <section className="py-20 bg-white border-b border-[#E8E2D5]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Checklist Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs uppercase font-semibold tracking-wider text-[#6B2D5C]">
                  Self-Evaluation Tool
                </span>
                <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#0C131F] mt-1">
                  Adoption Readiness Self-Check
                </h2>
                <p className="text-xs sm:text-sm text-[#718096] font-light mt-1">
                  Select the statements that apply to your current household to assess your initial readiness:
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => toggleCheck('ageReq')}
                  className={`w-full text-left p-4 rounded-2xl border transition-all text-xs flex items-center justify-between ${
                    assessment.ageReq 
                      ? 'bg-[#FDF6FA] border-[#6B2D5C] text-[#0C131F] font-medium' 
                      : 'bg-[#FCFBF7] border-[#E8E2D5] text-[#4A5568] hover:bg-white'
                  }`}
                >
                  <span>1. Minimum Legal Age: I/We meet the statutory age threshold (age 21+ with stable residency)</span>
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center border shrink-0 ml-3 ${
                    assessment.ageReq ? 'bg-[#6B2D5C] border-[#6B2D5C] text-white' : 'border-[#CBD5E1]'
                  }`}>
                    {assessment.ageReq && <Check className="w-3.5 h-3.5" />}
                  </div>
                </button>

                <button
                  onClick={() => toggleCheck('residenceReq')}
                  className={`w-full text-left p-4 rounded-2xl border transition-all text-xs flex items-center justify-between ${
                    assessment.residenceReq 
                      ? 'bg-[#FDF6FA] border-[#6B2D5C] text-[#0C131F] font-medium' 
                      : 'bg-[#FCFBF7] border-[#E8E2D5] text-[#4A5568] hover:bg-white'
                  }`}
                >
                  <span>2. Safe Living Environment: Our home provides adequate physical space, hygiene, and fire safety</span>
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center border shrink-0 ml-3 ${
                    assessment.residenceReq ? 'bg-[#6B2D5C] border-[#6B2D5C] text-white' : 'border-[#CBD5E1]'
                  }`}>
                    {assessment.residenceReq && <Check className="w-3.5 h-3.5" />}
                  </div>
                </button>

                <button
                  onClick={() => toggleCheck('backgroundReq')}
                  className={`w-full text-left p-4 rounded-2xl border transition-all text-xs flex items-center justify-between ${
                    assessment.backgroundReq 
                      ? 'bg-[#FDF6FA] border-[#6B2D5C] text-[#0C131F] font-medium' 
                      : 'bg-[#FCFBF7] border-[#E8E2D5] text-[#4A5568] hover:bg-white'
                  }`}
                >
                  <span>3. Clean Background Records: Able to pass fingerprinting & child abuse registry clearances</span>
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center border shrink-0 ml-3 ${
                    assessment.backgroundReq ? 'bg-[#6B2D5C] border-[#6B2D5C] text-white' : 'border-[#CBD5E1]'
                  }`}>
                    {assessment.backgroundReq && <Check className="w-3.5 h-3.5" />}
                  </div>
                </button>

                <button
                  onClick={() => toggleCheck('financialReq')}
                  className={`w-full text-left p-4 rounded-2xl border transition-all text-xs flex items-center justify-between ${
                    assessment.financialReq 
                      ? 'bg-[#FDF6FA] border-[#6B2D5C] text-[#0C131F] font-medium' 
                      : 'bg-[#FCFBF7] border-[#E8E2D5] text-[#4A5568] hover:bg-white'
                  }`}
                >
                  <span>4. Financial & Healthcare Stability: Consistent employment/income and comprehensive medical coverage</span>
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center border shrink-0 ml-3 ${
                    assessment.financialReq ? 'bg-[#6B2D5C] border-[#6B2D5C] text-white' : 'border-[#CBD5E1]'
                  }`}>
                    {assessment.financialReq && <Check className="w-3.5 h-3.5" />}
                  </div>
                </button>

                <button
                  onClick={() => toggleCheck('medicalReq')}
                  className={`w-full text-left p-4 rounded-2xl border transition-all text-xs flex items-center justify-between ${
                    assessment.medicalReq 
                      ? 'bg-[#FDF6FA] border-[#6B2D5C] text-[#0C131F] font-medium' 
                      : 'bg-[#FCFBF7] border-[#E8E2D5] text-[#4A5568] hover:bg-white'
                  }`}
                >
                  <span>5. Physician Health Verification: Freedom from debilitating medical conditions verified by licensed MD</span>
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center border shrink-0 ml-3 ${
                    assessment.medicalReq ? 'bg-[#6B2D5C] border-[#6B2D5C] text-white' : 'border-[#CBD5E1]'
                  }`}>
                    {assessment.medicalReq && <Check className="w-3.5 h-3.5" />}
                  </div>
                </button>

                <button
                  onClick={() => toggleCheck('trainingReq')}
                  className={`w-full text-left p-4 rounded-2xl border transition-all text-xs flex items-center justify-between ${
                    assessment.trainingReq 
                      ? 'bg-[#FDF6FA] border-[#6B2D5C] text-[#0C131F] font-medium' 
                      : 'bg-[#FCFBF7] border-[#E8E2D5] text-[#4A5568] hover:bg-white'
                  }`}
                >
                  <span>6. Learning Commitment: Prepared to complete 24–36 hours of trauma-informed parent training</span>
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center border shrink-0 ml-3 ${
                    assessment.trainingReq ? 'bg-[#6B2D5C] border-[#6B2D5C] text-white' : 'border-[#CBD5E1]'
                  }`}>
                    {assessment.trainingReq && <Check className="w-3.5 h-3.5" />}
                  </div>
                </button>
              </div>
            </div>

            {/* Score & Next Step Card */}
            <div className="lg:col-span-5">
              <div className="rk-elig-card rounded-3xl p-8 sm:p-10 border border-[#E8E2D5] shadow-lg space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-semibold tracking-wider text-[#6B2D5C]">
                    Readiness Score
                  </span>
                  <span className="text-2xl font-serif-luxury font-bold text-[#6B2D5C]">
                    {percentage}%
                  </span>
                </div>

                <div className="w-full bg-[#E8E2D5] h-2.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#6B2D5C] h-full transition-all duration-500 rounded-full"
                    style={{ width: `${percentage}%` }}
                  />
                </div>

                <div className="p-4 rounded-2xl bg-[#FCFBF7] border border-[#E8E2D5] space-y-2">
                  <span className="text-xs font-semibold text-[#0C131F] block">
                    {completedCount === 6 
                      ? 'Status: Prime Statutory Readiness' 
                      : completedCount >= 4 
                      ? 'Status: Strong Exploratory Position' 
                      : 'Status: Preliminary Exploration Phase'}
                  </span>
                  <p className="text-[11px] text-[#718096] leading-relaxed">
                    {completedCount === 6 
                      ? 'Your household demonstrates all standard statutory prerequisites. You are positioned to request an orientation seminar and start gathering initial certifications.'
                      : 'You possess solid initial foundations. We recommend scheduling a confidential intake phone call to review specific jurisdictional nuances.'}
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href="/contact"
                    className="w-full rk-btn-amethyst py-3 px-6 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 text-center"
                  >
                    <span>Connect with an Intake Caseworker</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                <div className="text-[11px] text-[#718096] leading-snug italic border-t border-[#E8E2D5] pt-4">
                  Note: This tool provides comparative orientation and does not constitute formal legal counsel. Official home study approval is governed exclusively by authorized family court jurisdictions.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── COMMON ADOPTION MYTHS VS. STATUTORY LAW ── */}
      <section className="py-20 bg-[#FCFBF7] border-b border-[#E8E2D5]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#D49B42]">
              Legal Facts vs. Misconceptions
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#0C131F]">
              Common Adoption Myths Debunked by Law
            </h2>
            <p className="text-xs sm:text-sm text-[#718096] font-light leading-relaxed">
              Countless eligible, compassionate families hesitate to adopt due to outdated myths. Click below to inspect the actual statutory realities:
            </p>
          </div>

          <div className="space-y-3.5">
            {myths.map((item) => {
              const isOpen = activeMythId === item.id;
              return (
                <div 
                  key={item.id}
                  className={`rounded-2xl border transition-all ${
                    isOpen 
                      ? 'bg-white border-[#6B2D5C] shadow-md' 
                      : 'bg-white border-[#E8E2D5] hover:border-[#D6CCA8]'
                  }`}
                >
                  <button
                    onClick={() => setActiveMythId(isOpen ? null : item.id)}
                    className="w-full p-5 text-left flex items-start justify-between gap-4"
                  >
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#D49B42] block mb-1">
                        Myth 0{item.id}
                      </span>
                      <h3 className="text-sm sm:text-base font-semibold text-[#0C131F]">
                        "{item.myth}"
                      </h3>
                    </div>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'bg-[#6B2D5C] text-white rotate-180' : 'bg-[#F6F4ED] text-[#718096]'
                    }`}>
                      <ChevronRight className="w-4 h-4 rotate-90" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 pt-1 text-xs sm:text-sm text-[#4A5568] leading-relaxed border-t border-[#E8E2D5] space-y-2 bg-[#FDF6FA]/40 rounded-b-2xl">
                      <div className="flex items-center gap-2 text-[#6B2D5C] font-semibold text-xs pt-2">
                        <Scale className="w-4 h-4" />
                        <span>The Statutory Reality:</span>
                      </div>
                      <p>{item.law}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="py-16 bg-[#0C131F] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white">
            Ready to Verify Your Eligibility with a Licensed Caseworker?
          </h2>
          <p className="text-sm text-slate-300 font-light max-w-xl mx-auto">
            Our social work team offers free, non-judgmental pre-assessment evaluations to guide you through your jurisdiction’s statutes.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <a 
              href="/adoption/types" 
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs font-medium transition-colors"
            >
              Compare Adoption Types
            </a>
            <a 
              href="/contact" 
              className="rk-btn-amethyst px-7 py-3 rounded-xl text-xs font-medium flex items-center gap-2"
            >
              <span>Schedule Free Evaluation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
