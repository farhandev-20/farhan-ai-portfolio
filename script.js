// ============================================================
// Farhan Attar - Conversational AI Portfolio Engine
// ============================================================

// DOM Elements
const pageContainer = document.getElementById("page-container");
const heroView = document.getElementById("hero-view");
const chatView = document.getElementById("chat-view");
const chatStream = document.getElementById("chat-stream");
const chatInput = document.getElementById("chat-input");
const globalChatForm = document.getElementById("global-chat-form");
const resetHomeBtn = document.getElementById("reset-home-btn");
const bottomChips = document.getElementById("bottom-chips");

// 1. Template Generators (Pure clean cards without trailing followup text)
const BOT_TEMPLATES = {
  // SCREENSHOT 4: ME / ABOUT
  me: () => `
    <div class="bot-card">
      <div class="about-two-col">
        <div class="about-portrait-wrap">
          <img src="profile.jpg" alt="Farhan Attar" class="about-portrait-img" />
        </div>
        <div class="about-right-info">
          <h2 class="about-name-title">Farhan</h2>
          <div class="about-sub-location">Computer Engineering Student • Barshi, Maharashtra</div>
          <p class="about-story-text">
            Hey 👋<br>
            I'm Farhan, a Computer Engineering student (2023–2027) at <b>Bhagwant Institute of Technology, Barshi</b> with a CGPA of <b>7.33/10</b>. I have hands-on experience in software and web application development, database management, and industry internships including <b>Python Developer Intern at Kiran Academy</b>, <b>Data Analyst Intern at Bluestock Fintech</b>, and <b>UI/UX Design Intern at Satyra IT LLP</b>.
          </p>
          <div class="about-blue-pills">
            <span class="pill-blue">Python</span>
            <span class="pill-blue">Data Analysis</span>
            <span class="pill-blue">Web Development</span>
            <span class="pill-blue">UI/UX Design</span>
            <span class="pill-blue">MySQL</span>
          </div>
        </div>
      </div>
    </div>
  `,

  // WORK EXPERIENCE (Internships & Industry Roles)
  experience: () => `
    <div class="bot-card experience-card">
      <div class="experience-header">
        <div>
          <h2 class="card-main-title">Work Experience</h2>
          <div class="experience-sub-title">Industry Roles • Python Development, Data Analytics & UI/UX Design</div>
        </div>
        <span class="experience-badge-count">3 Positions</span>
      </div>

      <div class="experience-timeline">
        <!-- Role 1: Python Developer Intern at Kiran Academy (Current) -->
        <div class="exp-item exp-item-active">
          <div class="exp-item-top">
            <div class="exp-role-group">
              <div class="exp-icon-box exp-icon-python">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <div>
                <div class="exp-role-title">Python Developer Intern</div>
                <div class="exp-company-name">Kiran Academy - Java By Kiran</div>
              </div>
            </div>
            <div class="exp-badge-period">
              <span class="status-pill status-active">
                <span class="pulse-dot-green"></span> Current Role
              </span>
              <span class="exp-date-text">Sep 2026 – Present</span>
            </div>
          </div>

          <div class="exp-meta-bar">
            <span class="exp-domain-tag">Python Development</span>
            <span class="exp-domain-tag">Backend & APIs</span>
            <span class="exp-domain-tag">Software Engineering</span>
          </div>

          <ul class="exp-bullet-list">
            <li>Developing modular Python applications, backend logic, and automation scripts following clean coding and OOP principles.</li>
            <li>Designing and executing database queries, CRUD workflows, and REST API integrations using Python and SQL/DBMS.</li>
            <li>Implementing algorithmic problem solving, debugging software modules, and optimizing application performance.</li>
            <li>Collaborating in team sprints to build scalable code modules, conduct code reviews, and test software solutions.</li>
          </ul>

          <div class="exp-skills-tags">
            <span class="exp-tag">Python</span>
            <span class="exp-tag">Backend Development</span>
            <span class="exp-tag">REST APIs</span>
            <span class="exp-tag">MySQL</span>
            <span class="exp-tag">OOP</span>
            <span class="exp-tag">Problem Solving</span>
          </div>
        </div>

        <!-- Role 2: Data Analyst Intern at Bluestock Fintech (Current) -->
        <div class="exp-item exp-item-active">
          <div class="exp-item-top">
            <div class="exp-role-group">
              <div class="exp-icon-box exp-icon-fintech">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10"></line>
                  <line x1="12" y1="20" x2="12" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
              </div>
              <div>
                <div class="exp-role-title">Data Analyst Intern</div>
                <div class="exp-company-name">Bluestock Fintech</div>
              </div>
            </div>
            <div class="exp-badge-period">
              <span class="status-pill status-active">
                <span class="pulse-dot-green"></span> Current Role
              </span>
              <span class="exp-date-text">Sep 2026 – Present</span>
            </div>
          </div>

          <div class="exp-meta-bar">
            <span class="exp-domain-tag">Fintech</span>
            <span class="exp-domain-tag">Data Analytics</span>
            <span class="exp-domain-tag">Financial Datasets</span>
          </div>

          <ul class="exp-bullet-list">
            <li>Analyzing financial datasets, stock market indicators, and platform metrics to extract actionable business intelligence.</li>
            <li>Building analytical queries and data transformations using Python and SQL to monitor user engagement trends and performance tracking.</li>
            <li>Designing intuitive KPI dashboards, tracking charts, and structured reporting summaries for fintech stakeholders.</li>
            <li>Collaborating with engineering and product teams to validate data accuracy, streamline ETL processes, and support data-backed decision-making.</li>
          </ul>

          <div class="exp-skills-tags">
            <span class="exp-tag">Python</span>
            <span class="exp-tag">SQL</span>
            <span class="exp-tag">Data Analysis</span>
            <span class="exp-tag">Financial Analytics</span>
            <span class="exp-tag">KPI Dashboards</span>
            <span class="exp-tag">Fintech</span>
          </div>
        </div>

        <!-- Role 2: UI/UX Design Intern at Satyra IT LLP (Completed) -->
        <div class="exp-item">
          <div class="exp-item-top">
            <div class="exp-role-group">
              <div class="exp-icon-box exp-icon-design">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                  <path d="M2 2l7.586 7.586"></path>
                  <circle cx="11" cy="11" r="2"></circle>
                </svg>
              </div>
              <div>
                <div class="exp-role-title">UI/UX Design Intern</div>
                <div class="exp-company-name">Satyra IT LLP</div>
              </div>
            </div>
            <div class="exp-badge-period">
              <span class="status-pill status-completed">Completed</span>
              <span class="exp-date-text">May 2026 – Aug 2026</span>
            </div>
          </div>

          <div class="exp-meta-bar">
            <span class="exp-domain-tag">IT Solutions</span>
            <span class="exp-domain-tag">UI/UX & Product Design</span>
            <span class="exp-domain-tag">Web Layouts</span>
          </div>

          <ul class="exp-bullet-list">
            <li>Designed responsive web interfaces and user-focused layouts, applying usability and visual consistency principles to project requirements.</li>
            <li>Created wireframes and interactive prototypes in Figma to define page structure, interface elements, and user flows before implementation.</li>
            <li>Collaborated with mentors to identify usability issues and refine interface layouts for clearer navigation and interaction.</li>
            <li>Applied responsive design principles to adapt web interfaces across desktop and mobile screen sizes.</li>
          </ul>

          <div class="exp-skills-tags">
            <span class="exp-tag">Figma</span>
            <span class="exp-tag">UI/UX Design</span>
            <span class="exp-tag">Wireframing</span>
            <span class="exp-tag">Interactive Prototyping</span>
            <span class="exp-tag">Responsive Design</span>
            <span class="exp-tag">Usability Testing</span>
          </div>
        </div>
      </div>
    </div>
  `,

  // SCREENSHOT 5: MY PROJECTS
  projects: () => `
    <div class="bot-card">
      <h2 class="card-main-title">My Projects</h2>
      <div class="projects-cards-grid">
        <!-- Project 1 -->
        <div class="project-visual-card" style="background: linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%);">
          <div>
            <div class="project-badge">AI Platform</div>
            <div class="project-card-name">AI Interview Coach</div>
            <div class="project-card-desc">AI-powered interview practice platform with structured workflows, response feedback, and responsive UI.</div>
          </div>
          <div class="project-visual-bottom">
            <span class="project-tech-tags">Python • HTML/CSS/JS</span>
            <a href="https://interviewai-ulkr.onrender.com" target="_blank" rel="noopener noreferrer" class="project-action-link">Live Demo &rarr;</a>
          </div>
        </div>

        <!-- Project 2 -->
        <div class="project-visual-card" style="background: linear-gradient(135deg, #18181b 0%, #27272a 100%);">
          <div>
            <div class="project-badge">Web Application</div>
            <div class="project-card-name">E-Commerce Website</div>
            <div class="project-card-desc">Responsive shopping web app with category filtering, shopping cart workflows, and modular UI.</div>
          </div>
          <div class="project-visual-bottom">
            <span class="project-tech-tags">HTML5 • CSS3 • JS</span>
            <a href="https://github.com/farhandev-20" target="_blank" rel="noopener noreferrer" class="project-action-link">GitHub &rarr;</a>
          </div>
        </div>

        <!-- Project 3 -->
        <div class="project-visual-card" style="background: linear-gradient(135deg, #022c22 0%, #0f172a 100%);">
          <div>
            <div class="project-badge">DBMS & MySQL</div>
            <div class="project-card-name">Smart Parking System</div>
            <div class="project-card-desc">Relational database parking management covering vehicle registration, slot allocation, and occupancy tracking.</div>
          </div>
          <div class="project-visual-bottom">
            <span class="project-tech-tags">MySQL • DBMS • SQL</span>
            <a href="https://github.com/farhandev-20" target="_blank" rel="noopener noreferrer" class="project-action-link">GitHub &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  `,

  // SCREENSHOT 3: SKILLS & EXPERTISE
  skills: () => `
    <div class="bot-card">
      <h2 class="card-main-title">Skills & Expertise</h2>
      <div class="skills-section-group">
        <div class="skills-cat-block">
          <div class="skills-cat-title"><span class="skills-cat-icon">🥞</span> Programming Languages</div>
          <div class="skills-pill-row">
            <span class="skill-black-pill">Python</span>
            <span class="skill-black-pill">JavaScript</span>
            <span class="skill-black-pill">SQL</span>
          </div>
        </div>

        <div class="skills-cat-block">
          <div class="skills-cat-title"><span class="skills-cat-icon">🌐</span> Web Development</div>
          <div class="skills-pill-row">
            <span class="skill-black-pill">HTML5</span>
            <span class="skill-black-pill">CSS3</span>
            <span class="skill-black-pill">Responsive Web Design</span>
          </div>
        </div>

        <div class="skills-cat-block">
          <div class="skills-cat-title"><span class="skills-cat-icon">🗄️</span> Databases & DBMS</div>
          <div class="skills-pill-row">
            <span class="skill-black-pill">MySQL</span>
            <span class="skill-black-pill">MongoDB</span>
            <span class="skill-black-pill">DBMS</span>
          </div>
        </div>

        <div class="skills-cat-block">
          <div class="skills-cat-title"><span class="skills-cat-icon">🛠️</span> Tools & Design</div>
          <div class="skills-pill-row">
            <span class="skill-black-pill">Git</span>
            <span class="skill-black-pill">GitHub</span>
            <span class="skill-black-pill">VS Code</span>
            <span class="skill-black-pill">Figma</span>
          </div>
        </div>

        <div class="skills-cat-block">
          <div class="skills-cat-title"><span class="skills-cat-icon">⚡</span> Core Competencies</div>
          <div class="skills-pill-row">
            <span class="skill-black-pill">Software Development</span>
            <span class="skill-black-pill">Web Application Development</span>
            <span class="skill-black-pill">Database Management</span>
            <span class="skill-black-pill">Problem Solving</span>
            <span class="skill-black-pill">UI/UX Design</span>
          </div>
        </div>
      </div>
    </div>
  `,

  // CONTACT INFORMATION (Apple-grade interactive card)
  contact: () => `
    <div class="bot-card contact-card">
      <div class="contact-header">
        <div>
          <h2 class="card-main-title">Contact Information</h2>
          <div class="contact-sub-title">Let's connect & discuss software engineering opportunities</div>
        </div>
        <div class="contact-status-badge">
          <span class="pulse-dot-green"></span>
          <span>Open to Opportunities</span>
        </div>
      </div>

      <div class="contact-cards-list">
        <!-- Email Item -->
        <a href="mailto:attarfarhan02@gmail.com" class="contact-interactive-row" title="Send email to Farhan">
          <div class="contact-row-left">
            <div class="contact-icon-box contact-icon-email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>
            <div class="contact-info-text">
              <div class="contact-label">Email Address</div>
              <div class="contact-value">attarfarhan02@gmail.com</div>
            </div>
          </div>
          <span class="contact-action-badge">
            <span>Send Email</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="contact-arrow-svg">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </span>
        </a>

        <!-- Phone Item -->
        <a href="tel:+919325147865" class="contact-interactive-row" title="Call Farhan">
          <div class="contact-row-left">
            <div class="contact-icon-box contact-icon-phone">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div class="contact-info-text">
              <div class="contact-label">Phone & WhatsApp</div>
              <div class="contact-value">+91 9325147865</div>
            </div>
          </div>
          <span class="contact-action-badge">
            <span>Call Now</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="contact-arrow-svg">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </span>
        </a>

        <!-- Location Item -->
        <div class="contact-interactive-row contact-static-row">
          <div class="contact-row-left">
            <div class="contact-icon-box contact-icon-loc">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div class="contact-info-text">
              <div class="contact-label">Location Base</div>
              <div class="contact-value">Barshi, Maharashtra, India</div>
              <div class="contact-hint">Open to Relocation (Pune, Mumbai, Bangalore, Hyderabad) & Remote</div>
            </div>
          </div>
          <span class="contact-sub-tag">IST (UTC+5:30)</span>
        </div>
      </div>

      <!-- Social Links Row -->
      <div class="contact-social-section">
        <div class="contact-social-label">Profiles & Links:</div>
        <div class="contact-social-grid">
          <a href="https://www.linkedin.com/in/farhan-attar-966408343/" target="_blank" rel="noopener noreferrer" class="contact-social-card link-linkedin" title="Farhan on LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" class="social-brand-svg">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 0 0 1.54-1.53c0-.85-.69-1.54-1.54-1.54a1.54 1.54 0 0 0-1.54 1.54c0 .84.69 1.53 1.54 1.53m1.39 9.74v-8.37H5.07v8.37h2.78z"></path>
            </svg>
            <span>LinkedIn</span>
            <span class="social-ext-arrow">↗</span>
          </a>

          <a href="https://github.com/farhandev-20" target="_blank" rel="noopener noreferrer" class="contact-social-card link-github" title="Farhan on GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor" class="social-brand-svg">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"></path>
            </svg>
            <span>GitHub</span>
            <span class="social-ext-arrow">↗</span>
          </a>

          <a href="https://farhan-ai-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" class="contact-social-card link-portfolio" title="Live Portfolio">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="social-brand-svg">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span>Portfolio</span>
            <span class="social-ext-arrow">↗</span>
          </a>
        </div>
      </div>
    </div>
  `,

  // SCREENSHOT 2: RESUME (Direct Clean PDF Document Send)
  resume: () => `
    <div class="bot-card resume-file-card">
      <div class="resume-file-header">
        <div class="resume-file-icon-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="resume-pdf-svg">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <path d="M10 12v6"></path>
            <path d="M14 12v6"></path>
            <path d="M10 15h4"></path>
          </svg>
          <span class="pdf-tag-pill">PDF</span>
        </div>

        <div class="resume-file-meta">
          <div class="resume-file-name">Farhan_Attar_Resume.pdf</div>
          <div class="resume-file-sub">84 KB • 2 Pages • Computer Engineering 2027</div>
          <div class="resume-file-status">
            <span class="pulse-dot-green"></span>
            <span>Verified Official Resume</span>
          </div>
        </div>
      </div>

      <div class="resume-file-actions">
        <a href="resume.pdf" target="_blank" rel="noopener noreferrer" class="resume-btn-pill btn-open" title="Open PDF in new tab">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          <span>Open PDF</span>
        </a>

        <a href="resume.pdf" download="Farhan_Attar_Resume.pdf" class="resume-btn-pill btn-dl" title="Download Resume PDF">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          <span>Download</span>
        </a>
      </div>
    </div>
  `,

  // LOCATION & AVAILABILITY (Real Satellite Earth View with Space Fly-In)
  location: () => `
    <div class="bot-card location-cinematic-card">
      <div class="location-top-bar">
        <div class="location-title-wrap">
          <h2 class="card-main-title">Real Earth Satellite View</h2>
          <span class="location-hud-badge">LIVE SATELLITE TILE • ESRI IMAGERY</span>
        </div>
        <div class="location-top-actions">
          <a href="https://earth.google.com/web/search/Barshi,+Maharashtra/@18.2329,75.6953,500a,1000d,35y,0h,45t,0r" target="_blank" rel="noopener noreferrer" class="earth-google-btn" title="Open in Google Earth 3D">
            <span>🌍 Google Earth 3D</span>
          </a>
        </div>
      </div>

      <!-- Real Satellite Earth Map Stage -->
      <div class="real-earth-stage-wrap">
        <!-- Satellite HUD Overlays -->
        <div class="earth-hud-header">
          <div class="hud-coords">
            <span class="hud-label">GPS:</span> 18.2329° N, 75.6953° E
          </div>
          <div class="hud-status">
            <span class="hud-rec-dot"></span> SATELLITE CAM ACTIVE
          </div>
        </div>

        <div class="earth-crosshair-tl"></div>
        <div class="earth-crosshair-tr"></div>
        <div class="earth-crosshair-bl"></div>
        <div class="earth-crosshair-br"></div>

        <!-- Real Leaflet / Esri Satellite Canvas Container -->
        <div class="real-earth-map-canvas" style="width: 100%; height: 100%;"></div>

        <div class="earth-hud-footer">
          <span>ALTITUDE: <strong id="hud-alt-val">35,000 km</strong></span>
          <span>LOCK: <strong style="color: #10b981;">BARSHI, MAHARASHTRA</strong></span>
        </div>
      </div>

      <!-- Location Details Grid -->
      <div class="location-details-grid">
        <div class="loc-detail-box">
          <div class="loc-detail-icon">📍</div>
          <div>
            <div class="loc-detail-title">Current Base</div>
            <div class="loc-detail-desc">Barshi, Solapur District, Maharashtra, India</div>
          </div>
        </div>

        <div class="loc-detail-box">
          <div class="loc-detail-icon">⏰</div>
          <div>
            <div class="loc-detail-title">Timezone</div>
            <div class="loc-detail-desc">Indian Standard Time (IST • UTC+5:30)</div>
          </div>
        </div>

        <div class="loc-detail-box">
          <div class="loc-detail-icon">💼</div>
          <div>
            <div class="loc-detail-title">Relocation & Work Mode</div>
            <div class="loc-detail-desc">Open to On-site / Hybrid (Pune, Mumbai, Bangalore, Hyderabad) & Remote</div>
          </div>
        </div>

        <div class="loc-detail-box">
          <div class="loc-detail-icon">🎓</div>
          <div>
            <div class="loc-detail-title">Availability</div>
            <div class="loc-detail-desc">2027 Engineering batch candidate; available from <strong>June 2027</strong></div>
          </div>
        </div>
      </div>
    </div>
  `,
};

