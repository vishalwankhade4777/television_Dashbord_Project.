import React, { useEffect, useState } from 'react';
import { getSchedule } from '../services/api';
import ScheduleList from '../components/ScheduleList';

const Home = () => {
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const data = await getSchedule();
        setSchedule(data);
      } catch (error) {
        console.error('Error fetching schedule:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSchedule();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Current TV Schedule</h1>
      <ScheduleList schedule={schedule} />
    </div>
  );
};

export default Home;
