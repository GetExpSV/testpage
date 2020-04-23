import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import FirstInfoSection from "./Components/FirstInfoSection/FirstInfoSection";
import SecondInfoSection from "./Components/SecondInfoSection/SecondInfoSection";
import Users from "./Components/Users/Users";
import Registration from "./Components/Registration/Registration";

let App = (props) => {
    return (
        <div className="item">
            <div className="appItem">
                <Header/>
                <FirstInfoSection/>
                <SecondInfoSection/>
                <Users/>
                <Registration/>
            </div>
        </div>
    );
}

export default App;