// 2. Keyword mapping for conversational text queries
function matchQueryTopic(text) {
  const q = text.toLowerCase().trim();

  if (q === "me" || q.includes("who is") || q.includes("about") || q.includes("bio") || q.includes("story") || q.includes("background")) {
    return "me";
  }
  if (
    q === "experience" ||
    q === "internship" ||
    q === "internships" ||
    q === "work" ||
    q.includes("experience") ||
    q.includes("intern") ||
    q.includes("kiran") ||
    q.includes("java by kiran") ||
    q.includes("bluestock") ||
    q.includes("satyra") ||
    q.includes("company") ||
    q.includes("job") ||
    q.includes("career") ||
    q.includes("work history")
  ) {
    return "experience";
  }
  if (q === "projects" || q.includes("project") || q.includes("built") || q.includes("interview") || q.includes("ecommerce") || q.includes("parking")) {
    return "projects";
  }
  if (q === "skills" || q.includes("skill") || q.includes("tech") || q.includes("stack") || q.includes("python") || q.includes("javascript") || q.includes("sql") || q.includes("database")) {
    return "skills";
  }
  if (q === "contact" || q.includes("email") || q.includes("phone") || q.includes("reach") || q.includes("connect") || q.includes("hire") || q.includes("message")) {
    return "contact";
  }
  if (q === "resume" || q.includes("cv") || q.includes("download resume")) {
    return "resume";
  }
  if (q === "location" || q.includes("where") || q.includes("city") || q.includes("based") || q.includes("available") || q.includes("join") || q.includes("batch")) {
    return "location";
  }

  return null;
}

