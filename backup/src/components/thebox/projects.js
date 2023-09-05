import React from 'react'
import img1 from '../../assets/images/thebox/projectimg1.png'
import img2 from '../../assets/images/thebox/projectimg2.png'
import img3 from '../../assets/images/thebox/projectimg3.png'
import img4 from '../../assets/images/thebox/projectimg4.png'
import arrow from '../../assets/images/thebox/leftarrow.png'
import rightarrow from '../../assets/images/thebox/rightarrow.png'
import pagecontrol from '../../assets/images/thebox/PageControl (1).png'
const Projects = () => {
    return (
        <>
            <div className='container py-md-5 my-md-4 py-2 my-2'>
                <h2 className='fw_700 fs_36 fontfamily_work_sans mt-sm-5 pt-sm-5 mt-2 pt-2 '>Projects</h2>
                <div className='row pb-sm-5'>
                    <div className='col-4'>
                        <h2 className=''></h2>
                        <h3 className='fs_24 fw_700 fontfamily_work_sans color_blue border_left_blue mt-4'><span className='ps-3'>All</span></h3>
                        <h3 className='fs_24 fw_500 fontfamily_work_sans color_netural_200 ms-3 mt-3'>Commercial</h3>
                        <h3 className='fs_24 fw_500 fontfamily_work_sans color_netural_200 ms-3 mt-3'>Residential</h3>
                        <h3 className='fs_24 fw_500 fontfamily_work_sans color_netural_200 ms-3 mt-3'>Other</h3>
                    </div>
                    <div className='col-md-8'>
                        <div className='row mt-lg-4 pt-lg-2'>
                            <div className='col-md-6 '>
                                <img src={img1} alt='image' className='img-fluid img-size' />
                                <div className='bg_color_blue bg_width ps-4 py-3 mb-md-4 mb-3'>
                                    <h1 className='fw_700 fs_20 fontfamily_work_sans text-white'>Wildstone Infra Hotel</h1>
                                    <h5 className='fw_400 fs_18 fontfamily_works_sans text-white'>2715 Ash Dr. San Jose, South Dakota</h5>
                                </div>
                                <img src={img3} alt='image' className='img-fluid img-size' />
                                <div className='bg_color_blue bg_width ps-4 py-3 mb-md-4 mb-3'>
                                    <h1 className='fw_700 fs_20 fontfamily_work_sans text-white'>Mr. Parkinston’s House</h1>
                                    <h5 className='fw_400 fs_18 fontfamily_works_sans text-white'>2715 Ash Dr. San Jose, South Dakota</h5>
                                </div>
                                <div className='position-relative mb-3 d-block d-lg-none'>
                                    <img src={arrow} alt='arrow' className='position_absolute img-fluid ps-5' />
                                    <button className='fs_18 fW_800 fontfamily_work_sans text-white  bg_color_netural_800 py-3 border-0 btun_size'>Back</button>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <img src={img2} alt='image' className='img-fluid img-size ' />
                                <div className='bg_color_blue bg_width ps-4 py-3 mb-md-4 mb-3'>
                                    <h1 className='fw_700 fs_20 fontfamily_work_sans text-white'>Wish Stone Building</h1>
                                    <h5 className='fw_400 fs_18 fontfamily_works_sans text-white'>2972 Westheimer Rd. Santa Ana, Illinois </h5>
                                </div>
                                <img src={img4} alt='image' className='img-fluid img-size' />
                                <div className='bg_color_blue bg_width ps-4 py-3 mb-md-4 mb-3'>
                                    <h1 className='fw_700 fs_20 fontfamily_work_sans text-white my-md-3 my-lg-0'>Oregano Height</h1>
                                    <h5 className='fw_400 fs_18 fontfamily_works_sans text-white mt-2 '>2464 Royal Ln. Mesa, New Jersey  Illinois  </h5>
                                </div>
                                <div className='position-relative btn_margin ms-xl-0 ms-md-5 ps-lg-4 ps-xl-5  d-block d-lg-none' >
                                    <button className='fs_18 fW_800 fontfamily_work_sans text-white bg_color_netural_800 ms-lg-4 ms-xl-0 py-3 border-0 btun_size'>Next</button>
                                    <img src={rightarrow} alt='arrow' className='position_absolute_2 img-fluid ps-5' />
                                </div>
                            </div>
                        </div>
                        <div className='row gx-0'>
                            <div className='col-lg-3 col-sm-5 d-lg-block d-none'>
                                <div className='position-relative mb-3'>
                                    <img src={arrow} alt='arrow' className='position_absolute img-fluid ps-5' />
                                    <button className='fs_18 fW_800 fontfamily_work_sans text-white  bg_color_netural_800 py-3 border-0 btun_size'>Back</button>
                                </div>
                            </div>
                            <div className='col-lg-1'></div>
                            <div className='col-xl-3 col-md-1 d-lg-block d-none'>
                                <img src={pagecontrol} alt='pagecontrol' className='img-fluid mt-3 ms-4'width={'250px'} height={'100px'} />
                            </div>
                            <div className='col-lg-3 col-sm-5 d-lg-block d-none'>
                                <div className='position-relative btn_margin ms-xl-0 ms-lg-4 ps-lg-4 ps-xl-5' >
                                    <button className='fs_18 fW_800 fontfamily_work_sans text-white bg_color_netural_800 ms-lg-4 ms-xl-0 py-3 border-0 btun_size'>Next</button>
                                    <img src={rightarrow} alt='arrow' className='position_absolute_2 img-fluid ps-5' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects