import React from "react";
import "./lemonWares.css";
import Curvedbtn from "../../assets/iconsLemonwares/curved_button.png";
import Ellipse from "../../assets/iconsLemonwares/Ellipse.png";
import Offer_btn from "../../assets/iconsLemonwares/offer_btn.png";
import CheckMark from "../../assets/iconsLemonwares/checkMark.png";
import Horizontal_line from "../../assets/imagesLemonware/pricing_hr_line.png";
import Horizontal_red_line from "../../assets/imagesLemonware/Hr_red_line.png";

const Pricing = () => {
  const cards = [
    { heading: "Starter", price: "$2.80" },
    { heading: "Standard", price: "$4.20" },
    { heading: "Suprem", price: "$7.00" },
  ];
  return (
    <>
      <div className="container text-center  mt-5 pt-lg-4 pt-2 mb-5">
        <span className="fontfamily_poppins fw_600  fs_50 lh-sm main_heading pb-md-2 fs_md_45 fs_sm_40">
          Ready to get started with <br />
          Lemon Wares?
        </span>
        <p className="fontfamily_poppins fw_400 fs_24 fs_sm_21 pt-lg-4 pt-3 ">
          Choose the package that suits you
        </p>
        <div className="d-sm-flex justify-content-center align-items-center gap-lg-4 gap-3  pt-lg-4 pt-3">
          <span className="fontfamily_poppins fw_400 fs_24 fs_sm_21 px-2  px-sm-0">
            Monthly
          </span>
          <span className="position-relative">
            <img
              src={Curvedbtn}
              alt="..."
              style={{ width: "72px", height: "40px" }}
            ></img>
            <img
              src={Ellipse}
              alt=""
              className="position-absolute ellipse_positioning"
              style={{ width: "25px", height: "25px" }}
            ></img>
          </span>
          <span className="fontfamily_poppins fw_400 fs_24 fs_sm_21 px-2  px-sm-0">
            Yearly
          </span>
          <span className="position-relative">
            <img
              src={Offer_btn}
              alt="..."
              style={{ width: "83px", height: "24px" }}
            ></img>
            <span className="position-absolute offer_btn_positioning fontfamily_poppins fw_500">
              20% discount
            </span>
          </span>
        </div>

        <div className="row gx-0 mt-5 mb-5">
          <div className="col-2"></div>
          <div className="col-8 d-flex justify-content-around">
            <span className="fontfamily_poppins fw_600 fs_24 package_container pt-1 pe-3 pe-sm-0">Basic</span>
            <span className="fontfamily_poppins fw_600 fs_24 package_container1 pt-1">Premium</span>
          </div>
        </div>
        
    

        <div className="row gx-0 d-flex justify-content-center gap-lg-5 pb-5">
          {cards.map((item) => (
            <div className="col-lg-3 col-md-5 col-sm-8 col-10 mx-4 mt-4 text-start">
              <div class="card card3 px-4 pt-4 pb-lg-5 pb-4">
                <span className="fontfamily_poppins fw_600 fs_25">
                  {item?.heading}
                </span>
                <p className="fontfamily_poppins fw_400 fs_12">
                  with all your customers via all
                  <br /> conversation channels in one central
                  <br /> dashboard.
                </p>
                <span className="fontfamily_poppins fw_600 fs_42 lh-xl">
                  {item?.price}
                </span>
                <p className="fontfamily_poppins fw_300 fs_13 ">Per month</p>
                <button className="plan_btn  mt-3 fs_14 fontfamily_poppins fw_600 mb-4 py-3">
                  Choose this Plan
                </button>
                <span className="align-item-center lh-lg py-1 ">
                  <img src={CheckMark} alt=""></img>
                  <span className="fontfamily_inter fw_700 ps-3 list_color">
                    2GB SSD
                  </span>
                </span>
                <span className="align-item-center lh-lg py-1">
                  <img src={CheckMark} alt=""></img>
                  <span className="fontfamily_inter fw_600 ps-3 list_color">
                    10GB Bandwidth
                  </span>
                </span>
                <span className="align-item-center lh-lg py-1">
                  <img src={CheckMark} alt=""></img>
                  <span className="fontfamily_inter fw_600 ps-3 list_color">
                    15 Email Accounts
                  </span>
                </span>
                <span className="align-item-center lh-lg py-1">
                  <img src={CheckMark} alt=""></img>
                  <span className="fontfamily_inter fw_700 ps-3 list_color">
                    Unlimited Database
                  </span>
                </span>
                <span className="align-item-center lh-lg py-1">
                  <img src={CheckMark} alt=""></img>
                  <span className="fontfamily_inter fw_600 ps-3 list_color">
                    4 Subdomains
                  </span>
                </span>
                <span className="align-item-center lh-lg py-1">
                  <img src={CheckMark} alt=""></img>
                  <span className="fontfamily_inter fw_600 ps-3 list_color">
                    1 Parked Domain
                  </span>
                </span>
                <span className="align-item-center lh-lg py-1">
                  <img src={CheckMark} alt=""></img>
                  <span className="fontfamily_inter fw_600 ps-3 list_color">
                    2 Websites
                  </span>
                </span>
                <span className="align-item-center lh-lg py-1">
                  <img src={CheckMark} alt=""></img>
                  <span className="fontfamily_inter fw_600 ps-3 list_color">
                    Free SSL
                  </span>
                </span>
                <span className="align-item-center lh-lg py-1">
                  <img src={CheckMark} alt=""></img>
                  <span className="fontfamily_inter fw_600 ps-3 list_color">
                    Softaculous
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pricing;