// 3. Fallback generic answer generator
function getGenericAnswer(query) {
  const q = query.toLowerCase();

  if (q.includes("education") || q.includes("college") || q.includes("cgpa") || q.includes("degree")) {
    return `
      <div class="generic-bot-bubble">
        <strong>Bhagwant Institute of Technology, Barshi</strong><br>
        Bachelor of Technology in Computer Engineering (2023–2027)<br><br>
        • <strong>Current CGPA:</strong> 7.33 / 10<br>
        • <strong>Target Joining Date:</strong> June 2027 (Graduate Trainee / Software Engineer)
      </div>
    `;
  }

  if (q.includes("certif") || q.includes("course")) {
    return `
      <div class="generic-bot-bubble">
        <strong>Certifications:</strong><br><br>
        • <strong>IBM AI Fundamentals</strong><br>
        • <strong>MERN Stack</strong><br>
        • <strong>UI/UX Internship Certificate – Satyra IT LLP</strong><br>
        • <strong>Python – Profound CRT</strong>
      </div>
    `;
  }

  return `
    <div class="generic-bot-bubble">
      Farhan Attar is a Computer Engineering student (2027 Batch) and Software Developer with experience in Python, Web Applications, MySQL/DBMS, Data Analytics, and UI/UX Design.<br><br>
      You can explore:<br>
      • <strong>Me:</strong> Background & education<br>
      • <strong>Experience:</strong> Kiran Academy, Bluestock Fintech & Satyra IT LLP internships<br>
      • <strong>Projects:</strong> AI Interview Coach, E-Commerce, Smart Parking<br>
      • <strong>Skills:</strong> Python, JavaScript, SQL, HTML/CSS, MongoDB, Figma<br>
      • <strong>Contact:</strong> Email, Phone & Socials<br>
      • <strong>Resume:</strong> Download verified PDF
    </div>
  `;
}

