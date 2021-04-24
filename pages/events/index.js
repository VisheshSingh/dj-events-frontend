import Layout from '@/components/Layout';
import Link from 'next/link';
import { API_URL } from '@/config/globals';
import EventItem from 'components/EventItem';
const PER_PAGE = 2;

export default function EventsPage({ events, page, total }) {
  const lastPage = Math.ceil(total / PER_PAGE);

  return (
    <Layout>
      <h1>All Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}
      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      {page > 1 && (
        <Link href={`/events?page=${page - 1}`}>
          <button className='btn-secondary'>Prev</button>
        </Link>
      )}

      {page < lastPage && (
        <Link href={`/events?page=${page + 1}`}>
          <button className='btn-secondary'>Next</button>
        </Link>
      )}
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
