import React from 'react';
import Projects from '../../api/projects'
import { Link } from "react-router-dom";

const ProductSidebar =({ products, addToCartProduct }) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
      }
      const SubmitHandler = (e) => {
        e.preventDefault()
      }
  
    return(
        <div className="col-lg-3 col-md-8 order-lg-1">
            <div className="wpo-shop-sidebar">
                <div className="widget widget_search">
                    <div className="search-widget">
                        <form onSubmit={SubmitHandler} className="searchform">
                            <div>
                                <input type="text" placeholder="Search..."/>
                                <button type="submit"><i className="ti-search"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="widget widget_best-seller">
                    <h3>BEST SELLERS</h3>
                    {products.length > 0 &&
                        products.slice(0,3).map((product, pitem) => (
                            <div className="wpo-best-seller-item" key={pitem}>
                                <div className="wpo-best-seller-img">
                                    <img src={product.proImg} alt="" />
                                </div>
                                <div className="wpo-best-seller-text">
                                    <h4><Link onClick={ClickHandler} to={`/product-single/${product.id}`}>{product.title}</Link></h4>
                                    <span>${product.price}</span>
                                </div>
                            </div>
                        ))}
                </div>
                <div className="widget wpo-instagram-widget">
                    <div className="widget-title">
                        <h3>Portfolio</h3>
                    </div>
                    <ul className="d-flex">
                        {Projects.slice(0,6).map((project, pitem) => (
                            <li key={pitem}><Link onClick={ClickHandler} to={`/project-single/${project.id}`}><img src={project.pimg1} alt=""/></Link></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
};
export default ProductSidebar;
