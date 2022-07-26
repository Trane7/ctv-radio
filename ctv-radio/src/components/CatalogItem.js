import React from 'react';
import { Link } from 'react-router-dom';
import './Catalog.css';


function CatalogItem() {  /* This is the cards for merch */
  return (
    <>
        <li className='cat__item'>
            <Link className='cat__item__link'>
                <figure className='cat__item__pic-wrap'>
                    <img src='/' alt='Catalog' className="cat__item__img" />
                </figure>
                <div className='cat__item__info'>
                    <h5 className='cat__item__text'>COMING SOON!</h5>
                </div>
            </Link>
        </li>
    </>
  )
}

export default CatalogItem;

