import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import userIcon from '../static/icons/user-icon.png';
import vjHackathon from '../static/icons/vj-hackathon.webp';

const Profile = (props) => {
    let data={
        name: props.name,
        username: props.username,
        img: vjHackathon,
        title: "Frontend Developer",
        description: "We are looking for frontend developer, our project is about developing a web site VjCollab, for students of our college.\
        Intersted students please click the collab button for join with us and the end date for applying is 1/9/2022.",
        endDate: "03-11-2022",
        required: 3,
        skills: ['HTML', 'ReactJS', 'NodeJS']
    }
    
    return (
        <div>  
            <h1 className='text-center m-5'>Hi Uday!</h1>
            <div className='container-fluid '>      
                <div className='row'>
                    <div className='col'>
                        <div className='profile-bar text-center w-100'>
                            <div className='profile m-5'>
                                <img src={userIcon} style={{height: "100px", width: "100px"}} alt="" />
                                <br></br>
                                <br></br>
                                <h4>Maddi Uday Krishna</h4>
                                <h6>@20071A6627</h6>
                            </div>
                            <Row className='m-4 p-3 bg-dark'>
                                <Col>
                                    <Link className='text-white' style={{ textDecoration: 'none' }} to="/profile">  Collaboration </Link>
                                </Col>
                                <Col>
                                    <Link className='text-white' style={{ textDecoration: 'none' }} to="dashboard-doubts">Discussion</Link>
                                </Col>
                            </Row>
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
