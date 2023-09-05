import React from 'react'
import icon1 from '../../assets/images/thebox/cardIcon1.png'
import icon2 from '../../assets/images/thebox/cardIcon2.png'

const OurReputation = () => {
   const cards = [
        {
            img: icon1,
            title: 'Best Services',
            description: 'Nullam senectus porttitor in eget. Egt rutum leo interdum.',
           descriptioncolor:'#858EAD'
        },
        {
            img: icon1,
            title: 'Best Teams',
            description: 'Cursus semper tellus volutpat aliquet lacus. ',
            descriptioncolor:'#858EAD'
        },
        {
            img: icon2,
            title: 'Best Designs',
            description: 'Ultricies at ipsum nunc, tristique nam lectus.',
            descriptioncolor:'#858EAD'
        }
    ]
    return (
        <>
            <div className='container my-sm-4  pb-5 pt-sm-4'>
                <h3 className='fw_700 fs_36 fontfamily_work_sans text-center'>Our Reputation</h3>
                <div className='row d-flex justify-content-around mt-sm-5 mx-5'>
                    {cards.map((items) =>
                        <div className="card mt-4 " style={{ width: "18rem" }}>
                            <img src={items.img} className="img-fluid mt-3 ms-3" alt="img" width={'30px'} height={'30px'} />
                            <div class="card-body">
                                <h5 class="card-title fw_700 fs_20 fontfamily_work_sans" >{items.title}</h5>
                                <p class="card-text fw_400 fs_15 fontfamily_work_sans pb-4" style={{color:`${items.descriptioncolor}`}}>{items.description}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default OurReputation