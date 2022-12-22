import React from "react";
import "./Section.css";

const data = [
  {
    id: 1,
    title: "Web Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    img: "https://unsplash.com/photos/04X1Yp9hNH8",
  },
  {
    id: 2,
    title: "Mobile Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    img: "https://unsplash.com/photos/0J8thHZfosE",
  },
];

const Section = () => {
  return (
    <>
      <div className="section">
        <div className="section-left">
          <h2>Web Development</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod.
          </p>
        </div>
        <div className="section-right">
          <img src="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
        </div>
      </div>
      <div className="section">
        <div className="section-left">
          <h2>Mobile Development</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod.
          </p>
        </div>
        <div className="section-right">
          <img src="https://images.unsplash.com/photo-1661961112835-ca6f5811d2af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80" alt="" />
        </div>
      </div>
    </>
  );
};
export default Section;
