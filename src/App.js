import './App.css';
import { Box, ChakraProvider } from '@chakra-ui/react';
import DesktopHeader from './sections/DesktopHeader';
import Hero from './sections/Hero';
import theme from '../src/theme';
import '../src/theme/styles.css';

import Specials from './sections/Specials';
import Testimonials from './sections/Testimonials';
import About from './sections/About';
import Footer from './sections/Footer'
import MobileFixedNav from './sections/MobileFixedNav';
import StickyButton from './components/Buttons/StickyButton';


function App() {
  return (
    <>
      <ChakraProvider theme={theme} >
        <DesktopHeader />
        <MobileFixedNav />
        <Box
          as="main"
          pos="relative"
          zIndex="docked"
        >
          <Hero />
          <StickyButton />
          <Specials />
          <Testimonials />
          <About />
        </Box>
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default App;
