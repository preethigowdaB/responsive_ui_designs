import React from 'react'

const Submit = () => {
    return (
        <div className='bg_color_neutral pb-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3'></div>
                    <div className='col-lg-6'>
                        <h3 className='fs_36 fw_700 fontfamily_work_sans text-center mt-5 color_netural_800'>What can us do for you?</h3>
                        <h4 className='fs_20 f_14_s fw_400 fontfamily_work_sans text-center mx-sm-5 my-3 lh-base color_netural_800 mx-2 '>We are ready to work on a project of any complexity, whether it’s commercial or residential.</h4>
                        <div className='row'>
                            <div className='col-sm-6'>
                                <input type="text" id="myInput" name="myInput" required="required"className='w-100 mt-3 color_netural_300  border_color py-2' />
                                <label for="myInput">Your Name</label>
                                {/* <input type='text' placeholder='your name *' required="required" className='w-100 mt-3 color_netural_300 ps-2 border_color py-2' /> */}
                                {/* <input type='text' placeholder='Reason for Contacting*' className='w-100 mt-3 color_netural_300 ps-4 py-2 border_color' /> */}
                                <input type="text" id="myInput" name="myInput" required="require" className='w-100  color_netural_300 border_color py-2' />
                                <label for="myInput "><span className='ms-4'></span>Reason for Contacting</label>
                            </div>
                            <div className='col-sm-6'>
                            <input type="text" id="myInput" name="myInput" required="required" className='w-100 mt-3 color_netural_300 border_color py-2'/>
                                <label for="myInput">Email</label>                            
                                <input type='phone' placeholder='Phone' className='w-100 color_netural_300 ps-2 py-2 border_color ' />
                            </div>
                            <input placeholder='Message' className='ms-3 msg_txt input_text ps-2 border_color mt-3 mt-md-0' />
                            <h4 className='fs_16 fw_400 fontfamily_work_sans color_netural_500 mt-3'><span className='color_red'>*</span>indicates a required field</h4>
                        </div>
                        <button className='bg_color_blue padding_btn py-2 text-white border fs_18 fw_600 btn_center mt-4'>Submit</button>
                    </div>
                    <div className='col-lg-3'></div>
                </div>
            </div>
        </div>
    )
}

export default Submit