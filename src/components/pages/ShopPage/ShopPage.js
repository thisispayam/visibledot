import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../../CollectionPreview/CollectionPreview';

import {selectCollections} from '../../../redux/shop/ShopSelectors';

const ShopPage = ({collections}) => {
    return (
        <div className='shop-page'>  
            
            {
                collections.map(({ id, ...allTheOtherCollectionsProps}) => (
                    <CollectionPreview key={id} {...allTheOtherCollectionsProps} />
                ))
            }
        </div>)
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);