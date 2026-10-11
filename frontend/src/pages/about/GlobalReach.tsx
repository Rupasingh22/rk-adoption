import { useState } from 'react';
import {
  Globe,
  ShieldCheck,
  Compass,
  ArrowRight,
  ChevronRight,
  Plane,
  Sparkles
} from 'lucide-react';

interface RegionData {
  id: string;
  name: string;
  countriesCount: string;
  hubsCount: string;
  highlights: string[];
  keyPartners: string;
  culturalProgram: string;
  featuredCountries: string[];
}

const REGIONS: RegionData[] = [
  {
    id: 'overview',
    name: 'Global Summary',
    countriesCount: '40+ Nations',
    hubsCount: '18 Regional Centers',
    highlights: [
      'Universal alignment with 1993 Hague Convention intercountry child safeguards',
      'Over 12,000 successful placements coordinated across international borders',
      'Dedicated consular liaison officers in all primary partner territories',
      'Zero-tolerance anti-trafficking protocols and accredited bilateral audits'
    ],
    keyPartners: 'Central Adoption Authorities, Accredited Child Welfare Ministries, Hague Diplomatic Missions',
    culturalProgram: 'Universal Cultural Heritage Dossier prepared for every child placed across national borders.',
    featuredCountries: ['United States', 'United Kingdom', 'Canada', 'India', 'Colombia', 'Philippines', 'Brazil', 'Germany', 'Australia']
  },
  {
    id: 'americas',
    name: 'The Americas',
    countriesCount: '14 Nations',
    hubsCount: '6 Regional Hubs',
    highlights: [
      'Comprehensive domestic and intercountry adoption coordination in North & South America',
      'Bilateral partnerships with ICBF (Colombia), state child protection departments (USA & Canada)',
      'Bilingual (English/Spanish/Portuguese) family counseling and home study preparation',
      'Specialized sibling group placement agreements with certified Latin American authorities'
    ],
    keyPartners: 'Inter-American Children\'s Institute (IIN), State Family Courts, Central Authority of Canada',
    culturalProgram: 'Latino Heritage & Roots circles, Spanish language immersion toolkits, and dual-citizenship assistance.',
    featuredCountries: ['United States', 'Canada', 'Colombia', 'Brazil', 'Costa Rica', 'Chile', 'Mexico']
  },
  {
    id: 'europe',
    name: 'Europe & UK',
    countriesCount: '12 Nations',
    hubsCount: '5 Regional Hubs',
    highlights: [
      'Strict adherence to European Union child protection guidelines and UK Adoption & Children Act',
      'Direct coordination with Central Authorities in Germany, UK, Netherlands, and Nordic countries',
      'Rigorous background certifications and cross-border police clearance synchronization',
      'Annual European post-placement family conferences in London, Berlin, and Amsterdam'
    ],
    keyPartners: 'European Central Adoption Authorities, British Association for Adoption & Fostering (BAAF)',
    culturalProgram: 'Pan-European identity workshops, multicultural heritage mentoring, and annual adoptee youth camps.',
    featuredCountries: ['United Kingdom', 'Germany', 'Netherlands', 'Sweden', 'Norway', 'France', 'Ireland']
  },
  {
    id: 'asia',
    name: 'Asia-Pacific',
    countriesCount: '10 Nations',
    hubsCount: '4 Regional Hubs',
    highlights: [
      'Full compliance with CARA (Central Adoption Resource Authority - India) and partner state bodies',
      'Bilateral coordination with accredited social welfare departments in the Philippines and South Korea',
      'Comprehensive heritage and mother-tongue preservation programs for international placements',
      'On-the-ground social worker support for adoptive parents during mandatory transition visits'
    ],
    keyPartners: 'CARA India, Department of Social Welfare & Development (DSWD Philippines), Family Courts',
    culturalProgram: 'Cultural mentorship pairs with adult Asian adoptees, regional culinary and festive education packs.',
    featuredCountries: ['India', 'Philippines', 'South Korea', 'Australia', 'Japan', 'Vietnam', 'Thailand']
  },
  {
    id: 'africa',
    name: 'Africa & Middle East',
    countriesCount: '6 Nations',
    hubsCount: '3 Regional Hubs',
    highlights: [
      'Priority emphasis on domestic kinship foster care before intercountry consideration',
      'Direct collaboration with National Child Protection Ministries and accredited orphanage transitions',
      'Medical emergency support, nutritional stabilization, and developmental rehabilitation grants',
      'Transparent, verified relinquishment audits under independent legal oversight'
    ],
    keyPartners: 'National Child Welfare Directorates, Local NGO Child Advocacy Coalitions',
    culturalProgram: 'African Diaspora heritage archives, cultural heritage mentorship circles, and traditional naming ceremonies.',
    featuredCountries: ['South Africa', 'Kenya', 'Ghana', 'Jordan', 'Morocco', 'Namibia']
  }
];

