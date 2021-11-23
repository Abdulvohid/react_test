import React from "react";
import AboutBanner from "./banner/AboutBanner";
import BannerTab from "./bannerTab/BannerTab";
import BannerBlock from "./BannerBlock/BannerBlock";
import BannerItem from "./bannerItem/BannerItem";
import AboutBottom from "./aboutBottom/AboutBottom";
const About = () => {
  return (
    <>
      <div className="about__wrap">
        <AboutBanner />
        <BannerTab />
        <BannerBlock />
        <BannerItem />
        <AboutBottom />
      </div>
    </>
  );
};

export default About;
