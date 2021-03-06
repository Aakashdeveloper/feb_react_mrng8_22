import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './component/Home/Home';
import Listing from './component/listing/listingApi';
import Details from './component/Details/restDetails';

const Router = () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/" component={Home}/>
                <Route path="/listing/:mealId" component={Listing}/>
                <Route path="/details" component={Details}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Router;