import React from 'react';
import style from './Users.module.css'
import {connect} from "react-redux";
import {getPositionsData, getUsersData} from "../../Data/Users-reducer";
import User from "./User/User";

class Users extends React.Component {

    componentDidMount() {
        this.props.getUsersData(this.props.CurrentPage, this.props.CountUsers);
        this.props.getPositionsData();
    }

    loadMore = () => {
        this.props.getUsersData(this.props.CurrentPage, this.props.CountUsers)
    }

    render() {
        let Users = this.props.Users.map(data => <User user={data} key={data.id}/>)
        return (<div className={style.container}>
            <div className={style.text__top}>Our cheerful users</div>
            <div className={style.attention}>Attention! Sorting users by registration date</div>
                <div className={style.users__container}>
                    {Users}
                </div>
            {this.props.CurrentPage > this.props.TotalPage ? "" :
                <div className={style.button__item} onClick={this.loadMore}>Show more</div>}
        </div>)
    }
}

let mapStateToProps = (state) => {
    return {
        Users: state.Users.Users,
        CurrentPage: state.Users.CurrentPage,
        TotalPage: state.Users.TotalPage,
        CountUsers: state.Users.CountUsers
    }
}

export default connect(mapStateToProps, {getUsersData, getPositionsData})(Users);

