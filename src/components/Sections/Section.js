import React from "react";
import "./Section.css";

// array of objects
const data = [
  {
    lineBorderColor: { borderColor: "#F9A826" },
    circleColor: { background: "linear-gradient(90deg, #BF5AE0 0%, #A811DA 100%)"
  },
    circleIcon: "./assets/Stack.png",
    img: "./assets/Tech gif.png",
    title: {
      title: "Unleashing the strength of  ",
      span: "Technology",
    },
    desc:
      "We believe in innovation and excellence hence , our approach in the field of technology is focused to relish incredible customer experience and stabilising business models for tomorrow.",
    buttonBorderColor: { borderColor: "#BF5AE0" },
    circleShadow: { boxShadow: "0px 0px 0px 4px #F9A826" },
    spanColor: { color: "#BF5AE0 " },
  },
  {
    lineBorderColor: { borderColor: "" },
    circleColor: { background: "linear-gradient(90deg, #FFE259 0%, #FFA751 100%)" },
    circleIcon: "./assets/Bedpng.png",
    img: "./assets/Hotel gif.png",
    title: {
      title: "Making accommodations ",
      span: "easier",
    },
    desc:
      "Introducing capsule hotels in places of extreme need such as examination centres and hospitals to provide comfortable and convenient accommodation at pocket friendly prices",
    buttonBorderColor: { borderColor: "#F9A826" },
    circleShadow: { boxShadow: "0px 0px 0px 4px #F9A826" },
    spanColor: { color: "#FFE259" },
  },
  {
    lineBorderColor: { borderColor: "#F9A826" },
    circleColor: { background: "linear-gradient(90deg, #EACDA3 0%, #D6AE7B 100%)" },
    circleIcon: "./assets/Gift.png",
    img: "./assets/Packing Gif.png",
    title: {
      title: "Packaging industry for business ",
      span: "growth",
    },
    desc:
      "We provide packaging solutions to help your business flourish with boosted outreach. Ensuring the protection, containment, and communication of packaged projects is our foremost priority",
    buttonBorderColor: { borderColor: "#EACDA3" },
    circleShadow: { boxShadow: "box-shadow: 0px 0px 30px 0px #EACDA   " },
    spanColor: { color: "#D6AE7B" },
  },
  {
    lineBorderColor: { borderColor: "" },
    circleColor: { background: "linear-gradient(90deg, #F2EFD3 0%, #358D82 100%)" },
    circleIcon: "./assets/Cart.png",
    img: "./assets/Fmcg Gif.png",
    title: {
      title: "Offering the best with ",
      span: "FMCG industry",
    },
    desc:
      "Ramaera FMCG industry has commenced an extensive range of FMCG to make your days more than ordinary. We plan to offer you nothing less than the best.",
    buttonBorderColor: { borderColor: "#F2EFD3" },
    circleShadow: { boxShadow: "box-shadow: 0px 0px 30px 0px #358D82 " },
    spanColor: { color: "#358D82" },
  },
  {
    lineBorderColor: { borderColor: "" },
    circleColor: { background: "#579181" },
    circleIcon: "towepng.png",
    img: "./assets/Agri gif.png",
    title: {
      title: "Agri-business to bestow ",
      span: "Nature's Love",
    },
    desc:
      "Our Agri-business industry is established to get you fresh and organic fruits and vegetables with the blessed with the touch of nature",
    buttonBorderColor: { borderColor: "#579181" },
    circleShadow: { boxShadow: "box-shadow: 0px 0px 30px 0px #B6DEFA" },
    spanColor: { color: "#72C6EF" },
  },
  {
    lineBorderColor: { borderColor: "" },
    circleColor: { background: "linear-gradient(90deg, #9796F0 0%, #FBC7D4 100%); " },
    circleIcon: "./assets/Towepng.png",
    img: "./assets/ecomrce gif.png",
    title: {
      title: "Get all your essentials in one ",
      span: "place",
    },
    desc:
      "Ramaera Supermart is an online customer oriented marketplace to motivated to provide everything you need right at one place under the comfort of your homes.",
    buttonBorderColor: { borderColor: "#9796F0" },
    circleShadow: { boxShadow: "box-shadow: 0px 0px 30px 0px #B6DEFA;" },
    spanColor: { color: "#EFB79B" },
  },

];
const Section = () => {
  return (
    <>
      {data.map((data) => (
      <div className="section">
        <div className="line">
          <img  src="./assets/Line1.png" alt="" />
        </div>
        <div className="section-wrapper">
          <div style={data.circleColor} className="circle"></div>
          <img className="imageInCircle" src={data.circleIcon} alt="" />
          <div className="section-right">
            <img src={data.img} alt="" />
          </div>
          <div className="section-left">
            <h2>
              {data.title.title}{" "}
              <span style={data.spanColor}>{data.title.span}</span>
            </h2>
            <p>{data.desc}</p>
            <div className="btn">
              <button style={data.buttonBorderColor}>Read More</button>
              <div className="circle2"></div>
            </div>
          </div>
        </div>
        <div style={data.lineBorderColor} className="line2">
          <img  src="./assets/Line1.png" alt="" />
        </div>
      </div>
      ))}
    </>
  );
};
export default Section;
