import React from 'react';
import { API_URL } from '@/config/globals';
import Layout from '@/components/Layout';

const EventPage = ({ events }) => {
  console.log({ events });
  return <Layout title='Event page'></Layout>;
};

export default EventPage;

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();
  const paths = events.map((evt) => ({ params: { slug: evt.slug } }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const event = await res.json();

  return {
    props: {
      events: event[0],
      revalidate: 1,
    },
  };
}
