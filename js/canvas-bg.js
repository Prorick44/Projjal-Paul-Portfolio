/**
 * CANVAS INTERACTIVE PARTICLE BACKGROUND
 * High performance, subtle constellation & ambient glow reacting to cursor
 */

(function () {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  let mouse = {
    x: width / 2,
    y: height / 2,
    radius: 140,
    active: false
  };

  const particles = [];
  const particleCount = Math.min(Math.floor((width * height) / 16000), 75);

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2 + 0.8;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.baseAlpha = Math.random() * 0.4 + 0.2;
      this.alpha = this.baseAlpha;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;

      // Mouse interaction
      if (mouse.active) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          this.x -= Math.cos(angle) * force * 1.5;
          this.y -= Math.sin(angle) * force * 1.5;
          this.alpha = Math.min(this.baseAlpha + 0.4, 0.9);
        } else {
          this.alpha = this.baseAlpha;
        }
      }
    }

    draw(color) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = color.replace('ALPHA', this.alpha.toFixed(2));
      ctx.fill();
    }
  }

  function init() {
    particles.length = 0;
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  function getThemeColor() {
    const theme = document.documentElement.getAttribute('data-theme') || 'default';
    if (theme === 'cyber') {
      return {
        node: 'rgba(0, 255, 157, ALPHA)',
        line: 'rgba(0, 229, 255, ALPHA)'
      };
    } else if (theme === 'midnight') {
      return {
        node: 'rgba(59, 130, 246, ALPHA)',
        line: 'rgba(56, 189, 248, ALPHA)'
      };
    } else if (theme === 'light') {
      return {
        node: 'rgba(79, 70, 229, ALPHA)',
        line: 'rgba(99, 102, 241, ALPHA)'
      };
    }
    // Default Deep Space
    return {
      node: 'rgba(99, 102, 241, ALPHA)',
      line: 'rgba(6, 182, 212, ALPHA)'
    };
  }

  function connectParticles(themeColors) {
    const maxDist = 130;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.15;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = themeColors.line.replace('ALPHA', alpha.toFixed(2));
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
  }

  let animationFrameId;

  function animate() {
    ctx.clearRect(0, 0, width, height);

    const themeColors = getThemeColor();

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw(themeColors.node);
    }

    connectParticles(themeColors);

    animationFrameId = requestAnimationFrame(animate);
  }

  // Event Listeners
  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    init();
  });

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
  });

  window.addEventListener('mouseleave', () => {
    mouse.active = false;
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animationFrameId);
    } else {
      animate();
    }
  });

  init();
  animate();
})();
