import React from 'react'
import logo from '../../assets/images/thebox/LOGO.png'
import thebox from '../../assets/images/thebox/TheBox.png'
import './theBox.css'

const NavbarThebox = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg pb-4">
        <div className="container-lg pb-1">
          <img src={logo} alt='logo'  className='mt-1'/>
          <img src={thebox} alt='logo'  className='mt-1 ms-2'/>
          {/* <a className="navbar-brand fw_700 fs_30 color_blue ms-3 text_italic fontfamily_work_sans
          " href="#">TheBox</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active fs_18 fw_400 color_black pe-5 fontfamily_work_sans" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active  fs_18 fw_400 color_black pe-5 fontfamily_work_sans" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active  fs_18 fw_400 color_black pe-5 fontfamily_work_sans" href="#">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active  fs_18 fw_400 color_black pe-5 fontfamily_work_sans" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link   fs_18 fw_600 color_orange pe-5 fontfamily_work_sans" href="#">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavbarThebox