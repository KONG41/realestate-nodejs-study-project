import Head from 'next/head';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import { Box } from '@chakra-ui/react';

const Layout = ({ children }) => (

  <>
    <Head>
      <title>Real Estate</title>
    </Head>
    <Box>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </Box>
  </>

);
export default Layout;