import { KZ_IMG_PATH, NFAC_IMG_PATH, ELON_IMG_PATH } from "../images";
import Tweet from "./Tweet.js";

function TweetList(){
    const tweets = [
        {
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

    return(tweets.map((item, index) => <Tweet item={item} key={index}/>));
}

export default TweetList;