import { render } from '@testing-library/react';
import { AppContext } from 'context/provider';
import { BrowserRouter } from 'react-router-dom';
import LoadingSpinner from './AutoLogout';

test('init', () => {
  const logout = jest.fn();
  render(
    <AppContext.Provider value={{logout, origin}}>
      <BrowserRouter>
        <LoadingSpinner />
      </BrowserRouter>
    </AppContext.Provider>
  );
});