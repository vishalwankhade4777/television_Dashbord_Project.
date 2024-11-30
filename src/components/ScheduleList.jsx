import React from 'react';
import { Link } from 'react-router-dom';

const ScheduleList = ({ schedule }) => (
  <div className="container">
    <div className="schedule-list">
      {schedule.map((item) => (
        <div className="schedule-item" key={item.id}>
          <img src={item.show.image?.medium} alt={item.show.name} />
          <h2>{item.show.name}</h2>
          <p>
            <strong>Time:</strong> {item.airtime} | <strong>Channel:</strong> {item.show.network?.name}
          </p>
          <Link to={`/details/${item.show.id}`}>
            <button>View Details</button>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export default ScheduleList;
