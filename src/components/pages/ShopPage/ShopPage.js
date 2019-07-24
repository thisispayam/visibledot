import React, { Component } from 'react';
import SHOP_DATA from './ShopPage.data';
import CollectionPreview from '../../CollectionPreview/CollectionPreview';

class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            collections: SHOP_DATA
         }
    }
    render() { 
       const {collections} = this.state;
        return (
            <div className='shop-page'>  
             
                {
                    collections.map(({ id, ...allTheOtherCollectionsProps}) => (
                     <CollectionPreview key={id} {...allTheOtherCollectionsProps} />
                    ))
                }
            </div>)
    }
}
 
export default ShopPage;