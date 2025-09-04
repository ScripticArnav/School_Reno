import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get("/api/schools")
      .then((res) => setSchools(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const handleCardClick = (school) => {
    setSelectedSchool(school);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedSchool(null);
  };

  return (
    <div style={wrap}>
      <div style={backgroundPattern}></div>
      <div style={contentContainer}>
        <div style={headerSection}>
          <div style={headerIcon}>🎓</div>
          <h1 style={title}>School Directory</h1>
          <p style={subtitle}>Discover and explore educational institutions</p>
        </div>
        
        {loading ? (
          <div style={loadingContainer}>
            <div style={loadingSpinner} className="spin"></div>
            <p style={loadingText}>Loading schools...</p>
          </div>
        ) : schools.length === 0 ? (
          <div style={emptyState}>
            <div style={emptyIcon}>🏫</div>
            <p style={noSchoolsText}>No schools found in the directory.</p>
            <p style={emptySubtext}>Be the first to add a school!</p>
          </div>
        ) : (
          <div style={grid}>
          {schools.map((s) => (
            <div 
              key={s.id} 
              style={card}
              onClick={() => handleCardClick(s)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-12px) scale(1.03)';
                e.currentTarget.style.boxShadow = '0 32px 64px rgba(0, 212, 255, 0.2), 0 16px 32px rgba(0, 0, 0, 0.2)';
                e.currentTarget.style.border = '2px solid rgba(0, 212, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.border = '2px solid rgba(255, 255, 255, 0.1)';
              }}
            >
              <div style={imageWrap}>
                <Image
                  src={s.image || "/placeholder.png"}
                  alt={s.name}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 280px"
                />
                <div style={imageOverlay}></div>
                <div style={cardBadge}>🏫</div>
              </div>
              <div style={cardBody}>
                <h3 style={name}>{s.name}</h3>
                <p style={text}>{s.address}</p>
                <div style={locationInfo}>
                  <span style={cityPill}>{s.city}</span>
                  <span style={statePill}>{s.state}</span>
                </div>
                <div style={contactInfo}>
                  <span style={contactItem}>📞 {s.contact}</span>
                  <span style={contactItem}>✉️ {s.email_id}</span>
                </div>
              </div>
            </div>
          ))}
          </div>
        )}
      </div>
      
      {showModal && selectedSchool && (
        <div style={modalOverlay} onClick={closeModal}>
          <div style={modalContent} onClick={(e) => e.stopPropagation()}>
            <div style={modalHeader}>
              <div style={modalHeaderContent}>
                <div style={modalIcon}>🏫</div>
                <h2 style={modalTitle}>{selectedSchool.name}</h2>
              </div>
              <button 
                style={closeButton} 
                onClick={closeModal}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                  e.target.style.transform = 'scale(1.1) rotate(90deg)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.transform = 'scale(1) rotate(0deg)';
                }}
              >×</button>
            </div>
            
            <div style={modalBody}>
              <div style={modalImageWrap}>
                <Image
                  src={selectedSchool.image || "/placeholder.png"}
                  alt={selectedSchool.name}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 600px"
                />
                <div style={modalImageOverlay}></div>
              </div>
              
              <div style={detailsGrid}>
                <div style={detailItem}>
                  <div style={detailIcon}>📍</div>
                  <div style={detailContent}>
                    <span style={detailLabel}>Address</span>
                    <p style={detailValue}>{selectedSchool.address}</p>
                  </div>
                </div>
                
                <div style={detailItem}>
                  <div style={detailIcon}>🏙️</div>
                  <div style={detailContent}>
                    <span style={detailLabel}>City</span>
                    <p style={detailValue}>{selectedSchool.city}</p>
                  </div>
                </div>
                
                <div style={detailItem}>
                  <div style={detailIcon}>🗺️</div>
                  <div style={detailContent}>
                    <span style={detailLabel}>State</span>
                    <p style={detailValue}>{selectedSchool.state}</p>
                  </div>
                </div>
                
                <div style={detailItem}>
                  <div style={detailIcon}>📞</div>
                  <div style={detailContent}>
                    <span style={detailLabel}>Contact</span>
                    <p style={detailValue}>{selectedSchool.contact}</p>
                  </div>
                </div>
                
                <div style={detailItem}>
                  <div style={detailIcon}>✉️</div>
                  <div style={detailContent}>
                    <span style={detailLabel}>Email</span>
                    <p style={detailValue}>{selectedSchool.email_id}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const wrap = { 
  minHeight: "100vh",
  background: "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: "20px",
  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  position: "relative",
  overflow: "hidden",
};

const backgroundPattern = {
  position: "absolute",
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

const contentContainer = {
  maxWidth: "1400px",
  width: "100%",
  textAlign: "center",
  color: "white",
  position: "relative",
  zIndex: 2,
};

const headerSection = {
  marginBottom: "60px",
  textAlign: "center",
};

const headerIcon = {
  fontSize: "60px",
  marginBottom: "20px",
  filter: "drop-shadow(0 8px 16px rgba(0, 212, 255, 0.3))",
};

const title = { 
  fontSize: "48px", 
  marginBottom: "16px", 
  textAlign: "center",
  fontWeight: "800",
  color: "white",
  background: "linear-gradient(135deg, #ffffff 0%, #00d4ff 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  letterSpacing: "-1px",
};

const subtitle = {
  fontSize: "18px",
  color: "#b8c5d6",
  opacity: "0.8",
  marginBottom: "40px",
};

const loadingContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  marginTop: "60px",
};

const loadingSpinner = {
  width: "40px",
  height: "40px",
  border: "4px solid rgba(255, 255, 255, 0.1)",
  borderTop: "4px solid #00d4ff",
  borderRadius: "50%",
};

const loadingText = {
  fontSize: "18px",
  color: "#b8c5d6",
  opacity: "0.8",
};

const emptyState = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  marginTop: "60px",
  padding: "60px 20px",
};

