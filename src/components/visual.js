import { Carousel } from "bootstrap";

export function Visual() {
  const banners = ["../img/banner1.png", "../img/여성구두로퍼.jpg"];
  return (
    // <Carousel ></Carousel>
    <div className="visual">
      <button className="left"> left </button>
      {banners.map((el, index) => {
        return (
          <div className="wrap">
            <img src={el} alt="배너" />
          </div>
        );
      })}
      <button className="right"> right</button>
    </div>
  );
}
