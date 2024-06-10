import { Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Image
          src="../img/banner1.png"
          alt="배너1"
          style={{ width: "100%", height: "100%" }}
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="../img/banner2.png"
          alt="배너2"
          style={{ width: "100%", height: "100%" }}
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="../img/banner3.png"
          alt="배너3"
          style={{ width: "100%", height: "100%" }}
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
