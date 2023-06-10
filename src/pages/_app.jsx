import '@/styles/scss/main.scss'
import { Fragment, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '@/components/layout';
import * as ga from '@/lib/google-analytics';
import { useRouter } from 'next/router';

function App({ Component, pageProps }) {
  
  // Setup GA Page Views
  const router = useRouter();
  useEffect(() => {

    // Declare a function which passes the clicked URL to GA event config function
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }

    // Subscribe to the change event when component mounts
    router.events.on('routeChangeComplete', handleRouteChange)

    // Unsubscribe from change event when component unmounts.
    router.events.off('routeChangeComplete', handleRouteChange)

  }, [router.events])

  return (
    <Fragment>
      {/* GA TAGS */}
      <Script 
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics-script"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
      <Head>
        <link rel="shortcut icon" href="/images/jason-mask.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  )
}

export default App;