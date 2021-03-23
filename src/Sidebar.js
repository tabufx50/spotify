import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { getTokenFromResponse } from "./spotify";
import { useDataLayerValue } from './DataLayer';


function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();


    return (
        <div className="sidebar">
            <img className="sidebar_logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
        <SidebarOption Icon={HomeIcon} option="Home" />
        <SidebarOption Icon={SearchIcon} option="Search" />
        <SidebarOption Icon={LibraryMusicIcon} option="Your Library" />
        <br />
        <strong className="sidebar_title"> PLAYLISTS</strong>
        <hr />   
        {playlists?.items?.map((playlist) => (
            <SidebarOption option={playlist.name} />
        ))}    
        </div>
    );
}

export default Sidebar;
