import React from "react";

const Blog = ({ blog }) => {
  return (
    <div className="card shadow m-3 p-3">
      <div className="card-header d-flex  align-items-center">
        <img className="mx-3" src={blog.img} alt="" width="60" />
        <div>
          <h6 className="green-font">{blog.name}</h6>
          <p className="m-0">{blog.date}</p>
        </div>
      </div>
      <div class="card-body">
        <h5>{blog.title}</h5>
        <p class="card-text text-secondary mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
          repellendus quae vero, ipsam cum mollitia explicabo illo nulla, dolor
          corrupti error possimus quasi, iusto blanditiis.
        </p>
      </div>
    </div>
  );
};

export default Blog;
