import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div style={{ 
      background: '#fff', 
      borderRadius: '16px', 
      overflow: 'hidden', 
      border: '1px solid #e2e8f0',
      boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
      display: 'flex',
      flexDirection: 'column',
      transition: 'all 0.3s ease'
    }}>
      <div style={{ width: '100%', height: '180px', overflow: 'hidden', backgroundColor: '#f1f2f6' }}>
        <img 
          src={project.image} 
          alt={project.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
      </div>

      <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '1.25rem', color: '#1a1a1a' }}>{project.title}</h3>
        <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '15px', lineHeight: 1.5 }}>
          {project.description}
        </p>
        
        {/* Tech Highlight Box */}
        <div style={{ 
          background: '#f0f9ff', 
          borderLeft: '4px solid #0984e3', 
          padding: '12px', 
          marginBottom: '20px',
          borderRadius: '4px' 
        }}>
          <p style={{ margin: 0, fontSize: '0.8rem', color: '#0369a1', fontWeight: 600 }}>TECHNICAL HIGHLIGHT</p>
          <p style={{ margin: '4px 0 0 0', fontSize: '0.8rem', color: '#0c4a6e', fontStyle: 'italic' }}>
            {project.techHighlight}
          </p>
        </div>

        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '20px' }}>
          {project.tags.map((tag: string) => (
            <span key={tag} style={{ background: '#f1f5f9', color: '#475569', padding: '4px 10px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 600 }}>
              {tag}
            </span>
          ))}
        </div>

        <div style={{ marginTop: 'auto' }}>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" style={{ color: '#0984e3', textDecoration: 'none', fontWeight: 700, fontSize: '0.85rem' }}>
            Source Code ↗
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;