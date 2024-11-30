import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getShowDetails } from '../services/api';
import ShowDetails from '../components/ShowDetails';

const Details = () => {
  const { id } = useParams(); // Get the show ID from the URL
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const data = await getShowDetails(id);
        setShow(data);
      } catch (error) {
        console.error('Error fetching show details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchShowDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!show) return <p>Show not found.</p>;

  return <ShowDetails show={show} />;
};

export default Details;
