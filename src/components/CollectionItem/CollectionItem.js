import React, { Fragment} from 'react';
import CustumBotton from '../CustomButton/CustomButton';
import './CollectionItem.scss';

const CollectionItem = ({items}) => {
    return(
        <Fragment>
            {items.filter((item, i) => i < 4).map((item) => (
                <div key={item.id} className='collection-item'>
                    <div className="image" style={{ backgroundImage: `url(${item.imageUrl})`}}></div>
                    <div className="collection-footer">
                        <span className="name">{item.name}</span>
                        <span className="price">{item.price}</span>
                    </div>
                    <CustumBotton inverted>Add to cart</CustumBotton>
                </div>
            ))}
        </Fragment>
    )
}

export default CollectionItem;