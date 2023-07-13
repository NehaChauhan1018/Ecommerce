import { Breadcrumb, Button, Form, Input, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import UpperFooter from "../../Components/UpperFooter/UpperFooter";
import Footer from "../../Components/Footer/Footer";
import { StyledFullContainer } from "../../GlobalStyles";
import { StyledCheckout } from "./Checkout.styles";

function Checkout() {
  const [checkoutForm] = useForm();
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div>
      <StyledFullContainer>
        <StyledCheckout>
          <Navbar />
          <div className="upper-body">
            <img src="/Assets/Logo.png" />
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
                    <a className="account" href="">
                      Checkout
                    </a>
                  ),
                },
              ]}
            />
          </div>
          <div className="checkout-body">
            <p className="medium-head"> Billing Details</p>
            <Form
              name="check"
              form={checkoutForm}
              className="basic"
              //    onFinish={onSubmit}
            >
              <div className="container-one">
                <div className="first-field-container">
                  <div className="one">
                    <label htmlFor="firstName" className="big-text label">
                      First Name
                    </label>
                    <Form.Item
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please input your first name!",
                        },
                      ]}
                    >
                      <Input size="large" />
                    </Form.Item>
                  </div>
                  <div className="two">
                    <label htmlFor="LastName" className="big-text label">
                      Last Name
                    </label>
                    <Form.Item
                      name="lastName"
                      rules={[
                        {
                          required: true,
                          message: "Please input your last name!",
                        },
                      ]}
                    >
                      <Input size="large" />
                    </Form.Item>
                  </div>
                </div>

                <div className="field-container">
                  <label htmlFor="country" className="big-text label">
                    Country/Region
                  </label>
                  <Form.Item
                    name="country"
                    rules={[
                      {
                        required: true,
                        message: "Please input your country!",
                      },
                    ]}
                  >
                    <Select
                      defaultValue="lucy"
                      style={{
                        width: 120,
                      }}
                      onChange={handleChange}
                      size="large"
                      options={[
                        {
                          value: "jack",
                          label: "Jack",
                        },
                        {
                          value: "lucy",
                          label: "Lucy",
                        },
                        {
                          value: "Yiminghe",
                          label: "yiminghe",
                        },
                        {
                          value: "disabled",
                          label: "Disabled",
                          disabled: true,
                        },
                      ]}
                    />
                  </Form.Item>
                </div>
                <div className="field-container">
                  <label htmlFor="street" className="big-text label">
                    Street address
                  </label>
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your street!",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </div>
                <div className="field-container">
                  <label htmlFor="city" className="big-text label">
                    Town/City
                  </label>
                  <Form.Item
                    name="town"
                    rules={[
                      {
                        required: true,
                        message: "Please input your town!",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </div>
                <div className="field-container">
                  <label htmlFor="phone" className="big-text label">
                    Phone Number
                  </label>
                  <Form.Item
                    name="town"
                    rules={[
                      {
                        required: true,
                        message: "Please input your number!",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </div>
              </div>

              <div className="container">
                <div className="field-container single">
                  <div className="mingle">
                    <p className="small-head">Product</p>
                    <p className="light-text">MIRAGE MR-AT172 285/65 </p>
                    <p className="normal-text">Subtotal</p>
                    <p className="normal-text">Total</p>
                  </div>
                  <div className="mingle">
                    <p className="small-head">Subtotal</p>
                    <p className="normal-text">Rs 50,000.00</p>
                    <p className="normal-text"> Rs 50,000.00</p>
                    <p className="cost">Rs 50,000.00</p>
                  </div>
                </div>
                <div className="field-container">
                  <p className="light-text">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </p>
                </div>
                <Button className="big-text">Place Order</Button>
              </div>
            </Form>
          </div>
        </StyledCheckout>
        <UpperFooter />

        <Footer />
      </StyledFullContainer>
    </div>
  );
}

export default Checkout;
