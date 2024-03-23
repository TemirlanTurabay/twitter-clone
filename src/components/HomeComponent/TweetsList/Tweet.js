import CommentIcon from '@mui/icons-material/Comment';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ReplyIcon from '@mui/icons-material/Reply';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useState } from 'react';

function Tweet(props){
    const {item, deleteTweet} = props;
    return(
        <div className="mt-3 px-3" style={{borderBottom: '2px solid whitesmoke'}}>
            <p className="mx-5 d-flex" style={{fontSize: 13, fontWeight: 600}}>
                | You might like! |
                <span style={{color: '#1D9BF0'}}>| See more |</span>
                <p>{item.minutes ? item.minutes: '| Long time ago |'}</p>
            </p>
            <div className="d-flex justify-content-between">
                <div className='d-flex'>
                    <img src={item.img} style ={{width: 50, height: 50, borderRadius: 50}}></img>
                    <div className="mx-3">
                        <p className="" style={{fontWeight: 600}}>{item.author} <span style={{color: 'grey'}}>{item.user}</span></p>
                        <p>{item.content}</p>
                    </div>
                </div>
                <button onClick={()=>deleteTweet(item.id)} style={{width: 35, height: 35, border:'none', backgroundColor:'transparent'}}>
                    X
                </button>
            </div>
            <div className="d-flex m-auto justify-content-between" style={{width: '80%'}}>
                <div className="d-flex">
                    <div style={{width: 20, height: 20}}><CommentIcon/></div>
                    <p className="px-2">{item.replies}</p>
                </div>
                <div className="d-flex">
                    <div style={{width: 20, height: 20}}><TwitterIcon/></div>
                    <p className="px-2">{item.retweets}</p>
                </div>
                <div className="d-flex">
                    <div style={{width: 20, height: 20}}><FavoriteBorderIcon/></div>
                    <p className="px-2">{item.likes}</p>
                </div>
                <div className="d-flex">
                    <div style={{width: 20, height: 20}}><ReplyIcon/></div>
                    <p className="px-2">{item.shares}</p>
                </div>
            </div>
        </div>
    );
}   

export default Tweet;