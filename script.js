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
            I'm Farhan, a Computer Engineering student (2023–2027) at <b>Bhagwant Institute of Technology, Barshi</b> with a CGPA of <b>7.33/10</b>. I have hands-on experience in software and web application development, database management, and completed a UI/UX internship at <b>Satyra IT LLP</b>.
          </p>
          <div class="about-blue-pills">
            <span class="pill-blue">Python</span>
            <span class="pill-blue">Web Development</span>
            <span class="pill-blue">UI/UX Design</span>
            <span class="pill-blue">MySQL</span>
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

  // SCREENSHOT 1: CONTACT INFORMATION
  contact: () => `
    <div class="bot-card">
      <div class="contact-header">
        <h2 class="card-main-title">Contact Information</h2>
        <span class="contact-handle">@farhandev-20</span>
      </div>

      <div class="contact-list">
        <a href="mailto:attarfarhan02@gmail.com" class="contact-item" title="Click to send email">
          <span class="contact-item-icon">✉️</span>
          <span>attarfarhan02@gmail.com</span>
          <span class="contact-arrow">&gt;</span>
        </a>

        <a href="tel:+919325147865" class="contact-item" title="Click to call">
          <span class="contact-item-icon">📞</span>
          <span>+91 9325147865</span>
        </a>

        <div class="contact-item">
          <span class="contact-item-icon">📍</span>
          <span>Barshi, Maharashtra, India</span>
        </div>
      </div>

      <div class="contact-social-row">
        <a href="https://www.linkedin.com/in/farhan-attar-966408343/" target="_blank" rel="noopener noreferrer" class="contact-social-link">LinkedIn</a>
        <a href="https://github.com/farhandev-20" target="_blank" rel="noopener noreferrer" class="contact-social-link">GitHub</a>
        <a href="https://farhan-ai-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" class="contact-social-link">Portfolio</a>
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
  if (q === "projects" || q.includes("project") || q.includes("work") || q.includes("built") || q.includes("interview") || q.includes("ecommerce") || q.includes("parking")) {
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

  if (q.includes("intern") || q.includes("satyra") || q.includes("experience")) {
    return `
      <div class="generic-bot-bubble">
        <strong>UI/UX Design Intern at Satyra IT LLP</strong> (May 2026 – Aug 2026)<br><br>
        • Designed responsive web interfaces and user-focused layouts in Figma.<br>
        • Created wireframes and interactive prototypes to define clear user flows.<br>
        • Collaborated with mentors to refine usability and adapt interfaces across desktop and mobile screens.
      </div>
    `;
  }

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
      Farhan Attar is a Computer Engineering student (2027 Batch) and Software Developer with experience in Python, Web Applications, MySQL/DBMS, and UI/UX Design.<br><br>
      You can explore:<br>
      • <strong>Me:</strong> Background, education & internship<br>
      • <strong>Projects:</strong> AI Interview Coach, E-Commerce, Smart Parking<br>
      • <strong>Skills:</strong> Python, JavaScript, SQL, HTML/CSS, MongoDB, Figma<br>
      • <strong>Contact:</strong> Email, Phone & Socials<br>
      • <strong>Resume:</strong> Download verified PDF
    </div>
  `;
}

// 4. Intelligent Navigation & Dynamic Focus Engine
function focusNewContent(targetElement, options = {}) {
  if (!targetElement) return;
  const offset = options.offset !== undefined ? options.offset : 65;
  const behavior = options.behavior || "smooth";

  requestAnimationFrame(() => {
    const rect = targetElement.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const targetY = Math.max(0, scrollTop + rect.top - offset);

    window.scrollTo({
      top: targetY,
      behavior: behavior
    });
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
  window.scrollTo({ top: 0, behavior: "smooth" });
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
    projects: "My Projects",
    skills: "Skills & Expertise",
    contact: "Contact Information",
    resume: "Resume",
    location: "Real Earth Satellite View"
  };

  const displayText = userQueryText || topicTitles[topicKey] || topicKey;

  // Append user bubble
  const userRow = document.createElement("div");
  userRow.className = "user-msg-row";
  userRow.innerHTML = `<div class="user-msg-bubble">${displayText}</div>`;
  chatStream.appendChild(userRow);
  
  // Immediately focus newly selected content
  focusNewContent(userRow, { offset: 70 });

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
  focusNewContent(userRow, { offset: 70 });

  // Render Bot Card Answer and smoothly keep new response focused
  setTimeout(() => {
    const activeTyping = document.getElementById("active-typing");
    if (activeTyping) activeTyping.remove();

    const botRow = document.createElement("div");
    botRow.className = "bot-msg-row";

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

    // Smoothly focus the newly opened question and its response card
    focusNewContent(userRow, { offset: 70 });
    setTimeout(() => focusNewContent(userRow, { offset: 70 }), 160);

    // If card has images, re-adjust focus once loaded
    const img = botRow.querySelector("img");
    if (img) {
      img.onload = () => focusNewContent(userRow, { offset: 70 });
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

    const matchedTopic = matchQueryTopic(query);
    if (matchedTopic) {
      handleSelectTopic(matchedTopic, query);
    } else {
      // General custom question
      showChatView();

      const userRow = document.createElement("div");
      userRow.className = "user-msg-row";
      userRow.innerHTML = `<div class="user-msg-bubble">${query}</div>`;
      chatStream.appendChild(userRow);
      focusNewContent(userRow, { offset: 70 });

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
      focusNewContent(userRow, { offset: 70 });

      setTimeout(() => {
        const activeTyping = document.getElementById("active-typing");
        if (activeTyping) activeTyping.remove();

        const botRow = document.createElement("div");
        botRow.className = "bot-msg-row";
        botRow.innerHTML = getGenericAnswer(query);
        chatStream.appendChild(botRow);
        
        focusNewContent(userRow, { offset: 70 });
        setTimeout(() => focusNewContent(userRow, { offset: 70 }), 160);
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
