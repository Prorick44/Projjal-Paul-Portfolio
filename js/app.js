/**
 * MAIN PORTFOLIO APPLICATION LOGIC - PROJJAL PAUL
 * Dynamic data rendering, animations, modals, filtering, and theme controller
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderHeroData();
  initTypingEffect();
  renderStats();
  renderProjects('all');
  initProjectFilters();
  renderSkills();
  renderExperienceAndEducation();
  renderContactInfo();
  initModals();
  initContactForm();
  initScrollEffects();
  initMobileNav();
});

/* ==========================================================================
   THEME CONTROLLER
   ========================================================================== */
function initTheme() {
  const savedTheme = localStorage.getItem('portfolio_theme') || 'default';
  setTheme(savedTheme);

  const themeBtn = document.getElementById('theme-btn');
  const themeDropdown = document.getElementById('theme-dropdown');

  if (themeBtn && themeDropdown) {
    themeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      themeDropdown.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      themeDropdown.classList.remove('show');
    });

    themeDropdown.querySelectorAll('.theme-option').forEach((opt) => {
      opt.addEventListener('click', () => {
        const theme = opt.getAttribute('data-theme');
        setTheme(theme);
        themeDropdown.classList.remove('show');
      });
    });
  }
}

function setTheme(theme) {
  if (theme === 'default') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', theme);
  }
  localStorage.setItem('portfolio_theme', theme);

  // Update active state in dropdown
  document.querySelectorAll('.theme-option').forEach((opt) => {
    opt.classList.toggle('active', opt.getAttribute('data-theme') === theme);
  });
}

// Expose globally for terminal
window.setPortfolioTheme = setTheme;

/* ==========================================================================
   HERO SECTION & TYPING EFFECT
   ========================================================================== */
function renderHeroData() {
  const p = PORTFOLIO_DATA.personal;
  
  const nameEl = document.getElementById('hero-name');
  if (nameEl) nameEl.textContent = p.name;

  const bioEl = document.getElementById('hero-bio');
  if (bioEl) bioEl.textContent = p.bio;

  const availEl = document.getElementById('availability-text');
  if (availEl) availEl.textContent = p.availability;

  // Social Links
  const socialsContainer = document.getElementById('hero-socials');
  if (socialsContainer) {
    socialsContainer.innerHTML = `
      <a href="${p.github}" target="_blank" rel="noopener" class="social-chip" title="GitHub (Prorick44)" aria-label="GitHub">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
      </a>
      <a href="${p.linkedin}" target="_blank" rel="noopener" class="social-chip" title="LinkedIn (projjal2002)" aria-label="LinkedIn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
      </a>
      <a href="${p.codechef}" target="_blank" rel="noopener" class="social-chip" title="CodeChef (3★ 1600+)" aria-label="CodeChef">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
      </a>
      <a href="mailto:${p.email}" class="social-chip" title="Email: ${p.email}" aria-label="Email">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
      </a>
      <a href="tel:${p.phone}" class="social-chip" title="Call: ${p.phone}" aria-label="Phone">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      </a>
    `;
  }
}

function initTypingEffect() {
  const typingEl = document.getElementById('typed-role');
  if (!typingEl) return;

  const roles = PORTFOLIO_DATA.personal.roles;
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 90;

  function type() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
      typingEl.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 40;
    } else {
      typingEl.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 80;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typeSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typeSpeed = 350;
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

function renderStats() {
  const container = document.getElementById('stats-strip');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.personal.stats.map(s => `
    <div class="glass-card stat-card">
      <div class="stat-value gradient-text">${s.value}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join('');
}

/* ==========================================================================
   PROJECTS SHOWCASE & FILTERING
   ========================================================================== */
function renderProjects(filterCategory = 'all') {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const projects = PORTFOLIO_DATA.projects.filter(p => {
    if (filterCategory === 'all') return true;
    return p.category === filterCategory;
  });

  if (projects.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 3rem; color: var(--text-muted);">No projects found for this category.</div>`;
    return;
  }

  grid.innerHTML = projects.map(p => `
    <div class="glass-card project-card" data-project-id="${p.id}">
      <div class="project-media-wrap">
        <img src="${p.image}" alt="${p.title}" class="project-img" loading="lazy" />
        <span class="project-badge-pill">${p.badge}</span>
        <div class="project-overlay-actions">
          <button class="btn btn-primary btn-sm open-project-modal" data-id="${p.id}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
            Case Study
          </button>
          <a href="${p.liveUrl}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            Live Demo
          </a>
        </div>
      </div>
      <div class="project-content">
        <span class="project-category-tag">${p.categoryLabel}</span>
        <h3 class="project-card-title">${p.title}</h3>
        <p class="project-card-desc">${p.tagline}</p>
        <div class="project-tags">
          ${p.techStack.slice(0, 4).map(t => `<span class="tech-tag">${t}</span>`).join('')}
          ${p.techStack.length > 4 ? `<span class="tech-tag">+${p.techStack.length - 4}</span>` : ''}
        </div>
        <div class="project-footer">
          <button class="project-view-details-btn open-project-modal" data-id="${p.id}">
            View Details & Metrics →
          </button>
          <a href="${p.githubUrl}" target="_blank" rel="noopener" class="social-chip" style="width:34px;height:34px;font-size:0.9rem;" title="View Source Code">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
          </a>
        </div>
      </div>
    </div>
  `).join('');

  // Attach modal triggers
  grid.querySelectorAll('.open-project-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      openProjectModal(id);
    });
  });
}

function initProjectFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderProjects(cat);
    });
  });
}

/* ==========================================================================
   SKILLS & TECH STACK
   ========================================================================== */
function renderSkills() {
  const container = document.getElementById('skills-grid');
  if (!container) return;

  const categoryIcons = {
    layout: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>`,
    server: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect><rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
    database: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
    cloud: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`
  };

  container.innerHTML = PORTFOLIO_DATA.skills.map(cat => `
    <div class="glass-card skill-category-card">
      <div class="skill-cat-header">
        <div class="skill-cat-icon">
          ${categoryIcons[cat.icon] || categoryIcons.layout}
        </div>
        <h3 class="skill-cat-title">${cat.category}</h3>
      </div>
      <div class="skill-items-list">
        ${cat.items.map(item => `
          <div class="skill-item-row">
            <div class="skill-item-header">
              <span>${item.name}</span>
              <span class="skill-item-tag">${item.tag}</span>
            </div>
            <div class="skill-bar-track">
              <div class="skill-bar-fill" data-level="${item.level}%"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  // Animate skill bars on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
          bar.style.width = bar.getAttribute('data-level');
        });
      }
    });
  }, { threshold: 0.15 });

  container.querySelectorAll('.skill-category-card').forEach(card => observer.observe(card));
}

/* ==========================================================================
   EXPERIENCE & EDUCATION TIMELINE
   ========================================================================== */
