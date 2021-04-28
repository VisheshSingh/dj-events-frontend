import Layout from 'components/Layout';
import { parseCookies } from '@/helpers/index';
import React from 'react';
import { API_URL } from 'config/globals';

const dashboard = ({ events }) => {
  return (
    <Layout title='Dashboard'>
      <h2>Dashboard</h2>
    </Layout>
  );
};

export default dashboard;

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  const res = await fetch(`${API_URL}/events/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const events = await res.json();

  return {
    props: {
      events,
    },
  };
}
