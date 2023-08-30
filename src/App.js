import './App.css';
import { Box, ChakraProvider } from '@chakra-ui/react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import theme from '../src/theme';
import '../src/theme/styles.css';

import Specials from './sections/Specials';
import Testimonials from './sections/Testimonials';
import About from './sections/About';
import Footer from './sections/Footer'
import FooterFixedNav from './sections/FooterFixedNav';


function App() {
  return (
    <>
      <ChakraProvider theme={theme} >
        <Header />
        <Box
          as="main"
          pos="relative"
          zIndex="docked"
        >
          <Hero />
          <Specials />
          <Testimonials />
          <About />
        </Box>
        <Footer />
        <FooterFixedNav />
      </ChakraProvider>
    </>
  );
}

export default App;
