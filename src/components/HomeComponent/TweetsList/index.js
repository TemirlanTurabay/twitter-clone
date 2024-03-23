import Tweet from "./Tweet.js";

function TweetList(props){
    const {tweets, deleteTweet} = props;
    return(tweets.map((item) => <Tweet item={item} key={item.id} deleteTweet={deleteTweet}/>));
}

export default TweetList;