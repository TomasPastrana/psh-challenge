import React from 'react';
import { render } from '@testing-library/react';
import BFfloatingButton from './BFfloatingButton';
import "@testing-library/jest-dom/extend-expect";

describe('<BFfloatingButton />', () => {
  let props;
  const defaultIcon = 'whatsap-balloon.svg';
  const defaultImg = 'betty-01.svg';

  beforeEach(() => {
    props = {
      textButton: 'test',
      rel: 'noreferrer',
      target: '_self',
      href: '#;'
    };
  });

  test('should render link with custom props', () => {
    const handleClick = jest.fn();

    const customProps = {
      href: 'https://wa.me/912341234',
      target: '_blank',
      textButton: '¿Necesitas ayuda?',
      className: 'test-class',
      imgCover: 'cover-test.svg',
      imgIcon: 'icon-test.svg',
      imgCoverAlt: 'Background test image',
      imgIconAlt: 'Icon test image',
      rel: 'external'
    };

    const component = render(
      <BFfloatingButton 
        textButton={customProps.textButton}
        target={customProps.target}
        href={customProps.href}
        returnHref={handleClick}
        className={customProps.className}
        rel={customProps.rel}
        imgCover={customProps.imgCover}
        imgIcon={customProps.imgIcon}
        imgCoverAlt={customProps.imgCoverAlt}
        imgIconAlt={customProps.imgIconAlt}
      />
    );

    const textSpan = component.baseElement.querySelector('span');
    const backgroundImage = component.baseElement.querySelector('div.bf-floating-button__img > img');
    const buttonIconImg = component.baseElement.querySelector('i > img');
    const anchor = component.baseElement.querySelector('a');
    anchor.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(anchor.getAttribute('href')).toEqual(customProps.href);
    expect(anchor.getAttribute('target')).toEqual(customProps.target);
    expect(anchor.getAttribute('rel')).toEqual(customProps.rel);
    expect(textSpan).toHaveTextContent(customProps.textButton);
    expect(backgroundImage.getAttribute('src')).toEqual(customProps.imgCover);
    expect(backgroundImage.getAttribute('alt')).toEqual(customProps.imgCoverAlt);
    expect(buttonIconImg.getAttribute('src')).toEqual(customProps.imgIcon);
    expect(buttonIconImg.getAttribute('alt')).toEqual(customProps.imgIconAlt);
    expect(handleClick.mock.calls.length).toEqual(1);
  });
  
  test('should render button with default values', () => {

    const handleFn = jest.fn();

    const component = render(<BFfloatingButton handleClick={handleFn}/>);

    const textSpan = component.baseElement.querySelector('span');
    const backgroundImage = component.baseElement.querySelector('div.bf-floating-button__img > img');
    const buttonIconImg = component.baseElement.querySelector('i > img');
    const anchor = component.baseElement.querySelector('a');

    expect(anchor.getAttribute('href')).toEqual(props.href);
    expect(anchor.getAttribute('target')).toEqual(props.target);
    expect(anchor.getAttribute('rel')).toEqual(props.rel);

    expect(textSpan).toBe(null);
    expect(backgroundImage.getAttribute('src')).toEqual(defaultImg);
    expect(buttonIconImg.getAttribute('src')).toEqual(defaultIcon);
    expect(handleFn).not.toHaveBeenCalled();
  });
})