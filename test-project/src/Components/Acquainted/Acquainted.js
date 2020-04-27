import React from 'react'
import style from './Acquainted.module.sass'
import manLaptop from '../../Image/man-laptop-v1.svg'

let Acquainted = (props) => {
    return (<div className={style.acquainted__container}>
        <div className={style.top__item}>
            Let's get acquainted
        </div>
        <div className={style.info__container}>
            <div>
                <img src={manLaptop}/>
            </div>
            <div className={style.text__container}>
                <div className={style.text__top}>I am cool frontend developer</div>
                <div className={style.paragraph__item}> We will evaluate how clean your approach to writing CSS and
                    Javascript code is. You can use any CSS
                    and Javascript 3rd
                    party libraries without any restriction.
                </div>
                <div className={style.paragraph__item}>If 3rd party css/javascript libraries are added to the project
                    via bower/npm/yarn you will get
                    bonus points. If you any
                    task runner (gulp/webpack) you will get bonus points as well. Slice service directory page PSD
                    mockup into HTML5/CSS3.
                </div>
                <div className={style.sing__item}>Sing up now</div>
            </div>
        </div>
    </div>)
}

export default Acquainted;