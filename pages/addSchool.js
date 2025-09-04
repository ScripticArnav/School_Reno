import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';

export default function AddSchool() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [status, setStatus] = useState(null);

  const onSubmit = async (data) => {
    try {
      setStatus(null);
      const formData = new FormData();
      Object.entries(data).forEach(([k, v]) => {
        if (k === 'image') formData.append('image', v[0]);
        else formData.append(k, v);
      });
      const res = await axios.post('/api/schools', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setStatus({ type: 'success', msg: res.data.message || 'Added!' });
      reset();
    } catch (err) {
      setStatus({ type: 'error', msg: err.response?.data?.error || err.message });
    }
  };

  return (
    <div style={container}>
      <div style={backgroundPattern}></div>
      <div style={contentContainer}>
        <div style={headerSection}>
          <div style={headerIcon}>🏫</div>
          <h1 style={title}>Add New School</h1>
          <p style={subtitle}>Enter the details to register a new educational institution</p>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} style={form}>
          <div style={formGrid}>
            <div style={inputGroup}>
              <label style={label}>School Name</label>
              <input
                placeholder="Enter school name"
                {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'Too short' } })}
                style={input}
                onFocus={(e) => {
                  e.target.style.border = '2px solid #00d4ff';
                  e.target.style.background = 'rgba(0, 212, 255, 0.1)';
                  e.target.style.boxShadow = '0 0 0 4px rgba(0, 212, 255, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.border = '2px solid rgba(255, 255, 255, 0.2)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.target.style.boxShadow = 'none';
                }}
              />
              {errors.name && <span style={err}>{errors.name.message}</span>}
            </div>

            <div style={inputGroup}>
              <label style={label}>Address</label>
              <input
                placeholder="Enter full address"
                {...register('address', { required: 'Address is required' })}
                style={input}
                onFocus={(e) => {
                  e.target.style.border = '2px solid #00d4ff';
                  e.target.style.background = 'rgba(0, 212, 255, 0.1)';
                  e.target.style.boxShadow = '0 0 0 4px rgba(0, 212, 255, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.border = '2px solid rgba(255, 255, 255, 0.2)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.target.style.boxShadow = 'none';
                }}
              />
              {errors.address && <span style={err}>{errors.address.message}</span>}
            </div>

            <div style={inputGroup}>
              <label style={label}>City</label>
              <input
                placeholder="Enter city name"
                {...register('city', { required: 'City is required' })}
                style={input}
                onFocus={(e) => {
                  e.target.style.border = '2px solid #00d4ff';
                  e.target.style.background = 'rgba(0, 212, 255, 0.1)';
                  e.target.style.boxShadow = '0 0 0 4px rgba(0, 212, 255, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.border = '2px solid rgba(255, 255, 255, 0.2)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.target.style.boxShadow = 'none';
                }}
              />
              {errors.city && <span style={err}>{errors.city.message}</span>}
            </div>

            <div style={inputGroup}>
              <label style={label}>State</label>
              <input
                placeholder="Enter state name"
                {...register('state', { required: 'State is required' })}
                style={input}
                onFocus={(e) => {
                  e.target.style.border = '2px solid #00d4ff';
                  e.target.style.background = 'rgba(0, 212, 255, 0.1)';
                  e.target.style.boxShadow = '0 0 0 4px rgba(0, 212, 255, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.border = '2px solid rgba(255, 255, 255, 0.2)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.target.style.boxShadow = 'none';
                }}
              />
              {errors.state && <span style={err}>{errors.state.message}</span>}
            </div>

            <div style={inputGroup}>
              <label style={label}>Contact Number</label>
              <input
                placeholder="Enter contact number"
                type="number"
                {...register('contact', {
                  required: 'Contact is required',
                  minLength: { value: 10, message: 'Min 10 digits' },
                })}
                style={input}
                onFocus={(e) => {
                  e.target.style.border = '2px solid #00d4ff';
                  e.target.style.background = 'rgba(0, 212, 255, 0.1)';
                  e.target.style.boxShadow = '0 0 0 4px rgba(0, 212, 255, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.border = '2px solid rgba(255, 255, 255, 0.2)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.target.style.boxShadow = 'none';
                }}
              />
              {errors.contact && <span style={err}>{errors.contact.message}</span>}
            </div>

            <div style={inputGroup}>
              <label style={label}>Email</label>
              <input
                placeholder="Enter email address"
                type="email"
                {...register('email_id', {
                  required: 'Email is required',
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
                })}
                style={input}
                onFocus={(e) => {
                  e.target.style.border = '2px solid #00d4ff';
                  e.target.style.background = 'rgba(0, 212, 255, 0.1)';
                  e.target.style.boxShadow = '0 0 0 4px rgba(0, 212, 255, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.border = '2px solid rgba(255, 255, 255, 0.2)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.target.style.boxShadow = 'none';
                }}
              />
              {errors.email_id && <span style={err}>{errors.email_id.message}</span>}
            </div>
          </div>

          <div style={fileInputGroup}>
            <label style={label}>School Image</label>
            <div style={fileInputWrapper}>
              <input
                type="file"
                accept="image/*"
                {...register('image', { required: 'Image is required' })}
                style={fileInput}
                onFocus={(e) => {
                  e.target.style.border = '2px solid #00d4ff';
                  e.target.style.background = 'rgba(0, 212, 255, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.border = '2px solid rgba(255, 255, 255, 0.2)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                }}
              />
              <div style={fileInputIcon}>📷</div>
            </div>
            {errors.image && <span style={err}>{errors.image.message}</span>}
          </div>

          <button 
            type="submit" 
            style={button}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-4px) scale(1.02)';
              e.target.style.background = 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)';
              e.target.style.boxShadow = '0 16px 32px rgba(0, 212, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.background = 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)';
              e.target.style.boxShadow = '0 8px 25px rgba(0, 212, 255, 0.3)';
            }}
          >
            <span style={buttonIcon}>💾</span>
            Save School
          </button>
          
          {status && (
            <div style={statusContainer}>
              <p style={statusMessage(status.type)}>
                {status.msg}
              </p>
              {status.details && (
                <p style={errorDetails}>
                  Details: {status.details}
                </p>
              )}
            </div>
          )}
        </form>
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
  padding: '20px',
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

