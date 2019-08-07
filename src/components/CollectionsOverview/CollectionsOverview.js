import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../redux/shop/ShopSelectors';

import  CollectionPreview  from '../CollectionPreview/CollectionPreview';

import './CollectionsOverview.scss';

const CollectionsOverview = ({collections}) => {
    return (
        <div className="collection-overview">
            {
                collections.map(({ id, ...allTheOtherCollectionsProps }) => (
                    <CollectionPreview key={id} {...allTheOtherCollectionsProps} />
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);