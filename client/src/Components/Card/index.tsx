import React from "react";
import "./style.scss";

interface CardProps {
  name: string;
  img: string;
  alt: string;
  description: string;
}

export default ({ name, img, alt, description }: CardProps) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
      <a
        href="/"
        className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
      >
        <div className="relative overflow-hidden">
          <img
            className="inset-0 h-full w-full object-cover"
            src={img}
            alt={alt}
          />
        </div>
        <div className="p-4">
          <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
            Highlight
          </span>
          <h4 className="mt-2 mb-2  font-bold">{name}</h4>
          <p>{description}</p>
          <div className="mt-3 flex items-center">
            <span className="text-sm font-semibold">ab</span>&nbsp;
            <span className="font-bold text-xl">45,00</span>&nbsp;
            <span className="text-sm font-semibold">€</span>
          </div>
        </div>
        <div className="p-4 border-t border-b text-xs text-gray-700">
          <span className="flex items-center mb-1">
            <i className="far fa-clock fa-fw mr-2 text-gray-900"></i> 3 Tage
          </span>
          <span className="flex items-center">
            <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
            Ermäßigung mit Karte
          </span>
        </div>
      </a>
    </div>
  );
};
