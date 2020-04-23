import React from 'react';
import users_class from './Users.module.css'
import {connect} from "react-redux";
import {getPositionsData, getUsersData} from "../../Data/Users-reducer";
import User from "./User/User";

class Users extends React.Component{

    componentDidMount() {
        this.props.getUsersData(1,6);
        this.props.getPositionsData();
    }

    loadMore = () =>{
        this.props.getUsersData(2,6)
    }

    render() {
        let Users = this.props.Users.map(data => <User user={data} key={data.id}/>)
        return (<div>
            <div className={users_class.users}>
                <div className={users_class.textItem}>Our cheerful users</div>
                <div className={users_class.item}>Attention! Sorting users by registration date</div>
                <div className={users_class.usersItem}>
                    {Users}
                </div>
                <div className={users_class.buttonItem} onClick={this.loadMore}>Show more</div>
            </div>
        </div>)
    }
}

let mapStateToProps = (state) =>{
    return{
        Users: state.Users.Users
    }
}

export default connect(mapStateToProps, {getUsersData, getPositionsData})(Users);

