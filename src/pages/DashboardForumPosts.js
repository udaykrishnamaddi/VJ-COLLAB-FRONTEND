// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import ForumFeedCard from '../components/ForumFeedCard'

// const Forum = () => {
//     return (
//         <div>
//             <h1 className='text-center m-5'>Discussion Portal!</h1>
//             <ForumFeedCard/>
//         </div>
//     );
// }

// export default Forum;



import React from 'react';
// import CollabFeedCard from '../components/CollabFeedCard';
// import ForumFeedCard from '../components/ForumFeedCard'
import ForumFeedCardDiv from '../components/ForumFeedCardDiv'
import DashboardDoubts from '../components/DashboardDoubts'

import userIcon from '../static/icons/user-icon.png';
import '../static/css/Collaboration.css';
// import vjHackathon from '../static/icons/vj-hackathon.webp';
import reactimage from '../static/icons/reactimage.webp';
// import CollabPostCard from '../components/CollabPostCard';
import ForumPostCard from '../components/ForumPostCard';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../static/css/ForumFeedCardDiv.css';

const DashboardForumPosts = (props) => {
    let data={
        name: "Maddi Uday Krishna",
        username: "20071A6627",
        img: reactimage,
        title: "How does react work?How do i conditionally render react components?",
        description: "Description about your doubts.",
        required: 3,
        skills: ['HTML', 'ReactJS', 'NodeJS']
    }
    return (
        <div className='forumee'>
                <h1 className='text-center m-4'>Your Queries!</h1>
                <Row  xs={1} md={2} className="g-4 m-3">
                    <Col>
                        <DashboardDoubts {...data}/>

                    </Col>
                    <Col>
                        <DashboardDoubts {...data}/>

                    </Col>
                    <Col>
                        <DashboardDoubts {...data}/>

                    </Col>
                    <Col>
                        <DashboardDoubts{...data}/>

                    </Col>
                </Row>
        </div>




        //         <Row xs={1} md={3} className="g-4 m-3">
        //             {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
        //                 <Col className=''>
        //                      <CollabFeedCard {...data} />
        //                 </Col>
        //                 <Col className=''>
        //                      <CollabFeedCard {...data} />

        //                 </Col>
        //                 <Col className=''>
        //                      <CollabFeedCard {...data} />

        //                 </Col>
        //                 <Col className=''>
        //                      <CollabFeedCard {...data} />

        //                 </Col>
                    
        //         </Row>    

                




        //     <div className='container-fluid'>
                
        //         <div className='row'>






        //             {/* <div className='col-3'>
        //                 <div className='profile-bar text-center w-100'>
        //                     <div className='profile mt-5'>
        //                         <img src={userIcon} style={{height: "100px", width: "100px"}} alt="" />
        //                         <br></br>
        //                         <br></br>
        //                         <h4>{props.name}</h4>
        //                         <h6>@{props.username}</h6>
        //                     </div>
        //                     <div className='post-button mt-5'>
        //                         <CollabPostCard />
        //                     </div>
        //                 </div>
        //             </div> */}
                    
        //             {/* <div className='col'> */}

        //         {/* uncomment errors check */}


        //                 {/* <div className='collabFeed-bar text-center border'>
        //                     <div className='w-75 mx-auto' style={{paddingTop: "80px"}}>

        //                         <CollabFeedCard {...data} />
        //                         <CollabFeedCard {...data} />
        //                         <CollabFeedCard {...data} />
        //                         <CollabFeedCard {...data} />
        //                     </div>
        //                 </div> */}




        //             {/* </div> */}
        //         </div>
        //     </div>
        // </div>


































        // <div>
        //     <div className='container'>
        //         <div className='row'>
        //             <div className='col-3'>
        //                 <div className='profile-bar text-center w-100'>
        //                     <div className='profile mt-5'>
        //                         <img src={userIcon} style={{height: "100px", width: "100px"}} alt="" />
        //                         <br></br>
        //                         <br></br>
        //                         <h4>Maddi Uday Krishna{props.name}</h4>
        //                         <h6>@20071A6627{props.username}</h6>
        //                     </div>
        //                     <div className='post-button mt-5'>
        //                         <ForumPostCard />
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className='col-9'>
        //                 <div className='collabFeed-bar text-center border'>
        //                     <div className='w-75 mx-auto' style={{paddingTop: "80px"}}>
        //                         <ForumFeedCard {...data} />
        //                         <ForumFeedCard {...data} />
        //                         <ForumFeedCard {...data} />
        //                         <ForumFeedCard {...data} />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}

export default DashboardForumPosts;

