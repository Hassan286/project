import React from "react";
import "./../Products/Product.css";
import Black from "./../../Assets/black.png";
import Star from "./../../Assets/Star.png";
import icon from "./../../Assets/msg.png";
import grey from "./../../Assets/color.png";
import yellow from "./../../Assets/color1.png";
import pink from "./../../Assets/color2.png";
import red from "./../../Assets/color3.png";
import left from "./../../Assets/left-arrow.png";
import v1 from "./../../Assets/v1.png";
import v2 from "./../../Assets/v2.png";
import v3 from "./../../Assets/v3.png";
import v4 from "./../../Assets/v4.png";
import Video from "./../../Assets/video.png";
import { Link } from "react-router-dom";


function Product() {
  return (
    <>
      <div className="product-container">
        <div className="product-content-left">
          <div className="img-vertical-container">
            <div className="vertical-side">
              <img src={v1} />
              <img src={v2} />
              <img src={v4} />
              <img src={v3} />
            </div>

            <img src={Black} />
          </div>
          <div className="product-description">
            <div className="product-vertical-line"></div>
            <h2 className="product-header">Product Description</h2>
            <div className="product-title">
              <h3>Description</h3>
              <h3>User comments</h3>
              <h3>Question & Answer</h3>
            </div>
            <div className="product-para">
              100% Bio-washed Cotton – makes the fabric extra soft & silky.
              Flexible ribbed crew neck. Precisely stitched with no pilling & no
              fading. Provide all-time comfort. Anytime, anywhere. Infinite
              range of matte-finish HD prints.
            </div>
            <div className="product-fabric">
              <div className="fabric-content-1">
                <div className="fabric-btn">
                  <p>Fabric</p>
                  <h3>Bio-washed Cotton</h3>
                </div>
                <div className="fabric-btn">
                  <p>Pattern</p>
                  <h3>Printed</h3>
                </div>
                <div className="fabric-btn">
                  <p>Fit</p>
                  <h3>Regular-fit</h3>
                </div>
              </div>
              <div className="fabric-content-2">
                <div className="fabric-btn">
                  <p>Neck</p>
                  <h3>Round Neck</h3>
                </div>
                <div className="fabric-btn">
                  <p>Sleeve</p>
                  <h3>Half-sleeves</h3>
                </div>
                <div className="fabric-btn">
                  <p>Style</p>
                  <h3>Casual Wear</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-content-right">
          <div className="product-label">
            <label>Shop</label>
            <img src={left} />
            <label>Women</label>
            <img src={left} />
            <label>Top</label>
          </div>
          <h2>Raven Hoodie With Black colored Design</h2>
          <div className="product-rating">
            <img src={Star} />
            <img src={Star} />
            <img src={Star} />
            <img src={Star} />
            <img src={Star} />
            <p>3.5</p>
            <img src={icon} />
            <p>120 comment</p>
          </div>

          <div className="size-container">
            <div className="size-header">
              <p>Select Size</p>
              <p>Size Guide</p>
            </div>
            <div className="size-btn">
              <button>XS</button>
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
            </div>
          </div>
          <div className="color-container">
            <h4>Colours Available</h4>
            <div>
              <img src={grey} alt="" />
              <img src={yellow} alt="" />
              <img src={pink} alt="" />
              <img src={red} alt="" />
            </div>
          </div>
          <div className="product-btn">
          <Link to="/cart">
            <button href="">Add to cart</button>
            </Link>
            <button href="">$63.00</button>
          </div>
          <hr className="horizontal-line" />
          <div className="shipping-container">
            <div className="shipping-btn">
              <a>Secure payment</a>
              <a>Size & Fit</a>
            </div>
            <div className="shipping-btn">
              <a>Free shipping</a>
              <a>Free Shipping & Returns</a>
            </div>
          </div>
          <div className="video-container">
            <img src={Video}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
