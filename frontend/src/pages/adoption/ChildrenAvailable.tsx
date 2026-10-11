import { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  FileCheck,
  Lock,
  EyeOff,
  ChevronRight,
  X
} from 'lucide-react';

interface WaitingVignette {
  caseId: string;
  category: 'siblings' | 'older' | 'special-needs' | 'infant';
  pseudonym: string;
  ageDisplay: string;
  personality: string;
  passions: string[];
  idealHome: string;
  medicalNote: string;
  photoUrl: string;
  jurisdiction: string;
  urgencyBadge: string;
}

const WAITING_VIGNETTES: WaitingVignette[] = [
  {
    caseId: 'RK-SIB-8421',
    category: 'siblings',
    pseudonym: 'The V. Brothers (Leo & Julian)',
    ageDisplay: 'Ages 7 & 9 • Sibling Pair',
    personality: 'Inseparable, inquisitive, and deeply loyal to one another. Leo is an enthusiastic builder with legos; Julian is a gentle, reflective reader who loves nature walks.',
    passions: ['Marine Biology', 'Lego Robotics', 'Bicycle Riding'],
    idealHome: 'A two-parent or structured single-parent household capable of nurturing two active boys without separating their bond.',
    medicalNote: 'Both children are healthy with up-to-date immunizations and excellent school attendance.',
    photoUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=80',
    jurisdiction: 'Domestic State Foster Transition',
    urgencyBadge: 'Sibling Unification Priority'
  },
  {
    caseId: 'RK-YOUTH-5104',
    category: 'older',
    pseudonym: 'Amara',
    ageDisplay: 'Age 12 • Pre-Teen',
    personality: 'Artistic, thoughtful, and expressive. Amara possesses a radiant sense of humor once trust is built. She thrives in calm, predictable environments where her voice is heard.',
    passions: ['Watercolor Painting', 'Violin', 'Creative Writing'],
    idealHome: 'Patient parents with understanding of trauma co-regulation who will support her artistic expression and therapy continuity.',
    medicalNote: 'Mild sensory processing sensitivity; responds remarkably to quiet study spaces and co-regulation.',
    photoUrl: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=900&q=80',
    jurisdiction: 'Domestic State Placement',
    urgencyBadge: 'Permanent Family Needed'
  },
  {
    caseId: 'RK-MED-3928',
    category: 'special-needs',
    pseudonym: 'Mateo',
    ageDisplay: 'Age 4 • Early Childhood',
    personality: 'Bright, affectionate, and resilient. Mateo greets every social worker with a huge smile and loves musical rhythm games and storytime.',
    passions: ['Percussion & Drums', 'Animal Picture Books', 'Water Play'],
    idealHome: 'Proactive parents located near pediatric specialist centers, eager to celebrate developmental milestones.',
    medicalNote: 'Corrected congenital heart defect (surgically resolved; regular cardiology monitoring required).',
    photoUrl: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=900&q=80',
    jurisdiction: 'Hague Bilateral Partner Program',
    urgencyBadge: 'Specialized Medical Care'
  },
  {
    caseId: 'RK-SIB-9042',
    category: 'siblings',
    pseudonym: 'The Sterling Trio (Maya, Kai & Noah)',
    ageDisplay: 'Ages 4, 6 & 8 • Sibling Group of 3',
    personality: 'Joyful, vibrant trio who protect and comfort one another. Kai is the protective older brother, Maya loves dancing, and little Noah brings laughter to every room.',
    passions: ['Outdoor Camping', 'Dance & Movement', 'Puzzles'],
    idealHome: 'An experienced adoptive or foster family with ample living space, patience, and a strong community support network.',
    medicalNote: 'All three are in excellent physical health with developmental evaluations available for approved parents.',
    photoUrl: 'https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?auto=format&fit=crop&w=900&q=80',
    jurisdiction: 'Domestic Child Welfare Authority',
    urgencyBadge: 'Preserve 3-Sibling Bond'
  },
  {
    caseId: 'RK-YOUTH-7319',
    category: 'older',
    pseudonym: 'Marcus',
    ageDisplay: 'Age 14 • Teenager',
    personality: 'A mature, respectful young man with an analytical mind. Marcus wants a family where he can finish high school and prepare for university with loving guidance.',
    passions: ['Astrophysics', 'Basketball', 'Chess'],
    idealHome: 'A family that values higher education, open communication, and respects an adolescent’s emerging autonomy.',
    medicalNote: 'Completely healthy; active athlete with strong physical endurance.',
    photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80',
    jurisdiction: 'Domestic State Transition',
    urgencyBadge: 'Teen Adoption Advocate'
  },
  {
    caseId: 'RK-INF-2201',
    category: 'infant',
    pseudonym: 'Baby Elena & Birth Family Match',
    ageDisplay: 'Anticipated Infant Placement',
    personality: 'Expectant birth mother seeking a loving, educated adoptive couple or single parent who values mutual respect, letters, and milestones.',
    passions: ['Nurturing Environment', 'Music & Books', 'Family Traditions'],
    idealHome: 'Home-study approved prospective parents ready for domestic open infant adoption with compassionate birth parent communication.',
    medicalNote: 'Complete prenatal care with certified obstetric records available to matching caseworkers.',
    photoUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80',
    jurisdiction: 'Domestic Licensed Adoption Agency',
    urgencyBadge: 'Open Infant Match'
  }
];

