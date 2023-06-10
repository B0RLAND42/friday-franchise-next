import { Fragment } from 'react';
import Head from 'next/head';
import HeroMovieSection from '@/components/layout/HeroSection/HeroMovieSection';
import ArticlesList from '@/components/feature/articles/ArticlesList/ArticlesList';

function FridayMoviesPage(props) {
  const { articles } = props;

  return (
    <Fragment>
      <Head>
        <title>FridayThe13th | Movies</title>
        <meta 
          name='description'
          description=''
        />
      </Head>
      <HeroMovieSection 
        title='FILMOGRAPHY' 
        description='Browse information about all Friday The 13th movie releases'
        bgImage="/backgrounds/fridaymovies2.jpg"
      />
      {articles.length > 0 && <ArticlesList 
        articles={articles}
      />}
    </Fragment>
  )
}

export const getStaticProps = async () => {
  const response = await fetch (`${process.env.SERVER_NAME}/api/movies`);
  const data = await response.json();
  console.log(data);

  return {
    props: {
      articles: data
    },
    revalidate: 60 * 60
  };
};

export default FridayMoviesPage;