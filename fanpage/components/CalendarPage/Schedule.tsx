import React from 'react';

interface Props {
  date: string;
  time: string;
}

const Schedule = ({ date, time } : Props) => {
  return (
    <div>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
    </div>
  );
};

export default Schedule;
