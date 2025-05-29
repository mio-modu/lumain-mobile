import React, { useEffect, useRef, useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import WhatWeDo from './pages/WhatWeDo';
import UseCases from './pages/UseCases';
import Contact from './pages/Contact';
import './App.css';

const sectionLabels = {
  ko: [
    { id: 'home', label: '홈' },
    { id: 'about', label: '회사소개' },
    { id: 'what-we-do', label: '주요 서비스' },
    { id: 'use-cases', label: '활용 사례' },
    { id: 'contact', label: '문의하기' },
  ],
  en: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'what-we-do', label: 'What We Do' },
    { id: 'use-cases', label: 'Use Cases' },
    { id: 'contact', label: 'Contact' },
  ]
};

function Logo() {
  return (
    <div className="logo">
      <span className="logo-text">
        lumain
        <span className="logo-dot" />
      </span>
    </div>
  );
}

function App() {
  const [lang, setLang] = useState('ko');
  const sectionRefs = useRef({});
  const parallaxRefs = useRef({});
  const [active, setActive] = useState('home');
  const [visibleSections, setVisibleSections] = useState({});
  const sections = sectionLabels[lang];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      let current = 'home';
      for (const { id } of sections) {
        const ref = sectionRefs.current[id];
        if (ref) {
          const { offsetTop } = ref;
          if (scrollPosition >= offsetTop) {
            current = id;
          }
        }
      }
      setActive(current);
      for (const { id } of sections) {
        const section = sectionRefs.current[id];
        const layers = parallaxRefs.current[id] || [];
        if (section && layers.length === 3) {
          const rect = section.getBoundingClientRect();
          const windowH = window.innerHeight;
          const progress = Math.min(Math.max((windowH - rect.top) / (windowH + rect.height), 0), 1);
          layers[0].style.transform = `translateY(${(progress - 0.5) * 40}px)`;
          layers[1].style.transform = `translateY(${(progress - 0.5) * 70}px)`;
          layers[2].style.transform = `translateY(${(progress - 0.5) * 110}px)`;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.15 }
    );
    sections.forEach(({ id }) => {
      const ref = sectionRefs.current[id];
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, [sections]);

  const handleNavClick = (id) => (e) => {
    e.preventDefault();
    const ref = sectionRefs.current[id];
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header className="header fixed-header">
        <Logo />
        <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
          <nav>
            {sections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={active === id ? 'active' : ''}
                onClick={handleNavClick(id)}
              >
                {label}
              </a>
            ))}
          </nav>
          <div style={{marginTop: '2rem', marginLeft: '0.2rem'}}>
            <button onClick={() => setLang('ko')} style={{marginRight: '0.5rem', fontWeight: lang==='ko'?700:400, background:'none', border:'none', color:'var(--white)', cursor:'pointer'}}>한국어</button>
            <button onClick={() => setLang('en')} style={{fontWeight: lang==='en'?700:400, background:'none', border:'none', color:'var(--white)', cursor:'pointer'}}>English</button>
          </div>
        </div>
      </header>
      
      <main className="main-content single-page">
        {sections.map(({ id }) => {
          let SectionComponent;
          if (id === 'home') SectionComponent = Home;
          else if (id === 'about') SectionComponent = About;
          else if (id === 'what-we-do') SectionComponent = WhatWeDo;
          else if (id === 'use-cases') SectionComponent = UseCases;
          else if (id === 'contact') SectionComponent = Contact;
          return (
            <section
              id={id}
              key={id}
              ref={el => (sectionRefs.current[id] = el)}
              className={`lumain-section animate-section${visibleSections[id] ? ' visible' : ''}`}
            >
              <div className="parallax-bg-layer1" ref={el => {
                if (!parallaxRefs.current[id]) parallaxRefs.current[id] = [];
                parallaxRefs.current[id][0] = el;
              }} />
              <div className="parallax-bg-layer2" ref={el => {
                if (!parallaxRefs.current[id]) parallaxRefs.current[id] = [];
                parallaxRefs.current[id][1] = el;
              }} />
              <div className="parallax-bg-layer3" ref={el => {
                if (!parallaxRefs.current[id]) parallaxRefs.current[id] = [];
                parallaxRefs.current[id][2] = el;
              }} />
              <SectionComponent lang={lang} />
            </section>
          );
        })}
      </main>
    </>
  );
}

export default App; 