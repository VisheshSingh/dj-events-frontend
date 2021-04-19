import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import styles from '@/styles/Layout.module.css';
import Header from './Header';
import Footer from './Footer';
import Showcase from './Showcase';

const Layout = ({ title, description, keywords, children }) => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta id='description' name={description} />
        <meta id='keywords' name={keywords} />
      </Head>
      <Header />
      {router.pathname === '/' && <Showcase />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: 'DJ Events | Find the hottest events!',
  description: 'Find all the hottest DJ & other musical events',
  keywords: 'music, dj, party, edm',
};

export default Layout;
