'use client'
import React, { useState, CSSProperties } from 'react';
import { addDays, startOfWeek, format, eachHourOfInterval } from 'date-fns';
import Schedule from './Schedule';

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

  // Thêm kiểu CSS cho container của bảng để quản lý cuộn dọc
  const tableContainerStyle: CSSProperties = {
    maxHeight: '600px', // Thiết lập chiều cao tối đa
    overflowY: 'auto',  // Cho phép cuộn dọc
    width: '100%',
  };

  const tableStyle: CSSProperties = {
    width: '100%',
    borderCollapse: 'collapse',
  };

  // Cập nhật kiểu CSS cho tiêu đề bảng để giữ vị trí cố định khi cuộn
  const tableHeaderStyle: CSSProperties = {
    position: 'sticky', // Giữ vị trí cố định
    top: 0,             // Đặt vị trí cố định ở đầu bảng
    zIndex: 1,          // Đảm bảo tiêu đề luôn ở trên nội dung bảng
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
      <div style={tableContainerStyle}> {/* Sử dụng tableContainerStyle */}
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>Time</th> {/* Sử dụng tableHeaderStyle */}
              {Array.from({ length: 7 }).map((_, index) => (
                <th style={tableHeaderStyle} key={index}> {/* Sử dụng tableHeaderStyle */}
                  {format(addDays(startOfTheWeek, index), 'dd/MM - EEEE')}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {hours.map((hour, hourIndex) => (
              <tr key={hourIndex}>
                <td style={timeColumnStyle}>{format(hour, 'HH:mm')}</td>
                {Array.from({ length: 7 }).map((_, dayIndex) => {
                  const currentDay = addDays(startOfTheWeek, dayIndex);
                  return (
                    <td style={tableCellStyle} key={dayIndex}>
                      <Schedule
                        doctor_id = "2"
                        date={format(currentDay, 'yyyy-dd-MM')}
                        time={format(hour, 'HH:mm')}
                      />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calendar;
