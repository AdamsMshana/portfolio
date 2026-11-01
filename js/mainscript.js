// ========== Theme toggle (light default, dark optional) ==========
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

function applyTheme(theme) {
  if (theme === 'dark') {
    root.setAttribute('data-theme', 'dark');
    themeToggle.setAttribute('aria-label', 'Switch to light mode');
    themeToggle.setAttribute('title', 'Switch to light mode');
  } else {
    root.removeAttribute('data-theme');
    themeToggle.setAttribute('aria-label', 'Switch to dark mode');
    themeToggle.setAttribute('title', 'Switch to dark mode');
  }
}

// Initial state — read what the inline head script set
applyTheme(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');

themeToggle.addEventListener('click', () => {
  const isDark = root.getAttribute('data-theme') === 'dark';
  const next = isDark ? 'light' : 'dark';
  applyTheme(next);
  try { localStorage.setItem('theme', next); } catch (e) {}
});

// ========== Data ==========
const projects = [
  {
    id: 1,
    title: 'Network Monitoring',
    category: 'networking',
    description: 'Real-time network monitoring and alerting system for a mid-sized enterprise.',
    problem: 'Lack of visibility into network performance and frequent outages without warning.',
    solution: 'Deployed a central dashboard using Python.',
    results: 'Reduced mean time to detect (MTTD) by 60% and improved network uptime to 99.9%.',
    technologies: ['Python', 'Wireshark', 'NMAP',],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600',
    // github: 'https://github.com/adams/netmon',
  },
  {
    id: 2,
    title: 'IT staff Support',
    category: 'systems',
    description: 'keeping business technology running by solving hardware, software, and network issues..',
    problem: 'Troubleshooting & Repairs: Fix computer errors, software bugs, printer issues, and hardware failures',
    solution: 'Reset passwords, manage user logins, and Install new workstations. apply security patches, back up data, and manage software updates.',
    results: 'Cut user onboarding time from hours to minutes; eliminated manual errors.',
    technologies: ['PowerShell', 'CMD', 'HBCD'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600',
    // github: 'https://github.com/adamsmshana/ad-automation',
  },
  {
    id: 3,
    title: 'Cloud Migration Strategy',
    category: 'cloud',
    description: 'Migrated on-premises infrastructure to AWS for a SaaS startup.',
    problem: 'High infrastructure costs and scaling issues with on-prem servers.',
    solution: 'Designed and executed lift-and-shift migration of 30+ servers to AWS using Terraform and AWS MGN.',
    results: 'Reduced infrastructure costs by 40% and enabled auto-scaling.',
    technologies: ['AWS', 'Terraform', 'Docker', 'Linux'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600',
    github: 'https://github.com/alexcarter/cloud-migration',
    liveDemo: 'https://migration-case-study.example.com',
  },
  {
    id: 4,
    title: 'Homelab Automation Suite',
    category: 'automation',
    description: 'Personal homelab for self-hosting services and learning new technologies.',
    problem: 'Repetitive setup of services and VMs in homelab environment.',
    solution: 'Utilized Ansible and Docker Compose to automate deployment of 20+ services.',
    results: 'One-command setup of entire homelab, enabling rapid experimentation.',
    technologies: ['Ansible', 'Docker', 'Proxmox', 'Linux'],
    image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600',
    github: 'https://github.com/alexcarter/homelab-automation',
  },
  {
    id: 5,
    title: 'Personal Portfolio Website',
    category: 'web',
    description: 'This very website — a modern, responsive IT portfolio built with HTML, CSS and vanilla JavaScript.',
    problem: 'Needed a professional online presence to showcase skills and attract opportunities.',
    solution: 'Developed a fast, accessible, and visually appealing portfolio using HTML, CSS, and JavaScript.',
    results: 'Increased inbound recruiter messages and provided a central hub for professional branding.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600',
    github: 'https://github.com/alexcarter/portfolio',
    liveDemo: '#',
  },
  {
    id: 6,
    title: 'VPN & Firewall Hardening',
    category: 'networking',
    description: 'Configured and hardened VPN and firewall infrastructure for remote workforce.',
    problem: 'Security gaps in remote access due to weak VPN configuration.',
    solution: 'Implemented WireGuard VPN with multi-factor authentication and strict firewall policies using pfSense.',
    results: 'Achieved a 100% security audit pass and enabled secure remote work.',
    technologies: ['WireGuard', 'pfSense', 'Networking', 'Security'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600',
    github: '',
  },
];

const experiences = [
  {
    title: 'IT Technician / Computer Science Teacher',
    company: 'St. Gaspare Bertoni School',
    location: 'Morogoro',
    date: '2026 - Present',
    responsibilities: [
      'Design, develop and manage school website and systems.',
      'Design and develop day-to-day automations and simple systems for repetitive tasks.',
      'Teach Computer Science.',
    ],
    achievements: [
      'Reduced infrastructure costs by 15% through optimization, automations and right-sizing.',
      'Initiated Cyber Security club, aimed at teaching ethical hacking.',
    ],
    technologies: ['Wireshark', 'Zenmap', 'Nmap', 'blackeye', 'Linux & Linux distros'],
  },
  {
    title: 'Computer Science Teacher / IT Tech Support',
    company: 'Feza Schools Zanzibar',
    location: 'Kisauni, Unguja Urban West, Zanzibar',
    date: '2025 - 2026',
    responsibilities: [
      'Taught Computer Science at O-level.',
      'Lead IT club.',
      'Provided Tier 1 tech support to staff.',
      'Assisted with hardware repair/maintenance, procurement and inventory.',
    ],
    achievements: [
      'Successfully deployed a health system called BMI in our club.',
      'Saved direct and indirect repairing and purchasing cost of IoT.',
    ],
    technologies: ['JS', 'CSS', 'Python', 'MIT App Inventor'],
  },
  {
    title: 'IT / Tech Support and STEM Coordinator',
    company: 'Leera Schools',
    location: 'Mbweni, Urban West, Zanzibar',
    date: '2023 - 2025',
    responsibilities: [
      'Taught STEM to primary students.',
      'Lead STEM and Robotics in school.',
      'Provided end-user support for Windows.',
    ],
    achievements: [
      'Successfully introduced STEM in school, leading to high enrollment of new students.',
      'Successfully introduced and ran Coding club.',
      'Successfully created an Android app for notes in primary.',
      'Received Employee of the Quarter, later Employee of the Year for outstanding service.',
    ],
    technologies: ['Windows', 'Scratch', 'Linux'],
  },
];

const certifications = [
  { name: 'Diploma in Cybersecurity and Ethical Hacking', issuer: 'Google,coursera,Alison', date: '2025', credentialId: 'Google cybersecurity professional certificate' },
  { name: 'Cisco Certified Network Associate (CCNA)', issuer: 'Cisco', date: '2021', credentialId: 'CSCO-987654' },
  { name: 'Diploma in IT Technician', issuer: 'CPD/Alison', date: '2024', credentialId: 'AC-5993-35418733' },
  { name: 'AI and prompt Engineering', issuer: 'CPD/Alison', date: '2021',},
  { name: 'Diploma in Python Programing language', issuer: 'Coursera', date: '2022', credentialId: 'MS-556677' },
  { name: 'BA in Education', issuer: 'St.Augustine university of Tanzania', date: '2019', credentialId: 'SAMB-BAED52563' },
];

const services = [
  { icon: '', title: 'IT/Tech Support', description: 'Comprehensive technical support for users and infrastructure, from helpdesk to advanced troubleshooting.' },
  { icon: '', title: 'Network Configuration', description: 'Design, implement, and optimize secure and reliable network architectures for businesses of any size.' },
  { icon: '', title: 'System Administration', description: 'Manage and maintain servers, workstations, and services.' },
  // { icon: '☁️', title: 'Cloud Setup & Migration', description: 'Plan and execute migrations to AWS, Azure, or hybrid cloud with minimal downtime.' },
  { icon: '', title: 'Website Development', description: 'Build modern, fast, and responsive websites tailored to your needs.' },
  { icon: '', title: 'Cybersecurity Support', description: 'Harden your infrastructure, implement security best practices, and respond to incidents.' },
  { icon: '', title: 'Automation & Scripting', description: 'Automate repetitive tasks and workflows using Python, PowerShell, Bash, and AI.' },
  { icon: '', title: 'IT Consulting', description: 'Strategic advice on technology roadmaps, infrastructure planning, and cost optimization.' },
];

// ----- Gallery data -----
const galleryItems = [
  {
    id: 1,
    title: 'Cyber Security Training',
    category: 'places',
    location: 'Zanzibar',
    description: 'Led an on-site cyber security awareness and hands-on training session.',
    image: 'img/insp5.jpg',
  },
  {
    id: 2,
    title: 'Train the Trainer Workshop',
    category: 'training',
    location: 'Feza International, DSM',
    description: 'Ran a 10-day hands-on workshop training for contemporary teachers.',
    image: 'img/trainer.jpeg',
  },
  {
    id: 3,
    title: 'Cyber Security Training',
    category: 'training',
    location: 'Feza International, Salasala',
    description: 'How to identify threats and maintain data privacy.',
    image: 'img/training.jpeg',
  },
  {
    id: 4,
    title: 'AI Training ',
    category: 'places',
    location: 'Remote / AWS',
    description: 'How to use and utilize Artificial Intelligence for work.',
    image: 'img/LRSMNR.jpg',
  },
  {
    id: 5,
    title: 'Cybersecurity Awareness Session',
    category: 'training',
    location: 'Feza Boys',
    description: 'Security training delivered to 40+ non-technical staff on phishing and MFA.',
    image: 'img/trainerr.jpg',
  },
  // {
  //   id: 6,
  //   title: 'Helpdesk & Support Pod',
  //   category: 'people',
  //   location: 'tech',
  //   description: ' resolution time by 25% in one quarter.',
  //   image: ' ',
  // },
  {
    id: 7,
    title: 'Coding Lesson',
    category: 'places',
    location: 'Zanzibar',
    description: 'Data types in Cpp.',
    image: 'img/CPP.jpg',
  },
  {
    id: 8,
    title: 'STEM & Robotics',
    category: 'training',
    location: 'Leera School,Zanzibar',
    description: 'Introduction to STEM and Robotics.',
    image: 'img/stem.jpg',
  },
  {
    id: 9,
    title: 'IT Club',
    category: 'people',
    location: 'AWS re:Invent',
    description: 'Build up our very fist own AI app and intergrate with Google API.',
    image: 'img/znz6.jpg',
  },
];

// ========== DOM Elements ==========
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const terminalOutput = document.getElementById('terminal-output');
const projectsGrid = document.getElementById('projects-grid');
const experienceTimeline = document.getElementById('experience-timeline');
const galleryGrid = document.getElementById('gallery-grid');
const galleryFilterButtons = document.querySelectorAll('#gallery-filters .filter-btn');
const galleryLightbox = document.getElementById('gallery-lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDesc = document.getElementById('lightbox-desc');
const closeLightbox = document.getElementById('close-lightbox');
const certificationsGrid = document.getElementById('certifications-grid');
const servicesGrid = document.getElementById('services-grid');
const modal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.getElementById('close-modal');

// ========== Terminal animation ==========
const terminalLines = [
  '$ whoami',
  'mshana.elitwaza',
  '$ uptime',
  'System running continuously for 342 days',
  '$ uname -a',
  'Linux host 5.15.0-91-generic x86_64',
  '$ nmap -sV 192.168.1.0/24',
  'Host is up — scanning ports...',
  '22/tcp   open  ssh',
  '80/tcp   open  http',
  '443/tcp  open  https',
  '$ ping -c 3 google.com',
  '64 bytes from 142.250.72.14: icmp_seq=1 ttl=115 time=12.3 ms',
  '64 bytes from 142.250.72.14: icmp_seq=2 ttl=115 time=11.8 ms',
  '64 bytes from 142.250.72.14: icmp_seq=3 ttl=115 time=12.1 ms',
  '$ _',
];

function typeTerminal() {
  let lineIndex = 0;
  let charIndex = 0;
  let currentText = '';
  const output = document.createElement('span');

  function typeNext() {
    if (lineIndex >= terminalLines.length) return;
    const line = terminalLines[lineIndex];
    if (charIndex < line.length) {
      currentText += line.charAt(charIndex);
      output.textContent = currentText;
      charIndex++;
      setTimeout(typeNext, 15 + Math.random() * 30);
    } else {
      currentText += '\n';
      output.textContent = currentText;
      lineIndex++;
      charIndex = 0;
      setTimeout(typeNext, 200);
    }
  }

  terminalOutput.appendChild(output);
  typeNext();
}

if (terminalOutput) typeTerminal();

// ========== Navbar scroll effect ==========
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

// ========== Mobile menu toggle ==========
function setMenu(open) {
  navLinks.classList.toggle('active', open);
  menuToggle.classList.toggle('active', open);
  menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
}

navbar.addEventListener('click', (e) => {
  const btn = e.target.closest('#menu-toggle');
  if (!btn) return;
  e.preventDefault();
  e.stopPropagation();
  setMenu(!navLinks.classList.contains('active'));
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('click', (e) => {
  if (!navLinks.classList.contains('active')) return;
  if (navLinks.contains(e.target)) return;
  if (menuToggle.contains(e.target)) return;
  if (themeToggle && themeToggle.contains(e.target)) return;
  setMenu(false);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') setMenu(false);
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 900) setMenu(false);
});

// ========== Reveal animations ==========
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section, .section-heading, .about-grid > *, .skills-grid > *, .project-card, .timeline-item, .gallery-item, .cert-card, .service-card, .contact-grid > *').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// ========== Animated counters ==========
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.getAttribute('data-target'));
      const duration = 2000;
      const step = Math.ceil(target / (duration / 16));
      let current = 0;
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          entry.target.textContent = target;
          clearInterval(timer);
        } else {
          entry.target.textContent = current;
        }
      }, 16);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(el => counterObserver.observe(el));

// ========== Render Projects ==========
function renderProjects() {
  projectsGrid.innerHTML = projects.map(project => `
    <div class="project-card" data-id="${project.id}">
      <img src="${project.image}" alt="${project.title}" loading="lazy" />
      <div class="project-card-body">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tech">
          ${project.technologies.slice(0, 4).map(tech => `<span>${tech}</span>`).join('')}
        </div>
        <div class="project-links">
          ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener">GitHub</a>` : ''}
          ${project.liveDemo ? `<a href="${project.liveDemo}" target="_blank" rel="noopener">Live Demo</a>` : ''}
          <a href="#" class="view-details" data-id="${project.id}">Details →</a>
        </div>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') return;
      const id = parseInt(card.getAttribute('data-id'));
      openProjectModal(id);
    });
  });
  document.querySelectorAll('.view-details').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const id = parseInt(link.getAttribute('data-id'));
      openProjectModal(id);
    });
  });

  // Register reveal for newly-added cards
  projectsGrid.querySelectorAll('.project-card').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

