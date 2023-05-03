import React, { useState } from 'react';
import { Tabs, Radio, Popover } from 'antd';
import userImg from './../../../assets/img/user-avatar.png';
import paypalWhite from './../../../assets/img/paypal-white.svg';
import sopifyIcon from './../../../assets/img/sopify.png';
import paypalIcon from './../../../assets/img/paypal.png';
import { AiOutlineQuestionCircle } from "react-icons/ai";


const Settings = () => {

    const [value, setValue] = useState(1);
    const [status , setStatus] = useState(false)
    const onChange = (e) => {

        setValue(e.target.value);
        
        if (e.target.value === 4) {
            setStatus(true)
        }else{
            setStatus(false)
        }
    }


    // Popover / Tooltip
    const content = (
        <div>
            <p>
                For example: <br /> www.trackingmore.com/en/
          </p>
        </div>
    );

    const TabPane = Tabs.TabPane;
    return (
        <div className="settings">
            <div className="settings__wrapper">
                <Tabs type="card" className="settings__tab" tabPosition="left">
                    <TabPane tab={
                        // Tab custom heading
                        <div className="cs__heading d__flex">
                            <span className="icon d__flex">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="8" cy="5.5" rx="3" ry="3.5" stroke="#4A4F56" strokeWidth="1.5" />
                                    <path d="M3.5 14C3.5 14 5 12 8 12C11 12 12.5 14 12.5 14" stroke="#4A4F56" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </span>
                            <h6>
                                Account Details
                            </h6>
                        </div>
                    } key="1">
                        <div className="settings__tabContent">
                            <div className="settings__form">
                                <h4 className="title">Account Details</h4>
                                <div className="userimg p__relative mt__40 mb__15">
                                    <img src={userImg} alt="user avatar" />
                                    <label htmlFor="" className="upload__btn">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.33325 9.91667V11.6667H4.08325L9.33325 6.41667L7.58325 4.66667L2.33325 9.91667Z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M8.75 3.50001L10.5 5.25001L11.9583 3.79167L10.2083 2.04167L8.75 3.50001Z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <input type="file" />
                                    </label>
                                </div>
                                <form action="">
                                    <div className="input__row d__flex">
                                        <div className="single__input">
                                            <label htmlFor="">First Name:</label>
                                            <input type="text" placeholder="John" />
                                        </div>
                                        <div className="single__input">
                                            <label htmlFor="">First Name:</label>
                                            <input type="text" placeholder="Doe" />
                                        </div>
                                    </div>
                                    <div className="single__input">
                                        <label htmlFor="">Email:</label>
                                        <input type="email" placeholder="john@doe.com" />
                                    </div>
                                    <div className="single__input">
                                        <label htmlFor="">Old Password:</label>
                                        <input type="password" placeholder="******" />
                                    </div>
                                    <div className="single__input">
                                        <label htmlFor="">New Password:</label>
                                        <input type="password" placeholder="******" />
                                    </div>
                                    <button className="submit btn__primary">Update</button>
                                </form>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab={
                        // Tab custom heading
                        <div className="cs__heading d__flex">
                            <span className="icon d__flex">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clipRule="evenodd" d="M13.8125 13.8125H6.25C5.49031 13.8125 4.875 13.1972 4.875 12.4375V7.625C4.875 6.86531 5.49031 6.25 6.25 6.25H13.8125C14.5722 6.25 15.1875 6.86531 15.1875 7.625V12.4375C15.1875 13.1972 14.5722 13.8125 13.8125 13.8125Z" stroke="#4A4F56" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.875 9H15.1875" stroke="#4A4F56" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.875 11.75H4.1875C3.42781 11.75 2.8125 11.1347 2.8125 10.375V5.5625C2.8125 4.80281 3.42781 4.1875 4.1875 4.1875H11.75C12.5097 4.1875 13.125 4.80281 13.125 5.5625V6.25" stroke="#4A4F56" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9 11.75H6.9375" stroke="#4A4F56" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <h6>
                                Manage Plan
                            </h6>
                        </div>
                    } key="2">
                        <div className="settings__tabContent">
                            <div className="settings__managePlan">
                                <h4 className="title">Manage Plan</h4>
                                <div className="managePlan__wrapper mt__40 d__flex">
                                    <div className="managePlan__card free mr__20">
                                        <div className="card__header">
                                            <p className="titleTag">ALMOST FREE</p>
                                            <h1 className="price">
                                                $0.01
                                                <span className="duration">/month</span>
                                            </h1>
                                            <p className="price__method">
                                                Billed monthly
                                            </p>
                                        </div>
                                        <ul className="card__planFacilities">
                                            <li>
                                                <span>
                                                    Sync 250* Tracking Requests
                                                    <AiOutlineQuestionCircle />
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    Order ID Based Sync
                                                    <AiOutlineQuestionCircle />
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    Sync 250* Tracking Requests
                                                    <AiOutlineQuestionCircle />
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    Automatic Sync v2.0
                                                    <AiOutlineQuestionCircle />
                                                </span>
                                            </li>
                                        </ul>
                                        <div className="card__button mt__40">
                                            <button className="btn__primary">Selected</button>
                                        </div>
                                    </div>
                                    <div className="managePlan__card unlimited">
                                        <div className="card__ribbon">
                                            <span>Most Popular  </span>
                                        </div>
                                        <div className="card__header">
                                            <p className="titleTag">UNLIMITED</p>
                                            <h1 className="price">
                                                $9.99
                                                <span className="duration">/month</span>
                                            </h1>
                                            <p className="price__method">
                                                Billed monthly
                                            </p>
                                        </div>
                                        <ul className="card__planFacilities">
                                            <li>
                                                <span>
                                                    Sync 250* Tracking Requests
                                                    <AiOutlineQuestionCircle />
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    Order ID Based Sync
                                                    <AiOutlineQuestionCircle />
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    Sync 250* Tracking Requests
                                                    <AiOutlineQuestionCircle />
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    Automatic Sync v2.0
                                                    <AiOutlineQuestionCircle />
                                                </span>
                                            </li>
                                        </ul>
                                        <div className="card__button mt__40">
                                            <button className="btn__primary">Install</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab={
                        // Tab custom heading
                        <div className="cs__heading d__flex">
                            <span className="icon d__flex">
                                <img src={paypalIcon} alt="Icon" />
                            </span>
                            <h6>
                                Connect Paypal
                            </h6>
                        </div>
                    } key="3">
                        <div className="settings__tabContent">
                            <div className="settings__connectPaypal">
                                <h4 className="title">Connect Paypal</h4>
                                <div className="connentPaypal__button mt__40">
                                    <button className="connect__paypal">
                                        <span className="icon">
                                            <img src={paypalWhite} alt="Paypal Icon" />
                                        </span>
                                        Connect Paypal
                                    </button>
                                </div>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab={
                        // Tab custom heading
                        <div className="cs__heading d__flex">
                            <span className="icon d__flex">
                                <img src={sopifyIcon} alt="Icon" />
                            </span>
                            <h6>
                                Shopify Settings
                            </h6>
                        </div>
                    } key="4">
                        <div className="settings__tabContent">
                            <div className="settings__shopifySetting">
                                <h4 className="title">Shopify Settings</h4>
                                <div className="shopifySetting__radioWrapper mt__30">
                                    <Radio.Group onChange={onChange} value={value}>
                                        <Radio value={1}>
                                            Fetch Tracking URL from Shopify Directly.
                                        <Popover content={content} trigger="hover">
                                                <AiOutlineQuestionCircle />
                                            </Popover>
                                        </Radio>
                                        <Radio value={2}>
                                            Use Tracking More As Default Tracking Link Website Directory For All Your Trackings
                                        <Popover content={content} trigger="hover">
                                                <AiOutlineQuestionCircle />
                                            </Popover>
                                        </Radio>
                                        <Radio value={3}>
                                            Use 17Track.net As Default Tracking Link Website Directory For All Your Trackings.
                                        <Popover content={content} trigger="hover">
                                                <AiOutlineQuestionCircle />
                                            </Popover>
                                        </Radio>
                                        <Radio value={4}>
                                            Custom Link
                                        <Popover content={content} trigger="hover">
                                                <AiOutlineQuestionCircle />
                                            </Popover>
                                        </Radio>
                                    </Radio.Group>
                                </div>
                                {status === false ? (
                                    ""
                                ): (
                                        <div className = "custom__link">
                                            <input type="text" placeholder="example.com/anything" />
                                        </div>
                                    )
                                }
                                <button className="btn__primary mt__20">Save</button>
                        </div>
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        </div >
    )
}

export default Settings