export default function GlobalReach() {
  const [activeRegionId, setActiveRegionId] = useState<string>('overview');
  const activeRegion = REGIONS.find(r => r.id === activeRegionId) || REGIONS[0];

  return (
    <div className="rk-global-container font-sans text-[#1E293B] antialiased bg-[#FAF9F6]">
      <style>{`
        .rk-global-container {
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

        .rk-global-card {
          background: #ffffff;
          border: 1px solid var(--rk-silk-border);
          box-shadow: 0 4px 20px -2px rgba(11, 22, 38, 0.04);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .rk-global-card:hover {
          box-shadow: 0 12px 32px -4px rgba(11, 22, 38, 0.08);
          border-color: #D3CAC0;
        }

        .rk-btn-global {
          background-color: var(--rk-rosewood);
          color: #ffffff;
          box-shadow: 0 4px 14px 0 rgba(188, 79, 50, 0.28);
          transition: all 0.25s ease;
        }

        .rk-btn-global:hover {
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
          <span className="text-[#BC4F32] font-semibold">Global Reach</span>
        </div>
      </div>

      {/* ── HERO SECTION ── */}
      <section className="relative pt-16 pb-20 bg-gradient-to-b from-[#F4EFE6] via-[#FAF9F6] to-[#FAF9F6] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF4F7] border border-[#185265]/30 text-xs font-semibold text-[#185265] mx-auto">
            <Globe className="w-3.5 h-3.5" />
            <span>International Diplomatic & Social Network</span>
          </div>

          <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#0B1626] font-normal leading-[1.14] max-w-4xl mx-auto">
            Bridging Continents to Bring Children Home to Loving Families
          </h1>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-light max-w-3xl mx-auto">
            Operating across 40+ countries under unified Hague Convention child protection principles. We connect prospective parents with central authorities through compassionate, transparent, and legally inviolable cross-border pathways.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 max-w-3xl mx-auto border-t border-[#E5DFD5]">
            <div>
              <div className="text-2xl font-semibold text-[#0B1626]">40+</div>
              <div className="text-xs text-[#64748B]">Sovereign Nations</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-[#0B1626]">18</div>
              <div className="text-xs text-[#64748B]">Regional Liaison Hubs</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-[#0B1626]">12,000+</div>
              <div className="text-xs text-[#64748B]">Children Placed Globally</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-[#0B1626]">100%</div>
              <div className="text-xs text-[#64748B]">Hague Convention Aligned</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REGIONAL EXPLORER SECTION ── */}
      <section className="py-20 bg-white border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#BC4F32]">
              Interactive Network Map
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B1626] mt-2 mb-4 font-normal">
              Regional Operations & Consular Oversight
            </h2>
            <p className="text-sm text-[#64748B] font-light leading-relaxed">
              Select a territory below to review operating standards, local partner authorities, and specialized cultural heritage programs:
            </p>
          </div>

          {/* Region Tabs */}
          <div className="flex justify-center flex-wrap gap-2 mb-10 max-w-4xl mx-auto">
            {REGIONS.map((reg) => (
              <button
                key={reg.id}
                onClick={() => setActiveRegionId(reg.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-medium transition-all ${
                  activeRegionId === reg.id
                    ? 'bg-[#0B1626] text-white shadow-sm font-semibold'
                    : 'bg-[#F4EFE6] text-[#64748B] hover:text-[#0B1626] border border-[#E5DFD5]'
                }`}
              >
                {reg.name}
              </button>
            ))}
          </div>

          {/* Active Region Content Card */}
          <div className="max-w-5xl mx-auto rk-global-card rounded-3xl p-8 sm:p-12 border border-[#E5DFD5] shadow-lg space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5DFD5] pb-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#BC4F32]">
                  Territory Profile
                </span>
                <h3 className="font-serif-display text-3xl text-[#0B1626] mt-1">
                  {activeRegion.name}
                </h3>
              </div>
              <div className="flex gap-4 text-xs">
                <div className="p-3 rounded-xl bg-[#FAF9F6] border border-[#E5DFD5]">
                  <span className="text-[#64748B] block">Active Jurisdiction:</span>
                  <strong className="text-[#0B1626] text-sm">{activeRegion.countriesCount}</strong>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF9F6] border border-[#E5DFD5]">
                  <span className="text-[#64748B] block">Operational Hubs:</span>
                  <strong className="text-[#0B1626] text-sm">{activeRegion.hubsCount}</strong>
                </div>
              </div>
            </div>

            {/* Operational Highlights */}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0B1626] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#BC4F32]" />
                <span>Regional Safeguards & Operational Pillars:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#334155]">
                {activeRegion.highlights.map((h, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#FAF9F6] border border-[#E5DFD5] flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#FDF5F1] text-[#BC4F32] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Partners & Cultural Program */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-[#EBF4F7] border border-[#C5DFE7]">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#185265] block mb-1">
                  Primary Statutory Partners
                </span>
                <p className="text-xs text-[#0B1626] leading-relaxed font-medium">
                  {activeRegion.keyPartners}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF4E5] border border-[#EEDBBA]">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C59A3F] block mb-1">
                  Heritage & Cultural Continuity Doctrine
                </span>
                <p className="text-xs text-[#0B1626] leading-relaxed font-medium">
                  {activeRegion.culturalProgram}
                </p>
              </div>
            </div>

            {/* Featured Active Nations */}
            <div className="pt-4 border-t border-[#E5DFD5]">
              <span className="text-xs text-[#64748B] block mb-2 font-medium">
                Featured Partner Countries in this Region:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeRegion.featuredCountries.map((c, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg bg-[#FAF9F6] border border-[#E5DFD5] text-xs text-[#0B1626]">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HERITAGE & MOTHER-TONGUE PRESERVATION DOCTRINE ── */}
      <section className="py-20 bg-[#FAF9F6] border-b border-[#E5DFD5]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#185265]">
              Roots & Belonging
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B1626]">
              Our International Heritage Preservation Doctrine
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] font-light leading-relaxed">
              When a child is adopted across national or cultural borders, their heritage does not vanish; it becomes a cherished cornerstone of their identity. RK-Adoption mandates comprehensive heritage continuity for every intercountry family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#E5DFD5] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#FDF5F1] text-[#BC4F32] flex items-center justify-center mb-3">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold text-[#0B1626]">Cultural Dossier & Memory Box</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Every child receives a personalized heritage archive detailing birth-region traditions, culinary history, regional nursery rhymes, and geographic lore.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E5DFD5] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#EBF4F7] text-[#185265] flex items-center justify-center mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold text-[#0B1626]">Mother-Tongue Audio Libraries</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Parents receive phonetic language kits and bedtime audiobooks in the child’s birth language to retain early linguistic familiarity and comfort.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E5DFD5] space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#FAF4E5] text-[#C59A3F] flex items-center justify-center mb-3">
                <Plane className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold text-[#0B1626]">Heritage Homecoming Trips</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Guided, therapeutic homeland visitation tours organized for adolescent adoptees to safely explore their birth country with specialized counselor chaperones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="py-16 bg-[#0B1626] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="font-serif-display text-3xl sm:text-4xl text-white">
            Considering Intercountry or International Adoption?
          </h2>
          <p className="text-sm text-slate-300 font-light max-w-xl mx-auto">
            Our international case coordinators can provide a personalized country eligibility assessment based on your citizenship, residency, and family dynamics.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <a 
              href="/about/team" 
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs font-medium transition-colors"
            >
              Meet International Coordinators
            </a>
            <a 
              href="/contact" 
              className="rk-btn-global px-7 py-3 rounded-xl text-xs font-medium flex items-center gap-2"
            >
              <span>Schedule International Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
