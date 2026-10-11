import { useState } from 'react';
import {
  Heart,
  PhoneCall,
  MessageCircle,
  ShieldCheck,
  Scale,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  Lock,
  HeartHandshake
} from 'lucide-react';

interface OpennessLevel {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  reassurance: string;
}

const OPENNESS_LEVELS: OpennessLevel[] = [
  {
    id: 'open',
    name: 'Fully Open Adoption',
    subtitle: 'Direct, lifelong connection & relationship',
    description: 'In an open adoption, you share direct communication with the adoptive family. You can exchange phone calls, text messages, celebrate birthdays, and schedule annual or seasonal in-person visits as your child grows.',
    features: [
      'Direct exchange of phone numbers, emails, and social contact',
      'Regular photos, milestones, report cards, and video calls',
      'Scheduled in-person visits mutually agreed upon by both parties',
      'Child grows up knowing their biological mother without secrecy'
    ],
    reassurance: 'You can define boundaries and cadence with the family before and after placement.'
  },
  {
    id: 'semi-open',
    name: 'Semi-Open Adoption',
    subtitle: 'Mediated updates through agency privacy',
    description: 'If you want regular updates on your child’s health, milestones, and schooling but wish to maintain personal address privacy, semi-open adoption is facilitated securely through our agency coordinators.',
    features: [
      'Annual or semi-annual photo albums and developmental letters',
      'Coordinated through our confidential caseworker portal',
      'No personal home addresses or last names required to be shared',
      'Option to transition to direct contact in the future if desired'
    ],
    reassurance: 'Offers rich connection while preserving your geographic privacy.'
  },
  {
    id: 'closed',
    name: 'Confidential / Closed Adoption',
    subtitle: 'Complete privacy with sealed records',
    description: 'In a confidential adoption, no identifying details or ongoing contact is shared between parties. Your medical history and gentle personal letter are preserved in the child’s sealed dossier for when they reach legal adulthood.',
    features: [
      'Complete personal confidentiality and privacy',
      'Comprehensive biological health and genetic pedigree preserved',
      'Option to place a personal keepsake or letter into the sealed vault',
      'Full legal protection of your personal identity'
    ],
    reassurance: 'Your decision is respected with total confidentiality and zero judgment.'
  }
];

