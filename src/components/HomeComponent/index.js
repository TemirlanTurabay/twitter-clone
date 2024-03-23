import NewTweet from "./NewTweet";
import TweetList from "./TweetsList";

function Home(){
    return(
        <div className="w-50 mt-3">
            <p className="mx-3">Home</p>
            <NewTweet/>
            <TweetList/>
        </div>
    );
}

export default Home;