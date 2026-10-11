import { useState } from "react";
import { Users, ArrowRight, ShieldCheck, ChevronRight } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: "leadership" | "clinical" | "legal" | "international";
  credentials: string;
  experience: string;
  photoUrl: string;
  bio: string;
  specialty: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "aris-thorne",
    name: "Dr. Rupa Singh, Ph.D., LCSW",
    role: "Chief Executive & Clinical Director",
    department: "leadership",
    credentials:
      "Ph.D. in Clinical Child Psychology (Columbia), Licensed Clinical Social Worker",
    experience: "24+ Years Child Welfare & Foster System Reform",
    photoUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80",
    bio: "Former senior advisor to municipal family courts and UNICEF delegate. Dr. Thorne founded RK-Adoption’s trauma-informed matching protocol and continues to supervise multi-disciplinary case review panels.",
    specialty: "Trauma-Informed Attachment & Institutional Transition",
  },
  {
    id: "Priyanka-mansoor",
    name: "Adv. Priyanka Al-Mansoor, LL.M.",
    role: "Director of International Legal Affairs & Hague Compliance",
    department: "legal",
    credentials:
      "LL.M. in International Human Rights & Family Law (Leiden University)",
    experience: "18+ Years Intercountry Adoption Jurisprudence",
    photoUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80",
    bio: "Specialist in Hague Convention bilateral treaty execution and statutory child protection decrees across 40+ nations. Ensures every placement dossier holds unassailable judicial validity.",
    specialty:
      "Intercountry Treaties, Free-for-Adoption Decrees & Judicial Audits",
  },
  {
    id: "devendra-vance",
    name: "Dr. Anup Singh, MD, FAAP",
    role: "Chief Pediatric & Neurodevelopmental Advisor",
    department: "clinical",
    credentials: "MD (Johns Hopkins), Fellow of American Academy of Pediatrics",
    experience: "20+ Years Pediatric Development & Special Needs Care",
    photoUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80",
    bio: "Conducts independent medical dossier evaluations for prospective parents. Guides families on managing neurodivergence, sensory processing transitions, and individualized developmental therapies.",
    specialty: "Developmental Pediatrics, Sensory Integration & Medical Review",
  },
  {
    id: "marcus-holloway",
    name: "Ranjeet Singh, MSW",
    role: "Head of Prospective Parent Preparation & Home Studies",
    department: "clinical",
    credentials:
      "Master of Social Work (University of Chicago), Certified TBRI Practitioner",
    experience: "15+ Years Home Study Supervision & Family Education",
    photoUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80",
    bio: "Leads our team of licensed in-home assessors. Marcus reframes the home study from an intimidating test into an empowering therapeutic incubation for hopeful mothers and fathers.",
    specialty: "Home Study Education, TBRI Co-Regulation & Parental Readiness",
  },
  {
    id: "elena-rostova",
    name: "Rupa Singh, LCSW",
    role: "Director of Post-Placement Care & Sibling Preservation",
    department: "clinical",
    credentials: "LCSW, Certified Family Systems & Grief Therapist",
    experience: "16+ Years Family Therapy & Adolescent Identity Counseling",
    photoUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=80",
    bio: "Oversees post-adoption preservation circles and crisis helplines. Passionate advocate for keeping biological siblings unified in adoptive homes to protect lifelong emotional bonds.",
    specialty:
      "Sibling Group Bonding, Grief Counseling & Post-Placement Coaching",
  },
  {
    id: "priya-nair",
    name: "Priyanka Singh, MA",
    role: "Director of Global Operations & Heritage Preservation",
    department: "international",
    credentials:
      "MA in Cross-Cultural Communications & International Relations",
    experience:
      "14+ Years Cross-Border Adoption Liaison & Consular Coordination",
    photoUrl:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=700&q=80",
    bio: "Coordinates bilateral workflows with Central Adoption Authorities across Asia, Europe, and Latin America. Champions heritage continuity programs so adopted children celebrate their cultural roots.",
    specialty:
      "Consular Coordination, Mother-Tongue Retention & Heritage Portfolios",
  },
  {
    id: "david-chen",
    name: "Anup Singh, JD",
    role: "Senior Regulatory Counsel & Compliance Auditor",
    department: "legal",
    credentials:
      "Juris Doctor (Georgetown Law), Certified Privacy Information Professional",
    experience: "12+ Years Regulatory Auditing & Child Privacy Law",
    photoUrl:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=700&q=80",
    bio: "Maintains our zero-tolerance anti-trafficking compliance framework and oversees digital document vaults ensuring biometric and medical dossiers of minors are guarded by strict encryption.",
    specialty:
      "Child Privacy Safeguards, Anti-Trafficking Audits & Ethics Compliance",
  },
  {
    id: "rachel-adams",
    name: "Ranjeet Singh, MSW",
    role: "Senior Caseworker & Single Parent Support Lead",
    department: "clinical",
    credentials:
      "MSW (Boston University), Certified Adoption Competent Therapist",
    experience: "11+ Years Prospective Parent Casework & Support Groups",
    photoUrl:
      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=700&q=80",
    bio: "Directs our dedicated single adoptive parent networks and pre-placement coffee circles. Known for her empathetic, steady guidance through the emotional peaks and valleys of adoption waitlists.",
    specialty:
      "Single Parent Advocacy, Emotional Waitlist Resilience & Casework",
  },
];

