interface ArtistImageSourceAlt {
  artistImageSource: string;
  artistImageAltText: string;
  onClick: () => void;
}

export const ArtistImage: React.FC<ArtistImageSourceAlt> = ({
  artistImageSource,
  artistImageAltText,
  onClick,
}: ArtistImageSourceAlt) => {
  return (
    <div className="m-4" onClick={() => onClick()}>
      <div className="flex relative max-h-[400px] hover:max-h-[500px] transition-all duration-500 ease-in-out">
        <img
          src={artistImageSource}
          alt={artistImageAltText}
          className="object-cover"
        ></img>
        <div className="group/overlay flex hover:bg-black hover:opacity-70 transition-all duration-500 ease-in-out absolute h-full w-full top-0 left-0 ">
          <h3 className="block group-hover/overlay:text-[70px] text-[0px] text-center text-white font-ralewayThinItal m-auto transition-all duration-500 ease-in-out">
            See full image
          </h3>
        </div>
      </div>
    </div>
  );
};
