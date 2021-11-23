import React from "react";
import "./Footer.scss";
import FooterImg from "../../asserts/img/images/footer_logo.png";
import YouTube from "../../asserts/img/images/youtube.png";
import Facebook from "../../asserts/img/images/facebook.png";
import Instagram from "../../asserts/img/images/instagram.png";
import FooterLogo from "../../asserts/img/images/footerlogo.png";
import PrevBottom from "../../asserts/img/icon/prev.png";

const Footer = () => {
  return (
    <div className="footer__wrap">
      <div className="container">
        <div className="footer__hero">
          <div className="footer__content">
            <div className="footer__item">
              <h2 className="footer__text">Liên hệ</h2>
              <h3 className="footer__title">
                Công ty Cổ Phần công nghệ ECRM.VN
              </h3>
              <h4 className="footer__disc">
                Văn phòng:
                <span className="footer__span">
                  33 Nguyễn Trãi, P. Khương Trung Q. Thanh Xuân, Tp Hà Nội
                </span>
              </h4>
              <h4 className="footer__disc">
                Hotline: <span className="footer__span">0932.343.678</span>{" "}
              </h4>
              <h4 className="footer__disc">
                Email: <span className="footer__span">Cskh@nobita.pro</span>{" "}
              </h4>
              <h4 className="footer__disc">
                MST: <span className="footer__span">0109081825</span>{" "}
              </h4>
              <h4 className="footer__disc">
                Ngày cấp: <span className="footer__span">10/02/2020</span>{" "}
              </h4>
              <h4 className="footer__disc">
                Nơi cấp:{" "}
                <span className="footer__span">
                  Sở kế hoạch và đầu tư TP Hà Nội
                </span>{" "}
              </h4>

              <img className="footer__img" src={FooterImg} alt="" />
            </div>

            <div className="footer__item">
              <h2 className="footer__text">Công ty</h2>
              <h4 className="footer__disc">
                <span className="footer__span">
                  33 Nguyễn Trãi, P. Khương Trung Q. Thanh Xuân, Tp Hà Nội
                </span>
              </h4>
              <h4 className="footer__disc">
                <span className="footer__span">0932.343.678</span>{" "}
              </h4>
              <h4 className="footer__disc">
                <span className="footer__span">Cskh@nobita.pro</span>{" "}
              </h4>
              <h4 className="footer__disc">
                <span className="footer__span">0109081825</span>{" "}
              </h4>
              <h4 className="footer__disc">
                <span className="footer__span">10/02/2020</span>{" "}
              </h4>
              <h4 className="footer__disc">
                <span className="footer__span">
                  Sở kế hoạch và đầu tư TP Hà Nội
                </span>{" "}
              </h4>
            </div>

            <div className="footer__item">
              <h2 className="footer__text">Sản phẩm</h2>
              <h4 className="footer__disc">
                <span className="footer__span">
                  33 Nguyễn Trãi, P. Khương Trung Q. Thanh Xuân, Tp Hà Nội
                </span>
              </h4>
              <h4 className="footer__disc">
                <span className="footer__span">0932.343.678</span>{" "}
              </h4>
              <h4 className="footer__disc">
                <span className="footer__span">Cskh@nobita.pro</span>{" "}
              </h4>
              <h4 className="footer__disc">
                <span className="footer__span">0109081825</span>{" "}
              </h4>
              <h4 className="footer__disc">
                <span className="footer__span">10/02/2020</span>{" "}
              </h4>
              <h4 className="footer__disc">
                <span className="footer__span">
                  Sở kế hoạch và đầu tư TP Hà Nội
                </span>{" "}
              </h4>
            </div>
            <div className="footer__item">
              <h2 className="footer__text">Liên kết</h2>
              <h4 className="footer__disc">
                <span className="footer__span">
                  33 Nguyễn Trãi, P. Khương Trung Q. Thanh Xuân, Tp Hà Nội
                </span>
              </h4>
              <h4 className="footer__disc">
                <span className="footer__span">0932.343.678</span>{" "}
              </h4>
              <h4 className="footer__disc">
                <span className="footer__span">Cskh@nobita.pro</span>{" "}
              </h4>
              <h4 className="footer__disc">
                <span className="footer__span">0109081825</span>{" "}
              </h4>
              <h4 className="footer__disc">
                <span className="footer__span">10/02/2020</span>{" "}
              </h4>
              <h4 className="footer__disc">
                <span className="footer__span">
                  Sở kế hoạch và đầu tư TP Hà Nội
                </span>{" "}
              </h4>

              <div className="footer__social">
                <img src={YouTube} alt="" />
                <img src={Facebook} alt="" />
                <img src={Instagram} alt="" />
              </div>
            </div>
          </div>

          <div className="footer__bottom__logo">
            <div className="footer__bottom_title">
              <img className="footer__logo" src={FooterLogo} alt="" />
              <div className="bottom__finish">
                <h2 className="bottom__finish__title">
                  Copyright ©2021 Nobita{" "}
                </h2>
                <div class="dropdown">
                  <button class="dropbtn">
                    Tiếng Việt <img src={PrevBottom} alt="" />
                  </button>
                  <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
