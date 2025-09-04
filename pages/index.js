import Link from "next/link";

export default function Home() {
  return (
    <div style={container}>
      <div style={backgroundPattern}></div>
      <div style={heroSection}>
        <div style={content}>
          <div style={logoContainer}>
            <div style={logoIcon} className="logo-float">🎓</div>
          </div>
          <h1 style={mainTitle} className="fade-in-up">School Directory</h1>
          <p style={subtitle} className="fade-in-up-delayed-1">
            Discover and manage educational institutions with our comprehensive directory system. 
            Streamlined, efficient, and designed for the modern educator.
          </p>
          
          <div style={buttonContainer} className="fade-in-up-delayed-2">
            <Link href="/addSchool" style={buttonLink}>
              <div 
                style={primaryButton}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-8px) scale(1.05)';
                  e.target.style.background = 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)';
                  e.target.style.boxShadow = '0 20px 40px rgba(0, 212, 255, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.background = 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)';
                  e.target.style.boxShadow = '0 8px 25px rgba(0, 212, 255, 0.3)';
                }}
              >
                <span style={buttonIcon}>+</span>
                Add New School
              </div>
            </Link>
            
            <Link href="/showSchools" style={buttonLink}>
              <div 
                style={secondaryButton}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-8px) scale(1.05)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                  e.target.style.boxShadow = '0 20px 40px rgba(255, 255, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.1)';
                }}
              >
                <span style={buttonIcon}>🏫</span>
                Browse Schools
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const container = {
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // padding: '20px',
  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  position: 'relative',
  overflow: 'hidden',
};

const backgroundPattern = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `
    radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(0, 212, 255, 0.05) 0%, transparent 50%)
  `,
  zIndex: 1,
};

const heroSection = {
  maxWidth: '1200px',
  width: '100%',
  textAlign: 'center',
  color: 'white',
  position: 'relative',
  zIndex: 2,
};

const content = {
  marginBottom: '80px',
};

const logoContainer = {
  marginBottom: '40px',
};

const logoIcon = {
  fontSize: '80px',
  filter: 'drop-shadow(0 8px 16px rgba(0, 212, 255, 0.3))',
};

const mainTitle = {
  fontSize: '64px',
  fontWeight: '800',
  marginBottom: '24px',
  background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  lineHeight: '1.1',
  letterSpacing: '-2px',
  textShadow: '0 4px 8px rgba(0,0,0,0.3)',
};

const subtitle = {
  fontSize: '22px',
  marginBottom: '60px',
  opacity: '0.85',
  lineHeight: '1.7',
  maxWidth: '700px',
  margin: '0 auto 60px auto',
  color: '#b8c5d6',
  fontWeight: '400',
};

const buttonContainer = {
  display: 'flex',
  gap: '24px',
  justifyContent: 'center',
  flexWrap: 'wrap',
  marginTop: '40px',
};

const buttonLink = {
  textDecoration: 'none',
  color: 'inherit',
};

const primaryButton = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '20px 40px',
  background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
  border: 'none',
  borderRadius: '16px',
  color: 'white',
  fontSize: '18px',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: '0 8px 25px rgba(0, 212, 255, 0.3)',
  position: 'relative',
  overflow: 'hidden',
};

const secondaryButton = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '20px 40px',
  background: 'rgba(255, 255, 255, 0.1)',
  border: '2px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '16px',
  color: 'white',
  fontSize: '18px',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  backdropFilter: 'blur(20px)',
  boxShadow: '0 8px 25px rgba(255, 255, 255, 0.1)',
};

const buttonIcon = {
  fontSize: '22px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
};


