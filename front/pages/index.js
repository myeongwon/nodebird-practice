import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>프로필 | Node bird</title>
      </Head>
      <AppLayout>
        <div>Hello Next!</div>
      </AppLayout>
    </>
  );
}

export default Home;
