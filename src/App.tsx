import ProjectCard from "./components/ProjectCard";
import { projects, type Project } from "./data/projects";

function App() {
  // Smooth scroll function for the navbar
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ 
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      backgroundColor: '#f5f7fa',
      minHeight: '100vh',
      color: '#2d3436',
      scrollPaddingTop: '100px' // Ensures sections don't hide under the navbar
    }}>
      
      {/* --- STICKY NAVBAR --- */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #e2e8f0',
        padding: '15px 20px'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          <b 
            style={{ color: '#0984e3', fontSize: '1.2rem', cursor: 'pointer', letterSpacing: '-1px' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Dev.Portfolio
          </b>
          <div style={{ display: 'flex', gap: '25px' }}>
            {['Education', 'Work', 'Experience', 'Certs'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: '#636e72', 
                  fontWeight: 600, 
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  transition: 'color 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#0984e3'}
                onMouseOut={(e) => e.currentTarget.style.color = '#636e72'}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <header style={{ 
        maxWidth: '1200px', 
        margin: '60px auto 100px auto', 
        padding: '20px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '60px',
        alignItems: 'center',
        textAlign: 'left'
      }}>
        <div style={{ order: 1 }}>
          <h1 style={{ fontSize: '3.8rem', fontWeight: 800, marginBottom: '10px', letterSpacing: '-2px', color: '#1a1a1a', lineHeight: 1.1 }}>
            Portfolio
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#636e72', maxWidth: '600px', lineHeight: 1.65, marginBottom: '35px' }}>
            Hi, I’m a Computer Science Graduate specializing in **Netcentric Computing**. 
            I build robust, performance-focused Web and Mobile solutions.
          </p>
          <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '20px' }}>
            <a 
              href="/your-resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                padding: '16px 36px', background: '#0984e3', color: '#fff', 
                textDecoration: 'none', borderRadius: '50px', fontWeight: 700,
                fontSize: '1rem', boxShadow: '0 6px 20px rgba(9, 132, 227, 0.35)',
                display: 'inline-flex', alignItems: 'center', gap: '8px'
              }}
            >
              <span>📄</span> Download Resume
            </a>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', order: 2, position: 'relative' }}>
          <div style={{ 
            width: '280px', height: '280px', borderRadius: '50%', 
            border: '15px solid #fff', overflow: 'hidden', 
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)', backgroundColor: '#fff'
          }}>
            <img src="/profile-image.jpg" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ 
            position: 'absolute', bottom: '20px', right: '-10px', background: '#fff',
            border: '2px solid #0984e3', padding: '10px 20px', borderRadius: '12px',
            boxShadow: '0 8px 15px rgba(0,0,0,0.1)', fontWeight: 700, color: '#0984e3',
            transform: 'rotate(5deg)', whiteSpace: 'nowrap'
          }}>
            🚀 Netcentric & Mobile Dev
          </div>
        </div>
      </header>

      {/* 2. SKILLS */}
      <section style={{ maxWidth: '1000px', margin: '0 auto 80px auto', textAlign: 'center', padding: '0 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
          {['React', 'TypeScript', 'Node.js', 'Flutter', 'Kotlin', 'Laravel', 'PostgreSQL'].map(skill => (
            <span key={skill} style={{ padding: '8px 20px', background: '#fff', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 600, boxShadow: '0 2px 4px rgba(0,0,0,0.04)', border: '1px solid #e2e8f0' }}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* 3. EDUCATION */}
      <section id="education" style={{ maxWidth: '1000px', margin: '0 auto 80px auto', padding: '0 20px' }}>
        <h2 style={{ borderLeft: '5px solid #0984e3', paddingLeft: '15px', marginBottom: '30px' }}>Education</h2>
        <div style={{ background: '#fff', padding: '35px', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', border: '1px solid #edf2f7' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
            <div>
              <h3 style={{ margin: 0 }}>Bachelor of Computer Science (Hons.) Netcentric Computing</h3>
              <p style={{ margin: '5px 0', fontWeight: '600', color: '#0984e3' }}>Universiti Teknologi MARA (UiTM)</p>
            </div>
            <span style={{ background: '#ebf8ff', color: '#2b6cb0', padding: '6px 14px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold' }}>2022 - 2025</span>
          </div>
          <div style={{ marginTop: '25px' }}>
            <p style={{ margin: '0 0 12px 0', fontSize: '0.9rem', color: '#4a5568', fontWeight: 'bold', textTransform: 'uppercase' }}>Core Focus Areas</p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {['Distributed Systems', 'Mobile App Development', 'Web Engineering', 'Network Security', 'Cloud Computing'].map((subject) => (
                <span key={subject} style={{ fontSize: '0.8rem', color: '#718096', background: '#f7fafc', padding: '5px 12px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>{subject}</span>
              ))}
            </div>
          </div>
          <hr style={{ margin: '30px 0', border: '0', borderTop: '1px solid #edf2f7' }} />
          <div>
            <h4 style={{ margin: 0 }}>Foundation in Engineering</h4>
            <p style={{ margin: '5px 0', color: '#718096', fontSize: '0.95rem' }}>2021 - 2022</p>
          </div>
        </div>
      </section>

      {/* 4. PROJECTS GRID */}
      <section id="work" style={{ maxWidth: '1000px', margin: '0 auto 80px auto', padding: '0 20px' }}>
        <h2 style={{ color: '#2d3436', marginBottom: '30px', borderLeft: '5px solid #0984e3', paddingLeft: '15px' }}>Featured Work</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {projects.map((item: Project) => (
            <ProjectCard key={item.id} project={item} />
          ))}
        </div>
      </section>

      {/* 5. EXPERIENCE & LEADERSHIP */}
      <section id="experience" style={{ maxWidth: '1000px', margin: '0 auto 80px auto', padding: '0 20px' }}>
        <h2 style={{ borderLeft: '5px solid #0984e3', paddingLeft: '15px', marginBottom: '30px' }}>Experience & Leadership</h2>
        <div style={{ background: '#fff', padding: '30px', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', border: '1px solid #edf2f7' }}>
          <div style={{ marginBottom: '30px' }}>
            <h4 style={{ margin: 0, fontSize: '1.1rem' }}>IT Support Intern | JPKN Sabah</h4>
            <small style={{ color: '#0984e3', fontWeight: 'bold' }}>2025</small>
            <p style={{ marginTop: '10px', color: '#4a5568' }}>Executed technical troubleshooting and system maintenance within a professional government infrastructure.</p>
          </div>
          <div>
            <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Treasurer & Executive | Netcentric Computing Club (NETCOM)</h4>
            <small style={{ color: '#0984e3', fontWeight: 'bold' }}>2024 - 2025</small>
            <p style={{ marginTop: '10px', color: '#4a5568' }}>Oversaw club finances and spearheaded a SULAM cybersecurity awareness program as Program Director.</p>
          </div>
        </div>
      </section>

      {/* 6. CERTIFICATIONS */}
      <section id="certs" style={{ maxWidth: '1000px', margin: '0 auto 100px auto', padding: '0 20px' }}>
        <h2 style={{ borderLeft: '5px solid #0984e3', paddingLeft: '15px', marginBottom: '30px' }}>Certifications</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          {['AWS Cloud Practitioner Essentials', 'Google Cloud Computing Foundations', 'Cisco IoT Security'].map(cert => (
            <div key={cert} style={{ padding: '20px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', textAlign: 'center', fontSize: '0.9rem', fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {cert}
            </div>
          ))}
        </div>
      </section>

      <footer style={{ textAlign: 'center', padding: '40px 0', borderTop: '1px solid #e2e8f0', color: '#b2bec3', fontSize: '0.9rem' }}>
        <p>© {new Date().getFullYear()} • Built with React & TypeScript</p>
      </footer>
    </div>
  );
}

export default App;