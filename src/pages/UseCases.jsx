import React from 'react';

const useCasesKo = [
  {
    title: '헬스케어 증강',
    desc: 'AI 기반 진단 및 워크플로우 도구로 의료진을 지원하고 환자 결과를 개선합니다.'
  },
  {
    title: '스마트 운영',
    desc: '비즈니스 프로세스의 지능형 자동화로 팀이 창의적이고 전략적인 업무에 집중할 수 있도록 합니다.'
  },
  {
    title: '맞춤형 학습',
    desc: '개인별 학습 속도와 내용에 맞춘 적응형 교육 플랫폼을 제공합니다.'
  },
  {
    title: '지속가능한 도시',
    desc: 'AI 기반 인사이트로 도시계획, 에너지 효율, 삶의 질을 향상시킵니다.'
  }
];

const useCasesEn = [
  {
    title: 'Healthcare Augmentation',
    desc: 'AI-powered diagnostics and workflow tools that support clinicians and improve patient outcomes.'
  },
  {
    title: 'Smart Operations',
    desc: 'Intelligent automation for business processes, freeing teams to focus on creative, strategic work.'
  },
  {
    title: 'Personalized Learning',
    desc: 'Adaptive education platforms that tailor content and pace to each learner\'s needs.'
  },
  {
    title: 'Sustainable Cities',
    desc: 'AI-driven insights for urban planning, energy efficiency, and better quality of life.'
  }
];

export default function UseCases({ lang }) {
  const cases = lang === 'ko' ? useCasesKo : useCasesEn;
  return (
    <section>
      <h2>{lang === 'ko' ? '활용 사례' : 'Use Cases'}</h2>
      <div className="use-cases-grid">
        {cases.map((uc, i) => (
          <div key={i} className="use-case-item">
            <h3>{uc.title}</h3>
            <p>{uc.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 