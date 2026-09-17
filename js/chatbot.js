/**
 * PROJJAL PAUL - ULTRA-ADVANCED AI PORTFOLIO ASSISTANT 3.0
 * =========================================================================
 * Multi-Modal Intelligent Portfolio Copilot featuring:
 * 1. AI Modes: ⚡ General Assistant, 💼 Recruiter Mode, 🎯 Tech Quiz & DSA, 🔬 Architecture Explorer
 * 2. Voice AI: Speech-to-Text (Voice Dictation) & Text-to-Speech (Read Aloud)
 * 3. Typewriter Streaming Simulation with Instant Skip
 * 4. Interactive Rich UI: Project cards, Skill meters, Recruiter sheets, Code runners, Quizzes
 * 5. Web Audio Synthesized SFX with Mute Controls
 * 6. Fullscreen / Expanded Workstation Mode & Chat Transcript Export
 * 7. Context-Aware Dynamic Follow-Up Suggestions & Multi-Intent NLP
 * =========================================================================
 */

(function () {
  "use strict";

  // Web Audio Synth Sound FX Engine
  const SoundFX = {
    audioCtx: null,
    muted: false,

    init() {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.audioCtx = new AudioContext();
        }
      } catch (e) {
        console.warn("AudioContext not supported", e);
      }
    },

    playTone(freq, type, duration, gainVal = 0.05) {
      if (this.muted || !this.audioCtx) return;
      try {
        if (this.audioCtx.state === "suspended") {
          this.audioCtx.resume();
        }
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
        gain.gain.setValueAtTime(gainVal, this.audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + duration);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start();
        osc.stop(this.audioCtx.currentTime + duration);
      } catch (e) {}
    },

    playPop() {
      this.playTone(480, "sine", 0.08, 0.04);
    },

    playChime() {
      if (this.muted) return;
      this.playTone(523.25, "triangle", 0.12, 0.03);
      setTimeout(() => this.playTone(659.25, "triangle", 0.15, 0.03), 70);
    },

    playSuccess() {
      if (this.muted) return;
      this.playTone(523.25, "sine", 0.1, 0.03);
      setTimeout(() => this.playTone(659.25, "sine", 0.1, 0.03), 80);
      setTimeout(() => this.playTone(783.99, "sine", 0.18, 0.03), 160);
    },

    playModeSwitch() {
      this.playTone(400, "sine", 0.06, 0.03);
      setTimeout(() => this.playTone(600, "sine", 0.08, 0.03), 50);
    },
  };

  // Comprehensive Knowledge Base & System Design FAQ
  const BOT_KNOWLEDGE = {
    greetings: [
      "Hello! I am **Projjal's AI Assistant**. How can I help you explore his full-stack projects, competitive programming track record, or hiring details today? ⚡",
      "Hi there! Welcome to Projjal Paul's portfolio. Ask me anything about his architecture choices in CodeCollab, MERN stack skills, 8.58 CGPA, or CodeChef 3★ rating! 🚀",
      "Greetings! Looking for a fast recruiter summary, technical deep-dive, or interactive coding quiz? I'm at your service! 💻",
    ],

    profile: {
      name: "Projjal Paul",
      role: "Software Engineer | Full Stack Developer",
      degree: "B.Tech in Computer Science & Engineering (2021 – 2025)",
      cgpa: "8.58 / 10.0",
      location: "West Bengal, India (Open to Remote & Relocation)",
      codechef: "3★ (1600+ Peak Rating, Top 10%)",
      problemsSolved: "1,000+ Algorithmic Problems Solved",
      email: "projjal2003@gmail.com",
      phone: "+91-9073481347",
      github: "https://github.com/Prorick44",
      linkedin: "https://linkedin.com/in/projjal2002",
      availability: "Immediate / Open for Full-Time & Contract Software Engineer Roles",
    },

    projects: {
      codecollab: {
        id: "codecollab-interview-platform",
        title: "Real-Time Interview Platform (CodeCollab)",
        year: "2025",
        tagline: "Collaborative coding workspace with Monaco Editor, WebRTC video, and Socket.io (<50ms sync).",
        tech: ["React.js", "Node.js", "Express.js", "Socket.io", "Monaco Editor", "WebRTC", "Firebase Auth", "CSS3"],
        metrics: {
          latency: "<50ms Sync Latency",
          editor: "Monaco Editor (VS Code core)",
          conferencing: "Mesh WebRTC Video & Audio",
          auth: "Firebase Google OAuth + Protected Rooms",
        },
        highlights: [
          "Built synchronized multi-user code editing with delta change broadcasts and conflict mitigation.",
          "Integrated WebRTC peer connections with STUN servers for zero-friction candidate-interviewer video calls.",
          "Created modular room permissioning (Host vs Attendee), live code execution, syntax themes, and room link sharing.",
        ],
        github: "https://github.com/Prorick44/real-time-interview-prep-project",
        live: "https://real-time-interview-prep-project.vercel.app/",
      },
      weather: {
        id: "realtime-weather-dashboard",
        title: "Real-Time Weather Analytics Dashboard",
        year: "2024",
        tagline: "Live meteorological analytics for 200,000+ cities with 40% API call reduction.",
        tech: ["React.js", "Redux Toolkit", "OpenWeather API", "Chart.js", "CSS3", "Vercel"],
        metrics: {
          coverage: "200,000+ Cities Worldwide",
          optimization: "40% API Overhead Reduction",
          forecast: "7-Day Interactive Forecast Visuals",
          performance: "90+ Google Lighthouse Score",
        },
        highlights: [
          "Engineered smart client-side caching with TTL eviction and debounced inputs to slash redundant network requests by 40%.",
          "Rendered interactive multi-axis Chart.js forecasts for precipitation, temperature trends, and humidity.",
          "Centralized async API state and error boundaries using Redux Toolkit slices.",
        ],
        github: "https://github.com/Prorick44/weather-app",
        live: "https://weather-app-beige-ten-65.vercel.app/",
      },
      hateSpeech: {
        id: "hate-speech-detector",
        title: "AI Hate Speech & Toxicity Detector",
        year: "2025",
        tagline: "Intelligent NLP content moderation and toxicity classifier analyzing text in real-time.",
        tech: ["TypeScript", "React.js", "NLP / AI", "TailwindCSS", "Vercel"],
        metrics: {
          architecture: "TypeScript + React",
          nlpScoring: "Sentiment & Toxicity Matrix",
          deployment: "Vercel Serverless",
        },
        highlights: [
          "Real-time NLP text classification engine scoring sentiment, harassment probability, and profanity.",
          "Interactive dashboard with sentiment gauges, threat level probability meters, and flagged keyword tag clouds.",
        ],
        github: "https://github.com/Prorick44/hate-speech-detector",
        live: "https://hate-speech-detector.vercel.app/",
      },
      pocketTanks: {
        id: "pocket-tanks-web",
        title: "Pocket Tanks (2D Physics Game)",
        year: "2024",
        tagline: "Turn-based artillery tank battle game with ballistic trajectories and deformable terrain physics.",
        tech: ["JavaScript (ES6+)", "HTML5 Canvas", "Physics Engine", "CSS3", "Vercel"],
        metrics: {
          engine: "HTML5 Canvas 2D",
          fps: "60 FPS Smooth Rendering",
          platform: "Vercel Web + Mobile",
        },
        highlights: [
          "Implemented 2D ballistic physics engine with angle, velocity, wind, and gravity trajectory modeling.",
          "Destructible terrain canvas deformation responding dynamically to crater explosion radius.",
        ],
        github: "https://github.com/Prorick44/pocket-tanks",
        live: "https://pocket-tanks.vercel.app/",
      },
      game2048: {
        id: "2048-puzzle-game",
        title: "2048 Number Sliding Puzzle",
        year: "2024",
        tagline: "Tile-sliding matrix puzzle game with fluid CSS grid animations, undo state, and swipe gestures.",
        tech: ["JavaScript (ES6+)", "CSS Grid", "LocalStorage", "Vercel"],
        metrics: {
          matrix: "4x4 Grid Algorithm",
          input: "Keyboard + Swipe Controls",
          platform: "Vercel Web",
        },
        highlights: [
          "Engineered 4x4 grid matrix transformation algorithm handling tile merges and score progression.",
          "Touch swipe listeners and keyboard controls with LocalStorage high-score saving.",
        ],
        github: "https://github.com/Prorick44/2048-game",
        live: "https://2048-game-self.vercel.app/",
      },
      noteApp: {
        id: "note-app",
        title: "Note App - Minimalist Workspace",
        year: "2024",
        tagline: "Lightweight, responsive note-taking application for quick personal productivity.",
        tech: ["React.js", "JavaScript", "CSS3", "Vercel"],
        metrics: {
          useCase: "Personal Notes & Lists",
          experience: "Instant State CRUD",
          platform: "Vercel Dashboard",
        },
        highlights: [
          "Structured note creation, editing, tagging, and removal flows with instant state reactivity.",
        ],
        github: "https://github.com/Prorick44/note-app",
        live: "https://vercel.com/projjal2002-9212s-projects/note-app",
      },
      vault: {
        id: "algorithmic-code-vault",
        title: "1000+ Algorithmic Problem Solving & Competitive Vault",
        year: "2023 – Present",
        tagline: "High-performance C++ & Java solutions repository across CodeChef 3★ (1600+) and platforms.",
        tech: ["C++ (STL)", "Java", "Python", "Algorithms", "CodeChef", "Git"],
        metrics: {
          solved: "1,000+ DSA Problems",
          rating: "CodeChef 3-Star (1600+)",
          ranking: "Top 10% in Rated Contests",
          contests: "20+ Official Contests",
        },
        highlights: [
          "Mastery of Dynamic Programming, Graph Theory (Dijkstra, BFS/DFS, Disjoint Sets), Binary Search, and Tree traversals.",
          "Built custom C++ template libraries with fast I/O optimization and modular modular-arithmetic helpers.",
        ],
        github: "https://github.com/Prorick44/coding-practice",
        live: "https://www.codechef.com/users/projjal2002",
      },
    },

    // Interactive DSA & Tech Quiz Database
    quizQuestions: [
      {
        question: "In React, why is the `useCallback` hook used?",
        options: [
          "To memoize a callback function reference across re-renders",
          "To directly mutate the DOM nodes",
          "To fetch data synchronously from backend servers",
          "To replace Redux Toolkit state entirely",
        ],
        correct: 0,
        explanation: "`useCallback` memoizes the function instance between renders to prevent unnecessary re-rendering of child components relying on reference equality.",
      },
      {
        question: "What is the average time complexity of searching a node in a balanced Binary Search Tree (AVL / Red-Black)?",
        options: ["O(N)", "O(log N)", "O(N log N)", "O(1)"],
        correct: 1,
        explanation: "Because a balanced BST halves the search space at each step, both search and insertion operate in O(log N) time.",
      },
      {
        question: "How did Projjal reduce API calls by 40% in his Weather Dashboard project?",
        options: [
          "By disabling search completely",
          "By implementing search debouncing & client-side caching",
          "By running local weather satellites",
          "By hardcoding all 200,000 cities in memory",
        ],
        correct: 1,
        explanation: "Debouncing user keystrokes along with local caching of recent city coordinates eliminated duplicate and high-frequency network requests by 40%.",
      },
      {
        question: "In WebRTC peer-to-peer communication, what is the role of the Signaling Server (using Socket.io)?",
        options: [
          "To stream the high-bandwidth video packets continuously",
          "To exchange SDP offers/answers and ICE candidate network metadata",
          "To compile the C++ code in the browser",
          "To store user passwords permanently",
        ],
        correct: 1,
        explanation: "The signaling server is only used to exchange network and media configuration (SDP & ICE candidates). Once established, audio/video flows directly peer-to-peer!",
      },
      {
        question: "In 2D projectile physics (like Pocket Tanks), what mathematical equation models vertical displacement under gravity?",
        options: [
          "y(t) = v · sin(θ) · t - 0.5 · g · t²",
          "y(t) = m · c²",
          "y(t) = v / t",
          "y(t) = tan(θ) · x",
        ],
        correct: 0,
        explanation: "Standard Newtonian kinematics dictates y(t) = v·sin(θ)·t - 0.5·g·t², calculating the parabolic ballistic arc over time.",
      },
      {
        question: "How does the AI Hate Speech Detector classify text in real-time?",
        options: [
          "By scanning random dictionary words blindly",
          "By running an NLP sentiment analysis & toxicity probability classifier",
          "By blocking all user submissions",
          "By converting English text to morse code",
        ],
        correct: 1,
        explanation: "The app leverages NLP tokenization and toxicity scoring matrices to calculate sentiment and harassment probabilities in real time.",
      },
      {
        question: "What is the key advantage of WebSockets (Socket.io) over traditional HTTP Polling in the Real-Time Chat App?",
        options: [
          "Full-duplex, persistent connection with low overhead vs repeated HTTP request handshakes",
          "WebSockets require no server running",
          "WebSockets only work on mobile devices",
          "HTTP Polling is always 10x faster",
        ],
        correct: 0,
        explanation: "WebSockets maintain an open, full-duplex TCP connection, allowing instant bi-directional message broadcasts with minimal packet overhead.",
      },
      {
        question: "What is Projjal's peak rating and division status on CodeChef?",
        options: [
          "3-Star (1600+ Rating) with Top 10% contest finishes",
          "1-Star Beginner",
          "Grandmaster (3000+)",
          "5-Star Candidate Master",
        ],
        correct: 0,
        explanation: "Projjal has achieved a 3-Star (1600+) rating on CodeChef and solved over 1,000+ algorithmic problems across platforms.",
      },
    ],
  };

  // State Management
  const state = {
    mode: "assistant", // 'assistant' | 'recruiter' | 'quiz' | 'architecture'
    lastTopic: null,
    isStreaming: false,
    currentStreamController: null,
    speechSynthesisActive: false,
    speechRecognitionActive: false,
    soundEnabled: true,
    quizIndex: 0,
    quizScore: 0,
    quizCompleted: false,
  };

  // Voice AI: Speech Recognition (Voice Input)
  let speechRecognizer = null;
  function initSpeechRecognition(onResultCallback, onEndCallback) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return null;

    try {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-US";

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        if (onResultCallback) onResultCallback(transcript);
      };

      recognition.onend = () => {
        state.speechRecognitionActive = false;
        if (onEndCallback) onEndCallback();
      };

      recognition.onerror = (err) => {
        console.warn("Speech recognition error:", err);
        state.speechRecognitionActive = false;
        if (onEndCallback) onEndCallback();
      };

      return recognition;
    } catch (e) {
      console.warn("Speech recognition initialization failed:", e);
      return null;
    }
  }

  // Voice AI: Text to Speech (Read Aloud)
  function speakText(text, onStart, onEnd) {
    if (!("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel(); // stop previous speech

    // Clean markdown for speech
    const cleanText = text
      .replace(/[#*`_~[\]()]/g, "")
      .replace(/<[^>]*>/g, "")
      .replace(/https?:\/\/\S+/g, "link")
      .replace(/•/g, "")
      .trim();

    if (!cleanText) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 1.05;
    utterance.pitch = 1.0;

    // Pick English voice if available
    const voices = window.speechSynthesis.getVoices();
    const naturalVoice = voices.find((v) => v.lang.startsWith("en") && (v.name.includes("Google") || v.name.includes("Natural") || v.name.includes("Samantha")));
    if (naturalVoice) utterance.voice = naturalVoice;

    utterance.onstart = () => {
      state.speechSynthesisActive = true;
      if (onStart) onStart();
    };

    utterance.onend = () => {
      state.speechSynthesisActive = false;
      if (onEnd) onEnd();
    };

    utterance.onerror = () => {
      state.speechSynthesisActive = false;
      if (onEnd) onEnd();
    };

    window.speechSynthesis.speak(utterance);
  }

  function stopSpeaking() {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      state.speechSynthesisActive = false;
    }
  }

  // Core NLP Engine & Intent Matcher
  function processNLPQuery(rawQuery, currentMode) {
    const text = (rawQuery || "").toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();

    // Mode-specific overrides
    if (currentMode === "recruiter") {
      return handleRecruiterNLP(text);
    }
    if (currentMode === "architecture") {
      return handleArchitectureNLP(text);
    }

    // Common query patterns
    if (!text) {
      return {
        text: "I can help with **Projects**, **Skills**, **Education (8.58 CGPA)**, **CodeChef 3★**, or **Contact details**. What would you like to explore?",
        chips: ["CodeCollab Platform", "Tech Stack", "CodeChef 3★", "Hire Projjal"],
      };
    }

    // Greetings
    if (/^(hi|hello|hey|greetings|hola|namaste|sup|yo|good morning|good evening|good afternoon)/.test(text)) {
      const greeting = BOT_KNOWLEDGE.greetings[Math.floor(Math.random() * BOT_KNOWLEDGE.greetings.length)];
      return {
        text: greeting,
        chips: ["🚀 CodeCollab Project", "⚛️ Tech Stack & Skills", "💼 Recruiter Snapshot", "🎓 Education & CGPA"],
        actions: [
          { label: "CodeCollab Case Study", action: "openModal:codecollab-interview-platform" },
          { label: "View Tech Stack", action: "scrollTo:#skills" },
        ],
      };
    }

    // Recruiter & Hiring intents
    if (/(hire|hiring|recruiter|interview|availability|available|resume|cv|notice period|salary|location|remote|relocation|open to work)/.test(text)) {
      return generateRecruiterSnapshot();
    }

    // CodeCollab / WebRTC / Realtime interview project
    if (/(codecollab|interview platform|monaco|webrtc|socket|collaborative coding|video call|sync)/.test(text)) {
      const p = BOT_KNOWLEDGE.projects.codecollab;
      return {
        text: `### 🚀 ${p.title} (${p.year})\n${p.tagline}\n\n**Architectural Highlights**:\n• **Sub-50ms Synchronized Coding**: Powered by **Monaco Editor** & **Socket.io** room socket relays.\n• **Integrated WebRTC Video**: Low-latency candidate-interviewer peer-to-peer conferencing.\n• **Firebase Google Auth**: Protected room routes, role permissioning (host vs attendee), live in-room chat, and code export.\n\n**Tech Stack**: \`React.js\`, \`Node.js\`, \`Express.js\`, \`Socket.io\`, \`Monaco Editor\`, \`Firebase\`, \`WebRTC\``,
        projectCard: p,
        chips: ["How does sub-50ms sync work?", "Compare with Weather App", "Open CodeCollab Live", "GitHub Source Code"],
        actions: [
          { label: "Open Case Study", action: "openModal:codecollab-interview-platform" },
          { label: "Live Web App", url: p.live },
          { label: "GitHub Repo", url: p.github },
        ],
      };
    }

    // Weather Dashboard
    if (/(weather|dashboard|openweather|chart|caching|debounce|debouncing|cities|forecast)/.test(text)) {
      const p = BOT_KNOWLEDGE.projects.weather;
      return {
        text: `### 🌤️ ${p.title} (${p.year})\n${p.tagline}\n\n**Engineering Achievements**:\n• **40% API Overhead Reduction**: Implemented search debouncing and custom client-side caching with TTL invalidation.\n• **Visual Analytics**: Interactive 7-day temperature and precipitation trend forecasts via **Chart.js**.\n• **200,000+ City Lookup**: Smooth responsive UI with 90+ Lighthouse score.\n\n**Tech Stack**: \`React.js\`, \`Redux Toolkit\`, \`OpenWeather API\`, \`Chart.js\`, \`CSS3\``,
        projectCard: p,
        chips: ["How was 40% API reduction achieved?", "Show Redux Architecture", "Open Weather Dashboard", "View GitHub"],
        actions: [
          { label: "Open Case Study", action: "openModal:realtime-weather-dashboard" },
          { label: "Live Demo", url: p.live },
          { label: "GitHub Repo", url: p.github },
        ],
      };
    }

    // AI Hate Speech & Toxicity Detector
    if (/(hate speech|toxicity|sentiment|moderation|nlp|detector)/.test(text)) {
      const p = BOT_KNOWLEDGE.projects.hateSpeech;
      return {
        text: `### 🛡️ ${p.title} (${p.year})\n${p.tagline}\n\n**Key Highlights**:\n• **Real-Time NLP Classification**: Evaluates user input against toxic sentiment probabilities, profanity, and harassment.\n• **Interactive Metrics**: Live sentiment gauge, threat levels, and flagged keywords visualization.\n• **Stack**: \`TypeScript\`, \`React.js\`, \`NLP / AI\`, \`TailwindCSS\`, \`Vercel\``,
        projectCard: p,
        chips: ["Open Hate Speech Detector", "View GitHub Repo", "Explore All Projects"],
        actions: [
          { label: "Live Vercel Demo", url: p.live },
          { label: "GitHub Repo", url: p.github },
          { label: "Open Case Study", action: "openModal:hate-speech-detector" },
        ],
      };
    }

    // Pocket Tanks
    if (/(pocket tanks|tank|tanks|physics game|ballistic|artillery)/.test(text)) {
      const p = BOT_KNOWLEDGE.projects.pocketTanks;
      return {
        text: `### 🎮 ${p.title} (${p.year})\n${p.tagline}\n\n**Physics & Engine Highlights**:\n• **Ballistic Physics Engine**: Custom 2D projectile trajectory calculation with gravity and velocity arcs.\n• **Destructible Terrain**: Dynamic canvas terrain deformation on crater impacts.\n• **Mobile Edition**: Touch controls, angle/power sliders, and 60 FPS canvas loop.\n• **Stack**: \`JavaScript\`, \`HTML5 Canvas\`, \`Physics Engine\`, \`Vercel\``,
        projectCard: p,
        chips: ["Play Pocket Tanks Live", "Play 2048 Game", "Explore Game Projects"],
        actions: [
          { label: "Play Game on Vercel", url: p.live },
          { label: "GitHub Source", url: p.github },
          { label: "Open Case Study", action: "openModal:pocket-tanks-web" },
        ],
      };
    }

    // 2048 Puzzle Game
    if (/(2048|puzzle|tile|sliding|grid game)/.test(text)) {
      const p = BOT_KNOWLEDGE.projects.game2048;
      return {
        text: `### 🧩 ${p.title} (${p.year})\n${p.tagline}\n\n**Highlights**:\n• **Matrix Transformation**: 4x4 mathematical shifting logic with smooth CSS grid animations.\n• **Cross-Device**: Keyboard arrows and mobile touch swipe controls with LocalStorage score saving.\n• **Stack**: \`JavaScript (ES6+)\`, \`CSS Grid\`, \`LocalStorage\`, \`Vercel\``,
        projectCard: p,
        chips: ["Play 2048 on Vercel", "Pocket Tanks Game", "View All Projects"],
        actions: [
          { label: "Play 2048 Live", url: p.live },
          { label: "GitHub Repo", url: p.github },
          { label: "Open Details", action: "openModal:2048-puzzle-game" },
        ],
      };
    }

    // Note App
    if (/(note|notes|note app|todo|checklist|productivity)/.test(text)) {
      const p = BOT_KNOWLEDGE.projects.noteApp;
      return {
        text: `### 📝 ${p.title} (${p.year})\n${p.tagline}\n\n**Highlights**:\n• **Clean Responsive UI**: Fast creation, editing, tagging, and deleting of personal notes.\n• **Instant State UX**: Lightweight client-side reactivity and fast search.\n• **Stack**: \`React.js\`, \`JavaScript\`, \`CSS3\`, \`Vercel\``,
        projectCard: p,
        chips: ["Open Note App on Vercel", "Weather Dashboard", "CodeCollab Platform"],
        actions: [
          { label: "Open Note App", url: p.live },
          { label: "GitHub Repo", url: p.github },
        ],
      };
    }

    // All Projects summary
    if (/(project|projects|portfolio|apps|work|built|showcase|vercel)/.test(text)) {
      return {
        text: `Here are **Projjal's primary engineered projects & Vercel deployments**:\n\n1. 🚀 **CodeCollab (Real-Time Interview Platform)**: Monaco Editor, Socket.io, Firebase Auth, WebRTC video ([Vercel Demo](https://real-time-interview-prep-project.vercel.app/))\n2. 🌤️ **Real-Time Weather Dashboard**: 200,000+ cities with 40% API reduction via debouncing/caching & Chart.js ([Vercel Demo](https://weather-app-beige-ten-65.vercel.app/))\n3. 🛡️ **AI Hate Speech Detector**: TypeScript NLP toxicity and sentiment scoring ([Vercel Demo](https://hate-speech-detector.vercel.app/))\n4. 🎮 **Pocket Tanks (2D Physics Game)**: Ballistic trajectories & deformable canvas terrain ([Vercel Demo](https://pocket-tanks.vercel.app/))\n5. 🧩 **2048 Number Sliding Puzzle**: 4x4 grid matrix puzzle with touch swipe controls ([Vercel Demo](https://2048-game-self.vercel.app/))\n6. 📝 **Note App**: Minimalist productivity note-taking workspace ([Vercel Demo](https://vercel.com/projjal2002-9212s-projects/note-app))\n7. 🏆 **1000+ Algorithmic Code Vault**: C++/Java solutions with CodeChef 3★ rating ([CodeChef Profile](https://www.codechef.com/users/projjal2002))`,
        chips: ["CodeCollab Platform", "Weather Dashboard", "AI Hate Speech Detector", "Pocket Tanks Game", "CodeChef 3★"],
        actions: [
          { label: "Explore Project Gallery", action: "scrollTo:#projects" },
          { label: "Open CodeCollab", action: "openModal:codecollab-interview-platform" },
        ],
      };
    }

    // Skills & Tech Stack
    if (/(skill|skills|stack|tech|technology|technologies|languages|c\+\+|java|python|javascript|react|node|mongodb|sql|redux)/.test(text)) {
      return {
        text: `### ⚛️ Projjal's Core Technical Ecosystem:\n• **Languages**: C, C++ (STL & DSA Specialist), Java, Python, JavaScript (ES6+), SQL, HTML5, CSS3.\n• **Frontend & Real-Time**: React.js, Redux Toolkit, Socket.io, WebRTC, Monaco Editor, Chart.js, Responsive Design (90+ Lighthouse).\n• **Backend & Databases**: Node.js, Express.js, MongoDB & Mongoose, MySQL, Firebase (Auth & Firestore), RESTful APIs.\n• **Tools & Systems**: Git & GitHub, Vercel, Render, Postman, CodeChef, Linux/Bash.`,
        showSkillBars: true,
        chips: ["Why hire Projjal?", "CodeChef 3★ Rating", "Education & CGPA", "CodeCollab Stack"],
        actions: [
          { label: "View Skills Section", action: "scrollTo:#skills" },
          { label: "View Printable CV", action: "openResumeModal" },
        ],
      };
    }

    // Education & CGPA
    if (/(education|college|degree|cgpa|marks|percentage|btech|b tech|university|future institute|school|graduation)/.test(text)) {
      return {
        text: `### 🎓 Academic Qualifications:\n1. **B.Tech in Computer Science & Engineering** (2021 – 2025)\n   • **Institution**: Future Institute of Engineering and Management\n   • **Academic Score**: **CGPA: 8.58 / 10.0**\n   • **Key Coursework**: Data Structures & Algorithms, Object-Oriented Programming (OOP), Database Management Systems (DBMS), Web Architecture, Computer Networks, Operating Systems.\n\n2. **Higher Secondary (CBSE Class XII)** (2021)\n   • **Score**: **91.20%**\n\n3. **Secondary Education (WBBSE Class X)** (2019)\n   • **Score**: **91.14%**`,
        chips: ["Competitive Programming", "Technical Skills", "Top Projects", "Download Resume"],
        actions: [
          { label: "View Education Details", action: "scrollTo:#experience" },
          { label: "View Resume PDF", action: "openResumeModal" },
        ],
      };
    }

    // Competitive Programming & CodeChef
    if (/(codechef|dsa|leetcode|competitive|cp|rating|rank|ranking|contest|problems|algorithmic|algorithms)/.test(text)) {
      return {
        text: `### 🏆 Competitive Programming & Problem Solving:\n• **CodeChef Rating**: **3-Star (1600+ Rating)**\n• **Rankings**: Consistently placed in **Top 10%** in rated global contests.\n• **Problems Solved**: **1,000+ Algorithmic Coding Problems** solved across CodeChef, LeetCode, and platforms.\n• **Key Algorithm Strengths**: Dynamic Programming, Graph Algorithms (BFS/DFS, Dijkstra), Segment Trees, Binary Search, and fast I/O optimization in C++.`,
        chips: ["CodeCollab Architecture", "Education & CGPA", "Visit CodeChef Profile", "Start Tech Quiz"],
        actions: [
          { label: "Visit CodeChef Profile", url: "https://www.codechef.com/users/projjal2002" },
          { label: "View DSA Experience", action: "scrollTo:#experience" },
        ],
      };
    }

    // Contact & Socials
    if (/(contact|email|phone|call|message|reach|connect|linkedin|github|address)/.test(text)) {
      return {
        text: `### 📬 Connect with Projjal Paul:\n• **Email**: [projjal2003@gmail.com](mailto:projjal2003@gmail.com)\n• **Phone**: [+91-9073481347](tel:+919073481347)\n• **LinkedIn**: [linkedin.com/in/projjal2002](https://linkedin.com/in/projjal2002)\n• **GitHub**: [github.com/Prorick44](https://github.com/Prorick44)\n• **CodeChef**: [codechef.com/users/projjal2002](https://www.codechef.com/users/projjal2002)\n• **Location**: West Bengal, India *(Open for Remote & Onsite Roles Worldwide)*`,
        chips: ["Download Resume", "Send Direct Email", "Explore Projects", "Switch to Recruiter Mode"],
        actions: [
          { label: "Send Message", action: "scrollTo:#contact" },
          { label: "Open Resume Viewer", action: "openResumeModal" },
        ],
      };
    }

    // Thanks / Praise
    if (/(thank|thanks|great|awesome|cool|amazing|good job|nice|super)/.test(text)) {
      return {
        text: "You are very welcome! Feel free to reach out to Projjal directly or test your knowledge with the **Interactive Tech Quiz**! ⚡",
        chips: ["🎯 Start Tech Quiz", "💼 Recruiter Mode", "📄 View Resume", "📫 Contact Projjal"],
        actions: [
          { label: "Contact Projjal", action: "scrollTo:#contact" },
          { label: "View Resume", action: "openResumeModal" },
        ],
      };
    }

    // Fallback response with helpful guide
    return {
      text: `I can provide full details regarding Projjal's:\n• **Featured Projects** (CodeCollab real-time interview platform, Weather Dashboard)\n• **Technical Skills** (React, Node, Express, MongoDB, C++, DSA)\n• **Academic Background** (B.Tech CSE - 8.58 CGPA)\n• **Competitive Stats** (CodeChef 3★, 1,000+ problems solved)\n• **Hiring & Contact Availability**\n\nTry clicking one of the suggested prompts below! 👇`,
      chips: ["CodeCollab Platform", "Tech Stack & Skills", "CodeChef 3★ Rating", "Hiring & Resume"],
      actions: [
        { label: "CodeCollab", action: "openModal:codecollab-interview-platform" },
        { label: "Skills", action: "scrollTo:#skills" },
        { label: "Contact", action: "scrollTo:#contact" },
      ],
    };
  }

  // Recruiter Specific NLP
  function handleRecruiterNLP(text) {
    if (/(why hire|strengths|value|fit|culture|hire projjal)/.test(text)) {
      return {
        text: `### 🎯 Why Hire Projjal Paul?\n1. **Proven Full-Stack & Real-Time Engineering**: Demonstrated mastery building sub-50ms synchronized apps (Monaco Editor + Socket.io + WebRTC).\n2. **Relentless Problem-Solving Prowess**: 1,000+ DSA problems solved and **CodeChef 3-Star** rating, ensuring clean, performant, and bug-free code.\n3. **Academic Consistency**: Graduating with a **8.58 CGPA** in B.Tech CSE with strong foundations in OS, DBMS, and Distributed Architecture.\n4. **Performance-Obsessed**: Achieved 40% network reduction in production and 90+ Lighthouse audits.`,
        chips: ["Copy Candidate Summary", "Availability & Notice Period", "Schedule Interview", "View Resume"],
        actions: [
          { label: "Download Resume", action: "openResumeModal" },
          { label: "Email Projjal", url: "mailto:projjal2003@gmail.com?subject=Interview%20Opportunity%20-%20Software%20Engineer" },
        ],
      };
    }

    if (/(salary|compensation|ctc|package|budget)/.test(text)) {
      return {
        text: `### 💼 Compensation & Expectations:\n• **Target Roles**: Software Engineer, Full Stack Developer, Frontend / Backend Engineer (MERN / React / Node.js / C++).\n• **Compensation**: Open to competitive industry standard compensation based on role scope, equity, and remote/onsite benefits.\n• **Notice Period / Start Date**: **Immediate availability**.`,
        chips: ["Schedule an Interview", "Copy Candidate Summary", "View Tech Stack"],
        actions: [{ label: "Email Projjal", url: "mailto:projjal2003@gmail.com?subject=Job%20Opportunity%20Discussion" }],
      };
    }

    if (/(interview questions|questions for candidate|technical questions)/.test(text)) {
      return {
        text: `### 💡 Suggested Interview Questions for Projjal:\n1. **WebRTC & Real-Time**: *"How did you structure the room signaling mechanism for CodeCollab with Socket.io while preventing state desynchronization?"*\n2. **Optimization**: *"What was your TTL cache invalidation strategy in the Weather Dashboard when handling 200,000+ cities?"*\n3. **DSA & System Design**: *"How do you approach dynamic programming subproblems, and how have 1000+ problems shaped your debugging speed?"*`,
        chips: ["CodeCollab Architecture", "CodeChef 3★ Stats", "Candidate Snapshot"],
      };
    }

    return generateRecruiterSnapshot();
  }

  // Architecture Specific NLP
  function handleArchitectureNLP(text) {
    if (/(codecollab|webrtc|monaco|sync|socket)/.test(text)) {
      return {
        text: `### 🔬 Deep Dive: CodeCollab Real-Time System Architecture\n\`\`\`\n[Interviewer / Candidate Client]\n      │          │\n (Monaco Diff)  (WebRTC Peer Media Stream)\n      │          │\n      ▼          ▼\n[Socket.io Relay] ──▶ [Firebase Token Auth & Room State]\n\`\`\`\n• **Diff Broadcasting**: Uses incremental Monaco model change events relayed over lightweight WebSocket payloads (<50ms latency).\n• **Zero-Latency Video**: Utilizes standard STUN/TURN ICE candidates for P2P audio/video streaming, offloading server bandwidth.\n• **Security & Isolation**: Authenticated via Firebase Google OAuth with role tokens to separate host and candidate permissions.`,
        chips: ["AI Detector Arch", "Pocket Tanks Physics Engine", "Weather Caching Architecture", "Real-Time Chat WebSockets"],
        actions: [
          { label: "Open CodeCollab Live", url: "https://real-time-interview-prep-project.vercel.app/" },
          { label: "Open Case Study", action: "openModal:codecollab-interview-platform" },
        ],
      };
    }

    if (/(weather|cache|caching|debounce|redux)/.test(text)) {
      return {
        text: `### 🔬 Deep Dive: Weather Analytics Performance Architecture\n\`\`\`\n[Search Input] ──(300ms Debounce)──▶ [Cache Check: Map<City, {Data, Expiry}>]\n                                            │\n                        ┌───────────────────┴───────────────────┐\n                        ▼ (Hit: <5ms)                           ▼ (Miss)\n                 [Serve Cache]                        [Fetch OpenWeather API]\n                                                                │\n                                                                ▼\n                                                      [Update Redux & Cache TTL]\n\`\`\`\n• **40% Network Reduction**: Avoids redundant roundtrips for repeated searches and eliminates fast typing request floods.\n• **Centralized Redux Slices**: Normalized forecast coordinates for high-frame-rate Chart.js re-renders.`,
        chips: ["CodeCollab Sync Architecture", "AI Detector Arch", "Pocket Tanks Physics Engine", "Open Weather Demo"],
        actions: [
          { label: "Open Weather Live", url: "https://weather-app-beige-ten-65.vercel.app/" },
          { label: "Open Case Study", action: "openModal:realtime-weather-dashboard" },
        ],
      };
    }

    if (/(hate speech|nlp|toxicity|moderation|sentiment|detector)/.test(text)) {
      return {
        text: `### 🔬 Deep Dive: AI Toxicity & Sentiment Classification Pipeline\n\`\`\`\n[User Text Input]\n       │\n       ▼\n[Tokenization & Normalization] (Stopwords, Regex Profanity Scanner)\n       │\n       ▼\n[NLP Feature Extraction] ──▶ [Toxicity Multi-Label Weight Matrix]\n                                        │\n                       ┌────────────────┴────────────────┐\n                       ▼                                 ▼\n             [Threat Level Gauge]             [Flagged Keyword Cloud]\n\`\`\`\n• **Sub-100ms Inference**: Pure client-side TypeScript NLP analysis with zero server latency.\n• **Multi-Category Scoring**: Classifies severe toxicity, insult, profanity, and identity attack probabilities simultaneously.`,
        chips: ["Pocket Tanks Physics Engine", "Real-Time Chat WebSockets", "CodeCollab Sync Architecture"],
        actions: [
          { label: "Live AI Detector", url: "https://hate-speech-detector.vercel.app/" },
          { label: "Open Case Study", action: "openModal:hate-speech-detector" },
        ],
      };
    }

    if (/(pocket tanks|physics|ballistic|canvas|game loop|trajectory)/.test(text)) {
      return {
        text: `### 🔬 Deep Dive: Pocket Tanks 2D Ballistic Physics Loop\n\`\`\`\n[RequestAnimationFrame (60 FPS)]\n       │\n       ├──▶ [Euler Kinematics: x(t) = v₀·cos(θ)·t,  y(t) = v₀·sin(θ)·t - ½g·t²]\n       │\n       ├──▶ [Terrain Raycast Collision Detection (Pixel Array Sampling)]\n       │\n       └──▶ [Crater Carving & Deformable Terrain Boolean Subtraction]\n\`\`\`\n• **Ballistics Math**: Real-time parabolic gravity curve calculations parameterized by angle (0-180°) and power (0-100).\n• **Destructible Canvas**: Dynamic circular pixel mask cutting on impact point coordinates.`,
        chips: ["AI Detector Arch", "CodeCollab Sync Architecture", "Weather Caching Architecture"],
        actions: [
          { label: "Play Game on Vercel", url: "https://pocket-tanks.vercel.app/" },
          { label: "Open Case Study", action: "openModal:pocket-tanks-web" },
        ],
      };
    }

    return {
      text: `### 🔬 Architecture Explorer\nSelect an engineered project to inspect its architecture diagram, latency metrics, and performance optimizations:\n• **CodeCollab**: Monaco Editor diff sync, WebRTC Mesh, and Firebase Auth.\n• **Weather Dashboard**: 300ms Debounced queries, client-side TTL caching, Redux state slices.\n• **AI Hate Speech Detector**: Client-side TypeScript NLP toxicity classifier and threat gauge.\n• **Pocket Tanks**: 60 FPS Canvas game loop, Euler ballistic kinematics, deformable terrain.`,
      chips: ["CodeCollab Sync Architecture", "Weather Caching Architecture", "AI Detector Arch", "Pocket Tanks Physics Engine"],
    };
  }

  // Helper for generating 1-page Recruiter Snapshot
  function generateRecruiterSnapshot() {
    const p = BOT_KNOWLEDGE.profile;
    return {
      text: `### 💼 Candidate Fast-Sheet: ${p.name}\n• **Role**: ${p.role}\n• **Education**: ${p.degree} | **CGPA: ${p.cgpa}**\n• **Key Specialization**: Full-Stack MERN, Real-Time WebRTC/Socket.io, C++ Algorithms, Scalable REST APIs\n• **Competitive Stats**: CodeChef 3★ (1600+), 1,000+ DSA Problems Solved\n• **Availability**: **Immediate** | Open to Remote & Onsite\n• **Location**: West Bengal, India\n• **Contact**: [${p.email}](mailto:${p.email}) | [${p.phone}](tel:${p.phone})`,
      showRecruiterCard: true,
      chips: ["Why hire Projjal?", "Interview Questions", "View Printable CV", "Send Interview Email"],
      actions: [
        { label: "Download Resume", action: "openResumeModal" },
        { label: "Send Email", url: `mailto:${p.email}?subject=Job%20Opportunity%20-%20Software%20Engineer` },
        { label: "LinkedIn Profile", url: p.linkedin },
      ],
    };
  }

  // Chatbot UI Component Injection & Logic
  function initChatbot() {
    createChatbotMarkup();
    bindChatbotEvents();
    SoundFX.init();
  }

  function createChatbotMarkup() {
    if (document.getElementById("ai-chatbot-widget")) return;

    const widget = document.createElement("div");
    widget.id = "ai-chatbot-widget";
    widget.className = "ai-chatbot-container";

    widget.innerHTML = `
      <!-- Chat Launcher Floating Bubble -->
      <button id="chatbot-toggle-btn" class="chatbot-toggle-btn" aria-label="Open Projjal AI Assistant">
        <div class="chatbot-toggle-pulse"></div>
        <div class="chatbot-toggle-icon-wrap">
          <svg class="bot-icon-chat" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 8V4H8"></path>
            <rect width="16" height="12" x="4" y="8" rx="2"></rect>
            <path d="M2 14h2"></path>
            <path d="M20 14h2"></path>
            <path d="M15 13v2"></path>
            <path d="M9 13v2"></path>
          </svg>
          <svg class="bot-icon-close" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
        <span class="chatbot-badge-unread">AI</span>
        <div class="chatbot-floating-hint">
          <span>⚡ Chat with Projjal's AI Copilot</span>
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
              <div class="chatbot-title-wrap">
                <h3 class="chatbot-title">Projjal AI Copilot</h3>
                <span class="chatbot-version-tag">v3.0</span>
              </div>
              <span id="chatbot-status-text" class="chatbot-status-text">Online • Resume & Arch Active</span>
            </div>
          </div>
          <div class="chatbot-header-actions">
            <button id="chatbot-sound-toggle" class="chatbot-header-btn" title="Toggle Sound FX" aria-label="Toggle Sound">
              <svg id="icon-sound-on" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
              <svg id="icon-sound-off" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none;"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
            </button>
            <button id="chatbot-expand-btn" class="chatbot-header-btn" title="Toggle Fullscreen / Expand" aria-label="Toggle Fullscreen">
              <svg class="icon-maximize" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
              <svg class="icon-minimize" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none;"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
            </button>
            <button id="chatbot-export-btn" class="chatbot-header-btn" title="Export Conversation" aria-label="Export Conversation">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </button>
            <button id="chatbot-clear-btn" class="chatbot-header-btn" title="Clear Conversation" aria-label="Clear chat">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
            </button>
            <button id="chatbot-close-btn" class="chatbot-header-btn" title="Close Chat" aria-label="Close chat">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
        </div>

        <!-- AI Mode Switcher Ribbon -->
        <div class="chatbot-modes-ribbon" id="chatbot-modes-ribbon">
          <button class="bot-mode-btn active" data-mode="assistant" title="General Assistant">
            <span>⚡ Assistant</span>
          </button>
          <button class="bot-mode-btn" data-mode="recruiter" title="Recruiter Mode">
            <span>💼 Recruiter</span>
          </button>
          <button class="bot-mode-btn" data-mode="quiz" title="Tech & DSA Quiz">
            <span>🎯 Quiz & Trivia</span>
          </button>
          <button class="bot-mode-btn" data-mode="architecture" title="Architecture Explorer">
            <span>🔬 Arch Explorer</span>
          </button>
        </div>

        <!-- Chat Messages Container -->
        <div id="chatbot-messages" class="chatbot-messages">
          <!-- Initial Welcome Message -->
          <div class="chat-msg bot-msg" data-msg-id="welcome">
            <div class="msg-bubble">
              <div class="msg-content">
                <p>Hi! I'm <b>Projjal's AI Copilot</b> ⚡. I'm equipped with full knowledge of his <b>MERN stack projects</b> (CodeCollab, Weather Dashboard), <b>8.58 B.Tech CGPA</b>, <b>CodeChef 3★ rating</b>, and architecture blueprints.</p>
                <p style="margin-top:0.5rem;font-size:0.85rem;color:var(--text-secondary);">How can I assist your evaluation today?</p>
              </div>
              <div class="msg-actions-wrap">
                <button class="msg-action-btn" data-action="switchMode:recruiter">💼 Recruiter Fast-Sheet</button>
                <button class="msg-action-btn" data-action="openModal:codecollab-interview-platform">🚀 CodeCollab Deep-Dive</button>
                <button class="msg-action-btn" data-action="switchMode:quiz">🎯 Play DSA Quiz</button>
                <button class="msg-action-btn" data-action="openResumeModal">📄 View Resume</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Dynamic Context Suggestion Chips -->
        <div class="chatbot-chips-bar" id="chatbot-chips-bar">
          <button class="bot-chip" data-query="Tell me about CodeCollab">🚀 CodeCollab</button>
          <button class="bot-chip" data-query="What is your tech stack?">⚛️ Tech Stack</button>
          <button class="bot-chip" data-query="Why hire Projjal?">⭐ Why Hire Projjal?</button>
          <button class="bot-chip" data-query="Competitive programming stats">🏆 CodeChef 3★</button>
          <button class="bot-chip" data-query="Education and CGPA">🎓 8.58 CGPA</button>
          <button class="bot-chip" data-query="How can I contact Projjal?">📫 Contact Info</button>
        </div>

        <!-- Chat Input Form with Voice Support -->
        <form id="chatbot-form" class="chatbot-input-area">
          <button type="button" id="chatbot-voice-btn" class="chatbot-voice-btn" title="Voice Input (Speech-to-Text)" aria-label="Voice Input">
            <svg class="icon-mic-idle" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
              <line x1="12" y1="19" x2="12" y2="23"></line>
              <line x1="8" y1="23" x2="16" y2="23"></line>
            </svg>
            <div class="voice-wave-anim" style="display:none;">
              <span></span><span></span><span></span><span></span>
            </div>
          </button>
          <input 
            type="text" 
            id="chatbot-input" 
            class="chatbot-input" 
            placeholder="Ask anything (e.g. CodeCollab sync, skills, hiring)..." 
            autocomplete="off" 
            maxlength="300"
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
    const toggleBtn = document.getElementById("chatbot-toggle-btn");
    const closeBtn = document.getElementById("chatbot-close-btn");
    const clearBtn = document.getElementById("chatbot-clear-btn");
    const expandBtn = document.getElementById("chatbot-expand-btn");
    const exportBtn = document.getElementById("chatbot-export-btn");
    const soundToggle = document.getElementById("chatbot-sound-toggle");
    const voiceBtn = document.getElementById("chatbot-voice-btn");
    const windowEl = document.getElementById("chatbot-window");
    const form = document.getElementById("chatbot-form");
    const input = document.getElementById("chatbot-input");
    const chipsBar = document.getElementById("chatbot-chips-bar");
    const modesRibbon = document.getElementById("chatbot-modes-ribbon");
    const messages = document.getElementById("chatbot-messages");

    if (!toggleBtn || !windowEl || !form || !input) return;

    // Toggle Chatbot
    toggleBtn.addEventListener("click", () => {
      const isOpen = windowEl.classList.toggle("active");
      toggleBtn.classList.toggle("open", isOpen);

      const badge = toggleBtn.querySelector(".chatbot-badge-unread");
      if (badge) badge.style.display = "none";

      if (isOpen) {
        SoundFX.playPop();
        setTimeout(() => input.focus(), 300);
        scrollToBottom();
      } else {
        stopSpeaking();
      }
    });

    // Close button
    closeBtn.addEventListener("click", () => {
      windowEl.classList.remove("active");
      toggleBtn.classList.remove("open");
      stopSpeaking();
    });

    // Expand / Fullscreen Workstation toggle
    expandBtn.addEventListener("click", () => {
      const isExpanded = windowEl.classList.toggle("expanded");
      const maxIcon = expandBtn.querySelector(".icon-maximize");
      const minIcon = expandBtn.querySelector(".icon-minimize");
      if (maxIcon && minIcon) {
        maxIcon.style.display = isExpanded ? "none" : "block";
        minIcon.style.display = isExpanded ? "block" : "none";
      }
      SoundFX.playPop();
    });

    // Sound FX toggle
    soundToggle.addEventListener("click", () => {
      SoundFX.muted = !SoundFX.muted;
      state.soundEnabled = !SoundFX.muted;
      const soundOn = document.getElementById("icon-sound-on");
      const soundOff = document.getElementById("icon-sound-off");
      if (soundOn && soundOff) {
        soundOn.style.display = SoundFX.muted ? "none" : "block";
        soundOff.style.display = SoundFX.muted ? "block" : "none";
      }
      if (!SoundFX.muted) SoundFX.playPop();
    });

    // Export Conversation
    exportBtn.addEventListener("click", () => {
      exportChatHistory();
    });

    // Clear chat
    clearBtn.addEventListener("click", () => {
      stopSpeaking();
      messages.innerHTML = `
        <div class="chat-msg bot-msg">
          <div class="msg-bubble">
            <div class="msg-content">
              <p>Chat cleared! How can I assist you with Projjal Paul's portfolio? ⚡</p>
            </div>
          </div>
        </div>
      `;
      SoundFX.playPop();
      scrollToBottom();
    });

    // Mode Switcher
    modesRibbon.addEventListener("click", (e) => {
      const btn = e.target.closest(".bot-mode-btn");
      if (!btn) return;
      const targetMode = btn.getAttribute("data-mode");
      if (!targetMode || targetMode === state.mode) return;

      switchAIMode(targetMode);
    });

    // Voice Dictation (Mic)
    speechRecognizer = initSpeechRecognition(
      (transcript) => {
        input.value = transcript;
        handleUserQuery(transcript);
      },
      () => {
        updateVoiceButtonState(false);
      }
    );

    if (voiceBtn) {
      if (!speechRecognizer) {
        voiceBtn.title = "Voice input is not supported in this browser";
        voiceBtn.style.opacity = "0.5";
      } else {
        voiceBtn.addEventListener("click", () => {
          if (state.speechRecognitionActive) {
            speechRecognizer.stop();
            state.speechRecognitionActive = false;
            updateVoiceButtonState(false);
          } else {
            try {
              speechRecognizer.start();
              state.speechRecognitionActive = true;
              updateVoiceButtonState(true);
              SoundFX.playPop();
            } catch (e) {
              console.warn("Recognition start error", e);
            }
          }
        });
      }
    }

    // Form Submit
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const q = input.value.trim();
      if (!q) return;

      input.value = "";
      handleUserQuery(q);
    });

    // Quick Chips
    chipsBar.addEventListener("click", (e) => {
      const chip = e.target.closest(".bot-chip");
      if (chip) {
        const query = chip.getAttribute("data-query");
        if (query) {
          handleUserQuery(query);
        }
      }
    });

    // Instant skip streaming on bubble click
    messages.addEventListener("click", (e) => {
      if (state.isStreaming && state.currentStreamController) {
        state.currentStreamController.finishImmediately();
      }
    });
  }

  function updateVoiceButtonState(isListening) {
    const voiceBtn = document.getElementById("chatbot-voice-btn");
    if (!voiceBtn) return;
    const micIcon = voiceBtn.querySelector(".icon-mic-idle");
    const waveAnim = voiceBtn.querySelector(".voice-wave-anim");
    if (isListening) {
      voiceBtn.classList.add("recording");
      if (micIcon) micIcon.style.display = "none";
      if (waveAnim) waveAnim.style.display = "flex";
    } else {
      voiceBtn.classList.remove("recording");
      if (micIcon) micIcon.style.display = "block";
      if (waveAnim) waveAnim.style.display = "none";
    }
  }

  function switchAIMode(modeId) {
    state.mode = modeId;
    SoundFX.playModeSwitch();

    // Update active tab button
    document.querySelectorAll(".bot-mode-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-mode") === modeId);
    });

    const statusText = document.getElementById("chatbot-status-text");

    if (modeId === "recruiter") {
      if (statusText) statusText.textContent = "💼 Recruiter Mode Active";
      const recruiterData = generateRecruiterSnapshot();
      appendBotResponse(recruiterData);
      renderDynamicChips(["⭐ Why hire Projjal?", "💡 Suggested Interview Questions", "📄 Download CV", "📧 Schedule Interview"]);
    } else if (modeId === "quiz") {
      if (statusText) statusText.textContent = "🎯 Interactive DSA & Tech Quiz";
      startQuizFlow();
    } else if (modeId === "architecture") {
      if (statusText) statusText.textContent = "🔬 Architecture Explorer";
      const archData = handleArchitectureNLP("overview");
      appendBotResponse(archData);
      renderDynamicChips(["CodeCollab Sync Latency", "Weather Cache TTL", "Algorithmic Vault", "Back to Assistant"]);
    } else {
      if (statusText) statusText.textContent = "Online • Resume & Arch Active";
      appendBotResponse({
        text: "Switched to **⚡ General Portfolio Assistant**. Ask me anything about Projjal's projects, skills, education, or achievements!",
        chips: ["🚀 CodeCollab Project", "⚛️ Tech Stack", "🎓 8.58 CGPA", "🏆 CodeChef 3★"],
      });
      renderDynamicChips(["🚀 CodeCollab", "⚛️ Tech Stack", "🎓 8.58 CGPA", "🏆 CodeChef 3★"]);
    }
  }

  // Quiz Engine
  function startQuizFlow() {
    state.quizIndex = 0;
    state.quizScore = 0;
    state.quizCompleted = false;
    renderCurrentQuizQuestion();
  }

  function renderCurrentQuizQuestion() {
    if (state.quizIndex >= BOT_KNOWLEDGE.quizQuestions.length) {
      // Quiz Finished
      state.quizCompleted = true;
      SoundFX.playSuccess();
      const pct = Math.round((state.quizScore / BOT_KNOWLEDGE.quizQuestions.length) * 100);
      appendBotResponse({
        text: `### 🏆 Quiz Complete!\n**Your Score**: **${state.quizScore} / ${BOT_KNOWLEDGE.quizQuestions.length}** (${pct}%)\n\n${
          pct >= 80
            ? "🎉 Outstanding! You have great technical depth in modern Web Architecture & DSA, just like Projjal!"
            : "Great effort! Projjal applies these core concepts across CodeCollab and his 1000+ competitive programming challenges."
        }`,
        chips: ["Play Again", "Explore CodeCollab", "Candidate Summary", "Back to Assistant"],
        actions: [
          { label: "Restart Quiz", action: "switchMode:quiz" },
          { label: "Explore Projects", action: "scrollTo:#projects" },
        ],
      });
      return;
    }

    const q = BOT_KNOWLEDGE.quizQuestions[state.quizIndex];
    appendBotResponse({
      text: `**Tech & DSA Question ${state.quizIndex + 1} of ${BOT_KNOWLEDGE.quizQuestions.length}**:\n${q.question}`,
      quizCard: {
        index: state.quizIndex,
        question: q.question,
        options: q.options,
        correct: q.correct,
        explanation: q.explanation,
      },
      chips: ["Skip Question", "Switch to Assistant"],
    });
  }

  function handleQuizAnswer(selectedIndex, correctIndex, explanation, containerEl) {
    const isCorrect = selectedIndex === correctIndex;
    if (isCorrect) {
      state.quizScore++;
      SoundFX.playSuccess();
    } else {
      SoundFX.playPop();
    }

    // Disable all options and highlight
    const optionBtns = containerEl.querySelectorAll(".quiz-opt-btn");
    optionBtns.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === correctIndex) {
        btn.classList.add("opt-correct");
      } else if (idx === selectedIndex) {
        btn.classList.add("opt-wrong");
      }
    });

    // Add feedback banner
    const feedback = document.createElement("div");
    feedback.className = `quiz-feedback ${isCorrect ? "feedback-correct" : "feedback-wrong"}`;
    feedback.innerHTML = `
      <div class="feedback-title">${isCorrect ? "✅ Correct!" : "❌ Not quite!"}</div>
      <div class="feedback-desc">${explanation}</div>
      <button class="quiz-next-btn">Next Question ➔</button>
    `;
    containerEl.appendChild(feedback);

    feedback.querySelector(".quiz-next-btn").addEventListener("click", () => {
      state.quizIndex++;
      renderCurrentQuizQuestion();
    });

    scrollToBottom();
  }

  function handleUserQuery(userText) {
    if (!userText.trim()) return;

    SoundFX.playPop();
    appendMessage(userText, "user");

    // Check for quick mode commands
    const lower = userText.toLowerCase().trim();
    if (lower === "quiz" || lower.includes("start quiz") || lower.includes("play quiz")) {
      switchAIMode("quiz");
      return;
    }
    if (lower === "recruiter" || lower.includes("recruiter mode")) {
      switchAIMode("recruiter");
      return;
    }

    // Quiz skip
    if (state.mode === "quiz" && lower.includes("skip")) {
      state.quizIndex++;
      renderCurrentQuizQuestion();
      return;
    }

    showTypingIndicator();

    setTimeout(() => {
      removeTypingIndicator();
      const result = processNLPQuery(userText, state.mode);
      appendBotResponse(result);
    }, 450);
  }

  function appendBotResponse(result) {
    SoundFX.playChime();
    appendMessage(result.text, "bot", {
      actions: result.actions || [],
      projectCard: result.projectCard,
      quizCard: result.quizCard,
      showRecruiterCard: result.showRecruiterCard,
      showSkillBars: result.showSkillBars,
      chips: result.chips || [],
    });

    if (result.chips && result.chips.length > 0) {
      renderDynamicChips(result.chips);
    }
  }

  function renderDynamicChips(chips) {
    const bar = document.getElementById("chatbot-chips-bar");
    if (!bar) return;
    bar.innerHTML = chips
      .map((chip) => `<button class="bot-chip" data-query="${chip}">${chip}</button>`)
      .join("");
  }

  function appendMessage(content, sender, options = {}) {
    const container = document.getElementById("chatbot-messages");
    if (!container) return;

    const msgEl = document.createElement("div");
    msgEl.className = `chat-msg ${sender}-msg`;
    const msgId = "msg-" + Date.now() + "-" + Math.random().toString(36).substring(2, 6);
    msgEl.id = msgId;

    if (sender === "user") {
      msgEl.innerHTML = `
        <div class="msg-bubble">
          <div class="msg-content">${escapeHtml(content)}</div>
        </div>
      `;
      container.appendChild(msgEl);
      scrollToBottom();
      return;
    }

    // Bot message with streaming typewriter and rich cards
    let extraCardsHtml = "";

    // 1. Recruiter Sheet Card
    if (options.showRecruiterCard) {
      extraCardsHtml += `
        <div class="bot-rich-card recruiter-card">
          <div class="rich-card-header">
            <span class="card-badge">HR & Recruiter Quick Sheet</span>
            <button class="copy-sheet-btn" title="Copy formatted summary to clipboard">📋 Copy Summary</button>
          </div>
          <div class="recruiter-grid">
            <div class="recruiter-stat-item">
              <span class="stat-lbl">Role</span>
              <span class="stat-val">Software Engineer</span>
            </div>
            <div class="recruiter-stat-item">
              <span class="stat-lbl">Education</span>
              <span class="stat-val">B.Tech (8.58 CGPA)</span>
            </div>
            <div class="recruiter-stat-item">
              <span class="stat-lbl">Availability</span>
              <span class="stat-val" style="color:var(--accent-success);">Immediate / Open</span>
            </div>
            <div class="recruiter-stat-item">
              <span class="stat-lbl">Competitive</span>
              <span class="stat-val">CodeChef 3★ (1000+ Solved)</span>
            </div>
          </div>
        </div>
      `;
    }

    // 2. Project Card
    if (options.projectCard) {
      const p = options.projectCard;
      extraCardsHtml += `
        <div class="bot-rich-card project-card-embed">
          <div class="project-card-top">
            <h4 class="project-embed-title">${p.title}</h4>
            <span class="project-embed-year">${p.year}</span>
          </div>
          <p class="project-embed-tagline">${p.tagline}</p>
          <div class="project-embed-metrics">
            ${Object.entries(p.metrics)
              .map(
                ([k, v]) => `
              <div class="embed-metric-pill">
                <span class="pill-dot"></span>
                <span>${v}</span>
              </div>`
              )
              .join("")}
          </div>
          <div class="project-embed-tags">
            ${p.tech
              .slice(0, 5)
              .map((t) => `<span class="tech-tag">${t}</span>`)
              .join("")}
          </div>
        </div>
      `;
    }

    // 3. Skill Bars
    if (options.showSkillBars) {
      extraCardsHtml += `
        <div class="bot-rich-card skill-bars-embed">
          <div class="skill-meter-row">
            <div class="skill-meter-meta"><span>React.js & Redux</span><span>95%</span></div>
            <div class="skill-meter-track"><div class="skill-meter-fill" style="width:95%"></div></div>
          </div>
          <div class="skill-meter-row">
            <div class="skill-meter-meta"><span>Node.js & Express / REST</span><span>92%</span></div>
            <div class="skill-meter-track"><div class="skill-meter-fill" style="width:92%"></div></div>
          </div>
          <div class="skill-meter-row">
            <div class="skill-meter-meta"><span>C++ & DSA (CodeChef 3★)</span><span>95%</span></div>
            <div class="skill-meter-track"><div class="skill-meter-fill" style="width:95%"></div></div>
          </div>
          <div class="skill-meter-row">
            <div class="skill-meter-meta"><span>Socket.io & WebRTC</span><span>88%</span></div>
            <div class="skill-meter-track"><div class="skill-meter-fill" style="width:88%"></div></div>
          </div>
        </div>
      `;
    }

    // 4. Action buttons
    let actionButtonsHtml = "";
    if (options.actions && options.actions.length > 0) {
      actionButtonsHtml = `
        <div class="msg-actions-wrap">
          ${options.actions
            .map((act) => {
              if (act.url) {
                return `<a href="${act.url}" target="_blank" rel="noopener" class="msg-action-btn">🔗 ${act.label}</a>`;
              } else if (act.action) {
                return `<button class="msg-action-btn" data-action="${act.action}">⚡ ${act.label}</button>`;
              }
              return "";
            })
            .join("")}
        </div>
      `;
    }

    // 5. Quiz Card container
    let quizHtml = "";
    if (options.quizCard) {
      const qc = options.quizCard;
      quizHtml = `
        <div class="bot-rich-card quiz-card" data-quiz-idx="${qc.index}">
          <div class="quiz-options-list">
            ${qc.options
              .map(
                (opt, idx) => `
              <button class="quiz-opt-btn" data-opt-idx="${idx}">
                <span class="opt-num">${String.fromCharCode(65 + idx)}</span>
                <span class="opt-text">${opt}</span>
              </button>`
              )
              .join("")}
          </div>
        </div>
      `;
    }

    // Audio Speaker Read Aloud button
    const speakerBtnHtml = `
      <div class="msg-toolbar">
        <button class="msg-speak-btn" title="Read Aloud" aria-label="Read message aloud">
          <svg class="icon-speak-idle" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
          <span class="speaking-wave" style="display:none;"><span></span><span></span><span></span></span>
        </button>
      </div>
    `;

    msgEl.innerHTML = `
      <div class="msg-bubble">
        <div class="msg-content-wrapper">
          <div class="msg-content markdown-rendered"></div>
          ${speakerBtnHtml}
        </div>
        ${extraCardsHtml}
        ${quizHtml}
        ${actionButtonsHtml}
      </div>
    `;

    container.appendChild(msgEl);
    const contentEl = msgEl.querySelector(".msg-content");

    // Bind Quiz Option clicks
    if (options.quizCard) {
      const qc = options.quizCard;
      const quizContainer = msgEl.querySelector(".quiz-card");
      if (quizContainer) {
        quizContainer.querySelectorAll(".quiz-opt-btn").forEach((btn) => {
          btn.addEventListener("click", () => {
            const chosenIdx = parseInt(btn.getAttribute("data-opt-idx"), 10);
            handleQuizAnswer(chosenIdx, qc.correct, qc.explanation, quizContainer);
          });
        });
      }
    }

    // Bind Copy Recruiter Summary button
    const copySummaryBtn = msgEl.querySelector(".copy-sheet-btn");
    if (copySummaryBtn) {
      copySummaryBtn.addEventListener("click", () => {
        const textToCopy = `Candidate: Projjal Paul\nRole: Software Engineer | Full Stack Developer\nEducation: B.Tech CSE (8.58 CGPA)\nCodeChef: 3-Star (1600+, 1000+ solved)\nStack: React, Node.js, Express, MongoDB, C++, WebRTC, Socket.io\nContact: projjal2003@gmail.com | +91-9073481347\nPortfolio: ${window.location.href}`;
        navigator.clipboard.writeText(textToCopy).then(() => {
          copySummaryBtn.textContent = "✅ Copied!";
          setTimeout(() => (copySummaryBtn.textContent = "📋 Copy Summary"), 2000);
        });
      });
    }

    // Bind Action buttons
    msgEl.querySelectorAll(".msg-action-btn[data-action]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const actionStr = btn.getAttribute("data-action");
        executeBotAction(actionStr);
      });
    });

    // Bind Speaker / Read Aloud
    const speakBtn = msgEl.querySelector(".msg-speak-btn");
    if (speakBtn) {
      speakBtn.addEventListener("click", () => {
        const wave = speakBtn.querySelector(".speaking-wave");
        const icon = speakBtn.querySelector(".icon-speak-idle");
        if (state.speechSynthesisActive) {
          stopSpeaking();
          if (wave) wave.style.display = "none";
          if (icon) icon.style.display = "block";
        } else {
          speakText(
            content,
            () => {
              if (wave) wave.style.display = "inline-flex";
              if (icon) icon.style.display = "none";
            },
            () => {
              if (wave) wave.style.display = "none";
              if (icon) icon.style.display = "block";
            }
          );
        }
      });
    }

    // Stream typewriter formatting
    streamBotText(content, contentEl);
  }

  // Typewriter streaming simulator with Markdown rendering
  function streamBotText(fullMarkdown, targetEl) {
    const formattedHtml = formatBotMarkdown(fullMarkdown);
    state.isStreaming = true;

    // Instant finish controller
    const controller = {
      finishImmediately() {
        targetEl.innerHTML = formattedHtml;
        bindCopyCodeBlocks(targetEl);
        state.isStreaming = false;
        scrollToBottom();
      },
    };
    state.currentStreamController = controller;

    let index = 0;
    const rawTokens = fullMarkdown.split(" ");
    let displayedTokens = [];

    const streamInterval = setInterval(() => {
      if (index >= rawTokens.length) {
        clearInterval(streamInterval);
        controller.finishImmediately();
        return;
      }

      displayedTokens.push(rawTokens[index]);
      index++;

      targetEl.innerHTML = formatBotMarkdown(displayedTokens.join(" ")) + '<span class="typing-cursor"></span>';
      scrollToBottom();
    }, 18);
  }

  function bindCopyCodeBlocks(container) {
    container.querySelectorAll(".code-copy-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const codeText = btn.getAttribute("data-code");
        if (codeText) {
          navigator.clipboard.writeText(decodeURIComponent(codeText)).then(() => {
            btn.textContent = "Copied!";
            setTimeout(() => (btn.textContent = "Copy"), 2000);
          });
        }
      });
    });
  }

  function formatBotMarkdown(text) {
    if (!text) return "";

    // Code blocks with syntax copy
    let html = text.replace(/```([a-z]*)\n([\s\S]*?)```/g, (match, lang, code) => {
      const cleanCode = code.trim();
      const encoded = encodeURIComponent(cleanCode);
      return `
        <div class="bot-code-block">
          <div class="code-block-header">
            <span>${lang || "code"}</span>
            <button class="code-copy-btn" data-code="${encoded}">Copy</button>
          </div>
          <pre><code>${escapeHtml(cleanCode)}</code></pre>
        </div>
      `;
    });

    html = html
      .replace(/^### (.*$)/gim, '<h4 class="bot-h4">$1</h4>')
      .replace(/^## (.*$)/gim, '<h3 class="bot-h3">$1</h3>')
      .replace(/^# (.*$)/gim, '<h2 class="bot-h2">$1</h2>')
      .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
      .replace(/\*(.*?)\*/g, "<i>$1</i>")
      .replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>')
      .replace(
        /\[(.*?)\]\((.*?)\)/g,
        '<a href="$2" target="_blank" rel="noopener" class="bot-link">$1</a>'
      )
      .replace(/\n/g, "<br/>");

    return html;
  }

  function escapeHtml(str) {
    return (str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function executeBotAction(actionStr) {
    if (!actionStr) return;
    SoundFX.playPop();

    if (actionStr.startsWith("switchMode:")) {
      const mode = actionStr.replace("switchMode:", "");
      switchAIMode(mode);
    } else if (actionStr.startsWith("scrollTo:")) {
      const target = actionStr.replace("scrollTo:", "");
      const el = document.querySelector(target);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        if (window.innerWidth < 768) {
          document.getElementById("chatbot-window").classList.remove("active");
          document.getElementById("chatbot-toggle-btn").classList.remove("open");
        }
      }
    } else if (actionStr.startsWith("openModal:")) {
      const projectId = actionStr.replace("openModal:", "");
      if (typeof window.openProjectModal === "function") {
        window.openProjectModal(projectId);
      } else {
        const modalBtn = document.querySelector(`.open-project-modal[data-id="${projectId}"]`);
        if (modalBtn) modalBtn.click();
      }
    } else if (actionStr === "openResumeModal") {
      const resumeBtn = document.querySelector(".trigger-resume-modal");
      if (resumeBtn) resumeBtn.click();
    }
  }

  function exportChatHistory() {
    const messages = document.querySelectorAll(".chat-msg");
    if (!messages || messages.length <= 1) {
      alert("No conversation history to export yet.");
      return;
    }

    let transcript = `# Projjal Paul - AI Assistant Conversation Transcript\nGenerated: ${new Date().toLocaleString()}\n\n`;

    messages.forEach((msg) => {
      const isUser = msg.classList.contains("user-msg");
      const text = msg.innerText.replace(/\n\n+/g, "\n");
      transcript += `### ${isUser ? "User" : "Projjal AI Assistant"}:\n${text}\n\n---\n\n`;
    });

    const blob = new Blob([transcript], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `projjal-ai-chat-${Date.now()}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    SoundFX.playSuccess();
  }

  function showTypingIndicator() {
    const container = document.getElementById("chatbot-messages");
    if (!container) return;

    const typingEl = document.createElement("div");
    typingEl.id = "bot-typing-indicator";
    typingEl.className = "chat-msg bot-msg typing-msg";
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
    const el = document.getElementById("bot-typing-indicator");
    if (el) el.remove();
  }

  function scrollToBottom() {
    const container = document.getElementById("chatbot-messages");
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }

  // Expose global methods for tests or external triggers
  window.__projjalChatbot = {
    processNLPQuery,
    handleUserQuery,
    switchAIMode,
    startQuizFlow,
    executeBotAction,
    state,
  };

  // Initialize once DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initChatbot);
  } else {
    initChatbot();
  }
})();
