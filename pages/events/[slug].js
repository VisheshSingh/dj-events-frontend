import React from 'react';
import { API_URL } from '@/config/globals';
import Layout from '@/components/Layout';
import styles from '@/styles/Event.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';

const EventPage = ({ evt }) => {
  const deleteHandler = () => {
    console.log('delete');
  };
  return (
    <Layout title={evt.name}>
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/events/edit/${evt.id}`}>
            <a>
              <FaPencilAlt /> Edit event
            </a>
          </Link>
          <a href='#' onClick={deleteHandler} className={styles.delete}>
            <FaTrash /> Delete event
          </a>
        </div>

        <span>
          {new Date(evt.date).toLocaleDateString('en-US')} at {evt.time}
        </span>
        <h1>{evt.name}</h1>

        {evt.image && (
          <div className={styles.image}>
            <Image
              src={evt.image.formats.medium.url}
              width={960}
              height={600}
            />
          </div>
        )}

        <h3>Performers:</h3>
        <p>{evt.performers}</p>

        <h3>Description:</h3>
        <p>{evt.description}</p>

        <h3>Venue: {evt.venue}</h3>
        <p>{evt.address}</p>
      </div>

      <Link href='/events'>
        <a className={styles.back}>{'<'} Go Back</a>
      </Link>
    </Layout>
  );
};

export default EventPage;

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/events`);
  const events = await res.json();
  const paths = events.map((evt) => ({ params: { slug: evt.slug } }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/events?slug=${slug}`);
  const event = await res.json();

  return {
    props: {
      evt: event[0],
      revalidate: 1,
    },
  };
}
