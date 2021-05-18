import React from 'react'
import { useSelector } from 'react-redux'
import CheckoutSteps from '../components/CheckoutSteps'

const PlaceOrderScreen = () => {
    const cart = useSelector(state=> state.cart);
    return (
        <div>
            <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
            <div className="row top">
                <div className="col-2">
                    <ul>
                        <li>
                            <div className="card card-body">
                                <h2>Shipping</h2>
                                <p>
                                    <strong>Name:</strong>{cart.shippingAddress.fullName} <br/>
                                    <strong>Address:</strong>{cart.shippingAddress.address},
                                    {cart.shippingAddress.city},{cart.shippingAddress.postalCode},{cart.shippingAddress.country}
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PlaceOrderScreen
