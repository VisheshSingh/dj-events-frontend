import Layout from '@/components/Layout';
import Link from 'next/link';
import { API_URL } from '@/config/globals';
import EventItem from 'components/EventItem';

export default function EventsPage({ events }) {
  return (
    <Layout>
      <h1>All Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}
      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: {
      events,
      revalidate: 1,
    },
  };
}
