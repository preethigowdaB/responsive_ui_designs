import React from "react";
import "./lemonWares.css";
import Cloudflare from "../../assets/imagesLemonware/cloudflare.png";
import Cpanel from "../../assets/imagesLemonware/cPanel_orange_RGB 1.png";
import litespeed from "../../assets/imagesLemonware/litespeed-logo 1.png";
import Wordpress from "../../assets/imagesLemonware/wordpress.png";
import Imunify from "../../assets/imagesLemonware/secured-by-Imunify360-green 1.png";
import Softaculous from "../../assets/imagesLemonware/softaculous.png";
import Support from "../../assets/iconsLemonwares/support.png";
import Ssl_certificate from "../../assets/iconsLemonwares/ssl_certificate.png";
import Uptime from "../../assets/iconsLemonwares/uptime.png";
import Web_hosting from "../../assets/iconsLemonwares/web_hosting.png";

const Hosting = () => {
  return (
    <div>
      <div className="row gx-0 mt-lg-5 mt-4 pt-lg-5 pt-3">
        <div className="col-lg-5  hosting_main_section_container">
          <span className="fontfamily_inter fs_45 fw_800 fs_sm_40">
            True Cloud Web Hosting
          </span>
          <p className="fontfamily_inter fw_400 mt-lg-0 mt-4 me-lg-5 pe-lg-2">
            True Cloud Web Hosting All of the hosting packages we offer are
            deployed instantly on our SSD powered cloud. We don’t use dedicated servers that operate on single pieces of hardware.
            Our entire infrastructure is built to be reliable, secure, and
            scalable.
          </p>
        </div>
        <div className="col-lg-1"></div>

        <div className="col-lg-6 mt-4 mt-lg-0">
          <div className="row gx-0 d-lg-flex mt-lg-4 justify-content-around gap-md-3  gap-3">
            <div className="col-md-2 col-6 ps-sm-5 ps-4 ps-md-0">
              <img src={Cpanel} alt="" className="img-fluid py-2 py-md-0"></img>
            </div>
            <div className="col-md-2 col-6 ps-sm-5 ps-4 ps-md-0">
              <img src={Imunify} alt="" className="img-fluid py-2 py-md-0"></img>
            </div>
            <div className="col-md-2 col-6 ps-sm-5 ps-4  ps-md-0">
              <img src={litespeed} alt="" className="img-fluid py-2 py-md-0"></img>
            </div>
          </div>
          <div className="row gx-0 d-lg-flex mt-lg-4 justify-content-around gap-md-3 gap-3">
            <div className="col-md-2 col-6 ps-sm-5 ps-4 ps-md-0">
              <img src={Softaculous} alt="" className="img-fluid py-2 py-md-0"></img>
            </div>
            <div className="col-md-2 col-6 ps-sm-5 ps-4 ps-md-0">
              <img
                src={Wordpress}
                alt=""
                className="img-fluid py-2 py-md-0 align-item-center"
              ></img>
            </div>
            <div className="col-md-2 col-6 ps-sm-5 ps-4 ps-md-0">
              <img src={Cloudflare} alt="" className="img-fluid py-2 py-md-0"></img>
            </div>
          </div>
        </div>
      </div>

      <div className="container-md mt-lg-5 pt-lg-4 mt-5">
        <div className="row gx-0">
          <div className="col-lg-3 col-md-6 col-12 text-center  my-3 my-lg-0">
            <div class="card2 card_hosting_container px-4" style={{ width: "18rem;" }}>
              <img
                src={Uptime}
                class="mx-auto mb-3"
                alt="..."
                style={{ height: "80px", width: "80px" }}
              />
              <div class="card-body">
                <h5 class="card-title fontfamily_poppins fw_700 fs_20 pb-2">99.9% Uptime</h5>
                <p class="card-text fontfamily_poppins fw_300 fs_12">
                  We Keep Your Web build Online 24x7x365. Downtime not only
                  costs you lost visitors but also damages your reputation and
                  search engine rankings.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 text-center  my-3 my-lg-0">
            <div class="card2 card_hosting_container px-4" style={{ width: "18rem;" }}>
              <img
                src={Web_hosting}
                class="mx-auto mb-3"
                alt="..."
                style={{ height: "80px", width: "80px" }}
              />
              <div class="card-body">
                <h5 class="card-title fontfamily_poppins fw_700 fs_20 pb-2">Blazing Fast Web Hosting</h5>
                <p class="card-text fontfamily_poppins fw_300 fs_12">
                  We Keep Your Web build Online 24x7x365. Downtime not only
                  costs you lost visitors but also damages your reputation and
                  search engine rankings.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 text-center  my-3 my-lg-0">
            <div class="card2 card_hosting_container px-4" style={{ width: "18rem;" }}>
              <img
                src={Ssl_certificate}
                class="mx-auto mb-3"
                alt="..."
                style={{ height: "80px", width: "80px" }}
              />
              <div class="card-body">
                <h5 class="card-title fontfamily_poppins fw_700 fs_20 pb-2">Free SSL Certificates</h5>
                <p class="card-text fontfamily_poppins fw_300 fs_12">
                  We Keep Your Web build Online 24x7x365. Downtime not only
                  costs you lost visitors but also damages your reputation and
                  search engine rankings.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 text-center  my-3 my-lg-0">
            <div class="card2 card_hosting_container px-4 " style={{ width: "18rem;" }}>
              <img
                src={Support}
                class="mx-auto mb-3"
                alt="..."
                style={{ height: "80px", width: "80px" }}
              />
              <div class="card-body">
                <h5 class="card-title fontfamily_poppins fw_700 fs_20 pb-2">24x7 Friendly Support</h5>
                <p class="card-text fontfamily_poppins fw_300 fs_12 ">
                  We Keep Your Web build Online 24x7x365. Downtime not only
                  costs you lost visitors but also damages your reputation and
                  search engine rankings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hosting;
