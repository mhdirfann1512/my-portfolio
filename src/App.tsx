import ProjectCard from "./components/ProjectCard";
import { projects, type Project } from "./data/projects";

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Helper for alternating styles
  const getSectionStyle = (index: number) => ({
    minHeight: '100vh',           // Full screen on desktop
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',    // Centers content vertically
    padding: '80px 20px',        // Extra space for the sticky nav
    backgroundColor: index % 2 === 0 ? '#ffffff' : '#f8fafc', // Selang-seli colors
    boxSizing: 'border-box' as const,
  });

  return (
    <div style={{ 
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      color: '#2d3436',
      scrollPaddingTop: '70px' 
    }}>
      
      {/* --- STICKY NAVBAR --- */}
      <nav style={{
        position: 'fixed', // Changed to fixed to stay on top of the "slides"
        top: 0, width: '100%', zIndex: 1000,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #e2e8f0',
        padding: '15px 0'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', padding: '0 20px' }}>
          <b style={{ color: '#0984e3', cursor: 'pointer' }} onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>Dev.Portfolio</b>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['Education', 'Work', 'Experience', 'Certs'].map(item => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))} style={{ background: 'none', border: 'none', fontWeight: 600, color: '#636e72', cursor: 'pointer' }}>{item}</button>
            ))}
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION (White) */}
      <header style={getSectionStyle(0)}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center', width: '100%' }}>
          <div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', fontWeight: 800, marginBottom: '10px', letterSpacing: '-2px' }}>Portfolio</h1>
            <p style={{ fontSize: '1.2rem', color: '#636e72', marginBottom: '30px', lineHeight: 1.6 }}>Computer Science Graduate specializing in **Netcentric Computing**. Building robust Web and Mobile solutions.</p>
            <a href="/your-resume.pdf" target="_blank" style={{ padding: '16px 32px', background: '#0984e3', color: '#fff', textDecoration: 'none', borderRadius: '50px', fontWeight: 700, boxShadow: '0 6px 20px rgba(9, 132, 227, 0.3)' }}>📄 Download Resume</a>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{ width: 'clamp(200px, 40vw, 300px)', height: 'clamp(200px, 40vw, 300px)', borderRadius: '50%', border: '12px solid #fff', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <img src="/profile-image.jpg" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </header>

      {/* 2. EDUCATION (Grayish) */}
      <section id="education" style={getSectionStyle(1)}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
          <h2 style={{ borderLeft: '5px solid #0984e3', paddingLeft: '15px', marginBottom: '40px' }}>Education</h2>
          <div style={{ background: '#fff', padding: '40px', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
            <h3>Bachelor of CS (Hons.) Netcentric Computing</h3>
            <p style={{ color: '#0984e3', fontWeight: 600 }}>Universiti Teknologi MARA (UiTM) | 2022 - 2025</p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '20px' }}>
              {['Distributed Systems', 'Cloud Computing', 'Network Security'].map(s => <span key={s} style={{ background: '#f1f5f9', padding: '6px 12px', borderRadius: '6px', fontSize: '0.8rem' }}>{s}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROJECTS (White) */}
      <section id="work" style={getSectionStyle(2)}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
          <h2 style={{ borderLeft: '5px solid #0984e3', paddingLeft: '15px', marginBottom: '40px' }}>Featured Work</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {projects.map((item: Project) => (
              <ProjectCard key={item.id} project={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. EXPERIENCE (Grayish) */}
      <section id="experience" style={getSectionStyle(3)}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
          <h2 style={{ borderLeft: '5px solid #0984e3', paddingLeft: '15px', marginBottom: '40px' }}>Experience & Leadership</h2>
          <div style={{ background: '#fff', padding: '40px', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
             <h4 style={{ margin: 0 }}>IT Support Intern | JPKN Sabah</h4>
             <p style={{ color: '#636e72' }}>2025 • Troubleshooting and system maintenance.</p>
             <hr style={{ margin: '20px 0', border: 'none', borderTop: '1px solid #f1f5f9' }} />
             <h4 style={{ margin: 0 }}>Treasurer | NETCOM Club</h4>
             <p style={{ color: '#636e72' }}>2024 - 2025 • Directed cybersecurity awareness program.</p>
          </div>
        </div>
      </section>

      {/* 5. CERTIFICATIONS (White) */}
      <section id="certs" style={getSectionStyle(4)}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
          <h2 style={{ borderLeft: '5px solid #0984e3', paddingLeft: '15px', marginBottom: '40px' }}>Certifications</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {['AWS Cloud', 'Google Cloud', 'Cisco IoT Security'].map(c => (
              <div key={c} style={{ padding: '30px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '15px', textAlign: 'center', fontWeight: 600 }}>{c}</div>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ textAlign: 'center', padding: '40px 0', backgroundColor: '#f8fafc', color: '#94a3b8' }}>
        <p>© {new Date().getFullYear()} • Built with React & TypeScript</p>
      </footer>
    </div>
  );
}

export default App;