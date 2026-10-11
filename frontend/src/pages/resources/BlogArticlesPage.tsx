import { useState, useMemo } from 'react';
import {
  BookOpen,
  Sparkles,
  Clock,
  ArrowRight,
  Search,
  CheckCircle2,
  Bookmark,
  Download,
  Headphones,
  Video,
  FileText,
  ChevronRight,
  Star,
  Quote,
  Brain,
  ShieldCheck,
} from 'lucide-react';

interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  hasAudio?: boolean;
  featured?: boolean;
  coverImage: string;
  excerpt: string;
  keyTakeaway: string;
  tags: string[];
}

const ARTICLES_DATABASE: Article[] = [
  {
    id: 'art-1',
    title: 'The Neuroscience of Belonging: How Felt Safety Rewires the Adopted Brain',
    subtitle: 'Moving beyond cognitive understanding into somatosensory healing for children with early developmental trauma.',
    category: 'attachment',
    author: {
      name: 'Dr. Aris Thorne, MD, PhD',
      role: 'Director of Pediatric Neurodevelopment & Trauma Attunement',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80'
    },
    date: 'October 2, 2026',
    readTime: '11 min read',
    hasAudio: true,
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Traditional behavior-modification systems fail children from hard places because fear is registered in the brainstem and limbic system, far below the prefrontal cortex. Discover how rhythmic movement, eye contact attunement, and sensory diets establish true neurological felt safety.',
    keyTakeaway: 'Regulation must always precede connection, and connection must always precede correction.',
    tags: ['TBRI', 'Neuroscience', 'Trauma-Informed', 'Attachment']
  },
  {
    id: 'art-2',
    title: 'Transracial Parenting with Dignity: Cultivating Racial Mirrors and Unflinching Advocacy',
    subtitle: 'A practical, compassionate handbook for white parents adopting children of color.',
    category: 'transracial',
    author: {
      name: 'Maya Chen-Robinson, LCSW',
      role: 'Senior Transcultural Social Work Specialist',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80'
    },
    date: 'September 24, 2026',
    readTime: '9 min read',
    hasAudio: true,
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Love is not enough to protect a child from systemic racial harm. Transracial adoptive parents must proactively move into diverse neighborhoods, master textured hair and skincare regimens, and cultivate lifelong racial mirror mentors who share their child’s heritage.',
    keyTakeaway: 'You cannot teach your child to navigate a culture you refuse to immerse yourself within.',
    tags: ['Transracial', 'Cultural Identity', 'Advocacy', 'Parenting']
  },
  {
    id: 'art-3',
    title: 'The Sacred Truth of Open Adoption: Honoring the Birth Family Through Every Season',
    subtitle: 'Navigating evolving boundaries, complex emotions, and the profound gift of biological truth.',
    category: 'birthfamily',
    author: {
      name: 'Elena Morales & Sarah Jenkins',
      role: 'Birth Mother & Adoptive Mother Co-Authors',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=80'
    },
    date: 'September 12, 2026',
    readTime: '14 min read',
    hasAudio: false,
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Open adoption is not co-parenting; it is an act of radical transparency that removes the agonizing burden of mystery from the adoptee’s heart. Hear from both sides of an open adoption relationship that has thrived with grace for 18 years.',
    keyTakeaway: 'A child’s heart is expansive enough to love all the parents who brought them life and security.',
    tags: ['Open Adoption', 'Birth Mothers', 'PACA', 'Truth']
  },
  {
    id: 'art-4',
    title: 'Surviving "The Wait": A Mental Health Survival Guide for Prospective Adoptive Parents',
    subtitle: 'Transforming months of agonizing stillness into purposeful preparation and relational resilience.',
    category: 'prospective',
    author: {
      name: 'Marcus Sterling, LMFT',
      role: 'Family Therapy & Pre-Adoption Readiness Coach',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80'
    },
    date: 'August 28, 2026',
    readTime: '7 min read',
    hasAudio: false,
    coverImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80',
    excerpt: 'When your home study is complete and the phone does not ring for six months, grief and hypervigilance easily set in. Learn the five cognitive habits that prevent adoption burnout and keep marriages strong during the waiting window.',
    keyTakeaway: 'Do not put your entire emotional life on pause while waiting for the match.',
    tags: ['The Wait', 'Parent Resilience', 'Mental Health']
  },
  {
    id: 'art-5',
    title: 'Adoption Through the Child’s Eyes: Understanding What Adoption Means at Every Age',
    subtitle: 'From age three curiosity to adolescent identity synthesis—how to answer the questions that matter most.',
    category: 'childpsychology',
    author: {
      name: 'Dr. Evelyn Harper, PsyD',
      role: 'Pediatric Clinical Psychologist',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=256&q=80'
    },
    date: 'August 14, 2026',
    readTime: '10 min read',
    hasAudio: true,
    coverImage: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Children do not experience adoption as an abstract legal event. At age 7, they often grasp the underlying grief of relinquishment; at age 14, they wrestle with genetic identity. Here is how to speak truth with unconditional love at each stage.',
    keyTakeaway: 'Adoption is not something that happened to a child; it is a permanent dimension of their identity.',
    tags: ['Developmental Milestones', 'Child Psychology', 'Identity']
  },
  {
    id: 'art-6',
    title: 'Demystifying the Medical Dossier: A Pediatrician\'s Guide to International Referrals',
    subtitle: 'How to evaluate laboratory records, developmental milestones, and prenatal exposure notes with clarity.',
    category: 'healthcare',
    author: {
      name: 'Dr. Jonathan Vance, MD',
      role: 'Chief of International Adoption Medicine',
      avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=256&q=80'
    },
    date: 'July 30, 2026',
    readTime: '12 min read',
    hasAudio: false,
    coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Receiving a child referral with an unfamiliar medical file from overseas can trigger intense panic. Learn what common diagnostic terms mean, how institutional developmental delays resolve post-placement, and when specialized surgical care is necessary.',
    keyTakeaway: 'Institutional delay is not cognitive impairment; post-placement catch-up growth is extraordinary.',
    tags: ['Pediatrics', 'Medical Dossiers', 'International Health']
  }
];

const ARTICLE_CATEGORIES = [
  { id: 'all', label: 'All Articles' },
  { id: 'attachment', label: 'Attachment & Psychology' },
  { id: 'prospective', label: 'Prospective Parent Guides' },
  { id: 'birthfamily', label: 'Birth Family Voices' },
  { id: 'transracial', label: 'Transracial Parenting' },
  { id: 'childpsychology', label: 'Child Development' },
  { id: 'healthcare', label: 'Healthcare & Pediatrics' },
];

