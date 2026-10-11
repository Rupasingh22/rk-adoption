import { Heart, Mail, Phone, Shield, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B1523] text-[#CBD5E1] pt-16 pb-12 border-t border-[#1E2E42] relative overflow-hidden">
      {/* Subtle background glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] pointer-events-none opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #C85A32 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1E2E42]/80">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C85A32] to-[#E07A5F] flex items-center justify-center text-white shadow-md">
                <Heart className="w-5 h-5 fill-white" />
              </div>
              <span className="text-2xl font-serif tracking-tight text-white font-bold">
                RK<span className="text-[#E07A5F]">-Adoption</span>
              </span>
            </div>
            
            <p className="text-sm leading-relaxed text-[#94A3B8] max-w-sm">
              An international humanitarian adoption guidance platform dedicated to uniting children with loving, permanently prepared families through ethical stewardship, legal dignity, and trauma-informed social care.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-[#94A3B8]">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#E07A5F] shrink-0" />
                <span>Adheres to Hague Convention & UNCRC Child Rights Principles</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E07A5F] shrink-0" />
                <span>24/7 Confidential Family Helpline: +919153832633 -ADOPT</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E07A5F] shrink-0" />
                <span>rupasingh10456@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links: Pathways */}
          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">
              Adoption Pathways
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#process" className="hover:text-white transition-colors">The 5-Step Journey</a></li>
              <li><a href="#eligibility" className="hover:text-white transition-colors">Eligibility Guidelines</a></li>
              <li><a href="#matching" className="hover:text-white transition-colors">Matching Principles</a></li>
              <li><a href="#parent-support" className="hover:text-white transition-colors">Counseling & Readiness</a></li>
              <li><a href="#child-welfare" className="hover:text-white transition-colors">Child Safeguarding</a></li>
            </ul>
          </div>

          {/* Quick Links: Resources */}
          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">
              Knowledge & Care
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#resources" className="hover:text-white transition-colors">Educational Guides</a></li>
              <li><a href="#stories" className="hover:text-white transition-colors">Family Experiences</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Frequently Asked Questions</a></li>
              <li><a href="#community" className="hover:text-white transition-colors">Support Circles</a></li>
              <li><a href="#trust" className="hover:text-white transition-colors">Ethical Charter</a></li>
            </ul>
          </div>

          {/* Newsletter / Bulletin */}
          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">
              Family Education Digest
            </h3>
            <p className="text-xs text-[#94A3B8] mb-3 leading-relaxed">
              Receive monthly peer-reviewed articles on attachment parenting, home studies, and adoption law.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-[#132235] border border-[#23354C] rounded-lg px-3 py-2 text-xs text-white placeholder-[#64748B] focus:outline-none focus:border-[#C85A32] transition-colors"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-[#C85A32] hover:bg-[#B24C27] text-white text-xs font-medium py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow-sm"
              >
                <span>Subscribe Securely</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
            <p className="text-[11px] text-[#64748B] mt-2">
              Strict privacy. Zero marketing spam.
            </p>
          </div>
        </div>

        {/* Regulatory & Ethical Disclaimer */}
        <div className="py-6 border-b border-[#1E2E42]/60 text-xs text-[#64748B] leading-relaxed space-y-2">
          <p>
            <strong className="text-[#94A3B8]">Important Legal & Ethical Notice:</strong> RK-Adoption is an educational and support platform committed to promoting ethical adoption and child welfare. Content provided on this website does not constitute formal legal counsel or guarantees of adoption approval. Legal placement, home study approvals, and final decrees are exclusively governed by statutory child welfare authorities and certified family courts in respective jurisdictions.
          </p>
          <p>
            In strict compliance with child protection mandates and international standards, RK-Adoption does not list identifiable public galleries of children. All illustrative stories and case simulations are presented with sensitive anonymization to respect child dignity.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] gap-4">
          <p>© {new Date().getFullYear()} RK-Adoption Global Initiative. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-[#94A3B8] transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-[#94A3B8] transition-colors">Terms of Service</a>
            <a href="#safeguarding" className="hover:text-[#94A3B8] transition-colors">Child Protection Policy</a>
            <a href="#accessibility" className="hover:text-[#94A3B8] transition-colors">Accessibility Statement</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
