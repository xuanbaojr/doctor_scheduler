'use client'
import React, { useState, CSSProperties } from 'react';
import { addDays, startOfWeek, format, eachHourOfInterval } from 'date-fns';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const startOfTheWeek = startOfWeek(selectedDate, { weekStartsOn: 1 });

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(new Date(event.target.value));
  };

  const hours = eachHourOfInterval({
    start: new Date(0, 0, 0, 7),
    end: new Date(0, 0, 0, 21),
  });

  const calendarContainerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  };

  const headerStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const dateInputStyle: CSSProperties = {
    padding: '10px',
    margin: '5px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const tableStyle: CSSProperties = {
    width: '100%',
    borderCollapse: 'collapse',
  };

  const tableHeaderStyle: CSSProperties = {
    width: '230px',
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
  };

  const tableCellStyle: CSSProperties = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'center',
  };

  const timeColumnStyle: CSSProperties = {
    height: '40px',
    width: '80px',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#f9f9f9',
  };

  return (
    <div style={calendarContainerStyle}>
      <div style={headerStyle}>
        <input
          style={dateInputStyle}
          type="date"
          value={format(selectedDate, 'yyyy-MM-dd')}
          onChange={handleDateChange}
        />
      </div>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Time</th>
            {Array.from({ length: 7 }).map((_, index) => (
              <th style={tableHeaderStyle} key={index}>
                {format(addDays(startOfTheWeek, index), 'dd/MM - EEEE')}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hours.map((hour, index) => (
            <tr key={index}>
              <td style={timeColumnStyle}>{format(hour, 'HH:mm')}</td>
              {Array.from({ length: 7 }).map((_, dayIndex) => (
                <td style={tableCellStyle} key={dayIndex}></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
