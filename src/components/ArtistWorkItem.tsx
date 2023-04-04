import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Artwork {
  artworkLink: string;
  artworkAltText: string;
  artworkName: string;
  artworkRelease: string;
  trackLink: string;
}

export const ArtistWorkItem: React.FC<Artwork> = ({
  artworkLink,
  artworkAltText,
  artworkName,
  artworkRelease,
  trackLink,
}: Artwork) => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  function handleTrackRedirect() {
    window.open(trackLink, "_blank", "noreferrer");
  }

  return (
    <div
      className="animation flex flex-col-reverse sm:flex-row w-[600px] m-0 "
      data-aos="fade-down"
      onClick={handleTrackRedirect}
    >
      <div className="animation flex m-8 hover:m-2 p-2 self-center transition-all ease-linear-gradient duration-700">
        <div className="h-40 w-40 hover:h-60 hover:w-60 border-2 rounded-sm border-white-ripple transition-all ease-linear-gradient duration-700">
          <img src={artworkLink} alt={artworkAltText} />
        </div>
      </div>
      <div className="flex flex-col my-auto mx-auto sm:mx-0">
        <h3 className=" text-white-ripple text-4xl font-ralewayLightItal">
          {artworkName}
        </h3>
        <div>
          <p className=" text-white-ripple text-md my-2 font-ralewayReg">
            {artworkRelease}
          </p>
        </div>
      </div>
    </div>
  );
};