export default function OurTeam() {
  const [activeDept, setActiveDept] = useState<
    "all" | "leadership" | "clinical" | "legal" | "international"
  >("all");

  const filteredMembers =
    activeDept === "all"
      ? TEAM_MEMBERS
      : TEAM_MEMBERS.filter((m) => m.department === activeDept);

  return (
    <div className="rk-team-container font-sans text-[#1E293B] antialiased bg-[#FAF9F6]">
      <style>{`
        .rk-team-container {
          --rk-navy: #0B1626;
          --rk-rosewood: #BC4F32;
          --rk-rosewood-hover: #A54127;
          --rk-rosewood-tint: #FDF5F1;
          --rk-gilt: #C59A3F;
          --rk-aegean: #185265;
          --rk-aegean-tint: #EBF4F7;
          --rk-silk-border: #E5DFD5;
          --rk-canvas: #FAF9F6;
        }

        .font-serif-display {
          font-family: 'Cormorant Garamond', Georgia, serif;
          letter-spacing: -0.015em;
        }

        .rk-team-card {
          background: #ffffff;
          border: 1px solid var(--rk-silk-border);
          box-shadow: 0 4px 20px -2px rgba(11, 22, 38, 0.04);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .rk-team-card:hover {
          box-shadow: 0 14px 36px -4px rgba(11, 22, 38, 0.09);
          border-color: #D3CAC0;
          transform: translateY(-2px);
        }

        .rk-btn-team {
          background-color: var(--rk-rosewood);
          color: #ffffff;
          box-shadow: 0 4px 14px 0 rgba(188, 79, 50, 0.28);
          transition: all 0.25s ease;
        }

        .rk-btn-team:hover {
          background-color: var(--rk-rosewood-hover);
          transform: translateY(-1px);
        }
      `}</style>

      {/* ── BREADCRUMB STRIP ── */}
      <div className="bg-[#F4EFE6] border-b border-[#E5DFD5] py-3.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#64748B]">
          <a href="/" className="hover:text-[#0B1626] transition-colors">
            Home
          </a>
          <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8]" />
          <a href="/about" className="hover:text-[#0B1626] transition-colors">
            About Us
          </a>
          <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8]" />
          <span className="text-[#BC4F32] font-semibold">Our Team</span>
        </div>
      </div>

      {/* ── HERO SECTION ── */}
      <section className="relative pt-16 pb-20 bg-gradient-to-b from-[#F4EFE6] via-[#FAF9F6] to-[#FAF9F6] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDF5F1] border border-[#BC4F32]/25 text-xs font-semibold text-[#BC4F32] mx-auto">
            <Users className="w-3.5 h-3.5" />
            <span>Multidisciplinary Clinical & Legal Guardianship</span>
          </div>

          <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#0B1626] font-normal leading-[1.14] max-w-4xl mx-auto">
            World-Class Clinicians, Jurists & Caseworkers Dedicated to Your
            Family
          </h1>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-light max-w-3xl mx-auto">
            Behind every successful placement is an independent,
            multidisciplinary committee of licensed social workers,
            pediatricians, child rights attorneys, and trauma-informed
            therapists working in strict service of the child's best interests.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 max-w-3xl mx-auto border-t border-[#E5DFD5]">
            <div>
              <div className="text-2xl font-semibold text-[#0B1626]">85+</div>
              <div className="text-xs text-[#64748B]">
                Licensed Social Workers
              </div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-[#0B1626]">100%</div>
              <div className="text-xs text-[#64748B]">
                Trauma-Informed Certified
              </div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-[#0B1626]">
                18+ Yrs
              </div>
              <div className="text-xs text-[#64748B]">
                Avg Clinical Experience
              </div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-[#0B1626]">40+</div>
              <div className="text-xs text-[#64748B]">
                Countries Represented
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DEPARTMENT FILTER TABS ── */}
      <section className="py-8 bg-white border-b border-[#E5DFD5] sticky top-0 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 flex justify-center flex-wrap gap-2">
          <button
            onClick={() => setActiveDept("all")}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              activeDept === "all"
                ? "bg-[#0B1626] text-white shadow-sm font-semibold"
                : "bg-[#F4EFE6] text-[#64748B] hover:text-[#0B1626] border border-[#E5DFD5]"
            }`}
          >
            All Specialists ({TEAM_MEMBERS.length})
          </button>
          <button
            onClick={() => setActiveDept("leadership")}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              activeDept === "leadership"
                ? "bg-[#0B1626] text-white shadow-sm font-semibold"
                : "bg-[#F4EFE6] text-[#64748B] hover:text-[#0B1626] border border-[#E5DFD5]"
            }`}
          >
            Executive Leadership
          </button>
          <button
            onClick={() => setActiveDept("clinical")}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              activeDept === "clinical"
                ? "bg-[#0B1626] text-white shadow-sm font-semibold"
                : "bg-[#F4EFE6] text-[#64748B] hover:text-[#0B1626] border border-[#E5DFD5]"
            }`}
          >
            Clinical & Social Work
          </button>
          <button
            onClick={() => setActiveDept("legal")}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              activeDept === "legal"
                ? "bg-[#0B1626] text-white shadow-sm font-semibold"
                : "bg-[#F4EFE6] text-[#64748B] hover:text-[#0B1626] border border-[#E5DFD5]"
            }`}
          >
            Legal & Statutory Counsel
          </button>
          <button
            onClick={() => setActiveDept("international")}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              activeDept === "international"
                ? "bg-[#0B1626] text-white shadow-sm font-semibold"
                : "bg-[#F4EFE6] text-[#64748B] hover:text-[#0B1626] border border-[#E5DFD5]"
            }`}
          >
            International Operations
          </button>
        </div>
      </section>

      {/* ── TEAM GRID ── */}
      <section className="py-20 bg-[#FAF9F6] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="rk-team-card rounded-2xl overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Member Photo */}
                  <div className="relative h-64 overflow-hidden bg-[#E9E4DC]">
                    <img
                      src={member.photoUrl}
                      alt={member.name}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-md bg-[#0B1626]/80 backdrop-blur-md text-white text-[10px] font-semibold tracking-wide uppercase">
                        {member.department}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-6 space-y-3">
                    <div>
                      <h3 className="font-serif-display text-xl text-[#0B1626] font-semibold leading-snug">
                        {member.name}
                      </h3>
                      <div className="text-xs text-[#BC4F32] font-medium mt-0.5">
                        {member.role}
                      </div>
                    </div>

                    <div className="text-[11px] text-[#64748B] space-y-1 pt-1 border-t border-[#E5DFD5]">
                      <div className="font-medium text-[#0B1626]">
                        {member.experience}
                      </div>
                      <div className="line-clamp-2 italic">
                        {member.credentials}
                      </div>
                    </div>

                    <p className="text-xs text-[#475569] leading-relaxed font-light pt-2 line-clamp-3">
                      {member.bio}
                    </p>
                  </div>
                </div>

                {/* Footer of Card */}
                <div className="p-6 pt-0">
                  <div className="p-2.5 rounded-xl bg-[#F4EFE6] border border-[#E5DFD5] text-[11px] text-[#0B1626]">
                    <span className="font-semibold text-[#185265]">
                      Specialty:{" "}
                    </span>
                    <span>{member.specialty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE INDEPENDENT MATCH REVIEW COMMITTEE ── */}
      <section className="py-20 bg-white border-b border-[#E5DFD5]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0B1626] text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 text-[#C59A3F] text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>The Independent Match Review Committee</span>
              </div>

              <h2 className="font-serif-display text-3xl sm:text-4xl text-white font-normal leading-tight">
                How Our Committee Guarantees Objectivity & Ethical Purity
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                To eliminate any possible conflict of interest, RK-Adoption
                matching decisions are never made by individual caseworkers
                alone. Every prospective placement is presented to an
                independent, rotating panel consisting of:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xs font-semibold text-white mb-1">
                    1. Independent Pediatrician
                  </div>
                  <p className="text-[11px] text-slate-300">
                    Audits complete neurodevelopmental records and specialized
                    healthcare compatibility.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xs font-semibold text-white mb-1">
                    2. Senior Family Law Advocate
                  </div>
                  <p className="text-[11px] text-slate-300">
                    Certifies all birth parent consents and judicial relinquish
                    records are authentic and uncompromised.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xs font-semibold text-white mb-1">
                    3. Licensed Clinical Psychologist
                  </div>
                  <p className="text-[11px] text-slate-300">
                    Evaluates family emotional stability and capacity for trauma
                    co-regulation.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xs font-semibold text-white mb-1">
                    4. Adult Adoptee Ombudsman
                  </div>
                  <p className="text-[11px] text-slate-300">
                    Provides lived-experience perspective centering the child’s
                    voice and cultural identity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="py-16 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B1626]">
            Meet with an Intake Counselor for a Confidential Orientation
          </h2>
          <p className="text-sm text-[#64748B] font-light max-w-xl mx-auto">
            Our caseworkers are here to guide you with warmth, answering every
            question regarding timelines, documentation, and family readiness.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <a
              href="/about/accreditations"
              className="px-6 py-3 rounded-xl bg-white border border-[#E5DFD5] text-[#0B1626] hover:bg-[#F2ECE1] text-xs font-medium transition-colors"
            >
              Review Accreditations
            </a>
            <a
              href="/contact"
              className="rk-btn-team px-7 py-3 rounded-xl text-xs font-medium flex items-center gap-2"
            >
              <span>Schedule Initial Meeting</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
