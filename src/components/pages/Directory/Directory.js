import React, { Component } from 'react'
import MenuItem from '../MenuItem/MenuItem';
import './Directory.scss';
class Directory extends Component {

    constructor(props){
        super(props);
        this.state = {
            sections: [
                {
                    title: 'Hats',
                    imageUrl: 'https://ds393qgzrxwzn.cloudfront.net/resize/m600x500/cat1/img/images/0/9zRhcPDqGg.jpg',
                    id:1
                },
                {
                    title: 'Jackets',
                    imageUrl: 'https://cdn.pixabay.com/photo/2017/08/01/11/48/blue-2564660_960_720.jpg',
                    id: 2
                },
                {
                    title: 'Sneakers',
                    imageUrl: 'https://images.pexels.com/photos/913514/pexels-photo-913514.jpeg?cs=srgb&dl=feet-footwear-jeans-913514.jpg&fm=jpg',
                    id: 3
                },
                {
                    title: 'Womens',
                    imageUrl: 'https://cdn.pixabay.com/photo/2016/06/06/17/05/model-1439909_960_720.jpg',
                    size: 'large',
                    id: 4
                },
                {
                    title: 'Mens',
                    imageUrl: 'https://images.pexels.com/photos/373899/pexels-photo-373899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                    size: 'large',
                    id: 5
                }
            ]
        }
    }
    render(){
        const items = this.state.sections.map(({ id, title, imageUrl, size }) => <MenuItem key={id} title={title} imageUrl={imageUrl} id={id} size={size} />)
        return (
            
            <div className='directory-menu'>
                {items}
            </div>
        )
       
    }
}
export default Directory
