import { useEffect } from "react";
import backgroundVid from "../assets/videos/VisualiserEdited_D1.mov";
import AOS from "aos";
import "aos/dist/aos.css";

export const Visualiser: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div id="visualiser" className="min-h-[60%]">
      <div className="w-full h-[100vh] min-h-screen">
        <div className="bg-gradient-to-b from-[rgb(0,0,0,0.2)] via-[rgb(0,0,0,0.4)] to-black absolute h-[100vh] w-full flex-col">
          <h2
            className="animation absolute w-[70vw] mx-auto top-[52%] left-0 right-0 text-white text-5xl sm:text-7xl font-ralewayReg text-center"
            data-aos="fade-up"
          >
            New album,
            <i className=" content font-ralewayBoldItal"> Ripples of Change</i>,
            out now
          </h2>
        </div>
        <div className="w-full h-[100vh]">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover flex"
          >
            <source src={backgroundVid} type="video/mp4"></source>
          </video>
        </div>
      </div>
    </div>
  );
};