const contentContainer = {
  maxWidth: '800px',
  width: '100%',
  textAlign: 'center',
  color: 'white',
  position: 'relative',
  zIndex: 2,
};

const headerSection = {
  marginBottom: '40px',
};

const headerIcon = {
  fontSize: '60px',
  marginBottom: '20px',
  filter: 'drop-shadow(0 8px 16px rgba(0, 212, 255, 0.3))',
};

const title = { 
  fontSize: '48px', 
  marginBottom: '16px', 
  textAlign: 'center',
  fontWeight: '800',
  color: 'white',
  background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  letterSpacing: '-1px',
};

const subtitle = {
  fontSize: '18px',
  color: '#b8c5d6',
  opacity: '0.8',
  marginBottom: '40px',
};

const form = {
  display: 'flex', 
  flexDirection: 'column',
  gap: '32px',
  background: 'rgba(255, 255, 255, 0.05)',
  padding: '48px',
  borderRadius: '24px',
  backdropFilter: 'blur(20px)',
  border: '2px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
};

const formGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '24px',
};

const inputGroup = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  textAlign: 'left',
};

const label = {
  fontSize: '14px',
  fontWeight: '600',
  color: '#b8c5d6',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  marginBottom: '4px',
};

const input = {
  padding: '16px 20px', 
  border: '2px solid rgba(255, 255, 255, 0.2)', 
  borderRadius: '12px', 
  fontSize: '16px',
  background: 'rgba(255, 255, 255, 0.05)',
  color: 'white',
  backdropFilter: 'blur(10px)',
  transition: 'all 0.3s ease',
  outline: 'none',
  placeholder: {
    color: 'rgba(255, 255, 255, 0.5)',
  },
};

const fileInputGroup = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  textAlign: 'left',
};

const fileInputWrapper = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
};

const fileInput = { 
  padding: '16px 20px',
  paddingLeft: '60px',
  border: '2px solid rgba(255, 255, 255, 0.2)', 
  borderRadius: '12px', 
  fontSize: '16px',
  background: 'rgba(255, 255, 255, 0.05)',
  color: 'white',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  outline: 'none',
  width: '100%',
};

const fileInputIcon = {
  position: 'absolute',
  left: '20px',
  fontSize: '20px',
  pointerEvents: 'none',
};

const button = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '12px',
  padding: '20px 40px', 
  border: 'none', 
  borderRadius: '16px', 
  fontSize: '18px', 
  cursor: 'pointer',
  background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
  color: 'white',
  fontWeight: '600',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: '0 8px 25px rgba(0, 212, 255, 0.3)',
  alignSelf: 'center',
  minWidth: '200px',
};

const buttonIcon = {
  fontSize: '20px',
};

const err = { 
  color: '#ff6b6b', 
  fontSize: '14px',
  fontWeight: '500',
  textAlign: 'left',
  marginTop: '4px',
};

const statusContainer = {
  marginTop: '20px',
};

const statusMessage = (type) => ({
  padding: '16px 24px',
  borderRadius: '12px',
  fontSize: '16px',
  fontWeight: '600',
  background: type === 'success' 
    ? 'rgba(34, 197, 94, 0.2)' 
    : 'rgba(239, 68, 68, 0.2)',
  color: type === 'success' ? '#22c55e' : '#ef4444',
  border: `2px solid ${type === 'success' ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
  backdropFilter: 'blur(10px)',
  display: 'inline-block',
});

const errorDetails = {
  fontSize: '14px',
  color: '#ff6b6b',
  marginTop: '8px',
  textAlign: 'left',
};
