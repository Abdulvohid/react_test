import React from "react";
import "./BannerTab.scss";
import { Link } from "react-router-dom";

const BannerTab = () => {
  return (
    <>
      <div className="banner__wrap">
        <div className="container">
          <div className="banner__hero">
            <Link className="banner__link banner__link__first" to="/">
              Blog
            </Link>
            <Link className="banner__link" to="/">
              Bắt đầu kinh doanh
            </Link>
            <Link className="banner__link" to="/">
              Các kênh bán hàng đa kênh
            </Link>
            <Link className="banner__link" to="/">
              Quản lý bán hàng
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default BannerTab;
