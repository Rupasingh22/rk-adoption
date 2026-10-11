import { useState, useCallback } from 'react';
import {
  Eye, EyeOff, UserPlus, ShieldCheck, Heart, ArrowRight,
  AlertCircle, CheckCircle2, Lock, Mail, User, Phone,
  ChevronRight, Sparkles, Info,
} from 'lucide-react';

// ─── Types ────────────────────────────────────────────────
interface RegisterForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
  agreePrivacy: boolean;
  marketingConsent: boolean;
}
type RegisterStatus = 'idle' | 'submitting' | 'success' | 'error';

// ─── Password strength ────────────────────────────────────
interface StrengthResult {
  score: number;     // 0–4
  label: string;
  color: string;
  bars: [boolean, boolean, boolean, boolean];
}

function getPasswordStrength(pw: string): StrengthResult {
  let score = 0;
  if (pw.length >= 8)                  score++;
  if (/[A-Z]/.test(pw))               score++;
  if (/[0-9]/.test(pw))               score++;
  if (/[^A-Za-z0-9]/.test(pw))        score++;
  const info: Record<number, { label: string; color: string }> = {
    0: { label: 'Too weak',  color: '#DC2626' },
    1: { label: 'Weak',      color: '#EF4444' },
    2: { label: 'Fair',      color: '#F97316' },
    3: { label: 'Good',      color: '#EAB308' },
    4: { label: 'Strong',    color: '#16A34A' },
  };
  return {
    score,
    ...info[score],
    bars: [score >= 1, score >= 2, score >= 3, score >= 4],
  };
}

const ROLE_OPTIONS = [
  { value: '',                   label: 'I am registering as…' },
  { value: 'prospective-parent', label: '👪  Prospective Adoptive Parent' },
  { value: 'birth-parent',       label: '🤱  Birth / Expectant Parent' },
  { value: 'single-parent',      label: '👤  Single Adoptive Parent' },
  { value: 'professional',       label: '🏛️  Social Work Professional' },
  { value: 'agency',             label: '🤝  Agency / Partner Organisation' },
  { value: 'researcher',         label: '🔬  Researcher / Academic' },
];

