// Projects Data - Can be easily modified
const projects = [
  {
    title: "Student-Leave-Management-System",
    description: "This project can be used by college hostel wardens or academic admins to manage leave applications submitted by students.It helps track, approve/reject, and log leave records digitally.",
    image: "img.png",
    links: {
      code: "https://github.com/aditya-bytecraft/Student-Leave-Management-System"
    }
  },
  {
    title: "FocusPal",
    description: "FocusPal is a sleek, browser-based productivity tool designed to help students and professionals stay focused. It features a customizable study timer (15, 30, 45, 60 minutes), a live Indian time clock, and a built-in notes tracker—all in a beautifully animated interface. Created by Aditya Mishra, FocusPal blends functionality with aesthetics for an effective study experience.",
    image: "pho.png",
    links: {
      live: "https://aditya-bytecraft.github.io/FocusPal/",
      code: "https://github.com/aditya-bytecraft/FocusPal"
    }
  },
  {
    title: "Hostel Latecomer System",
    description: "A Python-based automation system to track and manage hostel latecomers using a three-strike rule. This project demonstrates automation, database management, and secure email handling.",
    image: "hos.png",
    links: {
      
      code: "https://github.com/aditya-bytecraft/HostelLatecomerSystem"
    }
  }
];

// DOM Elements
const projectsGrid = document.querySelector('.projects-grid');
const currentYear = document.getElementById('year');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Set current year
  currentYear.textContent = new Date().getFullYear();
  
  // Load projects
  renderProjects();
  
  // Initialize scroll events
  setupScrollEvents();
});

// Render Projects
function renderProjects() {
  projectsGrid.innerHTML = projects.map(project => `
    <div class="project-card">
      <div class="project-img" style="background-image: url('${project.image}')"></div>
      <div class="project-info">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-links">
          <a href="${project.links.live}" class="project-link">
            <i class="fas fa-external-link-alt"></i> Live Demo
          </a>
          <a href="${project.links.code}" class="project-link">
            <i class="fab fa-github"></i> Code
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

// Scroll Events
function setupScrollEvents() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Header scroll effect
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.style.boxShadow = window.scrollY > 10 ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none';
  });
  
  // Intersection Observer for animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
  });
}
// Ensure mailto links work even if default handler fails
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
  link.addEventListener('click', function(e) {
    // Try standard mailto first
    const mailto = this.getAttribute('href');
    window.location.href = mailto;
    
    // Fallback after delay if nothing happens
    setTimeout(() => {
      if (!document.hidden) {
        // If still on page, open Gmail web interface directly
        const email = mailto.replace('mailto:', '').split('?')[0];
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent('Portfolio Inquiry')}&body=${encodeURIComponent('Hello Aditya,\n\nI saw your portfolio...')}`, '_blank');
      }
    }, 500);
    
    e.preventDefault();
  });
});