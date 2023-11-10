import { Carousel } from "flowbite-react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import slider1 from "../assets/image/Slider/slider2.jpg";
import slider2 from "../assets/image/Slider/silder1.jpg";
import slider3 from "../assets/image/Slider/slider3.jpg";
import slider4 from "../assets/image/Slider/slider4.jpg";

const Banner = () => {
  return (
    <div className="h-[500px] tex">
      <div className="h-full sm:h-full xl:h-full 2xl:h-full">
        <Carousel
          leftControl={<BsArrowLeftCircleFill size={30} color="white" />}
          rightControl={<BsArrowRightCircleFill size={30} color="white" />}
        >
          <img src={slider1} alt="..." />
          <img src={slider2} alt="..." />
          <img src={slider3} alt="..." />
          <img src={slider4} alt="..." />
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
