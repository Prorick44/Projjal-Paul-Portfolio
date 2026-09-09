/**
 * PORTFOLIO DATA CONFIGURATION - PROJJAL PAUL
 * =========================================================================
 * Customized directly from Projjal Paul's Resume:
 * Software Engineer | Full Stack Developer | B.Tech CSE (8.58 CGPA)
 * =========================================================================
 */

const PORTFOLIO_DATA = {
  personal: {
    name: "Projjal Paul",
    title: "Software Engineer | Full Stack Developer",
    rolePrefix: "I build ",
    roles: [
      "full-stack MERN applications.",
      "real-time collaborative platforms.",
      "high-performance React & Redux web apps.",
      "scalable RESTful APIs & backend services.",
      "efficient algorithms & data structures."
    ],
    availability: "Open for Software Engineer & Full Stack Developer Roles",
    availabilityStatus: "available", // 'available' | 'busy' | 'exploring'
    location: "West Bengal, India",
    phone: "+91-9073481347",
    email: "projjal2003@gmail.com",
    github: "https://github.com/Prorick44",
    linkedin: "https://linkedin.com/in/projjal2002",
    codechef: "https://www.codechef.com/users/projjal2002",
    twitter: "https://twitter.com",
    discord: "projjal2002",
    bio: "Result-oriented Software Engineer with a B.Tech in Computer Science (8.58 CGPA) and strong problem-solving skills. Proven ability to build full stack web applications using the MERN stack. Passionate about competitive programming (1000+ problems solved, CodeChef 3★) and optimizing system performance through efficient data structures and algorithms.",
    stats: [
      { value: "1000+", label: "Coding Problems Solved" },
      { value: "3★", label: "CodeChef Rating (1600+)" },
      { value: "8.58", label: "B.Tech CGPA" },
      { value: "5+", label: "Full-Stack Projects Shipped" }
    ],
    resumeDetails: {
      summary: "Result-oriented Software Engineer with a B.Tech in Computer Science and strong problem-solving skills. Proven ability to build full stack web applications using the MERN stack. Passionate about competitive programming and optimizing system performance through efficient data structures and algorithms.",
      highlights: [
        "Top Project: Built Real-Time Interview Platform (CodeCollab) with Monaco Editor, Socket.io, Firebase Google Auth, and WebRTC video conferencing.",
        "Performance Engineering: Built Real-Time Weather Dashboard for 200,000+ cities with debouncing & caching (40% API overhead reduction) and Chart.js forecasts.",
        "Competitive Programming: CodeChef 3-Star (1600+ rating), ranked in top 10% in various contests with 1,000+ DSA problems solved across 20+ contests.",
        "Full-Stack Web Development: Developed & maintained 5+ personal projects with Redux Toolkit and achieved 90+ Lighthouse performance scores.",
        "Academic & Mentorship: Consistently maintained 8.58 CGPA in B.Tech CSE while mentoring junior students in DSA and React fundamentals."
      ],
      educationList: [
        {
          degree: "B.Tech in Computer Science",
          institution: "Future Institute of Engineering and Management",
          year: "2021 – 2025",
          score: "CGPA: 8.58"
        },
        {
          degree: "Higher Secondary (CBSE)",
          institution: "Lal Bahadur Shastri Sr. Sec.",
          year: "2021",
          score: "Percentage: 91.20%"
        },
        {
          degree: "Secondary Education (WBBSE)",
          institution: "Patha Bhavan (Dankuni)",
          year: "2019",
          score: "Percentage: 91.14%"
        }
      ],
      languages: [
        { name: "English", level: "Professional" },
        { name: "Bengali", level: "Native" },
        { name: "Hindi", level: "Conversational" }
      ]
    }
  },

  skills: [
    {
      category: "Programming Languages",
      icon: "server",
      items: [
        { name: "C / C++ (DSA & STL)", level: 95, tag: "Expert" },
        { name: "Java", level: 88, tag: "Advanced" },
        { name: "Python", level: 85, tag: "Proficient" },
        { name: "JavaScript (ES6+)", level: 94, tag: "Expert" },
        { name: "SQL (MySQL / Relational)", level: 88, tag: "Advanced" },
        { name: "HTML5 & CSS3", level: 92, tag: "Expert" }
      ]
    },
    {
      category: "Core Full-Stack & Frontend",
      icon: "layout",
      items: [
        { name: "React.js", level: 95, tag: "Expert" },
        { name: "Redux Toolkit", level: 90, tag: "Advanced" },
        { name: "Socket.io & WebRTC", level: 88, tag: "Advanced" },
        { name: "Monaco Editor Integration", level: 90, tag: "Advanced" },
        { name: "Chart.js & Data Viz", level: 88, tag: "Advanced" },
        { name: "Responsive UI & 90+ Lighthouse", level: 92, tag: "Expert" }
      ]
    },
    {
      category: "Backend & Databases",
      icon: "database",
      items: [
        { name: "Node.js & Express.js", level: 92, tag: "Advanced" },
        { name: "MongoDB & Mongoose", level: 90, tag: "Advanced" },
        { name: "MySQL", level: 88, tag: "Advanced" },
        { name: "Firebase (Auth & Firestore)", level: 88, tag: "Advanced" },
        { name: "RESTful APIs & Microservices", level: 92, tag: "Expert" },
        { name: "API Caching & Debouncing", level: 90, tag: "Advanced" }
      ]
    },
    {
      category: "Tools, Platforms & Competitive",
      icon: "cloud",
      items: [
        { name: "CodeChef (3★, 1600+ Rating)", level: 94, tag: "Top 10%" },
        { name: "Data Structures & Algorithms", level: 95, tag: "1000+ Solved" },
        { name: "Git & GitHub", level: 90, tag: "Advanced" },
        { name: "Vercel & Render Deployment", level: 88, tag: "Advanced" },
        { name: "Performance Optimization", level: 92, tag: "90+ Score" }
      ]
    }
  ],

  projects: [
    {
      id: "codecollab-interview-platform",
      title: "Real-Time Interview Platform (CodeCollab)",
      category: "fullstack",
      categoryLabel: "MERN Stack • Socket.io • WebRTC",
      tagline: "Real-time collaborative coding platform for technical interviews with synchronized editing, video conferencing, and live code execution.",
      image: "assets/project-1.jpg",
      featured: true,
      badge: "Featured MERN & WebRTC",
      year: "2025",
      description: "Built a real-time collaborative coding platform for technical interviews with shared coding rooms and synchronized code editing using Monaco Editor and Socket.io. Implemented Firebase-based Google authentication with protected routes, room-based access, host/attendee roles, and shareable room links. Developed real-time chat, typing indicators, code execution, code download, copy room link, and editor controls for collaborative interview sessions. Integrated WebRTC-based video conferencing to enable live interviewer-candidate communication within coding rooms.",
      highlights: [
        "Built a real-time collaborative coding platform for technical interviews with shared coding rooms and synchronized code editing using Monaco Editor and Socket.io.",
        "Implemented Firebase-based Google authentication with protected routes, room-based access, host/attendee roles, and shareable room links.",
        "Developed real-time chat, typing indicators, code execution, code download, copy room link, and editor controls for collaborative interview sessions.",
        "Integrated WebRTC-based video conferencing to enable live interviewer-candidate communication within coding rooms."
      ],
      metrics: [
        { label: "Sync Latency", value: "<50ms" },
        { label: "Code Editor", value: "Monaco" },
        { label: "Media & Auth", value: "WebRTC/Firebase" }
      ],
      techStack: ["React.js", "Node.js", "Express.js", "Socket.io", "Monaco Editor", "Firebase", "WebRTC", "CSS3"],
      githubUrl: "https://github.com/Prorick44/real-time-interview-prep-project",
      liveUrl: "https://real-time-interview-prep-project.vercel.app/"
    },
    {
      id: "realtime-weather-dashboard",
      title: "Real-Time Weather Dashboard",
      category: "frontend",
      categoryLabel: "React • Redux Toolkit",
      tagline: "Dynamic weather dashboard providing live weather data for 200,000+ cities with interactive Chart.js visualizations.",
      image: "assets/project-2.jpg",
      featured: true,
      badge: "High Performance",
      year: "2024",
      description: "Developed a dynamic live weather analytics dashboard delivering instantaneous weather updates and 7-day trend forecasts for over 200,000 cities worldwide. Implemented debouncing and caching to reduce external API overhead by 40%. Integrated Chart.js for interactive visualizations of 7-day weather forecasts.",
      highlights: [
        "Developed a dynamic dashboard providing live weather data for 200,000+ cities.",
        "Implemented debouncing and caching to reduce API overhead by 40%.",
        "Integrated Chart.js for interactive visualizations of 7-day weather forecasts."
      ],
      metrics: [
        { label: "Cities Covered", value: "200,000+" },
        { label: "API Overhead Cut", value: "-40%" },
        { label: "Forecast Window", value: "7-Day Visuals" }
      ],
      techStack: ["React.js", "Redux Toolkit", "OpenWeather API", "Chart.js", "CSS3", "Vercel"],
      githubUrl: "https://github.com/Prorick44/weather-app",
      liveUrl: "https://weather-app-beige-ten-65.vercel.app/"
    },
    {
      id: "algorithmic-code-vault",
      title: "1000+ Algorithmic Problem Solving & Competitive Vault",
      category: "dsa",
      categoryLabel: "Competitive Programming",
      tagline: "High-performance C++ & Java solutions repository across CodeChef (3★, 1600+), ranked in top 10% in 20+ contests.",
      image: "assets/project-3.jpg",
      featured: true,
      badge: "CodeChef 3★",
      year: "2023 – Present",
      description: "Curated repository of 1,000+ optimized algorithmic solutions in C++, Java, and Python. Ranked in the top 10% of participants across various CodeChef rated contests with a peak 3-star rating (1600+) across 20+ contests.",
      highlights: [
        "Solved 1,000+ competitive programming problems spanning Dynamic Programming, Graph Algorithms, Trees, and Number Theory.",
        "Attained CodeChef 3-Star rating (1600+), regularly ranking in the top 10% of participants in various contests.",
        "Engineered reusable template libraries in C++ with custom fast I/O for optimal competitive execution."
      ],
      metrics: [
        { label: "Problems Solved", value: "1000+" },
        { label: "CodeChef Rating", value: "1600+ (3★)" },
        { label: "Contests", value: "20+ Contests" }
      ],
      techStack: ["C++", "Java", "Python", "DSA", "CodeChef", "Git"],
      githubUrl: "https://github.com/Prorick44",
      liveUrl: "https://www.codechef.com/users/projjal2002"
    },
    {
      id: "fullstack-projects-suite",
      title: "Full Stack Web Development & RESTful APIs",
      category: "fullstack",
      categoryLabel: "MERN Stack • APIs",
      tagline: "Suite of 5+ responsive web applications achieving 90+ Lighthouse scores, RESTful APIs, and Redux Toolkit state management.",
      image: "assets/project-4.jpg",
      featured: true,
      badge: "90+ Lighthouse",
      year: "2023 – Present",
      description: "Developed and maintained 5+ personal projects focusing on responsive design, RESTful APIs, centralized state management with Redux Toolkit, and performance tuning achieving 90+ Google Lighthouse scores.",
      highlights: [
        "Developed and maintained 5+ personal projects focusing on responsive design and RESTful APIs.",
        "Gained expertise in state management using Redux Toolkit for complex application data flows.",
        "Achieved 90+ Lighthouse performance scores through code-splitting and asset optimization."
      ],
      metrics: [
        { label: "Lighthouse Score", value: "90+" },
        { label: "Projects Shipped", value: "5+ Apps" },
        { label: "Deployment", value: "Render & Vercel" }
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "Redux Toolkit", "Render", "Vercel"],
      githubUrl: "https://github.com/Prorick44",
      liveUrl: "https://github.com/Prorick44"
    }
  ],

  experience: [
    {
      role: "Full Stack Web Development",
      company: "Personal Projects & Open Source",
      period: "2023 – Present",
      location: "West Bengal, India",
      description: "Developed and maintained 5+ personal projects focusing on responsive design, RESTful APIs, centralized Redux Toolkit state management, and asset optimization.",
      achievements: [
        "Developed and maintained 5+ personal projects focusing on responsive design and RESTful APIs.",
        "Gained expertise in state management using Redux Toolkit for complex application flows.",
        "Achieved 90+ Lighthouse performance scores through code-splitting and asset optimization.",
        "Technical Mentor: Assisted junior students in understanding core DSA concepts and React fundamentals."
      ],
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "Redux Toolkit", "Socket.io", "WebRTC", "C++", "DSA", "Vercel", "Render"]
    }
  ],

  education: [
    {
      degree: "B.Tech in Computer Science",
      institution: "Future Institute of Engineering and Management",
      period: "2021 – 2025",
      score: "CGPA: 8.58",
      location: "Kolkata, West Bengal",
      details: "Focused on Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, and Web Application Architecture."
    },
    {
      degree: "Higher Secondary (CBSE)",
      institution: "Lal Bahadur Shastri Sr. Sec.",
      period: "2021",
      score: "Percentage: 91.20%",
      location: "India",
      details: "Completed CBSE Class XII Science stream with distinction in Mathematics and Computer Science."
    },
    {
      degree: "Secondary Education (WBBSE)",
      institution: "Patha Bhavan (Dankuni)",
      period: "2019",
      score: "Percentage: 91.14%",
      location: "West Bengal, India",
      details: "Completed Secondary School Board examinations with distinction in Mathematics and Physical Sciences."
    }
  ],

  achievements: [
    {
      title: "Competitive Programming",
      desc: "Ranked in the top 10% of participants in various CodeChef contests. CodeChef 3-Star (1600+ rating) with 1,000+ problems solved across 20+ contests."
    },
    {
      title: "Academic Excellence",
      desc: "Consistently maintained a high CGPA (8.58) in B.Tech Computer Science while balancing technical projects."
    },
    {
      title: "Technical Mentor",
      desc: "Assisted junior students in understanding core DSA concepts and React fundamentals."
    },
    {
      title: "Community",
      desc: "Active contributor to open source discussions and developer forums."
    }
  ],

  terminalResponses: {
    help: `Available Commands:
  - <span class="cmd-highlight">about</span>       : Display Projjal's biography and summary
  - <span class="cmd-highlight">skills</span>      : List programming languages & core tech stack
  - <span class="cmd-highlight">projects</span>    : Output featured projects (CodeCollab, Weather Dashboard, etc.)
  - <span class="cmd-highlight">education</span>   : View B.Tech (8.58 CGPA), 12th (91.20%), and 10th (91.14%) details
  - <span class="cmd-highlight">codechef</span>    : View CodeChef profile (3★, 1600+ rating, 1000+ solved, 20+ contests)
  - <span class="cmd-highlight">experience</span>  : Show full stack web development journey
  - <span class="cmd-highlight">achievements</span>: View awards, top 10% contest ranks, and mentorship
  - <span class="cmd-highlight">contact</span>     : Display phone, email, GitHub, and LinkedIn
  - <span class="cmd-highlight">hire</span>        : Check current hiring status & roles
  - <span class="cmd-highlight">theme [name]</span> : Switch theme (default, cyber, midnight, light)
  - <span class="cmd-highlight">stats</span>       : Show DSA and academic statistics
  - <span class="cmd-highlight">clear</span>       : Clear the console output`,

    about: `<b>Projjal Paul</b> - Software Engineer | Full Stack Developer
-----------------------------------------------------------------
Result-oriented Software Engineer with B.Tech in Computer Science (8.58 CGPA).
Proven ability to build full stack web applications using MERN stack.
Passionate about competitive programming (1000+ solved, CodeChef 3★).
Location: West Bengal, India | Open for Full-Time Opportunities.`,

    skills: `Technical Competencies:
- <b>Programming</b>  : C, C++, Java, Python, HTML, CSS, JavaScript, SQL
- <b>Core Skills</b>  : React.js, Node.js, Express.js, MongoDB, MySQL, DSA, Git, Vercel, Render
- <b>Real-Time & UI</b>: Socket.io, WebRTC, Monaco Editor, Redux Toolkit, Chart.js
- <b>Competitive</b>  : CodeChef 3-Star (1600+ Rating), 1000+ Problems Solved, 20+ Contests
- <b>Languages</b>    : English (Professional), Bengali (Native), Hindi (Conversational)`,

    projects: `Featured Projects:
1. <b>Real-Time Interview Platform (CodeCollab)</b> [2025]
   • Tech: React.js | Node.js | Express.js | Socket.io | Monaco Editor | Firebase | WebRTC
   • Highlights: Shared coding rooms, Monaco editor sync, WebRTC video calls, live chat, code execution.
2. <b>Real-Time Weather Dashboard</b> [2024]
   • Tech: React | Redux Toolkit | OpenWeather API | Chart.js
   • Highlights: Live weather for 200,000+ cities, 40% API reduction via debouncing/caching, 7-day charts.
3. <b>1000+ Algorithmic Problem Solving & Competitive Vault</b> [2023-Present]
   • Tech: C++, Java, Python, DSA, CodeChef
   • Highlights: CodeChef 3★ (1600+ rating), Top 10% in various contests, 20+ contests.
4. <b>Full Stack Web Development Suite</b> [2023-Present]
   • Tech: MERN Stack, MySQL, Redux Toolkit, Render, Vercel
   • Highlights: 5+ personal projects, 90+ Lighthouse performance score.`,

    education: `Academic Qualifications:
1. <b>B.Tech in Computer Science</b> (2021 – 2025)
   Future Institute of Engineering and Management | <b>CGPA: 8.58</b>
2. <b>Higher Secondary (CBSE)</b> (2021)
   Lal Bahadur Shastri Sr. Sec. | <b>Percentage: 91.20%</b>
3. <b>Secondary Education (WBBSE)</b> (2019)
   Patha Bhavan (Dankuni) | <b>Percentage: 91.14%</b>`,

    codechef: `Competitive Programming & CodeChef Profile:
- <b>Rating</b>    : CodeChef 3 Star (1600+ Rating)
- <b>Problems</b>  : 1,000+ Coding Problems Solved
- <b>Contests</b>  : Participated in 20+ Contests (Ranked in top 10% in various contests)
- <b>Handle</b>    : projjal2002 (<a href="https://www.codechef.com/users/projjal2002" target="_blank" style="color:var(--accent-secondary);">codechef.com/users/projjal2002</a>)`,

    experience: `Technical Experience:
- <b>Full Stack Web Development</b> (2023 – Present)
  • Developed and maintained 5+ personal projects focusing on responsive design and RESTful APIs.
  • Gained expertise in state management using Redux Toolkit for complex application flows.
  • Achieved 90+ Lighthouse performance scores through code-splitting and asset optimization.
  • Mentored junior students in core DSA concepts and React fundamentals.`,

    achievements: `Achievements & Leadership:
• <b>Competitive Programming</b>: Ranked in the top 10% of participants in various CodeChef contests.
• <b>Academic Excellence</b>: Consistently maintained a high CGPA (8.58) while balancing technical projects.
• <b>Technical Mentor</b>: Assisted junior students in understanding core DSA concepts and React fundamentals.
• <b>Community</b>: Active contributor to open source discussions and developer forums.`,

    contact: `Contact Details:
- <b>Phone</b>    : +91-9073481347
- <b>Email</b>    : projjal2003@gmail.com
- <b>LinkedIn</b> : linkedin.com/in/projjal2002
- <b>GitHub</b>   : github.com/Prorick44
- <b>Location</b> : West Bengal, India`,

    hire: `Hiring Status: 🟢 <span style="color:#10b981;font-weight:bold;">OPEN FOR SOFTWARE ENGINEER ROLES</span>
- Available for: Software Engineer & Full Stack Developer Roles.
- Core Strengths: MERN Stack, React, Node.js, Express, Socket.io, WebRTC, C++/Java DSA, RESTful APIs.
- Location: West Bengal, India (Open to Remote & Onsite).`,

    stats: `Key Metrics & Achievements:
- Coding Problems Solved : 1000+ Problems
- CodeChef Rating        : 3 Star (1600+ Rating, Top 10% Contest Rank)
- Contests Participated  : 20+ Contests
- B.Tech CGPA            : 8.58 (Computer Science)
- Class 12 (CBSE)        : 91.20%
- Class 10 (WBBSE)       : 91.14%
- Personal Web Projects  : 5+ Full-Stack Projects (90+ Lighthouse Score)`
  }
};
