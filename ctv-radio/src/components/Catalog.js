import React from 'react';
import CatalogItem from './CatalogItem';
import './Catalog.css';


function Catalog() {            /* This is the catalog itself */
  return (
    <div className='catalog'>
        <h1>COMING SOON!!</h1>
        <div className='catalog__container'>
            <div className='catalog__wrapper'>
                <ul className='catalog__items'>
                    <CatalogItem
                    src="/" 
                    text=""
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Catalog; 
