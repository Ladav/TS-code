import React from "react";

import images from "../../assets/image/index";

interface Props {
  id: number;
}

const card: React.FC<Props> = ({ id }) => {
  const rating = (Math.random() * 5) | (0 + 1);
  let ratingStars = [];
  for (let i = 1; i <= 5; i++) {
    ratingStars.push(
      <svg
        key={i}
        className={`w-3 h-3 fill-current ${
          i <= rating ? " text-teal-500" : " text-gray-300"
        }`}
        viewBox="0 -11 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M510.645 185.012c-3.88-11.934-15.426-20.133-31.684-22.496l-132.512-19.258-59.265-120.074C279.914 8.454 268.547 0 256 0s-23.914 8.453-31.184 23.188l-59.257 120.07-132.516 19.258c-16.262 2.363-27.813 10.562-31.688 22.496-3.875 11.933.649 25.355 12.415 36.82l95.89 93.465-22.64 131.98c-2.895 16.88 2.039 26.993 6.687 32.508 5.453 6.469 13.406 10.031 22.395 10.031 6.761 0 13.953-1.98 21.378-5.882L256 421.625l118.527 62.313c7.422 3.902 14.614 5.878 21.375 5.878h.004c8.985 0 16.942-3.562 22.395-10.03 4.644-5.513 9.582-15.63 6.683-32.509l-22.636-131.98 95.886-93.465c11.762-11.465 16.286-24.887 12.41-36.82zm0 0" />
      </svg>
    );
  }

  return (
    <div className="w-full max-w-lg px-12 my-8 ">
      <div className="relative pb-2/3 ">
        <img
          className="absolute w-full h-full rounded-lg shadow-md"
          src={images[id].src}
        />
      </div>
      <div className="relative w-full px-6 -mt-16">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <div className="flex items-baseline">
            <span className="inline-block px-2 text-sm font-semibold tracking-wide text-teal-800 bg-teal-200 rounded-full">
              NEW
            </span>
            <p className="ml-3 text-sm font-semibold tracking-wide text-gray-600 uppercase">
              {(Math.random() * 5) | 0} beds and {(Math.random() * 5) | 0} baths
            </p>
          </div>
          <h4 className="mt-1 text-xl font-semibold">{images[id].name}</h4>
          <p className="">
            ${(id * Math.random() * 100).toFixed(2)}
            <span className="text-sm text-gray-600"> / wk </span>
          </p>
          <p className="flex items-center mt-2">
            {ratingStars}
            <span className="ml-3 text-sm text-gray-600">
              {(id * Math.random() * 100) | 0} Review's
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default card;
