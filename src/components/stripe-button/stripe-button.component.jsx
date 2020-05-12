import React from 'react';
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_KQuau4SWnbWKbuvAHHtG90q000OQo7C9YC';

    const onToken = token => {
        console.log(token);
        alert("Paymen Successful")
    }


    return (
        <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shipingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is ${price} `}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}

        />

    )


}

export default StripeCheckoutButton;