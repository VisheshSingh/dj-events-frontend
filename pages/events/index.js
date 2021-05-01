import Layout from '@/components/Layout';
import { API_URL, PER_PAGE } from '@/config/globals';
import EventItem from 'components/EventItem';
import Pagination from 'components/Pagination';

export default function EventsPage({ events, page, total }) {
  return (
    <Layout>
      <h1>All Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}
      {events && events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      <Pagination page={page} total={total} />
    </Layout>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;

  // Total count
  const totalRes = await fetch(`${API_URL}/events/count`);
  const total = await totalRes.json();

  // Events
  const eventsRes = await fetch(
    `${API_URL}/events?_sort=date:ASC&_start=${start}&_limit=${PER_PAGE}`
  );
  const events = await eventsRes.json();

  return {
    props: {
      events,
      page: +page,
      total,
    },
  };
}
