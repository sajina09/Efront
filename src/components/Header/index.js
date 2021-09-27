import React, { useEffect, useState } from "react";
import "./style.css";
import headerLogo from "../../images/logo/headerlogo.png";

import { IoIosArrowDown, IoIosCart, IoIosSearch } from "react-icons/io";
import {
  Modal,
  MaterialInput,
  MaterialButton,
  DropdownMenu,
} from "../MaterialUI";
import { useDispatch, useSelector } from "react-redux";
import { login, signout, getCartItems, signup as _signup } from "../../actions";
import Cart from "../UI/Cart";
/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  const [loginModal, setLoginModal] = useState(false);
  const [signup, setSignup] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // state cart value
  const cart = useSelector((state) => state.cart);

  const userSignup = () => {
    const user = { firstName, lastName, email, password };
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      return;
    }

    dispatch(_signup(user));
  };

  const userLogin = () => {
    if (signup) {
      userSignup();
    } else {
      dispatch(login({ email, password }));
    }
  };

  const logout = () => {
    dispatch(signout());
  };

  useEffect(() => {
    if (auth.authenticate) {
      setLoginModal(false);
    }
  }, [auth.authenticate]);

  // useEffect(() => {
  //   dispatch(getCartItems());
  // }, []);

  const renderLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={<a className="fullName">{auth.user.fullName}</a>}
        menus={[
          { label: "My Profile", href: "", icon: null },
          {
            label: "Orders",
            href: `/account/orders`,
            icon: null,
          },
          { label: "Notifications", href: "", icon: null },
          { label: "Logout", href: "", icon: null, onClick: logout },
        ]}
      />
    );
  };

  const renderNonLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={
          <a
            className="loginButton"
            onClick={() => {
              setSignup(false);
              setLoginModal(true);
            }}
          >
            Login
          </a>
        }
        menus={[
          { label: "My Profile", href: "", icon: null },
          { label: "News", href: "", icon: null },
          {
            label: "Orders",
            href: `/account/orders`,
            icon: null,
            onClick: () => {
              !auth.authenticate && setLoginModal(true);
            },
          },
          
        ]}
        firstMenu={
          <div className="firstmenu">
            <span>New Customer?</span>
            <a
              onClick={() => {
                setLoginModal(true);
                setSignup(true);
              }}
              style={{ color: "#59B791",cursor:"pointer" }}
            >
              Sign Up
            </a>
          </div>
        }
      />
    );
  };

  return (
    <div className="header">
      <Modal visible={loginModal} onClose={() => setLoginModal(false)}>
        <div className="authContainer">
          <div className="row">
            <div className="leftspace">
              <h2>Welcome</h2>
              <p>Get access to your Orders, Wishlist and Recommendations</p>
            </div>
            <div className="rightspace">
              <div className="loginInputContainer">
                {auth.error && (
                  <div style={{ color: "green", fontSize: 12 }}>{auth.error}</div>
                )}
                {signup && (
                  <MaterialInput
                    type="text"
                    label="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                )}
                {signup && (
                  <MaterialInput
                    type="text"
                    label="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                )}

                <MaterialInput
                  type="text"
                  label="Email/Mobile Number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MaterialInput
                  type="password"
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  //rightElement={<a href="#">Forgot?</a>}
                />
                <MaterialButton
                  title={signup ? "Register" : "Login"}
                  bgColor="#59B791" //login ko color
                  textColor="#ffffff"
                  style={{
                    margin: "40px 0 20px 0",
                  }}
                  onClick={userLogin}
                />
                <p style={{ textAlign: "center" }}>OR</p>
                <MaterialButton
                  title="Request OTP"
                  bgColor="#ffffff"
                  textColor="#59B791"
                  style={{
                    margin: "20px 0",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <div className="subHeader">
        {/* Logo  */}
        <div className="logo">
          <a href="http://localhost:3000">
            <img src={headerLogo} className="logoimage" alt="" />
          </a>
          <a style={{ marginTop: "-10px" }}>
          </a>
        </div>
        {/* logo ends here */}

        {/* search component */}
        <div
          style={{
            padding: "0 50px",
          }}
        >
          <div className="searchInputContainer">
            <input
              className="searchInput"
              placeholder={"search for products, brands and more"}
            />
            <div className="searchIconContainer">
              <IoIosSearch
              
                style={{
                  color: "#59B791",
                }}
              />
            </div>
          </div>
        </div>
        {/* search component ends here */}

        {/* right side menu */}
        <div className="rightMenu">
          {auth.authenticate ? renderLoggedInMenu() : renderNonLoggedInMenu()}
          <DropdownMenu
            menu={
              <a className="more">
                <span>More</span>
                
                
                <IoIosArrowDown />
              </a>
            }
            menus={[
              { label: "Notification ", href: "", icon: null },
              { label: "Sell on EAgro", href: "", icon: null },
              { label: "Advertise", href: "", icon: null },
            ]}
          />
          <div>
            <a href={`/cart`} className="cart"> 
            <Cart count={Object.keys(cart.cartItems).length} />
              <span style={{ margin: "0 10px" }}>Cart</span>
             </a>

          </div>
          <div className="call">
          <a href="tel:9861282024"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg></a>
          </div>
        </div>
        {/* right side menu ends here */}
      </div>
    </div>
  );
};

export default Header;
