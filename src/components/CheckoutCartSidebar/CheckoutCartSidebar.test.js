import { render } from '@testing-library/react';
import { AppContext } from 'context/provider';
import { BrowserRouter } from 'react-router-dom';
import CheckoutCartSidebar from './CheckoutCartSidebar';

test('init', () => {
  const genericStrings = jest.fn();
  render(
    <AppContext.Provider value={{genericStrings}}>
      <BrowserRouter>
        <CheckoutCartSidebar />
      </BrowserRouter>
    </AppContext.Provider>
  );
});