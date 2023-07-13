import { Breadcrumb } from "antd";
import React from "react";
import { Outlet } from "react-router";
import { subString } from "../../Common";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import UpperFooter from "../../Components/UpperFooter/UpperFooter";
import { StyledFullContainer } from "../../GlobalStyles";
import { useGetAllProductsQuery } from "../../Services/Product";
import { StyledShop } from "./Shop.styles";
import ShopCard from "./ShopCard/ShopCard";

function Shop() {
  const { data: products } = useGetAllProductsQuery();
  console.log(products, "produxyyyyy");

  return (
    <div>
      <StyledFullContainer>
        <StyledShop>
          <Navbar />
          <div className="upper-body">
            <img src="/Assets/Logo.png" alt="" />
            <p className="medium-head">My Account</p>
            <Breadcrumb
              className="Breadcrumb"
              separator="> "
              items={[
                {
                  title: "Home",
                },
                {
                  title: (
                    <a className="account" href="/shop">
                      Shop
                    </a>
                  ),
                },
              ]}
            />
          </div>
          <div className="shop-body">
            <div className="sort-body">
              {/* <Button onClick={navigate("single-product")}>
                Go to Single Product
              </Button> */}
            </div>
            <div className="card-body">
              {products?.map((item, i) => {
                return (
                  <ShopCard
                    key={item._id}
                    id={item._id}
                    image={item.images[0]?.url}
                    name={item.name}
                    desc={subString(item.description)}
                    price={item.price}
                  />
                );
              })}
            </div>
          </div>
        </StyledShop>
        <UpperFooter />
        <Footer />
      </StyledFullContainer>
    </div>
  );
}

export default Shop;
