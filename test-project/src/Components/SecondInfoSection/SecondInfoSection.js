import React from 'react'
import info_class from './SecondInfoSection.module.css'
import manLaptop from '../../Image/man-laptop-v1.svg'

let SecondInfoSection = (props) => {
    return (<div>
        <div className={info_class.mainItem}>
            <div className={info_class.item}>
                <h1>Let's get acquainted</h1>
            </div>
            <div className={info_class.infoItem}>
                <img src={manLaptop}/>
                <div>I am cool frontend developer</div>
                <div> We will evaluate how clean your approach to writin CSS and Javascript code is. You can use any CSS
                    and Javascript 3rd
                    party libraries without any restriction.
                </div>
                <div>If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get
                    bonus points. If you any
                    task runner (gulp/webpack) you will get bonus points as well. Slice service directory page PSD
                    mockup into HTML5/CSS3.
                </div>
                <div className={info_class.signItem}>Sing up now</div>
            </div>
        </div>
    </div>)
}

export default SecondInfoSection;