import { useState, useRef } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  ArrowRight,
  HeartHandshake,
  Shield,
  Globe,
  MessageSquare,
  Headphones,
  Users,
  Sparkles,
} from 'lucide-react';

// ─── Types ───────────────────────────────────────────────
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  category: string;
  message: string;
  consent: boolean;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const FORM_CATEGORIES = [
  { value: '', label: 'Select your inquiry type…' },
  { value: 'adoption-inquiry', label: 'General Adoption Inquiry' },
  { value: 'eligibility', label: 'Eligibility & Qualifications' },
  { value: 'home-study', label: 'Home Study Questions' },
  { value: 'international', label: 'Intercountry Adoption' },
  { value: 'post-adoption', label: 'Post-Adoption Support' },
  { value: 'birth-parent', label: 'Birth Parent Guidance' },
  { value: 'legal', label: 'Legal & Documentation' },
  { value: 'financials', label: 'Costs, Grants & Financing' },
  { value: 'media', label: 'Media & Press Enquiries' },
  { value: 'partnership', label: 'Agency Partnerships' },
  { value: 'other', label: 'Other' },
];

const OFFICES = [
  {
    city: 'New York',
    country: 'United States',
    address: '580 Fifth Avenue, Suite 2200, New York, NY 10036',
    phone: '+1 (800) 123-4567',
    email: 'newyork@rk-adoption.org',
    hours: 'Mon – Fri · 8:00 AM – 6:00 PM EST',
    flag: '🇺🇸',
    primary: true,
  },
  {
    city: 'London',
    country: 'United Kingdom',
    address: '22 Bishopsgate, 20th Floor, London EC2N 4AJ',
    phone: '+44 20 7946 0830',
    email: 'london@rk-adoption.org',
    hours: 'Mon – Fri · 9:00 AM – 5:30 PM GMT',
    flag: '🇬🇧',
    primary: false,
  },
  {
    city: 'New Delhi',
    country: 'India',
    address: 'DLF Cyber City, Block B, Phase II, Gurugram 122022',
    phone: '+91 11 4560 7890',
    email: 'india@rk-adoption.org',
    hours: 'Mon – Sat · 9:30 AM – 6:00 PM IST',
    flag: '🇮🇳',
    primary: false,
  },
];

const QUICK_LINKS = [
  { label: 'Step-by-Step Adoption Guide', href: '/process/guide', desc: 'Understand the complete journey' },
  { label: 'Eligibility Criteria', href: '/adoption/eligibility', desc: 'Are you qualified to adopt?' },
  { label: 'Costs & Grants', href: '/resources/faqs', desc: 'Financial planning resources' },
  { label: 'Frequently Asked Questions', href: '/resources/faqs', desc: 'Instant answers 24/7' },
  { label: 'Legal Documentation Hub', href: '/resources/legal', desc: 'Country-specific legal frameworks' },
];

