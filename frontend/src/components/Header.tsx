import {
    useState,
    useEffect,
    useRef,
    useCallback,
    type KeyboardEvent,
} from 'react';
import {
    Heart,
    ChevronDown,
    Menu,
    X,
    UserCircle2,
    LogIn,
    Phone,
    MapPin,
    Star,
    BookOpen,
    Users,
    Baby,
    ClipboardList,
    Sparkles,
    ArrowRight,
    Globe,
    Compass,
} from 'lucide-react';

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

interface DropdownItem {
    label: string;
    description: string;
    href: string;
    icon: React.ReactNode;
}

interface NavItem {
    label: string;
    href?: string;
    dropdown?: DropdownItem[];
}

// ─────────────────────────────────────────────
// Navigation data
// ─────────────────────────────────────────────

const NAV_ITEMS: NavItem[] = [
    { label: 'Home', href: '/' },
    {
        label: 'About',
        dropdown: [
            {
                label: 'About Overview',
                description: 'The story, heart, and governance of RK-Adoption',
                href: '/about',
                icon: <Compass size={18} className="text-sage-500" />,
            },
            {
                label: 'Our Mission',
                description: 'The values and vision driving our work',
                href: '/about/mission',
                icon: <Heart size={18} className="text-gold-500" />,
            },
            {
                label: 'Our Team',
                description: 'Compassionate professionals guiding you',
                href: '/about/team',
                icon: <Users size={18} className="text-sage-500" />,
            },
            {
                label: 'Accreditations',
                description: 'Licensed, certified, and globally recognised',
                href: '/about/accreditations',
                icon: <Star size={18} className="text-gold-500" />,
            },
            {
                label: 'Global Reach',
                description: 'Operating across 40+ countries worldwide',
                href: '/about/global',
                icon: <Globe size={18} className="text-sage-500" />,
            },
        ],
    },
    {
        label: 'Adoption',
        dropdown: [
            {
                label: 'Adoption Overview',
                description: 'Explore pathways, principles, and child matching',
                href: '/adoption',
                icon: <Compass size={18} className="text-sage-500" />,
            },
            {
                label: 'Children Available',
                description: 'Browse children awaiting loving families',
                href: '/adoption/children',
                icon: <Baby size={18} className="text-gold-500" />,
            },
            {
                label: 'Types of Adoption',
                description: 'Domestic, international, foster & more',
                href: '/adoption/types',
                icon: <BookOpen size={18} className="text-sage-500" />,
            },
            {
                label: 'Eligibility Criteria',
                description: 'Understand who can adopt',
                href: '/adoption/eligibility',
                icon: <ClipboardList size={18} className="text-gold-500" />,
            },
        ],
    },
    {
        label: 'Adoption Process',
        dropdown: [
            {
                label: 'Step-by-Step Guide',
                description: 'Understand every stage of the journey',
                href: '/process/guide',
                icon: <ClipboardList size={18} className="text-sage-500" />,
            },
            {
                label: 'Requirements',
                description: 'Documentation and legal requirements',
                href: '/process/requirements',
                icon: <BookOpen size={18} className="text-gold-500" />,
            },
            {
                label: 'Timeline',
                description: 'Realistic timelines and what to expect',
                href: '/process/timeline',
                icon: <Sparkles size={18} className="text-sage-500" />,
            },
        ],
    },
    {
        label: 'Families',
        dropdown: [
            {
                label: 'Prospective Parents',
                description: 'Resources for families starting out',
                href: '/families/prospective',
                icon: <Heart size={18} className="text-gold-500" />,
            },
            {
                label: 'Birth Families',
                description: 'Support for birth parents',
                href: '/families/birth',
                icon: <Users size={18} className="text-sage-500" />,
            },
            {
                label: 'Adoptive Families',
                description: 'Connect with our adoption community',
                href: '/families/adoptive',
                icon: <Star size={18} className="text-gold-500" />,
            },
        ],
    },
    {
        label: 'Success Stories',
        href: '/success-stories',
    },
    {
        label: 'Resources',
        dropdown: [
            {
                label: 'FAQs',
                description: 'Answers to your most common questions',
                href: '/resources/faqs',
                icon: <BookOpen size={18} className="text-sage-500" />,
            },
            {
                label: 'Blog & Articles',
                description: 'Expert insights and adoption guidance',
                href: '/resources/blog',
                icon: <Sparkles size={18} className="text-gold-500" />,
            },
            {
                label: 'Legal Information',
                description: 'Country-specific legal frameworks',
                href: '/resources/legal',
                icon: <ClipboardList size={18} className="text-sage-500" />,
            },
        ],
    },
    { label: 'Contact', href: '/contact' },
];

