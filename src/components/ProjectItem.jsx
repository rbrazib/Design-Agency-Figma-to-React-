import React from "react";
import Image from "./Image";
const ProjectItem = () => {
  return (
    <div className="flex justify-between flex-wrap">
      <div className="w-[700px] shadow-2xl py-12 px-6 mb-8  ">
        <div className="text-center">
          <div className="m-auto">
            <Image image="assets/project01.png" />
          </div>
          <h5 className="font-Pop  font-semibold text-2xl pt-7">
            Lorem ipsum dolor sit consectutar
          </h5>
        </div>
      </div>
      <div className="w-[700px] shadow-2xl py-12 px-6 mb-8 ">
        <div className="text-center">
          <div className="m-auto">
            <Image image="assets/project02.png" />
          </div>
          <h5 className="font-Pop  font-semibold text-2xl pt-7">
            Lorem ipsum dolor sit consectutar
          </h5>
        </div>
      </div>
      <div className="w-[700px] shadow-2xl py-12 px-6 mb-7 ">
        <div className="text-center">
          <div className="m-auto">
            <Image image="assets/project03.png" />
          </div>
          <h5 className="font-Pop  font-semibold text-2xl pt-7">
            Lorem ipsum dolor sit consectutar
          </h5>
        </div>
      </div>
      <div className="w-[700px] shadow-2xl py-12 px-6 mb-7 ">
        <div className="text-center">
          <div className="m-auto">
            <Image image="assets/project04.png" />
          </div>
          <h5 className="font-Pop  font-semibold text-2xl pt-7">
            Lorem ipsum dolor sit consectutar
          </h5>
        </div>
      </div>{" "}
      <div className="w-[700px] shadow-2xl py-12 px-6 mb-7 ">
        <div className="text-center">
          <div className="m-auto">
            <Image image="assets/project05.png" />
          </div>
          <h5 className="font-Pop  font-semibold text-2xl pt-7">
            Lorem ipsum dolor sit consectutar
          </h5>
        </div>
      </div>{" "}
      <div className="w-[700px] shadow-2xl py-12 px-6 mb-7 ">
        <div className="text-center">
          <div className="m-auto">
            <Image image="assets/project06.png" />
          </div>
          <h5 className="font-Pop  font-semibold text-2xl pt-7">
            Lorem ipsum dolor sit consectutar
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
