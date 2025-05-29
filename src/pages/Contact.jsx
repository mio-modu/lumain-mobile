import React from 'react';

export default function Contact({ lang }) {
  return (
    <div className="contact-centered">
      <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem' }}>{lang === 'ko' ? '문의하기' : 'Contact'}</h2>
      <form style={{ marginTop: '1.5rem', display: 'grid', gap: '1.5rem', maxWidth: 600 }}>
        <input type="text" placeholder={lang === 'ko' ? '이름' : 'Your Name'} required style={inputStyle} />
        <input type="email" placeholder={lang === 'ko' ? '이메일' : 'Your Email'} required style={inputStyle} />
        <textarea placeholder={lang === 'ko' ? '문의 내용' : 'Your Message'} required rows={5} style={{ ...inputStyle, resize: 'vertical' }} />
        <button type="submit" style={buttonStyle}>{lang === 'ko' ? '메시지 보내기' : 'Send Message'}</button>
      </form>
      <div style={{ marginTop: '2.5rem', color: 'var(--text-light)', fontSize: '1.3rem' }}>
        <div>Email: <a href="mailto:psen7747@gmail.com" style={{ color: 'var(--accent-blue)' }}>psen7747@gmail.com</a></div>
        <div style={{ marginTop: '0.75rem' }}>{lang === 'ko' ? '위치: 미래도시, 지구' : 'Location: Future City, Earth'}</div>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: '1.2em 1.5em',
  borderRadius: 'var(--radius)',
  border: 'none',
  fontSize: '1.3rem',
  fontFamily: 'inherit',
  background: 'rgba(255,255,255,0.12)',
  color: 'var(--white)',
  outline: 'none',
};

const buttonStyle = {
  padding: '1.2em 1.5em',
  borderRadius: 'var(--radius)',
  border: 'none',
  background: 'var(--accent-blue)',
  color: 'var(--white)',
  fontWeight: 600,
  fontSize: '1.3rem',
  fontFamily: 'inherit',
  cursor: 'pointer',
  transition: 'background 0.2s',
}; 