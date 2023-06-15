import { Fragment } from 'react';
import Head from 'next/head';
import HeroContactSection from '@/components/layout/HeroSection/HeroContactSection';

function FridayTermsPage() {

  return (
    <Fragment>
      <Head>
        <title>FridayThe13th | Contact Us</title>
        <meta 
          name='description'
          description=''
        />
      </Head>
      <HeroContactSection 
        title='contact us' 
        description=''
        bgImage="/backgrounds/fridaymain3.jpg"
      />
    </Fragment>
  )
}

export default FridayTermsPage;