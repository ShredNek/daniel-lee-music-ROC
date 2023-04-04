import { ArtistWorkItem } from "./ArtistWorkItem";
import RipplesOfChange from "../assets/images/RipplesOfChange.jpg";
import TheMathematician from "../assets/images/Crane_Draft2.jpg";
import TheSpark from "../assets/images/Butterfly_Draft2.jpg";
import TheDrain from "../assets/images/Heart_Draft2.jpg";
import TheMagnet from "../assets/images/Elephant_Draft3_COMP.jpg";

export const Discography: React.FC = () => {
  const RipplesOfChangeSongLink = "https://youtu.be/ao3uZFejXykl";
  const TheMathematicianSongLink = "https://youtu.be/qPUfgmO7y5sl";
  const TheSparkSongLink = "https://youtu.be/0KrnPdL8MMQl";
  const TheDrainSongLink = "https://youtu.be/1CvSfxouOT4l";
  const TheMagnetSongLink = "https://youtu.be/m_p1rNwGVBkl";

  return (
    <div
      id="discography"
      className="m-auto min-h-[80vh] min-w-full bg-gradient-to-b from-black-ripple via-black-ripple to-boat-red-ripple flex flex-col"
    >
      <h2 className="mx-auto mt-[150px] text-white text-8xl font-ralewayBold">
        Discography
      </h2>
      <section className="flex m-auto my-28 flex-wrap max-w-[80vw] justify-center">
        <ArtistWorkItem
          artworkLink={RipplesOfChange}
          artworkAltText={"Hey this is the album"}
          artworkName={"Ripples Of Change"}
          artworkRelease={"My debut album, released on the 9th of Aug, 2021"}
          trackLink={RipplesOfChangeSongLink}
        />
        <ArtistWorkItem
          artworkLink={TheMathematician}
          artworkAltText={"Hey this is the mathematician"}
          artworkName={"The Mathematician"}
          artworkRelease={"Released on the 22nd of March, 2021"}
          trackLink={TheMathematicianSongLink}
        />
        <ArtistWorkItem
          artworkLink={TheSpark}
          artworkAltText={"Hey this is the spark"}
          artworkName={"The Spark"}
          artworkRelease={"Released on the 7th of May, 2021"}
          trackLink={TheSparkSongLink}
        />
        <ArtistWorkItem
          artworkLink={TheDrain}
          artworkAltText={"Hey this is the drain"}
          artworkName={"The Drain"}
          artworkRelease={"Released on the 31st of May, 2021"}
          trackLink={TheDrainSongLink}
        />
        <ArtistWorkItem
          artworkLink={TheMagnet}
          artworkAltText={"Hey this is the magnet"}
          artworkName={"The Magnet"}
          artworkRelease={"Released on the 13th of July, 2021"}
          trackLink={TheMagnetSongLink}
        />
      </section>
    </div>
  );
};
