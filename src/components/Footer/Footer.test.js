import { render } from '@testing-library/react';
import { AppContext } from 'context/provider';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';

test('init', () => {
  const genericStrings = jest.fn();
  render(
    <AppContext.Provider value={{genericStrings}}>
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    </AppContext.Provider>
  );
});