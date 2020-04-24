import React from 'react'
import style from './Assignment.module.css'

let Assignment = (props) => {
    return (
        <div className={style.assignment__container}>
            <div className={style.material__container}>
                <div className={style.top__item}>TEST ASSIGNMENT FOR FRONTEND DEVELOPER POSITION</div>
                <div className={style.paragraph__item}>We kindly remind you that your test assignment should be submitted as a link to github/bitbucket
                    repository.
                    Please be patient, we consider and respond to every application that meets minumum requirements.
                    We look forward to your submission. Good luck! The photo has to scale in the banner area on the
                    different screens
                </div>
                <div className={style.signItem}>Sing up now</div>
            </div>
        </div>
    )
}

export default Assignment;