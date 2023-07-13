import { Divider } from "antd";
import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { MdOutlineDateRange } from "react-icons/md";
import { StyledBlogCards } from "./BlogCards.styles";

function BlogCards({ img, desc }) {
  return (
    <StyledBlogCards>
      <div className="blogcard-container">
        <div className="img field">
          <img src={img} alt="" />
        </div>
        <div className="field">
          <p className="big-text">{desc}</p>
        </div>
        <div className="field">
          <p className="small-head">NEW</p>
          <Divider className="ant-divider" />
        </div>
        <div className="field-date ">
          <BiTimeFive />
          <p className="light-text">5 min</p>
          <MdOutlineDateRange />
          <p className="light-text">12th Oct 2023</p>
        </div>
        <div className="field"></div>
      </div>
    </StyledBlogCards>
  );
}

export default BlogCards;
