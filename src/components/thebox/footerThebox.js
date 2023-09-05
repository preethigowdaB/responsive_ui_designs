import React from 'react'
import logo from '../../assets/images/thebox/LOGO.png'
import thebox from '../../assets/images/thebox/TheBox.png'
import icon1 from '../../assets/images/thebox/footerIcon1.png'
import icon2 from '../../assets/images/thebox/footerIcon2.png'
import icon3 from '../../assets/images/thebox/footerIcon3.png'

const Footer = () => {
  return (
    <div>
      <div className='container my-5 py-sm-5 '>
        <div className='row'>
          <div className='col-md-6'>
            <h3 className='fw_500 fs_20 fontfamily_work_sans color_blue'>ADDRESS:<span className='fw_500 fs_20 fontfamily_work_sans color_netural_800 ms-2'>6391 Elgin St. Celina, Delaware 10299</span></h3>
            <h3 className='fw_500 fs_20 fontfamily_work_sans color_blue mt-4 pt-1'>PHONE:<span className='fw_500 fs_20 fontfamily_work_sans color_netural_800 ms-4'>+84 1102 2703</span></h3>
            <h3 className='fw_500 fs_20 fontfamily_work_sans color_blue mt-4 pt-1 '>EMAIL:<span className='fw_500 fs_20 fontfamily_work_sans color_netural_800 ms-4 ps-2'>hello@thebox.com</span></h3>
            <div className='d-flex mt-4 pt-1'>
              <img src={logo} alt='icon' className='img-fluid mt-3 mt-sm-0' />
              <h3 className="fw_700 fs_30 color_blue ms-3 text_italic fontfamily_work_sans mt-3 mt-sm-0
          ">TheBox</h3>
            </div>
          </div>
          <div className='col-md-6 '>
            <div className='ms-sm-5 ps-sm-5 '>
              <h3 className='fw_500 fs_20 fontfamily_work_sans color_blue ms-sm-5 ps-sm-5  mt-5 mt-sm-0'>NEWSLETTER:</h3>
              <div className='ms-sm-5 ms-2 '>
                <input type='email' placeholder='Your email here' className='w-sm-75 mt-3 ms-sm-5 ps-2 color_netural_300   py-2 border_color' />
                <button className='fs_18 fw_600 fontfamily_work_sans bg_color_orange border text-white py-sm-2 px-sm-4 ms-sm-5 ms-2 mt-3 ms-xl-3 '> Subscribe</button>
              </div>
              <h3 className='fw_500 fs_20 fontfamily_work_sans color_blue mt-4 ms-sm-5 ps-sm-5 ms-2 ps-0'>SOCIAL:</h3>
              <div className='ms-sm-5 ps-sm-5 ms-2 ps-0 mt-4'>
                <img src={icon1} alt='facebook' className='img-fit me-4' />
                <img src={icon2} alt='linkedin' className='img-fluid me-4' />
                <img src={icon3} alt='twitter' className='img-fluid ' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg_color_blue py-1'>

        <h3 className='fs_16 fw_400 fontfamily_work_sans text-white py-4 ps-sm-5 ms-sm-5'><span className='ps-sm-3'>TheBox Company © 2022. All Rights Reserved</span></h3>
      </div>
    </div>
  )
}

export default Footer