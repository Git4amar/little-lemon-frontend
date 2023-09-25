import { Box, ChakraProvider } from '@chakra-ui/react';
import './App.css';
import '../src/theme/styles.css';

import theme from '../src/theme';
import RegularHeader from './sections/RegularHeader';
import Hero from './sections/Hero';
import Specials from './sections/Specials';
import Testimonials from './sections/Testimonials';
import About from './sections/About';
import Footer from './sections/Footer'
import MobileFixedNav from './sections/MobileFixedNav';
import StickyReservationButton from './components/Buttons/StickyReservationButton';
import TableReservation from './sections/TableReservation.js';


function App() {

  return (
    <>
      <ChakraProvider theme={theme} >
        <RegularHeader />
        <MobileFixedNav />
        <Box
          as="main"
          pos="relative"
          zIndex="docked"
        >
          <Hero />
          <StickyReservationButton />
          <Specials />
          <Testimonials />
          <About />
          <TableReservation />
        </Box>
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default App;
