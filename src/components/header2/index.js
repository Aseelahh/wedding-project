import React, { Component } from "react";
import { connect } from "react-redux";
import MobileMenu2 from "../MobileMenu2";
import { removeFromCart } from "../../store/actions/action";
import { Link } from "react-router-dom";
import HeaderTopbar from "../HeaderTopbar";

class Header2 extends Component {
  state = {
    isSearchShow: false,
    isCartShow: false,
  };

  searchHandler = () => {
    this.setState({
      isSearchShow: !this.state.isSearchShow,
    });
  };
  cartHandler = () => {
    this.setState({
      isCartShow: !this.state.isCartShow,
    });
  };

  render() {
    const { isSearchShow, isCartShow } = this.state;

    const SubmitHandler = (e) => {
      e.preventDefault();
    };

    const ClickHandler = () => {
      window.scrollTo(10, 0);
    };

    const { carts } = this.props;

    return (
      <header id="header" className={this.props.topbarBlock}>
        <HeaderTopbar />
        <div className={`wpo-site-header ${this.props.hclass}`} id="home">
          <nav className="navigation navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                  <div className="mobail-menu">
                    <MobileMenu2 />
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-6">
                  <div className="navbar-header">
                    <Link
                      onClick={ClickHandler}
                      className="navbar-brand logo"
                      to="/home"
                    >
                      Ife
                      <span>
                        ego<i className="fa fa-heart" aria-hidden="true"></i>
                      </span>
                      24
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-1 col-1">
                  <div
                    id="navbar"
                    className="collapse navbar-collapse navigation-holder"
                  >
                    <button className="menu-close">
                      <i className="ti-close"></i>
                    </button>
                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                      <li className="menu-item-has-children">
                        <Link onClick={ClickHandler} to="/">
                          Home
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <Link onClick={ClickHandler} to="/home">
                              Main Home
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    carts: state.cartList.cart,
  };
};

export default connect(mapStateToProps, { removeFromCart })(Header2);
