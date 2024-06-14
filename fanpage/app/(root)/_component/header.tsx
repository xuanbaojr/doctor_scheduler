import React from 'react';
import { FaBell, FaUser, FaAmbulance } from 'react-icons/fa';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={leftStyle}>
        <FaAmbulance size={50} />
        <span style={siteNameStyle}>ĐẶT LỊCH xin chào</span>
      </div>
      <div style={rightStyle}>
        <FaBell size={30} style={iconStyle} />
        <FaUser size={30} style={iconStyle} />
      </div>
    </header>
  );
};

const headerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 50px',
  backgroundColor: '#CAE0FA',
  // boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  position: 'sticky',
  top: '0',
  zIndex: '1000',
};

const leftStyle = {
  display: 'flex',
  alignItems: 'center',
};

const siteNameStyle = {
  marginLeft: '10px',
  fontSize: '1.5rem',
  fontWeight: 'bold',
};

const rightStyle = {
  display: 'flex',
  alignItems: 'center',
};

const iconStyle = {
  marginLeft: '15px',
  cursor: 'pointer',
};

export default Header;
