import React, { useState } from 'react';
import { DatePicker } from 'antd';
import ReactApexChart from 'react-apexcharts';
import storeImg from '../../../assets/img/store.png';
import paypalBold from '../../../assets/img/paypal-bold.png';
import { AiOutlineCheck, AiOutlineClose, AiOutlineSync, AiOutlineSearch } from "react-icons/ai";
import { BsArrowUpDown } from "react-icons/bs";



const DashboardHome = () => {

    // Sync / no sync status
    const [syncStatus, setSyncStatus] = useState(true);

    // Graph codes
    const series = [{
        name: 'Unfullfilled Orders',
        data: [45, 60, 50, 52, 45, 60, 75, 60, 70, 85, 90, 95]
    }, {
        name: 'Completed Orders',
        data: [45, 60, 50, 52, 45, 60, 75, 60, 70, 85, 90, 95]
    },];

    const options = {
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
                show: true
            },
            zoom: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },

        grid: {
            strokeDashArray: 10,
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -100,
                    offsetY: 0
                }
            }
        }],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '25%'
            },
            dataLabels: {
                enabled: false
            },
        },
        yaxis: {
            type: "Money",
            categories: ['1k', '2k', '3k', '4k',
                '5k', '6k',
            ],
        },
        xaxis: {
            type: 'Month',
            categories: ['Jan', 'Feb', 'Mar', 'Apr',
                'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Otc', 'Nov', 'Dec'
            ],
        },
        legend: {
            show: false
        },
        fill: {
            colors: ['#EA5252', '#1EC26A'],
            opacity: 1
        }
    };
    return (
        <div className="dashboardHome">
            <div className="dashboardHome__topContent d__grid">
                {/* Left content */}
                <div className="topContent__leftArea">
                    {/* Sync status */}
                    {
                        syncStatus ? (
                            <div className="topContent__syncStatus d__box">
                                <h5 className="title">
                                    Sync Status
                                </h5>
                                <div className="d__flex jc__between mt__40">
                                    <div className="icon">
                                        <img src={storeImg} alt="Icon" />
                                    </div>
                                    <div className="syncText">
                                        <p>
                                            Automatic Sync
                                </p>
                                    </div>
                                    <div className="icon">
                                        <img src={paypalBold} alt="Icon" />
                                    </div>
                                </div>
                                <div className="bottom__icons d__flex jc__between ai__center mt__35 mb__30">
                                    <div className="fillIcon">
                                        <AiOutlineCheck />
                                    </div>
                                    <div className="fillIcon">
                                        <AiOutlineSync />
                                    </div>
                                    <div className="fillIcon">
                                        <AiOutlineCheck />
                                    </div>
                                </div>
                            </div>
                        ) : (
                                <div className="topContent__syncStatus d__box">
                                    <h5 className="title">
                                        Sync Status
                                    </h5>
                                    <div className="d__flex jc__between mt__40">
                                        <div className="icon">
                                            <img src={storeImg} alt="Icon" />
                                        </div>
                                        <div className="syncText">
                                            <p>
                                                Automatic
                                                Sync
                                                Disabled
                                    </p>
                                        </div>
                                        <div className="icon">
                                            <img src={paypalBold} alt="Icon" />
                                        </div>
                                    </div>
                                    <div className="bottom__icons d__flex jc__between ai__center mt__35 mb__30 n__sync">
                                        <div className="fillIcon">
                                            <AiOutlineCheck />
                                        </div>
                                        <div className="fillIcon n__sync">
                                            <AiOutlineClose />
                                        </div>
                                        <div className="fillIcon n__sync">
                                            <AiOutlineClose />
                                        </div>
                                    </div>
                                </div>
                            )
                    }

                    {/* Order count */}
                    <div className="topContent__orderCount mt__20 d__grid">
                        <div className="singleOrder d__box">
                            <h6 className="orderTitle">
                                Total Orders
                            </h6>
                            <p className="orderNumber">1,235</p>
                            <span className="icon">
                                <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.8427 4.33337H4.67607V15.2023C4.67607 15.7083 5.08674 16.119 5.59274 16.119H12.9261C13.4321 16.119 13.8427 15.7083 13.8427 15.2023V4.33337Z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.5558 7.62035C11.2717 8.33631 11.2717 9.49711 10.5558 10.2131C9.83981 10.929 8.679 10.929 7.96304 10.2131C7.24708 9.49711 7.24708 8.33631 7.96304 7.62035C8.679 6.90438 9.83981 6.90438 10.5558 7.62035" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.42607 13.5H11.0927" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.8427 7.99996H15.6761C16.689 7.99996 17.5094 7.17954 17.5094 6.16663V2.49996C17.5094 1.48704 16.689 0.666626 15.6761 0.666626H2.84273C1.82982 0.666626 1.0094 1.48704 1.0094 2.49996V6.16663C1.0094 7.17954 1.82982 7.99996 2.84273 7.99996H4.67607" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </div>
                        <div className="singleOrder d__box">
                            <h6 className="orderTitle">
                                Paypal Orders
                            </h6>
                            <p className="orderNumber">1,200</p>
                            <span className="icon">
                                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.48657 9.91392H9.01198C11.267 9.91392 13.1865 8.27308 13.5385 6.04558V6.04558C13.9766 3.26533 11.828 0.75 9.01198 0.75H4.12615C3.67515 0.75 3.29107 1.07817 3.22048 1.52367L1.19648 14.357C1.1094 14.9134 1.53932 15.4167 2.10215 15.4167H4.71098L5.43698 10.8113C5.51857 10.2943 5.96407 9.91392 6.48657 9.91392Z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.5301 4.56604C15.1224 5.47354 16.1051 7.29862 15.7952 9.26121C15.4441 11.4887 13.5237 13.1295 11.2687 13.1295H11.288H8.87806L8.35006 16.4754C8.28039 16.9218 7.89539 17.25 7.44439 17.249L4.95839 17.2472C4.67698 17.2472 4.46248 16.9951 4.50556 16.7174L4.71089 15.4166" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </div>
                        <div className="singleOrder d__box">
                            <h6 className="orderTitle">
                                Completed Paypal Orders
                            </h6>
                            <p className="orderNumber">1,235</p>
                            <span className="icon">
                                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.80173 8.28683L9.26398 11.75L16.2994 4.71458C14.8511 2.34042 12.2441 0.75 9.2594 0.75C4.70265 0.75 1.0094 4.44325 1.0094 9C1.0094 13.5568 4.70265 17.25 9.2594 17.25C13.5054 17.25 16.9988 14.0417 17.4553 9.91667" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </div>
                        <div className="singleOrder d__box">
                            <h6 className="orderTitle">
                                Unfulfilled Orders
                            </h6>
                            <p className="orderNumber">1,235</p>
                            <span className="icon">
                                <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.31497 18.7128L3.80597 15.2038C3.46222 14.8601 3.2688 14.3935 3.2688 13.9077V8.09233C3.2688 7.6065 3.46222 7.13992 3.80597 6.79617L7.31497 3.28717C7.65872 2.94342 8.1253 2.75 8.61113 2.75H14.4255C14.9114 2.75 15.378 2.94342 15.7217 3.28717L19.2307 6.79617C19.5754 7.13992 19.7688 7.6065 19.7688 8.09233V13.9067C19.7688 14.3926 19.5754 14.8592 19.2316 15.2029L15.1855 19.25H8.61113C8.1253 19.25 7.65872 19.0566 7.31497 18.7128V18.7128Z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8.7688 13.75L14.2688 8.25" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M14.2688 13.75L8.7688 8.25" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </span>
                        </div>
                    </div>
                </div>

                {/* Right content */}
                <div className="topContent__rightArea">
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

                    {/* Order summary */}
                    <div className="orderSummary d__box">
                        <h5 className="title">Orders Summary</h5>

                        <div className="orderSummary__chart p__relative">
                            <div className="orderSummary__customLabel d__flex">
                                <div className="label d__flex ai__center">
                                    <span className="color green"></span>
                                    <span className="text">Completed Orders</span>
                                </div>
                                <div className="label d__flex ai__center">
                                    <span className="color red"></span>
                                    <span className="text">Unfullfilled Orders</span>
                                </div>
                            </div>
                            <ReactApexChart options={options} series={series} type="bar" height={220} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Order log starts */}
            <div className="dashboardHome__orderLog d__box mt__20">
                <div className="orderLog__header d__flex jc__between ai__center mb__40">
                    <h4 className="title">
                        Orders Log
                    </h4>
                    <div className="orderLog__search p__relative">
                        <button className="search">
                            <AiOutlineSearch />
                        </button>
                        <input type="text" placeholder="Search your order..." />
                    </div>
                </div>

                {/* order log table */}
                <div className="orderLog__table">
                    <table>
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
                </div>
            </div>
        </div>
    )
}

export default DashboardHome
