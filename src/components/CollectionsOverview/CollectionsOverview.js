import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/ShopSelectors';

import  CollectionPreview  from '../CollectionPreview/CollectionPreview';

import './CollectionsOverview.scss';

const CollectionsOverview = ({collections}) => {
    return (
        <div className="collection-overview">
            {
                collections.map(({ id, ...allTheOtherCollectionProps }) => (
                    <CollectionPreview key={id} {...allTheOtherCollectionProps} />
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);