// ─── Component ────────────────────────────────────────────
export default function ContactUs() {
  const [form, setForm] = useState<FormData>({
    firstName: '', lastName: '', email: '', phone: '',
    subject: '', category: '', message: '', consent: false,
  });
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  // Validation
  const errors: Partial<Record<keyof FormData, string>> = {};
  if (touched.firstName && !form.firstName.trim()) errors.firstName = 'First name is required.';
  if (touched.lastName && !form.lastName.trim()) errors.lastName = 'Last name is required.';
  if (touched.email) {
    if (!form.email.trim()) errors.email = 'Email address is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Please enter a valid email address.';
  }
  if (touched.category && !form.category) errors.category = 'Please select an inquiry type.';
  if (touched.message && form.message.trim().length < 20) errors.message = 'Please enter at least 20 characters.';
  if (touched.consent && !form.consent) errors.consent = 'You must agree to our privacy policy to proceed.';

  const isValid = !form.firstName.trim() === false &&
    !form.lastName.trim() === false &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
    !!form.category &&
    form.message.trim().length >= 20 &&
    form.consent;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, type, value } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setTouched(prev => ({ ...prev, [e.target.name]: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Mark all fields touched to show validation
    setTouched({ firstName: true, lastName: true, email: true, category: true, message: true, consent: true });
    if (!isValid) return;

    setStatus('submitting');
    // Simulated async submission — replace with your API endpoint
    await new Promise(r => setTimeout(r, 1800));
    // On real integration: POST to /api/contact with form payload
    setStatus('success');
  };

  const handleReset = () => {
    setForm({ firstName: '', lastName: '', email: '', phone: '', subject: '', category: '', message: '', consent: false });
    setTouched({});
    setStatus('idle');
  };

  return (
    <div className="rk-contact-root min-h-screen bg-[#FAF9F6] antialiased">
      {/* ── Scoped CSS ─────────────────────────────────────── */}
      <style>{`
        .rk-contact-root {
          --rk-navy: #0B1626;
          --rk-navy-mid: #122238;
          --rk-rosewood: #BC4F32;
          --rk-rosewood-h: #A54127;
          --rk-gilt: #C59A3F;
          --rk-aegean: #185265;
          --rk-silk: #E5DFD5;
          --rk-canvas: #FAF9F6;
        }
        .font-serif-display { font-family: 'Cormorant Garamond', Georgia, serif; letter-spacing: -0.015em; }

        /* Floating label */
        .rk-field { position: relative; }
        .rk-field input:focus ~ label,
        .rk-field input:not(:placeholder-shown) ~ label,
        .rk-field select:focus ~ label,
        .rk-field textarea:focus ~ label,
        .rk-field textarea:not(:placeholder-shown) ~ label {
          transform: translateY(-1.35rem) scale(0.78);
          color: #BC4F32;
        }
        .rk-field label {
          position: absolute; left: 1rem; top: 0.85rem;
          font-size: 0.875rem; color: #94A3B8;
          transition: all 0.2s ease; pointer-events: none;
          transform-origin: left top;
        }
        .rk-field input, .rk-field textarea, .rk-field select {
          padding-top: 1.4rem;
        }
        .rk-hero-grid::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(11,22,38,0.72) 0%, rgba(11,22,38,0.3) 55%, rgba(11,22,38,0.05) 100%);
        }
        .rk-office-card { transition: all 0.3s cubic-bezier(0.16,1,0.3,1); }
        .rk-office-card:hover { transform: translateY(-4px); box-shadow: 0 20px 48px -8px rgba(11,22,38,0.12); border-color: #BC4F32; }
        .rk-input-base {
          width: 100%; background: #fff; border: 1.5px solid #E5DFD5;
          border-radius: 0.75rem; padding: 0.75rem 1rem;
          font-size: 0.875rem; color: #0B1626;
          outline: none; transition: border-color 0.2s;
          font-family: 'Inter', sans-serif;
        }
        .rk-input-base:focus { border-color: #BC4F32; box-shadow: 0 0 0 3px rgba(188,79,50,0.08); }
        .rk-input-error { border-color: #DC2626; }
        .rk-input-error:focus { box-shadow: 0 0 0 3px rgba(220,38,38,0.08); }
        .rk-submit-btn {
          background-color: #BC4F32;
          transition: all 0.25s ease;
          box-shadow: 0 4px 16px rgba(188,79,50,0.28);
        }
        .rk-submit-btn:hover:not(:disabled) {
          background-color: #A54127;
          transform: translateY(-1px);
          box-shadow: 0 6px 24px rgba(188,79,50,0.4);
        }
        .rk-submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }
        @keyframes rk-spin { to { transform: rotate(360deg); } }
        .rk-spinner { animation: rk-spin 0.8s linear infinite; }
        @keyframes rk-pulse-dot {
          0%, 100% { opacity: 0.4; transform: scale(0.85); }
          50%       { opacity: 1;   transform: scale(1); }
        }
        .dot1 { animation: rk-pulse-dot 1.4s ease 0s infinite; }
        .dot2 { animation: rk-pulse-dot 1.4s ease 0.2s infinite; }
        .dot3 { animation: rk-pulse-dot 1.4s ease 0.4s infinite; }
      `}</style>

      {/* ── BREADCRUMB ────────────────────────────────────── */}
      <div className="bg-[#F4EFE6] border-b border-[#E5DFD5] py-3.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#64748B]">
          <a href="/" className="hover:text-[#0B1626] transition-colors">Home</a>
          <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8]" />
          <span className="text-[#BC4F32] font-semibold">Contact Us</span>
        </div>
      </div>

      {/* ── SECTION 1 · HERO ─────────────────────────────── */}
      <section className="relative h-[480px] overflow-hidden">
        <div className="rk-hero-grid absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&w=1600&q=80"
            alt="Compassionate adoption counselor"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="max-w-2xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs font-semibold text-white">
                <HeartHandshake className="w-4 h-4 text-[#C59A3F]" />
                <span>24/7 Compassionate Support · 40+ Countries</span>
              </div>
              <h1 className="font-serif-display text-5xl sm:text-6xl lg:text-7xl text-white font-normal leading-[1.08]">
                We Are Here For<br />
                <span className="italic text-[#C59A3F]">Every Question</span>
              </h1>
              <p className="text-base text-white/80 leading-relaxed max-w-xl font-light">
                Whether you are taking your very first step or navigating a complex legal procedure — our licensed social workers and adoption specialists are ready to guide you with clarity, warmth, and expertise.
              </p>
              <div className="flex items-center gap-6 pt-2">
                <a href="tel:+18001234567" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#BC4F32] hover:bg-[#A54127] text-white text-sm font-semibold transition-all shadow-lg">
                  <Phone className="w-4 h-4" />
                  <span>Call Now — Free</span>
                </a>
                <a href="#contact-form" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors">
                  <span>Send a Message</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#FAF9F6] to-transparent" />
      </section>

      {/* ── SECTION 2 · TRUST STRIP ──────────────────────── */}
      <section className="bg-white border-y border-[#E5DFD5] py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#FDF5F1] text-[#BC4F32] flex items-center justify-center shrink-0">
                <Headphones className="w-4.5 h-4.5" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#0B1626]">24-Hour Response Guarantee</div>
                <div className="text-[11px] text-[#64748B]">Weekdays · Licensed caseworkers only</div>
              </div>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#FAF4E5] text-[#C59A3F] flex items-center justify-center shrink-0">
                <Shield className="w-4.5 h-4.5" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#0B1626]">Strictly Confidential</div>
                <div className="text-[11px] text-[#64748B]">Your information is never shared</div>
              </div>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#EBF4F7] text-[#185265] flex items-center justify-center shrink-0">
                <Globe className="w-4.5 h-4.5" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#0B1626]">40+ Country Coverage</div>
                <div className="text-[11px] text-[#64748B]">Multilingual support available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 · CONTACT CHANNELS ─────────────────── */}
      <section className="py-16 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#BC4F32] uppercase tracking-wider">Reach Our Team</span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B1626] font-normal mt-2">
              Multiple Ways to Connect
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Phone className="w-6 h-6" />, color: '#BC4F32', bg: '#FDF5F1',
                title: 'Phone Helpline',
                line1: '+1 (800) 123-4567',
                line2: 'Free · Mon–Fri 8 AM – 8 PM',
                href: 'tel:+18001234567',
                cta: 'Call Now',
              },
              {
                icon: <Mail className="w-6 h-6" />, color: '#C59A3F', bg: '#FAF4E5',
                title: 'Email Support',
                line1: 'advisory@rk-adoption.org',
                line2: 'Response within 24 business hours',
                href: 'mailto:advisory@rk-adoption.org',
                cta: 'Send Email',
              },
              {
                icon: <MessageSquare className="w-6 h-6" />, color: '#185265', bg: '#EBF4F7',
                title: 'Live Chat',
                line1: 'Chat with a Caseworker',
                line2: 'Mon–Fri · 9 AM – 5 PM EST',
                href: '#contact-form',
                cta: 'Open Chat',
              },
              {
                icon: <Users className="w-6 h-6" />, color: '#0B1626', bg: '#F4EFE6',
                title: 'Office Visits',
                line1: 'Schedule an Appointment',
                line2: 'New York · London · New Delhi',
                href: '#offices',
                cta: 'Book Visit',
              },
            ].map((ch) => (
              <div key={ch.title} className="bg-white border border-[#E5DFD5] rounded-2xl p-6 space-y-4 hover:shadow-md hover:border-[#D3CAC0] transition-all duration-200">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: ch.bg, color: ch.color }}>
                  {ch.icon}
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0B1626]">{ch.title}</div>
                  <div className="text-sm text-[#334155] mt-1">{ch.line1}</div>
                  <div className="text-xs text-[#64748B] mt-0.5">{ch.line2}</div>
                </div>
                <a
                  href={ch.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors"
                  style={{ color: ch.color }}
                >
                  <span>{ch.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4 · FORM + SIDEBAR ───────────────────── */}
      <section id="contact-form" className="py-16 bg-white border-y border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* ── FORM ─── */}
            <div className="lg:col-span-7">
              <div className="mb-8">
                <span className="text-xs font-bold text-[#BC4F32] uppercase tracking-wider">Send a Message</span>
                <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B1626] font-normal mt-2">
                  Tell Us How We Can Help
                </h2>
                <p className="text-sm text-[#64748B] mt-2 leading-relaxed">
                  All inquiries are handled by licensed adoption professionals. We reply within one business day.
                </p>
              </div>

              {status === 'success' ? (
                /* SUCCESS STATE */
                <div className="p-8 rounded-3xl border border-[#185265]/30 bg-[#EBF4F7] text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#185265] text-white flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif-display text-2xl text-[#0B1626] font-semibold">Message Received</h3>
                  <p className="text-sm text-[#334155] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{form.firstName}</strong>. Your message has been received and assigned to one of our licensed caseworkers. You will receive a reply at <strong>{form.email}</strong> within one business day.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-2 px-6 py-2.5 rounded-xl border border-[#185265] text-[#185265] text-xs font-semibold hover:bg-[#185265] hover:text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* CONTACT FORM */
                <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-[#0B1626]">First Name *</label>
                      <input
                        name="firstName" type="text" value={form.firstName} placeholder=" "
                        onChange={handleChange} onBlur={handleBlur}
                        className={`rk-input-base ${errors.firstName ? 'rk-input-error' : ''}`}
                        aria-invalid={!!errors.firstName} aria-describedby="err-firstname"
                      />
                      {errors.firstName && <p id="err-firstname" className="text-xs text-red-600 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.firstName}</p>}
                    </div>
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-[#0B1626]">Last Name *</label>
                      <input
                        name="lastName" type="text" value={form.lastName} placeholder=" "
                        onChange={handleChange} onBlur={handleBlur}
                        className={`rk-input-base ${errors.lastName ? 'rk-input-error' : ''}`}
                        aria-invalid={!!errors.lastName}
                      />
                      {errors.lastName && <p className="text-xs text-red-600 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.lastName}</p>}
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-[#0B1626]">Email Address *</label>
                      <input
                        name="email" type="email" value={form.email} placeholder=" "
                        onChange={handleChange} onBlur={handleBlur}
                        className={`rk-input-base ${errors.email ? 'rk-input-error' : ''}`}
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && <p className="text-xs text-red-600 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.email}</p>}
                    </div>
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-[#0B1626]">Phone (optional)</label>
                      <input
                        name="phone" type="tel" value={form.phone} placeholder=" "
                        onChange={handleChange}
                        className="rk-input-base"
                      />
                    </div>
                  </div>

                  {/* Inquiry type */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-[#0B1626]">Inquiry Type *</label>
                    <select
                      name="category" value={form.category}
                      onChange={handleChange} onBlur={handleBlur}
                      className={`rk-input-base bg-white ${errors.category ? 'rk-input-error' : ''}`}
                      aria-invalid={!!errors.category}
                    >
                      {FORM_CATEGORIES.map(c => (
                        <option key={c.value} value={c.value} disabled={c.value === ''}>{c.label}</option>
                      ))}
                    </select>
                    {errors.category && <p className="text-xs text-red-600 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.category}</p>}
                  </div>

                  {/* Subject */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-[#0B1626]">Subject (optional)</label>
                    <input
                      name="subject" type="text" value={form.subject} placeholder="e.g. Question about ICPC interstate compliance"
                      onChange={handleChange}
                      className="rk-input-base"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-[#0B1626]">Your Message *</label>
                    <textarea
                      name="message" rows={6} value={form.message}
                      placeholder="Describe your situation, questions, or the specific guidance you need…"
                      onChange={handleChange} onBlur={handleBlur}
                      className={`rk-input-base resize-none ${errors.message ? 'rk-input-error' : ''}`}
                      aria-invalid={!!errors.message}
                    />
                    <div className="flex items-center justify-between text-[11px] text-[#94A3B8]">
                      {errors.message
                        ? <span className="text-red-600 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.message}</span>
                        : <span>{form.message.length} characters (min 20)</span>
                      }
                    </div>
                  </div>

                  {/* Consent */}
                  <div className="space-y-1">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative mt-0.5">
                        <input
                          name="consent" type="checkbox" checked={form.consent}
                          onChange={handleChange} onBlur={handleBlur}
                          className="sr-only peer"
                          aria-invalid={!!errors.consent}
                        />
                        <div className="w-5 h-5 rounded-md border-2 border-[#E5DFD5] peer-checked:bg-[#BC4F32] peer-checked:border-[#BC4F32] transition-colors flex items-center justify-center">
                          {form.consent && <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                        </div>
                      </div>
                      <span className="text-xs text-[#475569] leading-relaxed">
                        I agree to the <a href="#privacy" className="text-[#BC4F32] underline underline-offset-2 font-semibold">Privacy Policy</a> and consent to RK-Adoption processing my personal data for the purpose of responding to this inquiry. My information will never be sold or shared with third parties.
                      </span>
                    </label>
                    {errors.consent && <p className="text-xs text-red-600 flex items-center gap-1 ml-8"><AlertCircle className="w-3.5 h-3.5" />{errors.consent}</p>}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="rk-submit-btn w-full py-4 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-3"
                  >
                    {status === 'submitting' ? (
                      <>
                        <svg className="rk-spinner w-5 h-5 text-white/60" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                        </svg>
                        <span>Sending Your Message</span>
                        <span className="flex gap-1 ml-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-white dot1" />
                          <span className="w-1.5 h-1.5 rounded-full bg-white dot2" />
                          <span className="w-1.5 h-1.5 rounded-full bg-white dot3" />
                        </span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4.5 h-4.5" />
                        <span>Send Message to a Caseworker</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-[#94A3B8]">
                    🔒 Encrypted submission · Zero spam · 100% confidential
                  </p>
                </form>
              )}
            </div>

            {/* ── SIDEBAR ─── */}
            <aside className="lg:col-span-5 space-y-6">
              {/* Response Commitment */}
              <div className="bg-gradient-to-br from-[#0B1626] to-[#122238] rounded-3xl p-7 text-white space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#BC4F32] flex items-center justify-center text-white">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Response Guarantee</div>
                    <div className="text-xs text-white/60">Monday through Friday</div>
                  </div>
                </div>
                <div className="space-y-3 text-xs text-white/75 leading-relaxed">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C59A3F] shrink-0" />
                    <span>Email inquiries answered within <strong className="text-white">24 business hours</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C59A3F] shrink-0" />
                    <span>All replies from <strong className="text-white">licensed social work professionals</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C59A3F] shrink-0" />
                    <span>Expectant mother crisis helpline: <strong className="text-white">24/7 · free</strong></span>
                  </div>
                </div>
                <div className="pt-1 border-t border-white/10">
                  <a href="tel:+18001234567" className="flex items-center gap-2 text-sm font-bold text-[#C59A3F] hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                    <span>+1 (800) 123-4567</span>
                  </a>
                  <p className="text-[11px] text-white/40 mt-1">24/7 free helpline for expectant mothers</p>
                </div>
              </div>

              {/* Quick Self-Help Links */}
              <div className="bg-white border border-[#E5DFD5] rounded-3xl p-7 space-y-4">
                <div className="text-xs font-bold text-[#BC4F32] uppercase tracking-wider">Quick Self-Help</div>
                <h3 className="font-serif-display text-xl text-[#0B1626] font-semibold">Find Instant Answers</h3>
                <p className="text-xs text-[#64748B] leading-relaxed">Many questions are already answered in our resource library.</p>
                <ul className="space-y-2">
                  {QUICK_LINKS.map(link => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-[#FAF8F5] border border-transparent hover:border-[#E5DFD5] group transition-all"
                      >
                        <div>
                          <div className="text-xs font-semibold text-[#0B1626] group-hover:text-[#BC4F32] transition-colors">{link.label}</div>
                          <div className="text-[11px] text-[#64748B]">{link.desc}</div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#BC4F32] group-hover:translate-x-0.5 transition-all shrink-0" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Expectant Mother Crisis Banner */}
              <div className="bg-[#FDF5F1] border border-[#BC4F32]/25 rounded-3xl p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#BC4F32]" />
                  <span className="text-xs font-bold text-[#BC4F32] uppercase tracking-wider">Expectant Mothers</span>
                </div>
                <h4 className="font-serif-display text-lg text-[#0B1626] font-semibold">
                  Facing an Unplanned Pregnancy?
                </h4>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Our compassionate counselors provide free, confidential, zero-pressure guidance. You have options, and we will help you understand every one of them.
                </p>
                <a href="tel:+18001234567" className="block text-center py-2.5 rounded-xl bg-[#BC4F32] hover:bg-[#A54127] text-white text-xs font-bold transition-colors shadow-sm">
                  Speak with a Counselor Now
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 · GLOBAL OFFICES ───────────────────── */}
      <section id="offices" className="py-16 bg-[#FAF9F6] border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#BC4F32] uppercase tracking-wider">Global Presence</span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#0B1626] font-normal mt-2">
              Our International Offices
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Visit us in person at any of our fully accredited regional offices.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {OFFICES.map(office => (
              <div
                key={office.city}
                className={`rk-office-card bg-white rounded-3xl p-8 border flex flex-col justify-between ${office.primary ? 'border-[#BC4F32] shadow-md' : 'border-[#E5DFD5]'}`}
              >
                {office.primary && (
                  <div className="inline-block mb-4 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#BC4F32] text-white w-fit">
                    Global Headquarters
                  </div>
                )}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{office.flag}</span>
                    <div>
                      <div className="font-serif-display text-xl text-[#0B1626] font-semibold">{office.city}</div>
                      <div className="text-xs text-[#64748B]">{office.country}</div>
                    </div>
                  </div>
                  <div className="space-y-2.5 text-xs text-[#475569]">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#BC4F32] shrink-0 mt-0.5" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#C59A3F] shrink-0" />
                      <a href={`tel:${office.phone.replace(/\s/g,'')}`} className="hover:text-[#BC4F32] transition-colors font-medium">{office.phone}</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#185265] shrink-0" />
                      <a href={`mailto:${office.email}`} className="hover:text-[#BC4F32] transition-colors">{office.email}</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#64748B] shrink-0" />
                      <span>{office.hours}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6 · CLOSING CTA ──────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-[#0B1626] via-[#122238] to-[#0B1626] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs text-[#C59A3F] font-medium">
            <HeartHandshake className="w-4 h-4" />
            <span>You are never alone in this journey</span>
          </div>
          <h2 className="font-serif-display text-4xl sm:text-5xl font-normal leading-tight">
            The First Conversation Is Always Free
          </h2>
          <p className="text-sm text-white/70 max-w-xl mx-auto leading-relaxed">
            Schedule a complimentary 45-minute orientation call with a licensed caseworker. No obligations. No pressure. Just clarity.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap pt-2">
            <a href="tel:+18001234567" className="px-6 py-3.5 rounded-xl bg-[#BC4F32] hover:bg-[#A54127] text-white text-sm font-semibold shadow-lg transition-all">
              Call +1 (800) 123-4567
            </a>
            <a href="#contact-form" className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold transition-all">
              Send a Written Inquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