// ─────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────

/** Elegant SVG logo mark */
const LogoMark = () => (
    <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
    >
        <circle cx="20" cy="20" r="19" stroke="#c9941a" strokeWidth="1.5" opacity="0.4" />
        <circle cx="20" cy="20" r="15" fill="#faf8ef" />
        <path
            d="M20 28s-9-5.5-9-12a5 5 0 0 1 9-3.06A5 5 0 0 1 29 16c0 6.5-9 12-9 12z"
            fill="#c9941a"
            opacity="0.9"
        />
        <circle cx="23.5" cy="14.5" r="1.5" fill="#fdfcf7" opacity="0.9" />
        <path
            d="M13 31 Q20 27 27 31"
            stroke="#5c845c"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
        />
    </svg>
);

/** Announcement bar above header */
const AnnouncementBar = () => (
    <div
        className="announcement-bar text-center py-2 px-4"
        role="banner"
        aria-label="Site announcement"
    >
        <p className="text-xs font-medium text-ivory-100 tracking-wide flex items-center justify-center gap-2 flex-wrap">
            <Sparkles size={12} className="text-gold-300 shrink-0" aria-hidden="true" />
            <span>
                Over{' '}
                <strong className="text-white font-semibold">12,000 children</strong> have
                found their forever homes through RK-Adoption.&nbsp;
                <a
                    href="/success-stories"
                    className="underline underline-offset-2 decoration-gold-300/60 hover:decoration-white transition-colors duration-200 font-semibold text-gold-200"
                >
                    Read their stories&nbsp;&#8594;
                </a>
            </span>
            <Sparkles size={12} className="text-gold-300 shrink-0" aria-hidden="true" />
        </p>
    </div>
);

/** Desktop dropdown menu */
const DropdownMenu = ({
    items,
    isOpen,
    onItemClick,
}: {
    items: DropdownItem[];
    isOpen: boolean;
    onItemClick?: () => void;
}) => {
    if (!isOpen) return null;

    return (
        <div
            className="dropdown-panel min-w-[320px] p-2 animate-fade-in-down z-50 pointer-events-auto"
            role="menu"
            aria-label="Submenu"
        >
            {items.map((item) => (
                <a
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    onClick={onItemClick}
                    className="
            flex items-start gap-3 px-4 py-3 rounded-xl
            hover:bg-ivory-100 transition-colors duration-150 group
            focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2
          "
                >
                    <span className="mt-0.5 shrink-0 opacity-90 group-hover:opacity-100 transition-opacity">
                        {item.icon}
                    </span>
                    <span className="flex flex-col gap-0.5">
                        <span className="text-sm font-semibold text-stone-800 group-hover:text-sage-700 transition-colors">
                            {item.label}
                        </span>
                        <span className="text-xs text-stone-500 leading-relaxed">
                            {item.description}
                        </span>
                    </span>
                    <ArrowRight
                        size={14}
                        className="ml-auto mt-1 text-stone-300 group-hover:text-gold-500 group-hover:translate-x-0.5 transition-all duration-200 shrink-0"
                        aria-hidden="true"
                    />
                </a>
            ))}
        </div>
    );
};

