/**
 * PROJJAL PAUL - AI PORTFOLIO CHATBOT ASSISTANT
 * =========================================================================
 * Interactive AI Assistant trained on Projjal's resume, technical experience,
 * projects (CodeCollab, Weather Dashboard, etc.), education (8.58 CGPA),
 * skills, and competitive programming milestones.
 * =========================================================================
 */

(function () {
  // Knowledge Base & NLP Response Engine
  const BOT_KNOWLEDGE = {
    greetings: [
      "Hello! I am **Projjal's AI Assistant**. How can I help you explore his portfolio, skills, projects, or background today? ⚡",
      "Hi there! Welcome to Projjal Paul's portfolio. Ask me anything about his full-stack projects, competitive programming stats, or how to get in touch! 🚀",
      "Greetings! Looking for information about Projjal's technical stack, CodeCollab project, or education? I'm here to assist! 💻"
    ],

    intents: [
      {
        id: "codecollab",
        keywords: ["codecollab", "interview", "monaco", "webrtc", "socket.io", "socket", "collaborative", "collaboration", "realtime coding", "real-time coding", "coding room", "firebase auth", "video call"],
        response: `**Real-Time Interview Platform (CodeCollab)** *(2025)*:
• **Overview**: A full-stack real-time collaborative coding platform designed for technical interviews.
• **Key Features**:
  - Synchronized coding rooms with **Monaco Editor** & **Socket.io** (<50ms latency).
  - Integrated **WebRTC video conferencing** for live interviewer-candidate communication.
  - **Firebase Google Authentication** with role-based access (host vs candidate) and shareable room links.
  - In-room live chat, typing indicators, code execution, and code download.
• **Tech Stack**: \`React.js\`, \`Node.js\`, \`Express.js\`, \`Socket.io\`, \`Monaco Editor\`, \`Firebase\`, \`WebRTC\`
• **Code & Demo**: Available on [GitHub (Prorick44)](https://github.com/Prorick44).`,
        actions: [
          { label: "Open Case Study", action: "openModal:codecollab-interview-platform" },
          { label: "View GitHub Repo", url: "https://github.com/Prorick44" }
        ]
      },
      {
        id: "weather",
        keywords: ["weather", "dashboard", "openweather", "chart.js", "caching", "debounc", "forecast", "cities"],
        response: `**Real-Time Weather Dashboard** *(2024)*:
• **Overview**: A high-performance dynamic weather analytics dashboard delivering live weather data for **200,000+ cities**.
• **Highlights**:
  - Implemented smart search **debouncing & client-side caching**, reducing API overhead by **40%**.
  - Interactive **Chart.js** 7-day temperature & precipitation forecast charts.
  - Responsive, modern UI with 90+ Lighthouse score.
• **Tech Stack**: \`React.js\`, \`Redux Toolkit\`, \`OpenWeather API\`, \`Chart.js\`, \`CSS3\`, \`Vercel\`.`,
        actions: [
          { label: "View Case Study", action: "openModal:realtime-weather-dashboard" }
        ]
      },
      {
        id: "projects",
        keywords: ["project", "projects", "portfolio", "built", "work", "apps", "application", "mern"],
        response: `Here are Projjal's top featured projects:
1. **Real-Time Interview Platform (CodeCollab)** *(2025)*: Collaborative code editor with Monaco Editor, Socket.io, Firebase Auth, and WebRTC video conferencing.
2. **Real-Time Weather Dashboard** *(2024)*: Live metrics for 200,000+ cities with 40% API reduction via caching/debouncing and Chart.js forecasts.
3. **1000+ Algorithmic Problem Solving & Code Vault**: Repository of 1,000+ C++/Java solutions with CodeChef 3★ rating.
4. **Full-Stack Web Development Suite**: 5+ personal projects built with React, Node.js, Express, MongoDB, MySQL, and Redux Toolkit.`,
        actions: [
          { label: "Explore CodeCollab", action: "openModal:codecollab-interview-platform" },
          { label: "Scroll to Projects", action: "scrollTo:#projects" }
        ]
      },
      {
        id: "skills",
        keywords: ["skill", "skills", "stack", "tech", "technology", "technologies", "languages", "programming", "tools", "c++", "java", "python", "react", "node", "mongodb", "redux", "sql"],
        response: `Here is Projjal's core technical ecosystem:
• **Programming Languages**: C, C++ (STL & DSA), Java, Python, JavaScript (ES6+), SQL, HTML5, CSS3.
• **Frontend & Real-Time**: React.js, Redux Toolkit, Socket.io, WebRTC, Monaco Editor, Chart.js, Responsive UI (90+ Lighthouse).
• **Backend & Databases**: Node.js, Express.js, MongoDB, Mongoose, MySQL, Firebase, RESTful APIs.
• **Tools & Platforms**: Git, GitHub, Vercel, Render, Postman, CodeChef.`,
        actions: [
          { label: "View Skills Section", action: "scrollTo:#skills" }
        ]
      },
      {
        id: "education",
        keywords: ["education", "college", "degree", "cgpa", "b.tech", "btech", "school", "marks", "percentage", "university", "institute", "future institute"],
        response: `**Academic Qualifications**:
1. **B.Tech in Computer Science** (2021 – 2025)
   • **Institution**: Future Institute of Engineering and Management
   • **Score**: **CGPA: 8.58**
   • Focus: DSA, OOP, DBMS, Web Architecture, Operating Systems.
2. **Higher Secondary Education (CBSE Class XII)** (2021)
   • **Institution**: Lal Bahadur Shastri Sr. Sec.
   • **Score**: **Percentage: 91.20%**
3. **Secondary Education (WBBSE Class X)** (2019)
   • **Institution**: Patha Bhavan (Dankuni)
   • **Score**: **Percentage: 91.14%**`,
        actions: [
          { label: "View Education Details", action: "scrollTo:#experience" }
        ]
      },
      {
        id: "competitive",
        keywords: ["codechef", "dsa", "leetcode", "competitive", "contest", "contests", "rating", "rank", "ranking", "problems", "algorithms", "data structures"],
        response: `**Competitive Programming Milestones**:
• **CodeChef Rating**: **3-Star (1600+ Rating)**
• **Contests**: Participated in **20+ rated contests** with consistent **top 10% finishes**.
• **Problems Solved**: Over **1,000+ algorithmic coding problems** solved across platforms in C++, Java, and Python.
• **Core Strengths**: Dynamic Programming, Graph Algorithms, Trees, Bit Manipulation, and custom fast I/O optimization.`,
        actions: [
          { label: "Visit CodeChef Profile", url: "https://www.codechef.com/users/projjal2002" }
        ]
      },
      {
        id: "experience",
        keywords: ["experience", "background", "journey", "work", "mentor", "mentorship", "leadership"],
        response: `**Technical Experience & Leadership**:
• **Full Stack Web Development** (2023 – Present):
  - Built & maintained 5+ full-stack web applications using MERN stack with RESTful APIs.
  - Implemented centralized Redux Toolkit state management and achieved 90+ Lighthouse performance scores.
• **Technical Mentor**: Assisted junior students in understanding core DSA concepts and React fundamentals.
• **Community**: Active contributor to open source discussions and developer forums.`,
        actions: [
          { label: "View Experience", action: "scrollTo:#experience" }
        ]
      },
      {
        id: "contact",
        keywords: ["contact", "email", "phone", "call", "reach", "message", "hire", "hiring", "job", "opportunity", "location", "linkedin", "github"],
        response: `**Get in Touch with Projjal Paul**:
• **Email**: [projjal2003@gmail.com](mailto:projjal2003@gmail.com)
• **Phone**: [+91-9073481347](tel:+919073481347)
• **LinkedIn**: [linkedin.com/in/projjal2002](https://linkedin.com/in/projjal2002)
• **GitHub**: [github.com/Prorick44](https://github.com/Prorick44)
• **Location**: West Bengal, India (Open to Remote & Onsite roles)`,
        actions: [
          { label: "Send Message Now", action: "scrollTo:#contact" },
          { label: "View Resume / CV", action: "openResumeModal" }
        ]
      },
      {
        id: "resume",
        keywords: ["resume", "cv", "pdf", "download", "summary", "objective"],
        response: `**Career Objective & Summary**:
"Result-oriented Software Engineer with a B.Tech in Computer Science (8.58 CGPA) and strong problem-solving skills. Proven ability to build full stack web applications using the MERN stack with 1000+ DSA problems solved and CodeChef 3★ rating."

You can view the full printable CV directly through the portfolio!`,
        actions: [
          { label: "Open Resume Viewer", action: "openResumeModal" }
        ]
      },
      {
        id: "about",
        keywords: ["who are you", "who is projjal", "about", "bio", "intro", "introduction"],
        response: `**Projjal Paul** is a Software Engineer and Full Stack Developer based in West Bengal, India. He holds a B.Tech in Computer Science (8.58 CGPA) and specializes in building high-performance MERN web apps, real-time collaboration tools (like CodeCollab), and solving complex algorithmic challenges (CodeChef 3★, 1000+ problems solved).`,
        actions: [
          { label: "Explore Projects", action: "scrollTo:#projects" },
          { label: "View Resume", action: "openResumeModal" }
        ]
      }
    ],

    defaultFallback: `I'm not sure about that specific detail, but I can tell you all about Projjal's:
• **Top Projects** (CodeCollab real-time interview platform, Weather Dashboard)
• **Skills & Tech Stack** (React, Node, Express, MongoDB, C++, Java, DSA)
• **Education** (B.Tech CSE - 8.58 CGPA)
• **Competitive Programming** (CodeChef 3★, 1000+ solved)
• **Contact & Hiring**

Try clicking one of the suggested topics below! 👇`
  };

  // Chatbot UI Component Injection & Logic
  function initChatbot() {
    createChatbotMarkup();
    bindChatbotEvents();
  }

  function createChatbotMarkup() {
    if (document.getElementById('ai-chatbot-widget')) return;

    const widget = document.createElement('div');
    widget.id = 'ai-chatbot-widget';
    widget.className = 'ai-chatbot-container';

    widget.innerHTML = `
      <!-- Chat Launcher Floating Bubble -->
      <button id="chatbot-toggle-btn" class="chatbot-toggle-btn" aria-label="Open Projjal AI Chatbot">
        <div class="chatbot-toggle-pulse"></div>
        <div class="chatbot-toggle-icon-wrap">
          <svg class="bot-icon-chat" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 8V4H8"></path>
            <rect width="16" height="12" x="4" y="8" rx="2"></rect>
            <path d="M2 14h2"></path>
            <path d="M20 14h2"></path>
            <path d="M15 13v2"></path>
            <path d="M9 13v2"></path>
          </svg>
          <svg class="bot-icon-close" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
        <span class="chatbot-badge-unread">1</span>
        <div class="chatbot-floating-hint">
          <span>⚡ Chat with Projjal's AI</span>
        </div>
      </button>

      <!-- Expandable Glassmorphism Chat Window -->
      <div id="chatbot-window" class="chatbot-window" role="dialog" aria-label="Projjal AI Assistant">
        <!-- Chat Header -->
        <div class="chatbot-header">
          <div class="chatbot-header-info">
            <div class="chatbot-avatar">
              <span class="chatbot-avatar-emoji">⚡</span>
              <span class="chatbot-status-dot"></span>
            </div>
            <div>
              <h3 class="chatbot-title">Projjal AI Assistant</h3>
              <span class="chatbot-status-text">Online • Resume Knowledge Active</span>
            </div>
          </div>
          <div class="chatbot-header-actions">
            <button id="chatbot-clear-btn" class="chatbot-header-btn" title="Clear Conversation" aria-label="Clear chat">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
            </button>
            <button id="chatbot-close-btn" class="chatbot-header-btn" title="Close Chat" aria-label="Close chat">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
        </div>

        <!-- Chat Messages Container -->
        <div id="chatbot-messages" class="chatbot-messages">
          <!-- Initial Welcome Message -->
          <div class="chat-msg bot-msg">
            <div class="msg-bubble">
              <p>Hi! I'm <b>Projjal's AI Assistant</b> ⚡. I can answer any questions regarding Projjal's projects, tech stack, 8.58 CGPA, competitive programming achievements, or how to connect!</p>
              <p style="margin-top:0.5rem;font-size:0.85rem;color:var(--text-secondary);">What would you like to explore?</p>
            </div>
          </div>
        </div>

        <!-- Quick Suggestions Chips -->
        <div class="chatbot-chips-bar" id="chatbot-chips-bar">
          <button class="bot-chip" data-query="Tell me about CodeCollab">🚀 CodeCollab</button>
          <button class="bot-chip" data-query="What is your tech stack?">⚛️ Tech Stack</button>
          <button class="bot-chip" data-query="Competitive programming & CodeChef">🏆 CodeChef 3★</button>
          <button class="bot-chip" data-query="Education & CGPA">🎓 Education</button>
          <button class="bot-chip" data-query="How can I contact Projjal?">📫 Contact Info</button>
        </div>

        <!-- Chat Input Form -->
        <form id="chatbot-form" class="chatbot-input-area">
          <input 
            type="text" 
            id="chatbot-input" 
            class="chatbot-input" 
            placeholder="Ask anything (e.g. CodeCollab, skills, CGPA)..." 
            autocomplete="off" 
            maxlength="250"
          />
          <button type="submit" id="chatbot-send-btn" class="chatbot-send-btn" aria-label="Send message">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          </button>
        </form>
      </div>
    `;

    document.body.appendChild(widget);
  }

  function bindChatbotEvents() {
    const toggleBtn = document.getElementById('chatbot-toggle-btn');
    const closeBtn = document.getElementById('chatbot-close-btn');
    const clearBtn = document.getElementById('chatbot-clear-btn');
    const windowEl = document.getElementById('chatbot-window');
    const form = document.getElementById('chatbot-form');
    const input = document.getElementById('chatbot-input');
    const chipsBar = document.getElementById('chatbot-chips-bar');
    const messages = document.getElementById('chatbot-messages');

    if (!toggleBtn || !windowEl || !form || !input) return;

    // Toggle Chatbot
    toggleBtn.addEventListener('click', () => {
      const isOpen = windowEl.classList.toggle('active');
      toggleBtn.classList.toggle('open', isOpen);
      
      // Clear unread badge
      const badge = toggleBtn.querySelector('.chatbot-badge-unread');
      if (badge) badge.style.display = 'none';

      if (isOpen) {
        setTimeout(() => input.focus(), 300);
        scrollToBottom();
      }
    });

    // Close button
    closeBtn.addEventListener('click', () => {
      windowEl.classList.remove('active');
      toggleBtn.classList.remove('open');
    });

    // Clear chat
    clearBtn.addEventListener('click', () => {
      messages.innerHTML = `
        <div class="chat-msg bot-msg">
          <div class="msg-bubble">
            <p>Chat cleared! How can I assist you with Projjal Paul's portfolio? ⚡</p>
          </div>
        </div>
      `;
      scrollToBottom();
    });

    // Handle Form Submit
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const q = input.value.trim();
      if (!q) return;

      input.value = '';
      handleUserQuery(q);
    });

    // Handle Quick Chips
    chipsBar.addEventListener('click', (e) => {
      const chip = e.target.closest('.bot-chip');
      if (chip) {
        const query = chip.getAttribute('data-query');
        if (query) {
          handleUserQuery(query);
        }
      }
    });
  }

  function handleUserQuery(userText) {
    appendMessage(userText, 'user');

    // Show Typing Indicator
    showTypingIndicator();

    setTimeout(() => {
      removeTypingIndicator();
      const result = processQuery(userText);
      appendMessage(result.text, 'bot', result.actions);
    }, 600);
  }

  function processQuery(rawText) {
    const text = rawText.toLowerCase();

    // Check Greetings
    if (/^(hi|hello|hey|greetings|hola|namaste|sup|yo)\b/i.test(text.trim())) {
      const greeting = BOT_KNOWLEDGE.greetings[Math.floor(Math.random() * BOT_KNOWLEDGE.greetings.length)];
      return {
        text: greeting,
        actions: [
          { label: "CodeCollab Project", action: "openModal:codecollab-interview-platform" },
          { label: "View Tech Stack", action: "scrollTo:#skills" }
        ]
      };
    }

    // Check Thanks
    if (/thank|thanks|great|awesome|cool|good job|nice/i.test(text)) {
      return {
        text: "You're very welcome! Feel free to reach out to Projjal directly or explore his projects. ⚡",
        actions: [
          { label: "Contact Projjal", action: "scrollTo:#contact" },
          { label: "View Resume", action: "openResumeModal" }
        ]
      };
    }

    // Match Intents with Keyword Scoring
    let bestMatch = null;
    let highestScore = 0;

    for (const intent of BOT_KNOWLEDGE.intents) {
      let score = 0;
      for (const kw of intent.keywords) {
        if (text.includes(kw)) {
          score += kw.length; // weight longer keyword matches higher
        }
      }
      if (score > highestScore) {
        highestScore = score;
        bestMatch = intent;
      }
    }

    if (bestMatch && highestScore > 0) {
      return {
        text: bestMatch.response,
        actions: bestMatch.actions || []
      };
    }

    // Fallback
    return {
      text: BOT_KNOWLEDGE.defaultFallback,
      actions: [
        { label: "CodeCollab", action: "openModal:codecollab-interview-platform" },
        { label: "Skills", action: "scrollTo:#skills" },
        { label: "Education (8.58)", action: "scrollTo:#experience" },
        { label: "Contact", action: "scrollTo:#contact" }
      ]
    };
  }

  function appendMessage(content, sender, actions = []) {
    const container = document.getElementById('chatbot-messages');
    if (!container) return;

    const msgEl = document.createElement('div');
    msgEl.className = `chat-msg ${sender}-msg`;

    // Format markdown-style bold, bullet points, links
    const formattedContent = formatBotMarkdown(content);

    let actionButtonsHtml = '';
    if (actions && actions.length > 0) {
      actionButtonsHtml = `
        <div class="msg-actions-wrap">
          ${actions.map(act => {
            if (act.url) {
              return `<a href="${act.url}" target="_blank" rel="noopener" class="msg-action-btn">🔗 ${act.label}</a>`;
            } else if (act.action) {
              return `<button class="msg-action-btn" data-action="${act.action}">⚡ ${act.label}</button>`;
            }
            return '';
          }).join('')}
        </div>
      `;
    }

    msgEl.innerHTML = `
      <div class="msg-bubble">
        <div>${formattedContent}</div>
        ${actionButtonsHtml}
      </div>
    `;

    container.appendChild(msgEl);

    // Bind action buttons
    msgEl.querySelectorAll('.msg-action-btn[data-action]').forEach(btn => {
      btn.addEventListener('click', () => {
        const actionStr = btn.getAttribute('data-action');
        executeBotAction(actionStr);
      });
    });

    scrollToBottom();
  }

  function formatBotMarkdown(text) {
    let html = text
      .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
      .replace(/\*(.*?)\*/g, '<i>$1</i>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener" style="color:var(--accent-secondary);text-decoration:underline;">$1</a>')
      .replace(/\n/g, '<br/>');
    return html;
  }

  function executeBotAction(actionStr) {
    if (!actionStr) return;

    if (actionStr.startsWith('scrollTo:')) {
      const target = actionStr.replace('scrollTo:', '');
      const el = document.querySelector(target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        // Close chat window on mobile
        if (window.innerWidth < 768) {
          document.getElementById('chatbot-window').classList.remove('active');
          document.getElementById('chatbot-toggle-btn').classList.remove('open');
        }
      }
    } else if (actionStr.startsWith('openModal:')) {
      const projectId = actionStr.replace('openModal:', '');
      if (typeof window.openProjectModal === 'function') {
        window.openProjectModal(projectId);
      } else {
        const modalBtn = document.querySelector(`.open-project-modal[data-id="${projectId}"]`);
        if (modalBtn) modalBtn.click();
      }
    } else if (actionStr === 'openResumeModal') {
      const resumeBtn = document.querySelector('.trigger-resume-modal');
      if (resumeBtn) resumeBtn.click();
    }
  }

  function showTypingIndicator() {
    const container = document.getElementById('chatbot-messages');
    if (!container) return;

    const typingEl = document.createElement('div');
    typingEl.id = 'bot-typing-indicator';
    typingEl.className = 'chat-msg bot-msg typing-msg';
    typingEl.innerHTML = `
      <div class="msg-bubble typing-bubble">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>
    `;
    container.appendChild(typingEl);
    scrollToBottom();
  }

  function removeTypingIndicator() {
    const el = document.getElementById('bot-typing-indicator');
    if (el) el.remove();
  }

  function scrollToBottom() {
    const container = document.getElementById('chatbot-messages');
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }

  // Initialize once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatbot);
  } else {
    initChatbot();
  }
})();
