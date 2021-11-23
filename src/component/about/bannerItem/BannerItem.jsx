import React from "react";
import "./BannerItem.scss";
import BannerItemPhoto from "../../../asserts/img/images/hero_bg.png";
const BannerItem = () => {
  const ItemText = [
    {
      img: BannerItemPhoto,
      disc: "Bắt đầu kinh doanh / 3/11/2021 / Lượt xem: ...",
      title: "Bắt đầu kinh doanh / 3/11/2021 / Lượt xem: ...",
      info: "Kinh doanh trên các sàn thương mại điện tử ngày càng phát triển...",
    },
    {
      img: BannerItemPhoto,
      disc: "Bắt đầu kinh doanh / 3/11/2021 / Lượt xem: ...",
      title: "Bắt đầu kinh doanh / 3/11/2021 / Lượt xem: ...",
      info: "Kinh doanh trên các sàn thương mại điện tử ngày càng phát triển...",
    },
    {
      img: BannerItemPhoto,
      disc: "Bắt đầu kinh doanh / 3/11/2021 / Lượt xem: ...",
      title: "Bắt đầu kinh doanh / 3/11/2021 / Lượt xem: ...",
      info: "Kinh doanh trên các sàn thương mại điện tử ngày càng phát triển...",
    },
    {
      img: BannerItemPhoto,
      disc: "Bắt đầu kinh doanh / 3/11/2021 / Lượt xem: ...",
      title: "Bắt đầu kinh doanh / 3/11/2021 / Lượt xem: ...",
      info: "Kinh doanh trên các sàn thương mại điện tử ngày càng phát triển...",
    },
    {
      img: BannerItemPhoto,
      disc: "Bắt đầu kinh doanh / 3/11/2021 / Lượt xem: ...",
      title: "Bắt đầu kinh doanh / 3/11/2021 / Lượt xem: ...",
      info: "Kinh doanh trên các sàn thương mại điện tử ngày càng phát triển...",
    },
    {
      img: BannerItemPhoto,
      disc: "Bắt đầu kinh doanh / 3/11/2021 / Lượt xem: ...",
      title: "Bắt đầu kinh doanh / 3/11/2021 / Lượt xem: ...",
      info: "Kinh doanh trên các sàn thương mại điện tử ngày càng phát triển...",
    },
    {
      img: BannerItemPhoto,
      disc: "Bắt đầu kinh doanh / 3/11/2021 / Lượt xem: ...",
      title: "Bắt đầu kinh doanh / 3/11/2021 / Lượt xem: ...",
      info: "Kinh doanh trên các sàn thương mại điện tử ngày càng phát triển...",
    },
    {
      img: BannerItemPhoto,
      disc: "Bắt đầu kinh doanh / 3/11/2021 / Lượt xem: ...",
      title: "Bắt đầu kinh doanh / 3/11/2021 / Lượt xem: ...",
      info: "Kinh doanh trên các sàn thương mại điện tử ngày càng phát triển...",
    },
  ];
  return (
    <div className="bannerItem__wrap">
      <div className="banner_container container">
        <div className="bannerItem__hero">
          {ItemText.map((item) => {
            return (
              <div className="bannerItem__item">
                <img className="banner__item__img" src={item.img} alt="" />
                <p className="banner__item__disc">{item.disc}</p>
                <h2 className="banner__item__title">{item.title}</h2>
                <p className="banner__item__info">{item.info}</p>
              </div>
            );
          })}
        </div>
        <div className="banner__sources">
          <div className="banner__item__form">
            <div className="banner__box">
              <h1 className="form__title">Đăng ký nhận bản tin</h1>
              <form className="banner__form">
                <label className="banner__check">
                  <input className="banner__form__input" type="checkbox" />
                  Marketing{" "}
                </label>
                <labe className="banner__check">
                  <input className="banner__form__input" type="checkbox" />
                  Marketing{" "}
                </labe>
                <label className="banner__check">
                  <input className="banner__form__input" type="checkbox" />
                  Sale{" "}
                </label>
                <label className="banner__check">
                  <input className="banner__form__input" type="checkbox" />
                  Sale{" "}
                </label>
              </form>
              <form>
                <label className="banner__label">
                  <input
                    className="banner__input__form"
                    type="text"
                    name="name"
                    placeholder="Địa chỉ Email"
                  />
                  <button className="form__btn">Đăng ký </button>
                </label>
              </form>{" "}
            </div>
          </div>
          <div className="banner__subtitle">
            <h2 className="banner__subtitle__text">Banner quảng cáo</h2>
          </div>
          <div className="banner__ul__title">
            <h2 className="banner__ul__subtitle">Bài viết nổi bật</h2>
            <ul>
              <li className="banner__ulTitle__li">
                Làm Marketing ở Việt Nam có cần bằng Master không?
              </li>
              <li className="banner__ulTitle__li">
                Làm Marketing ở Việt Nam có cần bằng Master không?
              </li>
              <li className="banner__ulTitle__li">
                Làm Marketing ở Việt Nam có cần bằng Master không?
              </li>
              <li className="banner__ulTitle__li">
                Làm Marketing ở Việt Nam có cần bằng Master không?
              </li>
              <li className="banner__ulTitle__li">
                Làm Marketing ở Việt Nam có cần bằng Master không?
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerItem;
