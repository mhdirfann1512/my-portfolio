import ProjectCard from "./components/ProjectCard";
import { projects, type Project } from "./data/projects";

function App() {
  // Configuration: Update your manual stats here
  const GITHUB_USERNAME = "mhdirfann1512";
  const STATS = {
    projects: projects.length, // Automatically stays in sync with your data
    commits: "100+",           // Manual update
    certs: "1"               // Manual update
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getSectionStyle = (index: number) => {
    const isDark = index % 2 !== 0;
    return {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column' as const,
      justifyContent: 'flex-start',
      paddingTop: '140px',
      paddingBottom: '80px',
      paddingLeft: '20px',
      paddingRight: '20px',
      backgroundColor: isDark ? '#1e293b' : '#ffffff',
      color: isDark ? '#f8fafc' : '#2d3436',
      transition: 'all 0.3s ease',
      boxSizing: 'border-box' as const,
    };
  };

  const matrixBoxStyle = {
    background: 'rgba(255,255,255,0.05)',
    padding: '30px',
    borderRadius: '20px',
    border: '1px solid rgba(255,255,255,0.1)',
    backdropFilter: 'blur(5px)'
  };

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', scrollPaddingTop: '70px' }}>
      
      {/* NAVBAR */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000, backgroundColor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #e2e8f0', padding: '15px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', padding: '0 20px' }}>
          <b style={{ color: '#0984e3', cursor: 'pointer' }} onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>Dev.Portfolio</b>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['Skills', 'Education', 'Work', 'Experience'].map(item => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase())} style={{ background: 'none', border: 'none', fontWeight: 600, color: '#475569', cursor: 'pointer', fontSize: '0.85rem' }}>{item}</button>
            ))}
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <header style={getSectionStyle(0)}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'flex-start', width: '100%' }}>
          <div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: 800, marginBottom: '15px', letterSpacing: '-2px' }}>Portfolio</h1>
            <p style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '30px', lineHeight: 1.6 }}>
              Hi, I’m a **Computer Science Graduate** specializing in **Netcentric Computing**. 
              I build robust, performance-focused Web and Mobile applications.
            </p>
            
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '30px' }}>
              <a href="/your-resume.pdf" target="_blank" style={{ padding: '14px 28px', background: '#0984e3', color: '#fff', textDecoration: 'none', borderRadius: '50px', fontWeight: 700, boxShadow: '0 10px 25px rgba(9, 132, 227, 0.3)' }}>📄 Download Resume</a>
            </div>

            {/* Social Links & Stats Stack */}
            <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '25px' }}>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '25px' }}>
                <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" style={{ textDecoration: 'none', color: '#1e293b', fontWeight: 600 }}>GitHub ↗</a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" style={{ textDecoration: 'none', color: '#0077b5', fontWeight: 600 }}>LinkedIn ↗</a>
              </div>

              {/* Impact Stats Inline */}
              <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0984e3' }}>{STATS.projects}</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Projects</div>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0984e3' }}>{STATS.commits}</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Commits</div>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0984e3' }}>{STATS.certs}</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Certs</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: 'clamp(250px, 40vw, 320px)', height: 'clamp(250px, 40vw, 320px)', borderRadius: '50%', border: '15px solid #f1f5f9', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}>
              <img src="/profile-image.jpg" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </header>

      {/* 2. SKILLS MATRIX */}
      <section id="skills" style={getSectionStyle(1)}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
          <h2 style={{ borderLeft: '6px solid #38bdf8', paddingLeft: '20px', marginBottom: '50px', fontSize: '2.2rem' }}>Technical Arsenal</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
            <div style={matrixBoxStyle}>
              <h4 style={{ color: '#38bdf8', marginBottom: '15px', fontSize: '1.2rem' }}>Frontend & Mobile</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.8 }}>React, TypeScript, Flutter, Kotlin, Jetpack Compose, HTML5/CSS3</p>
            </div>
            <div style={matrixBoxStyle}>
              <h4 style={{ color: '#38bdf8', marginBottom: '15px', fontSize: '1.2rem' }}>Backend & Logic</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.8 }}>Node.js, Laravel, Spring Boot (Java), PHP, Express.js</p>
            </div>
            <div style={matrixBoxStyle}>
              <h4 style={{ color: '#38bdf8', marginBottom: '15px', fontSize: '1.2rem' }}>Cloud & Database</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.8 }}>PostgreSQL, MySQL, Firebase, AWS Cloud, Google Cloud, Cisco Networking</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EDUCATION */}
      <section id="education" style={getSectionStyle(2)}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
          <h2 style={{ borderLeft: '6px solid #0984e3', paddingLeft: '20px', marginBottom: '40px', fontSize: '2.2rem' }}>Education</h2>
          <div style={{ background: '#f8fafc', padding: '40px', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '1.6rem', margin: 0 }}>Bachelor of CS (Hons.) Netcentric Computing</h3>
            <p style={{ color: '#0984e3', fontWeight: 600, marginTop: '10px' }}>Universiti Teknologi MARA (UiTM) | 2022 - 2025</p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '25px' }}>
              {['Distributed Systems', 'Cloud Computing', 'Network Security', 'Web Engineering'].map(s => (
                <span key={s} style={{ background: '#fff', color: '#475569', padding: '6px 12px', borderRadius: '6px', fontSize: '0.8rem', border: '1px solid #e2e8f0' }}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROJECTS */}
      <section id="work" style={getSectionStyle(3)}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
          <h2 style={{ borderLeft: '6px solid #38bdf8', paddingLeft: '20px', marginBottom: '40px', fontSize: '2.2rem' }}>Featured Work</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '30px' }}>
            {projects.map((item: Project) => (
              <ProjectCard key={item.id} project={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. EXPERIENCE */}
      <section id="experience" style={getSectionStyle(4)}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
          <h2 style={{ borderLeft: '6px solid #0984e3', paddingLeft: '20px', marginBottom: '40px', fontSize: '2.2rem' }}>Experience & Leadership</h2>
          <div style={{ background: '#f8fafc', padding: '40px', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
             <h4 style={{ fontSize: '1.3rem', margin: 0 }}>IT Support Intern | JPKN Sabah</h4>
             <p style={{ color: '#64748b', marginTop: '5px' }}>2025 • Executed technical troubleshooting and system maintenance within government infrastructure.</p>
             <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px solid #e2e8f0' }} />
             <h4 style={{ fontSize: '1.3rem', margin: 0 }}>Treasurer | NETCOM Club</h4>
             <p style={{ color: '#64748b', marginTop: '5px' }}>2024 - 2025 • Managed finances and directed cybersecurity awareness programs.</p>
          </div>
        </div>
      </section>

      <footer style={{ textAlign: 'center', padding: '60px 0', backgroundColor: '#0f172a', color: '#64748b' }}>
        <p>© {new Date().getFullYear()} • Built with React & TypeScript</p>
      </footer>
    </div>
  );
}

export default App;