// ─── Component ────────────────────────────────────────────
export default function Register() {
  const [form, setForm] = useState<RegisterForm>({
    firstName: '', lastName: '', email: '', phone: '', role: '',
    password: '', confirmPassword: '', agreeTerms: false, agreePrivacy: false, marketingConsent: false,
  });
  const [showPw, setShowPw] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [touched, setTouched] = useState<Partial<Record<keyof RegisterForm, boolean>>>({});
  const [status, setStatus] = useState<RegisterStatus>('idle');
  const [serverError, setServerError] = useState('');
  const [step, setStep] = useState<1 | 2>(1);

  const strength = getPasswordStrength(form.password);

  // Validation per field
  const errors: Partial<Record<keyof RegisterForm, string>> = {};
  if (touched.firstName && !form.firstName.trim()) errors.firstName = 'First name is required.';
  if (touched.lastName  && !form.lastName.trim())  errors.lastName  = 'Last name is required.';
  if (touched.email) {
    if (!form.email.trim()) errors.email = 'Email address is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Please enter a valid email address.';
  }
  if (touched.role && !form.role) errors.role = 'Please select your role.';
  if (touched.password) {
    if (!form.password) errors.password = 'Password is required.';
    else if (form.password.length < 8) errors.password = 'Password must be at least 8 characters.';
    else if (strength.score < 2) errors.password = 'Please choose a stronger password.';
  }
  if (touched.confirmPassword) {
    if (!form.confirmPassword) errors.confirmPassword = 'Please confirm your password.';
    else if (form.confirmPassword !== form.password) errors.confirmPassword = 'Passwords do not match.';
  }
  if (touched.agreeTerms && !form.agreeTerms) errors.agreeTerms = 'You must accept the Terms of Service.';
  if (touched.agreePrivacy && !form.agreePrivacy) errors.agreePrivacy = 'You must accept the Privacy Policy.';

  const step1Valid =
    !!form.firstName.trim() && !!form.lastName.trim() &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) && !!form.role;

  const isFormValid =
    step1Valid &&
    form.password.length >= 8 && strength.score >= 2 &&
    form.confirmPassword === form.password &&
    form.agreeTerms && form.agreePrivacy;

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, type, value } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (serverError) setServerError('');
  }, [serverError]);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    setTouched(prev => ({ ...prev, [e.target.name]: true }));
  };

  const handleNext = () => {
    setTouched({ firstName: true, lastName: true, email: true, role: true });
    if (step1Valid) setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ firstName: true, lastName: true, email: true, role: true, password: true, confirmPassword: true, agreeTerms: true, agreePrivacy: true });
    if (!isFormValid) return;
    setStatus('submitting');
    setServerError('');

    /**
     * ── INTEGRATION POINT ──────────────────────────────────────────
     * Replace the simulated timeout below with your real API call:
     *
     * try {
     *   const res = await fetch('/api/auth/register', {
     *     method: 'POST',
     *     headers: { 'Content-Type': 'application/json' },
     *     body: JSON.stringify({
     *       firstName: form.firstName,
     *       lastName: form.lastName,
     *       email: form.email,
     *       phone: form.phone,
     *       role: form.role,
     *       password: form.password,
     *       marketingConsent: form.marketingConsent,
     *     }),
     *   });
     *   if (!res.ok) {
     *     const data = await res.json();
     *     throw new Error(data.message || 'Registration failed.');
     *   }
     *   setStatus('success');
     * } catch (err: unknown) {
     *   setServerError(err instanceof Error ? err.message : 'An unexpected error occurred.');
     *   setStatus('error');
     * }
     * ────────────────────────────────────────────────────────────────
     */
    await new Promise(r => setTimeout(r, 2000));
    setStatus('success');
  };

  const strengthBarColors = (active: boolean) =>
    active ? strength.color : '#E5DFD5';

  return (
    <div className="rk-reg-root min-h-screen bg-[#FAF9F6] antialiased">
      {/* ── Scoped CSS ──────────────────────────────────── */}
      <style>{`
        .rk-reg-root {
          --rk-navy: #0B1626;
          --rk-rosewood: #BC4F32;
          --rk-gilt: #C59A3F;
          --rk-aegean: #185265;
          --rk-silk: #E5DFD5;
        }
        .font-serif-display { font-family: 'Cormorant Garamond', Georgia, serif; letter-spacing: -0.015em; }

        .rk-reg-input {
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
        .rk-reg-input:focus {
          border-color: #C59A3F;
          box-shadow: 0 0 0 3px rgba(197,154,63,0.12);
        }
        .rk-reg-input-error { border-color: #DC2626; }
        .rk-reg-input-error:focus { border-color: #DC2626; box-shadow: 0 0 0 3px rgba(220,38,38,0.10); }
        .rk-reg-input-ok { border-color: #16A34A; }

        .rk-reg-btn-primary {
          background: linear-gradient(135deg, #C59A3F 0%, #a8822f 100%);
          box-shadow: 0 4px 18px rgba(197,154,63,0.32);
          transition: all 0.25s ease;
        }
        .rk-reg-btn-primary:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 6px 26px rgba(197,154,63,0.45);
        }
        .rk-reg-btn-primary:disabled { opacity: 0.65; cursor: not-allowed; }

        .rk-reg-btn-outline {
          border: 2px solid #E5DFD5;
          color: #475569;
          transition: all 0.2s ease;
          background: transparent;
        }
        .rk-reg-btn-outline:hover { border-color: #C59A3F; color: #0B1626; }

        @keyframes rk-spin { to { transform: rotate(360deg); } }
        .rk-spinner { animation: rk-spin 0.75s linear infinite; }

        @keyframes rk-slide-up {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .rk-slide-up { animation: rk-slide-up 0.4s cubic-bezier(0.16,1,0.3,1) both; }

        @keyframes rk-fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .rk-fade-in { animation: rk-fade-in 0.45s ease both; }

        /* Step indicator */
        .rk-step-line { height: 2px; background: #E5DFD5; border-radius: 9999px; flex: 1; }
        .rk-step-line.active { background: linear-gradient(90deg, #C59A3F, #BC4F32); }

        .rk-side-pattern {
          background-color: #0B1626;
          background-image: radial-gradient(circle at 30% 20%, rgba(197,154,63,0.15) 0%, transparent 50%),
                            radial-gradient(circle at 80% 80%, rgba(188,79,50,0.12) 0%, transparent 45%),
                            radial-gradient(circle at 60% 50%, rgba(24,82,101,0.20) 0%, transparent 45%);
        }
        input:-webkit-autofill { -webkit-box-shadow: 0 0 0px 1000px #fff inset; }

        .rk-check-custom {
          width: 1.2rem; height: 1.2rem; border-radius: 0.35rem;
          border: 2px solid #E5DFD5; flex-shrink: 0; margin-top: 1px;
          transition: all 0.18s ease;
          display: flex; align-items: center; justify-content: center;
        }
        .rk-check-custom.checked { background: #C59A3F; border-color: #C59A3F; }
      `}</style>

      <div className="min-h-screen flex">
        {/* ══ LEFT DECORATIVE PANEL ════════════════════════ */}
        <div className="rk-side-pattern hidden xl:flex xl:w-[38%] relative flex-col p-12 overflow-hidden">
          {/* Mesh circles */}
          <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full border border-white/5" />
          <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full border border-white/5" />
          <div className="absolute bottom-1/4 right-0 w-56 h-56 rounded-full border border-[#C59A3F]/10" />

          {/* Logo */}
          <a href="/" className="flex items-center gap-3 mb-auto relative z-10">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C59A3F] to-[#a8822f] flex items-center justify-center shadow-lg">
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

          {/* Body */}
          <div className="relative z-10 space-y-6 mt-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C59A3F]/15 border border-[#C59A3F]/25 text-xs text-[#C59A3F] font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Join 12,000+ families worldwide</span>
            </div>
            <h2 className="font-serif-display text-4xl text-white font-normal leading-[1.1]">
              Begin Your<br />
              <span className="italic text-[#C59A3F]">Family Story</span>
            </h2>
            <p className="text-sm text-white/55 leading-relaxed">
              Create your free account to access personalised adoption guidance, case tracking, and expert counsellor support.
            </p>

            {/* Feature cards */}
            <div className="space-y-3 pt-4">
              {[
                { icon: '📋', title: 'Personalised Roadmap', desc: 'Tailored to your family type and destination country' },
                { icon: '📁', title: 'Secure Document Vault', desc: 'Upload, organise, and share critical paperwork safely' },
                { icon: '💬', title: 'Caseworker Messaging', desc: 'Encrypted direct line to your assigned specialist' },
                { icon: '📈', title: 'Live Progress Tracker', desc: 'Know exactly where you stand at every stage' },
              ].map(f => (
                <div key={f.title} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-base shrink-0 mt-0.5">{f.icon}</span>
                  <div>
                    <div className="text-xs font-semibold text-white">{f.title}</div>
                    <div className="text-[11px] text-white/45 mt-0.5">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust footer */}
          <div className="relative z-10 mt-10 pt-8 border-t border-white/10">
            <div className="flex items-center gap-2 text-[11px] text-white/30">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C59A3F]" />
              <span>Hague Accredited · ISO 27001 Data Security · GDPR Compliant</span>
            </div>
          </div>
        </div>

        {/* ══ RIGHT FORM PANEL ════════════════════════════ */}
        <div className="flex-1 flex flex-col">
          {/* Mobile logo */}
          <div className="xl:hidden px-6 pt-6">
            <a href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#C59A3F] to-[#a8822f] flex items-center justify-center">
                <Heart className="w-4.5 h-4.5 text-white fill-white" />
              </div>
              <span className="text-lg font-semibold text-[#0B1626]">
                RK<span className="text-[#C59A3F]">·</span>Adoption
              </span>
            </a>
          </div>

          <div className="flex-1 flex items-start justify-center px-6 py-10 sm:px-10 xl:pt-16">
            <div className="w-full max-w-[480px]">

              {status === 'success' ? (
                /* ── SUCCESS ─── */
                <div className="rk-fade-in text-center space-y-5 py-10">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#C59A3F] to-[#a8822f] flex items-center justify-center mx-auto shadow-xl">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h2 className="font-serif-display text-3xl text-[#0B1626] font-normal">
                      Welcome to RK-Adoption, {form.firstName}!
                    </h2>
                    <p className="text-sm text-[#64748B] mt-3 leading-relaxed max-w-sm mx-auto">
                      Your account has been created. We've sent a verification email to <strong className="text-[#0B1626]">{form.email}</strong>. Please verify your email to activate your family portal.
                    </p>
                  </div>
                  <a
                    href="/login"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C59A3F] text-white text-sm font-semibold shadow-md hover:bg-[#a8822f] transition-all"
                  >
                    <span>Sign In to Your Portal</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <p className="text-xs text-[#94A3B8]">
                    Didn't receive the email? Check spam or{' '}
                    <button type="button" className="text-[#C59A3F] underline underline-offset-2 font-medium">
                      resend it
                    </button>
                  </p>
                </div>
              ) : (
                /* ── MULTI-STEP FORM ─── */
                <div className="rk-slide-up space-y-7">
                  {/* Header */}
                  <div className="space-y-1">
                    <h1 className="font-serif-display text-4xl text-[#0B1626] font-normal">
                      {step === 1 ? 'Create Account' : 'Secure Your Account'}
                    </h1>
                    <p className="text-sm text-[#64748B]">
                      Already registered?{' '}
                      <a href="/login" className="text-[#C59A3F] font-semibold hover:underline">
                        Sign in here
                      </a>
                    </p>
                  </div>

                  {/* Step indicator */}
                  <div className="flex items-center gap-3">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${step >= 1 ? 'bg-[#C59A3F] text-white' : 'bg-[#E5DFD5] text-[#94A3B8]'}`}>
                      {step > 1 ? <CheckCircle2 className="w-4 h-4" /> : '1'}
                    </div>
                    <div className={`rk-step-line ${step >= 2 ? 'active' : ''}`} />
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${step >= 2 ? 'bg-[#C59A3F] text-white' : 'bg-[#E5DFD5] text-[#64748B]'}`}>
                      2
                    </div>
                    <div className="text-[11px] text-[#94A3B8] ml-1 shrink-0">
                      Step {step} of 2
                    </div>
                  </div>

                  {/* Server error banner */}
                  {serverError && (
                    <div className="rk-fade-in flex items-start gap-3 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{serverError}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} noValidate>
                    {step === 1 ? (
                      /* ── STEP 1: Personal Info ─── */
                      <div className="rk-slide-up space-y-5">
                        {/* Name row */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label htmlFor="reg-firstName" className="block text-xs font-semibold text-[#0B1626]">
                              First Name *
                            </label>
                            <div className="relative">
                              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                              <input
                                id="reg-firstName" name="firstName" type="text"
                                value={form.firstName} autoComplete="given-name"
                                onChange={handleChange} onBlur={handleBlur}
                                placeholder="Elena"
                                className={`rk-reg-input pl-10 ${errors.firstName ? 'rk-reg-input-error' : touched.firstName && form.firstName ? 'rk-reg-input-ok' : ''}`}
                              />
                            </div>
                            {errors.firstName && (
                              <p className="flex items-center gap-1 text-xs text-red-600">
                                <AlertCircle className="w-3 h-3" />{errors.firstName}
                              </p>
                            )}
                          </div>
                          <div className="space-y-1.5">
                            <label htmlFor="reg-lastName" className="block text-xs font-semibold text-[#0B1626]">
                              Last Name *
                            </label>
                            <div className="relative">
                              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                              <input
                                id="reg-lastName" name="lastName" type="text"
                                value={form.lastName} autoComplete="family-name"
                                onChange={handleChange} onBlur={handleBlur}
                                placeholder="Vasquez"
                                className={`rk-reg-input pl-10 ${errors.lastName ? 'rk-reg-input-error' : touched.lastName && form.lastName ? 'rk-reg-input-ok' : ''}`}
                              />
                            </div>
                            {errors.lastName && (
                              <p className="flex items-center gap-1 text-xs text-red-600">
                                <AlertCircle className="w-3 h-3" />{errors.lastName}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Email */}
                        <div className="space-y-1.5">
                          <label htmlFor="reg-email" className="block text-xs font-semibold text-[#0B1626]">
                            Email Address *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                            <input
                              id="reg-email" name="email" type="email"
                              value={form.email} autoComplete="email"
                              onChange={handleChange} onBlur={handleBlur}
                              placeholder="you@example.com"
                              className={`rk-reg-input pl-10 ${errors.email ? 'rk-reg-input-error' : touched.email && !errors.email && form.email ? 'rk-reg-input-ok' : ''}`}
                            />
                            {touched.email && !errors.email && form.email && (
                              <CheckCircle2 className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-green-600" />
                            )}
                          </div>
                          {errors.email && (
                            <p className="flex items-center gap-1 text-xs text-red-600">
                              <AlertCircle className="w-3 h-3" />{errors.email}
                            </p>
                          )}
                        </div>

                        {/* Phone (optional) */}
                        <div className="space-y-1.5">
                          <label htmlFor="reg-phone" className="block text-xs font-semibold text-[#0B1626]">
                            Phone Number <span className="text-[#94A3B8] font-normal">(optional)</span>
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                            <input
                              id="reg-phone" name="phone" type="tel"
                              value={form.phone} autoComplete="tel"
                              onChange={handleChange}
                              placeholder="+1 (555) 000-0000"
                              className="rk-reg-input pl-10"
                            />
                          </div>
                        </div>

                        {/* Role */}
                        <div className="space-y-1.5">
                          <label htmlFor="reg-role" className="block text-xs font-semibold text-[#0B1626]">
                            Your Role *
                          </label>
                          <select
                            id="reg-role" name="role" value={form.role}
                            onChange={handleChange} onBlur={handleBlur}
                            className={`rk-reg-input bg-white ${errors.role ? 'rk-reg-input-error' : touched.role && form.role ? 'rk-reg-input-ok' : ''}`}
                          >
                            {ROLE_OPTIONS.map(o => (
                              <option key={o.value} value={o.value} disabled={o.value === ''}>{o.label}</option>
                            ))}
                          </select>
                          {errors.role && (
                            <p className="flex items-center gap-1 text-xs text-red-600">
                              <AlertCircle className="w-3 h-3" />{errors.role}
                            </p>
                          )}
                        </div>

                        {/* Next button */}
                        <button
                          type="button"
                          onClick={handleNext}
                          className="rk-reg-btn-primary w-full py-3.5 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2"
                        >
                          <span>Continue to Security</span>
                          <ChevronRight className="w-4.5 h-4.5" />
                        </button>
                      </div>
                    ) : (
                      /* ── STEP 2: Security + Terms ─── */
                      <div className="rk-slide-up space-y-5">
                        {/* Back link */}
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="flex items-center gap-1.5 text-xs text-[#64748B] hover:text-[#0B1626] transition-colors font-medium -mt-2"
                        >
                          <ChevronRight className="w-3.5 h-3.5 rotate-180" />
                          <span>Back to personal info</span>
                        </button>

                        {/* Password */}
                        <div className="space-y-1.5">
                          <label htmlFor="reg-password" className="block text-xs font-semibold text-[#0B1626]">
                            Create Password *
                          </label>
                          <div className="relative">
                            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                            <input
                              id="reg-password" name="password" type={showPw ? 'text' : 'password'}
                              value={form.password} autoComplete="new-password"
                              onChange={handleChange} onBlur={handleBlur}
                              placeholder="Min. 8 characters"
                              className={`rk-reg-input pl-10 pr-11 ${errors.password ? 'rk-reg-input-error' : ''}`}
                            />
                            <button
                              type="button"
                              onClick={() => setShowPw(p => !p)}
                              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#0B1626] transition-colors p-0.5 rounded"
                              aria-label={showPw ? 'Hide password' : 'Show password'}
                            >
                              {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                          </div>
                          {/* Strength meter */}
                          {form.password && (
                            <div className="space-y-1.5">
                              <div className="flex gap-1.5">
                                {([0, 1, 2, 3] as const).map(i => (
                                  <div
                                    key={i}
                                    className="h-1.5 flex-1 rounded-full transition-all duration-300"
                                    style={{ background: strengthBarColors(strength.bars[i]) }}
                                  />
                                ))}
                              </div>
                              <div className="flex items-center justify-between text-[11px]">
                                <span style={{ color: strength.color }} className="font-semibold">{strength.label}</span>
                                <span className="text-[#94A3B8] flex items-center gap-1">
                                  <Info className="w-3 h-3" />
                                  Use uppercase, numbers &amp; symbols
                                </span>
                              </div>
                            </div>
                          )}
                          {errors.password && (
                            <p className="flex items-center gap-1 text-xs text-red-600">
                              <AlertCircle className="w-3 h-3" />{errors.password}
                            </p>
                          )}
                        </div>

                        {/* Confirm password */}
                        <div className="space-y-1.5">
                          <label htmlFor="reg-confirm" className="block text-xs font-semibold text-[#0B1626]">
                            Confirm Password *
                          </label>
                          <div className="relative">
                            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                            <input
                              id="reg-confirm" name="confirmPassword" type={showConfirm ? 'text' : 'password'}
                              value={form.confirmPassword} autoComplete="new-password"
                              onChange={handleChange} onBlur={handleBlur}
                              placeholder="Repeat your password"
                              className={`rk-reg-input pl-10 pr-11 ${errors.confirmPassword ? 'rk-reg-input-error' : touched.confirmPassword && !errors.confirmPassword && form.confirmPassword ? 'rk-reg-input-ok' : ''}`}
                            />
                            <button
                              type="button"
                              onClick={() => setShowConfirm(p => !p)}
                              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#0B1626] transition-colors p-0.5 rounded"
                              aria-label={showConfirm ? 'Hide confirm password' : 'Show confirm password'}
                            >
                              {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                            {touched.confirmPassword && !errors.confirmPassword && form.confirmPassword && (
                              <CheckCircle2 className="absolute right-10 top-1/2 -translate-y-1/2 w-4 h-4 text-green-600" />
                            )}
                          </div>
                          {errors.confirmPassword && (
                            <p className="flex items-center gap-1 text-xs text-red-600">
                              <AlertCircle className="w-3 h-3" />{errors.confirmPassword}
                            </p>
                          )}
                        </div>

                        {/* Password hints */}
                        <div className="bg-[#FAF4E5] border border-[#C59A3F]/20 rounded-xl px-4 py-3 grid grid-cols-2 gap-x-4 gap-y-1.5">
                          {[
                            ['8+ characters',        form.password.length >= 8],
                            ['Uppercase letter',      /[A-Z]/.test(form.password)],
                            ['Number (0–9)',           /[0-9]/.test(form.password)],
                            ['Special character',      /[^A-Za-z0-9]/.test(form.password)],
                          ].map(([label, met]) => (
                            <div key={label as string} className="flex items-center gap-2 text-[11px]" style={{ color: met ? '#16A34A' : '#94A3B8' }}>
                              {met
                                ? <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                                : <div className="w-3.5 h-3.5 rounded-full border border-[#D4D4D4] shrink-0" />
                              }
                              <span className={met ? 'font-semibold' : ''}>{label as string}</span>
                            </div>
                          ))}
                        </div>

                        {/* Checkboxes */}
                        <div className="space-y-3">
                          {/* Terms */}
                          <label className="flex items-start gap-3 cursor-pointer">
                            <input name="agreeTerms" type="checkbox" checked={form.agreeTerms} onChange={handleChange} onBlur={handleBlur} className="sr-only peer" />
                            <div className={`rk-check-custom ${form.agreeTerms ? 'checked' : ''} peer-focus:ring-2 peer-focus:ring-[#C59A3F]/30`}>
                              {form.agreeTerms && <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                            </div>
                            <span className="text-xs text-[#475569] leading-relaxed">
                              I agree to the{' '}
                              <a href="/terms" className="text-[#C59A3F] underline underline-offset-2 font-semibold">Terms of Service</a>
                              {' '}and understand that RK-Adoption operates under Hague Convention accreditation standards. *
                            </span>
                          </label>
                          {errors.agreeTerms && (
                            <p className="flex items-center gap-1 text-xs text-red-600 ml-8">
                              <AlertCircle className="w-3 h-3" />{errors.agreeTerms}
                            </p>
                          )}

                          {/* Privacy */}
                          <label className="flex items-start gap-3 cursor-pointer">
                            <input name="agreePrivacy" type="checkbox" checked={form.agreePrivacy} onChange={handleChange} onBlur={handleBlur} className="sr-only peer" />
                            <div className={`rk-check-custom ${form.agreePrivacy ? 'checked' : ''}`}>
                              {form.agreePrivacy && <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                            </div>
                            <span className="text-xs text-[#475569] leading-relaxed">
                              I have read and accept the{' '}
                              <a href="/privacy" className="text-[#C59A3F] underline underline-offset-2 font-semibold">Privacy Policy</a>
                              . My data will be processed with full GDPR protections. *
                            </span>
                          </label>
                          {errors.agreePrivacy && (
                            <p className="flex items-center gap-1 text-xs text-red-600 ml-8">
                              <AlertCircle className="w-3 h-3" />{errors.agreePrivacy}
                            </p>
                          )}

                          {/* Marketing (optional) */}
                          <label className="flex items-start gap-3 cursor-pointer">
                            <input name="marketingConsent" type="checkbox" checked={form.marketingConsent} onChange={handleChange} className="sr-only peer" />
                            <div className={`rk-check-custom ${form.marketingConsent ? 'checked' : ''}`}>
                              {form.marketingConsent && <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                            </div>
                            <span className="text-xs text-[#94A3B8] leading-relaxed">
                              Send me helpful adoption resources, webinar invitations, and updates (optional — unsubscribe anytime).
                            </span>
                          </label>
                        </div>

                        {/* Submit */}
                        <button
                          type="submit"
                          disabled={status === 'submitting'}
                          className="rk-reg-btn-primary w-full py-3.5 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2.5"
                        >
                          {status === 'submitting' ? (
                            <>
                              <svg className="rk-spinner w-4.5 h-4.5 text-white/70" viewBox="0 0 24 24" fill="none">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                              </svg>
                              <span>Creating Your Account…</span>
                            </>
                          ) : (
                            <>
                              <UserPlus className="w-4.5 h-4.5" />
                              <span>Create My Account</span>
                            </>
                          )}
                        </button>

                        <p className="text-[11px] text-center text-[#94A3B8]">
                          🔒 Your information is encrypted and never shared with third parties.
                        </p>
                      </div>
                    )}
                  </form>
                </div>
              )}
            </div>
          </div>

          {/* Bottom nav */}
          <div className="px-6 pb-6 flex items-center justify-center gap-5 text-[11px] text-[#94A3B8]">
            <a href="/resources/legal" className="hover:text-[#0B1626] transition-colors">Legal & Privacy</a>
            <span>·</span>
            <a href="/contact" className="hover:text-[#0B1626] transition-colors">Help</a>
            <span>·</span>
            <a href="/resources/faqs" className="hover:text-[#0B1626] transition-colors">FAQs</a>
          </div>
        </div>
      </div>
    </div>
  );
}
