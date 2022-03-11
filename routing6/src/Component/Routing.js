import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Header from './Header';
import Home from './Home';
import Post from './Post';
import Profile from './Profile';
import PostDetails from './postDetails';

const Routing = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header/>}>
                    <Route path="home" element={<Home/>}/>
                    <Route path="/post" element={<Post/>}/>
                    <Route path="/post/:topic" element={<PostDetails/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing