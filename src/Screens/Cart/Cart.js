import { spacing } from "@mui/system";
import { Breadcrumb, Button, Table } from "antd";
import { SpaceCompactItemContext } from "antd/es/space/Compact";
import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import UpperFooter from "../../Components/UpperFooter/UpperFooter";
import { StyledFullContainer } from "../../GlobalStyles";
import {
  useDeleteCartItemMutation,
  useGetUserCartQuery,
} from "../../Services/Cart";
import { useGetSingleUserQuery } from "../../Services/Users";
import { StyledCart } from "./Cart.styles";
import { DeleteOutlined } from "@ant-design/icons";

function Cart() {
  // const { data: userDetails } = useGetSingleUserQuery();   not in use
  // console.log(userDetails, "see users");

  const { data: cartDetails } = useGetUserCartQuery();
  const { refetch: refetchUserCartData } = useGetUserCartQuery();
  console.log(cartDetails, "cart - s - details");

  const [deleteCartItem] = useDeleteCartItemMutation();

  // const dataSource = [
  //   {
  //     key: 1,
  //     product: cartDetails?.products[0]?.productId,
  //     price: cartDetails?.totalPrice,
  //     quantity: cartDetails?.products[0]?.quantity,
  //   },
  // ];
  const columns = [
    {
      title: "Product",
      dataIndex: "productId",
      key: "product",
      render: (product, row) => {
        // console.log(product, "products cscscs cscsc scscsc scsc");
        return <img src={product?.images[0]?.url} alt="product img" />;
      },
    },
    {
      title: "Name",
      dataIndex: "productId",
      key: "name",
      render: (product, row) => {
        // console.log(product, "products cscscs cscsc scscsc scsc");
        return (
          <>
            <p>{product?.name}</p>
            <p>{product?.description}</p>
          </>
        );
      },
    },

    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      render: (quantity) => {
        // console.log(quantity, "qunatixexsds");
        return <span>{quantity}</span>;
      },
    },
    {
      title: "Price",
      dataIndex: "productId",
      key: "price",
      render: (product) => {
        return <span>{product?.price}</span>;
      },
    },
    {
      title: "Remove",
      dataIndex: "productId",
      key: "delete",
      render: (product) => {
        const finish = async () => {
          try {
            const response = await deleteCartItem(product?._id).unwrap();
            refetchUserCartData();
            console.log(response, "checking-response");
          } catch (error) {
            console.log(error);
          }
        };
        return (
          <span>
            <DeleteOutlined onClick={finish} style={{ fontSize: "40px" }} />
          </span>
        );
      },
    },
  ];
  return (
    <div>
      <StyledFullContainer>
        <StyledCart>
          <Navbar />
          <div className="upper-body">
            <img src="/Assets/Logo.png" alt="logo" />
            <p className="medium-head">Cart</p>
            <Breadcrumb
              className="Breadcrumb"
              separator=">"
              items={[
                {
                  title: "Home",
                },
                {
                  title: (
                    <a className="account" href="/account">
                      Cart
                    </a>
                  ),
                },
              ]}
            />
          </div>
          <div className="cart-body">
            <div className="list">
              <Table dataSource={cartDetails?.products} columns={columns} />
            </div>
            <div className="cart-total">
              <div className="cart-total-body">
                <p className="small-head">Cart Totals</p>
                <div className="details">
                  <div className="single">
                    <p className="normal-text">Subtotal</p>
                    <p className="normal-text">Total</p>
                  </div>
                  <div className="single">
                    <p className="light-text">Rs {cartDetails?.totalPrice}</p>
                    <p className="cost">Rs {cartDetails?.totalPrice}</p>
                  </div>
                </div>
                <Button>Check Out</Button>
              </div>
            </div>
          </div>
        </StyledCart>
        <UpperFooter />
        <Footer />
      </StyledFullContainer>
    </div>
  );
}

export default Cart;
