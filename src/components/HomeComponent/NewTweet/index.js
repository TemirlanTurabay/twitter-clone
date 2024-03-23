import { TTK_IMG_PATH } from "../images";

function NewTweet(props){
    const {content, onChangeTextInput, addToTweets} = props;
    return(
        <div className="p-3 d-flex flex-column" style={{borderBottom: '2px solid whitesmoke'}}>
            <div>
                <img src={TTK_IMG_PATH} style={{width: 50, height: 50, borderRadius: 50}}></img>
                <input onChange={onChangeTextInput} value={content} placeholder="What's happening?" style={{border: 'none', fontSize: 18, outline: 'none'}} className="mx-3"></input>
            </div>
            <button onClick={addToTweets} style={{alignSelf:'flex-end',color:'white', backgroundColor: '#1D9BF0', borderRadius:20, height:40, width:75, border:'none'}}>Tweet</button>    
        </div>
        
    );
}

export default NewTweet;