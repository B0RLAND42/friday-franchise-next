import { Fragment } from 'react';
import Head from 'next/head';
import HeroTermsSection from '@/components/layout/HeroSection/HeroTermsSection';

function FridayTermsPage() {

  return (
    <Fragment>
      <Head>
        <title>FridayThe13th | Terms of Use</title>
        <meta 
          name='description'
          description=''
        />
      </Head>
      <HeroTermsSection 
        title='terms of use' 
        description=''
        bgImage="/backgrounds/rsz_fridaymain.jpg"
      />
    </Fragment>
  )
}

export default FridayTermsPage;