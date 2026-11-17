/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { Navbar, PageView } from './components/Navbar';
import { HeroLanguages } from './components/HeroLanguages';
import { CountersSection } from './components/CountersSection';
import { FeaturesSection } from './components/FeaturesSection';
import { AppTourSection } from './components/AppTourSection';
import { BlogSection } from './components/BlogSection';
import { MediaSection } from './components/MediaSection';
import { ReviewsCarousel } from './components/ReviewsCarousel';
import { Footer } from './components/Footer';
import { CareersPage, ContactPage, EventsPage, MediaArchivePage } from './components/SubPages';

const TRACKED_SECTIONS = ['home', 'languages', 'features', 'apptour', 'blog', 'media'];

export default function App() {
  const [activePage, setActivePage] = useState<PageView>('home');
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    if (activePage !== 'home') return;

    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 120;
      let current = 'home';
      for (const id of TRACKED_SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    handleScrollSpy();
    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [activePage]);

  const handleScrollToSection = (sectionId: string) => {
    const scrollToEl = () => {
      const target = document.getElementById(sectionId);
      if (target) {
        const top = Math.max(0, target.offsetTop - 74);
        window.scrollTo({ top, behavior: 'smooth' });
      }
    };

    if (activePage !== 'home') {
      setActivePage('home');
      setActiveSection(sectionId);
      window.setTimeout(scrollToEl, 60);
    } else {
      setActiveSection(sectionId);
      scrollToEl();
    }
  };

  const handleNavigatePage = (page: PageView) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-[#191919]">
      <Navbar
        activePage={activePage}
        activeSection={activeSection}
        onNavigatePage={handleNavigatePage}
        onScrollToSection={handleScrollToSection}
      />

      {activePage === 'home' && (
        <main>
          <HeroLanguages />
          <CountersSection />
          <FeaturesSection />
          <AppTourSection />
          <BlogSection />
          <MediaSection onOpenMediaArchive={() => handleNavigatePage('media')} />
          <ReviewsCarousel />
        </main>
      )}

      {activePage === 'careers' && <CareersPage onBackHome={() => handleNavigatePage('home')} />}
      {activePage === 'events' && <EventsPage onBackHome={() => handleNavigatePage('home')} />}
      {activePage === 'contact' && <ContactPage onBackHome={() => handleNavigatePage('home')} />}
      {activePage === 'media' && (
        <MediaArchivePage onBackHome={() => handleNavigatePage('home')} />
      )}

      <Footer onOpenContactGrievance={() => handleNavigatePage('contact')} />
    </div>
  );
}
