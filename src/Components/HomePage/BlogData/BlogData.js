import React from "react";
import img01 from "../../../images/Ellipse 1.png";
import img02 from "../../../images/Ellipse 2.png";
import img03 from "../../../images/Ellipse 3.png";
import Blog from "../Blog/Blog";
import "./BlogData.css";
const BlogData = () => {
  const blogs = [
    {
      name: "Dr.Black",
      date: "15 May 2021",
      img: img01,
      title: "Check at least a doctor in a year for your teeth",
    },
    {
      name: "Dr.White",
      date: "15 May 2021",
      img: img02,
      title: "Two time brush in a day can keep you healthy",
    },
    {
      name: "Dr.Blue",
      date: "15 May 2021",
      img: img03,
      title: "The teeth cancer is taking a challenge",
    },
  ];
  return (
    <section className="blogs my-5">
      <div className="container">
        <div className="section-header text-center">
          <h5 className="green-font text-uppercase">our blog</h5>
          <h1>From Our Blog News</h1>
        </div>
        <div className="card-group mt-5">
          {blogs.map((blog) => (
            <Blog blog={blog}></Blog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogData;
