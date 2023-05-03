import React , { useState , useEffect} from 'react';
import userImage from '../../assets/img/user-avatar.png';
import { AiOutlineDown } from "react-icons/ai";
import { Link, useLocation } from 'react-router-dom';

const Header = (props) => {
    const [pageTitle , setpageTitle] = useState("");
    const location = useLocation();
    const [userDropdownVisibilty , setuserDropdownVisibilty] = useState(false);
    

    useEffect(() => {
        // setcurrentPath(location.path);
        if(location.pathname === "/"){
           setpageTitle("Dashboard");
        }else if (location.pathname === "/syncmode"){
            setpageTitle("Sync Mode");
        }else if (location.pathname === "/logs"){
            setpageTitle("Logs");
        }else if (location.pathname === "/settings"){
            setpageTitle("Settings");
        }else{
            setpageTitle("Not Found")
        }
        
    }, [location])

    const userMenuHandler = () => {
        setuserDropdownVisibilty(!userDropdownVisibilty)
    }

    return (
        <header className="header">
            <div className="header__wrapper d__flex jc__between ai__center">
                <div className="header__left">
                    <span className="pageIndicator">{pageTitle}</span>
                </div>
                <div className="header__user d__flex ai__center">
                    <div className="user__info d__flex ai__center c__pointer p__relative" onClick={userMenuHandler}>
                        <div className="user__img">
                            <img src={userImage} alt="User Photo" className="userImg" />
                        </div>
                        <div className="user__name ml__15">
                            <h6>
                                John Doe
                                <span className="icon ml__15">
                                    <AiOutlineDown/>
                                </span>
                            </h6>
                        </div>
                        <div className={"user__dropDown " + (userDropdownVisibilty ? "showDrop" : "")}>
                            <Link to="/settings">
                                Edit Profile
                            </Link>
                        </div>
                    </div>
                    <div className={"header__hamburgerButton d__none " + (props.buttonStatus ? "active" : "")} onClick={() => {props.handleToggle()}}>
                        <span className="hamburgerLine"></span>
                        <span className="hamburgerLine"></span>
                        <span className="hamburgerLine"></span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
