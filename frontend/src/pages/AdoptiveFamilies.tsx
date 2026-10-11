import { useState } from 'react';
import {
  Heart,
  Users,
  ShieldCheck,
  BookOpen,
  Sparkles,
  ArrowRight,
  Compass,
  PhoneCall,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Star,
  HeartHandshake
} from 'lucide-react';

interface AgeStage {
  id: string;
  age: string;
  title: string;
  theme: string;
  childNeeds: string;
  parentTips: string[];
}

const AGE_STAGES: AgeStage[] = [
  {
    id: 'toddler',
    age: 'Ages 1 – 5',
    title: 'Early Childhood & Sensory Attachment',
    theme: 'Felt Safety, Rhythms & Co-Regulation',
    childNeeds: 'Children in this window need somatic predictability. Sensory integration, weighted blankets, slow feeding transitions, and gentle eye contact teach their nervous system that they are safe.',
    parentTips: [
      'Maintain unwavering consistency in nap and meal schedules',
      'Use playful physical games (pat-a-cake, rocking) to stimulate vagal nerve regulation',
      'Begin reading personalized adoption Lifebooks as early bedtime stories'
    ]
  },
  {
    id: 'elementary',
    age: 'Ages 6 – 10',
    title: 'School Age & Social Curiosity',
    theme: 'Origin Awareness & School Advocacy',
    childNeeds: 'Children begin understanding that adoption involves both joy and biological loss. They may ask deeper questions about their birth story or encounter intrusive questions from classmates.',
    parentTips: [
      'Proactively educate teachers about adoption-sensitive school assignments (e.g. family tree projects)',
      'Equip your child with the "W.I.S.E. Owl" response formula to choose who they share details with',
      'Normalize talking about their birth family with warmth and zero secrecy'
    ]
  },
  {
    id: 'adolescence',
    age: 'Ages 11 – 15',
    title: 'Adolescence & Identity Consolidation',
    theme: 'Who Am I? Belonging & Individuation',
    childNeeds: 'Teenagers grapple with identity formation. Questions like "Who do I look like?" and "Why was I relinquished?" can provoke emotional turmoil, rebellion, or fear of secondary rejection.',
    parentTips: [
      'Understand that teen pushing-away is a test of your unconditional staying power',
      'Connect with our teen adoptee mentorship cohorts and wilderness summer retreats',
      'Support safe, open exploration of heritage, culture, and biological roots'
    ]
  },
  {
    id: 'young-adult',
    age: 'Ages 16+',
    title: 'Young Adulthood & Origin Exploration',
    theme: 'Consensual Search, Reunion & Lifelong Pride',
    childNeeds: 'Older youth may desire to search for biological relatives, visit birth countries, or navigate complex multi-family relationships as independent adults.',
    parentTips: [
      'Walk alongside your adult child without feeling threatened or defensive',
      'Utilize our professional reunion mediation counselors for emotional safety',
      'Celebrate that their expanding story honors—rather than erases—your lifelong bond'
    ]
  }
];

