import { render } from '@testing-library/react';
import { AppContext } from 'context/provider';
import { BrowserRouter } from 'react-router-dom';
import UserSidebar from './UserSidebar';

test('init', () => {
  let logout, origin;
  logout = origin = jest.fn();
  render(
    <AppContext.Provider value={{logout, origin}}>
      <BrowserRouter>
        <UserSidebar />
      </BrowserRouter>
    </AppContext.Provider>
  );
});