// 4. Intelligent Navigation & Dynamic Focus Engine (ChatGPT-style auto-scroll & focus)
let activeScrollAnimId = null;

function getElementDocumentTop(element) {
  if (!element) return 0;
  let top = 0;
  let curr = element;
  while (curr) {
    top += curr.offsetTop;
    curr = curr.offsetParent;
  }
  return top;
}

function smoothScrollToPosition(targetY, duration = 460, callback) {
  if (activeScrollAnimId) {
    cancelAnimationFrame(activeScrollAnimId);
    activeScrollAnimId = null;
  }

  const maxScroll = Math.max(
    0,
    document.documentElement.scrollHeight - window.innerHeight
  );
  const clampedTargetY = Math.max(0, Math.min(targetY, maxScroll));
  const startY = window.pageYOffset || document.documentElement.scrollTop;
  const distance = clampedTargetY - startY;

  if (Math.abs(distance) < 2) {
    window.scrollTo(0, clampedTargetY);
    if (callback) callback();
    return;
  }

  const startTime = performance.now();

  function animate(now) {
    const elapsed = now - startTime;
    const progress = Math.min(1, elapsed / duration);
    // Smooth easeOutCubic curve (fast start, silky deceleration)
    const ease = 1 - Math.pow(1 - progress, 3);
    const currentY = startY + distance * ease;

    window.scrollTo(0, currentY);

    if (progress < 1) {
      activeScrollAnimId = requestAnimationFrame(animate);
    } else {
      window.scrollTo(0, clampedTargetY);
      activeScrollAnimId = null;
      if (callback) callback();
    }
  }

  activeScrollAnimId = requestAnimationFrame(animate);
}

