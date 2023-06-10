import { Fragment } from "react";
import Head from "next/head";
import ArticleDetailTv from "@/components/feature/articles/ArticleDetail/ArticleDetailTv";

const ArticleDetailPage = ({ article }) => {
  return (
    <Fragment>
      <Head>
        <title>{`Friday The 13th | ${article.category}`}</title>
        <meta 
          name='description'
          description={article.title}
        />
      </Head>
      <ArticleDetailTv 
        title={article.title}
        image={article.image}
        description={article.description}
        episode1={article.episode1}
        episode1detail={article.episode1detail}
        episode2={article.episode2}
        episode2detail={article.episode2detail}
        episode3={article.episode3}
        episode3detail={article.episode3detail}
        episode4={article.episode4}
        episode4detail={article.episode4detail}
        episode5={article.episode5}
        episode5detail={article.episode5detail}
        episode6={article.episode6}
        episode6detail={article.episode6detail}
        episode7={article.episode7}
        episode7detail={article.episode7detail}
        episode8={article.episode8}
        episode8detail={article.episode8detail}
        episode9={article.episode9}
        episode9detail={article.episode9detail}
        episode10={article.episode10}
        episode10detail={article.episode10detail}
        episode11={article.episode11}
        episode11detail={article.episode11detail}
        episode12={article.episode12}
        episode12detail={article.episode12detail}
        episode13={article.episode13}
        episode13detail={article.episode13detail}
        episode14={article.episode14}
        episode14detail={article.episode14detail}
        episode15={article.episode15}
        episode15detail={article.episode15detail}
        episode16={article.episode16}
        episode16detail={article.episode16detail}
        episode17={article.episode17}
        episode17detail={article.episode17detail}
        episode18={article.episode18}
        episode18detail={article.episode18detail}
        episode19={article.episode19}
        episode19detail={article.episode19detail}
        episode20={article.episode20}
        episode20detail={article.episode20detail}
        episode21={article.episode21}
        episode21detail={article.episode21detail}
        episode22={article.episode22}
        episode22detail={article.episode22detail}
        episode23={article.episode23}
        episode23detail={article.episode23detail}
        episode24={article.episode24}
        episode24detail={article.episode24detail}
        episode25={article.episode25}
        episode25detail={article.episode25detail}
        episode26={article.episode26}
        episode26detail={article.episode26detail}
        episodes={article.episodes}
        category={article.category}
        year={article.year}
      />
    </Fragment>
  )
}

// STATIC SITE DYNAMIC PATHS
export const getStaticPaths = async () => {

  // 1) Fetch API Data
  const response = await fetch(`${process.env.SERVER_NAME}/api/tvseries`);
  const articles = await response.json();

  // 2) Pull ALL ID's out of the articles array ONLY
  const idList = articles.map(article => article.id);

  // 3) Pre-build ALL URL paths for ALL existing ID's in array
  const paths = idList.map(id => (
    { params: { articleId: id.toString() } }
  ))

  return {
      paths,
      fallback:false
  }
}

// STATIC SITE GENERATION
export const getStaticProps = async (context) => {

  // 1) Fetch API Data
  const response = await fetch(`${process.env.SERVER_NAME}/api/tvseries`);
  const articles = await response.json();

  // 2) Store params ID value(which represents the Object data the user wants)
  const articleQuery = context.params.articleId;

  // 3) Filter articles array to match & return ONLY article passed as URL slug
  const articleMatch = articles.filter(
    article => article.id.toString() === articleQuery
  )

  return {
    props: {
      article: articleMatch[0]
    },
  };
};

export default ArticleDetailPage