import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from '../../components/SectionTitle'


const Product = ({ products, addToCartProduct }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="wpo-product-section">
      <div className="container">
          <SectionTitle MainTitle={'Special Product for You'}/>
          <div className="wpo-product-wrap">
              <div className="row">
              {products.length > 0 &&
                products.slice(0, 8).map((product, pitem) => (
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={pitem}>
                        <div className="wpo-product-item">
                            <div className="wpo-product-img">
                                <img src={product.proImg} alt="" />
                                <button
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="Add to Cart"
                                    onClick={() => addToCartProduct(product)}
                                  >
                                    <i className="fi flaticon-shopping-cart"></i>
                                </button>
                            </div>
                            <div className="wpo-product-text">
                                <h3><Link onClick={ClickHandler} to={`/product-single/${product.id}`}>{product.title}</Link></h3>
                                <span>${product.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
              </div>
          </div>
      </div>
  </section>
  );
};

export default Product;