const DOWNLOADABLE_TOOLKITS = [
  {
    id: 'tk-1',
    title: 'The Comprehensive Life Story Book Template',
    description: 'A customizable 32-page narrative template designed to help children document their birth story, foster caregivers, arrival day, and family tree with dignity.',
    pages: '32 Pages',
    fileType: 'Printable PDF & InDesign Template',
    downloads: '14,200+ Downloads',
    badge: 'Clinical Favorite'
  },
  {
    id: 'tk-2',
    title: 'The Educator’s Adoption Sensitivity Guide',
    description: 'A practical, 12-page guide for teachers and schools. Explains trauma-aware classroom strategies, family tree project alternatives, and handling mother’s/father’s day.',
    pages: '12 Pages',
    fileType: 'PDF Guide + Teacher Letter',
    downloads: '9,800+ Downloads',
    badge: 'School Essential'
  },
  {
    id: 'tk-3',
    title: 'The Home Study Readiness & Document Audit Binder',
    description: 'A master checklist containing every vital document, financial disclosure affidavit, physical safety requirement, and reference interview prompt.',
    pages: '24 Pages',
    fileType: 'Interactive Checklist PDF',
    downloads: '21,500+ Downloads',
    badge: 'Most Popular'
  },
  {
    id: 'tk-4',
    title: 'Post-Placement Sensory Diet & Regulation Plan',
    description: 'Designed with pediatric occupational therapists: 40 sensory integration exercises, weighted blanket protocols, and oral sensory soothers for the first 90 days.',
    pages: '18 Pages',
    fileType: 'Therapy Companion PDF',
    downloads: '11,400+ Downloads',
    badge: 'OT Approved'
  }
];

const ESSENTIAL_BOOKS = [
  {
    title: 'The Connected Child',
    author: 'Dr. Karyn B. Purvis & Dr. David R. Cross',
    description: 'The foundational textbook of Trust-Based Relational Intervention (TBRI), offering practical solutions for attachment and sensory challenges.',
    category: 'Attachment Clinical'
  },
  {
    title: 'The Primal Wound: Understanding the Adopted Child',
    author: 'Nancy Verrier',
    description: 'A groundbreaking exploration of the profound psychological and emotional impact of mother-child separation on the developing psyche.',
    category: 'Adoptee Psychology'
  },
  {
    title: 'Twenty Things Adopted Kids Wish Their Parents Knew',
    author: 'Sherrie Eldridge',
    description: 'Written by an adult adoptee, providing honest guidance on loss, trust, guilt, and honoring the child’s emotional truth.',
    category: 'Parent Guidance'
  },
  {
    title: 'In Their Voices: Black Americans on Transracial Adoption',
    author: 'Rhonda M. Roorda',
    description: 'Critical perspectives from adult adoptees on race, racism, cultural disconnection, and what parents must do to ensure healthy racial identity.',
    category: 'Transracial Parenting'
  }
];

