import '../styles/globals.css';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../component/Layout'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>

      </Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp
