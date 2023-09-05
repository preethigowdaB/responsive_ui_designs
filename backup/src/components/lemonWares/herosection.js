import React from "react";
import "./lemonWares.css";
import Hero_img from "../../assets/imagesLemonware/hero_img.png";

const HeroSection = () => {
  return (
    <div className="container ">
      <div className="row gx-0">
        <div className="col-lg-6 herosection_main_container">
          <span className="" >
            <span className="fs_15 fontfamily_poppins fw_600 hosting_decoration pt-1">
              Hosting
            </span>

            <span className="ps-3 title_decoration lh-lg">
              Domain
              <span className="ps-3 ">
                SEO<span className="ps-3 ">Email</span>{" "}
              </span>
            </span>
          </span>
          <p className="fontfamily_poppins fw_700  fs_65 lh-sm pt-3 fs_md_55 fs_md_43">
            Premium Web Hosting for Your Website
          </p>
          <p className="fontfamily_inter fw_400 light_grey_text_color lh-md mt-4 pb-lg-5 pb-3">
            Blazing fast web hosting for individuals and
            <br /> businesses of all sizes backed by 24x7x365 Support.
          </p>
          <span className="mt-4">
            <button className="red_button p-3 me-lg-3 me-2 fs_14 fontfamily_poppins fw_400">
              Create an Account
            </button>
            <button className="bg-white normal_button p-3 me-lg-3 me-2 fs_14 fontfamily_poppins fw_400 mt-lg-0 mt-3">
              Choose your plan
            </button>
          </span>
        </div>

        <div className="col-lg-6  text-lg-end text-md-center mt-3 mt-md-4 mt-lg-0">
          <img src={Hero_img} alt="" className="img-fluid"></img>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
