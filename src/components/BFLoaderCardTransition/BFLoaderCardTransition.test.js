import React from 'react';
import { render } from '@testing-library/react';
import BFLoaderCardTransition from './BFLoaderCardTransition';

describe('<BFLoaderCardTransition />', () => {
  
  test('should render defined illustrations', () => {
    const component = render(<BFLoaderCardTransition/>);
    
    const creditCard = component.getAllByAltText('Credit card illustration');
    const stars = component.getAllByAltText('Star illustration');
    const shadow = component.getAllByAltText('Shadow illustration');
  
    expect(stars.length).toEqual(2);
    expect(shadow.length).toEqual(1);
    expect(creditCard.length).toEqual(1);
  });
})