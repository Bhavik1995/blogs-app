import React from 'react';
import { useSelector } from 'react-redux';
import Blogs from './component/Blogs';
import Homepage from './component/Homepage';
import Navbar from './component/Navbar';
import { selectSignedIn } from './features/userSlice';
import './styling/app.css';

const App = () =>{

    const isSignedIn = useSelector(selectSignedIn)

    return(
        <>
        <div className="app">
            <Navbar/>
            <Homepage/>
            {isSignedIn && <Blogs/>}
        </div>
        </>
    );
};

export default App;