import React from "react";
import { StyledFullContainer } from "../GlobalStyles";
import { StyledSingleProduct } from "./SingleProduct.styles";
import Navbar from "../Components/Navbar/Navbar";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { useGetSingleProductQuery } from "../Services/Product";
import Footer from "../Components/Footer/Footer";
import { Button, Tabs } from "antd";
import {
  useCreateUserCartMutation,
  useGetUserCartQuery,
} from "../Services/Cart";
import { useSelector } from "react-redux";
import { useGetSingleUserQuery } from "../Services/Users";
import { toast } from "react-toastify";

function SingleProduct() {
  const { id } = useParams();
  const { data: singleProduct } = useGetSingleProductQuery(id);
  const { data: userDetails } = useGetSingleUserQuery();
  const { refetch: refetchUserCartData } = useGetUserCartQuery();

  const [createUserCart] = useCreateUserCartMutation();

  const authToken = useSelector((state) => state.global.token);
  // console.log(authToken, "auth tokening");

  const navigate = useNavigate();

  const submit = async () => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      const data = {
        totalPrice: singleProduct.price,
        products: [
          {
            productId: singleProduct._id,
            quantity: 1,
          },
        ],
      };

      try {
        const response = await createUserCart(data).unwrap();
        refetchUserCartData();
        // console.log(response, "responses of cart");
        toast.success(
          !response?.message && "Product added to cart successfully!"
        );
        navigate("/cart");
      } catch (error) {
        console.log(error, "erroring");
      }
    } else {
      navigate("/login");
    }
  };

  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: `Description`,
      children: `${singleProduct?.description}`,
    },
    {
      key: "2",
      label: `Additional Info`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: "3",
      label: `Reviews`,
      children: `Content of Tab Pane 3`,
    },
  ];
  return (
    <div>
      <StyledFullContainer>
        <Navbar />
        <StyledSingleProduct>
          <div className="single-product-container">
            <div className="upper-container">
              <div className="left-sidebar-container"></div>
              <div className="middle-container">
                <img src={singleProduct?.images[0]?.url} alt="" />
              </div>
              <div className="right-container">
                <div className="text">
                  <p className="bigger-head">{singleProduct?.name}</p>
                  <p className="big-text">Rs. {singleProduct?.price}</p>
                  <p className="light-big-text">{singleProduct?.description}</p>
                </div>

                <div className="btn-container">
                  <Button onClick={submit}>Add to Cart</Button>
                </div>
              </div>
            </div>
            <div className="lower-container">
              <Tabs defaultActiveKey="1" items={items} />
            </div>
            <div className="image-container">
              <div className="images">
                <img src={singleProduct?.images[0]?.url} alt="" />
              </div>
              <div className="images">
                <img src={singleProduct?.images[0]?.url} alt="" />
              </div>
            </div>
          </div>
        </StyledSingleProduct>
        <Footer />
      </StyledFullContainer>
    </div>
  );
}

export default SingleProduct;
