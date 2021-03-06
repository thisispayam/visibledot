const INITIAL_STATE = {
    sections: [
        {
            title: 'Hats',
            imageUrl: 'https://ds393qgzrxwzn.cloudfront.net/resize/m600x500/cat1/img/images/0/9zRhcPDqGg.jpg',
            id: 1,
            linkUrl: 'shop/hats'
        },
        {
            title: 'Jackets',
            imageUrl: 'https://cdn.pixabay.com/photo/2017/08/01/15/00/blue-2566082_960_720.jpg',
            id: 2,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'Sneakers',
            imageUrl: 'https://images.pexels.com/photos/913514/pexels-photo-913514.jpeg?cs=srgb&dl=feet-footwear-jeans-913514.jpg&fm=jpg',
            id: 3,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'Womens',
            imageUrl: 'https://cdn.pixabay.com/photo/2016/06/06/17/05/model-1439909_960_720.jpg',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'Mens',
            imageUrl: 'https://images.pexels.com/photos/373899/pexels-photo-373899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
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