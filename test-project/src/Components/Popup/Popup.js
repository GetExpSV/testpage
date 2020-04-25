import React from 'react';
import style from './Popup.module.css';

class Popup extends React.Component {
    render() {
        return (
            <div className={style.popup}>
                <div className={style.popup__inner}>
                    <div className={style.top__item}>Congratulations</div>
                    <div className={style.paragraph__item}>You have successfully passed the registration</div>
                    <div onClick={this.props.onSuccess} className={style.button__item}>Great</div>
                </div>
            </div>
        );
    }
}

export default Popup;