import { useEffect } from "react";
import { Tooltip, IconButton } from "@mui/material";
import { FaSpotify, FaItunes, FaYoutube, FaBandcamp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export const Links: React.FC = () => {
  const spotifySocialsLink =
    "https://open.spotify.com/album/05N2MnwVWt3vRi1AUedZLG?si=p1XPz8FaQjemKnyCUy0d_A";
  const appleMusicSocialsLink =
    "https://music.apple.com/us/album/ripples-of-change/1578208512";
  const youTubeSocialsLink =
    "https://www.youtube.com/@DanielLeeMusic98/featured";
  const bandCampSocialsLink =
    "https://daniel-lee-music.bandcamp.com/album/ripples-of-change";

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  function handleSocialsClick(url: string) {
    window.open(url, "_blank", "noreferrer");
  }

  return (
    <div className="h-full w-full">
      <h4
        className="animation w-[80vw] mx-auto mt-20 text-black text-5xl font-ralewayLightItal text-center"
        data-aos="fade-left"
      >
        Throw the stone into the pond of life...
      </h4>
      <section
        className="animation flex justify-center space-x-8 m-8 z-50 text-white"
        data-aos="fade-left"
      >
        <Tooltip
          title="Find me on Spotify"
          onClick={() => handleSocialsClick(spotifySocialsLink)}
        >
          <IconButton>
            <FaSpotify color="black" size={"4.5rem"} />
          </IconButton>
        </Tooltip>
        <Tooltip
          title="Find me on iTunes"
          onClick={() => handleSocialsClick(appleMusicSocialsLink)}
        >
          <IconButton>
            <FaItunes color="black" size={"4.5rem"} />
          </IconButton>
        </Tooltip>
        <Tooltip
          title="Find me on YouTube"
          onClick={() => handleSocialsClick(youTubeSocialsLink)}
        >
          <IconButton>
            <FaYoutube color="black" size={"4.5rem"} />
          </IconButton>
        </Tooltip>
        <Tooltip
          title="Find me on BandCamp"
          onClick={() => handleSocialsClick(bandCampSocialsLink)}
        >
          <IconButton>
            <FaBandcamp color="black" size={"4.5rem"} />
          </IconButton>
        </Tooltip>
      </section>
    </div>
  );
};