function focusNewContent(targetElement, options = {}) {
  if (!targetElement) return;
  const offset = options.offset !== undefined ? options.offset : 65;
  const duration = options.duration || 460;

  requestAnimationFrame(() => {
    const docTop = getElementDocumentTop(targetElement);
    const targetY = Math.max(0, docTop - offset);
    smoothScrollToPosition(targetY, duration, options.callback);
  });
}

// Real Earth Satellite Interactive Controller (Leaflet + Esri High-Res Satellite Fly-In)
let activeLeafletMap = null;

function animateAltitudeHUD(cardElement, startAlt, endAlt, duration) {
  const altEl = cardElement ? cardElement.querySelector("#hud-alt-val") : document.getElementById("hud-alt-val");
  if (!altEl) return;

  const startTime = performance.now();
  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(1, elapsed / duration);
    // Smooth logarithmic deceleration from orbit to ground
    const currentAlt = Math.round(startAlt * Math.pow(endAlt / startAlt, progress));

    if (currentAlt > 1000) {
      altEl.textContent = (currentAlt / 1000).toFixed(0) + ",000 km MSL";
    } else {
      altEl.textContent = currentAlt + "m MSL";
    }

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      altEl.textContent = "516m MSL";
    }
  }
  requestAnimationFrame(update);
}

function initRealEarthMap(cardElement) {
  const mapCanvas = cardElement ? cardElement.querySelector(".real-earth-map-canvas") : document.querySelector(".real-earth-map-canvas");
  if (!mapCanvas || typeof L === "undefined") return;

  // Set unique canvas ID to allow multiple instances
  const mapUniqueId = "real-earth-canvas-" + Date.now();
  mapCanvas.id = mapUniqueId;

  try {
    // 1. Initialize Map at Earth Global Space Orbit (Zoom 2)
    const map = L.map(mapUniqueId, {
      center: [20, 40], // Space view centered on Earth globe
      zoom: 2,
      minZoom: 2,
      maxZoom: 19,
      zoomControl: true,
      attributionControl: false,
      scrollWheelZoom: true
    });

    // 2. Add High-Resolution Real Satellite Earth Imagery (Esri World Imagery)
    L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
      maxZoom: 19,
      attribution: "Esri Satellite Imagery"
    }).addTo(map);

    // 3. Add Real Geographical Labels & Boundaries Overlay
    L.tileLayer("https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}", {
      maxZoom: 19,
      opacity: 0.9
    }).addTo(map);

    // 4. Custom Neon Location Radar Pin at Barshi (18.2329° N, 75.6953° E)
    const customRadarIcon = L.divIcon({
      className: "leaflet-neon-radar-marker",
      html: `
        <div class="real-radar-pulse"></div>
        <div class="real-pin-point">
          <svg viewBox="0 0 24 24" fill="#ef4444" style="width: 28px; height: 28px; filter: drop-shadow(0 0 8px #ef4444);">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
          </svg>
        </div>
        <div class="real-marker-badge">Barshi, MH</div>
      `,
      iconSize: [32, 42],
      iconAnchor: [16, 36]
    });

    const marker = L.marker([18.2329, 75.6953], { icon: customRadarIcon }).addTo(map);
    marker.bindPopup(`
      <div style="font-family: inherit; font-size: 13px; color: #090909; padding: 4px;">
        <strong style="font-size: 14px; color: #0f172a;">📍 Farhan Attar</strong><br>
        <span style="color: #475569;">Barshi, Maharashtra, India</span><br>
        <span style="font-size: 11px; color: #0284c7; font-family: monospace;">18.2329° N, 75.6953° E • Alt: 516m</span>
      </div>
    `);

    activeLeafletMap = map;

    // 5. Trigger Cinematic Real Satellite Zoom from Space into Barshi
    setTimeout(() => {
      map.invalidateSize();
      map.flyTo([18.2329, 75.6953], 15, {
        duration: 4.2,
        easeLinearity: 0.25
      });
      animateAltitudeHUD(cardElement, 35000, 516, 4200);
    }, 450);

  } catch (err) {
    console.warn("Leaflet Real Earth Map initialization error:", err);
  }
}

