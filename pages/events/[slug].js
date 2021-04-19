import React from 'react';
import { useRouter } from 'next/router';

const SingleEventPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>My Event - {router.query.slug}</h1>
    </div>
  );
};

export default SingleEventPage;