function openProjectModal(id) {
  const project = projects.find(p => p.id === id);
  if (!project) return;
  modalBody.innerHTML = `
    <h2>${project.title}</h2>
    <img src="${project.image}" alt="${project.title}" style="width:100%; border-radius:8px; margin:20px 0;" />
    <p><strong>Overview:</strong> ${project.description}</p>
    <p><strong>Challenge:</strong> ${project.problem}</p>
    <p><strong>Solution:</strong> ${project.solution}</p>
    <p><strong>Results:</strong> ${project.results}</p>
    <p><strong>Technologies:</strong> ${project.technologies.join(', ')}</p>
    ${project.github ? `<p><a href="${project.github}" target="_blank" rel="noopener">GitHub Repository</a></p>` : ''}
    ${project.liveDemo ? `<p><a href="${project.liveDemo}" target="_blank" rel="noopener">Live Demo</a></p>` : ''}
  `;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

closeModal.addEventListener('click', closeProjectModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeProjectModal();
});

renderProjects();

// ========== Render Experience ==========
experienceTimeline.innerHTML = experiences.map((exp) => `
  <div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
      <h3>${exp.title}</h3>
      <div class="company">${exp.company}</div>
      <div class="date">${exp.location} | ${exp.date}</div>
      <ul>
        ${exp.responsibilities.map(r => `<li>${r}</li>`).join('')}
      </ul>
      ${exp.achievements.length > 0 ? `
        <h4 style="margin-top:15px; color:var(--text);">Key Achievements</h4>
        <ul class="achievements">
          ${exp.achievements.map(a => `<li>${a}</li>`).join('')}
        </ul>
      ` : ''}
      <div class="project-tech" style="margin-top:15px;">
        ${exp.technologies.filter(Boolean).map(t => `<span>${t}</span>`).join('')}
      </div>
    </div>
  </div>
`).join('');

