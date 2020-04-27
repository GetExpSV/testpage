import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Assignment from "./Components/Assignment/Assignment";
import Acquainted from "./Components/Acquainted/Acquainted";
import Users from "./Components/Users/Users";
import Registration from "./Components/Registration/Registration";
import {BrowserRouter} from "react-router-dom";
import Footer from "./Components/Footer/Footer";

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div className="app__container">
                    <div className="app__item">
                        <Header/>
                        <Assignment/>
                        <Acquainted/>
                        <Users/>
                        <Registration/>
                        <Footer/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
