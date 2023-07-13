import { containerClasses } from "@mui/system";
import { Breadcrumb, Button, Checkbox, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Register from "../../Components/Register/Register";
import UpperFooter from "../../Components/UpperFooter/UpperFooter";
import { StyledFullContainer } from "../../GlobalStyles";
import { useLogInMutation } from "../../Services/Auth";
import { setToken } from "../../Store/Slice";
import { StyledLogin } from "./Login.styles";

function Login() {
  // const [isLogin, setIsLogin] = useState(false);
  // const [token, setToken] = useState("");

  // const [details, setDetails] = useState("");

  const [loginForm] = useForm();
  const [logIn] = useLogInMutation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const token = useSelector((state) => state.global.token);

  console.log(token, "here comes token");

  // useEffect(() => {
  // const tokenLogin = localStorage.getItem("accessToken");
  // console.log(tokenLogin, "tokenssssss");
  //   setToken(tokenLogin);
  // }, [token]);

  const onSubmit = async (values) => {
    try {
      const data = {
        email: values.username,
        password: values.password,
      };

      console.log(values, "Login values");
      const response = await logIn(data).unwrap();
      // setDetails(response);
      localStorage.setItem("accessToken", response?.token);
      dispatch(setToken(response?.token));

      toast.success(!response?.message && "Login successfully");
      console.log(response, "responseseses");

      navigate("/shop");

      // setIsLogin(true);
    } catch (error) {
      toast.error(error?.data?.message);
      console.log(error, "errroererere");
    }

    // setIsLogin&&(navigate())

    loginForm.resetFields();
  };

  return (
    <StyledFullContainer>
      <Navbar />

      <StyledLogin>
        <div className="upper-body">
          <img src="/Assets/Logo.png" alt="logo" />
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
                  <a className="account" href="/account">
                    Account
                  </a>
                ),
              },
            ]}
          />
        </div>

        <div className="main-container">
          <div className="container">
            <p className="medium-head">Login</p>

            <Form name="login" form={loginForm} onFinish={onSubmit}>
              <div className="field-container">
                <label htmlFor="username" className="big-text">
                  Username or Email Address
                </label>
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>

              <div className="field-container">
                <label htmlFor="password" className="big-text">
                  Password
                </label>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
              </div>
              <div className="field-container">
                {/* <Form.Item
                  <Checkbox className="small-text">Remember me</Checkbox>
                </Form.Item> */}
              </div>

              <div className="button-container">
                <Button htmlType="submit big-text">Log In</Button>
                <p className="small-text light-text">Lost your password</p>
              </div>
            </Form>
          </div>

          <Register />
        </div>

        <UpperFooter />
        <Footer />
        <div></div>
      </StyledLogin>
    </StyledFullContainer>
  );
}

export default Login;
