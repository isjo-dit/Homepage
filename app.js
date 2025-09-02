// 모바일 내비 토글
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (toggle) {
  toggle.addEventListener('click', () => {
    const expanded = nav.getAttribute('aria-expanded') === 'true';
    nav.setAttribute('aria-expanded', (!expanded).toString());
    toggle.setAttribute('aria-expanded', (!expanded).toString());
  });
}

// 스무스 스크롤
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) { e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
  })
});

// 폼 데모 처리 (GitHub Pages엔 서버가 없으므로 표시만)
const form = document.getElementById('contact-form');
const status = document.getElementById('status');
if (form) {
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = new FormData(form);
    status.textContent = `문의가 접수되었다고 가정합니다 — ${data.get('name')} / ${data.get('email')}`;
    form.reset();
  });
}

// 푸터 연도
document.getElementById('year').textContent = new Date().getFullYear();
