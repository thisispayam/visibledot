import React, { Fragment} from 'react';
import { connect } from 'react-redux';
import CustumBotton from '../CustomButton/CustomButton';
import { addItem } from '../../redux/cart/CartActions';
import './CollectionItem.scss';

const CollectionItem = ({items, addItem}) => {
    return(
        <Fragment>
            {items.filter((item, i) => i < 4).map((item) => (
                <div key={item.id} className='collection-item'>
                    <div className="image" style={{ backgroundImage: `url(${item.imageUrl})`}}></div>
                    <div className="collection-footer">
                        <span className="name">{item.name}</span>
                        <span className="price">${item.price}</span>
                    </div>
                    <CustumBotton inverted onClick={() => addItem(item)}>Add to cart</CustumBotton>
                </div>
            ))}
        </Fragment>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);