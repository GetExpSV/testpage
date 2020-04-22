import React from 'react'
import info_class from './FirstInfoSection.module.css'

let FirstInfoSection = (props) => {
    return (
        <div>
            <div className={info_class.bannerItem}>
                <h1 className={info_class.item}>TEST ASSIGNMENT FOR FRONTEND DEVELOPER POSITION</h1>
                <div className={info_class.textItem}>We kindly remind you that your test assignment should be submitted as a link to github/bitbucket
                    repository.
                    Please be patient, we consider and respond to every application that meets minumum requirements.
                    We look forward to your submission. Good luck! The photo has to scale in the banner area on the
                    different screens
                </div>
                <div className={info_class.signItem}>Sing up now</div>
            </div>
        </div>
    )
}

export default FirstInfoSection;