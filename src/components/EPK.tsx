import React, { useState } from "react";
import { ArtistImage } from "./ArtistImage";
import { ImageModal } from "./ImageModal";
import Photo1 from "../assets/images/1.1_4.jpg";
import Photo2 from "../assets/images/1.2_4_Cropped.jpg";
import Photo3 from "../assets/images/1.3_2.jpg";
import Photo4 from "../assets/images/1.5_2.jpg";

export const EPK: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageLink, setImageLink] = useState<string>();

  function handleClick(imageLink: string) {
    console.log(isOpen);
    setImageLink(imageLink);
    setIsOpen(true);
  }

  return (
    <>
      <div
        id="epk"
        className="bg-gradient-to-b from-boat-red-ripple to-black-ripple w-full min-h-[100vh] m-auto flex flex-col"
      >
        <h2 className="w-[85%] block text-center mx-auto mt-[150px] text-white md:text-8xl text-5xl font-ralewayBold">
          Electronic Press Kit
        </h2>
        <section className="flex flex-row flex-wrap mx-auto mt-[150px] p-1 sm:p-4 bg-white-ripple max-w-[85%] h-full justify-evenly rounded-sm">
          <ArtistImage
            artistImageSource={Photo1}
            artistImageAltText={"Hi This is an image"}
            onClick={() => handleClick(Photo1)}
          />
          <ArtistImage
            artistImageSource={Photo2}
            artistImageAltText={"Hi This is an image"}
            onClick={() => handleClick(Photo2)}
          />
          <ArtistImage
            artistImageSource={Photo3}
            artistImageAltText={"Hi This is an image"}
            onClick={() => handleClick(Photo3)}
          />
          <ArtistImage
            artistImageSource={Photo4}
            artistImageAltText={"Hi This is an image"}
            onClick={() => handleClick(Photo4)}
          />
        </section>
        <div className="mt-40"></div>
      </div>
      <ImageModal
        imageLink={imageLink ? imageLink : "Unforeseen Error"}
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
      />
    </>
  );
};