// ─────────────────────────────────────────────
// Main Header Component
// ─────────────────────────────────────────────

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

    const headerRef = useRef<HTMLElement>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // ── Scroll handler ──
    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 12);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // ── Close dropdown on outside click or touch ──
    useEffect(() => {
        const handler = (e: MouseEvent | TouchEvent) => {
            if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                    timeoutRef.current = null;
                }
                setOpenDropdown(null);
            }
        };
        document.addEventListener('mousedown', handler);
        document.addEventListener('touchstart', handler, { passive: true });
        return () => {
            document.removeEventListener('mousedown', handler);
            document.removeEventListener('touchstart', handler);
        };
    }, []);

    // ── Cleanup timer on unmount ──
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    // ── Lock body scroll when mobile menu is open ──
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    // ── Escape key closes menus ──
    useEffect(() => {
        const onKey = (e: globalThis.KeyboardEvent) => {
            if (e.key === 'Escape') {
                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                    timeoutRef.current = null;
                }
                setOpenDropdown(null);
                setMobileOpen(false);
            }
        };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, []);

    const handleMouseEnter = useCallback((label: string) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setOpenDropdown(label);
    }, []);

    const handleMouseLeave = useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            setOpenDropdown(null);
        }, 200);
    }, []);

    const toggleDropdown = useCallback((label: string) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setOpenDropdown((prev) => (prev === label ? null : label));
    }, []);

    const closeDropdown = useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setOpenDropdown(null);
    }, []);

    const handleNavKeyDown = (
        e: KeyboardEvent<HTMLButtonElement>,
        label: string
    ) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleDropdown(label);
        }
    };

    const toggleMobileItem = (label: string) => {
        setMobileExpanded((prev) => (prev === label ? null : label));
    };

    return (
        <>
            {/* ── Component-level Dropdown Bridge Styles ── */}
            <style>{`
                .dropdown-panel::before {
                    content: '';
                    position: absolute;
                    top: -16px;
                    left: 0;
                    right: 0;
                    height: 16px;
                    background: transparent;
                    pointer-events: auto;
                }
            `}</style>

            {/* ── Skip link for accessibility ── */}
            <a
                href="#main-content"
                className="
          sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[200]
          bg-gold-500 text-white px-4 py-2 rounded-lg text-sm font-semibold
          focus:outline-none focus-visible:ring-2 focus-visible:ring-white
        "
            >
                Skip to main content
            </a>

            {/* ── Announcement Bar ── */}
            <AnnouncementBar />

            {/* ── Top contact strip ── */}
            <div className="bg-ivory-100 border-b border-ivory-200 hidden lg:block">
                <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-between">
                    <div className="flex items-center gap-5 text-xs text-stone-500">
                        <a
                            href="tel:+18001234567"
                            className="flex items-center gap-1.5 hover:text-sage-600 transition-colors"
                        >
                            <Phone size={12} aria-hidden="true" />
                            <span>+1 (800) 123-4567</span>
                        </a>
                        <span className="w-px h-3 bg-stone-300" aria-hidden="true" />
                        <a
                            href="/locations"
                            className="flex items-center gap-1.5 hover:text-sage-600 transition-colors"
                        >
                            <MapPin size={12} aria-hidden="true" />
                            <span>40+ Countries · 120+ Cities</span>
                        </a>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-stone-500">
                        <a href="/portal" className="hover:text-sage-600 transition-colors font-medium">
                            Family Portal
                        </a>
                        <span className="w-px h-3 bg-stone-300" aria-hidden="true" />
                        <a href="/for-agencies" className="hover:text-sage-600 transition-colors">
                            For Agencies
                        </a>
                        <span className="w-px h-3 bg-stone-300" aria-hidden="true" />
                        <a href="/donate" className="hover:text-gold-600 transition-colors font-medium text-gold-600">
                            &#9829; Donate
                        </a>
                    </div>
                </div>
            </div>

            {/* ── Main header ── */}
            <header
                ref={headerRef}
                className={`
          sticky top-0 z-50 w-full
          header-glass
          transition-all duration-300
          ${isScrolled ? 'shadow-header-scrolled' : 'shadow-header'}
        `}
                role="banner"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center justify-between h-[72px]">

                        {/* ── Logo ── */}
                        <a
                            href="/"
                            className="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 rounded-lg"
                            aria-label="RK-Adoption — Home"
                        >
                            <div className="transition-transform duration-300 group-hover:scale-105">
                                <LogoMark />
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="font-display text-[22px] font-semibold text-stone-800 tracking-tight group-hover:text-sage-700 transition-colors duration-200">
                                    RK<span className="text-gold-500">&#183;</span>Adoption
                                </span>
                                <span className="text-[10px] font-medium text-stone-400 tracking-[0.18em] uppercase mt-0.5">
                                    Every Child Deserves a Family
                                </span>
                            </div>
                        </a>

                        {/* ── Desktop navigation ── */}
                        <nav
                            className="hidden lg:flex items-center gap-0.5"
                            aria-label="Main navigation"
                        >
                            {NAV_ITEMS.map((item) => {
                                const hasDropdown = Boolean(item.dropdown?.length);
                                const isOpen = openDropdown === item.label;

                                return (
                                    <div
                                        key={item.label}
                                        className="relative"
                                        onMouseEnter={() => hasDropdown && handleMouseEnter(item.label)}
                                        onMouseLeave={() => hasDropdown && handleMouseLeave()}
                                    >
                                        {hasDropdown ? (
                                            <button
                                                type="button"
                                                onClick={() => toggleDropdown(item.label)}
                                                onKeyDown={(e) => handleNavKeyDown(e, item.label)}
                                                aria-expanded={isOpen}
                                                aria-haspopup="menu"
                                                className={`
                          nav-link-underline px-3 py-2 text-sm font-medium rounded-lg
                          transition-colors duration-200
                          focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400
                          ${isOpen
                                                        ? 'text-sage-700 bg-sage-50'
                                                        : 'text-stone-600 hover:text-sage-700 hover:bg-ivory-100'
                                                    }
                        `}
                                            >
                                                {item.label}
                                                <ChevronDown
                                                    size={14}
                                                    className={`
                            ml-0.5 text-stone-400 transition-transform duration-200
                            ${isOpen ? 'rotate-180 text-sage-500' : ''}
                          `}
                                                    aria-hidden="true"
                                                />
                                            </button>
                                        ) : (
                                            <a
                                                href={item.href}
                                                onClick={closeDropdown}
                                                className="
                          nav-link-underline px-3 py-2 text-sm font-medium rounded-lg
                          text-stone-600 hover:text-sage-700 hover:bg-ivory-100
                          transition-colors duration-200
                          focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400
                        "
                                            >
                                                {item.label}
                                            </a>
                                        )}

                                        {/* Dropdown */}
                                        {hasDropdown && (
                                            <DropdownMenu 
                                                items={item.dropdown!} 
                                                isOpen={isOpen} 
                                                onItemClick={closeDropdown}
                                            />
                                        )}
                                    </div>
                                );
                            })}
                        </nav>

                        {/* ── Desktop right actions ── */}
                        <div className="hidden lg:flex items-center gap-2.5">
                            <a
                                href="/login"
                                className="
                  flex items-center gap-1.5 px-4 py-2
                  text-sm font-medium text-stone-600
                  rounded-lg border border-transparent
                  hover:text-sage-700 hover:border-sage-200 hover:bg-sage-50
                  transition-all duration-200
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400
                "
                            >
                                <LogIn size={15} aria-hidden="true" />
                                Login
                            </a>

                            <a
                                href="/register"
                                className="
                  flex items-center gap-1.5 px-4 py-2
                  text-sm font-semibold text-sage-700
                  rounded-lg border-2 border-sage-300
                  hover:border-sage-500 hover:bg-sage-50
                  transition-all duration-200
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400
                "
                            >
                                <UserCircle2 size={15} aria-hidden="true" />
                                Register
                            </a>

                        </div>

                        {/* ── Mobile hamburger ── */}
                        <button
                            type="button"
                            onClick={() => setMobileOpen((prev) => !prev)}
                            aria-expanded={mobileOpen}
                            aria-controls="mobile-menu"
                            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                            className="
                lg:hidden flex items-center justify-center
                w-10 h-10 rounded-xl
                text-stone-600 hover:text-sage-700 hover:bg-ivory-100
                transition-colors duration-200
                focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400
              "
                        >
                            {mobileOpen ? (
                                <X size={22} aria-hidden="true" />
                            ) : (
                                <Menu size={22} aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* ── Mobile Drawer Backdrop ── */}
            <div
                className={`
          fixed inset-0 z-40 bg-stone-900/30 backdrop-blur-sm
          transition-opacity duration-300
          lg:hidden
          ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
                aria-hidden="true"
                onClick={() => setMobileOpen(false)}
            />

            {/* ── Mobile Drawer Panel ── */}
            <div
                id="mobile-menu"
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
                className={`
          mobile-drawer
          fixed top-0 right-0 z-50
          h-full w-full max-w-sm
          flex flex-col
          shadow-2xl
          transition-transform duration-300
          lg:hidden
          ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
            >
                {/* Drawer header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-ivory-200">
                    <a
                        href="/"
                        className="flex items-center gap-2.5"
                        onClick={() => setMobileOpen(false)}
                    >
                        <LogoMark />
                        <span className="font-display text-xl font-semibold text-stone-800">
                            RK<span className="text-gold-500">&#183;</span>Adoption
                        </span>
                    </a>
                    <button
                        type="button"
                        onClick={() => setMobileOpen(false)}
                        aria-label="Close navigation menu"
                        className="
              w-9 h-9 flex items-center justify-center rounded-xl
              text-stone-500 hover:text-stone-700 hover:bg-ivory-100
              transition-colors duration-200
              focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400
            "
                    >
                        <X size={20} aria-hidden="true" />
                    </button>
                </div>

                {/* Drawer nav items */}
                <nav
                    className="flex-1 overflow-y-auto py-3 px-3"
                    aria-label="Mobile navigation"
                >
                    {NAV_ITEMS.map((item) => {
                        const hasDropdown = Boolean(item.dropdown?.length);
                        const isExpanded = mobileExpanded === item.label;

                        return (
                            <div key={item.label} className="mb-0.5">
                                {hasDropdown ? (
                                    <>
                                        <button
                                            type="button"
                                            onClick={() => toggleMobileItem(item.label)}
                                            aria-expanded={isExpanded}
                                            className="
                        w-full flex items-center justify-between
                        px-4 py-3 rounded-xl text-sm font-medium
                        text-stone-700 hover:text-sage-700 hover:bg-ivory-100
                        transition-colors duration-150
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400
                      "
                                        >
                                            {item.label}
                                            <ChevronDown
                                                size={16}
                                                className={`
                          text-stone-400 transition-transform duration-200
                          ${isExpanded ? 'rotate-180 text-sage-500' : ''}
                        `}
                                                aria-hidden="true"
                                            />
                                        </button>

                                        <div
                                            className={`
                        overflow-hidden transition-all duration-300
                        ${isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}
                      `}
                                        >
                                            <div className="ml-3 pl-3 border-l-2 border-ivory-300 my-1 space-y-0.5">
                                                {item.dropdown!.map((sub) => (
                                                    <a
                                                        key={sub.href}
                                                        href={sub.href}
                                                        onClick={() => setMobileOpen(false)}
                                                        className="
                              flex items-center gap-3 px-3 py-2.5 rounded-lg
                              text-sm text-stone-600 hover:text-sage-700 hover:bg-ivory-100
                              transition-colors duration-150 group
                              focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400
                            "
                                                    >
                                                        <span className="shrink-0 opacity-80 group-hover:opacity-100">
                                                            {sub.icon}
                                                        </span>
                                                        <span className="font-medium">{sub.label}</span>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <a
                                        href={item.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="
                      flex items-center px-4 py-3 rounded-xl
                      text-sm font-medium text-stone-700
                      hover:text-sage-700 hover:bg-ivory-100
                      transition-colors duration-150
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400
                    "
                                    >
                                        {item.label}
                                    </a>
                                )}
                            </div>
                        );
                    })}
                </nav>

                {/* Drawer footer actions */}
                <div className="px-4 py-5 border-t border-ivory-200 space-y-3">
                    <div className="flex items-center justify-center gap-4 text-xs text-stone-400 pb-1">
                        <a
                            href="tel:+18001234567"
                            className="flex items-center gap-1 hover:text-sage-600 transition-colors"
                        >
                            <Phone size={11} aria-hidden="true" />
                            +1 (800) 123-4567
                        </a>
                        <span className="w-px h-3 bg-stone-200" aria-hidden="true" />
                        <a href="/donate" className="text-gold-500 font-semibold hover:text-gold-600 transition-colors">
                            &#9829; Donate
                        </a>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                        <a
                            href="/login"
                            onClick={() => setMobileOpen(false)}
                            className="
                flex items-center justify-center gap-1.5 py-2.5
                text-sm font-medium text-stone-600
                rounded-xl border border-stone-200
                hover:border-sage-300 hover:text-sage-700 hover:bg-sage-50
                transition-all duration-200
                focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400
              "
                        >
                            <LogIn size={14} aria-hidden="true" />
                            Login
                        </a>
                        <a
                            href="/register"
                            onClick={() => setMobileOpen(false)}
                            className="
                flex items-center justify-center gap-1.5 py-2.5
                text-sm font-semibold text-sage-700
                rounded-xl border-2 border-sage-300
                hover:border-sage-500 hover:bg-sage-50
                transition-all duration-200
                focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400
              "
                        >
                            <UserCircle2 size={14} aria-hidden="true" />
                            Register
                        </a>
                    </div>

                    <a
                        href="/begin-journey"
                        onClick={() => setMobileOpen(false)}
                        className="
              btn-cta w-full
              flex items-center justify-center gap-2 py-3 px-5
              text-sm font-semibold text-white rounded-xl
              shadow-btn-gold
              focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2
            "
                    >
                        <Heart size={15} aria-hidden="true" />
                        Begin Your Adoption Journey
                    </a>
                </div>
            </div>
        </>
    );
};

export default Header;
