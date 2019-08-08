import React from 'react';
import StripeCheckout from  'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_jFStsdwfNORiPYusgGbimMuO007VKdZIci';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            name="Visible Dot" // the pop-in header title
            image="http://www.visibledot.ca/assets/logo.svg"
            ComponentClass="div"
            label="Pay Now" // text inside the Stripe button
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;