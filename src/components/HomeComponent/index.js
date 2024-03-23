import React from "react";
import NewTweet from "./NewTweet";
import TweetsList from "./TweetsList";
import { KZ_IMG_PATH, NFAC_IMG_PATH, TTK_IMG_PATH, ELON_IMG_PATH } from './images';

class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            count: 0,
            content: '',
            tweets: [
                {
                    id: 0,
                    author: 'Free KZ today',
                    user: '@kz',
                    img: KZ_IMG_PATH,
                    content: 'some text sdhasdja a sdhash ads ashd as hasdhsa asd hash',
                    replies: 200,
                    retweets: 1000,
                    likes: 500,
                    shares: 100
                }, 
                {
                    id: 1,
                    author: 'nFactorial',
                    user: '@nfactorial',
                    img: NFAC_IMG_PATH,
                    content: 'some text sdhasdja a sdhash ads ashd as hasdhsa asd hash',
                    replies: 200,
                    retweets: 1000,
                    likes: 500,
                    shares: 100
                },
                {
                    id: 2,
                    author: 'Elon Musk',
                    user: '@elonmal',
                    img: ELON_IMG_PATH,
                    content: 'some text sdhasdja a sdhash ads ashd as hasdhsa asd hash',
                    replies: 200,
                    retweets: 1000,
                    likes: 500,
                    shares: 100
                },
                {
                    id: 3,
                    author: 'Free KZ today',
                    user: '@kz',
                    img: KZ_IMG_PATH,
                    content: 'some text sdhasdja a sdhash ads ashd as hasdhsa asd hash',
                    replies: 200,
                    retweets: 1000,
                    likes: 500,
                    shares: 100
                }, 
                {
                    id: 4,
                    author: 'nFactorial',
                    user: '@nfactorial',
                    img: NFAC_IMG_PATH,
                    content: 'some text sdhasdja a sdhash ads ashd as hasdhsa asd hash',
                    replies: 200,
                    retweets: 1000,
                    likes: 500,
                    shares: 100
                },
                {
                    id: 5,
                    author: 'Elon Musk',
                    user: '@elonmal',
                    img: ELON_IMG_PATH,
                    content: 'some text sdhasdja a sdhash ads ashd as hasdhsa asd hash',
                    replies: 200,
                    retweets: 1000,
                    likes: 500,
                    shares: 100
                }
            ]
        }
    }

    onChangeTextInput = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    addToTweets = () => {
        const newTweet = {
            id: this.state.tweets.length,
            author: 'Temirlan Turabay',
            user: '@TTKMMIII',
            img: TTK_IMG_PATH,
            content: this.state.content,
            replies: 0,
            retweets: 0,
            likes: 0,
            minutes: '1 minute ago'
        }

        this.setState({
            tweets: [...this.state.tweets, newTweet ],
            content: ''
        })
    }

    deleteTweet = (id) => {
        this.setState({
            tweets: this.state.tweets.filter(item=>item.id!==id)
        })
    }
 
    render(){
        const { tweets, content } = this.state;
        return(
            <div className="w-50 mt-3">
                <h5 className="mx-3">Home</h5>
                <NewTweet content={content} onChangeTextInput={this.onChangeTextInput} addToTweets={this.addToTweets}/>
                <TweetsList tweets={tweets} deleteTweet={this.deleteTweet}/>
            </div>
        )
    }
}

export default Home;