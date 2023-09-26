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
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';


function App() {

  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFormOverlay = e => {
    switch (e.target.dataset.actionToForm) {
      case "formOpen":
        setIsFormOpen(true);
        break;
      default:
        setIsFormOpen(false);
        // reset form values from session
        sessionStorage.clear();
    }
  }

  return (
    <>
      <ChakraProvider theme={theme} >
        <Box
          pos="relative"
          zIndex="docked"
        >
          <RegularHeader
          // TODO
          // visibility={isFormOpen ? "hidden" : "visible"}
          />
          <MobileFixedNav
            handleFormOverlay={handleFormOverlay}
          />
          <Box
            as="main"
          >
            <Hero
              handleFormOverlay={handleFormOverlay}
            />
            <StickyReservationButton
              onClick={handleFormOverlay}
              data-action-to-form="formOpen"
            />
            <Specials />
            <Testimonials />
            <About />
            <AnimatePresence>
              {
                isFormOpen
                &&
                <TableReservation
                  handleFormOverlay={handleFormOverlay}
                />
              }
            </AnimatePresence>
          </Box>
        </Box>
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default App;
