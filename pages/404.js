import React from 'react';
import Link from 'next/link';
import styles from '../styles/404.module.css';
import Layout from '../components/Layout';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <Layout title='Page not found 💩'>
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle /> 404
        </h1>
        <h4>Sorry, the page is dead</h4>
        <Link href='/'>Go back to Home</Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
