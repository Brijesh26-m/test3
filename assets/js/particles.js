/**
 * Cinematic glowing particles in purple/pink for landing/portfolio pages.
 * (approx. 70 dots, slow/soft, fully responsive, non-blocking)
 */
window.onload = function() {
  const id = 'main-particle-canvas';
  if (document.getElementById(id)) return;
  const holder = document.getElementById('particles-js') || document.body;
  const canvas = document.createElement('canvas');
  canvas.id = id;
  holder.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let w, h;
  let particles = [];

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  function Particle() {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.radius = Math.random() * 2.3 + 1.5;
    this.vx = (Math.random() - 0.5) * 0.13;
    this.vy = (Math.random() - 0.5) * 0.13;
    this.alpha = Math.random() * 0.34 + 0.19;
    const hue = 265 + Math.random() * 60;
    this.color = `hsla(${hue},86%,74%,${this.alpha})`;
    this.glow = `hsla(${hue},88%,79%,0.19)`;
  }

  function initParticles(N) {
    particles = [];
    for (let i = 0; i < N; i++) {
      particles.push(new Particle());
    }
  }
  initParticles(100);

  function animate() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = 0.58 + 0.38 * p.alpha;
      ctx.shadowColor = "#dfc3ff";
      ctx.shadowBlur = 13 + p.radius * 4;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius * 2.3, 0, 2 * Math.PI, false);
      ctx.fillStyle = p.glow;
      ctx.globalAlpha = 0.17 * p.alpha;
      ctx.shadowColor = "#ca57ef";
      ctx.shadowBlur = 25;
      ctx.fill();

      p.x += p.vx; 
      p.y += p.vy;
      if (p.x < -12) p.x = w + 10;
      if (p.y < -12) p.y = h + 10;
      if (p.x > w + 12) p.x = -10;
      if (p.y > h + 12) p.y = -10;
    });
    ctx.globalAlpha = 1.0;
    requestAnimationFrame(animate);
  }
  animate();
};



const isA51A71 =
  window.innerWidth >= 410 && window.innerWidth <= 420 &&
  window.innerHeight >= 890 && window.innerHeight <= 930;

const baseParticlesConfig = {
  particles: {
    number: { value: 90, density: { enable: true, value_area: 900 } },
    // keep all your existing options here
  },
  // interactivity, etc.
};

// Only run particles on non‑A51/A71 devices
if (!isA51A71) {
  particlesJS("particles-js", baseParticlesConfig);
}


const isSmallPhone = window.innerWidth <= 480;

const particlesConfig = {
  particles: {
    number: { value: 90, density: { enable: true, value_area: 900 } },
    // keep your existing particle options
  },
  // keep interactivity, etc.
};

if (!isSmallPhone) {
  particlesJS("particles-js", particlesConfig);
}
