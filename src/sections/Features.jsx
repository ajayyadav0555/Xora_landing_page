import React from "react";
import { Element } from "react-scroll";
import Button from "../components/Button";
import { details, features } from "../constants/index.jsx";

const Features = () => {
  return (
    <section>
      <Element name="features">
        <div className="container">
          <div className="relative flex flex-nowrap md:flex-wrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:rounded-none max-md:border-none max-md:gap-3">
            {features.map(({ id, icon, caption, title, text, button }) => (
              <div
                key={id}
                className="relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320"
              >
                <div className="w-full flex justify-start items-start">
                  <div className="flex items-center justify-center flex-col -ml-3">
                    <div className="w-0.5 h-16 bg-s3" />
                    <img
                      src={icon}
                      alt={title}
                      className="size-28 object-contain"
                    />
                  </div>
                </div>
                <p className="caption max-md:mb-6 max-md:h5">{caption}</p>
                <h2 className="max-w-400 mb-7 h3 text-p4 max-md:mb-6 max-md:h5">
                  {title}
                </h2>
                <p className="mb-11 max-md:mb-8 max-md:body-3 body-1">{text}</p>
                <Button icon={button.icon}>{button.title}</Button>
              </div>
            ))}
            <ul className="relative flex justify-around flex-grow px-[5%] max-md:hidden border-2 border-s3 rounded-7xl">
              <div className="absolute bg-s3/20 top-[38%] left-0 right-0 w-full h-[1px] z-10" />
              {details.map(({ id, icon, title }) => (
                <li key={id} className="relative pt-16 pb-14 px-4">
                  <div className="absolute top-8 bottom-0 left-1/2 bg-s3/20 w-[1px] h-full z-10" />
                  <div className="flex items-center justify-center mx-auto mb-3 border-2 border-s2 rounded-full hover:border-s4 transition-all duration-500 shadow-500 size-20">
                    <img
                      src={icon}
                      alt={title}
                      className="size-17/20 object-contain z-20"
                    />
                  </div>
                  <h3 className="relative max-w-36 text-center base-small z-2 mx-auto uppercase">{title}</h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Features;
