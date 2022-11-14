import React from 'react'
import { Container } from 'react-bootstrap'
import userIcon from '../static/icons/user-icon.png';

function CommentsPage(props) {

  return (
  <div className='pt-4 border'>
    <div className=' w-75 mx-auto'>
   
        {/* image */}
        <div className='d-block pt-2' >
          <img className='img-fluid ' variant='top' src={userIcon} style={{ height: "45px", width: "45px", float: "left" }} />
            <div className='float-start  '>
                <h6 className='m-0'>saiteja</h6>
                <p className='m-0'>@20071A6614</p>
                
            </div>
        </div>
        {/* use props to get data */}
        <div className='d-block pt-4 m-5 '>
            <h3 className=' d-bold '>How does react work?How do i conditionally render react components</h3>
            <p>px
             usually a form of nonsense Latin, but here are 10 generators that make the text more interesting. If you want to generate standard lorem ipsum, you can generate it in Word or from various websites. “Standard” is so boring though, especially when the original text is taken from a 1st-century Roman orator.
            </p>
            <h6 className='bold'>Code:</h6>
            <img src="https://miro.medium.com/max/1400/1*CGH27-rlhqPm2zhDDyqXFw.png" style={{width:"60vw",height:"30vw"}} className="p-1"></img> 
            {/* <h6 className='bold'>Error:</h6>
            <img src="https://tinyurl.com/4f24mmw2" style={{width:"60vw",height:"30vw"}} className="p-1"></img> */}

            {/* comment area */}
          <div className='pt-5'>
            <label>
              Add Comment
              <textarea className='d-block' style={{width:"60vw",height:"10vw"}}>
                  Add your solution / Add any suggestion.
              </textarea>
            </label>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default CommentsPage
