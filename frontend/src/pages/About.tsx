import { useState } from 'react';
import {
    Heart,
    Scale,
    Users,
    Award,
    Globe,
    ArrowRight,
    Compass,
    CheckCircle2,
    ChevronRight,
    HeartHandshake
} from 'lucide-react';

interface Milestone {
    year: string;
    title: string;
    description: string;
    impactBadge: string;
}

const MILESTONES: Milestone[] = [
    {
        year: '2011',
        title: 'The Founding Initiative',
        description: 'Established by a coalition of pediatric social workers and family court advocates to replace opaque adoption bureaucracy with transparent, child-centric guardianship.',
        impactBadge: 'Foundational Charter'
    },
    {
        year: '2015',
        title: 'Hague Convention Accreditation',
        description: 'Secured full intercountry accreditation under the Hague Convention, standardizing trauma-informed assessments across our first 12 international territories.',
        impactBadge: 'Global Accreditation'
    },
    {
        year: '2019',
        title: 'Digital Dossier Encryption Launch',
        description: 'Pioneered zero-knowledge encrypted vaults for adoption paperwork and minor medical dossiers, eliminating physical dossier vulnerabilities.',
        impactBadge: 'ISO Data Security'
    },
    {
        year: '2022',
        title: 'Sibling Group Preservation Initiative',
        description: 'Launched dedicated parent stipends and specialized counseling cohorts ensuring over 92% of matched biological sibling groups remain united under one roof.',
        impactBadge: 'Sibling Protection'
    },
    {
        year: 'Present',
        title: '12,400+ Children Placed Across 40+ Nations',
        description: 'Operating as a globally recognized standard of child welfare integrity with an unprecedented 99.4% lifelong placement stability rate.',
        impactBadge: 'World-Class Impact'
    }
];

