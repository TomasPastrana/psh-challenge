import { render } from '@testing-library/react';
import { AppContext } from 'context/provider';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

test('init', () => {
  let logout, userIsLogged, login, authSession, products, genericStrings, origin;
  logout = userIsLogged = login = authSession = products = genericStrings = origin = jest.fn();
  render(
    <AppContext.Provider value={{logout, userIsLogged, login, authSession, products, genericStrings, origin}}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </AppContext.Provider>
  );
});