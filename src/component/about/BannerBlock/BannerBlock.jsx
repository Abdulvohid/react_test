import React from "react";
import "./BannerBlock.scss";
import BannerBlockImg from "../../../asserts/img/images/hero_bg.png";
import Arrow from "../../../asserts/img/icon/Arrow.png";
const BannerBlock = () => {
  return (
    <div className="bannerBlock__wrap">
      <div className="container">
        <div className="bannerBlock__content">
          <div className="block__img">
            <img className="banner__block__img" src={BannerBlockImg} alt="" />
            <h3 className="banner__block__titles">
              Bắt đầu kinh doanh / 3/11/2021 / Lượt xem: ...
            </h3>
            <h2 className="banner__block__disc">
              Mâu thuẫn giữa phát triển sàn TMĐT và các kênh bán khác
            </h2>
            <button className="bannerAbout__btn">
              Đọc tiếp <img className="banner__btn__icon" src={Arrow} alt="" />
            </button>
          </div>
          <div className="block__title">
            <h2 className="block__title__text">Đọc nhiều nhất</h2>
            <p className="block__title__disc">
              [DỰ ĐOÁN] 6 Xu hướng Facebook Marketing 2020
            </p>
            <p className="block__title__disc">
              Mâu thuẫn giữa phát triển sàn và Facebook <br /> | Sàn và Offline
              | Sàn và bán buồn?
            </p>
            <p className="block__title__disc">
              Làm Marketing ở Việt Nam có cần bằng Master không?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerBlock;
