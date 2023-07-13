import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useSignUpMutation } from "../../Services/Auth";
import { setToken } from "../../Store/Slice";
import { StyledRegister } from "./Register.styles";

function Register() {
  const [registerForm] = useForm();

  const [signUp] = useSignUpMutation();

  const dispatch = useDispatch();

  const onRegisterSubmit = async (values) => {
    console.log(values, "register values");
    const data = {
      name: values.name,
      email: values.username,
      password: values.password,
    };
    console.log(data, "hey i am data to be sent");
    try {
      const response = await signUp(data).unwrap();
      console.log(response, "hey i am response");
      localStorage.setItem("accessToken", response?.token);
      dispatch(setToken(response?.token));
      toast.success(!response?.message && "Registered Successfully");
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message);
    }
    registerForm.resetFields();
  };
  return (
    <StyledRegister>
      <p className="medium-head">Register</p>
      <Form
        name="register"
        form={registerForm}
        onFinish={onRegisterSubmit}
        className="basic"
      >
        <div className="field-container">
          <label htmlFor="name" className="big-text">
            Name
          </label>
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="field-container">
          <label htmlFor="register" className="big-text">
            Email Address
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
        <div className="field-container medium-text text">
          <p>
            A link to set a new password will be sent to your email address.
          </p>
          <p>
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our privacy policy.
          </p>
        </div>
        <div className="btn-container">
          <Button htmlType="submit big-text">Register</Button>
        </div>
      </Form>
    </StyledRegister>
  );
}

export default Register;
