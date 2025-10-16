// ===== 배경 파티클(가벼운 캔버스 렌더) =====
(() => {
  const canvas = document.getElementById('bg');
  const ctx = canvas.getContext('2d', { alpha: true });
  let w, h, dpr, particles;

  const DOTS = 80;        // 점 개수 (모바일에서 자동 감소)
  const SPEED = 0.15;     // 이동 속도
  const LINK_DIST = 120;  // 선 연결 거리(px)
  const COLOR = 'rgba(255,255,255,0.2)'; // 은은한 밝은 회색

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.width = Math.floor(innerWidth * dpr);
    h = canvas.height = Math.floor(innerHeight * dpr);
    canvas.style.width = innerWidth + 'px';
    canvas.style.height = innerHeight + 'px';
    if (!particles) init();
  }

  function init() {
    const count = Math.max(40, Math.min(DOTS, Math.floor(innerWidth / 20)));
    particles = new Array(count).fill(0).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * SPEED * dpr,
      vy: (Math.random() - 0.5) * SPEED * dpr,
      r: (Math.random() * 1.8 + 0.6) * dpr
    }));
  }

  function step() {
    ctx.clearRect(0, 0, w, h);
    // 점 이동 & 경계 반사
    for (const p of particles) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
    }
    // 연결선
    ctx.beginPath();
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.hypot(dx, dy) / dpr;
        if (dist < LINK_DIST) {
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
        }
      }
    }
    ctx.strokeStyle = COLOR;
    ctx.lineWidth = 1.5 * dpr;
    ctx.stroke();

    // 점 그리기
    for (const p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = COLOR;
      ctx.fill();
    }

    requestAnimationFrame(step);
  }

  // 사용자 ‘모션 감소’ 선호 시 파티클 비활성
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!reduceMotion.matches) {
    window.addEventListener('resize', resize, { passive: true });
    resize();
    step();
  }
})();
