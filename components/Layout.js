import React from 'react';
import Head from 'next/head';

import styles from '../styles/Layout.module.css';

const Layout = ({ title, description, keywords, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta id='description' name={description} />
        <meta id='keywords' name={keywords} />
      </Head>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

Layout.defaultProps = {
  title: 'DJ Events | Find the hottest events!',
  description: 'Find all the hottest DJ & other musical events',
  keywords: 'music, dj, party, edm',
};

export default Layout;
