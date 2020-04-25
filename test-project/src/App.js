import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Assignment from "./Components/Assignment/Assignment";
import Acquainted from "./Components/Acquainted/Acquainted";
import Users from "./Components/Users/Users";
import Registration from "./Components/Registration/Registration";
import {BrowserRouter} from "react-router-dom";
import {Route} from 'react-router-dom'

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
                        <Route path="/" render={() => <Registration/>}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
