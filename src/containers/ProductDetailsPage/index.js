import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailsById } from "../../actions";
import Layout from "../../components/Layout";
import { IoIosArrowForward, IoIosStar, IoMdCart } from "react-icons/io";

import { AiFillThunderbolt } from "react-icons/ai";
import { MaterialButton } from "../../components/MaterialUI";
import "./style.css";
import { addToCart } from "../../actions";
import { generatePublicUrl } from "../../urlConfig";



const ProductDetailsPage = (props) => {
  const dispatch = useDispatch();
  const category = useSelector(state => state.category);
  console.log({category});
  const product = useSelector((state) => state.product);

  const renderCategories = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(
        <li key={category.name}>
          {
            category.parentId ? <a
              href={`/${category.slug}?cid=${category._id}&type=${category.type}`}>
              {category.name}
            </a> :
            <span>{category.name}</span>
          }
          {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>) : null}
        </li>
      );
    }
    return myCategories;
  }

  useEffect(() => {
    const { productId } = props.match.params;
    console.log(props);
    const payload = {
      params: {
        productId,
      },
    };
    dispatch(getProductDetailsById(payload));
  }, []);

  if (Object.keys(product.productDetails).length === 0) {
    return null;
  }
console.log(product.productDetails)
  return (
    <Layout>
      {/* <div>{product.productDetails.name}</div> */}
      
        <div className="flexRow">
          <div className="verticalImageStack">
            {product.productDetails.productPictures.map((thumb, index) => (
              <div className="thumbnail">
                <img src={generatePublicUrl(thumb.img)} alt={thumb.img} />
              </div>
            ))}
          </div>
          <div className="productDescContainer">
            <div className="productDescImgContainer">
              <img
                src={generatePublicUrl(product.productDetails.productPictures[0].img)}
                alt={`${product.productDetails.productPictures[0].img}`}
              />
            </div>

            {/* action buttons */}
            <div className="flexRow">
              <MaterialButton
                title="ADD TO CART"
                bgColor="#59B791"
                textColor="#ffffff"
                style={{
                  marginRight: "5px",
                }}
                icon={<IoMdCart />}
                onClick={() => {
                  const { _id, name, price } = product.productDetails;
                  const img = product.productDetails.productPictures[0].img;
                  dispatch(addToCart({ _id, name, price, img }));
                  props.history.push(`/cart`);
                }}
              />
              <MaterialButton
                title="BUY NOW"
                bgColor="#fb641b"
                textColor="#ffffff"
                style={{
                  marginLeft: "5px",
                }}
                icon={<AiFillThunderbolt />}
              />
            </div>
          </div>
        </div>
        <div>
          {/* home > category > subCategory > productName */}
          //{/* <div className="breed">
            <ul>
              <li>
                <a href="#">Home</a>
                <IoIosArrowForward />
              </li>
              <li>
              <a href="#">Fruits</a>
{/*              <a href="#">{category.categories[0].children[0].name}</a>
 */}                 <IoIosArrowForward />
            
              <li>
                <a href="#">Summer Fruits</a>
                <IoIosArrowForward />
              </li>
              <li>
                <a href="#">{product.productDetails.name}</a>
              </li>
            
          {/* product description */}
          <div className="productDetails">
            <p className="productTitle">{product.productDetails.name}</p>
            <div>
              <span className="ratingCount">
                4.3 <IoIosStar />
              </span>
              <span className="ratingNumbersReviews">
                10 Ratings & 57 Reviews
              </span>
            </div>
            <div className="extraOffer">
              {" "}
            </div>
            <div style={{display:"flex", flexDirection:"column"}}>
            <div className="flexRow priceContainer">
              <span className="price">
                
                <div>{product.productDetails.price} </div>
                {/* <div>{product.productDetails.quantity}</div> */}
              </span>
              <span className="discount" style={{ margin: "0 10px" }}>
                3% off
              </span>
              <br/>
              
              {/* <span>i</span> */}
            </div>
            <div>
              <p
                style={{
                  color: "#212121",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Available Offers
              </p>
              <p style={{ display: "flex" }}>
                <span
                  style={{
                    width: "100px",
                    fontSize: "12px",
                    color: "#878787",
                    fontWeight: "600",
                    marginRight: "20px",
                  }}
                >
                  Description
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    color: "#212121",
                  }}
                >
                  {product.productDetails.description}
                </span>
              </p>
              <p style={{ display: "flex" }}>
                <span
                  style={{
                    width: "100px",
                    fontSize: "12px",
                    color: "#878787",
                    fontWeight: "600",
                    marginRight: "20px",
                  }}
                >
                  Manufacture :
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    color: "#212121",
                  }}
                >
                  {product.productDetails.manufacture}
                </span> 
              </p>
              <p style={{ display: "flex" }}>
                <span
                  style={{
                    width: "100px",
                    fontSize: "12px",
                    color: "#878787",
                    fontWeight: "600",
                    marginRight: "20px",
                  }}
                >
                  Expiry date : 
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    color: "#212121",
                  }}
                >
                  {product.productDetails.expiry}
                </span>
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailsPage;
