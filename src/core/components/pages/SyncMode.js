import React from 'react'
import { Tabs, DatePicker, Switch } from 'antd';
import { AiOutlineQuestionCircle , AiOutlineCheck } from "react-icons/ai";

const SyncMode = () => {
    const TabPane = Tabs.TabPane;
    return (
        <div className="syncmode">
            <div className="syncmode__wrapper">
                <div className="syncmode__heading">
                    <h4 className="title">How do you want to sync your orders?</h4>
                </div>
                <div className="syncmode__synctab mt__40">
                    <Tabs type="card" className="synctab">
                        <TabPane tab={
                            // Tab custom heading
                            <div className="cs__heading t__center">
                                <span className="icon d__flex">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.0776 3.92252L16.7376 3.26252" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16.7559 12.1909L16.0592 11.485" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M8.49671 3.92252L7.83671 3.26252" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.85465 18.4398L1.56032 17.1445C1.2019 16.7861 1.2019 16.2059 1.56032 15.8474L10.3392 7.06486C10.6976 6.70645 11.2779 6.70645 11.6354 7.06486L12.9297 8.36011C13.2881 8.71853 13.2881 9.29878 12.9297 9.6572L4.15082 18.4398C3.79332 18.7982 3.21307 18.7982 2.85465 18.4398Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M11.1001 11.485L8.50598 8.90001" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12.2826 2.22669V1.29169" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M17.7733 7.71752H18.7083" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <h6>
                                    Automatic Intelligence
                                </h6>
                            </div>
                        } key="1">
                            <div className="synctabContent mt__25">
                                <p className="synctabContent__introtext">
                                    Your data will be updated automatically.
                                </p>
                                <div className="sycntabContent__edit mt__20">
                                    <p className="edit__title">
                                        Do you want to run automatic intelligence?
                                    </p>
                                    <div className="edit__switch mt__10 mb__25">
                                        <Switch checkedChildren="Yes" unCheckedChildren="No" defaultChecked />
                                    </div>
                                    <button className="btn__primary small edit__saveButton">Save</button>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab={
                            // Tab custom heading
                            <div className="cs__heading t__center">
                                <span className="icon d__flex">
                                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M5.14286 0.955383C5.67542 0.955383 6.10714 1.38711 6.10714 1.91967V3.20538H11.8929V1.91967C11.8929 1.38711 12.3246 0.955383 12.8571 0.955383C13.3897 0.955383 13.8214 1.38711 13.8214 1.91967V3.20538H14.1429C16.2731 3.20538 18 4.93228 18 7.06252V9.63395V16.0625C18 18.1928 16.2731 19.9197 14.1429 19.9197H3.85714C1.7269 19.9197 0 18.1928 0 16.0625V9.63395V7.06253C0 4.93229 1.7269 3.20538 3.85714 3.20538H4.17857V1.91967C4.17857 1.38711 4.6103 0.955383 5.14286 0.955383ZM16.0714 9.63395H1.92857V16.0625C1.92857 17.1276 2.79202 17.9911 3.85714 17.9911H14.1429C15.208 17.9911 16.0714 17.1276 16.0714 16.0625V9.63395ZM5.14286 11.5625C4.43278 11.5625 3.85714 12.1382 3.85714 12.8482C3.85714 13.5583 4.43278 14.134 5.14286 14.134H6.42857C7.13865 14.134 7.71429 13.5583 7.71429 12.8482C7.71429 12.1382 7.13865 11.5625 6.42857 11.5625H5.14286Z" fill="white" />
                                    </svg>
                                </span>
                                <h6>
                                    Based On Date Range
                                </h6>
                            </div>
                        } key="2">
                            <div className="synctabContent mt__25">
                                <p className="synctabContent__introtext">
                                    Your data will be updated based on the date Range
                                </p>
                                {/* Date picker */}
                                <div className="datePicker d__flex ai__center mt__20">
                                    <div className="startDate p__relative">
                                        <span className="icon">
                                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M4.625 0.28125C5.09099 0.28125 5.46875 0.65901 5.46875 1.125V2.25H10.5312V1.125C10.5312 0.65901 10.909 0.28125 11.375 0.28125C11.841 0.28125 12.2188 0.65901 12.2188 1.125V2.25H12.5C14.364 2.25 15.875 3.76104 15.875 5.625V6.75V13.5C15.875 15.364 14.364 16.875 12.5 16.875H3.5C1.63604 16.875 0.125 15.364 0.125 13.5V6.75V5.625C0.125 3.76104 1.63604 2.25 3.5 2.25H3.78125V1.125C3.78125 0.65901 4.15901 0.28125 4.625 0.28125ZM1.8125 6.75V13.5C1.8125 14.432 2.56802 15.1875 3.5 15.1875H12.5C13.432 15.1875 14.1875 14.432 14.1875 13.5V6.75H1.8125ZM3.5 9.28125C3.5 8.81526 3.87776 8.4375 4.34375 8.4375H11.6562C12.1222 8.4375 12.5 8.81526 12.5 9.28125C12.5 9.74724 12.1222 10.125 11.6562 10.125H4.34375C3.87776 10.125 3.5 9.74724 3.5 9.28125ZM3.5 12.6562C3.5 12.1903 3.87776 11.8125 4.34375 11.8125H11.6562C12.1222 11.8125 12.5 12.1903 12.5 12.6562C12.5 13.1222 12.1222 13.5 11.6562 13.5H4.34375C3.87776 13.5 3.5 13.1222 3.5 12.6562Z" fill="#4A4F56" />
                                            </svg>
                                        </span>
                                        <DatePicker />
                                    </div>
                                    <div className="to ml__15 mr__15">To</div>
                                    <div className="endDate p__relative">
                                        <span className="icon">
                                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M4.625 0.28125C5.09099 0.28125 5.46875 0.65901 5.46875 1.125V2.25H10.5312V1.125C10.5312 0.65901 10.909 0.28125 11.375 0.28125C11.841 0.28125 12.2188 0.65901 12.2188 1.125V2.25H12.5C14.364 2.25 15.875 3.76104 15.875 5.625V6.75V13.5C15.875 15.364 14.364 16.875 12.5 16.875H3.5C1.63604 16.875 0.125 15.364 0.125 13.5V6.75V5.625C0.125 3.76104 1.63604 2.25 3.5 2.25H3.78125V1.125C3.78125 0.65901 4.15901 0.28125 4.625 0.28125ZM1.8125 6.75V13.5C1.8125 14.432 2.56802 15.1875 3.5 15.1875H12.5C13.432 15.1875 14.1875 14.432 14.1875 13.5V6.75H1.8125ZM3.5 9.28125C3.5 8.81526 3.87776 8.4375 4.34375 8.4375H11.6562C12.1222 8.4375 12.5 8.81526 12.5 9.28125C12.5 9.74724 12.1222 10.125 11.6562 10.125H4.34375C3.87776 10.125 3.5 9.74724 3.5 9.28125ZM3.5 12.6562C3.5 12.1903 3.87776 11.8125 4.34375 11.8125H11.6562C12.1222 11.8125 12.5 12.1903 12.5 12.6562C12.5 13.1222 12.1222 13.5 11.6562 13.5H4.34375C3.87776 13.5 3.5 13.1222 3.5 12.6562Z" fill="#4A4F56" />
                                            </svg>
                                        </span>
                                        <DatePicker />
                                    </div>
                                </div>
                                <div className="sycntabContent__edit mt__15">
                                    <p className="edit__title">
                                        Over-write Already Synced Trackings:
                                    </p>
                                    <div className="edit__switch mt__10 mb__25">
                                        <Switch checkedChildren="Yes" unCheckedChildren="No" defaultChecked />
                                    </div>
                                    <p className="edit__title">
                                        Notify buyer about update via email:
                                    </p>
                                    <div className="edit__switch mt__10 mb__25">
                                        <Switch checkedChildren="Yes" unCheckedChildren="No" />
                                    </div>
                                    <button className="btn__primary small edit__saveButton">Save</button>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab={
                            // Tab custom heading
                            <div className="cs__heading t__center">
                                <span className="icon d__flex">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.33333 13.75V8.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M13.3833 13.75H10.6333V8.25H13.3833C14.3962 8.25 15.2166 9.07042 15.2166 10.0833V11.9167C15.2166 12.9296 14.3962 13.75 13.3833 13.75V13.75Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M16.8236 19.5736H5.17639C3.65748 19.5736 2.42639 18.3425 2.42639 16.8236V5.17639C2.42639 3.65747 3.65748 2.42639 5.17639 2.42639H16.8226C18.3416 2.42639 19.5726 3.65747 19.5726 5.17639V16.8226C19.5736 18.3425 18.3425 19.5736 16.8236 19.5736V19.5736Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <h6>
                                    Based on Order ID
                                </h6>
                            </div>
                        } key="3">
                            <div className="synctabContent mt__25">
                                <p className="synctabContent__introtext">
                                    Your data will be updated based on the Order ID
                                </p>
                                <div className="synctabContent__orderidInput mt__25 mb__25">
                                    <label className="d__block" htmlFor="">Order ID: <span className="icon"><AiOutlineQuestionCircle/></span></label>
                                    <input type="text" placeholder="Fill in the Orders Ids separated by commas..."/>
                                    <p className="d__flex">
                                        <span className="sampleOrderId">
                                            <AiOutlineCheck/>
                                            0123456789
                                        </span>
                                        <span className="sampleOrderId">
                                            <AiOutlineCheck/>
                                            0123456789
                                        </span>
                                        <span className="sampleOrderId">
                                            <AiOutlineCheck/>
                                            0123456789
                                        </span>
                                    </p>
                                </div>
                                <button className="btn__primary small edit__saveButton">Save</button>
                            </div>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default SyncMode
