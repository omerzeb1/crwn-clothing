import React from 'react';
import './header.style.scss';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {auth} from '../../firebase/firebase.util';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {selectCartHidden} from '../../redux/cart/cart.selector';
import {selectCurrentUser} from '../../redux/user/user.selector';

const Header =(currentUser,hidden1) => (
    <div className="header">
       
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>
            {
                currentUser ?
                <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>
                :
                <Link className="option" to="/signin">SIGN IN</Link>

            }
            <CartIcon />
        </div>
        
        {{currentUser}.currentUser.hidden1 ? null : <CartDropDown />}
        {/* {console.log({a})} */}
        {console.log({currentUser}.currentUser.hidden1)}
        {/* {console.log({currentUser})} */}
        {console.log({hidden1})}
       
    </div>

)

// const mapStateToProps = ({user:{currentUser},cart:{hidden1}}) =>
// ({
//     currentUser,
//     hidden1
// });
const mapStateToProps = createStructuredSelector({
    currentUser :selectCurrentUser,
    hidden1:selectCartHidden
});
// const mapStateToProps = state =>
// ({  //console.log(state.cart.hidden1); 
//     a:42,
//     hidden1:'true',
//     //currentUser :state.user.currentUser,
//    // hidden1: state.cart.hidden1
// });



export default connect(mapStateToProps)(Header);