import { Breadcrumb, Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import Footer from "../../Components/Footer/Footer";
import UpperFooter from "../../Components/UpperFooter/UpperFooter";
import { StyledFullContainer } from "../../GlobalStyles";
import { StyledContact } from "./Contact.styles";
import { ImLocation } from "react-icons/im";
import { IoIosCall } from "react-icons/io";
import Navbar from "../../Components/Navbar/Navbar";

function Contact() {
  const [contactForm] = useForm();
  return (
    <div>
      <StyledFullContainer>
        <StyledContact>
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
                      Contact
                    </a>
                  ),
                },
              ]}
            />
          </div>
          <div className="contact-body">
            <div className="heading">
              <p className="medium-head">Get In Touch With Us</p>
              <p className="light-text">
                For More Information About Our Product & Services. Please Feel
                Free To Drop Us An Email. Our Staff Always Be There To Help You
                Out. Do Not Hesitate!
              </p>
            </div>
            <div className="contact-details">
              <div className="container icons">
                <div className="single-container">
                  <ImLocation className="medium-head" />
                  <div>
                    <p className="small-head">Address</p>
                    <p className="light-big-text">Lorem ipsum dolor sit amet</p>
                  </div>
                </div>
                <div className="single-container">
                  <IoIosCall className="medium-head" />
                  <div>
                    <p className="small-head">Phone</p>
                    <p className="light-big-text">Lorem ipsum dolor sit amet</p>
                  </div>
                </div>
              </div>
              <div className="container">
                <Form
                  name="check"
                  form={contactForm}
                  className="basic"
                  //    onFinish={onSubmit}
                >
                  <div className="container-one">
                    <div className="field-container">
                      <label htmlFor="name" className="big-text label">
                        Your Name
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
                        <Input size="large" />
                      </Form.Item>
                    </div>

                    <div className="field-container">
                      <label htmlFor="email" className="big-text label">
                        Email Address
                      </label>
                      <Form.Item
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: "Please input your email address!",
                          },
                        ]}
                      >
                        <Input size="large" />
                      </Form.Item>
                    </div>
                    <div className="field-container">
                      <label htmlFor="subject" className="big-text label">
                        Subject
                      </label>
                      <Form.Item
                        name="subject"
                        rules={[
                          {
                            required: true,
                            message: "Please input your subject!",
                          },
                        ]}
                      >
                        <Input size="large" />
                      </Form.Item>
                    </div>
                    <div className="field-container">
                      <label htmlFor="message" className="big-text label">
                        Message
                      </label>
                      <Form.Item
                        name="message"
                        rules={[
                          {
                            required: true,
                            message: "Please input your town!",
                          },
                        ]}
                      >
                        <TextArea />
                      </Form.Item>
                    </div>
                  </div>

                  <Button className="big-text">Submit</Button>
                </Form>
              </div>
            </div>
          </div>
        </StyledContact>
        <UpperFooter />
        <Footer />
      </StyledFullContainer>
    </div>
  );
}

export default Contact;
