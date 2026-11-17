import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SOCIAL_LINKS, STORE_LINKS } from '../data/way2newsData';

export type PageView = 'home' | 'careers' | 'events' | 'contact' | 'media';

interface NavbarProps {
  activePage: PageView;
  activeSection: string;
  onNavigatePage: (page: PageView) => void;
  onScrollToSection: (sectionId: string) => void;
}

const SECTION_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'languages', label: 'Languages' },
  { id: 'features', label: 'Features' },
  { id: 'apptour', label: 'App Tour' },
  { id: 'blog', label: 'Blog' },
  { id: 'media', label: 'Media' },
];

const PAGE_LINKS: { id: PageView; label: string }[] = [
  { id: 'careers', label: 'careers' },
  { id: 'events', label: 'Events' },
  { id: 'contact', label: 'Contact Us' },
];

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  activeSection,
  onNavigatePage,
  onScrollToSection,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setMobileOpen(false);
    onScrollToSection(sectionId);
  };

  const handlePageClick = (e: React.MouseEvent, page: PageView) => {
    e.preventDefault();
    setMobileOpen(false);
    onNavigatePage(page);
  };

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 border-b border-[#393939] transition-colors duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-xs' : 'bg-[#1F2020]'
      }`}
    >
      <div
        id="header-container"
        className="mx-auto max-w-[1300px] border-x border-[#393939] px-4 lg:px-0"
      >
        <div className="flex min-h-[74px] items-center justify-between">
          <a
            id="brand"
            href="#home"
            onClick={(e) => handleSectionClick(e, 'home')}
            className="flex shrink-0 items-center py-4 lg:px-8"
            aria-label="Way2News Home"
          >
            <img
              src="/images/logo.svg"
              alt="Way2News"
              className="h-8 w-auto lg:h-9"
              referrerPolicy="no-referrer"
            />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded text-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-[#ffb327] lg:hidden"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <nav
            id="navbar"
            aria-label="Primary Navigation"
            className="hidden lg:flex lg:items-center"
          >
            <ul id="top-menu" className="flex items-center">
              {SECTION_LINKS.map((link) => {
                const isActive = activePage === 'home' && activeSection === link.id;
                return (
                  <li key={link.id} className="py-5">
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleSectionClick(e, link.id)}
                      className={`font-roboto-condensed block whitespace-nowrap px-2.5 py-2 text-[14px] uppercase transition-colors ${
                        isActive ? 'text-[#ffb327]' : 'text-white hover:text-[#ffb327]'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}

              {PAGE_LINKS.map((link) => {
                const isActive = activePage === link.id;
                return (
                  <li key={link.id} className="py-5">
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handlePageClick(e, link.id)}
                      className={`font-roboto-condensed block whitespace-nowrap px-2.5 py-2 text-[14px] uppercase transition-colors ${
                        isActive ? 'text-[#ffb327]' : 'text-white hover:text-[#ffb327]'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}

              <li className="ml-2 border-l border-[#393939] px-3.5 py-5">
                <a
                  href={STORE_LINKS.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-roboto-condensed inline-block whitespace-nowrap rounded-[18px] bg-white px-5 py-2.5 text-[13px] font-bold uppercase text-black transition-transform duration-150 hover:scale-[1.03]"
                >
                  Get App Now
                </a>
              </li>

              {SOCIAL_LINKS.map((social) => (
                <li key={social.name} className="py-5">
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="inline-flex h-10 w-8 items-center justify-center transition-opacity hover:opacity-80"
                  >
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="h-4 w-auto object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {mobileOpen && (
          <div className="border-t border-[#393939] bg-black pb-6 pt-2 lg:hidden">
            <ul className="flex flex-col text-center">
              {SECTION_LINKS.map((link) => (
                <li key={link.id} className="border-b border-[#111]">
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleSectionClick(e, link.id)}
                    className="font-roboto-condensed block py-3 text-base uppercase text-white hover:text-[#ffb327]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              {PAGE_LINKS.map((link) => (
                <li key={link.id} className="border-b border-[#111]">
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handlePageClick(e, link.id)}
                    className="font-roboto-condensed block py-3 text-base uppercase text-white hover:text-[#ffb327]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="border-b border-[#111] py-4">
                <a
                  href={STORE_LINKS.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-roboto-condensed inline-block rounded-[18px] bg-white px-6 py-2.5 text-sm font-bold uppercase text-black"
                >
                  Get App Now
                </a>
              </li>
              <li className="flex items-center justify-center gap-6 pt-4">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="inline-flex h-10 w-10 items-center justify-center"
                  >
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="h-5 w-auto object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </a>
                ))}
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
