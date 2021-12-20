import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/header';
import SearchResults from '../components/searchResults';
import { apiKey, contextKey } from '../keys';
import searchMock from '../response';

export default function Search({ results }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      {/* Header */}
      <Header />

      {/* Search Results */}
      <SearchResults results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const dummyData = false;
  const startIndex = context.query.start || '0';

  const data = dummyData
    ? searchMock
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${contextKey}&q=${context.query.term}&start=${startIndex}`
      ).then((res) => res.json());
  return {
    props: {
      results: data,
    },
  };
}
