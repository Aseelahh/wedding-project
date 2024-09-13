import React, { Component } from "react";
import { connect } from "react-redux";
import MobileMenu from "../MobileMenu";
import { removeFromCart } from "../../store/actions/action";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import HeaderTopbar from "../HeaderTopbar";

class Header extends Component {
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
    const ClickHandler = () => {
      window.scrollTo(10, 0);
    };

    return (
      <header id="header" className={this.props.topbarBlock}>
        <HeaderTopbar />
        <div className={`wpo-site-header ${this.props.hclass}`}>
          <nav className="navigation navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                  <div className="mobail-menu">
                    <MobileMenu />
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-6">
                  <div className="navbar-header">
                    <NavLink
                      onClick={ClickHandler}
                      className="navbar-brand logo"
                      to="/home"
                    >
                      Feel
                      <span>
                        i<i className="fa fa-heart" aria-hidden="true"></i>
                      </span>
                      ngs
                    </NavLink>
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
                        <Link
                          activeClass="active"
                          to="home"
                          spy={true}
                          smooth={true}
                          duration={500}
                        >
                          Home
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <NavLink onClick={ClickHandler} to="/home">
                              Main Home
                            </NavLink>
                          </li>
                          <li>
                            <NavLink onClick={ClickHandler} to="/groom-bride">
                              Bridesmaids and Groomsmen
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link
                          activeClass="active"
                          to="couple"
                          spy={true}
                          smooth={true}
                          offset={-100}
                          duration={500}
                        >
                          Couple
                        </Link>
                      </li>
                      <li>
                        <Link
                          activeClass="active"
                          to="story"
                          spy={true}
                          smooth={true}
                          duration={500}
                        >
                          Story
                        </Link>
                      </li>
                      <li>
                        <Link
                          activeClass="active"
                          to="gallery"
                          spy={true}
                          smooth={true}
                          duration={500}
                        >
                          Gallery
                        </Link>
                      </li>
                      <li>
                        <Link
                          activeClass="active"
                          to="image-upload"
                          spy={true}
                          smooth={true}
                          duration={500}
                        >
                          Image Upload
                        </Link>
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

export default connect(mapStateToProps, { removeFromCart })(Header);
