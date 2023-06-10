import { Fragment } from 'react';
import Head from 'next/head';
import HeroDocSection from '@/components/layout/HeroSection/HeroDocSection';
import ArticlesList from '@/components/feature/articles/ArticlesList/ArticlesList';

function FridayDocPage(props) {
  const { articles } = props; 

  return (
    <Fragment>
      <Head>
        <title>FridayThe13th | Documentaries</title>
        <meta 
          name='description'
          description=''
        />
      </Head>
      <HeroDocSection 
        title='Documentaries' 
        description='The Making of "Friday the 13th"'
        bgImage="/backgrounds/jason1.jpg"
      />
      {/* {worldArticles.length > 0 && <ArticlesList articles={worldArticles} />} */}
      {articles.length > 0 && <ArticlesList 
        articles={articles}
      />}
    </Fragment>
  );
}

// export const getStaticProps = async () => {
//   const response = await fetch (`${process.env.SERVER_NAME}/api/docs`);
//   const data = await response.json();
//   console.log(data);

//   return {
//     props: {
//       articles: data
//     },
//     revalidate: 60 * 60
//   };
// };

export default FridayDocPage;