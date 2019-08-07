import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionsOverview from '../../CollectionsOverview/CollectionsOverview';

const ShopPage = ({collections}) => {
    return (
        <div className='shop-page'>      
           <CollectionsOverview />
        </div>)
}



export default ShopPage;