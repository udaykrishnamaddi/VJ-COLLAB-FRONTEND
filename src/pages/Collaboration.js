import React from 'react';
import CollabFeedCard from '../components/CollabFeedCard';
import userIcon from '../static/icons/user-icon.png';
import '../static/css/Collaboration.css';
import vjHackathon from '../static/icons/vj-hackathon.webp';
import CollabPostCard from '../components/CollabPostCard';

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
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-3'>
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
                    </div>
                    <div className='col-9'>
                        <div className='collabFeed-bar text-center border'>
                            <div className='w-75 mx-auto' style={{paddingTop: "80px"}}>
                                <CollabFeedCard {...data} />
                                <CollabFeedCard {...data} />
                                <CollabFeedCard {...data} />
                                <CollabFeedCard {...data} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collaboration;