// 5. Chat View Transition & Message Dispatcher
function showChatView() {
  if (heroView.classList.contains("active-view")) {
    heroView.classList.remove("active-view");
    heroView.classList.add("hidden-view");
    chatView.classList.remove("hidden-view");
  }
  // Reveal bottom option chips above search bar in chat mode
  if (bottomChips) {
    bottomChips.classList.remove("hidden-chips");
  }
  if (pageContainer) {
    pageContainer.classList.add("in-chat");
  }
}

function showHeroView() {
  chatView.classList.add("hidden-view");
  heroView.classList.remove("hidden-view");
  heroView.classList.add("active-view");
  chatStream.innerHTML = "";
  if (chatInput) chatInput.value = "";
  // Hide bottom chips on overview page
  if (bottomChips) {
    bottomChips.classList.add("hidden-chips");
  }
  if (pageContainer) {
    pageContainer.classList.remove("in-chat");
  }
  document.querySelectorAll(".chip-pill").forEach((btn) => btn.classList.remove("active-chip"));
  // Reset scroll to top smoothly when returning to overview
  smoothScrollToPosition(0, 320);
}

function handleSelectTopic(topicKey, userQueryText) {
  showChatView();

  // Highlight active chip above search bar
  document.querySelectorAll(".chip-pill").forEach((btn) => {
    btn.classList.toggle("active-chip", btn.getAttribute("data-topic") === topicKey);
  });

  // Display Title label in user bubble
  const topicTitles = {
    me: "Me",
    experience: "Work Experience",
    projects: "My Projects",
    skills: "Skills & Expertise",
    contact: "Contact Information",
    resume: "Resume",
    location: "Real Earth Satellite View"
  };

  const displayText = userQueryText || topicTitles[topicKey] || topicKey;

  // Clear previous active focus highlights
  document.querySelectorAll(".newly-focused").forEach((el) => {
    el.classList.remove("newly-focused");
  });

  // Append user bubble with newly-focused class
  const userRow = document.createElement("div");
  userRow.className = "user-msg-row newly-focused";
  userRow.innerHTML = `<div class="user-msg-bubble">${displayText}</div>`;
  chatStream.appendChild(userRow);
  
  // Immediately bring viewport down to newly asked topic (ChatGPT-style)
  focusNewContent(userRow, { offset: 65, duration: 400 });

  // Typing indicator
  const typingRow = document.createElement("div");
  typingRow.className = "bot-msg-row";
  typingRow.id = "active-typing";
  typingRow.innerHTML = `
    <div class="typing-indicator-bubble">
      <span>Thinking</span>
      <span class="dot-pulse"></span>
      <span class="dot-pulse"></span>
      <span class="dot-pulse"></span>
    </div>
  `;
  chatStream.appendChild(typingRow);

  // Render Bot Card Answer and lock focus to this new question + response
  setTimeout(() => {
    const activeTyping = document.getElementById("active-typing");
    if (activeTyping) activeTyping.remove();

    const botRow = document.createElement("div");
    botRow.className = "bot-msg-row newly-focused";

    if (BOT_TEMPLATES[topicKey]) {
      botRow.innerHTML = BOT_TEMPLATES[topicKey]();
    } else {
      botRow.innerHTML = getGenericAnswer(displayText);
    }

    chatStream.appendChild(botRow);
    
    // Initialize Real Earth Satellite Map if location
    if (topicKey === "location") {
      setTimeout(() => initRealEarthMap(botRow), 100);
    }

    // Anchor focus on the new question and answer card so previous cards are scrolled past
    focusNewContent(userRow, { offset: 65, duration: 460 });

    // If card has images, re-verify focus once loaded
    const img = botRow.querySelector("img");
    if (img) {
      img.onload = () => focusNewContent(userRow, { offset: 65, duration: 250 });
    }
  }, 260);
}

// 6. Event Listeners for Nav Cards, Bottom Chips & Search
document.addEventListener("click", (e) => {
  // Option Card / Chip Click
  const targetCard = e.target.closest("[data-topic]");
  if (targetCard) {
    const topic = targetCard.getAttribute("data-topic");
    if (topic) {
      handleSelectTopic(topic);
      return;
    }
  }
});

