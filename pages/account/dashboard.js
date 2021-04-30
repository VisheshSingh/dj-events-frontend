import Layout from 'components/Layout';
import { parseCookies } from '@/helpers/index';
import React from 'react';
import { API_URL } from 'config/globals';
import styles from '@/styles/Dashboard.module.css';
import DashboardEvent from 'components/DashboardEvent';
import { useRouter } from 'next/router';

const dashboard = ({ events, token }) => {
  const router = useRouter();

  const onDelete = async (id) => {
    if (confirm('Are you sure?')) {
      const res = await fetch(`${API_URL}/events/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
        return;
      } else {
        router.reload('/');
      }
    }
  };

  return (
    <Layout title='Dashboard'>
      <div className={styles.dash}>
        <h1>Dashboard</h1>
        <h3>My events</h3>
      </div>
      {events &&
        events.map((evt) => (
          <DashboardEvent key={evt.id} evt={evt} handleDelete={onDelete} />
        ))}
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
      token,
    },
  };
}
