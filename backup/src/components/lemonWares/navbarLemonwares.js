import React from "react";
import Brandlogo from "../../assets/imagesLemonware/brandlogo.png";
import Call_logo from "../../assets/iconsLemonwares/call_logo.png";
import Verticle_line from "../../assets/iconsLemonwares/verticle_line.png";
import "./lemonWares.css";

const NavbarLemonwares = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg  bg-white mb-5 pb-lg-5 py-md-3 py-2">
        <div class="container-lg d-flex justify-content-md-between fontfamily_poppins fw_600 fs_15">
          <img src={Brandlogo} alt="" className="img-fluid  "></img>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul class="d-flex justify-content-center navbar-nav  ">
              <li class="nav-item ourServices_container ">
                <a
                  class="nav-link active me-lg-5   services_decoration text-start"
                  href="#"
                >
                  Our Services
                </a>
              </li>
              <li class="nav-item pe-3">
                <a class="nav-link active" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li class="nav-item pe-3">
                <a class="nav-link active">Blog&News</a>
              </li>
              <li class="nav-item pe-lg-5">
                <a class="nav-link active">Contact </a>
              </li>
              <li class="nav-item nav_account  pe-3">
                <a class="nav-link active">Account</a>
              </li>
              <img src={Verticle_line} alt="" className="pe-4 d-lg-block d-none"></img>

              <li class="nav-item ">
                <div className="d-flex align-items-center">
                  <img
                    src={Call_logo}
                    alt=""
                    style={{ width: "20px", height: "20px" }}
                  ></img>
                  <span class="nav-link active ">+2349067322844</span>
                </div>
              </li>
            </ul>
          </div>
          <ul
            class="collapse navbar-collapse  navbar-nav fontfamily_poppins fw_600 fs_15"
            id="navbarSupportedContent"
          ></ul>
        </div>
      </nav>
    </div>
  );
};

export default NavbarLemonwares;
