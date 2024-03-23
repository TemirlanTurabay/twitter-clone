import './styles.css'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import MessageIcon from '@mui/icons-material/Message';
import MenuItem from './MenuItem';
import ListIcon from '@mui/icons-material/List';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function SideMenu(){

    const menu = [
        {
            icon: <HomeIcon/>,
            name: 'Home'
        },
        {
            icon: <ExploreIcon/>,
            name: 'Explore'
        },
        {
            icon: <CircleNotificationsIcon/>,
            name: 'Notifications'
        },
        {
            icon: <MessageIcon/>,
            name: 'Message'
        },
        {
            icon: <BookmarksIcon/>,
            name: 'Bookmarks'
        },
        {
            icon: <ListIcon/>,
            name: 'Lists'
        },
        {
            icon: <AccountCircleIcon/>,
            name: 'Profile'
        },
        {
            icon: <MoreHorizIcon/>,
            name: 'More'
        },
    ]

    return(
        <div className="w-25 mt-3 mx-5">
            <img className='logo-icon mb-2' src={require('./images/png-transparent-bird-tweet-twitter-twitter-logo-social-media-icon.png')}></img>
            {menu.map((item, index) => <MenuItem icon={item.icon} name={item.name} key={index}/>)}
        </div>
    );
}

export default SideMenu;