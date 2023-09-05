import React from 'react'
import icon1 from '../../assets/images/thebox/contactusIcon1.png'
import icon2 from '../../assets/images/thebox/contactusIcon2.png'
import icon3 from '../../assets/images/thebox/contactusIcon3.png'
import icon4 from '../../assets/images/thebox/contactusIcon4.png'

const ContactUs = () => {
  return (
    <div className='mt-md-3 '>
      <div className='container my-md-5 py-md-5'>
        <div className='row my-md-5 py-md-5 '>
          <div className='col-lg-7 ms-5 d-md-block d-none mt-md-5 pt-md-5 mt-0 pt-0'>
            <div className='row'>
              <div className='col-6 '>
                <div className="card border card_shadow  card_margin_1 border-0" style={{ width: "20rem", height: '12rem' }}>
                  <img src={icon2} className="img-fluid card_icon2" alt="img" height={'90px'} width={'90px'} />
                  <div className="card-body">
                    <h5 className="card-title fs_70 fw_600 fontfamily_work_sans card_number ms-3 num_size">123</h5>
                    <p className="card-text fw_400 fs_24 fontfamily_work_sans ms-3 color_netural_500 border_left"><span className='ms-2'>Projects Completed</span></p>
                  </div>
                </div>
                <div className="card border card_shadow gap-5 card_margin_2 border-0 ms-5" style={{ width: "20rem", height: '12rem' }}>
                  <div className="card-body">
                    <h5 className="card-title fs_70 fw_600 fontfamily_work_sans card_number ms-3 pt-5 num_size">30</h5>
                    <p className="card-text fw_400 fs_24 fontfamily_work_sans ms-3 color_netural_500 border_left"><span className='ms-2'>Years in Business</span></p>
                  </div>
                  <img src={icon4} className="img-fluid card_icon4" alt="img" height={'90px'} width={'90px'} />
                </div>
              </div>
              <div className='col-6'>
                <div className="card border card_shadow card_margin_3 border-0 " style={{ width: "20rem", height: '12rem' }}>
                  <img src={icon1} className="img-fluid card_icon3" alt="img" height={'90px'} width={'90px'} />
                  <div className="card-body">
                    <h5 className="card-title fs_70 fw_600 fontfamily_work_sans card_number ms-3 pt-3 num_size">84</h5>
                    <p className="card-text fw_400 fs_24 fontfamily_work_sans ms-3 color_netural_500 border_left"><span className='ms-2'>Happy Clients</span></p>
                  </div>
                </div>
                <div className="card border card_shadow card_margin_4 border-0" style={{ width: "20rem", height: '12rem' }}>
                  <img src={icon3} className="img-fluid card_icon3" alt="img" height={'90px'} width={'90px'} />
                  <div className="card-body">
                    <h5 className="card-title fs_70 fw_600 fontfamily_work_sans card_number ms-3 pt-3 num_size">37</h5>
                    <p className="card-text fw_400 fs_24 fontfamily_work_sans ms-3 color_netural_500 border_left"><span className='ms-2'>Awards Win</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 mt-lg-5 mt-md-5 pt-md-5'>
            <h2 className='fs_65 fw_700 fontfamily_work_sans color_blue fs_40_m  mt-md-4'>30 Years Experience</h2>
            <h5 className='fw_400 fs_20 fontfamily_work_sans color_neutral mt-sm-5 mt-3 me-sm-5 pe-sm-5 me-2'>Our company has been the leading provided construction services to clients throughout the USA since 1988.</h5>
            <button className='fw_600 fs_20 fontfamily_work_sans text-white bg_color_blue mt-sm-5 mt-2 py-sm-3 px-sm-5 px-3 py-2 border'>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContactUs