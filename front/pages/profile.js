import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';

const Profile = () => {
  return (
    <>
      <Head>
        <title>프로필 | Node bird</title>
      </Head>
      <AppLayout>내프로필 </AppLayout>
    </>
  )
};

export default Profile;
