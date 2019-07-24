import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';

import '../CollectionPreview/CollectionPreview.scss';

const CollectionPreview = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                <CollectionItem items = {items} />
            </div>
        </div>
    )
}

export default CollectionPreview;