import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const EventPage = () => {
  const router = useRouter();
  return (
    <Layout title='Event page'>
      <h1>My Event - {router.query.slug}</h1>
    </Layout>
  );
};

export default EventPage;
