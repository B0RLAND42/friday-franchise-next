import { Fragment } from 'react';
import Head from 'next/head';
import HeroSection from '@/components/layout/HeroSection/HeroSection';

function HomePage() {

  return (
    <Fragment>
      <Head>
        <title>FridayThe13th | Home</title>
        <meta 
          name='description'
          description=''
        />
      </Head>
      <HeroSection 
        title='FRIDAY THE 13TH' 
        description=''
        bgImage="/backgrounds/fridaymovies.jpg"
      />
    </Fragment>
  )
}

export default HomePage;