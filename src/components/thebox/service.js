import React from 'react'
import './theBox.css'
import icon1 from '../../assets/images/thebox/serviceIcon1.png'
import icon2 from '../../assets/images/thebox/serviceIcon2.png'
import icon3 from '../../assets/images/thebox/serviceIcon3.png'
import icon4 from '../../assets/images/thebox/serviceIcon4.png'
import icon5 from '../../assets/images/thebox/serviceIcon5.png'
import icon6 from '../../assets/images/thebox/serviceIcon6.png'
import line1 from '../../assets/images/thebox/hLine1.png'
const Service = () => {
    const card = [
        {
            icon: icon1,
            img: line1,
            title: 'Construction',
            backgroundColor: '#FFFFFF'
        },
        {
            icon: icon2,
            img: line1,
            title: 'Renovation',
            backgroundColor: '#2947A9',
            titleColor:'#FFFFFF'
        },
        {
            icon: icon3,
            img: line1,
            title: 'Consultation',
            backgroundColor: '#FFFFFF'
                   },
        {
            icon: icon4,
            img: line1,
            title: 'Repair Services',
            backgroundColor: '#2947A9',
            titleColor:'#FFFFFF'
        },
        {
            icon: icon5,
            img: line1,
            title: 'Architecture',
            backgroundColor: '#FFFFFF'
            
        },
        {
            icon: icon6,
            img: line1,
            title: 'Electric',
            backgroundColor: '#2947A9',
            titleColor:'#FFFFFF'
        }
    ]
    return (
        <div className='bg_color_neutral mt-5 pt-3 pb-5'>
            <div className='container pb-5'>
                <h3 className='fw_700 fs_35 fontfamily_work_sans text-center py-3 ms-3 mt-3'>Services</h3>
                <div className='row gx-0 d-flex justify-content-around gap-5 mx-5  ps-5  '>
                    {card.map((items) =>
                        <div className="cards mt-4 py-5 box_shadow border_radius_5" style={{ width: "18rem", backgroundColor: `${items.backgroundColor}`}}>
                            <div className='text-center'>
                                <img src={items.icon} className="img-fluid align-item-center" alt="icons" width={'35px'} height={'35px'} />
                                <div className="card-body">
                                    <img src={items.img} className="img-fluid align-item-center mt-3" alt="icons" width={'35px'} height={'35px'} />
                                    <h5 className="card-title fw_600 fs_20 fontfamily_work_sans color_blue mt-3" style={{color: `${items.titleColor}`}}>{items?.title}</h5>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Service