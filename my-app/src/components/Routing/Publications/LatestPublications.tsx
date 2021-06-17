import { FC } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "./LatestPublications.css";
import { Publication } from "./Publication";

export const LatestPublications: FC = () => {
  return (
    <>
      <div className="Header">Latest Publications</div>
      <div>
        {" "}
        <Publication />{" "}
      </div>
      <div>
        {" "}
        <Publication />{" "}
      </div>
      <div>
        {" "}
        <Publication />{" "}
      </div>
      <a className="SeeMore" href="">
        See more publications
      </a>
    </>
  );
};
