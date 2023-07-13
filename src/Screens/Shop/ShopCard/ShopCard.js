import React from "react";
import { useNavigate } from "react-router";
import { StyledShopCard } from "./ShopCard.styles";

function ShopCard({ id, image, name, desc, price }) {
  const navigate = useNavigate();
  const onFinish = () => {
    navigate(`/shop/single-product/${id}`);
  };
  console.log(id, "keeeyysssssss");
  return (
    <div>
      <StyledShopCard>
        <div className="shop-card-body cursor">
          <img src={image} alt="" onClick={onFinish} />
          <p className="small-head" onClick={onFinish}>
            {name}
          </p>
          <p className="light-big-text" onClick={onFinish}>
            {desc}
          </p>
          <p className="small-head" onClick={onFinish}>
            {price}
          </p>
        </div>
      </StyledShopCard>
    </div>
  );
}

export default ShopCard;
