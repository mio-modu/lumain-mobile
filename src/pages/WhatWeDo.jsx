import React from 'react';

export default function WhatWeDo({ lang }) {
  return (
    <section>
      {lang === 'ko' ? (
        <>
          <h2>주요 서비스</h2>
          <ul style={{marginTop: '1.5rem', paddingLeft: 0, listStyle: 'none', display: 'grid', gap: '1.5rem'}}>
            <li style={{background: 'rgba(37,99,255,0.08)', borderRadius: 'var(--radius)', padding: '1.3rem 1.5rem'}}>
              <strong>AI 전략 및 컨설팅</strong><br />
              조직이 지속가능하고 인간 중심적으로 AI를 활용할 수 있도록 안내합니다.
            </li>
            <li style={{background: 'rgba(37,99,255,0.08)', borderRadius: 'var(--radius)', padding: '1.3rem 1.5rem'}}>
              <strong>맞춤형 AI 솔루션</strong><br />
              실제 현장에 필요한 지능형 시스템을 설계하고 구축합니다.
            </li>
            <li style={{background: 'rgba(37,99,255,0.08)', borderRadius: 'var(--radius)', padding: '1.3rem 1.5rem'}}>
              <strong>윤리적 AI 및 책임 혁신</strong><br />
              모든 솔루션이 투명하고 공정하며, 사람에게 이로울 수 있도록 만듭니다.
            </li>
          </ul>
        </>
      ) : (
        <>
          <h2>What We Do</h2>
          <ul style={{marginTop: '1.5rem', paddingLeft: 0, listStyle: 'none', display: 'grid', gap: '1.5rem'}}>
            <li style={{background: 'rgba(37,99,255,0.08)', borderRadius: 'var(--radius)', padding: '1.3rem 1.5rem'}}>
              <strong>AI Strategy & Consulting</strong><br />
              Guiding organizations to leverage AI for sustainable, human-centered growth.
            </li>
            <li style={{background: 'rgba(37,99,255,0.08)', borderRadius: 'var(--radius)', padding: '1.3rem 1.5rem'}}>
              <strong>Custom AI Solutions</strong><br />
              Designing and building intelligent systems tailored to real-world needs.
            </li>
            <li style={{background: 'rgba(37,99,255,0.08)', borderRadius: 'var(--radius)', padding: '1.3rem 1.5rem'}}>
              <strong>Ethical AI & Responsible Innovation</strong><br />
              Ensuring every solution is transparent, fair, and beneficial for people.
            </li>
          </ul>
        </>
      )}
    </section>
  );
} 