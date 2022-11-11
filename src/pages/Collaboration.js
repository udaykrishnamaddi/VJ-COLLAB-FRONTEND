import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CollabFeedCard from '../components/CollabFeedCard';
import userIcon from '../static/icons/user-icon.png';
import '../static/css/Collaboration.css';
import vjHackathon from '../static/icons/vj-hackathon.webp';
import CollabPostCard from '../components/CollabPostCard';
// import CollabSkillsModal from './CollabSkillsModal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Sideebar.css'
import '../static/css/Collaboration.css';


const Collaboration = (props) => {
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
        <div className=''>
            <div className=''>
            <h1 className='text-center m-0'>Your feed!</h1>
                <Row xs={1} md={3} className="g-4 m-3">
                    {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
                        <Col className=''>
                             <CollabFeedCard {...data} />
                        </Col>
                        <Col className=''>
                             <CollabFeedCard {...data} />

                        </Col>
                        <Col className=''>
                             <CollabFeedCard {...data} />

                        </Col>
                        <Col className=''>
                             <CollabFeedCard {...data} />

                        </Col>
                    
                </Row>    

                




            <div className='container-fluid'>
                
                <div className='row'>






                    {/* <div className='col-3'>
                        <div className='profile-bar text-center w-100'>
                            <div className='profile mt-5'>
                                <img src={userIcon} style={{height: "100px", width: "100px"}} alt="" />
                                <br></br>
                                <br></br>
                                <h4>{props.name}</h4>
                                <h6>@{props.username}</h6>
                            </div>
                            <div className='post-button mt-5'>
                                <CollabPostCard />
                            </div>
                        </div>
                    </div> */}
                    
                    {/* <div className='col'> */}

                {/* uncomment errors check */}


                        {/* <div className='collabFeed-bar text-center border'>
                            <div className='w-75 mx-auto' style={{paddingTop: "80px"}}>

                                <CollabFeedCard {...data} />
                                <CollabFeedCard {...data} />
                                <CollabFeedCard {...data} />
                                <CollabFeedCard {...data} />
                            </div>
                        </div> */}




                    {/* </div> */}
                </div>
            </div>

            </div>
                
        </div>
    );
}

export default Collaboration;
