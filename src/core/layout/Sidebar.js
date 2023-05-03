import React , { useRef, useEffect } from 'react';
import { NavLink , Link } from 'react-router-dom';

const Sidebar = (props) => {
    const wrapperRef = useRef(null);

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        }
    })

    const handleClickOutside = event => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target) && props.sidebarStatus) {
            props.hideSidebar();
        }
    };

    return (
        <div ref={wrapperRef} className={"sidebar " + (props.sidebarStatus ? "slideIn" : "")}>
            <div className="sidebar__header">
                <h4><Link to="/" onClick={() => {props.hideSidebar()}} >UPTRACK</Link></h4>
            </div>
            <ul className="sidebar__menu">
                <li className="sidebar__menuItems">
                    <NavLink to="/" exact={true} activeClassName="active" onClick={() => {props.hideSidebar()}}>
                        <span className="icon home">
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.25 13.0625V8.88014C15.25 7.73142 15.25 7.15707 15.1019 6.62813C14.9708 6.1596 14.7553 5.71892 14.4659 5.32774C14.1393 4.88614 13.686 4.53352 12.7792 3.82828L12.4292 3.55606C11.0239 2.46305 10.3213 1.91654 9.54539 1.70647C8.86079 1.52111 8.13921 1.52111 7.45461 1.70647C6.67873 1.91654 5.97608 2.46305 4.57078 3.55606L4.22078 3.82828C3.31404 4.53352 2.86067 4.88614 2.53405 5.32774C2.24473 5.71892 2.0292 6.1596 1.89805 6.62813C1.75 7.15707 1.75 7.73142 1.75 8.88014V13.0625C1.75 13.1205 1.75 13.1495 1.7506 13.1741C1.77677 14.2402 2.63482 15.0982 3.70092 15.1244C3.72546 15.125 3.75447 15.125 3.8125 15.125H4.28125C5.16145 15.125 5.875 14.4115 5.875 13.5312V11.375C5.875 9.92525 7.05025 8.75 8.5 8.75C9.94975 8.75 11.125 9.92525 11.125 11.375V13.5312C11.125 14.4115 11.8385 15.125 12.7188 15.125H13.1875C13.2455 15.125 13.2745 15.125 13.2991 15.1244C14.3652 15.0982 15.2232 14.2402 15.2494 13.1741C15.25 13.1495 15.25 13.1205 15.25 13.0625Z" strokeWidth="1.5" />
                            </svg>
                        </span>
                        <span className="text">
                            Dashboard
                            </span>
                    </NavLink>
                </li>
                <li className="sidebar__menuItems">
                    <NavLink to="/syncmode" activeClassName="active" onClick={() => {props.hideSidebar()}}>
                        <span className="icon restart">
                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.4">
                                    <path d="M15.2884 6.95409C14.4458 4.57021 12.1723 2.86226 9.49992 2.86226C6.82751 2.86226 4.55401 4.57021 3.71142 6.95409M3.71142 6.95409H6.84022M3.71142 6.95409H2.74841V2.86226" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3.70996 11.0459C4.55254 13.4298 6.82605 15.1378 9.49846 15.1378C12.1709 15.1378 14.4444 13.4298 15.287 11.0459M15.287 11.0459H12.1582M15.287 11.0459H16.25V15.1378" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                            </svg>
                        </span>
                        <span className="text">
                            Sync Mode
                        </span>
                    </NavLink>
                </li>
                <li className="sidebar__menuItems">
                    <NavLink to="/logs" activeClassName="active" onClick={() => {props.hideSidebar()}}>
                        <span className="icon payment">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.4">
                                    <path d="M12.2708 7.41663V8.56246" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12.2708 16.5833V15.4375" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M14.5506 10.1666C14.491 9.27195 13.7531 8.56245 12.8438 8.56245H11.5879C10.6988 8.56245 9.97919 9.28295 9.97919 10.1712C9.97919 10.9091 10.4815 11.5526 11.1965 11.7323L13.3443 12.2713C14.0602 12.451 14.5616 13.0945 14.5616 13.8324C14.5616 14.7215 13.8411 15.4411 12.9529 15.4411H11.697C10.7859 15.4411 10.0479 14.7298 9.98927 13.8333" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.88086 6.38262C8.31911 4.94437 10.3064 4.05521 12.5019 4.05521C16.8918 4.05521 20.4512 7.61279 20.4512 12.0009C20.4512 12.6132 20.3751 13.2072 20.244 13.7801" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M19.0148 12.5518L20.4512 13.9883L21.8876 12.5518" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M18.1192 17.6173C16.6809 19.0555 14.6936 19.9447 12.4982 19.9447C8.10824 19.9447 4.54883 16.3871 4.54883 11.999C4.54883 11.3867 4.62491 10.7927 4.75599 10.2198" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5.9852 11.4482L4.54878 10.0117L3.11237 11.4482" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                            </svg>
                        </span>
                        <span className="text">
                            Logs
                        </span>
                    </NavLink>
                </li>
            </ul>
            <div className="sidebar__footer">
                <div className="setting__button mb__35">
                    <NavLink to="/settings" activeClassName="active" onClick={() => {props.hideSidebar()}}>
                        <span className="icon">
                            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.27215 3.43149L8.2396 3.68452V3.68452L7.27215 3.43149ZM4.80803 4.85415L5.07263 3.88979H5.07263L4.80803 4.85415ZM2.08019 9.57891L2.78305 8.86758H2.78305L2.08019 9.57891ZM2.08019 12.4242L2.78305 13.1356L2.78305 13.1356L2.08019 12.4242ZM4.80803 17.149L4.54343 16.1846H4.54343L4.80803 17.149ZM7.27215 18.5716L6.30469 18.8247H6.30469L7.27215 18.5716ZM12.7278 18.5716L13.6953 18.8247H13.6953L12.7278 18.5716ZM15.1919 17.149L15.4565 16.1846H15.4565L15.1919 17.149ZM17.9198 12.4242L17.2169 13.1356L17.9198 12.4242ZM17.9198 9.57891L17.2169 8.86758V8.86758L17.9198 9.57891ZM15.1919 4.85415L14.9273 3.88979L15.1919 4.85415ZM12.7278 3.43149L13.6953 3.17846L13.6953 3.17846L12.7278 3.43149ZM17.605 5.30563L18.405 4.70564L17.605 5.30563ZM15.6918 4.71699L15.4272 3.75263L15.6918 4.71699ZM18.2905 9.21262L18.9934 9.92395L18.2905 9.21262ZM18.7367 7.26279L19.656 6.86907L18.7367 7.26279ZM18.7356 14.7399L17.8165 14.3459L18.7356 14.7399ZM18.2895 12.7896L17.5867 13.5009L18.2895 12.7896ZM17.6026 16.6975L18.4024 17.2978L17.6026 16.6975ZM11.1291 20.4336L11.0115 19.4405L11.1291 20.4336ZM12.5971 19.0716L11.6296 18.8186L12.5971 19.0716ZM2.39746 16.6975L1.5977 17.2978L2.39746 16.6975ZM1.71053 12.7895L1.00767 12.0782L1.71053 12.7895ZM4.30825 4.71702L4.04365 5.68138L4.30825 4.71702ZM2.39511 5.30566L3.19512 5.90564L2.39511 5.30566ZM7.40291 19.0716L6.43545 19.3247L7.40291 19.0716ZM7.40376 2.92827L8.37122 3.1813L7.40376 2.92827ZM1.70957 9.2127L1.00671 9.92403L1.70957 9.2127ZM12.5962 2.92826L13.5637 2.67523L12.5962 2.92826ZM10 2.5C10.3424 2.5 10.6796 2.52019 11.0106 2.55935L11.2456 0.573199C10.8367 0.524832 10.4211 0.5 10 0.5V2.5ZM8.98937 2.55936C9.32042 2.52019 9.65767 2.5 10 2.5V0.5C9.57895 0.5 9.16324 0.524839 8.75436 0.573219L8.98937 2.55936ZM6.4363 2.67524L6.30469 3.17846L8.2396 3.68452L8.37122 3.1813L6.4363 2.67524ZM6.30469 3.17846C6.16376 3.7173 5.60975 4.03716 5.07263 3.88979L4.54343 5.8185C6.15478 6.26062 7.81682 5.30105 8.2396 3.68452L6.30469 3.17846ZM5.07263 3.88979L4.57285 3.75266L4.04365 5.68138L4.54343 5.8185L5.07263 3.88979ZM2.18256 7.65661C2.45048 7.03106 2.79151 6.44381 3.19512 5.90564L1.59509 4.70567C1.09696 5.36988 0.675493 6.09542 0.344089 6.86918L2.18256 7.65661ZM1.00671 9.92403L1.37733 10.2902L2.78305 8.86758L2.41243 8.50137L1.00671 9.92403ZM1.37733 10.2902C1.77352 10.6817 1.77352 11.3214 1.37733 11.7129L2.78305 13.1356C3.97161 11.9611 3.97161 10.042 2.78305 8.86758L1.37733 10.2902ZM1.37733 11.7129L1.00767 12.0782L2.41339 13.5008L2.78305 13.1356L1.37733 11.7129ZM3.19723 16.0972C2.79321 15.5589 2.45182 14.9715 2.18358 14.3458L0.345354 15.1338C0.677143 15.9078 1.09906 16.6335 1.5977 17.2978L3.19723 16.0972ZM4.57478 18.2499L5.07263 18.1133L4.54343 16.1846L4.04558 16.3212L4.57478 18.2499ZM5.07263 18.1133C5.60975 17.966 6.16376 18.2858 6.30469 18.8247L8.2396 18.3186C7.81682 16.7021 6.15478 15.7425 4.54343 16.1846L5.07263 18.1133ZM6.30469 18.8247L6.43545 19.3247L8.37037 18.8186L8.2396 18.3186L6.30469 18.8247ZM10 19.5C9.65735 19.5 9.3198 19.4798 8.98845 19.4405L8.75323 21.4266C9.16247 21.4751 9.57856 21.5 10 21.5V19.5ZM11.0115 19.4405C10.6802 19.4798 10.3427 19.5 10 19.5V21.5C10.4215 21.5 10.8375 21.4751 11.2467 21.4267L11.0115 19.4405ZM13.5645 19.3247L13.6953 18.8247L11.7604 18.3186L11.6296 18.8186L13.5645 19.3247ZM13.6953 18.8247C13.8362 18.2858 14.3902 17.966 14.9274 18.1133L15.4565 16.1846C13.8452 15.7425 12.1832 16.7021 11.7604 18.3186L13.6953 18.8247ZM14.9274 18.1133L15.4253 18.25L15.9545 16.3213L15.4565 16.1846L14.9274 18.1133ZM17.8165 14.3459C17.5482 14.9716 17.2069 15.559 16.8028 16.0972L18.4024 17.2978C18.901 16.6336 19.3229 15.9079 19.6547 15.1339L17.8165 14.3459ZM18.9924 12.0782L18.6227 11.7129L17.2169 13.1356L17.5867 13.5009L18.9924 12.0782ZM18.6227 11.7129C18.2265 11.3214 18.2265 10.6817 18.6227 10.2902L17.2169 8.86758C16.0284 10.042 16.0284 11.9611 17.2169 13.1356L18.6227 11.7129ZM18.6226 10.2902L18.9934 9.92395L17.5876 8.50129L17.2169 8.86758L18.6226 10.2902ZM16.805 5.90561C17.2086 6.44376 17.5496 7.03099 17.8175 7.65652L19.656 6.86907C19.3246 6.09534 18.9031 5.36982 18.405 4.70564L16.805 5.90561ZM15.4272 3.75263L14.9273 3.88979L15.4565 5.8185L15.9564 5.68135L15.4272 3.75263ZM14.9273 3.88979C14.3902 4.03716 13.8362 3.7173 13.6953 3.17846L11.7604 3.68452C12.1832 5.30105 13.8452 6.26062 15.4565 5.8185L14.9273 3.88979ZM13.6953 3.17846L13.5637 2.67523L11.6288 3.18129L11.7604 3.68452L13.6953 3.17846ZM10 15.5C12.4853 15.5 14.5 13.4853 14.5 11H12.5C12.5 12.3807 11.3807 13.5 10 13.5V15.5ZM5.50002 11C5.50002 13.4853 7.51474 15.5 10 15.5V13.5C8.61931 13.5 7.50002 12.3807 7.50002 11H5.50002ZM10 6.49999C7.51474 6.49999 5.50002 8.51471 5.50002 11H7.50002C7.50002 9.61928 8.61931 8.49999 10 8.49999V6.49999ZM14.5 11C14.5 8.51471 12.4853 6.49999 10 6.49999V8.49999C11.3807 8.49999 12.5 9.61928 12.5 11H14.5ZM18.405 4.70564C17.6778 3.73603 16.4567 3.47017 15.4272 3.75263L15.9564 5.68135C16.3378 5.57672 16.6544 5.70485 16.805 5.90561L18.405 4.70564ZM18.9934 9.92395C19.752 9.1743 20.1334 7.98386 19.656 6.86907L17.8175 7.65652C17.9157 7.88579 17.869 8.22325 17.5876 8.50129L18.9934 9.92395ZM19.6547 15.1339C20.1327 14.0189 19.7513 12.8281 18.9924 12.0782L17.5867 13.5009C17.8681 13.779 17.9148 14.1166 17.8165 14.3459L19.6547 15.1339ZM15.4253 18.25C16.4544 18.5323 17.6751 18.2668 18.4024 17.2978L16.8028 16.0972C16.6522 16.2978 16.3357 16.4258 15.9545 16.3213L15.4253 18.25ZM11.2467 21.4267C12.4522 21.2839 13.2942 20.3581 13.5645 19.3247L11.6296 18.8186C11.5294 19.2017 11.26 19.4111 11.0115 19.4405L11.2467 21.4267ZM1.5977 17.2978C2.32501 18.2668 3.54566 18.5323 4.57478 18.2499L4.04558 16.3212C3.66438 16.4258 3.34784 16.2978 3.19723 16.0972L1.5977 17.2978ZM1.00767 12.0782C0.248791 12.828 -0.132586 14.0188 0.345354 15.1338L2.18358 14.3458C2.08529 14.1165 2.13192 13.7789 2.41339 13.5008L1.00767 12.0782ZM4.57285 3.75266C3.54339 3.47019 2.32227 3.73606 1.59509 4.70567L3.19512 5.90564C3.34568 5.70488 3.66232 5.57675 4.04365 5.68138L4.57285 3.75266ZM6.43545 19.3247C6.70572 20.358 7.54778 21.2839 8.75323 21.4266L8.98845 19.4405C8.74002 19.4111 8.47055 19.2016 8.37037 18.8186L6.43545 19.3247ZM8.75436 0.573219C7.54878 0.715867 6.70659 1.64178 6.4363 2.67524L8.37122 3.1813C8.47141 2.79823 8.74091 2.58876 8.98937 2.55936L8.75436 0.573219ZM0.344089 6.86918C-0.133377 7.98396 0.248029 9.17439 1.00671 9.92403L2.41243 8.50137C2.13104 8.22334 2.08436 7.88588 2.18256 7.65661L0.344089 6.86918ZM11.0106 2.55935C11.2591 2.58874 11.5286 2.79821 11.6288 3.18129L13.5637 2.67523C13.2934 1.64175 12.4512 0.715831 11.2456 0.573199L11.0106 2.55935Z" fill="#C4C4C4" />
                            </svg>
                        </span>
                        <span className="text">
                            Settings
                        </span>
                    </NavLink>
                </div>
                <p className="porweby__text">
                    Build by Proveway
                </p>
            </div>
        </div>
    )
}

export default Sidebar
