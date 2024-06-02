// 'use client'
import React from 'react';
import Calendar from '@/components/CalendarPage/Celendar';

const MediaPage: React.FC = () => {
  const pageStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  };

  return (
    <div style={pageStyle}>
      <h1>Lịch</h1>
      <Calendar />
      <Calendar />
      <Calendar />
      <Calendar />
    </div>
  );
};

export default MediaPage;
