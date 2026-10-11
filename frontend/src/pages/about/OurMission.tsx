import { useState } from 'react';
import {
  Heart,
  ShieldCheck,
  BookOpen,
  ArrowRight,
  Compass,
  ChevronRight,
  PhoneCall,
  HeartHandshake
} from 'lucide-react';

export default function OurMission() {
  const [activeArticle, setActiveArticle] = useState<number>(1);

  const articles = [
    {
      id: 1,
      title: "Article I: The Child-Centric Imperative",
      summary: "Adoption is founded solely to secure a suitable family for a child, never a child for a family.",
      details: "Every assessment, matching decision, and placement protocol must prioritize the psychological, emotional, and physical well-being of the minor above all adult preferences or administrative conveniences.",
      badge: "Fundamental Tenet"
    },
    {
      id: 2,
      title: "Article II: Strict Anti-Commercialization",
      summary: "Zero financial profit, zero expediting gratuities, and unyielding opposition to child commodification.",
      details: "RK-Adoption enforces an absolute ban on informal fees, finder bounties, or monetization of parental rights. All statutory fees are itemized, public, and strictly restricted to licensed legal and clinical costs.",
      badge: "Legal Integrity"
    },
    {
      id: 3,
      title: "Article III: Sibling Bond Preservation",
      summary: "Biological siblings possess an inalienable right to remain together whenever safe and feasible.",
      details: "We prioritize prospective parents who demonstrate the willingness, capacity, and emotional maturity to welcome sibling pairs or groups into a single unified home, preventing traumatic familial severing.",
      badge: "Emotional Security"
    },
    {
      id: 4,
      title: "Article IV: Inclusive Family Eligibility",
      summary: "Equal, respectful evaluation for all legally eligible, qualified, and loving prospective parents.",
      details: "We evaluate prospective adoptive parents based on stability, character, emotional readiness, and capacity for unconditional love—never discriminating on irrelevant personal backgrounds, consistent with statutory law.",
      badge: "Equitable Care"
    },
    {
      id: 5,
      title: "Article V: Trauma-Informed Preparation",
      summary: "Mandatory clinical education in attachment dynamics, grief, and emotional co-regulation.",
      details: "Hopeful parents are equipped with Trust-Based Relational Intervention (TBRI) methods, understanding that adoptive parenting requires specialized empathy and therapeutic resilience.",
      badge: "Clinical Standard"
    },
    {
      id: 6,
      title: "Article VI: Irrevocable Post-Placement Care",
      summary: "Our institutional stewardship extends across the child's entire childhood and into adulthood.",
      details: "Placement is the beginning, not the conclusion. We provide permanent access to family counseling, adolescent identity workshops, peer circles, and consensual heritage search support.",
      badge: "Lifelong Pledge"
    }
  ];

  return (
    <div className="rk-mission-container font-sans text-[#1E293B] antialiased bg-[#FAF9F6]">
      <style>{`
        .rk-mission-container {
          --rk-navy: #0B1626;
          --rk-navy-card: #122238;
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

        .rk-luxury-card {
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(12px);
          border: 1px solid var(--rk-silk-border);
          box-shadow: 0 4px 20px -2px rgba(11, 22, 38, 0.04);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .rk-luxury-card:hover {
          box-shadow: 0 12px 32px -4px rgba(11, 22, 38, 0.08);
          border-color: #D3CAC0;
        }

        .rk-btn-mission {
          background-color: var(--rk-rosewood);
          color: #ffffff;
          box-shadow: 0 4px 14px 0 rgba(188, 79, 50, 0.28);
          transition: all 0.25s ease;
        }

        .rk-btn-mission:hover {
          background-color: var(--rk-rosewood-hover);
          transform: translateY(-1px);
          box-shadow: 0 6px 20px 0 rgba(188, 79, 50, 0.38);
        }
      `}</style>

      {/* ── BREADCRUMB & HEADER STRIP ── */}
      <div className="bg-[#F4EFE6] border-b border-[#E5DFD5] py-3.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#64748B]">
          <a href="/" className="hover:text-[#0B1626] transition-colors">Home</a>
          <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8]" />
          <a href="/about" className="hover:text-[#0B1626] transition-colors">About Us</a>
          <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8]" />
          <span className="text-[#BC4F32] font-semibold">Our Mission</span>
        </div>
      </div>

      {/* ── HERO SECTION ── */}
      <section className="relative pt-16 pb-24 overflow-hidden bg-gradient-to-b from-[#F4EFE6] via-[#FAF9F6] to-[#FAF9F6] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDF5F1] border border-[#BC4F32]/25 text-xs font-semibold text-[#BC4F32]">
                <Heart className="w-3.5 h-3.5 fill-[#BC4F32]" />
                <span>The Ethical Compass of RK-Adoption</span>
              </div>

              <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#0B1626] font-normal leading-[1.14]">
                Guiding Every Placement with Uncompromised{' '}
                <span className="italic text-[#BC4F32] underline decoration-[#BC4F32]/30 underline-offset-8">
                  Child Dignity & Love
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-light max-w-2xl">
                RK-Adoption was founded on a singular conviction: that adoption is neither an administrative transaction nor a charitable rescue, but a sacred covenant of lifelong protection, legal stewardship, and human belonging.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a 
                  href="#charter" 
                  className="rk-btn-mission px-7 py-3.5 rounded-xl font-medium text-sm flex items-center gap-2"
                >
                  <span>Explore The 6 Articles</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a 
                  href="/about/team" 
                  className="px-6 py-3.5 rounded-xl bg-white border border-[#E5DFD5] text-[#0B1626] hover:bg-[#F2ECE1] font-medium text-sm flex items-center gap-2 transition-colors"
                >
                  <Compass className="w-4 h-4 text-[#185265]" />
                  <span>Meet Our Leadership Team</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#EAE4D9]">
                <img 
                  src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80" 
                  alt="Gentle parent hands holding baby's hand in safe embrace"
                  className="w-full h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1626]/85 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white p-5 rounded-2xl bg-[#0B1626]/75 backdrop-blur-md border border-white/10">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C59A3F] block mb-1">
                    Founders' Sacred Pledge
                  </span>
                  <p className="text-xs font-light text-slate-200 leading-relaxed">
                    "We do not seek to expedite children into homes; we seek to prepare homes worthy of receiving the sacred vulnerability of a child."
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CORE VISION 2030 & THEORY OF CHANGE ── */}
      <section className="py-24 bg-white border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#BC4F32]">
              Theory of Change
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#0B1626] mt-2 mb-4 font-normal">
              A Tripartite Model of Child-Centric Stewardship
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] font-light leading-relaxed">
              Our operational blueprint addresses every dimension of the adoption lifecycle to ensure permanent family preservation and zero trauma displacement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rk-luxury-card rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FDF5F1] text-[#BC4F32] flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#BC4F32] mb-1">
                  Pillar 01
                </div>
                <h3 className="font-serif-display text-2xl text-[#0B1626] mb-3">
                  Statutory Safeguarding
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Rigorous audits of biological background records, judicial free-for-adoption decrees, and unassailable legal titles under the Hague Convention. Zero tolerance for procedural grey areas.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E5DFD5] text-[11px] font-medium text-[#BC4F32]">
                Guaranteed Legal Authenticity
              </div>
            </div>

            <div className="rk-luxury-card rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EBF4F7] text-[#185265] flex items-center justify-center mb-6">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#185265] mb-1">
                  Pillar 02
                </div>
                <h3 className="font-serif-display text-2xl text-[#0B1626] mb-3">
                  Therapeutic Parent Readiness
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  We demystify the home study into a constructive educational incubation. Prospective parents master trauma-informed parenting, co-regulation, and cultural continuity before placement.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E5DFD5] text-[11px] font-medium text-[#185265]">
                Accredited Parent Curriculum
              </div>
            </div>

            <div className="rk-luxury-card rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FAF4E5] text-[#C59A3F] flex items-center justify-center mb-6">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#C59A3F] mb-1">
                  Pillar 03
                </div>
                <h3 className="font-serif-display text-2xl text-[#0B1626] mb-3">
                  Lifelong Preservation Network
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Adoption does not conclude at final decree. We surround families with post-placement counseling, specialized child therapies, peer community cohorts, and adolescent identity support.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E5DFD5] text-[11px] font-medium text-[#C59A3F]">
                Multi-Generational Commitment
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE 6 ARTICLES OF THE ETHICAL CHARTER ── */}
      <section id="charter" className="py-24 bg-[#FAF9F6] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#BC4F32]">
              The RK-Adoption Constitution
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#0B1626] mt-2 mb-4 font-normal">
              The Six Articles of Our Ethical Charter
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] font-light leading-relaxed">
              Every staff member, social worker, and board trustee takes an inviolable pledge to uphold these six articles in every case review.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Article Selector List */}
            <div className="lg:col-span-5 space-y-3">
              {articles.map((art) => {
                const isSelected = activeArticle === art.id;
                return (
                  <button
                    key={art.id}
                    onClick={() => setActiveArticle(art.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all ${
                      isSelected
                        ? 'bg-[#0B1626] text-white border-[#0B1626] shadow-md transform -translate-y-0.5'
                        : 'bg-white text-[#475569] border-[#E5DFD5] hover:bg-[#F4EFE6]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-semibold uppercase tracking-wider ${
                        isSelected ? 'text-[#C59A3F]' : 'text-[#BC4F32]'
                      }`}>
                        {art.badge}
                      </span>
                      <span className={`text-xs font-mono ${isSelected ? 'text-slate-300' : 'text-[#94A3B8]'}`}>
                        0{art.id}
                      </span>
                    </div>
                    <div className="text-sm font-semibold mt-1">
                      {art.title}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Article Detail Card */}
            <div className="lg:col-span-7">
              {(() => {
                const current = articles.find(a => a.id === activeArticle) || articles[0];
                return (
                  <div className="rk-luxury-card rounded-3xl p-8 sm:p-12 border border-[#E5DFD5] shadow-lg space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-[#FDF5F1] text-[#BC4F32] border border-[#BC4F32]/20 text-xs font-semibold">
                        {current.badge}
                      </span>
                      <span className="text-xs text-[#94A3B8] font-mono">
                        Ratified Article 0{current.id}
                      </span>
                    </div>

                    <h3 className="font-serif-display text-3xl sm:text-4xl text-[#0B1626]">
                      {current.title}
                    </h3>

                    <div className="p-4 rounded-xl bg-[#FAF9F6] border-l-4 border-[#BC4F32] text-sm text-[#0B1626] font-medium leading-relaxed italic">
                      "{current.summary}"
                    </div>

                    <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-light">
                      {current.details}
                    </p>

                    <div className="pt-6 border-t border-[#E5DFD5] flex items-center justify-between text-xs text-[#64748B]">
                      <span>Enforced by Independent Ethics Committee</span>
                      <a href="/about/accreditations" className="text-[#BC4F32] font-semibold hover:underline flex items-center gap-1">
                        <span>View Accreditations</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION BANNER ── */}
      <section className="py-20 bg-[#0B1626] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs uppercase font-semibold tracking-wider text-[#C59A3F]">
            Join Our Mission
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
            Ready to Begin a Journey Grounded in Truth and Empathy?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            Our caseworkers are available to discuss statutory prerequisites, home studies, and international adoption pathways with zero judgment.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a 
              href="/about/team"
              className="rk-btn-mission px-8 py-3.5 rounded-xl font-medium text-sm flex items-center gap-2"
            >
              <span>Meet The Caseworker Team</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="/contact"
              className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-medium text-sm flex items-center gap-2 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-[#C59A3F]" />
              <span>Request Confidential Consultation</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
