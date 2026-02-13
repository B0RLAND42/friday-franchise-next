import { Fragment } from 'react';
import Head from 'next/head';
import HeroTvSection from '@/components/layout/HeroSection/HeroTvSection';
import ArticlesList from '@/components/feature/articles/ArticlesList/ArticlesList';

function FridayTvPage(props) {
  const { articles } = props; 

  return (
    <Fragment>
      <Head>
        <title>FridayThe13th | TV Series</title>
        <meta 
          name='description'
          description=''
        />
      </Head>
      <HeroTvSection 
        title='FRIDAY THE 13th' 
        description='The original series aired from 1987-1990'
        bgImage="/backgrounds/friday-tv.webp"
      />
      {/* {ausArticles.length > 0 && <ArticlesList articles={ausArticles} />} */}
      {articles.length > 0 && <ArticlesList 
        articles={articles}
      />}
    </Fragment>
  );
}

export const getStaticProps = async () => {
  const response = await fetch (`${process.env.SERVER_NAME}/api/tvseries`);
  const data = await response.json();
  console.log(data);

  return {
    props: {
      articles: data
    },
    revalidate: 60 * 60
  };
};

export default FridayTvPage;