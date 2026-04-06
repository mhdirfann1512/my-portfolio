import { useState, useEffect } from 'react';
// FIX 1: Use 'import type' to satisfy verbatimModuleSyntax
import type { Project } from '../data/projects';

const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const gallery = project.screenshots ? [project.image, ...project.screenshots] : [project.image];

  // FIX 2: Clean up the effect to avoid synchronous setState calls
  useEffect(() => {
    // Only start the interval if we are hovering AND have multiple images
    if (!isHovered || gallery.length <= 1) return;

    const interval = window.setInterval(() => {
      setImgIndex((prev) => (prev + 1) % gallery.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [isHovered, gallery.length]);

  // FIX 3: Reset index when hover ends using an event handler instead of an Effect
  const handleMouseLeave = () => {
    setIsHovered(false);
    setImgIndex(0); 
  };

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        background: '#ffffff',
        borderRadius: '24px',
        border: '1px solid #e2e8f0',
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 30px 60px -12px rgba(0,0,0,0.12)' : '0 4px 6px -1px rgba(0,0,0,0.02)',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div style={{ position: 'relative', height: '240px', overflow: 'hidden', backgroundColor: '#f8fafc' }}>
        {gallery.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={project.title}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'opacity 0.8s ease-in-out',
              opacity: i === imgIndex ? 1 : 0,
            }}
          />
        ))}
        
        {gallery.length > 1 && isHovered && (
          <div style={{ position: 'absolute', bottom: '15px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '6px' }}>
            {gallery.map((_, i) => (
              <div key={i} style={{ 
                width: '6px', height: '6px', borderRadius: '50%', 
                backgroundColor: i === imgIndex ? '#38bdf8' : 'rgba(255,255,255,0.5)',
                transition: 'all 0.3s'
              }} />
            ))}
          </div>
        )}

        <div style={{ position: 'absolute', top: '15px', right: '15px' }}>
            <span style={{ background: 'rgba(15, 23, 42, 0.8)', color: '#fff', padding: '6px 12px', borderRadius: '8px', fontSize: '0.7rem', fontWeight: 700, backdropFilter: 'blur(4px)' }}>
                Visual Demo
            </span>
        </div>
      </div>

      <div style={{ padding: '32px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
          {project.tags.map(tag => (
            <span key={tag} style={{ fontSize: '0.7rem', fontWeight: 700, color: '#0984e3', background: '#e1f5fe', padding: '4px 10px', borderRadius: '6px' }}>
              {tag}
            </span>
          ))}
        </div>

        <h3 style={{ fontSize: '1.4rem', fontWeight: 800, margin: '0 0 12px 0', color: '#1e293b' }}>{project.title}</h3>
        <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>{project.description}</p>
        
        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '16px', borderLeft: '4px solid #38bdf8', marginBottom: '24px' }}>
          <p style={{ margin: 0, fontSize: '0.85rem', color: '#475569', fontStyle: 'italic', lineHeight: 1.5 }}>
            <strong>Recruiter Note:</strong> {project.techHighlight}
          </p>
        </div>

        <div style={{ marginTop: 'auto' }}>
          <a href={project.githubLink} target="_blank" rel="noreferrer" style={{ 
            display: 'inline-block', width: '100%', textAlign: 'center', padding: '14px', 
            background: '#0f172a', color: '#fff', textDecoration: 'none', borderRadius: '12px', 
            fontWeight: 700, fontSize: '0.9rem', transition: 'background 0.2s' 
          }}>
            Go to Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;