import React from 'react';
import './Header.css';
import MenuIcon from "@material-ui/icons/Menu";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function Header() {
    return (
        <div className="header">
            <div className="header__left" >
                <LocationOnIcon  />
                <h2> Blacksburg, VA </h2> 
                </div>
            <div className="header__right">
                <a href = "https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TDJLqaoqK6syYLRSNaiwsDBJsTQ1N0k0SjJPMkhMsjKoMDVOMUo2SrU0MEw2MTMyMfESScpJTM5WyEjNUwCzipNKi9IBTysXAA&q=black+hen+blacksburg&oq=bl&aqs=chrome.1.69i59j46j69i57j0l2j46l3.2453j0j15&sourceid=chrome&ie=UTF-8"
                    alt=""
                >Gift Cards</a>
                <MenuIcon className="header__menuIcon"/>
                {/* collapsed burger menu */}
        </div> 
            
    </div>
    )
}

export default Header;
