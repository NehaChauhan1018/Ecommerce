import React from "react";
import { GlobalStyledContainer } from "../../GlobalStyles";
import BlogCards from "./BlogCards/BlogCards";
import { StyledBlogs } from "./Blogs.styles";

function Blogs() {
  const cardDetails = [
    {
      img: "/Assets/Blog1.png",
      desc: "How to change engine oil at home?",
    },
    {
      img: "/Assets/Blog2.png",
      desc: "Guide to prolong the life of engine oil",
    },
    {
      img: "/Assets/Blog3.png",
      desc: "How to take care of engine oil?",
    },
  ];
  return (
    <StyledBlogs>
      <GlobalStyledContainer>
        <div className="blog-container">
          <p className="medium-head">Our Blogs</p>
          <p>Find a bright ideal to suit your taste with our great selection</p>
          <div className="blogs">
            {cardDetails.map((item) => {
              return <BlogCards img={item.img} desc={item.desc} />;
            })}
          </div>
        </div>
      </GlobalStyledContainer>
    </StyledBlogs>
  );
}

export default Blogs;
