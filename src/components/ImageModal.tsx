import React, { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";

interface ImageModalInterface {
  imageLink: string;
  isOpen: boolean;
  handleClose: () => void;
}

export const ImageModal: React.FC<ImageModalInterface> = ({
  imageLink,
  isOpen,
  handleClose,
}: ImageModalInterface) => {
  useEffect(() => console.log(isOpen), [isOpen]);

  console.log(`modal-open-${isOpen}`);

  return (
    <div className={isOpen ? "modal-open-true" : "modal-open-false"}>
      <div className="h-full w-full fixed inset-0 bg-black opacity-50 z-10" />
      <div
        className={`fixed m-auto inset-0 w-[90%] h-[90%] bg-white rounded-lg z-10`}
      >
        <button
          className="absolute top-10 right-10 text-[40px] z-20 text-gray-400"
          onClick={handleClose}
        >
          <RxCross2 />
        </button>
        <img
          src={imageLink}
          alt="an image from Daniel Lee's EPK"
          className="flex h-full w-full object-cover p-5 overflow-scroll"
        />
        <h1>{isOpen}</h1>
      </div>
    </div>
  );
};
