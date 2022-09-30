import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from '../Components/Home';
// import SpotifyApp from '../Pages/SpotifyApp';
// import Solitude from '../Pages/Solitude';

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            {/* <Route path='/spotify' element={<SpotifyApp/>}/> */}
            {/* <Route path='/solitude' element={<Solitude/>}/> */}
        </Routes>
    )
}

export default Routing;