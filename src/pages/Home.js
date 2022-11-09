import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Collaboration from './Collaboration';
import Forum from './Forum';
// import bgim from '../static/icons/handbgimage.jpg';
import '../static/css/Home.css';
const Home = () => {
    return (

    <div className='homee'>
        <div  className=' w-75 mx-auto'>
            <Routes>
                <Route path='/collaboration' element={<Collaboration />} />
                <Route path='/forum' element={<Forum />} />
            </Routes>
            <h1 style={{fontFamily: "shalimar", fontSize: "100px", textAlign: "center", marginTop: "0px"}}>
                <b>Welcome to VJ Collab..</b>
            </h1>
            <hr className='w-50 mx-auto'></hr>
            <br></br>
            <div fluid='md' className='container'>
                <div className='row'>
                    <div className='col mb-4' sm={8}>
                        <div className='border rounded text-center shadow shadow-3 p-3'>
                            <br></br>
                            <h3><b>Collaboration</b></h3>
                            <hr className='mx-auto w-50'></hr>
                            <p>
                                Join, Explore, Connect and Achieve!!!
                            </p>
                            <p>
                                Find people that match your interests and work out to solve problems.
                            </p>
                            <button className='btn btn-primary'>
                                <Link className='text-white' to="/collaboration" style={{textDecoration: "none"}}>Collaboration</Link>
                            </button>
                            <br></br>
                            <br></br>
                        </div>
                    </div>
                    <div className='col mb-4' sm={8}>
                        <div className='border rounded text-center shadow shadow-3 p-3'>
                            <br></br>
                            <h3><b>Discussion Forums</b></h3>
                            <hr className='mx-auto w-50'></hr>
                            <p>
                                Got Stuck? Need Help?
                            </p>
                            <p>
                                Find people who gone through your problems and get things fixed.
                            </p>
                            <button className='btn btn-primary'>
                                <Link className='text-white' to="/forum" style={{textDecoration: "none"}}>Forum</Link>
                            </button>
                            <br></br>
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <h1 className='text-center m-5' style={{fontFamily: "shalimar", fontSize: "60px", textAlign: "center", marginTop: "2px"}}>
                "Talent wins games, but teamwork and intelligence win championships".
        </h1> */}



    </div>
        
    );
}

export default Home;