// Form Submission (Search Bar)
if (globalChatForm) {
  globalChatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = chatInput.value.trim();
    if (!query) return;

    if (chatInput) chatInput.blur();

    const matchedTopic = matchQueryTopic(query);
    if (matchedTopic) {
      handleSelectTopic(matchedTopic, query);
    } else {
      // General custom question
      showChatView();

      // Clear previous active chips
      document.querySelectorAll(".chip-pill").forEach((btn) => btn.classList.remove("active-chip"));

      // Clear previous active focus highlights
      document.querySelectorAll(".newly-focused").forEach((el) => {
        el.classList.remove("newly-focused");
      });

      const userRow = document.createElement("div");
      userRow.className = "user-msg-row newly-focused";
      userRow.innerHTML = `<div class="user-msg-bubble">${query}</div>`;
      chatStream.appendChild(userRow);
      
      focusNewContent(userRow, { offset: 65, duration: 400 });

      const typingRow = document.createElement("div");
      typingRow.className = "bot-msg-row";
      typingRow.id = "active-typing";
      typingRow.innerHTML = `
        <div class="typing-indicator-bubble">
          <span>Thinking</span>
          <span class="dot-pulse"></span>
          <span class="dot-pulse"></span>
          <span class="dot-pulse"></span>
        </div>
      `;
      chatStream.appendChild(typingRow);

      setTimeout(() => {
        const activeTyping = document.getElementById("active-typing");
        if (activeTyping) activeTyping.remove();

        const botRow = document.createElement("div");
        botRow.className = "bot-msg-row newly-focused";
        botRow.innerHTML = getGenericAnswer(query);
        chatStream.appendChild(botRow);
        
        focusNewContent(userRow, { offset: 65, duration: 460 });
      }, 260);
    }

    chatInput.value = "";
  });
}

// Reset / Overview Button
if (resetHomeBtn) {
  resetHomeBtn.addEventListener("click", () => {
    showHeroView();
  });
}