export default function BirthParents() {
  const [activeOpenness, setActiveOpenness] = useState<string>('open');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const selectedLevel = OPENNESS_LEVELS.find(o => o.id === activeOpenness) || OPENNESS_LEVELS[0];

  return (
    <div className="rk-birth-container font-sans text-[#1C2826] antialiased bg-[#FAF6F2]">
      {/* 
        ========================================================================
        PAGE-SPECIFIC STYLES: "Terracotta Rose, Gentle Sage & Cashmere"
        - Deep Slate Terracotta: #8D3A2C / #A64737
        - Warm Terracotta: #C05646 / #D46A58
        - Hearth Sage: #2D5A4E / #3D7365
        - Tender Rose Sand: #FAF6F2 / #F5EDE6
        - Midnight Slate: #1A2624
        ========================================================================
      */}
      <style>{`
        .rk-birth-container {
          --rk-terracotta-800: #8D3A2C;
          --rk-terracotta-600: #C05646;
          --rk-terracotta-50:  #FDF3F1;
          --rk-sage-700: #2D5A4E;
          --rk-sage-50:  #EDF4F1;
          --rk-sand-bg:  #FAF6F2;
          --rk-border-rose: #EBDED6;
        }

        .font-serif-birth {
          font-family: 'Cormorant Garamond', Georgia, serif;
          letter-spacing: -0.015em;
        }

        .rk-card-birth {
          background: #FFFFFF;
          border: 1px solid var(--rk-border-rose);
          box-shadow: 0 4px 20px -2px rgba(28, 40, 38, 0.04);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .rk-card-birth:hover {
          box-shadow: 0 16px 36px -4px rgba(28, 40, 38, 0.08);
          border-color: #D8C7BC;
        }

        .rk-btn-terracotta {
          background: linear-gradient(135deg, #C05646 0%, #8D3A2C 100%);
          color: #FFFFFF;
          box-shadow: 0 4px 18px 0 rgba(192, 86, 70, 0.3);
          transition: all 0.25s ease;
        }

        .rk-btn-terracotta:hover {
          background: linear-gradient(135deg, #D46A58 0%, #A04233 100%);
          transform: translateY(-1px);
          box-shadow: 0 8px 24px 0 rgba(192, 86, 70, 0.42);
        }
      `}</style>

      {/* ── 24/7 CONFIDENTIAL EMERGENCY BANNER ── */}
      <div className="bg-[#8D3A2C] text-white py-3 px-6 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-3 text-xs">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-[#FDE8E5] fill-[#FDE8E5]" />
            <span className="font-semibold tracking-wide">
              Pregnant or Considering Adoption? You Are In Full Control.
            </span>
            <span className="hidden md:inline text-rose-200">
              Free, confidential options counseling with zero judgment or pressure.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="tel:+18001234567" 
              className="font-bold underline underline-offset-4 hover:text-rose-100 flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call: (800) 123-4567</span>
            </a>
            <span className="text-rose-300">|</span>
            <a 
              href="sms:+18001234567" 
              className="font-bold underline underline-offset-4 hover:text-rose-100 flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Text Us 24/7</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── BREADCRUMB ── */}
      <div className="bg-[#F5EDE6] border-b border-[#EBDED6] py-3.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#64748B]">
          <a href="/" className="hover:text-[#1C2826] transition-colors">Home</a>
          <span>/</span>
          <a href="/families" className="hover:text-[#1C2826] transition-colors">Families</a>
          <span>/</span>
          <span className="text-[#C05646] font-semibold">Birth Families</span>
        </div>
      </div>

      {/* ── SECTION 1: EDITORIAL HERO ── */}
      <section className="relative pt-16 pb-24 bg-gradient-to-b from-[#F5EDE6] via-[#FAF6F2] to-[#FAF6F2] border-b border-[#EBDED6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDF3F1] border border-[#C05646]/25 text-xs font-semibold text-[#8D3A2C]">
                <HeartHandshake className="w-3.5 h-3.5 text-[#C05646]" />
                <span>Confidential, Compassionate & Non-Judgmental Support</span>
              </div>

              <h1 className="font-serif-birth text-4xl sm:text-5xl lg:text-6xl text-[#1C2826] font-normal leading-[1.12]">
                You Hold the Power, the Choice, and Our{' '}
                <span className="italic text-[#C05646] underline decoration-[#C05646]/35 underline-offset-8">
                  Unconditional Respect
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#526360] leading-relaxed font-light max-w-2xl">
                Facing an unexpected pregnancy or raising an infant while overwhelmed by life circumstances can feel isolating. At RK-Adoption, you are never pressured or judged. We provide compassionate space to explore all your options—whether parenting, kinship support, or crafting an adoption plan tailored entirely to your desires.
              </p>

              {/* Ethical Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="p-3.5 rounded-2xl bg-white border border-[#EBDED6] space-y-1">
                  <span className="text-xs font-bold text-[#1C2826] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#2D5A4E]" />
                    100% Free to You
                  </span>
                  <p className="text-[11px] text-[#64748B] leading-snug">
                    All legal, medical, counseling, and housing assistance is fully provided.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-[#EBDED6] space-y-1">
                  <span className="text-xs font-bold text-[#1C2826] flex items-center gap-1.5">
                    <Lock className="w-4 h-4 text-[#C05646]" />
                    Total Privacy
                  </span>
                  <p className="text-[11px] text-[#64748B] leading-snug">
                    Your personal information remains completely confidential.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-[#EBDED6] space-y-1">
                  <span className="text-xs font-bold text-[#1C2826] flex items-center gap-1.5">
                    <Scale className="w-4 h-4 text-[#8D3A2C]" />
                    You Choose
                  </span>
                  <p className="text-[11px] text-[#64748B] leading-snug">
                    You choose the family, the openness level, and the hospital plan.
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a 
                  href="tel:+18001234567" 
                  className="rk-btn-terracotta px-8 py-3.5 rounded-xl font-medium text-sm flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Talk with a Counselor in Private</span>
                </a>
                <a 
                  href="#openness" 
                  className="px-6 py-3.5 rounded-xl bg-white border border-[#EBDED6] text-[#1C2826] hover:bg-[#F5EDE6] font-medium text-sm flex items-center gap-2 transition-colors shadow-xs"
                >
                  <span>Explore Open Adoption Options</span>
                </a>
              </div>
            </div>

            {/* Right Hero Frame */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#E9DFD8]">
                <img 
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1000&q=80" 
                  alt="Gentle hands holding warm tea in supportive counseling environment"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C2826]/85 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white p-5 rounded-2xl bg-[#1C2826]/80 backdrop-blur-md border border-white/10">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#F5EDE6] block mb-1">
                    Our Unbending Ethical Charter
                  </span>
                  <p className="text-xs font-light text-slate-200 leading-relaxed italic">
                    "A birth mother never 'gives up' her child. She makes an agonizing, profoundly loving decision to secure their future—and she deserves our lifetime reverence."
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 2: BIRTH PARENT BILL OF RIGHTS ── */}
      <section className="py-24 bg-white border-b border-[#EBDED6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#C05646]">
              Your Legal Protections
            </span>
            <h2 className="font-serif-birth text-3xl sm:text-4xl lg:text-5xl text-[#1C2826]">
              The Birth Parent Bill of Rights at RK-Adoption
            </h2>
            <p className="text-xs sm:text-sm text-[#526360] font-light leading-relaxed">
              Every state law and agency charter ensures you are empowered with irrevocable rights throughout your decision-making process:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-7 rounded-3xl bg-[#FAF6F2] border border-[#EBDED6] space-y-3">
              <span className="w-8 h-8 rounded-full bg-[#FDF3F1] text-[#C05646] flex items-center justify-center text-xs font-bold font-mono">
                01
              </span>
              <h3 className="font-serif-birth text-2xl text-[#1C2826]">
                The Right to Change Your Mind
              </h3>
              <p className="text-xs text-[#526360] leading-relaxed">
                Prior to the signing of final legal consent paperwork (which occurs days after birth under state law), you can change your mind at any moment. You will never owe money for care or support received.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#FAF6F2] border border-[#EBDED6] space-y-3">
              <span className="w-8 h-8 rounded-full bg-[#EDF4F1] text-[#2D5A4E] flex items-center justify-center text-xs font-bold font-mono">
                02
              </span>
              <h3 className="font-serif-birth text-2xl text-[#1C2826]">
                Independent Legal Counsel
              </h3>
              <p className="text-xs text-[#526360] leading-relaxed">
                You are entitled to your own independent adoption attorney to represent your legal interests and ensure your rights are protected—100% paid for, with zero cost to you.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#FAF6F2] border border-[#EBDED6] space-y-3">
              <span className="w-8 h-8 rounded-full bg-[#FDF3F1] text-[#8D3A2C] flex items-center justify-center text-xs font-bold font-mono">
                03
              </span>
              <h3 className="font-serif-birth text-2xl text-[#1C2826]">
                Selecting the Family
              </h3>
              <p className="text-xs text-[#526360] leading-relaxed">
                You review profiles of approved, vetted adoptive parents. You can interview them, meet them over lunch or video, and only move forward if you feel genuine peace and mutual alignment.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#FAF6F2] border border-[#EBDED6] space-y-3">
              <span className="w-8 h-8 rounded-full bg-[#EDF4F1] text-[#2D5A4E] flex items-center justify-center text-xs font-bold font-mono">
                04
              </span>
              <h3 className="font-serif-birth text-2xl text-[#1C2826]">
                Your Hospital Birth Plan
              </h3>
              <p className="text-xs text-[#526360] leading-relaxed">
                You determine every hospital detail: who holds the baby first, how much time you spend together in private, and whether the adoptive parents wait in a separate room.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#FAF6F2] border border-[#EBDED6] space-y-3">
              <span className="w-8 h-8 rounded-full bg-[#FDF3F1] text-[#C05646] flex items-center justify-center text-xs font-bold font-mono">
                05
              </span>
              <h3 className="font-serif-birth text-2xl text-[#1C2826]">
                Living & Medical Expense Help
              </h3>
              <p className="text-xs text-[#526360] leading-relaxed">
                As permitted by state adoption laws, assistance with rent, utilities, groceries, maternity clothing, and prenatal healthcare is provided throughout pregnancy and recovery.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#FAF6F2] border border-[#EBDED6] space-y-3">
              <span className="w-8 h-8 rounded-full bg-[#EDF4F1] text-[#2D5A4E] flex items-center justify-center text-xs font-bold font-mono">
                06
              </span>
              <h3 className="font-serif-birth text-2xl text-[#1C2826]">
                Lifetime Post-Placement Care
              </h3>
              <p className="text-xs text-[#526360] leading-relaxed">
                Our care does not conclude at hospital discharge. Free grief counseling, peer retreats, and educational scholarships remain available to you for the rest of your life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE SPECTRUM OF OPENNESS (INTERACTIVE SELECTOR) ── */}
      <section id="openness" className="py-24 bg-[#FAF6F2] border-b border-[#EBDED6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#2D5A4E]">
              Customizing Your Connection
            </span>
            <h2 className="font-serif-birth text-3xl sm:text-4xl lg:text-5xl text-[#1C2826]">
              Choose Your Comfort Level: The Spectrum of Openness
            </h2>
            <p className="text-xs sm:text-sm text-[#526360] font-light leading-relaxed">
              Adoption is no longer an all-or-nothing silence. You choose the frequency and style of contact you want as your child grows:
            </p>
          </div>

          {/* Interactive Openness Selector Rail */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {OPENNESS_LEVELS.map((level) => {
              const isSelected = activeOpenness === level.id;
              return (
                <button
                  key={level.id}
                  onClick={() => setActiveOpenness(level.id)}
                  className={`text-left p-6 rounded-3xl border transition-all ${
                    isSelected
                      ? 'bg-[#1A2624] text-white border-[#1A2624] shadow-lg transform -translate-y-1'
                      : 'bg-white text-[#526360] border-[#EBDED6] hover:bg-[#FAF6F2]'
                  }`}
                >
                  <div className="text-[10px] font-mono uppercase font-bold tracking-wider mb-2 text-[#C05646]">
                    Option {level.id.toUpperCase()}
                  </div>
                  <h3 className={`font-serif-birth text-2xl mb-1 ${isSelected ? 'text-white' : 'text-[#1C2826]'}`}>
                    {level.name}
                  </h3>
                  <p className={`text-xs ${isSelected ? 'text-slate-300' : 'text-[#64748B]'}`}>
                    {level.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Detail Card for Selected Openness */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#EBDED6] shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C05646]">
                  How This Relationship Works
                </span>
                <h3 className="font-serif-birth text-3xl sm:text-4xl text-[#1C2826]">
                  {selectedLevel.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#526360] leading-relaxed font-light">
                  {selectedLevel.description}
                </p>

                <div className="p-4 rounded-2xl bg-[#FAF6F2] border border-[#EBDED6] text-xs text-[#1C2826] font-medium">
                  {selectedLevel.reassurance}
                </div>
              </div>

              <div className="lg:col-span-5 space-y-3 p-6 rounded-2xl bg-[#FAF6F2] border border-[#EBDED6]">
                <span className="text-xs font-bold uppercase tracking-wide text-[#1C2826] block">
                  Key Elements Included:
                </span>
                <ul className="space-y-2 text-xs text-[#526360]">
                  {selectedLevel.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C05646] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: A BIRTH MOTHER'S VOICE ── */}
      <section className="py-24 bg-[#1C2826] text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-semibold text-[#FDE8E5]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>A Safeguarded Story of Courage & Healing</span>
          </div>

          <blockquote className="font-serif-birth text-2xl sm:text-3xl lg:text-4xl font-normal leading-relaxed text-[#FAF6F2] italic">
            "When I discovered I was pregnant at twenty-one, I was terrified that people would judge me or force me into something I wasn't ready for. My RK-Adoption counselor was the first person who simply listened without an agenda. Today, my daughter is 5 years old, flourishing with two devoted parents. I receive video messages every month, and we eat birthday cupcakes together every summer. Choosing adoption wasn't giving up; it was giving her everything I couldn't provide at that moment."
          </blockquote>

          <div className="pt-4 border-t border-white/15 text-xs text-slate-300">
            <strong className="text-white block text-sm">Maya S.</strong>
            <span>Birth Mother, Open Adoption Plan Established 2021 (Identity Safeguarded)</span>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: BIRTH PARENTS FAQ ── */}
      <section className="py-24 bg-white border-b border-[#EBDED6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#C05646]">
              Honest Clarifications
            </span>
            <h2 className="font-serif-birth text-3xl sm:text-4xl text-[#1C2826]">
              Questions Birth Parents Frequently Ask
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'Do I have to pay anything for medical care, legal services, or counseling?',
                a: 'Never. Under all adoption statutes, all counseling, independent legal representation, medical deliveries, and approved living assistance are 100% free to expectant birth mothers. You will never receive a bill.'
              },
              {
                q: 'What if the biological father is unsupportive or uninvolved?',
                a: 'Every state has established statutes regarding birth father rights and putative father registries. Your independent attorney will handle the legal requirements with compassion and clarity so you do not have to endure confrontational distress alone.'
              },
              {
                q: 'What happens at the hospital after I give birth?',
                a: 'You dictate your hospital experience through your personal Birth Plan. You decide whether the adoptive parents are in the room, how many hours you hold and bond with your baby, and when discharge takes place.'
              },
              {
                q: 'Can I stay in touch with my child over the years?',
                a: 'Yes! Over 90% of domestic adoptions today feature open or semi-open communication agreements. You can receive photos, video calls, letters, and schedule visits according to your mutual comfort.'
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="rounded-2xl border border-[#EBDED6] bg-white overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-medium text-xs sm:text-sm text-[#1C2826] hover:bg-[#FAF6F2] transition-colors"
                >
                  <span>{item.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#C05646] shrink-0 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="p-5 pt-0 text-xs text-[#526360] leading-relaxed border-t border-[#EBDED6]/60 font-light">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: TENDER CALL TO ACTION ── */}
      <section className="py-20 bg-[#FAF6F2] border-t border-[#EBDED6]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs uppercase font-semibold tracking-wider text-[#C05646]">
            We Are Here When You Are Ready
          </span>
          <h2 className="font-serif-birth text-3xl sm:text-4xl lg:text-5xl text-[#1C2826] font-normal leading-tight">
            Take a Breath. You Don't Have to Walk This Alone.
          </h2>
          <p className="text-sm sm:text-base text-[#526360] font-light max-w-xl mx-auto leading-relaxed">
            Our compassionate female birth parent specialists are available 24 hours a day. No paperwork required to just talk, cry, or explore your options in absolute secrecy.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a 
              href="tel:+18001234567" 
              className="rk-btn-terracotta px-8 py-4 rounded-xl text-sm font-semibold flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call 24/7 Helpline: +1 (800) 123-4567</span>
            </a>
            <a 
              href="sms:+18001234567" 
              className="px-7 py-4 rounded-xl bg-white border border-[#EBDED6] text-[#1C2826] hover:bg-[#F5EDE6] text-sm font-medium transition-colors shadow-xs flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#C05646]" />
              <span>Text Us in Confidence</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