// ========== Render Gallery ==========
const galleryTagLabels = { places: 'Place', people: 'People', training: 'Training' };

function renderGallery(filter = 'all') {
  const items = filter === 'all' ? galleryItems : galleryItems.filter(g => g.category === filter);
  galleryGrid.innerHTML = items.map(item => `
    <figure class="gallery-item" data-id="${item.id}" tabindex="0" role="button" aria-label="View ${item.title}">
      <img src="${item.image}" alt="${item.title}" loading="lazy" />
      <figcaption class="gallery-overlay">
        <span class="gallery-tag">${galleryTagLabels[item.category] || item.category}</span>
        <h3>${item.title}</h3>
        <p>${item.location}</p>
      </figcaption>
    </figure>
  `).join('');

  galleryGrid.querySelectorAll('.gallery-item').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });

  galleryGrid.querySelectorAll('.gallery-item').forEach(el => {
    const open = () => openLightbox(parseInt(el.getAttribute('data-id')));
    el.addEventListener('click', open);
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
  });
}

function openLightbox(id) {
  const item = galleryItems.find(g => g.id === id);
  if (!item) return;
  lightboxImg.src = item.image;
  lightboxImg.alt = item.title;
  lightboxTitle.textContent = item.title;
  lightboxDesc.textContent = `${item.location} — ${item.description}`;
  galleryLightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeGalleryLightbox() {
  galleryLightbox.classList.remove('open');
  document.body.style.overflow = '';
}

closeLightbox.addEventListener('click', closeGalleryLightbox);
galleryLightbox.addEventListener('click', (e) => {
  if (e.target === galleryLightbox) closeGalleryLightbox();
});

galleryFilterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    galleryFilterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderGallery(btn.getAttribute('data-filter'));
  });
});

renderGallery();

// ========== Render Certifications ==========
certificationsGrid.innerHTML = certifications.map(cert => `
  <div class="cert-card">
    <h3>${cert.name}</h3>
    <p>${cert.issuer}</p>
    <p>${cert.date}</p>
    ${cert.credentialId ? `<p style="font-size:0.8rem;">ID: ${cert.credentialId}</p>` : ''}
  </div>
`).join('');

// ========== Render Services ==========
servicesGrid.innerHTML = services.map(service => `
  <div class="service-card">
    <h3>${service.icon} ${service.title}</h3>
    <p>${service.description}</p>
  </div>
`).join('');

// ========== Smooth scrolling for anchor links ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});