export default function About() {
    const [activeMilestoneIndex, setActiveMilestoneIndex] = useState<number>(0);
    const currentMilestone = MILESTONES[activeMilestoneIndex];

    return (
        <div className="rk-about-master-container font-sans text-[#1E293B] antialiased bg-[#FAF9F6]">
            <style>{`
        .rk-about-master-container {
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

        .rk-luxury-card {
          background: #ffffff;
          border: 1px solid var(--rk-silk-border);
          box-shadow: 0 4px 20px -2px rgba(11, 22, 38, 0.04);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .rk-luxury-card:hover {
          box-shadow: 0 14px 36px -4px rgba(11, 22, 38, 0.09);
          border-color: #D3CAC0;
        }

        .rk-gateway-card {
          background: linear-gradient(145deg, #ffffff 0%, #FAF8F5 100%);
          border: 1px solid var(--rk-silk-border);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .rk-gateway-card:hover {
          transform: translateY(-4px);
          border-color: #BC4F32;
          box-shadow: 0 16px 40px -6px rgba(188, 79, 50, 0.12);
        }

        .rk-btn-primary {
          background-color: var(--rk-rosewood);
          color: #ffffff;
          box-shadow: 0 4px 14px 0 rgba(188, 79, 50, 0.28);
          transition: all 0.25s ease;
        }

        .rk-btn-primary:hover {
          background-color: var(--rk-rosewood-hover);
          transform: translateY(-1px);
          box-shadow: 0 6px 20px 0 rgba(188, 79, 50, 0.38);
        }
      `}</style>

            {/* ── BREADCRUMB STRIP ── */}
            <div className="bg-[#F4EFE6] border-b border-[#E5DFD5] py-3.5 px-6">
                <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#64748B]">
                    <a href="/" className="hover:text-[#0B1626] transition-colors">Home</a>
                    <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8]" />
                    <span className="text-[#BC4F32] font-semibold">About RK-Adoption</span>
                </div>
            </div>

            {/* ── SECTION 1: HERO SECTION ── */}
            <section className="relative pt-16 pb-24 bg-gradient-to-b from-[#F4EFE6] via-[#FAF9F6] to-[#FAF9F6] border-b border-[#E5DFD5]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                        {/* Left Narrative */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDF5F1] border border-[#BC4F32]/25 text-xs font-semibold text-[#BC4F32]">
                                <Heart className="w-3.5 h-3.5 fill-[#BC4F32]" />
                                <span>The Story, Heart & Governance of RK-Adoption</span>
                            </div>

                            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#0B1626] font-normal leading-[1.12]">
                                Championing the Sacred Right of Every Child to a{' '}
                                <span className="italic text-[#BC4F32] underline decoration-[#BC4F32]/30 underline-offset-8">
                                    Forever Family
                                </span>
                            </h1>

                            <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-light max-w-2xl">
                                Founded on unconditional child dignity, legal integrity, and trauma-informed social care, RK-Adoption stands as one of the world's most trusted adoption guidance institutions. We bridge the gap between children awaiting permanent homes and loving, prepared families across 40+ countries.
                            </p>

                            <div className="flex flex-wrap items-center gap-4 pt-2">
                                <a
                                    href="#gateways"
                                    className="rk-btn-primary px-7 py-3.5 rounded-xl font-medium text-sm flex items-center gap-2"
                                >
                                    <span>Explore About Sections</span>
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                                <a
                                    href="/about/mission"
                                    className="px-6 py-3.5 rounded-xl bg-white border border-[#E5DFD5] text-[#0B1626] hover:bg-[#F2ECE1] font-medium text-sm flex items-center gap-2 transition-colors"
                                >
                                    <Compass className="w-4 h-4 text-[#185265]" />
                                    <span>Our Mission & Charter</span>
                                </a>
                            </div>

                            {/* Verified Metrics Strip */}
                            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#E5DFD5] max-w-xl">
                                <div>
                                    <div className="text-2xl font-semibold text-[#0B1626]">12,400+</div>
                                    <div className="text-xs text-[#64748B]">Children Home</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-semibold text-[#0B1626]">40+</div>
                                    <div className="text-xs text-[#64748B]">Sovereign Nations</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-semibold text-[#0B1626]">99.4%</div>
                                    <div className="text-xs text-[#64748B]">Placement Stability</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Visual Frame */}
                        <div className="lg:col-span-5">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#EAE4D9]">
                                <img
                                    src="https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1000&q=80"
                                    alt="A happy, loving diverse adoptive family hugging outdoors"
                                    className="w-full h-[470px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1626]/85 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6 text-white p-5 rounded-2xl bg-[#0B1626]/75 backdrop-blur-md border border-white/10">
                                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C59A3F] block mb-1">
                                        Institutional Standard
                                    </span>
                                    <p className="text-xs font-light text-slate-200 leading-relaxed">
                                        "Adoption is not about benevolence; it is about providing the enduring, legally inviolable sanctuary that every child requires to flourish."
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── SECTION 2: THE 4 DEEP-DIVE ABOUT GATEWAYS (DROPDOWN PAGES) ── */}
            <section id="gateways" className="py-24 bg-white border-b border-[#E5DFD5]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-xs uppercase font-semibold tracking-wider text-[#BC4F32]">
                            Explore Our Institution
                        </span>
                        <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#0B1626] mt-2 mb-4 font-normal">
                            The Four Pillars of RK-Adoption
                        </h2>
                        <p className="text-sm sm:text-base text-[#64748B] font-light leading-relaxed">
                            Discover the clinical rigor, global partnerships, legal accreditations, and compassionate team powering our international child welfare platform:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Gateway 1: Our Mission */}
                        <a
                            href="/about/mission"
                            className="rk-gateway-card rounded-2xl p-7 flex flex-col justify-between group text-left"
                        >
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-[#FDF5F1] text-[#BC4F32] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Heart className="w-6 h-6 fill-[#BC4F32]" />
                                </div>
                                <div className="text-[10px] font-semibold uppercase tracking-wider text-[#BC4F32] mb-1">
                                    Ethical Charter
                                </div>
                                <h3 className="font-serif-display text-2xl text-[#0B1626] mb-2 group-hover:text-[#BC4F32] transition-colors">
                                    Our Mission
                                </h3>
                                <p className="text-xs text-[#64748B] leading-relaxed">
                                    The six articles of our ethical constitution, our theory of change, and our uncompromising child-first philosophy.
                                </p>
                            </div>
                            <div className="pt-6 mt-6 border-t border-[#E5DFD5] flex items-center justify-between text-xs font-semibold text-[#BC4F32]">
                                <span>Explore The Charter</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </a>

                        {/* Gateway 2: Our Team */}
                        <a
                            href="/about/team"
                            className="rk-gateway-card rounded-2xl p-7 flex flex-col justify-between group text-left"
                        >
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-[#EBF4F7] text-[#185265] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Users className="w-6 h-6" />
                                </div>
                                <div className="text-[10px] font-semibold uppercase tracking-wider text-[#185265] mb-1">
                                    Clinical & Legal Faculty
                                </div>
                                <h3 className="font-serif-display text-2xl text-[#0B1626] mb-2 group-hover:text-[#185265] transition-colors">
                                    Our Team
                                </h3>
                                <p className="text-xs text-[#64748B] leading-relaxed">
                                    Meet the licensed social workers, developmental pediatricians, child rights attorneys, and case counselors guiding your family.
                                </p>
                            </div>
                            <div className="pt-6 mt-6 border-t border-[#E5DFD5] flex items-center justify-between text-xs font-semibold text-[#185265]">
                                <span>Meet Our Faculty</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </a>

                        {/* Gateway 3: Accreditations */}
                        <a
                            href="/about/accreditations"
                            className="rk-gateway-card rounded-2xl p-7 flex flex-col justify-between group text-left"
                        >
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-[#FAF4E5] text-[#C59A3F] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Award className="w-6 h-6" />
                                </div>
                                <div className="text-[10px] font-semibold uppercase tracking-wider text-[#C59A3F] mb-1">
                                    Statutory Oversight
                                </div>
                                <h3 className="font-serif-display text-2xl text-[#0B1626] mb-2 group-hover:text-[#C59A3F] transition-colors">
                                    Accreditations
                                </h3>
                                <p className="text-xs text-[#64748B] leading-relaxed">
                                    Hague Convention certification, state adoption licenses, ISO 27001 data encryption standards, and independent fiscal audits.
                                </p>
                            </div>
                            <div className="pt-6 mt-6 border-t border-[#E5DFD5] flex items-center justify-between text-xs font-semibold text-[#C59A3F]">
                                <span>View Verified Licenses</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </a>

                        {/* Gateway 4: Global Reach */}
                        <a
                            href="/about/global"
                            className="rk-gateway-card rounded-2xl p-7 flex flex-col justify-between group text-left"
                        >
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-[#F4EFE6] text-[#0B1626] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <div className="text-[10px] font-semibold uppercase tracking-wider text-[#0B1626] mb-1">
                                    International Presence
                                </div>
                                <h3 className="font-serif-display text-2xl text-[#0B1626] mb-2 group-hover:text-[#BC4F32] transition-colors">
                                    Global Reach
                                </h3>
                                <p className="text-xs text-[#64748B] leading-relaxed">
                                    Coordinating ethical domestic and intercountry adoptions across 40+ nations, with 18 regional consular hubs and heritage preservation programs.
                                </p>
                            </div>
                            <div className="pt-6 mt-6 border-t border-[#E5DFD5] flex items-center justify-between text-xs font-semibold text-[#0B1626]">
                                <span>Explore 40+ Nations</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* ── SECTION 3: INTERACTIVE 14-YEAR MILESTONE TIMELINE ── */}
            <section className="py-24 bg-[#FAF9F6] border-b border-[#E5DFD5]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-xs uppercase font-semibold tracking-wider text-[#185265]">
                            Historical Arc & Impact
                        </span>
                        <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#0B1626] mt-2 mb-4 font-normal">
                            14 Years of Principled Child Welfare Innovation
                        </h2>
                        <p className="text-sm sm:text-base text-[#64748B] font-light leading-relaxed">
                            From our modest origins in 2011 to becoming an international adoption benchmark, explore how RK-Adoption has advanced child protection standards.
                        </p>
                    </div>

                    {/* Interactive Year Selector */}
                    <div className="flex justify-center gap-2 sm:gap-3 mb-10 flex-wrap">
                        {MILESTONES.map((m, idx) => (
                            <button
                                key={m.year}
                                onClick={() => setActiveMilestoneIndex(idx)}
                                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${activeMilestoneIndex === idx
                                    ? 'bg-[#0B1626] text-white shadow-md'
                                    : 'bg-white text-[#64748B] border border-[#E5DFD5] hover:bg-[#F2ECE1]'
                                    }`}
                            >
                                {m.year}
                            </button>
                        ))}
                    </div>

                    {/* Spotlight Card */}
                    <div className="max-w-4xl mx-auto rk-luxury-card rounded-3xl p-8 sm:p-12 border border-[#E5DFD5] shadow-lg">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5DFD5] pb-6">
                            <div>
                                <span className="px-3 py-1 rounded-full bg-[#FAF4E5] text-[#C59A3F] border border-[#C59A3F]/20 text-xs font-semibold">
                                    {currentMilestone.impactBadge}
                                </span>
                                <h3 className="font-serif-display text-3xl sm:text-4xl text-[#0B1626] mt-2">
                                    {currentMilestone.title}
                                </h3>
                            </div>
                            <div className="text-3xl font-serif-display font-bold text-[#BC4F32]">
                                {currentMilestone.year}
                            </div>
                        </div>

                        <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-light pt-6">
                            {currentMilestone.description}
                        </p>

                        <div className="pt-6 border-t border-[#E5DFD5] flex items-center justify-between text-xs text-[#64748B]">
                            <span>Milestone {activeMilestoneIndex + 1} of {MILESTONES.length}</span>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setActiveMilestoneIndex(prev => (prev > 0 ? prev - 1 : MILESTONES.length - 1))}
                                    className="px-3 py-1.5 rounded-lg bg-[#FAF9F6] border border-[#E5DFD5] text-[#0B1626] hover:bg-[#F4EFE6]"
                                >
                                    Previous
                                </button>
                                <button
                                    onClick={() => setActiveMilestoneIndex(prev => (prev < MILESTONES.length - 1 ? prev + 1 : 0))}
                                    className="px-3 py-1.5 rounded-lg bg-[#BC4F32] text-white hover:bg-[#A54127]"
                                >
                                    Next Era
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 4: THE 4 INSTITUTIONAL TENETS ── */}
            <section className="py-24 bg-white border-b border-[#E5DFD5]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                        <div className="lg:col-span-6 space-y-6">
                            <span className="text-xs uppercase font-semibold tracking-wider text-[#BC4F32]">
                                Foundational Tenets
                            </span>
                            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#0B1626] font-normal leading-tight">
                                How We Safeguard Children and Guide Families
                            </h2>
                            <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-light">
                                Our approach differs fundamentally from commercial brokerages. We treat adoption as an enduring legal and emotional guardianship grounded in four non-negotiable principles.
                            </p>

                            <div className="space-y-4 pt-2">
                                <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E5DFD5] flex items-start gap-3.5">
                                    <div className="w-8 h-8 rounded-lg bg-[#FDF5F1] text-[#BC4F32] flex items-center justify-center shrink-0 mt-0.5">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-[#0B1626]">Children Are Not Commodities</h3>
                                        <p className="text-xs text-[#64748B] mt-0.5 leading-relaxed">
                                            Zero public photo galleries, online shopping carts, or bidding fees. Each match is conducted through an independent multidisciplinary board.
                                        </p>
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E5DFD5] flex items-start gap-3.5">
                                    <div className="w-8 h-8 rounded-lg bg-[#EBF4F7] text-[#185265] flex items-center justify-center shrink-0 mt-0.5">
                                        <Scale className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-[#0B1626]">Ironclad Judicial Transparency</h3>
                                        <p className="text-xs text-[#64748B] mt-0.5 leading-relaxed">
                                            Every relinquishment and free-for-adoption certification is verified by licensed family court attorneys before prospective parents are invited to match.
                                        </p>
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E5DFD5] flex items-start gap-3.5">
                                    <div className="w-8 h-8 rounded-lg bg-[#FAF4E5] text-[#C59A3F] flex items-center justify-center shrink-0 mt-0.5">
                                        <HeartHandshake className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-[#0B1626]">Permanent Post-Placement Stewardship</h3>
                                        <p className="text-xs text-[#64748B] mt-0.5 leading-relaxed">
                                            Our clinical involvement expands as the child matures, supporting families with adolescent identity coaching, therapy circles, and heritage reunions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-6">
                            <div className="p-8 sm:p-12 rounded-3xl bg-[#0B1626] text-white shadow-xl space-y-6">
                                <span className="text-xs uppercase font-semibold tracking-wider text-[#C59A3F]">
                                    The Board of Trustees Declaration
                                </span>
                                <blockquote className="font-serif-display text-2xl sm:text-3xl text-white font-normal leading-snug italic">
                                    "Adoption succeeds not through administrative swiftness, but through clinical depth, patience, and unyielding fidelity to truth."
                                </blockquote>
                                <div className="pt-4 border-t border-white/10 text-xs text-slate-300 space-y-1">
                                    <strong className="text-white block text-sm">RK-Adoption International Governance Board</strong>
                                    <span>Composed of certified social workers, pediatricians, human rights jurists, and adult adoptees</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── SECTION 5: FINAL INVITATION CTA ── */}
            <section className="py-20 bg-[#0B1626] text-white">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
                    <span className="text-xs uppercase font-semibold tracking-wider text-[#C59A3F]">
                        Take the First Step
                    </span>
                    <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
                        Begin an Honest Conversation with Our Family Advisors
                    </h2>
                    <p className="text-sm sm:text-base text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
                        Whether you are exploring eligibility, preparing for your home study, or curious about international pathways—our caseworkers are honored to walk beside you.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 pt-4">
                        <a
                            href="/contact"
                            className="rk-btn-primary px-8 py-4 rounded-xl text-sm font-semibold flex items-center gap-2"
                        >
                            <span>Schedule Free Confidential Orientation</span>
                            <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                            href="/about/team"
                            className="px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 text-sm font-medium transition-colors"
                        >
                            <span>Meet Our Social Workers</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
