// GOD IS GREAT
import React from 'react';
import { useSelector } from 'react-redux';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import CartScreen from './screens/CartScreen.js';
import {useDispatch} from 'react-redux';
import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';
import SigninScreen from './screens/SigninScreen.js';
import RegisterScreen from './screens/RegisterScreen.js';
import { signout } from './actions/userActions.js';
import ShippingAddressScreen from './screens/ShippingAddressScreen.js';
import PaymentMethodScreen from './screens/PaymentMethodScreen.js';

function App() {
  const cart= useSelector(state => state.cart);
  const {cartItems} = cart;
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const {userInfo} = userSignin;
  const signoutHandler = () => {
      dispatch(signout());
  }
  return (
    <BrowserRouter>
    <div className="grid-container"> 
    <header className="row">
      <div>
        <Link className="brand" to="/">amazona</Link>
      </div>
      <div>
        <Link to="/cart">Cart
        {cartItems.length>0 && 
        <span className="badge">{cartItems.length}
        </span>}
        </Link>
        {
          userInfo? (
            <div className="dropdown">
            <Link to="#">{userInfo.name}<i className="fa fa-caret-down"></i></Link>
           <ul className="dropdown-content">
              <Link to="#signout" onClick={signoutHandler}>Sign Out</Link>
           </ul>
           </div>
             
          ):
          (
            <Link to="/signin">Sign In</Link>
          )
        }
        
      </div>
    </header>
    <main>
    <Route path="/cart/:id?" component={CartScreen}></Route>

    <Route path="/product/:id" component={ProductScreen}></Route>
    <Route path="/signin" component={SigninScreen}></Route>
    <Route path="/register" component={RegisterScreen}></Route>
    <Route path="/shipping" component={ShippingAddressScreen}></Route>
    <Route path="/payment" component={PaymentMethodScreen}></Route>   
    <Route path="/" component={HomeScreen} exact></Route>
    </main>
    <footer className="row center">All rights reserved</footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
