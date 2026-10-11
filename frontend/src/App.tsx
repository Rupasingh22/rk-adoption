import { useState, useEffect } from 'react';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Index from './pages/Index';
import About from './pages/About';
import OurMission from './pages/about/OurMission';
import OurTeam from './pages/about/OurTeam';
import Accreditations from './pages/about/Accreditations';
import GlobalReach from './pages/about/GlobalReach';

// Adoption Pages
import AdoptionHub from './pages/adoption/AdoptionHub';
import ChildrenAvailable from './pages/adoption/ChildrenAvailable';
import TypesOfAdoption from './pages/adoption/TypesOfAdoption';
import EligibilityCriteria from './pages/adoption/EligibilityCriteria';
import AdoptionProcess from './pages/AdoptionProcess';
import Families from './pages/Families';
import ProspectiveParents from './pages/ProspectiveParents';
import BirthParents from './pages/BirthParents';
import AdoptiveFamilies from './pages/AdoptiveFamilies';
import SuccessStories from './pages/SuccessStories';

// Resources Pages
import FAQPage from './pages/resources/FAQPage';
import BlogArticlesPage from './pages/resources/BlogArticlesPage';
import LegalInformationPage from './pages/resources/LegalInformationPage';

// Auth & Utility Pages
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Register from './pages/Register';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname || '/';
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handleLocationChange);

    // Global link interceptor for seamless client-side SPA navigation
    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href) return;

      // Handle anchor jumps on the same page
      if (href.startsWith('#')) return;

      // Only intercept internal application routes
      if (
        href.startsWith('/') && 
        !href.startsWith('//') && 
        !target.getAttribute('download') &&
        target.getAttribute('target') !== '_blank'
      ) {
        // Known internal routes
        const knownRoutes = [
          '/', 
          '/about', 
          '/about/mission', 
          '/about/team', 
          '/about/accreditations', 
          '/about/global',
          '/adoption',
          '/adoption/children',
          '/adoption/types',
          '/adoption/eligibility',
          '/eligibility',
          '/process',
          '/adoption-process',
          '/process/guide',
          '/process/requirements',
          '/process/timeline',
          '/families',
          '/families/prospective',
          '/families/birth',
          '/families/adoptive',
          '/success-stories',
          '/resources/faqs',
          '/resources/blog',
          '/resources/legal',
          '/contact',
          '/login',
          '/register',
        ];
        const normalizedHref = href.split('#')[0];

        if (knownRoutes.includes(normalizedHref)) {
          e.preventDefault();
          if (window.location.pathname !== normalizedHref) {
            window.history.pushState({}, '', href);
            setCurrentPath(normalizedHref);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else if (href.includes('#')) {
            const hash = href.split('#')[1];
            const elem = document.getElementById(hash);
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleGlobalClick);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  // Determine active view component
  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/about':
        return <About />;
      case '/about/mission':
        return <OurMission />;
      case '/about/team':
        return <OurTeam />;
      case '/about/accreditations':
        return <Accreditations />;
      case '/about/global':
        return <GlobalReach />;
      case '/adoption':
        return <AdoptionHub />;
      case '/adoption/children':
        return <ChildrenAvailable />;
      case '/adoption/types':
        return <TypesOfAdoption />;
      case '/adoption/eligibility':
      case '/eligibility':
        return <EligibilityCriteria />;
      case '/process':
      case '/adoption-process':
      case '/process/guide':
      case '/process/requirements':
      case '/process/timeline':
        return <AdoptionProcess />;
      case '/families':
        return <Families />;
      case '/families/prospective':
        return <ProspectiveParents />;
      case '/families/birth':
        return <BirthParents />;
      case '/families/adoptive':
        return <AdoptiveFamilies />;
      case '/success-stories':
        return <SuccessStories />;
      case '/resources/faqs':
        return <FAQPage />;
      case '/resources/blog':
        return <BlogArticlesPage />;
      case '/resources/legal':
        return <LegalInformationPage />;
      case '/contact':
        return <ContactUs />;
      case '/login':
        return <Login />;
      case '/register':
        return <Register />;
      case '/':
      default:
        return <Index />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#1E293B]">
      {/* Existing Header */}
      <Header />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Matching Footer */}
      <Footer />
    </div>
  );
}
