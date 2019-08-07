const INITIAL_STATE = {
    sections: [
        {
            title: 'Hats',
            imageUrl: 'https://ds393qgzrxwzn.cloudfront.net/resize/m600x500/cat1/img/images/0/9zRhcPDqGg.jpg',
            id: 1,
            linkUrl: 'hats'
        },
        {
            title: 'Jackets',
            imageUrl: 'https://www.maxpixel.net/static/photo/2x/Clothing-Denim-Blue-Fashion-Jacket-2566082.jpg',
            id: 2,
            linkUrl: ''
        },
        {
            title: 'Sneakers',
            imageUrl: 'https://images.pexels.com/photos/913514/pexels-photo-913514.jpeg?cs=srgb&dl=feet-footwear-jeans-913514.jpg&fm=jpg',
            id: 3,
            linkUrl: ''
        },
        {
            title: 'Womens',
            imageUrl: 'https://cdn.pixabay.com/photo/2016/06/06/17/05/model-1439909_960_720.jpg',
            size: 'large',
            id: 4,
            linkUrl: ''
        },
        {
            title: 'Mens',
            imageUrl: 'https://images.pexels.com/photos/373899/pexels-photo-373899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            size: 'large',
            id: 5,
            linkUrl: ''
        }
    ]
};

const directoryReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;