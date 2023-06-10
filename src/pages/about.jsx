import { Fragment } from 'react';
import Head from 'next/head';
import HeroAboutSection from '@/components/layout/HeroSection/HeroAboutSection';

function FridayAboutPage() {

  return (
    <Fragment>
      <Head>
        <title>FridayThe13th | Terms of Use</title>
        <meta 
          name='description'
          description=''
        />
      </Head>
      <HeroAboutSection 
        title='About friday the 13th fansite' 
        description='This website was built as part of a school project for Holmesglen.'
        bgImage="/backgrounds/fridaymain2.jpg"
      />
    </Fragment>
  )
}

export default FridayAboutPage;