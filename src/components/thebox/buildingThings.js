import React from 'react'
import leftarrow from '../../assets/images/thebox/leftarrow.png'
import rightarrow from '../../assets/images/thebox/rightarrow.png'
import roof from '../../assets/images/thebox/roofimg.png'

const BuildingThings = () => {
    return (
        <>
            <div className='bg_color_blue pb-5 pt-sm-4'>
                <div className='container'>
                    <div className='row pt-5'>
                        <div className='col-md-5 pt-3'>
                            <h1 className='fw_600 fs_70 fs_55_m fontfamily_work_sans text-white fs_sm_45'>Building things is our mission.</h1>
                        </div>
                        <div className='col-md-3'></div>
                        <div className='col-md-4'>
                            <div className='color_darkblue text-center pb-2'>
                                <h3 className='fw_700 fs_18 fontfamily_work_sans text-white pt-3'>Feature Projects</h3>
                                <h3 className='fw_400 fs_24 fontfamily_work_sans text-white pt-2'>The National University of Architecture</h3>
                            </div>
                            <div className='bg-dark'>
                                <div className='row'>
                                    <div className='col-6 py-2'>
                                        <div className='d-flex'>
                                            <img src={leftarrow} alt='arrow'width={'22px'} height={'18px'} className='ms-xl-5 ms-md-3 ms-5 pt-1  me-3' />
                                            <h3 className='fs_18 fw_400 fontfamily_work_sans text-white'>Back</h3>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='d-flex'>
                                            <h3 className='fs_18 fw_400 fontfamily_work_sans text-white mt-2 ms-xl-5 ms-md-1 ms-5'>Next</h3>
                                            <img src={rightarrow} alt='arrow'width={'22px'} height={'18px'} className=' ms-3 mt-2 pt-1' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <img src={roof} alt='./img' className='img-fluid mb-5 card_shadow' width='100%'/>
        </>
    )
}

export default BuildingThings