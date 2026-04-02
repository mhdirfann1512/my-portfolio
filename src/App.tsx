import ProjectCard from "./components/ProjectCard";
import { projects, type Project } from "./data/projects";

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // NEW: High-Contrast Alternating Styles
  const getSectionStyle = (index: number) => {
    const isDark = index % 2 !== 0; // Every second section is dark
    return {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column' as const,
      justifyContent: 'center',
      padding: '100px 20px',
      backgroundColor: isDark ? '#1e293b' : '#ffffff', // Navy vs White
      color: isDark ? '#f8fafc' : '#2d3436',         // Light text vs Dark text
      transition: 'all 0.3s ease',
      boxSizing: 'border-box' as const,
    };
  };

  return (
    <div style={{ 
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      scrollPaddingTop: '70px' 
    }}>
      
      {/* --- STICKY NAVBAR --- */}
      <nav style={{
        position: 'fixed',
        top: 0, width: '100%', zIndex: 1000,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #e2e8f0',
        padding: '15px 0'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', padding: '0 20px' }}>
          <b style={{ color: '#0984e3', cursor: 'pointer', fontSize: '1.2rem' }} onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
            Dev.Portfolio
          </b>
          <div style={{ display: 'flex', gap: '25px' }}>
            {['Education', 'Work', 'Experience', 'Certs'].map(item => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))} 
                style={{ background: 'none', border: 'none', fontWeight: 600, color: '#475569', cursor: 'pointer', fontSize: '0.9rem' }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION (White) */}
      <header style={getSectionStyle(0)}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center', width: '100%' }}>
          <div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: 800, marginBottom: '15px', letterSpacing: '-2px', lineHeight: 1 }}>
              Portfolio
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#64748b', marginBottom: '40px', lineHeight: 1.6 }}>
              Hi, I’m a Computer Science Graduate specializing in **Netcentric Computing**. 
              Building the next generation of Web and Mobile solutions.
            </p>
            <a href="/your-resume.pdf" target="_blank" style={{ padding: '18px 38px', background: '#0984e3', color: '#fff', textDecoration: 'none', borderRadius: '50px', fontWeight: 700, boxShadow: '0 10px 25px rgba(9, 132, 227, 0.4)', fontSize: '1rem' }}>
              📄 Download Resume
            </a>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: 'clamp(250px, 45vw, 350px)', height: 'clamp(250px, 45vw, 350px)', borderRadius: '50%', border: '15px solid #f1f5f9', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}>
              <img src="/profile-image.jpg" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </header>

      {/* 2. EDUCATION (Dark Navy) */}
      <section id="education" style={getSectionStyle(1)}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
          <h2 style={{ borderLeft: '6px solid #38bdf8', paddingLeft: '20px', marginBottom: '50px', fontSize: '2.5rem' }}>Education</h2>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '45px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(5px)' }}>
            <h3 style={{ fontSize: '1.8rem', margin: 0 }}>Bachelor of CS (Hons.) Netcentric Computing</h3>
            <p style={{ color: '#38bdf8', fontWeight: 600, fontSize: '1.1rem', marginTop: '10px' }}>Universiti Teknologi MARA (UiTM) | 2022 - 2025</p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '30px' }}>
              {['Distributed Systems', 'Cloud Computing', 'Network Security', 'Web Engineering'].map(s => (
                <span key={s} style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#7dd3fc', padding: '8px 16px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 500, border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROJECTS (White) */}
      <section id="work" style={getSectionStyle(2)}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
          <h2 style={{ borderLeft: '6px solid #0984e3', paddingLeft: '20px', marginBottom: '50px', fontSize: '2.5rem' }}>Featured Work</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '40px' }}>
            {projects.map((item: Project) => (
              <ProjectCard key={item.id} project={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. EXPERIENCE (Dark Navy) */}
      <section id="experience" style={getSectionStyle(3)}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
          <h2 style={{ borderLeft: '6px solid #38bdf8', paddingLeft: '20px', marginBottom: '50px', fontSize: '2.5rem' }}>Experience & Leadership</h2>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '45px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
             <div style={{ marginBottom: '40px' }}>
               <h4 style={{ fontSize: '1.4rem', margin: 0 }}>IT Support Intern | JPKN Sabah</h4>
               <p style={{ color: '#94a3b8', marginTop: '5px' }}>2025 • Full-stack troubleshooting and system maintenance.</p>
             </div>
             <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px' }}>
               <h4 style={{ fontSize: '1.4rem', margin: 0 }}>Treasurer & Executive | NETCOM Club</h4>
               <p style={{ color: '#94a3b8', marginTop: '5px' }}>2024 - 2025 • Directed award-winning cybersecurity programs.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 5. CERTIFICATIONS (White) */}
      <section id="certs" style={getSectionStyle(4)}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
          <h2 style={{ borderLeft: '6px solid #0984e3', paddingLeft: '20px', marginBottom: '50px', fontSize: '2.5rem' }}>Professional Certifications</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
            {['AWS Cloud Practitioner', 'Google Cloud Foundations', 'Cisco IoT Security'].map(c => (
              <div key={c} style={{ padding: '40px 20px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '20px', textAlign: 'center', fontWeight: 700, boxShadow: '0 10px 20px rgba(0,0,0,0.02)', color: '#0984e3' }}>
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: 'center', padding: '60px 0', backgroundColor: '#0f172a', color: '#64748b' }}>
        <p style={{ fontWeight: 500 }}>© {new Date().getFullYear()} • Handcrafted with React & TypeScript</p>
      </footer>
    </div>
  );
}

export default App;