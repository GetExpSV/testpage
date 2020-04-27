import React from 'react';
import style from './Users.module.sass'
import {connect} from "react-redux";
import {getPositionsData, getUsersData} from "../../Data/Users-reducer";
import User from "./User/User";

class Users extends React.Component {

    componentDidMount() {
        this.props.getUsersData(this.props.CurrentPage, this.props.CountUsers);     //get from data first 6 users
        this.props.getPositionsData();                                              //get from data positions
    }

    loadMore = () => {
        this.props.getUsersData(this.props.CurrentPage, this.props.CountUsers)       //get more users from data after click
    }

    render() {
        let Users = this.props.Users.map(data => <User user={data} key={data.id}/>)     //get array users from state for show into User component
        return (<div className={style.container}>
            <div className={style.text__top}>Our cheerful users</div>
            <div className={style.attention}>Attention! Sorting users by registration date</div>
                <div className={style.users__container}>
                    {Users}
                </div>
            {this.props.CurrentPage > this.props.TotalPage ? "" :             //when currentPage bigger then TotalPage users hidden button for load more users from data
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