export default function ChildrenAvailable() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'siblings' | 'older' | 'special-needs' | 'infant'>('all');
  const [inquiryCase, setInquiryCase] = useState<WaitingVignette | null>(null);
  const [inquirySubmitted, setInquirySubmitted] = useState<boolean>(false);

  const filteredVignettes = activeCategory === 'all' 
    ? WAITING_VIGNETTES 
    : WAITING_VIGNETTES.filter(v => v.category === activeCategory);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
      setInquiryCase(null);
    }, 2800);
  };

  return (
    <div className="rk-children-container font-sans text-[#1A202C] antialiased bg-[#FCFBF7]">
      <style>{`
        .rk-children-container {
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

        .rk-vignette-card {
          background: #ffffff;
          border: 1px solid var(--rk-silk-border);
          box-shadow: 0 4px 20px -2px rgba(12, 19, 31, 0.04);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .rk-vignette-card:hover {
          transform: translateY(-4px);
          border-color: #6B2D5C;
          box-shadow: 0 16px 40px -6px rgba(107, 45, 92, 0.12);
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
          <span className="text-[#6B2D5C] font-semibold">Children Available</span>
        </div>
      </div>

      {/* ── HERO & CHILD SAFEGUARDING CHARTER ── */}
      <section className="relative pt-16 pb-20 bg-gradient-to-b from-[#F6F4ED] via-[#FCFBF7] to-[#FCFBF7] border-b border-[#E8E2D5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDF6FA] border border-[#6B2D5C]/25 text-xs font-semibold text-[#6B2D5C] mx-auto">
            <EyeOff className="w-3.5 h-3.5" />
            <span>Strict Privacy-By-Design • Child Safeguarding Protocol</span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#0C131F] font-normal leading-[1.14] max-w-4xl mx-auto">
            Children & Families Awaiting Permanent Belonging
          </h1>

          <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed font-light max-w-3xl mx-auto">
            Unlike commercial platforms that treat vulnerable minors as searchable consumer products, RK-Adoption presents illustrative, dignified case vignettes to protect minor confidentiality in strict compliance with the UN Convention on the Rights of the Child.
          </p>

          {/* Child Dignity Notice Box */}
          <div className="max-w-4xl mx-auto p-5 rounded-2xl bg-white border border-[#E8E2D5] shadow-xs text-xs text-[#4A5568] text-left flex items-start gap-3.5 leading-relaxed">
            <Lock className="w-5 h-5 text-[#6B2D5C] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#0C131F] block mb-0.5">How Ethical Matching Operates:</strong>
              The profiles below represent real, awaiting children anonymized with pseudonyms and illustrative photography. Detailed medical dossiers, full developmental records, and legal file numbers are unlocked exclusively for approved prospective parents whose home studies have been validated by licensed caseworkers.
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORY FILTER BUTTONS ── */}
      <section className="py-8 bg-white border-b border-[#E8E2D5] sticky top-0 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 flex justify-center flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-[#6B2D5C] text-white shadow-sm font-semibold'
                : 'bg-[#F6F4ED] text-[#718096] hover:text-[#0C131F] border border-[#E8E2D5]'
            }`}
          >
            All Matching Vignettes ({WAITING_VIGNETTES.length})
          </button>
          <button
            onClick={() => setActiveCategory('siblings')}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              activeCategory === 'siblings'
                ? 'bg-[#6B2D5C] text-white shadow-sm font-semibold'
                : 'bg-[#F6F4ED] text-[#718096] hover:text-[#0C131F] border border-[#E8E2D5]'
            }`}
          >
            Sibling Groups (2+ Children)
          </button>
          <button
            onClick={() => setActiveCategory('older')}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              activeCategory === 'older'
                ? 'bg-[#6B2D5C] text-white shadow-sm font-semibold'
                : 'bg-[#F6F4ED] text-[#718096] hover:text-[#0C131F] border border-[#E8E2D5]'
            }`}
          >
            Older Youth & Teens (7–17 yrs)
          </button>
          <button
            onClick={() => setActiveCategory('special-needs')}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              activeCategory === 'special-needs'
                ? 'bg-[#6B2D5C] text-white shadow-sm font-semibold'
                : 'bg-[#F6F4ED] text-[#718096] hover:text-[#0C131F] border border-[#E8E2D5]'
            }`}
          >
            Specialized Healthcare Needs
          </button>
          <button
            onClick={() => setActiveCategory('infant')}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              activeCategory === 'infant'
                ? 'bg-[#6B2D5C] text-white shadow-sm font-semibold'
                : 'bg-[#F6F4ED] text-[#718096] hover:text-[#0C131F] border border-[#E8E2D5]'
            }`}
          >
            Domestic Infant Matches
          </button>
        </div>
      </section>

      {/* ── VIGNETTES GRID ── */}
      <section className="py-20 bg-[#FCFBF7] border-b border-[#E8E2D5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVignettes.map((item) => (
              <div 
                key={item.caseId} 
                className="rk-vignette-card rounded-3xl overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Photo Frame */}
                  <div className="relative h-64 overflow-hidden bg-[#E8E2D5]">
                    <img 
                      src={item.photoUrl} 
                      alt={item.pseudonym}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-[#0C131F]/80 backdrop-blur-md text-white text-[10px] font-semibold tracking-wide">
                        {item.urgencyBadge}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md text-[10px] font-mono text-[#0C131F] border border-[#E8E2D5]">
                        {item.caseId}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7 space-y-4">
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-[#6B2D5C]">
                        {item.jurisdiction}
                      </div>
                      <h3 className="font-serif-luxury text-2xl text-[#0C131F] mt-0.5">
                        {item.pseudonym}
                      </h3>
                      <div className="text-xs font-medium text-[#D49B42] mt-0.5">
                        {item.ageDisplay}
                      </div>
                    </div>

                    <p className="text-xs text-[#4A5568] leading-relaxed font-light">
                      {item.personality}
                    </p>

                    {/* Passions / Hobbies */}
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#718096] block mb-1.5">
                        Strengths & Passions:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.passions.map((p, idx) => (
                          <span key={idx} className="px-2.5 py-1 rounded-lg bg-[#F6F4ED] border border-[#E8E2D5] text-[11px] text-[#0C131F]">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Ideal Home Requirement */}
                    <div className="p-3.5 rounded-xl bg-[#FDF8EE] border border-[#F2E5C8] text-xs text-[#0C131F]">
                      <span className="font-semibold text-[#B87F28] block mb-0.5">Ideal Home Environment:</span>
                      <span className="text-[11px] text-[#4A5568] leading-snug">{item.idealHome}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-7 pt-0">
                  <button
                    onClick={() => setInquiryCase(item)}
                    className="w-full rk-btn-amethyst py-3 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2"
                  >
                    <span>Inquire Through Caseworker</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE 5 STAGES OF WAITING CHILD MATCHING ── */}
      <section className="py-20 bg-white border-b border-[#E8E2D5]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#6B2D5C]">
              Procedural Rigor
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#0C131F]">
              The 5 Milestones of Waiting Child Matching
            </h2>
            <p className="text-xs sm:text-sm text-[#718096] font-light leading-relaxed">
              Matching is an intentional, clinical process ensuring long-term family stability:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="p-5 rounded-2xl bg-[#FCFBF7] border border-[#E8E2D5] text-center space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#FDF6FA] text-[#6B2D5C] flex items-center justify-center mx-auto text-xs font-bold">1</div>
              <h3 className="text-xs font-semibold text-[#0C131F]">Approved Home Study</h3>
              <p className="text-[11px] text-[#718096]">Prospective parents hold valid, certified state or country home studies.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FCFBF7] border border-[#E8E2D5] text-center space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#FDF6FA] text-[#6B2D5C] flex items-center justify-center mx-auto text-xs font-bold">2</div>
              <h3 className="text-xs font-semibold text-[#0C131F]">Dossier Presentation</h3>
              <p className="text-[11px] text-[#718096]">Caseworkers exchange complete developmental and healthcare records.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FCFBF7] border border-[#E8E2D5] text-center space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#FDF6FA] text-[#6B2D5C] flex items-center justify-center mx-auto text-xs font-bold">3</div>
              <h3 className="text-xs font-semibold text-[#0C131F]">Pediatric Review</h3>
              <p className="text-[11px] text-[#718096]">Parents consult independent developmental pediatricians with unredacted data.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FCFBF7] border border-[#E8E2D5] text-center space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#FDF6FA] text-[#6B2D5C] flex items-center justify-center mx-auto text-xs font-bold">4</div>
              <h3 className="text-xs font-semibold text-[#0C131F]">Supervised Visits</h3>
              <p className="text-[11px] text-[#718096]">Pre-placement visits allow the child to bond at their natural pace.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FCFBF7] border border-[#E8E2D5] text-center space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#FDF6FA] text-[#6B2D5C] flex items-center justify-center mx-auto text-xs font-bold">5</div>
              <h3 className="text-xs font-semibold text-[#0C131F]">Judicial Finalization</h3>
              <p className="text-[11px] text-[#718096]">Family court decree granting permanent, irrevocable parental status.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE CASEWORKER INQUIRY MODAL ── */}
      {inquiryCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0C131F]/70 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl border border-[#E8E2D5] relative space-y-5">
            <button
              onClick={() => setInquiryCase(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#F6F4ED] hover:bg-[#E8E2D5] text-[#0C131F] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {inquirySubmitted ? (
              <div className="py-10 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-[#F0F7F5] text-[#1B5E55] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif-luxury text-2xl text-[#0C131F]">Inquiry Successfully Transmitted</h3>
                <p className="text-xs text-[#718096] max-w-sm mx-auto">
                  Your caseworker connection request for case <strong>{inquiryCase.caseId}</strong> has been forwarded to the intake matching committee.
                </p>
              </div>
            ) : (
              <>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#6B2D5C] block">
                    Confidential Caseworker Matching Dossier
                  </span>
                  <h3 className="font-serif-luxury text-2xl text-[#0C131F] mt-1">
                    Inquire Regarding {inquiryCase.pseudonym}
                  </h3>
                  <div className="text-xs text-[#718096] font-mono mt-0.5">
                    File Identification: {inquiryCase.caseId}
                  </div>
                </div>

                <form onSubmit={handleInquirySubmit} className="space-y-3.5 text-xs text-[#0C131F]">
                  <div>
                    <label className="font-semibold block mb-1">Your Full Name(s):</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g., Sarah & Michael Thompson" 
                      className="w-full p-3 rounded-xl bg-[#FCFBF7] border border-[#E8E2D5] focus:outline-none focus:border-[#6B2D5C]"
                    />
                  </div>

                  <div>
                    <label className="font-semibold block mb-1">Your Email Address:</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="advisory@yourfamily.org" 
                      className="w-full p-3 rounded-xl bg-[#FCFBF7] border border-[#E8E2D5] focus:outline-none focus:border-[#6B2D5C]"
                    />
                  </div>

                  <div>
                    <label className="font-semibold block mb-1">Current Home Study Status:</label>
                    <select 
                      className="w-full p-3 rounded-xl bg-[#FCFBF7] border border-[#E8E2D5] focus:outline-none focus:border-[#6B2D5C]"
                    >
                      <option>Approved & Valid (Certified Home Study on File)</option>
                      <option>Home Study In Progress (Expected in 60-90 Days)</option>
                      <option>Exploring / Need to Begin Home Study Process</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-semibold block mb-1">Licensed Adoption Agency or State Caseworker:</label>
                    <input 
                      type="text" 
                      placeholder="Agency Name & Assigned Worker Contact" 
                      className="w-full p-3 rounded-xl bg-[#FCFBF7] border border-[#E8E2D5] focus:outline-none focus:border-[#6B2D5C]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full rk-btn-amethyst py-3 px-6 rounded-xl font-semibold text-xs flex items-center justify-center gap-2"
                    >
                      <FileCheck className="w-4 h-4" />
                      <span>Transmit Official Caseworker Inquiry</span>
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
