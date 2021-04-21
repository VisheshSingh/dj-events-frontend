import React from 'react';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/globals';

const Events = ({ events }) => {
  console.log({ events });
  return (
    <Layout title='All events'>
      <h1>All events</h1>
    </Layout>
  );
};

export default Events;

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: {
      events: events,
    },
  };
}