// ================================================================
// 7. Slow-Motion Liquid Cursor Background (WebGL2 Fluid Simulation)
// ================================================================
(() => {
  const cv = document.getElementById("fluid");
  if (!cv || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const gl = cv.getContext("webgl2", { alpha: false, antialias: false });
  if (!gl || !(gl.getExtension("EXT_color_buffer_float") || gl.getExtension("EXT_color_buffer_half_float"))) return;

  const N = "vec2 t=1./vec2(textureSize(U,0));";
  const F = {
    adv: "uniform sampler2D U,S;uniform float dt,k;void main(){" + N + "o=texture(S,uv-dt*texture(U,uv).xy*t)/(1.+k*dt);}",
    splat: "uniform sampler2D S;uniform vec2 p;uniform vec3 c;uniform float r,a;void main(){vec2 d=uv-p;d.x*=a;o=vec4(texture(S,uv).rgb+exp(-dot(d,d)/r)*c,1.);}",
    curl: "uniform sampler2D U;void main(){" + N + "float L=texture(U,uv-vec2(t.x,0)).y,R=texture(U,uv+vec2(t.x,0)).y,T=texture(U,uv+vec2(0,t.y)).x,B=texture(U,uv-vec2(0,t.y)).x;o=vec4(.5*(R-L-T+B),0,0,1);}",
    vort: "uniform sampler2D U,C;uniform float k,dt;void main(){" + N + "float L=texture(C,uv-vec2(t.x,0)).x,R=texture(C,uv+vec2(t.x,0)).x,T=texture(C,uv+vec2(0,t.y)).x,B=texture(C,uv-vec2(0,t.y)).x,c=texture(C,uv).x;vec2 f=.5*vec2(abs(T)-abs(B),abs(R)-abs(L));f/=length(f)+1e-4;f*=k*c;f.y*=-1.;o=vec4(clamp(texture(U,uv).xy+f*dt,-1000.,1000.),0,1);}",
    div: "uniform sampler2D U;void main(){" + N + "float L=texture(U,uv-vec2(t.x,0)).x,R=texture(U,uv+vec2(t.x,0)).x,T=texture(U,uv+vec2(0,t.y)).y,B=texture(U,uv-vec2(0,t.y)).y;o=vec4(.5*(R-L+T-B),0,0,1);}",
    clr: "uniform sampler2D S;uniform float k;void main(){o=k*texture(S,uv);}",
    prs: "uniform sampler2D U,D;void main(){" + N + "float L=texture(U,uv-vec2(t.x,0)).x,R=texture(U,uv+vec2(t.x,0)).x,T=texture(U,uv+vec2(0,t.y)).x,B=texture(U,uv-vec2(0,t.y)).x;o=vec4((L+R+T+B-texture(D,uv).x)*.25,0,0,1);}",
    grad: "uniform sampler2D U,V;void main(){" + N + "float L=texture(U,uv-vec2(t.x,0)).x,R=texture(U,uv+vec2(t.x,0)).x,T=texture(U,uv+vec2(0,t.y)).x,B=texture(U,uv-vec2(0,t.y)).x;o=vec4(texture(V,uv).xy-vec2(R-L,T-B),0,1);}",
    show: "uniform sampler2D S;uniform vec3 bg;void main(){vec3 c=max(texture(S,uv).rgb,0.);float a=min(max(c.r,max(c.g,c.b)),1.);o=vec4(min(bg*(1.-a)+c,1.),1);}"
  };

  const sh = (t, s) => {
    const o = gl.createShader(t);
    gl.shaderSource(o, s);
    gl.compileShader(o);
    return o;
  };

  const vs = sh(gl.VERTEX_SHADER, "#version 300 es\nin vec2 p;out vec2 uv;void main(){uv=p*.5+.5;gl_Position=vec4(p,0,1);}");
  const P = {};

  for (const k in F) {
    const p = gl.createProgram();
    gl.attachShader(p, vs);
    gl.attachShader(p, sh(gl.FRAGMENT_SHADER, "#version 300 es\nprecision highp float;in vec2 uv;out vec4 o;" + F[k]));
    gl.bindAttribLocation(p, 0, "p");
    gl.linkProgram(p);
    P[k] = { p, l: {} };
  }

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(0);
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

  function draw(Q, u, tg) {
    gl.useProgram(Q.p);
    let n = 0;
    for (const k in u) {
      const v = u[k], l = Q.l[k] ?? (Q.l[k] = gl.getUniformLocation(Q.p, k));
      if (v instanceof WebGLTexture) {
        gl.activeTexture(gl.TEXTURE0 + n);
        gl.bindTexture(3553, v);
        gl.uniform1i(l, n++);
      } else if (Array.isArray(v)) {
        v.length === 2 ? gl.uniform2f(l, ...v) : gl.uniform3f(l, ...v);
      } else {
        gl.uniform1f(l, v);
      }
    }
    gl.bindFramebuffer(gl.FRAMEBUFFER, tg ? tg.f : null);
    gl.viewport(0, 0, tg ? tg.w : cv.width, tg ? tg.h : cv.height);
    gl.drawArrays(5, 0, 4);
  }

  const fbo = (w, h) => {
    const t = gl.createTexture();
    gl.bindTexture(3553, t);
    for (const [k, v] of [
      [10241, 9729],
      [10240, 9729],
      [10242, 33071],
      [10243, 33071]
    ]) gl.texParameteri(3553, k, v);
    gl.texImage2D(3553, 0, gl.RGBA16F, w, h, 0, gl.RGBA, gl.HALF_FLOAT, null);
    const f = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, f);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, 3553, t, 0);
    gl.clear(16384);
    return { t, f, w, h };
  };

  const dbl = (w, h) => {
    const d = { r: fbo(w, h), w: fbo(w, h), sw() { [d.r, d.w] = [d.w, d.r]; } };
    return d;
  };

  const rgb = h => {
    const f = n => {
      const k = (n + h * 6) % 6;
      return 1 - Math.max(0, Math.min(k, 4 - k, 1));
    };
    return [f(5) * 0.85 + 0.15, f(3) * 0.75 + 0.15, f(1) * 0.95 + 0.1];
  };

  let V, D, Pr, Dv, Cu, W, H, bg = [1, 1, 1];

  function splat(x, y, dx, dy, c) {
    draw(P.splat, { S: V.r.t, p: [x, y], c: [dx, dy, 0], r: 0.0035, a: W / H }, V.w);
    V.sw();
    draw(P.splat, { S: D.r.t, p: [x, y], c, r: 0.0035, a: W / H }, D.w);
    D.sw();
  }

  function init() {
    cv.width = W = innerWidth;
    cv.height = H = innerHeight;
    const a = W / H;
    const z = r => a > 1 ? [Math.round(r * a), r] : [r, Math.round(r / a)];
    V = dbl(...z(128));
    D = dbl(...z(512));
    Pr = dbl(...z(128));
    Dv = fbo(...z(128));
    Cu = fbo(...z(128));

    for (let i = 0; i < 5; i++) {
      splat(
        Math.random(),
        Math.random(),
        (Math.random() - 0.5) * 250,
        (Math.random() - 0.5) * 250,
        rgb(Math.random()).map(v => v * 0.12)
      );
    }
  }

  function step(dt) {
    draw(P.curl, { U: V.r.t }, Cu);
    draw(P.vort, { U: V.r.t, C: Cu.t, k: 12, dt }, V.w);
    V.sw();
    draw(P.div, { U: V.r.t }, Dv);
    draw(P.clr, { S: Pr.r.t, k: 0.85 }, Pr.w);
    Pr.sw();
    for (let i = 0; i < 20; i++) {
      draw(P.prs, { U: Pr.r.t, D: Dv.t }, Pr.w);
      Pr.sw();
    }
    draw(P.grad, { U: Pr.r.t, V: V.r.t }, V.w);
    V.sw();
    draw(P.adv, { U: V.r.t, S: V.r.t, dt, k: 0.4 }, V.w);
    V.sw();
    draw(P.adv, { U: V.r.t, S: D.r.t, dt, k: 0.2 }, D.w);
    D.sw();
    draw(P.show, { S: D.r.t, bg }, null);
  }

  init();

  const cl = v => Math.max(-450, Math.min(450, v));
  let px = null, py = 0, hue = Math.random(), last = performance.now(), fr = 0, tm;

  addEventListener("pointermove", e => {
    const x = e.clientX / W, y = 1 - e.clientY / H;
    if (px !== null && (x !== px || y !== py)) {
      hue = (hue + 0.003) % 1;
      splat(
        x,
        y,
        cl((x - px) * 1000),
        cl((y - py) * 1000),
        rgb(hue).map(v => v * 0.1)
      );
    }
    px = x;
    py = y;
  });

  addEventListener("resize", () => {
    clearTimeout(tm);
    tm = setTimeout(init, 200);
  });

  (function loop(now) {
    const dt = Math.min((now - last) / 1000, 0.0167) * 0.22;
    last = now;
    if (fr++ % 60 === 0) {
      const m = getComputedStyle(document.body).backgroundColor.match(/\d+/g);
      if (m) bg = m.slice(0, 3).map(v => v / 255);
    }
    step(dt);
    requestAnimationFrame(loop);
  })(last);
})();
