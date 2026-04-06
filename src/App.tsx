import ProjectCard from "./components/ProjectCard";
import { projects, type Project } from "./data/projects";

// Shared Component for consistent, eye-friendly headers
const SectionHeader = ({ title, subtitle, color = '#0984e3' }: { title: string, subtitle: string, color?: string }) => (
  <div style={{ marginBottom: '50px', textAlign: 'left' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
      <div style={{ width: '30px', height: '3px', backgroundColor: color, borderRadius: '2px' }}></div>
      <span style={{ 
        textTransform: 'uppercase', 
        letterSpacing: '2px', 
        fontSize: '0.75rem', 
        fontWeight: 800, 
        color: color 
      }}>
        {subtitle}
      </span>
    </div>
    <h2 style={{ fontSize: '2.8rem', fontWeight: 800, margin: 0, letterSpacing: '-1.5px', color: 'inherit' }}>
      {title}
    </h2>
  </div>
);

function App() {
  const GITHUB_USERNAME = "mhdirfann1512";
  const STATS = {
    projects: projects.length,
    commits: "100+",
    certs: "1"
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const getSectionStyle = (index: number) => {
    const isDark = index % 2 !== 0;
    return {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column' as const,
      justifyContent: 'center',
      padding: '100px 24px',
      backgroundColor: isDark ? '#0f172a' : '#ffffff',
      color: isDark ? '#f8fafc' : '#1e293b',
      transition: 'background-color 0.4s ease',
      boxSizing: 'border-box' as const,
    };
  };

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', scrollBehavior: 'smooth' }}>
      
      {/* NAVBAR */}
      <nav style={{ 
        position: 'fixed', top: 0, width: '100%', zIndex: 1000, 
        backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(226, 232, 240, 0.8)', padding: '16px 0',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 24px' }}>
          <b style={{ color: '#0984e3', cursor: 'pointer', fontSize: '1.4rem', letterSpacing: '-1px', fontWeight: 800 }} onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
            Irfan<span style={{color: '#64748b'}}>.dev</span>
          </b>
          <div style={{ display: 'flex', gap: '8px' }}>
            {['Skills', 'Education', 'Projects', 'Experience'].map(item => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase())} 
                style={{ background: 'none', border: 'none', fontWeight: 600, color: '#475569', cursor: 'pointer', fontSize: '0.85rem', padding: '8px 16px', borderRadius: '12px', transition: 'all 0.2s' }}
                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#f1f5f9'; e.currentTarget.style.color = '#0984e3'; }}
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#475569'; }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <header style={getSectionStyle(0)}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center', width: '100%' }}>
          <div>
            <span style={{ color: '#0984e3', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Available for hire</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, marginBottom: '20px', lineHeight: 1.1, letterSpacing: '-0.03em', marginTop: '10px' }}>
              Building the future of <span style={{ color: '#0984e3' }}>Netcentric</span> Apps.
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#64748b', marginBottom: '35px', lineHeight: 1.7, maxWidth: '540px' }}>
              Computer Science Graduate from UiTM. I specialize in high-performance web systems and cross-platform mobile solutions.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <a href="/resume.pdf" target="_blank" style={{ padding: '16px 32px', background: '#0984e3', color: '#fff', textDecoration: 'none', borderRadius: '14px', fontWeight: 700, boxShadow: '0 10px 30px rgba(9, 132, 227, 0.25)' }}>View Resume</a>
              <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" style={{ padding: '16px 32px', background: '#f1f5f9', color: '#1e293b', textDecoration: 'none', borderRadius: '14px', fontWeight: 700 }}>GitHub</a>
            </div>
            <div style={{ display: 'flex', gap: '48px', borderTop: '1px solid #f1f5f9', paddingTop: '32px' }}>
              {[{ label: 'Projects', value: STATS.projects }, { label: 'Commits', value: STATS.commits }, { label: 'Certifications', value: STATS.certs }].map(stat => (
                <div key={stat.label}>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#1e293b' }}>{stat.value}</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: 'clamp(280px, 35vw, 400px)', height: 'clamp(280px, 35vw, 400px)', borderRadius: '30px', backgroundColor: '#f1f5f9', transform: 'rotate(-3deg)', position: 'absolute', zIndex: 0 }}></div>
            <img src="/profile-image.jpg" alt="Irfan" style={{ width: 'clamp(280px, 35vw, 400px)', height: 'clamp(280px, 35vw, 400px)', borderRadius: '30px', objectFit: 'cover', position: 'relative', zIndex: 1, transform: 'rotate(3deg)' }} />
          </div>
        </div>
      </header>

      {/* 2. SKILLS */}
      <section id="skills" style={getSectionStyle(1)}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <SectionHeader title="Technical Arsenal" subtitle="Expertise" color="#38bdf8" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {[
              { title: 'Frontend & Mobile', logos: ['React', 'TypeScript', 'Next.js', 'Flutter', 'Tailwind CSS', 'Kotlin'] },
              { title: 'Backend & APIs', logos: ['Node.js', 'Laravel', 'PHP', 'Spring Boot', 'PostgreSQL', 'MySQL'] },
              { title: 'Cloud & Infrastructure', logos: ['AWS', 'Firebase', 'Google Cloud', 'Cisco', 'Linux', 'Docker'] }
            ].map((category, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.03)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                <h4 style={{ color: '#38bdf8', marginBottom: '24px', fontSize: '1.25rem', fontWeight: 700 }}>{category.title}</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  {category.logos.map((logo) => {
                    const slug = logo.toLowerCase().replace('.js', 'dotjs').replace(' ', '');
                    return (
                      <div key={logo} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.07)', padding: '10px 18px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.3s ease' }}>
                        <img src={`https://cdn.simpleicons.org/${slug}`} alt={logo} style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }} onError={(e) => (e.currentTarget.style.display = 'none')} />
                        <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{logo}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. EDUCATION */}
      <section id="education" style={getSectionStyle(2)}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <SectionHeader title="Academic History" subtitle="Education" color="#0984e3" />
          <div style={{ position: 'relative', paddingLeft: '32px', borderLeft: '2px solid #e2e8f0', maxWidth: '900px' }}>
            <div style={{ position: 'absolute', left: '-9px', top: '0', width: '16px', height: '16px', borderRadius: '50%', background: '#0984e3', border: '4px solid #fff' }}></div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 700, margin: 0 }}>Bachelor of Computer Science (Hons.) Netcentric Computing</h3>
            <p style={{ color: '#0984e3', fontWeight: 600, margin: '8px 0' }}>Universiti Teknologi MARA (UiTM) | 2022 — 2025</p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '16px' }}>
              {['Distributed Systems', 'Cloud Computing', 'Network Security', 'Web Engineering'].map(tag => (
                <span key={tag} style={{ background: '#f1f5f9', color: '#475569', padding: '6px 14px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600 }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROJECTS */}
      <section id="projects" style={getSectionStyle(3)}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '10px' }}>
            <SectionHeader title="Featured Work" subtitle="Portfolio" color="#38bdf8" />
            <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" style={{ color: '#38bdf8', fontWeight: 700, textDecoration: 'none', marginBottom: '55px' }}>View GitHub →</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
            {projects.map((item: Project) => <ProjectCard key={item.id} project={item} />)}
          </div>
        </div>
      </section>

      {/* 5. EXPERIENCE */}
      <section id="experience" style={getSectionStyle(4)}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <SectionHeader title="Career Path" subtitle="Experience" color="#0984e3" />
          <div style={{ display: 'grid', gap: '24px', maxWidth: '900px' }}>
            <div style={{ background: '#f8fafc', padding: '40px', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                <div>
                  <h4 style={{ fontSize: '1.4rem', fontWeight: 700, margin: 0 }}>IT Support Intern</h4>
                  <p style={{ color: '#0984e3', fontWeight: 600 }}>Jabatan Perkhidmatan Komputer Negeri (JPKN) Sabah</p>
                </div>
                <span style={{ background: '#e2e8f0', padding: '4px 12px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 700 }}>2025</span>
              </div>
              <p style={{ color: '#64748b', marginTop: '20px', lineHeight: 1.6 }}>Maintained critical government IT infrastructure and provided technical troubleshooting for hardware and software systems.</p>
            </div>
            <div style={{ background: '#f8fafc', padding: '40px', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                <div>
                  <h4 style={{ fontSize: '1.4rem', fontWeight: 700, margin: 0 }}>Program Director / Treasurer</h4>
                  <p style={{ color: '#0984e3', fontWeight: 600 }}>NETCOM Club</p>
                </div>
                <span style={{ background: '#e2e8f0', padding: '4px 12px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 700 }}>2024 — 2025</span>
              </div>
              <p style={{ color: '#64748b', marginTop: '20px', lineHeight: 1.6 }}>Led Cybersecurity Awareness initiatives and managed financial budgeting for technical workshops.</p>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ textAlign: 'center', padding: '80px 24px', backgroundColor: '#0f172a', color: '#94a3b8' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontSize: '1rem', fontWeight: 600, color: '#f8fafc', marginBottom: '8px' }}>Let's build something amazing together.</p>
          <p>© {new Date().getFullYear()} • Crafted with React & TypeScript</p>
        </div>
      </footer>
    </div>
  );
}

export default App;