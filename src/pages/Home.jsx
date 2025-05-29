import React from 'react';

export default function Home({ lang }) {
  return (
    <section style={{textAlign: 'center', padding: '4rem 2rem', position: 'relative'}}>
      {/* lumain-logo.png image */}

      {lang === 'ko' ? (
        <>
          <h1 style={{fontSize: '2.8rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.7rem', letterSpacing: '0.01em'}}>
            AI와 함께 인간의 잠재력을 확장합니다
          </h1>
          <p style={{fontSize: '1.3rem', color: 'var(--text-light)', maxWidth: 540, margin: '0 auto', lineHeight: 1.6}}>
            Lumain은 미래지향적 AI 기업으로, 사람과 조직이 지능적이고 인간 중심적인 솔루션을 통해 성장할 수 있도록 돕습니다. 우리는 기술이 인간의 잠재력을 대체하는 것이 아니라, 증폭시키는 데에 있다고 믿습니다.
          </p>
        </>
      ) : (
        <>
          <h1 style={{fontSize: '2.8rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.7rem', letterSpacing: '0.01em'}}>
            Expanding Human Potential with AI
          </h1>
          <p style={{fontSize: '1.3rem', color: 'var(--text-light)', maxWidth: 540, margin: '0 auto', lineHeight: 1.6}}>
            Lumain is a future-oriented AI company dedicated to empowering people and organizations through intelligent, human-centered solutions. We believe in technology that amplifies, not replaces, human potential.
          </p>
        </>
      )}
    </section>
  );
} 