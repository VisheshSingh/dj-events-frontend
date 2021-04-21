import Layout from '@/components/Layout';
import { API_URL } from '@/config/globals';

export default function HomePage({ events }) {
  console.log({ events });
  return (
    <Layout>
      <h1>Upcoming Events</h1>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const data = await res.json();

  return {
    props: {
      events: data.slice(3),
    },
  };
}