function renderExperienceAndEducation() {
  const expContainer = document.getElementById('experience-timeline');
  if (expContainer) {
    expContainer.innerHTML = PORTFOLIO_DATA.experience.map(exp => `
      <div class="timeline-item">
        <div class="timeline-node"></div>
        <div class="glass-card timeline-content">
          <div class="timeline-header">
            <div>
              <h3 class="timeline-role">${exp.role}</h3>
              <span class="timeline-company">${exp.company}</span> • <span style="font-size:0.85rem;color:var(--text-muted);">${exp.location}</span>
            </div>
            <span class="timeline-period">${exp.period}</span>
          </div>
          <p class="timeline-desc">${exp.description}</p>
          <ul class="timeline-achievements">
            ${exp.achievements.map(a => `<li>${a}</li>`).join('')}
          </ul>
          <div class="timeline-tech-stack">
            ${exp.skills.map(s => `<span class="tech-tag">${s}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }

  // Render Education Grid
  const eduContainer = document.getElementById('education-grid');
  if (eduContainer && PORTFOLIO_DATA.education) {
    eduContainer.innerHTML = PORTFOLIO_DATA.education.map(edu => `
      <div class="glass-card" style="padding: 1.8rem;">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.8rem;">
          <h3 style="font-size:1.15rem; font-weight:700;">${edu.degree}</h3>
          <span class="timeline-period">${edu.period}</span>
        </div>
        <div style="color:var(--accent-secondary); font-weight:600; margin-bottom:0.4rem;">${edu.institution}</div>
        <div style="display:inline-block; padding:0.2rem 0.6rem; border-radius:var(--radius-full); background:rgba(16,185,129,0.15); color:var(--accent-success); font-weight:700; font-family:var(--font-mono); font-size:0.85rem; margin-bottom:0.8rem;">
          ${edu.score}
        </div>
        <p style="font-size:0.9rem; color:var(--text-secondary); line-height:1.55;">${edu.details}</p>
      </div>
    `).join('');
  }

  // Render Achievements
  const achContainer = document.getElementById('achievements-grid');
  if (achContainer && PORTFOLIO_DATA.achievements) {
    achContainer.innerHTML = PORTFOLIO_DATA.achievements.map(ach => `
      <div class="glass-card" style="padding: 1.6rem; display:flex; gap:1rem; align-items:flex-start;">
        <div style="width:36px; height:36px; border-radius:10px; background:rgba(99,102,241,0.15); border:1px solid var(--border-glow); display:flex; align-items:center; justify-content:center; color:var(--accent-primary); flex-shrink:0;">
          ✦
        </div>
        <div>
          <h4 style="font-size:1.05rem; font-weight:700; margin-bottom:0.3rem;">${ach.title}</h4>
          <p style="font-size:0.9rem; color:var(--text-secondary); line-height:1.5;">${ach.desc}</p>
        </div>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   CONTACT SECTION
   ========================================================================== */
function renderContactInfo() {
  const p = PORTFOLIO_DATA.personal;
  const container = document.getElementById('contact-direct-items');
  if (!container) return;

  container.innerHTML = `
    <div class="contact-direct-item">
      <div class="contact-icon-box">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      </div>
      <div class="contact-item-meta">
        <span class="contact-meta-label">Phone Direct</span>
        <div style="display:flex;align-items:center;gap:0.5rem;">
          <a href="tel:${p.phone}" class="contact-meta-value">${p.phone}</a>
          <button class="copy-btn" data-copy="${p.phone}" title="Copy Phone Number">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
          </button>
        </div>
      </div>
    </div>

    <div class="contact-direct-item">
      <div class="contact-icon-box">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
      </div>
      <div class="contact-item-meta">
        <span class="contact-meta-label">Email Address</span>
        <div style="display:flex;align-items:center;gap:0.5rem;">
          <a href="mailto:${p.email}" class="contact-meta-value">${p.email}</a>
          <button class="copy-btn" data-copy="${p.email}" title="Copy Email">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
          </button>
        </div>
      </div>
    </div>

    <div class="contact-direct-item">
      <div class="contact-icon-box">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
      </div>
      <div class="contact-item-meta">
        <span class="contact-meta-label">Location</span>
        <span class="contact-meta-value">${p.location}</span>
      </div>
    </div>

    <div class="contact-direct-item">
      <div class="contact-icon-box">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
      </div>
      <div class="contact-item-meta">
        <span class="contact-meta-label">CodeChef Competitive</span>
        <a href="${p.codechef}" target="_blank" rel="noopener" class="contact-meta-value" style="color:var(--accent-secondary);">
          CodeChef 3★ (1600+ Rating) ↗
        </a>
      </div>
    </div>
  `;

  // Attach copy event listeners
  container.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-copy');
      navigator.clipboard.writeText(text).then(() => {
        showToast(`Copied "${text}" to clipboard!`, 'success');
      });
    });
  });
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const message = document.getElementById('form-message').value.trim();

    if (!name || !email || !message) {
      showToast('Please fill out all required fields.', 'error');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = `<span>Sending...</span>`;
    submitBtn.disabled = true;

    setTimeout(() => {
      showToast(`Thank you, ${name}! Your message has been sent to Projjal.`, 'success');
      form.reset();
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }, 1200);
  });
}

/* ==========================================================================
   MODALS SYSTEM
   ========================================================================== */
function initModals() {
  const modalBackdrop = document.getElementById('project-modal');
  const resumeModal = document.getElementById('resume-modal');

  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      closeAllModals();
    });
  });

  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeAllModals();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllModals();
  });

  document.querySelectorAll('.trigger-resume-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openResumeModal();
    });
  });
}

function closeAllModals() {
  document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('active'));
  document.body.style.overflow = '';
}

function openProjectModal(projectId) {
  const p = PORTFOLIO_DATA.projects.find(proj => proj.id === projectId);
  if (!p) return;

  const modal = document.getElementById('project-modal');
  const body = document.getElementById('project-modal-content');
  if (!modal || !body) return;

  body.innerHTML = `
    <div class="modal-media-banner">
      <img src="${p.image}" alt="${p.title}" class="modal-media-img" />
    </div>
    <div class="modal-body">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:1rem;margin-bottom:1rem;">
        <div>
          <span class="project-category-tag">${p.categoryLabel}</span>
          <h2 style="font-size:1.8rem;font-weight:800;margin-top:0.2rem;">${p.title}</h2>
        </div>
        <div style="display:flex;gap:0.8rem;">
          <a href="${p.liveUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">Live Demo ↗</a>
          <a href="${p.githubUrl}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm">GitHub ↗</a>
        </div>
      </div>

      <p style="font-size:1.05rem;line-height:1.7;margin-bottom:1.5rem;color:var(--text-secondary);">${p.description}</p>

      <!-- Key Metrics Strip -->
      <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:1rem;margin-bottom:1.8rem;">
        ${p.metrics.map(m => `
          <div class="glass-card" style="padding:1rem;text-align:center;">
            <div style="font-size:1.3rem;font-weight:800;color:var(--accent-secondary);font-family:var(--font-heading);">${m.value}</div>
            <div style="font-size:0.8rem;color:var(--text-muted);">${m.label}</div>
          </div>
        `).join('')}
      </div>

      <!-- Highlights -->
      <div style="margin-bottom:1.8rem;">
        <h4 style="font-size:1.1rem;margin-bottom:0.8rem;">Key Architecture & Accomplishments</h4>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:0.6rem;">
          ${p.highlights.map(h => `
            <li style="font-size:0.95rem;color:var(--text-secondary);position:relative;padding-left:1.4rem;">
              <span style="position:absolute;left:0;color:var(--accent-primary);">✦</span> ${h}
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- Tech Stack -->
      <div>
        <h4 style="font-size:1.1rem;margin-bottom:0.8rem;">Technologies Used</h4>
        <div style="display:flex;flex-wrap:wrap;gap:0.5rem;">
          ${p.techStack.map(t => `<span class="tech-tag" style="padding:0.4rem 0.8rem;font-size:0.85rem;">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function openResumeModal() {
  const modal = document.getElementById('resume-modal');
  const body = document.getElementById('resume-modal-content');
  if (!modal || !body) return;

  const p = PORTFOLIO_DATA.personal;
  const r = p.resumeDetails;

  body.innerHTML = `
    <div class="modal-body">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:1rem;border-bottom:1px solid var(--border-subtle);padding-bottom:1.5rem;margin-bottom:1.5rem;">
        <div>
          <h2 style="font-size:2rem;font-weight:800;">${p.name}</h2>
          <p style="color:var(--accent-secondary);font-weight:600;">${p.title}</p>
          <p style="font-size:0.85rem;color:var(--text-muted);">${p.location} • ${p.phone} • ${p.email}</p>
        </div>
        <button class="btn btn-primary btn-sm" onclick="window.print()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
          Print / Save PDF
        </button>
      </div>

      <div style="margin-bottom:1.5rem;">
        <h4 style="font-size:1.1rem;margin-bottom:0.5rem;color:var(--accent-primary);">Career Objective & Summary</h4>
        <p style="font-size:0.95rem;line-height:1.6;color:var(--text-secondary);">${r.summary}</p>
      </div>

      <div style="margin-bottom:1.5rem;">
        <h4 style="font-size:1.1rem;margin-bottom:0.5rem;color:var(--accent-primary);">Selected Accomplishments & Highlights</h4>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:0.5rem;">
          ${r.highlights.map(h => `
            <li style="font-size:0.92rem;color:var(--text-secondary);position:relative;padding-left:1.2rem;">
              <span style="position:absolute;left:0;color:var(--accent-secondary);">▹</span> ${h}
            </li>
          `).join('')}
        </ul>
      </div>

      <div style="margin-bottom:1.5rem;">
        <h4 style="font-size:1.1rem;margin-bottom:0.5rem;color:var(--accent-primary);">Education</h4>
        <div style="display:flex;flex-direction:column;gap:0.8rem;">
          ${r.educationList.map(edu => `
            <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;">
              <div>
                <div style="font-size:0.95rem;font-weight:600;">${edu.degree}</div>
                <div style="font-size:0.85rem;color:var(--text-muted);">${edu.institution}</div>
              </div>
              <div style="text-align:right;">
                <div style="font-size:0.85rem;font-weight:600;color:var(--accent-success);">${edu.score}</div>
                <div style="font-size:0.8rem;color:var(--text-muted);">${edu.year}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <div>
        <h4 style="font-size:1.1rem;margin-bottom:0.5rem;color:var(--accent-primary);">Languages</h4>
        <div style="display:flex;gap:1.5rem;font-size:0.9rem;color:var(--text-secondary);">
          ${r.languages.map(l => `<div><b>${l.name}</b> (${l.level})</div>`).join('')}
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/* ==========================================================================
   SCROLL EFFECTS, SCROLL SPY & NAVBAR
   ========================================================================== */
function initScrollEffects() {
  const navbar = document.getElementById('navbar');
  const scrollProgress = document.getElementById('scroll-progress');
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollY / docHeight) * 100;

    if (scrollProgress) scrollProgress.style.width = `${scrollPercent}%`;

    if (navbar) {
      if (scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    if (scrollTopBtn) {
      if (scrollY > 400) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }

    // Scroll spy
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-nav-toggle');
  const navLinks = document.getElementById('nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }
}

/* ==========================================================================
   TOAST NOTIFICATION ENGINE
   ========================================================================== */
function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';

  const icon = type === 'success' ? '✓' : type === 'error' ? '⚠' : 'ℹ';
  const color = type === 'success' ? 'var(--accent-success)' : type === 'error' ? '#ef4444' : 'var(--accent-secondary)';

  toast.innerHTML = `<span style="color:${color};font-weight:bold;font-size:1.1rem;">${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
