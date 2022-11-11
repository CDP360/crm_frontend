import React from "react";
import Weblayout from "../../assests/weblayout.jpg";
import Tick from "../../assests/check.png";
import Plus from "../../assests/plus.png";
const Blog = () => {
  return (
    <div className="blog-main-container">
      <div className="blog-card">
        <p className="blog-card-setup-p">
          Setup,Manage & Distribute Blog Content
        </p>
        <div className="blog-heading-img-p">
          <img className="blog-tick-img" src={Tick} alt="Tick" />
          <p className="blog-tick-p">
            Create A Funnel Or Website Page To Host Your Blog
          </p>
        </div>
        <p className="blog-post-list-p">
          <span>
            Inside the page builder add the <b>Blog Post List</b> element. Then
            choose how many blog posts you want visible on the widget, and the
            layout options: 1. Standard or 2. Compact
          </span>
        </p>
        <img className="blog-Weblayout-img" src={Weblayout} alt="" />
        <div style={{ marginRight: "25%" }} className="blog-heading-img-p">
          <img className="blog-tick-img" src={Tick} alt="Tick" />
          <p className="blog-tick-p">Start Writing A Blog Post</p>
        </div>
        <p className="blog-post-list-p">
          <span>
            Using the optmized SEO editor you can create concise, keyword-rich
            articles that are easy for readers to understand and search engines
            to index; add custom SEO options so you control which categories,
            keywords, authors, images, videos and links appear on your pages.
          </span>
        </p>
        <button className="create-blog-btn">
          <div className="create-blog-btn-div">
            <img className="blog-plus-img" src={Plus} alt="Plus" />
            <p className="blog-plus-btn-p">Create blog post</p>
          </div>
        </button>
        <div></div>
      </div>
    </div>
  );
};

export default Blog;
