import { useState } from 'react';
import {
  Eye, EyeOff, LogIn, ShieldCheck, Heart, ArrowRight,
  AlertCircle, CheckCircle2, Lock, Mail, Sparkles,
} from 'lucide-react';

// ─── Types ────────────────────────────────────────────────
interface LoginForm {
  email: string;
  password: string;
  rememberMe: boolean;
}
type LoginStatus = 'idle' | 'submitting' | 'success' | 'error';

// ─── Testimonial data ─────────────────────────────────────
const PANEL_QUOTES = [
  {
    quote: "RK-Adoption guided us through every document, every court hearing, and every fearful night. Our daughter is home — and she is everything.",
    author: "Sofia & Daniel Reyes",
    role: "Adoptive Parents — Colombia Programme",
    avatar: "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=96&q=80",
  },
  {
    quote: "As a single mother, I was told adoption would be near impossible. RK-Adoption proved every skeptic wrong. My son is four and completely thriving.",
    author: "Amara Osei",
    role: "Single Adoptive Parent — Ghana Corridor",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=96&q=80",
  },
];

// ─── Component ────────────────────────────────────────────
export default function Login() {
  const [form, setForm] = useState<LoginForm>({ email: '', password: '', rememberMe: false });
  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState<Partial<Record<keyof LoginForm, boolean>>>({});
  const [status, setStatus] = useState<LoginStatus>('idle');
  const [serverError, setServerError] = useState('');
  const [quoteIndex] = useState(() => Math.floor(Math.random() * PANEL_QUOTES.length));

  // Validation
  const errors: Partial<Record<keyof LoginForm, string>> = {};
  if (touched.email) {
    if (!form.email.trim()) errors.email = 'Email address is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Please enter a valid email address.';
  }
  if (touched.password && form.password.length < 6) errors.password = 'Password must be at least 6 characters.';

  const isFormValid =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
    form.password.length >= 6;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (serverError) setServerError('');
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setTouched(prev => ({ ...prev, [e.target.name]: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ email: true, password: true });
    if (!isFormValid) return;
    setStatus('submitting');
    setServerError('');

    /**
     * ── INTEGRATION POINT ──────────────────────────────────────────
     * Replace the simulated timeout below with your real API call:
     *
     * try {
     *   const res = await fetch('/api/auth/login', {
     *     method: 'POST',
     *     headers: { 'Content-Type': 'application/json' },
     *     body: JSON.stringify({ email: form.email, password: form.password, rememberMe: form.rememberMe }),
     *   });
     *   if (!res.ok) {
     *     const data = await res.json();
     *     throw new Error(data.message || 'Login failed.');
     *   }
     *   const { token } = await res.json();
     *   localStorage.setItem('rk_token', token); // or use context/store
     *   setStatus('success');
     *   window.location.href = '/portal'; // navigate to dashboard
     * } catch (err: unknown) {
     *   setServerError(err instanceof Error ? err.message : 'An unexpected error occurred.');
     *   setStatus('error');
     * }
     * ────────────────────────────────────────────────────────────────
     */
    await new Promise(r => setTimeout(r, 1600));
    // Demo: toggle between success and "incorrect credentials" to showcase states
    const demo = Math.random() > 0.3;
    if (demo) {
      setStatus('success');
    } else {
      setServerError('The email or password you entered is incorrect. Please try again.');
      setStatus('error');
    }
  };

  const currentQuote = PANEL_QUOTES[quoteIndex];

  return (
    <div className="rk-login-root min-h-screen flex antialiased">
      {/* ── Scoped CSS ──────────────────────────────────── */}
      <style>{`
        .rk-login-root {
          --rk-navy: #0B1626;
          --rk-rosewood: #BC4F32;
          --rk-gilt: #C59A3F;
          --rk-aegean: #185265;
          --rk-silk: #E5DFD5;
        }
        .font-serif-display { font-family: 'Cormorant Garamond', Georgia, serif; letter-spacing: -0.015em; }

        /* Glass panel on left side */
        .rk-login-panel {
          background: linear-gradient(160deg, #0B1626 0%, #122238 55%, #0f2035 100%);
        }
        .rk-login-panel-overlay {
          background: linear-gradient(to bottom, rgba(11,22,38,0.0) 0%, rgba(11,22,38,0.7) 100%);
        }

        /* Input styling */
        .rk-login-input {
          width: 100%;
          background: #fff;
          border: 1.5px solid #E5DFD5;
          border-radius: 0.875rem;
          padding: 0.875rem 1rem;
          font-size: 0.875rem;
          color: #0B1626;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          font-family: 'Inter', sans-serif;
        }
        .rk-login-input:focus {
          border-color: #BC4F32;
          box-shadow: 0 0 0 3px rgba(188,79,50,0.10);
        }
        .rk-login-input-error {
          border-color: #DC2626;
        }
        .rk-login-input-error:focus {
          box-shadow: 0 0 0 3px rgba(220,38,38,0.10);
        }
        .rk-login-input-success {
          border-color: #16A34A;
        }
        .rk-login-btn {
          background: #BC4F32;
          transition: all 0.25s ease;
          box-shadow: 0 4px 18px rgba(188,79,50,0.30);
        }
        .rk-login-btn:hover:not(:disabled) {
          background: #A54127;
          transform: translateY(-1px);
          box-shadow: 0 6px 26px rgba(188,79,50,0.42);
        }
        .rk-login-btn:disabled { opacity: 0.65; cursor: not-allowed; transform: none; }

        @keyframes rk-spin { to { transform: rotate(360deg); } }
        .rk-spinner { animation: rk-spin 0.75s linear infinite; }

        @keyframes rk-slide-up {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .rk-slide-up { animation: rk-slide-up 0.35s ease-out both; }

        @keyframes rk-fade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .rk-fade { animation: rk-fade 0.5s ease both; }

        .rk-quote-card {
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
        }
        .rk-benefit-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #C59A3F;
          flex-shrink: 0;
        }
        input:-webkit-autofill { -webkit-box-shadow: 0 0 0px 1000px #fff inset; }
      `}</style>

      {/* ══ LEFT PANEL — Brand Story ════════════════════════ */}
      <div className="rk-login-panel hidden lg:flex lg:w-[44%] xl:w-[42%] relative flex-col overflow-hidden">
        {/* Background imagery */}
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80"
          alt="Family"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="rk-login-panel-overlay absolute inset-0" />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full p-10 xl:p-14">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 mb-auto">
            <div className="w-10 h-10 rounded-xl bg-[#BC4F32] flex items-center justify-center shadow-lg">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-display text-xl font-semibold tracking-tight">
                RK<span className="text-[#C59A3F]">·</span>Adoption
              </span>
              <span className="text-white/40 text-[10px] tracking-[0.18em] uppercase mt-0.5">
                Every Child Deserves a Family
              </span>
            </div>
          </a>

          {/* Main headline */}
          <div className="mt-16 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs text-[#C59A3F] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hague Accredited · 40+ Countries</span>
            </div>
            <h2 className="font-serif-display text-4xl xl:text-5xl text-white font-normal leading-[1.1]">
              Welcome Back to<br />
              <span className="italic text-[#C59A3F]">Your Journey</span>
            </h2>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Log in to access your family portal, track application progress, and connect with your dedicated caseworker.
            </p>
          </div>

          {/* Benefits list */}
          <div className="mt-10 space-y-3">
            {[
              'Secure document vault for your adoption dossier',
              'Real-time application status tracking',
              'Direct encrypted messaging with caseworkers',
              'Scheduled home study appointment management',
            ].map(b => (
              <div key={b} className="flex items-center gap-3">
                <span className="rk-benefit-dot" />
                <span className="text-xs text-white/65">{b}</span>
              </div>
            ))}
          </div>

          {/* Testimonial card */}
          <div className="rk-quote-card mt-10 rounded-2xl p-5 space-y-3">
            <p className="text-xs text-white/80 italic leading-relaxed">
              "{currentQuote.quote}"
            </p>
            <div className="flex items-center gap-3">
              <img
                src={currentQuote.avatar}
                alt={currentQuote.author}
                className="w-9 h-9 rounded-full object-cover border border-white/20"
              />
              <div>
                <div className="text-xs font-semibold text-white">{currentQuote.author}</div>
                <div className="text-[11px] text-white/45">{currentQuote.role}</div>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-[11px] text-white/35">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C59A3F] shrink-0" />
            <span>256-bit SSL encryption · GDPR compliant · Child data protected</span>
          </div>
        </div>
      </div>

      {/* ══ RIGHT PANEL — Login Form ════════════════════════ */}
      <div className="flex-1 bg-[#FAF9F6] flex flex-col">
        {/* Mobile logo */}
        <div className="lg:hidden px-6 pt-6 pb-2">
          <a href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#BC4F32] flex items-center justify-center">
              <Heart className="w-4.5 h-4.5 text-white fill-white" />
            </div>
            <span className="font-display text-lg font-semibold text-[#0B1626]">
              RK<span className="text-[#C59A3F]">·</span>Adoption
            </span>
          </a>
        </div>

        <div className="flex-1 flex items-center justify-center px-6 py-12 sm:px-10">
          <div className="w-full max-w-[420px]">
            {status === 'success' ? (
              /* ── SUCCESS STATE ───────────────────────── */
              <div className="rk-fade text-center space-y-5 py-8">
                <div className="w-20 h-20 rounded-full bg-[#EBF4F7] border-2 border-[#185265] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10 text-[#185265]" />
                </div>
                <div>
                  <h2 className="font-serif-display text-3xl text-[#0B1626] font-normal">Welcome Back</h2>
                  <p className="text-sm text-[#64748B] mt-2 leading-relaxed">
                    You're logged in. Redirecting you to your family portal…
                  </p>
                </div>
                <div className="flex justify-center gap-1 pt-2">
                  {[0,1,2].map(i => (
                    <span key={i} className="w-2 h-2 rounded-full bg-[#BC4F32] opacity-80" style={{ animationDelay: `${i * 0.2}s`, animation: 'rk-pulse-dot 1.2s ease infinite' }} />
                  ))}
                </div>
                <a href="/portal" className="inline-flex items-center gap-2 text-sm font-semibold text-[#BC4F32] hover:underline mt-2">
                  <span>Go to Portal Now</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ) : (
              /* ── FORM STATE ──────────────────────────── */
              <div className="rk-slide-up space-y-7">
                {/* Header */}
                <div className="space-y-1">
                  <h1 className="font-serif-display text-4xl text-[#0B1626] font-normal">Sign In</h1>
                  <p className="text-sm text-[#64748B]">
                    New to RK-Adoption?{' '}
                    <a href="/register" className="text-[#BC4F32] font-semibold hover:underline">
                      Create an account
                    </a>
                  </p>
                </div>

                {/* Server error banner */}
                {serverError && (
                  <div className="rk-fade flex items-start gap-3 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{serverError}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="login-email" className="block text-xs font-semibold text-[#0B1626]">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                      <input
                        id="login-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="you@example.com"
                        className={`rk-login-input pl-10 ${errors.email ? 'rk-login-input-error' : touched.email && !errors.email && form.email ? 'rk-login-input-success' : ''}`}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'err-email' : undefined}
                      />
                      {touched.email && !errors.email && form.email && (
                        <CheckCircle2 className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-green-600" />
                      )}
                    </div>
                    {errors.email && (
                      <p id="err-email" className="flex items-center gap-1.5 text-xs text-red-600">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Password */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label htmlFor="login-password" className="block text-xs font-semibold text-[#0B1626]">
                        Password
                      </label>
                      <a
                        href="/forgot-password"
                        className="text-xs text-[#BC4F32] hover:underline font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BC4F32] rounded"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                      <input
                        id="login-password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        autoComplete="current-password"
                        value={form.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Your password"
                        className={`rk-login-input pl-10 pr-11 ${errors.password ? 'rk-login-input-error' : ''}`}
                        aria-invalid={!!errors.password}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(p => !p)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#0B1626] transition-colors p-0.5 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BC4F32]"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="flex items-center gap-1.5 text-xs text-red-600">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {errors.password}
                      </p>
                    )}
                  </div>

                  {/* Remember me */}
                  <label className="flex items-center gap-3 cursor-pointer group select-none">
                    <div className="relative">
                      <input
                        name="rememberMe"
                        type="checkbox"
                        checked={form.rememberMe}
                        onChange={handleChange}
                        className="sr-only peer"
                      />
                      <div className="w-5 h-5 rounded-md border-2 border-[#E5DFD5] peer-checked:bg-[#BC4F32] peer-checked:border-[#BC4F32] transition-all flex items-center justify-center">
                        {form.rememberMe && (
                          <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-xs text-[#475569]">Keep me signed in for 30 days</span>
                  </label>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="rk-login-btn w-full py-3.5 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2.5"
                  >
                    {status === 'submitting' ? (
                      <>
                        <svg className="rk-spinner w-4.5 h-4.5 text-white/70" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        <span>Signing In…</span>
                      </>
                    ) : (
                      <>
                        <LogIn className="w-4.5 h-4.5" />
                        <span>Sign In to Your Portal</span>
                      </>
                    )}
                  </button>
                </form>

                {/* Divider */}
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-px bg-[#E5DFD5]" />
                  <span className="text-[11px] text-[#94A3B8] font-medium">or</span>
                  <div className="flex-1 h-px bg-[#E5DFD5]" />
                </div>

                {/* Secondary action */}
                <div className="text-center space-y-3">
                  <p className="text-xs text-[#64748B]">
                    Don't have an account yet?
                  </p>
                  <a
                    href="/register"
                    className="block w-full py-3 rounded-xl border-2 border-[#E5DFD5] hover:border-[#BC4F32] text-[#0B1626] hover:text-[#BC4F32] text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BC4F32]"
                  >
                    Create a Free Account
                  </a>
                </div>

                {/* Trust badges */}
                <div className="pt-4 border-t border-[#E5DFD5] flex items-center justify-center gap-5 text-[10px] text-[#94A3B8]">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#BC4F32]" />
                    SSL Secured
                  </span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C59A3F]" />
                    GDPR Compliant
                  </span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#185265]" />
                    HIPAA Ready
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom nav */}
        <div className="px-6 pb-6 flex items-center justify-center gap-5 text-[11px] text-[#94A3B8]">
          <a href="/resources/legal" className="hover:text-[#0B1626] transition-colors">Legal & Privacy</a>
          <span>·</span>
          <a href="/contact" className="hover:text-[#0B1626] transition-colors">Help & Support</a>
          <span>·</span>
          <a href="/resources/faqs" className="hover:text-[#0B1626] transition-colors">FAQs</a>
        </div>
      </div>
    </div>
  );
}
