import React from 'react';
import { DatePicker, Pagination } from 'antd';
import { BsArrowUpDown } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";


const Logs = () => {
    return (
        <div className="logs">
            <div className="logs__wrapper">
                {/* Date range select */}
                <div className="dateRange d__box mb__20">
                    <h5 className="title">Select Date Range</h5>

                    {/* Day tabs */}
                    <div className="dateRange__dayTab d__flex">
                        <div className="singleTab">
                            <span>Today</span>
                        </div>
                        <div className="singleTab">
                            <span>Yesterday</span>
                        </div>
                        <div className="singleTab">
                            <span>Last Week</span>
                        </div>
                        <div className="singleTab active">
                            <span>Last 15 Days</span>
                        </div>
                        <div className="singleTab">
                            <span>Last 30 Days</span>
                        </div>
                    </div>

                    {/* Date picker */}
                    <div className="datePicker d__flex ai__center">
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
                </div>

                {/* Order log starts */}
                <div className="logs__orderLog d__box mt__20">
                    <div className="orderLog__header d__flex jc__between ai__center mb__40">
                        <h4 className="title">
                            Orders Log
                        </h4>
                        <div className="orderLog__headerRight d__flex">
                            <div className="orderLog__search p__relative mr__10">
                                <button className="search">
                                    <AiOutlineSearch />
                                </button>
                                <input type="text" placeholder="Search your order..." />
                            </div>
                            <button className="btn__primary export__button">
                                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.00027 9.17361V1.6875" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.2777 11.3125H2.72217" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.67393 6.5L6.99978 9.17415L4.32617 6.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Export CSV
                            </button>
                        </div>
                    </div>

                    {/* order log table */}
                    <div className="orderLog__table">
                        <table className="mb__40">
                            <thead>
                                <tr>
                                    <th>
                                        ORDER ID
                                        <span className="icon">
                                            <BsArrowUpDown />
                                        </span>
                                    </th>
                                    <th>
                                        ORDER NAME
                                        <span className="icon">
                                            <BsArrowUpDown />
                                        </span>
                                    </th>
                                    <th>
                                        TRANSACTION ID
                                        <span className="icon">
                                            <BsArrowUpDown />
                                        </span>
                                    </th>
                                    <th>
                                        TRACKING NUMBER
                                        <span className="icon">
                                            <BsArrowUpDown />
                                        </span>
                                    </th>
                                    <th>
                                        COURIER NAME
                                        <span className="icon">
                                            <BsArrowUpDown />
                                        </span>
                                    </th>
                                    <th>
                                        SYNC MODE
                                        <span className="icon">
                                            <BsArrowUpDown />
                                        </span>
                                    </th>
                                    <th>
                                        MESSAGE
                                        <span className="icon">
                                            <BsArrowUpDown />
                                        </span>
                                    </th>
                                    <th>
                                        TIME
                                        <span className="icon">
                                            <BsArrowUpDown />
                                        </span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>3094953001146</td>
                                    <td>#193269</td>
                                    <td>59N5180469965064U</td>
                                    <td>CJPKC1021006228YQ</td>
                                    <td>CJPacket Ordinary</td>
                                    <td>Instant AutoSync-v3</td>
                                    <td className="mw__120">Added Tracking Info successfully</td>
                                    <td className="mw__125">2020-12-02 06:07:03</td>
                                </tr>
                                <tr>
                                    <td>3094953001146</td>
                                    <td>#193269</td>
                                    <td>59N5180469965064U</td>
                                    <td>CJPKC1021006228YQ</td>
                                    <td>CJPacket Ordinary</td>
                                    <td>Instant AutoSync-v3</td>
                                    <td className="mw__120">Added Tracking Info successfully</td>
                                    <td className="mw__125">2020-12-02 06:07:03</td>
                                </tr>
                                <tr>
                                    <td>3094953001146</td>
                                    <td>#193269</td>
                                    <td>59N5180469965064U</td>
                                    <td>CJPKC1021006228YQ</td>
                                    <td>CJPacket Ordinary</td>
                                    <td>Instant AutoSync-v3</td>
                                    <td className="mw__120">Added Tracking Info successfully</td>
                                    <td className="mw__125">2020-12-02 06:07:03</td>
                                </tr>
                                <tr>
                                    <td>3094953001146</td>
                                    <td>#193269</td>
                                    <td>59N5180469965064U</td>
                                    <td>CJPKC1021006228YQ</td>
                                    <td>CJPacket Ordinary</td>
                                    <td>Instant AutoSync-v3</td>
                                    <td className="mw__120">Added Tracking Info successfully</td>
                                    <td className="mw__125">2020-12-02 06:07:03</td>
                                </tr>
                                <tr>
                                    <td>3094953001146</td>
                                    <td>#193269</td>
                                    <td>59N5180469965064U</td>
                                    <td>CJPKC1021006228YQ</td>
                                    <td>CJPacket Ordinary</td>
                                    <td>Instant AutoSync-v3</td>
                                    <td className="mw__120">Added Tracking Info successfully</td>
                                    <td className="mw__125">2020-12-02 06:07:03</td>
                                </tr>
                                <tr>
                                    <td>3094953001146</td>
                                    <td>#193269</td>
                                    <td>59N5180469965064U</td>
                                    <td>CJPKC1021006228YQ</td>
                                    <td>CJPacket Ordinary</td>
                                    <td>Instant AutoSync-v3</td>
                                    <td className="mw__120">Added Tracking Info successfully</td>
                                    <td className="mw__125">2020-12-02 06:07:03</td>
                                </tr>
                            </tbody>
                        </table>
                        <Pagination
                            total={85}
                            showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                            defaultPageSize={20}
                            defaultCurrent={1}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logs