export default function AdoptiveFamilies() {
  const [activeStageId, setActiveStageId] = useState<string>('elementary');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeScriptIdx, setActiveScriptIdx] = useState<number>(0);

  const currentStage = AGE_STAGES.find(s => s.id === activeStageId) || AGE_STAGES[1];

  return (
    <div className="rk-adoptive-container font-sans text-[#1A2624] antialiased bg-[#FAF8F5]">
      {/* 
        ========================================================================
        PAGE-SPECIFIC STYLES: "Regal Forest Pine, Burnished Ochre & Warm Linen"
        - Forest Pine: #13332A / #1D4B3E / #2B6958
        - Burnished Ochre: #B87333 / #D28847 / #F1A362
        - Silk Linen: #FAF8F5 / #F3EFEA
        ========================================================================
      */}
      <style>{`
        .rk-adoptive-container {
          --rk-pine-900: #13332A;
          --rk-pine-800: #1D4B3E;
          --rk-pine-50:  #EDF4F1;
          --rk-ochre-600: #B87333;
          --rk-ochre-500: #D28847;
          --rk-ochre-50:  #FCF4EC;
          --rk-linen-bg:  #FAF8F5;
          --rk-border-silk: #EAE4D9;
        }

        .font-serif-adoptive {
          font-family: 'Cormorant Garamond', Georgia, serif;
          letter-spacing: -0.015em;
        }

        .rk-card-adoptive {
          background: #FFFFFF;
          border: 1px solid var(--rk-border-silk);
          box-shadow: 0 4px 20px -2px rgba(19, 51, 42, 0.04);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .rk-card-adoptive:hover {
          box-shadow: 0 16px 36px -4px rgba(19, 51, 42, 0.08);
          border-color: #D6CABA;
        }

        .rk-btn-pine {
          background: linear-gradient(135deg, #1D4B3E 0%, #13332A 100%);
          color: #FFFFFF;
          box-shadow: 0 4px 18px 0 rgba(29, 75, 62, 0.3);
          transition: all 0.25s ease;
        }

        .rk-btn-pine:hover {
          background: linear-gradient(135deg, #245F4F 0%, #173E33 100%);
          transform: translateY(-1px);
          box-shadow: 0 8px 24px 0 rgba(29, 75, 62, 0.42);
        }
      `}</style>

      {/* ── BREADCRUMB ── */}
      <div className="bg-[#F3EFEA] border-b border-[#EAE4D9] py-3.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-[#64748B]">
          <div className="flex items-center gap-2">
            <a href="/" className="hover:text-[#13332A] transition-colors">Home</a>
            <span>/</span>
            <a href="/families" className="hover:text-[#13332A] transition-colors">Families</a>
            <span>/</span>
            <span className="text-[#1D4B3E] font-semibold">Adoptive Families</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[#13332A] font-medium">
            <HeartHandshake className="w-3.5 h-3.5 text-[#B87333]" />
            <span>Lifelong Post-Placement Preservation Department</span>
          </div>
        </div>
      </div>

      {/* ── SECTION 1: EDITORIAL HERO ── */}
      <section className="relative pt-16 pb-24 bg-gradient-to-b from-[#F3EFEA] via-[#FAF8F5] to-[#FAF8F5] border-b border-[#EAE4D9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EDF4F1] border border-[#1D4B3E]/30 text-xs font-semibold text-[#13332A]">
                <Star className="w-3.5 h-3.5 text-[#B87333]" />
                <span>Lifelong Post-Adoption Partnership</span>
              </div>

              <h1 className="font-serif-adoptive text-4xl sm:text-5xl lg:text-6xl text-[#13332A] font-normal leading-[1.12]">
                Beyond the Final Decree:{' '}
                <span className="italic text-[#B87333] underline decoration-[#B87333]/35 underline-offset-8">
                  Walking Beside Your Family for Life
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-light max-w-2xl">
                The gavel fell and the adoption is legally permanent—yet the real adventure of family life is just beginning. RK-Adoption remains your lifelong companion through every developmental milestone, offering clinical attachment coaching, school IEP advocacy, teen identity circles, and parent peer cohorts.
              </p>

              {/* Preservation Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="p-3.5 rounded-2xl bg-white border border-[#EAE4D9] space-y-1">
                  <span className="text-xs font-bold text-[#13332A] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#1D4B3E]" />
                    Clinical Therapy
                  </span>
                  <p className="text-[11px] text-[#64748B] leading-snug">
                    Vetted network of adoption-competent child and family specialists.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-[#EAE4D9] space-y-1">
                  <span className="text-xs font-bold text-[#13332A] flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-[#B87333]" />
                    Parent Circles
                  </span>
                  <p className="text-[11px] text-[#64748B] leading-snug">
                    Monthly peer cohorts where you can share challenges with zero judgment.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-[#EAE4D9] space-y-1">
                  <span className="text-xs font-bold text-[#13332A] flex items-center gap-1.5">
                    <Compass className="w-4 h-4 text-[#1D4B3E]" />
                    Identity & Roots
                  </span>
                  <p className="text-[11px] text-[#64748B] leading-snug">
                    Youth mentorship camps, heritage discovery, and reunion navigation.
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a 
                  href="#parenting-scripts" 
                  className="rk-btn-pine px-8 py-3.5 rounded-xl font-medium text-sm flex items-center gap-2"
                >
                  <span>Explore Therapeutic Parenting Tools</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a 
                  href="#age-stages" 
                  className="px-6 py-3.5 rounded-xl bg-white border border-[#EAE4D9] text-[#13332A] hover:bg-[#F3EFEA] font-medium text-sm flex items-center gap-2 transition-colors shadow-xs"
                >
                  <BookOpen className="w-4 h-4 text-[#B87333]" />
                  <span>Developmental Milestones</span>
                </a>
              </div>
            </div>

            {/* Right Hero Visual Frame */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#E9E4DC]">
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1000&q=80" 
                  alt="A mother and happy adopted teenage daughter sharing a warm laugh together at home"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13332A]/85 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white p-5 rounded-2xl bg-[#13332A]/80 backdrop-blur-md border border-white/10">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#F1A362] block mb-1">
                    The Preservation Promise
                  </span>
                  <p className="text-xs font-light text-slate-200 leading-relaxed italic">
                    "Adoption is an evolving conversation that unfolds over decades. You never have to solve an adolescent identity storm or attachment challenge in isolation."
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 2: DEVELOPMENTAL STAGES NAVIGATOR ── */}
      <section id="age-stages" className="py-24 bg-white border-b border-[#EAE4D9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#1D4B3E]">
              Parenting Across Time
            </span>
            <h2 className="font-serif-adoptive text-3xl sm:text-4xl lg:text-5xl text-[#13332A]">
              Parenting Through the Years: Key Developmental Milestones
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] font-light leading-relaxed">
              As your child matures, their comprehension of adoption deepens. Select an age window below to inspect the specific emotional needs and practical parenting guidance:
            </p>
          </div>

          {/* Age Window Switcher Rail */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {AGE_STAGES.map((s) => {
              const isSelected = activeStageId === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveStageId(s.id)}
                  className={`text-left p-6 rounded-3xl border transition-all ${
                    isSelected
                      ? 'bg-[#13332A] text-white border-[#13332A] shadow-md transform -translate-y-1'
                      : 'bg-[#FAF8F5] text-[#475569] border-[#EAE4D9] hover:bg-white'
                  }`}
                >
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider block mb-1 ${
                    isSelected ? 'text-[#F1A362]' : 'text-[#B87333]'
                  }`}>
                    {s.age}
                  </span>
                  <h3 className="font-serif-adoptive text-xl font-medium leading-snug">
                    {s.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Active Age Window Deep-Dive Panel */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF8F5] border border-[#EAE4D9] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <span className="text-xs font-semibold text-[#B87333] uppercase tracking-wider">
                    {currentStage.age} · Core Psychological Milestone
                  </span>
                  <h3 className="font-serif-adoptive text-3xl sm:text-4xl text-[#13332A] mt-1">
                    {currentStage.theme}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mt-3 font-light">
                    {currentStage.childNeeds}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#EAE4D9] space-y-2">
                  <span className="text-xs font-bold text-[#13332A] uppercase block">
                    Recommended Attachment Focus:
                  </span>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Prioritize emotional connection and open storytelling before academic or behavioral expectations. When children feel secure in their identity, behavioral cooperation follows naturally.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-2xl bg-white border border-[#EAE4D9] space-y-4">
                <span className="text-xs font-bold uppercase tracking-wide text-[#13332A] block">
                  Actionable Strategies for Parents:
                </span>
                <ul className="space-y-3 text-xs text-[#475569]">
                  {currentStage.parentTips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#1D4B3E] shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: PARENT-TO-PARENT DE-ESCALATION SCRIPTS ── */}
      <section id="parenting-scripts" className="py-24 bg-[#F3EFEA] border-b border-[#EAE4D9]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#B87333]">
              Trauma-Informed Translation
            </span>
            <h2 className="font-serif-adoptive text-3xl sm:text-4xl lg:text-5xl text-[#13332A]">
              What Your Child Says vs. What Their Nervous System Means
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] font-light leading-relaxed">
              When an adopted child experiences fear or grief, words can sound hurtful. Use our clinical translation guide to respond with grounding love:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id: 0,
                phrase: '"You aren’t my real mom/dad!"',
                translation: 'I am terrified that if I test you with big fury, you will abandon me like others did in my past. Show me you are unshakeable.',
                script: '"I will always be your real mom/dad. Nothing you can ever say or do will make me stop loving you or walk away."'
              },
              {
                id: 1,
                phrase: '"I don’t care about anything! Leave me alone!"',
                translation: 'My emotional cup is overflowing. I am in sensory panic and need your calm presence without feeling judged.',
                script: '"I can see how overwhelming this feels. I am going to sit right here quietly so you don’t have to carry this big feeling alone."'
              },
              {
                id: 2,
                phrase: '*Sneaking food into bedroom drawers*',
                translation: 'My primal subconscious remembers scarcity and starvation. I am guarding resources to survive.',
                script: '"You never have to sneak food in our house. We are putting this snack basket right in your room, and it is yours anytime you are hungry."'
              }
            ].map((card) => (
              <div 
                key={card.id}
                onClick={() => setActiveScriptIdx(card.id)}
                className={`p-7 rounded-3xl bg-white border cursor-pointer transition-all space-y-4 ${
                  activeScriptIdx === card.id 
                    ? 'border-[#1D4B3E] shadow-md ring-2 ring-[#1D4B3E]/10' 
                    : 'border-[#EAE4D9] hover:border-[#B87333]'
                }`}
              >
                <div className="text-xs font-mono font-bold text-[#B87333] uppercase">
                  Script Scenario 0{card.id + 1}
                </div>

                <div className="font-serif-adoptive text-2xl text-[#13332A] font-bold">
                  {card.phrase}
                </div>

                <div className="p-3.5 rounded-2xl bg-[#FCF4EC] text-xs space-y-1">
                  <span className="font-bold text-[#B87333] block text-[10px] uppercase">What Their Nervous System Means:</span>
                  <p className="text-[#5B4232] leading-relaxed">{card.translation}</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#EDF4F1] text-xs space-y-1">
                  <span className="font-bold text-[#1D4B3E] block text-[10px] uppercase">The Calming Connected Response:</span>
                  <p className="text-[#1A3B31] leading-relaxed italic">{card.script}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: PEER COMMUNITIES & COHORTS ── */}
      <section className="py-24 bg-white border-b border-[#EAE4D9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#1D4B3E]">
              The RK-Adoption Circle
            </span>
            <h2 className="font-serif-adoptive text-3xl sm:text-4xl lg:text-5xl text-[#13332A]">
              You Are Never Alone in This Community
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] font-light leading-relaxed">
              Connect with fellow adoptive parents in curated, specialized cohorts designed to foster lifelong camaraderie:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-7 rounded-3xl bg-[#FAF8F5] border border-[#EAE4D9] space-y-3">
              <Users className="w-8 h-8 text-[#1D4B3E]" />
              <h3 className="font-serif-adoptive text-2xl text-[#13332A]">
                Monthly Parent Coffee Circles
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Informal monthly virtual and in-person meetups across 40+ regional chapters to decompress and celebrate milestones.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#FAF8F5] border border-[#EAE4D9] space-y-3">
              <Heart className="w-8 h-8 text-[#B87333]" />
              <h3 className="font-serif-adoptive text-2xl text-[#13332A]">
                Transracial Parent Cohorts
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Specialized workshops on racial mirroring, hair and skin care clinics, and active immersion in children’s native cultures.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#FAF8F5] border border-[#EAE4D9] space-y-3">
              <Sparkles className="w-8 h-8 text-[#1D4B3E]" />
              <h3 className="font-serif-adoptive text-2xl text-[#13332A]">
                Teen Adoptee Mentors
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Connecting growing youth with adult adoptees who have walked the same path, fostering healthy pride and identity.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#FAF8F5] border border-[#EAE4D9] space-y-3">
              <Calendar className="w-8 h-8 text-[#B87333]" />
              <h3 className="font-serif-adoptive text-2xl text-[#13332A]">
                Annual Family Retreats
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Four-day nature summer camps blending therapeutic family bonding activities, campfires, and parent relaxation seminars.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: ADOPTIVE FAMILIES FAQ ── */}
      <section className="py-24 bg-[#FAF8F5] border-b border-[#EAE4D9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#1D4B3E]">
              Post-Placement Guidance
            </span>
            <h2 className="font-serif-adoptive text-3xl sm:text-4xl text-[#13332A]">
              Frequently Asked Post-Adoption Questions
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'How should we handle school assignments that require baby photos or family genetics trees?',
                a: 'These common assignments can induce unintentional panic for adopted children. We provide downloadable "School Accommodation Letter" templates for teachers, offering respectful alternative projects like "Circle of Care Trees" or "My Life Story Timeline" that celebrate your child without distress.'
              },
              {
                q: 'What should we do if our child experiences behavioral regression during life transitions?',
                a: 'Regression (bedwetting, clinging, anger outbursts) during transitions (starting a new school, a new sibling, or house moves) is normal. Children from trauma perceive change as a threat to felt safety. Respond with extra co-regulation, lowered expectations, and strict physical routine consistency.'
              },
              {
                q: 'How do we support our child when they grieve their biological family?',
                a: 'Acknowledge and validate their grief without feeling threatened. Saying "It makes total sense that you miss your birth mother, and I wonder about her too" teaches your child that they never have to hide their heart or choose between loyalties.'
              },
              {
                q: 'When should we seek professional adoption-competent family therapy?',
                a: 'We recommend connecting with an adoption-competent therapist early, even proactively before crises occur. Traditional therapists without adoption training often misdiagnose trauma responses as simple ADHD or defiance. Our registry connects you with clinicians trained in TBRI® and attachment.'
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="rounded-2xl border border-[#EAE4D9] bg-white overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-medium text-xs sm:text-sm text-[#13332A] hover:bg-[#FAF8F5] transition-colors"
                >
                  <span>{item.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#1D4B3E] shrink-0 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="p-5 pt-0 text-xs text-[#475569] leading-relaxed border-t border-[#EAE4D9]/60 font-light">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: CALL TO ACTION ── */}
      <section className="py-20 bg-[#13332A] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs uppercase font-semibold tracking-wider text-[#F1A362]">
            Standing with Your Family Forever
          </span>
          <h2 className="font-serif-adoptive text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
            Need Guidance or a Refresh on Connected Parenting?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
            Our post-placement preservation team is just a call or message away. Join our parent circles or request a personalized clinical consultation today.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a 
              href="/contact" 
              className="rk-btn-pine px-8 py-4 rounded-xl text-sm font-semibold flex items-center gap-2 border border-white/20"
            >
              <HeartHandshake className="w-4 h-4 text-[#F1A362]" />
              <span>Connect with Post-Adoption Support Team</span>
            </a>
            <a 
              href="tel:+18001234567" 
              className="px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 text-sm font-medium transition-colors flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Family Preservation Helpline</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
