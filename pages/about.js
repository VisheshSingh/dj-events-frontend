import React from 'react';
import { useRouter } from 'next/router';

const AboutPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>About</h1>
      <p>This app list all the major DJ & other musical events.</p>
      <p>Version: 1.0.0</p>
      <button onClick={() => router.push('/')}>Home Page</button>
    </div>
  );
};

export default AboutPage;