export default function BlogArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [bookmarkedArticles, setBookmarkedArticles] = useState<string[]>([]);
  const [activeArticleModal, setActiveArticleModal] = useState<Article | null>(null);
  const [downloadSuccessModal, setDownloadSuccessModal] = useState<string | null>(null);

  // Readiness Quiz State
  const [quizStep, setQuizStep] = useState<number>(0);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarkedArticles((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredArticles = useMemo(() => {
    return ARTICLES_DATABASE.filter((article) => {
      const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === '' ||
        article.title.toLowerCase().includes(q) ||
        article.subtitle.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.author.name.toLowerCase().includes(q) ||
        article.tags.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const quizQuestions = [
    {
      q: 'When your child has an intense emotional meltdown, how do you naturally react?',
      answers: [
        { text: 'I focus on immediate behavioral correction and consequences.', score: 1 },
        { text: 'I pause, regulate my own nervous system, and connect emotionally before addressing behavior.', score: 3 },
        { text: 'I send them to their room for a quiet time-out.', score: 1 },
        { text: 'I get anxious and try to distract them with treats.', score: 2 }
      ]
    },
    {
      q: 'How do you view open adoption and ongoing communication with biological relatives?',
      answers: [
        { text: 'As a vital, healthy right for my child that removes secrets and promotes identity wholeness.', score: 3 },
        { text: 'As a potential threat that might confuse who the "real" parents are.', score: 1 },
        { text: 'I am open to letters and photos, but cautious about in-person visits.', score: 2 },
        { text: 'I prefer completely closed records so we have full independence.', score: 1 }
      ]
    },
    {
      q: 'How prepared are you to actively engage with your child’s racial and cultural heritage?',
      answers: [
        { text: 'We believe love is colorblind; culture is secondary.', score: 1 },
        { text: 'We are willing to move neighborhoods, change schools, and seek mentors who reflect their heritage.', score: 3 },
        { text: 'We will read books about their country during international holidays.', score: 2 },
        { text: 'We have not yet thought deeply about transracial parenting.', score: 1 }
      ]
    }
  ];

  const handleQuizAnswer = (score: number) => {
    const nextScore = quizScore + score;
    setQuizScore(nextScore);
    if (quizStep + 1 < quizQuestions.length) {
      setQuizStep(quizStep + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizScore(0);
    setQuizCompleted(false);
  };

  return (
    <div className="rk-blog-master-container min-h-screen bg-[#FAF9F6] text-[#1E293B] antialiased">
      {/* --- PAGE-SPECIFIC SCOPED CSS --- */}
      <style>{`
        .rk-blog-master-container {
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

        .rk-card-article {
          background: #ffffff;
          border: 1px solid var(--rk-silk-border);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .rk-card-article:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px -6px rgba(11, 22, 38, 0.08);
          border-color: #D3CAC0;
        }

        .rk-hero-magazine {
          background: radial-gradient(circle at 100% 0%, #F5EDE4 0%, #FAF9F6 50%, #FAF9F6 100%);
        }
      `}</style>

      {/* ── BREADCRUMB STRIP ── */}
      <div className="bg-[#F4EFE6] border-b border-[#E5DFD5] py-3.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#64748B]">
          <a href="/" className="hover:text-[#0B1626] transition-colors">Home</a>
          <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8]" />
          <a href="/resources" className="hover:text-[#0B1626] transition-colors">Resources</a>
          <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8]" />
          <span className="text-[#BC4F32] font-semibold">The Adoption Journal & Clinical Library</span>
        </div>
      </div>

      {/* ── SECTION 1: EDITORIAL MASTHEAD & HERO COVER STORY ── */}
      <section className="rk-hero-magazine pt-16 pb-20 border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-4 mb-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDF5F1] border border-[#BC4F32]/25 text-xs font-semibold text-[#BC4F32]">
              <Sparkles className="w-4 h-4 text-[#BC4F32]" />
              <span>Vol. XV · Peer-Reviewed Child Welfare & Family Journal</span>
            </div>
            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#0B1626] font-normal leading-[1.12]">
              The RK-Adoption Journal: Evidence, Compassion & Lived Truth
            </h1>
            <p className="text-base text-[#475569] font-light leading-relaxed">
              Where clinical neuroscience meets the daily reality of adoptive parenting, birth family grace, and adult adoptee perspectives.
            </p>
          </div>

          {/* Lead Cover Story Card */}
          <div className="rk-card-article rounded-3xl overflow-hidden border border-[#E5DFD5] shadow-xl bg-white grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 relative min-h-[360px] lg:min-h-full">
              <img
                src={ARTICLES_DATABASE[0].coverImage}
                alt="Lead story cover"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#BC4F32] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                Featured Cover Story
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs text-[#64748B]">
                  <span className="font-semibold text-[#BC4F32] uppercase tracking-wider">Attachment & Neuroscience</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{ARTICLES_DATABASE[0].readTime}</span>
                  </div>
                  {ARTICLES_DATABASE[0].hasAudio && (
                    <>
                      <span>•</span>
                      <div className="flex items-center gap-1 text-[#185265] font-semibold">
                        <Headphones className="w-3.5 h-3.5" />
                        <span>Audio Available</span>
                      </div>
                    </>
                  )}
                </div>

                <h2 className="font-serif-display text-2xl sm:text-3xl text-[#0B1626] font-semibold leading-tight hover:text-[#BC4F32] transition-colors cursor-pointer"
                    onClick={() => setActiveArticleModal(ARTICLES_DATABASE[0])}>
                  {ARTICLES_DATABASE[0].title}
                </h2>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed line-clamp-3">
                  {ARTICLES_DATABASE[0].excerpt}
                </p>

                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E5DFD5] text-xs text-[#0B1626] italic">
                  <strong>Clinical Axiom: </strong>"{ARTICLES_DATABASE[0].keyTakeaway}"
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5DFD5] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={ARTICLES_DATABASE[0].author.avatar}
                    alt={ARTICLES_DATABASE[0].author.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#E5DFD5]"
                  />
                  <div>
                    <div className="text-xs font-bold text-[#0B1626]">{ARTICLES_DATABASE[0].author.name}</div>
                    <div className="text-[11px] text-[#64748B]">{ARTICLES_DATABASE[0].author.role}</div>
                  </div>
                </div>

                <button
                  onClick={() => setActiveArticleModal(ARTICLES_DATABASE[0])}
                  className="px-4 py-2 rounded-xl bg-[#BC4F32] hover:bg-[#A54127] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: CURATED FILTER BAR & SEARCH ENGINE ── */}
      <section className="py-6 bg-white border-b border-[#E5DFD5] sticky top-[72px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full no-scrollbar">
              {ARTICLE_CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`whitespace-nowrap px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-[#0B1626] text-white shadow-sm'
                        : 'bg-[#F4EFE6] text-[#475569] hover:bg-[#EAE2D5] hover:text-[#0B1626]'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Quick Keyword Search */}
            <div className="relative min-w-[240px] flex-1 sm:flex-initial">
              <Search className="w-4 h-4 text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, topics, authors..."
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-[#E5DFD5] text-xs text-[#0B1626] placeholder-[#94A3B8] focus:outline-none focus:border-[#BC4F32]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE EDITOR'S CHOICE / FEATURED ARTICLE GRID ── */}
      <section className="py-16 bg-[#FAF9F6] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10 flex items-center justify-between flex-wrap gap-4">
            <div>
              <span className="text-xs font-bold text-[#BC4F32] uppercase tracking-wider">Curated Collections</span>
              <h2 className="font-serif-display text-3xl text-[#0B1626] font-normal mt-1">
                Essential Reading for Every Stage
              </h2>
            </div>
            <div className="text-xs text-[#64748B]">
              Showing {filteredArticles.length} {filteredArticles.length === 1 ? 'Article' : 'Articles'}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => {
              const isBookmarked = bookmarkedArticles.includes(article.id);
              return (
                <div
                  key={article.id}
                  onClick={() => setActiveArticleModal(article)}
                  className="rk-card-article rounded-2xl overflow-hidden bg-white border border-[#E5DFD5] flex flex-col justify-between cursor-pointer group"
                >
                  <div>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={article.coverImage}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <button
                        onClick={(e) => toggleBookmark(article.id, e)}
                        className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm text-[#0B1626] hover:text-[#BC4F32] shadow-sm transition-colors"
                        title={isBookmarked ? 'Remove bookmark' : 'Bookmark article'}
                      >
                        <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-[#BC4F32] text-[#BC4F32]' : ''}`} />
                      </button>
                      <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-[#0B1626]/80 backdrop-blur-sm text-white text-[10px] font-semibold tracking-wider uppercase">
                        {article.category}
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-2 text-[11px] text-[#64748B]">
                        <span>{article.date}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>

                      <h3 className="font-serif-display text-xl text-[#0B1626] font-semibold leading-snug group-hover:text-[#BC4F32] transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-xs text-[#475569] leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-[#E5DFD5]/60 mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={article.author.avatar}
                        alt={article.author.name}
                        className="w-8 h-8 rounded-full object-cover border border-[#E5DFD5]"
                      />
                      <span className="text-xs font-semibold text-[#0B1626]">{article.author.name}</span>
                    </div>

                    <span className="text-xs font-bold text-[#BC4F32] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      <span>Read</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: THE SCIENCE OF ATTACHMENT & FELT SAFETY (CLINICAL PILLAR) ── */}
      <section className="py-16 bg-white border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF4F7] text-[#185265] text-xs font-bold">
                <Brain className="w-4 h-4" />
                <span>The Neurobiology of Attachment</span>
              </div>

              <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B1626] font-normal leading-tight">
                How Trust-Based Relational Intervention (TBRI) Restores Brain Plasticity
              </h2>

              <p className="text-sm text-[#475569] leading-relaxed">
                When a child experiences early trauma, institutional neglect, or prenatal stress, their autonomic nervous system becomes wired for survival. Cortisol and adrenaline surges keep them trapped in hyperarousal or dissociative freeze states.
              </p>

              <div className="space-y-4 text-xs text-[#334155]">
                <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#E5DFD5] space-y-1">
                  <div className="font-bold text-[#BC4F32]">1. Empowering Principles (Physiological Regulation):</div>
                  <p>Stabilizing blood sugar with high-protein snacks every two hours, sensory integration, and hydration to settle the amygdala.</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#E5DFD5] space-y-1">
                  <div className="font-bold text-[#C59A3F]">2. Connecting Principles (Relational Attachment):</div>
                  <p>Gentle, soft eye contact, playful engagement, and attunement to build the dorsal vagal safety circuit.</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#E5DFD5] space-y-1">
                  <div className="font-bold text-[#185265]">3. Correcting Principles (Proactive Behavioral Re-teaching):</div>
                  <p>Teaching choices, compromises, and emotional re-dos before anger erupts, always returning to immediate repair.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0B1626] to-[#122238] text-white shadow-xl space-y-6">
                <span className="text-xs uppercase tracking-wider text-[#C59A3F] font-bold">Clinical Case Spotlight</span>
                <h3 className="font-serif-display text-2xl font-semibold">
                  "Healing happens in the presence of an attuned, predictable adult nervous system."
                </h3>
                <p className="text-xs text-[#CBD5E1] leading-relaxed">
                  Adoptive parents often ask: "Why does our child reject hugs or scream during peaceful dinner moments?" The answer lies in fear of vulnerability. A child who has known starvation or abandonment tests the container until they know it cannot break.
                </p>

                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 space-y-2 text-xs">
                  <div className="font-bold text-white">Daily Regulation Script:</div>
                  <p className="italic text-[#E2E8F0]">
                    "You are safe here. You are with me. No matter what big feelings you have right now, you cannot break our connection. We will sit together until your breathing is soft."
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href="/process/guide"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#C59A3F] hover:underline"
                  >
                    <span>Read Our Complete TBRI Training Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: TRANSRACIAL & CULTURAL HERITAGE COMPENDIUM ── */}
      <section className="py-16 bg-[#FAF9F6] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#BC4F32] uppercase tracking-wider">Cultural Integrity</span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B1626] font-normal mt-2">
              The Four Pillars of Transracial Parenting with Dignity
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              When family skin tones or cultural roots differ, parents have a non-negotiable obligation to dismantle cultural isolation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rk-card-article rounded-2xl p-6 bg-white border border-[#E5DFD5] space-y-3">
              <div className="w-9 h-9 rounded-xl bg-[#FDF5F1] text-[#BC4F32] flex items-center justify-center font-bold text-xs">
                01
              </div>
              <h4 className="font-serif-display text-lg font-semibold text-[#0B1626]">Racial Mirrors</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Ensure your pediatrician, teachers, close family friends, and spiritual leaders include adults who share your child's racial background. A child should never be the only person of color in their home, school, or friend group.
              </p>
            </div>

            <div className="rk-card-article rounded-2xl p-6 bg-white border border-[#E5DFD5] space-y-3">
              <div className="w-9 h-9 rounded-xl bg-[#FAF4E5] text-[#C59A3F] flex items-center justify-center font-bold text-xs">
                02
              </div>
              <h4 className="font-serif-display text-lg font-semibold text-[#0B1626]">Textured Hair & Skincare</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Haircare for Black and brown children is deeply cultural, physical, and emotional. Learn bonnet preservation, satin pillowcases, protective styling, moisture sealing, and celebrate trips to cultural salons from toddlerhood.
              </p>
            </div>

            <div className="rk-card-article rounded-2xl p-6 bg-white border border-[#E5DFD5] space-y-3">
              <div className="w-9 h-9 rounded-xl bg-[#EBF4F7] text-[#185265] flex items-center justify-center font-bold text-xs">
                03
              </div>
              <h4 className="font-serif-display text-lg font-semibold text-[#0B1626]">Confronting Bias & Microaggressions</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Do not teach children to ignore race. Give them vocabulary to recognize and combat microaggressions at school, store checkouts, or playgrounds. Parents must stand as fearless public advocates.
              </p>
            </div>

            <div className="rk-card-article rounded-2xl p-6 bg-white border border-[#E5DFD5] space-y-3">
              <div className="w-9 h-9 rounded-xl bg-[#F4EFE6] text-[#0B1626] flex items-center justify-center font-bold text-xs">
                04
              </div>
              <h4 className="font-serif-display text-lg font-semibold text-[#0B1626]">Heritage Trips & Language</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Support native language learning, culinary cooking classes, and planned heritage pilgrimages back to their country or region of birth when the child is ready, centering their personal voice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: BIRTH FAMILY PERSPECTIVES & ETHICAL STEWARDSHIP ── */}
      <section className="py-16 bg-white border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="rk-card-article rounded-3xl p-8 sm:p-12 bg-[#FAF8F5] border border-[#E5DFD5]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 space-y-4">
                <Quote className="w-10 h-10 text-[#C59A3F]" />
                <h3 className="font-serif-display text-3xl text-[#0B1626] font-normal leading-tight">
                  "Adoption begins with profound loss. To honor our children, we must honor the mothers who carried them."
                </h3>
                <p className="text-xs text-[#64748B]">
                  — Excerpt from our annual Birth Mother Roundtable symposium.
                </p>
              </div>

              <div className="lg:col-span-8 space-y-4 text-xs sm:text-sm text-[#475569] leading-relaxed">
                <p>
                  In traditional adoption culture, birth parents were often erased from family dialogue or spoken of solely in hushed whispers. Modern ethical practice demands radical transparency and deep respect.
                </p>
                <p>
                  Birth mothers do not "give up" their babies casually. They make excruciating, self-sacrificing decisions in the face of poverty, lack of family support, or systemic hardship. Acknowledging their grief, sending regular milestones, and celebrating their birthday in your household removes shame from your child's genetic identity.
                </p>
                <div className="p-4 rounded-xl bg-white border border-[#E5DFD5] flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <div className="font-bold text-[#0B1626] text-xs">Explore Birth Family Support Resources</div>
                    <div className="text-[11px] text-[#64748B]">Counseling stipends, grief retreats, and contact portals.</div>
                  </div>
                  <a
                    href="/families/birth"
                    className="px-4 py-2 rounded-xl bg-[#BC4F32] hover:bg-[#A54127] text-white text-xs font-semibold transition-colors"
                  >
                    View Birth Parent Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: PROSPECTIVE PARENT PLAYBOOK: "SURVIVING THE WAIT" ── */}
      <section className="py-16 bg-[#FAF9F6] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold text-[#BC4F32] uppercase tracking-wider">Parental Resilience</span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B1626] font-normal mt-2">
              Actionable Habits for Navigating the Waiting Period
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              The window between home study approval and child matching is fraught with emotional uncertainty. How to prepare your home and mind productively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white border border-[#E5DFD5] space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#FDF5F1] text-[#BC4F32] flex items-center justify-center font-bold text-xs">
                A
              </div>
              <h4 className="font-serif-display text-lg font-semibold text-[#0B1626]">Build Your Support Circle Early</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Educate grandparents, aunts, and close friends on trauma-informed adoption before the child arrives. Explain why visitor restrictions during the first 30 days are essential for attachment.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E5DFD5] space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#FAF4E5] text-[#C59A3F] flex items-center justify-center font-bold text-xs">
                B
              </div>
              <h4 className="font-serif-display text-lg font-semibold text-[#0B1626]">Financial Health & Debt Elimination</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Utilize the wait to eliminate consumer debt, establish a 6-month emergency reserve, and investigate your employer's paid parental leave policies for adoptive families.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E5DFD5] space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#EBF4F7] text-[#185265] flex items-center justify-center font-bold text-xs">
                C
              </div>
              <h4 className="font-serif-display text-lg font-semibold text-[#0B1626]">Take The Vacation You Need Now</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Do not stop living your life while awaiting the call. Travel, invest in your marriage, practice mindfulness, and recharge your emotional reserves for the demanding days of new parenthood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: CHILD DEVELOPMENT MILESTONES BY AGE STAGE ── */}
      <section className="py-16 bg-white border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#BC4F32] uppercase tracking-wider">Lifelong Identity Journey</span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B1626] font-normal mt-2">
              How Children Understand Adoption: Developmental Milestones
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              As cognitive complexity grows, the emotional meaning of adoption transforms. Understand what to expect at each stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#E5DFD5] space-y-3">
              <span className="text-xs font-bold text-[#BC4F32] uppercase tracking-wider">Ages 2 to 5</span>
              <h4 className="font-serif-display text-lg font-semibold text-[#0B1626]">The Wonder Stage</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Children love hearing their arrival story as a bedtime fairytale. They do not yet understand that adoption also involves loss or separation from another family.
              </p>
              <div className="text-[11px] font-semibold text-[#BC4F32] pt-2">Focus: Normalize adoption vocabulary early.</div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#E5DFD5] space-y-3">
              <span className="text-xs font-bold text-[#C59A3F] uppercase tracking-wider">Ages 6 to 9</span>
              <h4 className="font-serif-display text-lg font-semibold text-[#0B1626]">The Realization of Loss</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Children grasp that to gain their adoptive family, they lost their birth family. Questions about "Why was I given up?" and temporary sadness frequently emerge.
              </p>
              <div className="text-[11px] font-semibold text-[#C59A3F] pt-2">Focus: Validate feelings of grief without defensiveness.</div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#E5DFD5] space-y-3">
              <span className="text-xs font-bold text-[#185265] uppercase tracking-wider">Ages 10 to 13</span>
              <h4 className="font-serif-display text-lg font-semibold text-[#0B1626]">Peer Comparisons & Privacy</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Middle-schoolers desire to blend in. They may feel sensitive about being asked personal questions at school and must learn that their story belongs solely to them.
              </p>
              <div className="text-[11px] font-semibold text-[#185265] pt-2">Focus: Rehearse scripts for school inquiries.</div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#E5DFD5] space-y-3">
              <span className="text-xs font-bold text-[#0B1626] uppercase tracking-wider">Ages 14 to 18+</span>
              <h4 className="font-serif-display text-lg font-semibold text-[#0B1626]">Identity Synthesis & Reunion</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Teens weave biological genetics, adoptive family values, and personal identity into an authentic self. Curiosity about searching for biological relatives is common.
              </p>
              <div className="text-[11px] font-semibold text-[#0B1626] pt-2">Focus: Actively partner in their search for answers.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: INTERACTIVE ADOPTION READINESS SELF-REFLECTION ── */}
      <section className="py-16 bg-[#FAF8F5] border-b border-[#E5DFD5]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="rk-card-article rounded-3xl p-8 sm:p-12 bg-white border border-[#E5DFD5] shadow-lg">
            <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF4E5] text-[#C59A3F] text-xs font-semibold">
                <Star className="w-4 h-4" />
                <span>Interactive Self-Assessment</span>
              </div>
              <h2 className="font-serif-display text-3xl text-[#0B1626] font-normal">
                Adoption Readiness & Attachment Reflection
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B]">
                Take this 3-question clinical reflection to gauge your preparedness for the unique emotional demands of trauma-informed adoptive parenting.
              </p>
            </div>

            {!quizCompleted ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between text-xs text-[#64748B] pb-2 border-b border-[#E5DFD5]">
                  <span>Question {quizStep + 1} of {quizQuestions.length}</span>
                  <div className="flex gap-1.5">
                    {quizQuestions.map((_, i) => (
                      <span
                        key={i}
                        className={`w-6 h-1.5 rounded-full ${
                          i === quizStep ? 'bg-[#BC4F32]' : i < quizStep ? 'bg-[#0B1626]' : 'bg-[#E5DFD5]'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <h3 className="font-serif-display text-xl sm:text-2xl text-[#0B1626] font-semibold">
                  {quizQuestions[quizStep].q}
                </h3>

                <div className="space-y-3">
                  {quizQuestions[quizStep].answers.map((answer, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuizAnswer(answer.score)}
                      className="w-full text-left p-4 rounded-xl border border-[#E5DFD5] hover:border-[#BC4F32] hover:bg-[#FDF5F1] text-xs sm:text-sm text-[#334155] transition-all flex items-center justify-between group"
                    >
                      <span>{answer.text}</span>
                      <ArrowRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#BC4F32] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#EBF4F7] text-[#185265] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif-display text-2xl text-[#0B1626] font-semibold">
                  Reflection Complete
                </h3>
                <p className="text-sm text-[#475569] max-w-lg mx-auto leading-relaxed">
                  {quizScore >= 8 ? (
                    <span>
                      <strong className="text-[#185265]">Exceptional Preparedness: </strong> Your responses reflect an advanced, child-centered understanding of trauma, open communication, and cultural identity. You are ready to engage deeply in pre-placement education.
                    </span>
                  ) : (
                    <span>
                      <strong className="text-[#BC4F32]">Growth Areas Identified: </strong> Like most prospective parents, you have traditional instincts around discipline and secrecy. Our 24-hour TBRI training modules will guide you in unlearning conventional methods to embrace trauma-informed attunement.
                    </span>
                  )}
                </p>
                <div className="pt-4 flex items-center justify-center gap-4 flex-wrap">
                  <button
                    onClick={resetQuiz}
                    className="px-4 py-2 rounded-xl border border-[#E5DFD5] text-xs font-semibold text-[#0B1626] hover:bg-[#FAF8F5]"
                  >
                    Retake Reflection
                  </button>
                  <a
                    href="/process/guide"
                    className="px-5 py-2 rounded-xl bg-[#BC4F32] text-white text-xs font-semibold hover:bg-[#A54127]"
                  >
                    Explore Pre-Adoption Education Curriculum
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── SECTION 10: THE HEALTHCARE & PEDIATRICS CLINICAL GUIDE ── */}
      <section className="py-16 bg-white border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-[#BC4F32] uppercase tracking-wider">Clinical Guidance</span>
              <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B1626] font-normal leading-tight">
                Specialized Healthcare Preparation for Newly Formed Families
              </h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                General pediatric practices are often unfamiliar with the subtle complexities of institutional transitions, parasite screening, or rapid catch-up growth.
              </p>

              <div className="space-y-3 text-xs text-[#475569]">
                <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-[#E5DFD5]">
                  <strong className="text-[#0B1626]">Post-Arrival Laboratory Screening: </strong>
                  Comprehensive testing for lead toxicity, latent tuberculosis, stool ova/parasites, and nutritional deficiencies is standard for all arrivals within 14 days.
                </div>
                <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-[#E5DFD5]">
                  <strong className="text-[#0B1626]">Pediatric Dental & Oral Health: </strong>
                  Early bottle cavities, enamel hypoplasia, and dental trauma are gently treated under trauma-aware pediatric dental protocols.
                </div>
                <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-[#E5DFD5]">
                  <strong className="text-[#0B1626]">Sensory Integration Occupational Therapy: </strong>
                  Addressing vestibular and tactile sensitivities (food textures, sock seams, loud sounds) through structured sensory diets.
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD5] space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#185265] text-white flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif-display text-xl font-semibold text-[#0B1626]">Adoption Medical Directory</h3>
                    <p className="text-xs text-[#64748B]">Board-Certified Specialists Across 40+ States</p>
                  </div>
                </div>

                <p className="text-xs text-[#475569] leading-relaxed">
                  RK-Adoption maintains a verified network of over 120 pediatricians, developmental psychologists, and speech therapists who have completed specialized fellowships in post-adoption trauma.
                </p>

                <div className="p-4 rounded-2xl bg-white border border-[#E5DFD5] space-y-2 text-xs">
                  <div className="font-semibold text-[#0B1626]">Available Consultations:</div>
                  <p className="text-[#64748B]">Pre-referral video reviews, international growth chart evaluations, and tele-health follow-up care for out-of-state families.</p>
                </div>

                <a
                  href="/contact"
                  className="block text-center w-full py-3 rounded-xl bg-[#185265] hover:bg-[#124151] text-white font-semibold text-xs transition-colors"
                >
                  Request Medical Specialist Referral
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 11: DOWNLOADABLE TOOLKITS & PRINTABLE WORKBOOKS ── */}
      <section className="py-16 bg-[#FAF9F6] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold text-[#BC4F32] uppercase tracking-wider">Free Educational Toolkits</span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B1626] font-normal mt-2">
              Downloadable Workbooks & Practical Guides
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Ready-to-use clinical workbooks, school letters, and narrative templates developed by our senior social work faculty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DOWNLOADABLE_TOOLKITS.map((tk) => (
              <div
                key={tk.id}
                className="rk-card-article rounded-3xl p-8 bg-white border border-[#E5DFD5] space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FAF4E5] text-[#C59A3F]">
                      {tk.badge}
                    </span>
                    <span className="text-xs text-[#64748B]">{tk.downloads}</span>
                  </div>

                  <h3 className="font-serif-display text-2xl text-[#0B1626] font-semibold">
                    {tk.title}
                  </h3>

                  <p className="text-xs text-[#475569] leading-relaxed">
                    {tk.description}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-[#64748B] pt-2 border-t border-[#E5DFD5]">
                    <div className="flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5 text-[#BC4F32]" />
                      <span>{tk.pages}</span>
                    </div>
                    <span>•</span>
                    <span>{tk.fileType}</span>
                  </div>
                </div>

                <button
                  onClick={() => setDownloadSuccessModal(tk.title)}
                  className="w-full py-3 rounded-xl bg-[#0B1626] hover:bg-[#122238] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <Download className="w-4 h-4 text-[#C59A3F]" />
                  <span>Download Free Toolkit</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 12: VOICES OF ADULT ADOPTEES (LIVED EXPERIENCE SERIES) ── */}
      <section className="py-16 bg-white border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#BC4F32] uppercase tracking-wider">Lived Experience</span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B1626] font-normal mt-2">
              Voices of Adult Adoptees: What We Needed Our Parents to Know
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Adoption research must center those who have lived it. First-person reflections from adult adoptees now thriving in adulthood.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rk-card-article rounded-2xl p-6 bg-[#FAF9F6] border border-[#E5DFD5] space-y-4">
              <Quote className="w-8 h-8 text-[#BC4F32]" />
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed italic">
                "The greatest gift my parents gave me was letting me be sad about my biological family without feeling like they had failed. When they held space for my grief, I knew their love was unconditional."
              </p>
              <div className="pt-3 border-t border-[#E5DFD5]">
                <div className="text-xs font-bold text-[#0B1626]">Julian Kim, Age 31</div>
                <div className="text-[11px] text-[#64748B]">Adopted from South Korea at 8 Months</div>
              </div>
            </div>

            <div className="rk-card-article rounded-2xl p-6 bg-[#FAF9F6] border border-[#E5DFD5] space-y-4">
              <Quote className="w-8 h-8 text-[#C59A3F]" />
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed italic">
                "Being adopted into a white family in a suburban town meant I stood out everywhere. When my parents actively relocated us to a diverse city, they proved that my cultural well-being came before their comfort."
              </p>
              <div className="pt-3 border-t border-[#E5DFD5]">
                <div className="text-xs font-bold text-[#0B1626]">Camila Vasquez, Age 27</div>
                <div className="text-[11px] text-[#64748B]">Domestic Transracial Adoptee</div>
              </div>
            </div>

            <div className="rk-card-article rounded-2xl p-6 bg-[#FAF9F6] border border-[#E5DFD5] space-y-4">
              <Quote className="w-8 h-8 text-[#185265]" />
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed italic">
                "At age 19, when I decided to search for my birth mother, my adoptive mom helped me organize the letters and drove me to the courthouse. That made me love her ten times more."
              </p>
              <div className="pt-3 border-t border-[#E5DFD5]">
                <div className="text-xs font-bold text-[#0B1626]">Marcus Taylor, Age 24</div>
                <div className="text-[11px] text-[#64748B]">Foster Care Alumni Adoptee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 13: RECOMMENDED READING & ESSENTIAL LITERATURE MATRIX ── */}
      <section className="py-16 bg-[#FAF8F5] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#BC4F32] uppercase tracking-wider">Curated Bibliography</span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B1626] font-normal mt-2">
              Seminal Literature Every Adoptive Family Should Read
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Our clinical faculty recommends these foundational books for your personal family library.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ESSENTIAL_BOOKS.map((book, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#E5DFD5] space-y-3 flex flex-col justify-between shadow-sm"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#F4EFE6] text-[#BC4F32]">
                    {book.category}
                  </span>
                  <h4 className="font-serif-display text-lg font-semibold text-[#0B1626] leading-snug">
                    {book.title}
                  </h4>
                  <p className="text-xs font-medium text-[#C59A3F]">{book.author}</p>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {book.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E5DFD5]">
                  <span className="text-[11px] text-[#64748B]">Available at major independent bookshops</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 14: ON-DEMAND WEBINAR & PODCAST LIBRARY ── */}
      <section className="py-16 bg-white border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold text-[#BC4F32] uppercase tracking-wider">Multimedia Briefings</span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B1626] font-normal mt-2">
              On-Demand Webinars & Audio Roundtables
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Listen to pediatric neurologists, adoption attorneys, and experienced parents explore critical topics on your commute.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rk-card-article rounded-2xl p-6 bg-[#FAF9F6] border border-[#E5DFD5] flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#0B1626] text-[#C59A3F] flex items-center justify-center shrink-0 shadow-md">
                <Video className="w-7 h-7" />
              </div>
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2 text-[11px] text-[#64748B]">
                  <span className="text-[#BC4F32] font-semibold">Video Masterclass</span>
                  <span>•</span>
                  <span>48 mins</span>
                </div>
                <h4 className="font-serif-display text-xl text-[#0B1626] font-semibold">
                  De-escalating Childhood Rage: Sensory Regulation in Real Time
                </h4>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Join Dr. Aris Thorne as she demonstrates actual physical regulation postures, breathwork games, and voice modulation techniques.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => alert('Webinar stream playing. In production, this launches the embedded video player.')}
                    className="text-xs font-bold text-[#0B1626] hover:text-[#BC4F32] flex items-center gap-1"
                  >
                    <span>Watch Webinar Free (Includes Slides)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="rk-card-article rounded-2xl p-6 bg-[#FAF9F6] border border-[#E5DFD5] flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#BC4F32] text-white flex items-center justify-center shrink-0 shadow-md">
                <Headphones className="w-7 h-7" />
              </div>
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2 text-[11px] text-[#64748B]">
                  <span className="text-[#BC4F32] font-semibold">Podcast Episode 42</span>
                  <span>•</span>
                  <span>34 mins</span>
                </div>
                <h4 className="font-serif-display text-xl text-[#0B1626] font-semibold">
                  Navigating the First Visit With Biological Grandparents
                </h4>
                <p className="text-xs text-[#475569] leading-relaxed">
                  How to prepare your child, establish safe physical boundaries, and create positive photo memories during an open adoption reunion.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => alert('Audio stream loading. In production, this launches the embedded audio player.')}
                    className="text-xs font-bold text-[#0B1626] hover:text-[#BC4F32] flex items-center gap-1"
                  >
                    <span>Listen on Web or Spotify</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 15: CLINICAL EDITORIAL BOARD & AUTHOR ROSTER ── */}
      <section className="py-16 bg-[#FAF9F6] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#BC4F32] uppercase tracking-wider">Academic Rigor</span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B1626] font-normal mt-2">
              Our Clinical Editorial Review Board
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Every guide, article, and toolkit published in our journal is peer-reviewed by licensed child welfare authorities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#E5DFD5] text-center space-y-3">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80"
                alt="Dr. Aris Thorne"
                className="w-20 h-20 rounded-full object-cover mx-auto border-2 border-[#E5DFD5]"
              />
              <h4 className="font-serif-display text-lg font-semibold text-[#0B1626]">Dr. Aris Thorne, MD</h4>
              <p className="text-xs text-[#BC4F32] font-semibold">Pediatric Neurodevelopment</p>
              <p className="text-[11px] text-[#64748B]">Senior Fellow in TBRI & Sensory Processing Integration.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E5DFD5] text-center space-y-3">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80"
                alt="Maya Chen-Robinson"
                className="w-20 h-20 rounded-full object-cover mx-auto border-2 border-[#E5DFD5]"
              />
              <h4 className="font-serif-display text-lg font-semibold text-[#0B1626]">Maya Chen-Robinson, LCSW</h4>
              <p className="text-xs text-[#C59A3F] font-semibold">Transcultural Social Work</p>
              <p className="text-[11px] text-[#64748B]">Specializing in transracial identity and multiracial family dynamics.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E5DFD5] text-center space-y-3">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80"
                alt="Marcus Sterling"
                className="w-20 h-20 rounded-full object-cover mx-auto border-2 border-[#E5DFD5]"
              />
              <h4 className="font-serif-display text-lg font-semibold text-[#0B1626]">Marcus Sterling, LMFT</h4>
              <p className="text-xs text-[#185265] font-semibold">Family & Marriage Therapy</p>
              <p className="text-[11px] text-[#64748B]">Pre-adoption readiness assessments and post-placement attachment.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E5DFD5] text-center space-y-3">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=256&q=80"
                alt="Dr. Evelyn Harper"
                className="w-20 h-20 rounded-full object-cover mx-auto border-2 border-[#E5DFD5]"
              />
              <h4 className="font-serif-display text-lg font-semibold text-[#0B1626]">Dr. Evelyn Harper, PsyD</h4>
              <p className="text-xs text-[#0B1626] font-semibold">Child Psychology & Grief</p>
              <p className="text-[11px] text-[#64748B]">Childhood developmental stages and trauma recovery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 16: CONTEXTUAL NEWSLETTER & CONSULTATION CTA ── */}
      <section className="py-20 bg-gradient-to-br from-[#0B1626] via-[#122238] to-[#0B1626] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-[#C59A3F]">
            <BookOpen className="w-4 h-4 text-[#C59A3F]" />
            <span>Join 28,000+ Readers of The Adoption Digest</span>
          </div>

          <h2 className="font-serif-display text-4xl sm:text-5xl font-normal max-w-3xl mx-auto leading-tight">
            Receive Monthly Evidence-Based Guidance Straight to Your Inbox
          </h2>

          <p className="text-sm sm:text-base text-[#CBD5E1] max-w-2xl mx-auto leading-relaxed">
            Every month, we curate the latest clinical research on attachment, legal legislative updates, and deeply personal essays from adoptive and birth parents. Zero spam. Complete dignity.
          </p>

          <div className="max-w-md mx-auto pt-4">
            <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing to The Adoption Digest!'); }} className="flex gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder-[#94A3B8] focus:outline-none focus:border-[#BC4F32]"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-[#BC4F32] hover:bg-[#A54127] text-white text-xs font-semibold shadow-md transition-all shrink-0"
              >
                Subscribe
              </button>
            </form>
            <p className="text-[11px] text-[#94A3B8] mt-2">
              Strict privacy. Unsubscribe at any time.
            </p>
          </div>

          <div className="pt-6 flex items-center justify-center gap-6 text-xs text-[#CBD5E1]">
            <a href="/resources/faqs" className="hover:text-white underline underline-offset-4">Read Frequently Asked Questions</a>
            <span>•</span>
            <a href="/resources/legal" className="hover:text-white underline underline-offset-4">Explore Legal Documentation Hub</a>
          </div>
        </div>
      </section>

      {/* --- ARTICLE MODAL VIEWER --- */}
      {activeArticleModal && (
        <div className="fixed inset-0 z-50 bg-[#0B1626]/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full my-8 p-8 sm:p-10 shadow-2xl border border-[#E5DFD5] space-y-6 max-h-[90vh] overflow-y-auto animate-fade-in-down">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#BC4F32]">
                  {activeArticleModal.category}
                </span>
                <h2 className="font-serif-display text-2xl sm:text-3xl text-[#0B1626] font-semibold leading-snug">
                  {activeArticleModal.title}
                </h2>
                <p className="text-xs text-[#64748B]">{activeArticleModal.subtitle}</p>
              </div>
              <button
                onClick={() => setActiveArticleModal(null)}
                className="text-[#94A3B8] hover:text-[#0B1626] p-1 rounded-lg text-xl"
              >
                ✕
              </button>
            </div>

            <div className="flex items-center gap-4 py-3 border-y border-[#E5DFD5] text-xs text-[#64748B]">
              <div className="flex items-center gap-2">
                <img
                  src={activeArticleModal.author.avatar}
                  alt={activeArticleModal.author.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="font-semibold text-[#0B1626]">{activeArticleModal.author.name}</span>
              </div>
              <span>•</span>
              <span>{activeArticleModal.date}</span>
              <span>•</span>
              <span>{activeArticleModal.readTime}</span>
            </div>

            <img
              src={activeArticleModal.coverImage}
              alt={activeArticleModal.title}
              className="w-full h-64 object-cover rounded-2xl"
            />

            <div className="space-y-4 text-xs sm:text-sm text-[#334155] leading-relaxed">
              <p className="font-semibold text-[#0B1626]">{activeArticleModal.excerpt}</p>
              <p>
                When adoptive parents begin this journey, they frequently assume that affection and safety alone will heal early trauma. However, pediatric neurology reminds us that a child who has known prolonged dysregulation registers closeness as a potential threat. To build a secure attachment, parents must understand the intricate biological dance between the sympathetic and parasympathetic nervous systems.
              </p>
              <div className="p-4 rounded-xl bg-[#FAF8F5] border-l-4 border-[#BC4F32] italic text-xs text-[#0B1626]">
                "{activeArticleModal.keyTakeaway}"
              </div>
              <p>
                By establishing predictable sensory rhythms, eliminating sudden environmental transitions, and meeting emotional outbursts with physical attunement rather than isolation, parents create the neurological conditions necessary for permanent felt safety.
              </p>
            </div>

            <div className="pt-4 border-t border-[#E5DFD5] flex items-center justify-between">
              <div className="flex gap-2">
                {activeArticleModal.tags.map((tag) => (
                  <span key={tag} className="text-[10px] px-2.5 py-1 rounded-md bg-[#FAF4E5] text-[#785C1C]">
                    #{tag}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setActiveArticleModal(null)}
                className="px-5 py-2 rounded-xl bg-[#0B1626] text-white text-xs font-semibold hover:bg-[#122238]"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- DOWNLOAD CONFIRMATION MODAL --- */}
      {downloadSuccessModal && (
        <div className="fixed inset-0 z-50 bg-[#0B1626]/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-[#E5DFD5] text-center space-y-4 animate-fade-in-down">
            <CheckCircle2 className="w-12 h-12 text-[#185265] mx-auto" />
            <h3 className="font-serif-display text-2xl text-[#0B1626] font-semibold">Download Initiated</h3>
            <p className="text-xs text-[#475569] leading-relaxed">
              Your copy of <strong>"{downloadSuccessModal}"</strong> is ready. An instant copy has also been logged for offline access.
            </p>
            <button
              onClick={() => setDownloadSuccessModal(null)}
              className="w-full py-2.5 rounded-xl bg-[#BC4F32] hover:bg-[#A54127] text-white text-xs font-semibold transition-colors"
            >
              Continue Reading Journal
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
