import React from 'react'
import man from '../../assets/images/thebox/manimg.png'
const AboutUs = () => {
    return (
        <div className='container py-sm-5 my-sm-4'>
            <div className='row '>
                <div className='col-lg-9'>
                    <img src={man} alt='man' className='img-fluid' />
                </div>
                <div className='col-lg-4 mt-lg-3 mt-xl-5  pt-xl-4 bg_left'>
                    <div className='bg_color_blue pb-5  mt-lg-4 mt-xl-4  '>
                        <h3 className='fw_700 fs_36 fs_30_m fontfamily_work_sans text-white pt-xl-5 pt-lg-3 pt-md-5 pb-xl-4 pb-lg-2 ms-4 ps-sm-2'>About us</h3>
                        <h5 className='fw_400 fs_18 fs_14_m fs_18_s fontfamily_work_sans text-white ms-4 me-sm-5 me-2 ps-sm-2'>For more than 30 years we have been delivering world-class construction and we’ve built many lasting relationships along the way.</h5>
                        <h5 className='fw_400 fs_18 fs_14_m fs_18_s fontfamily_work_sans text-white ms-4 me-sm-5 me-2 mt-4 ps-sm-2'>We've matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.</h5>
                        <div className='ps-sm-2'>
                        <button className='fw_600 fs_16 fontfamily_work_sans  py-2 border mt-xl-5 mt-3 ms-4 color_blue bg-white '>More on Our History</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs