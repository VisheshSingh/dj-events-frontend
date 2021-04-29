import Layout from 'components/Layout';
import { parseCookies } from '@/helpers/index';
import React from 'react';
import { API_URL } from 'config/globals';
import styles from '@/styles/Dashboard.module.css';
import DashboardEvent from 'components/DashboardEvent';

const dashboard = ({ events }) => {
  const onDelete = (id) => console.log(id);

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
    },
  };
}
