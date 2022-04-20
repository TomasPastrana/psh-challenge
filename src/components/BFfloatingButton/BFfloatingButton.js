import React from 'react';
import defaultImg from '../BFfloatingButton/img/betty-01.svg';
import defaultIcon from '../BFfloatingButton/img/whatsap-balloon.svg';

const BFfloatingButton = (props) => {
    const {
        className,
        imgCover = defaultImg,
        imgIcon = defaultIcon,
        imgCoverAlt = '',
        imgIconAlt = '',
        textButton,
        href,
        returnHref,
        rel,
        target,
    } = props;


    const handleClick = (href)=>{
        returnHref(href)
    }

    return (
            <a 
                href={href ? href : '#;'} 
                className={`bf-floating-button ${className ? className : ''}`}
                rel={rel ? rel : 'noreferrer'} 
                target={target ? target : '_self'}
                onClick={ 
                    ()=>{
                        if(returnHref && href){
                            handleClick(href)
                        }
                    }
                }
            >
            <div>

                {
                    textButton ?
                        <div className={'bf-floating-button__text-bar'}>
                            <span>{textButton}</span>
                        </div>
                        :
                        ''
                }
                {
                    <div className={'bf-floating-button__img--parent'}>
                        <div className={'bf-floating-button__img'}>
                            {
                                <img src={imgCover} alt={imgCoverAlt} />
                            }

                        </div>
                        <i>
                            {
                                <img src={imgIcon} alt={imgIconAlt} />
                            }
                        </i>
                    </div>
                }

            </div>
        </a>
    )
}

export default BFfloatingButton;
