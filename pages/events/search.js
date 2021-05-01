import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { API_URL } from '@/config/globals';
import EventItem from 'components/EventItem';
import qs from 'qs';
import { Router } from 'next/router';

export default function SearchPage({ events }) {
  const router = useRouter();
  return (
    <Layout>
      <Link href='/events'>Go Back</Link>
      <h1>Search results for {router.query.term}</h1>
      {events.length === 0 && <h3>No events to show</h3>}
      {events && events.map((evt) => <EventItem key={evt.id} evt={evt} />)}
    </Layout>
  );
}

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term }, // implicit AND
        { performers_contains: term }, // implicit AND
        { description_contains: term }, // implicit AND
        { venue_contains: term }, // implicit AND
      ],
    },
  });
  const res = await fetch(`${API_URL}/events?${query}`);
  const events = await res.json();

  return {
    props: {
      events,
    },
  };
}
