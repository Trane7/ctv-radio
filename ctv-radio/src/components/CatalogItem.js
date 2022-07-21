import React from 'react';
import { Link } from 'react-router-dom';


function CatalogItem() {
  return (
    <div>
        <li className='cat__item'>
            <Link className='cat__item__link'>
                <figure className='cat__item__pic-wrap'>
                    <img src='/' alt='Catalog Image' className="cat__item__img" />
                </figure>
                <div className='cat__item__info'>
                    <h5 className='cat__item__text' />
                </div>
            </Link>
        </li>
    </div>
  )
}

export default CatalogItem;