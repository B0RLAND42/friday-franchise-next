import { Fragment } from "react";
import Head from "next/head";
import ArticleDetail from "@/components/feature/articles/ArticleDetail/ArticleDetail";

const ArticleDetailPage = ({ article }) => {
  return (
    <Fragment>
      <Head>
        <title>{`Friday The 13th | ${article.category}`}</title>
        <meta 
          name="description"
          description={article.title}
        />
      </Head>
      <ArticleDetail 
        title={article.title}
        image={article.image}
        description={article.description}
        category={article.category}
        director={article.director}
        year={article.year}
      />
    </Fragment>
  )
}

// STATIC SITE DYNAMIC PATHS
export const getStaticPaths = async () => {

  // 1) Fetch API Data
  const response = await fetch(`${process.env.SERVER_NAME}/api/movies`);
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
};

// STATIC SITE GENERATION
export const getStaticProps = async (context) => {

  // 1) Fetch API Data
  const response = await fetch(`${process.env.SERVER_NAME}/api/movies`);
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