const emptyIcon = {
  fontSize: "80px",
  opacity: "0.5",
};

const noSchoolsText = {
  fontSize: "24px",
  color: "#b8c5d6",
  fontWeight: "600",
  margin: 0,
};

const emptySubtext = {
  fontSize: "16px",
  color: "#8b9bb4",
  margin: 0,
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
  gap: "32px",
  padding: "20px 0",
};

const card = {
  border: "2px solid rgba(255, 255, 255, 0.1)",
  borderRadius: "20px",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(20px)",
  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.1)",
  cursor: "pointer",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  transform: "translateY(0)",
};

const imageWrap = {
  position: "relative",
  width: "100%",
  height: 200,
  background: "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%)",
  overflow: "hidden",
};

const imageOverlay = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(0, 0, 0, 0.3) 100%)",
  pointerEvents: "none",
};

const cardBadge = {
  position: "absolute",
  top: "16px",
  right: "16px",
  background: "rgba(0, 212, 255, 0.9)",
  color: "white",
  padding: "8px 12px",
  borderRadius: "20px",
  fontSize: "16px",
  fontWeight: "600",
  backdropFilter: "blur(10px)",
  boxShadow: "0 4px 12px rgba(0, 212, 255, 0.3)",
};

const cardBody = { 
  padding: "28px", 
  display: "flex", 
  flexDirection: "column",
  gap: "20px",
  flex: 1,
  background: "rgba(255, 255, 255, 0.05)",
};

const name = { 
  fontSize: "24px", 
  margin: 0, 
  fontWeight: "800",
  color: "#ffffff",
  lineHeight: "1.2",
  letterSpacing: "-0.5px",
};

const text = { 
  margin: 0, 
  color: "#b8c5d6",
  fontSize: "14px",
  lineHeight: "1.5",
  fontWeight: "400",
};

const locationInfo = {
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
};

const cityPill = {
  display: "inline-block",
  fontSize: "12px",
  padding: "6px 12px",
  borderRadius: "20px",
  background: "linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)",
  color: "white",
  fontWeight: "600",
  boxShadow: "0 4px 8px rgba(0, 212, 255, 0.3)",
  letterSpacing: "0.3px",
  textTransform: "uppercase",
};

const statePill = {
  display: "inline-block",
  fontSize: "12px",
  padding: "6px 12px",
  borderRadius: "20px",
  background: "rgba(255, 255, 255, 0.1)",
  color: "#b8c5d6",
  fontWeight: "600",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  letterSpacing: "0.3px",
  textTransform: "uppercase",
};

const contactInfo = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  marginTop: "auto",
};

const contactItem = {
  fontSize: "12px",
  color: "#8b9bb4",
  fontWeight: "500",
};

const modalOverlay = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
  padding: "20px",
  backdropFilter: "blur(8px)",
};

const modalContent = {
  backgroundColor: "rgba(15, 15, 35, 0.95)",
  borderRadius: "24px",
  maxWidth: 800,
  width: "100%",
  maxHeight: "90vh",
  overflow: "auto",
  boxShadow: "0 32px 64px rgba(0, 0, 0, 0.4)",
  border: "2px solid rgba(0, 212, 255, 0.2)",
  backdropFilter: "blur(20px)",
};

const modalHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "32px",
  borderBottom: "2px solid rgba(255, 255, 255, 0.1)",
  background: "linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
  borderRadius: "24px 24px 0 0",
};

const modalHeaderContent = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const modalIcon = {
  fontSize: "32px",
  filter: "drop-shadow(0 4px 8px rgba(0, 212, 255, 0.3))",
};

const modalTitle = {
  margin: 0,
  fontSize: "28px",
  fontWeight: "800",
  color: "white",
  letterSpacing: "-0.5px",
};

const closeButton = {
  background: "rgba(255, 255, 255, 0.1)",
  border: "none",
  fontSize: "24px",
  cursor: "pointer",
  color: "white",
  padding: 0,
  width: "40px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  transition: "all 0.3s ease",
  backdropFilter: "blur(10px)",
};

const modalBody = {
  padding: "32px",
  background: "rgba(15, 15, 35, 0.95)",
};

const modalImageWrap = {
  position: "relative",
  width: "100%",
  height: 300,
  borderRadius: "16px",
  overflow: "hidden",
  marginBottom: "32px",
  background: "rgba(0, 0, 0, 0.3)",
  boxShadow: "0 16px 32px rgba(0, 0, 0, 0.3)",
};

const modalImageOverlay = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(0, 0, 0, 0.2) 100%)",
  pointerEvents: "none",
};

const detailsGrid = {
  display: "grid",
  gap: "20px",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
};

const detailItem = {
  display: "flex",
  alignItems: "flex-start",
  gap: "16px",
  padding: "20px",
  backgroundColor: "rgba(255, 255, 255, 0.05)",
  borderRadius: "16px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  transition: "all 0.2s ease",
  backdropFilter: "blur(10px)",
};

const detailIcon = {
  fontSize: "20px",
  marginTop: "2px",
  filter: "drop-shadow(0 2px 4px rgba(0, 212, 255, 0.3))",
};

const detailContent = {
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  flex: 1,
};

const detailLabel = {
  fontSize: "12px",
  fontWeight: "700",
  color: "#00d4ff",
  textTransform: "uppercase",
  letterSpacing: "1px",
};

const detailValue = {
  margin: 0,
  color: "rgba(255, 255, 255, 0.9)",
  fontSize: "16px",
  lineHeight: "1.5",
  fontWeight: "500",
};
