import React, { useState } from 'react';
import { Radio, DatePicker } from 'antd';
import { AiFillCheckCircle, AiOutlineQuestionCircle } from "react-icons/ai";
import paypalWhite from './../../../assets/img/paypal-white.svg'
import successIcon from '../../../assets/img/success.png';


const OnboardModal = (props) => {
    const [value, setValue] = useState(2);
    const [status, setStatus] = useState(false);
    const [firstStep, setFirstStep] = useState(true);
    const [secondstep, setSecondStep] = useState(false);
    const [thirdStep, setThirdStep] = useState(false);
    const [fourthStep, setfourthStep] = useState(false);
    const [finalStep, setFinalStep] = useState(false);

    
    // Onboard modal progress functions 
    const fristStepHandler = () => {
        setFirstStep(false);
        setSecondStep(true);
        console.log("first Step")
    }
    const secondStepHandler = () => {
        setSecondStep(false);
        setThirdStep(true);
    }
    const thirdStepHandler = () => {
        setThirdStep(false);
        setfourthStep(true);
    }

    const fourthStepHandler = () => {
        setfourthStep(false);
        setFinalStep(true);
    }
    const handleCancel = () => {
        props.modalStatus();
    };

    // Radio handle function
    const onChange = (e) => {

        setValue(e.target.value);
        if (e.target.value === 1) {
            setStatus(true)
        } else {
            setStatus(false)
        }
    }
    return (
        <div className="onboardModal">
            <div className="onboardModal__content">

                {/* Paypal connect */}
                <div className={"onboardModal__paypalConnent " + (firstStep ? "" : "stepDone")}>
                    <div className="onboardModal__pogress d__flex jc__between ai__center mb__40">
                        <div className="pogress__step done">
                            <span className="icon">
                                <AiFillCheckCircle />
                            </span>
                            <span className="text">Connect Paypal</span>
                        </div>
                        <div className="pogress__step">
                            <span className="stepNumber">
                                2
                            </span>
                            <span className="text">Connect Payments</span>
                        </div>
                        <div className="pogress__step">
                            <span className="stepNumber">
                                3
                            </span>
                            <span className="text">Protect Orders</span>
                        </div>
                    </div>
                    <div className="onboardModal__heading">
                        <h3>
                            Connect your Paypal Account
                        </h3>
                        <p>
                            Protect your orders by connections your Paypal Account
                        </p>
                    </div>
                    <div className="onboardModal__connectPaypalForm">
                        <div className="singleInput">
                            <label htmlFor="" className="d__block">Client ID: <AiOutlineQuestionCircle /></label>
                            <input type="text" placeholder="12345689" />
                        </div>
                        <div className="singleInput">
                            <label htmlFor="" className="d__block">Secret ID: <AiOutlineQuestionCircle /></label>
                            <input type="text" placeholder="12345689" />
                        </div>
                        <div className="connectPaypal__button">
                            <button className="connect__paypal" onClick={fristStepHandler}>
                                <span className="icon">
                                    <img src={paypalWhite} alt="Paypal Icon" />
                                </span>
                                Connect Paypal
                            </button>
                        </div>
                        <p className="intruction">
                            <span>
                                View Instructions
                            </span>
                        </p>
                    </div>
                </div>

                {/* Connect Payment */}
                <div className={"onboardModal__paymentConnent " + (secondstep ? "startStep" : "")}>
                    <div className="onboardModal__pogress d__flex jc__between ai__center mb__40">
                        <div className="pogress__step done">
                            <span className="icon">
                                <AiFillCheckCircle />
                            </span>
                            <span className="text">Connect Paypal</span>
                        </div>
                        <div className="pogress__step done">
                            <span className="icon">
                                <AiFillCheckCircle />
                            </span>
                            <span className="text">Connect Payments</span>
                        </div>
                        <div className="pogress__step">
                            <span className="stepNumber">
                                3
                            </span>
                            <span className="text">Protect Orders</span>
                        </div>
                    </div>
                    <div className="onboardModal__heading">
                        <h3>
                            Start Your Free 7-Day Trial
                            <span className="tag">UNLIMITED</span>
                        </h3>
                        <p>
                            When your trial period is over, you’ll be charged $9,99 per month.
                        </p>
                    </div>
                    <div className="onboardModal__connectPaypalForm">
                        <div className="singleInput">
                            <span className="icon">
                                <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.2" d="M19.935 14.9762H1.815C1.57862 14.9782 1.34416 14.9329 1.12502 14.8429C0.905875 14.7528 0.706336 14.6198 0.537796 14.4514C0.369256 14.283 0.235016 14.0826 0.14274 13.8615C0.050465 13.6404 0.00196164 13.403 0 13.1629L0 2.31334C0.00196164 2.0732 0.050465 1.83581 0.14274 1.61472C0.235016 1.39363 0.369256 1.19317 0.537796 1.02479C0.706336 0.8564 0.905875 0.723389 1.12502 0.633346C1.34416 0.543304 1.57862 0.497994 1.815 0.500003H19.935C20.1714 0.497994 20.4058 0.543304 20.625 0.633346C20.8441 0.723389 21.0437 0.8564 21.2122 1.02479C21.3807 1.19317 21.515 1.39363 21.6073 1.61472C21.6995 1.83581 21.748 2.0732 21.75 2.31334V13.1705C21.7441 13.6541 21.5497 14.1157 21.2096 14.4541C20.8694 14.7925 20.4111 14.9803 19.935 14.9762ZM7.5 4.94191C7.5 4.59143 7.2375 4.30953 6.915 4.30953H2.835C2.5125 4.30953 2.25 4.59143 2.25 4.94191V7.48667C2.25 7.83715 2.5125 8.11905 2.835 8.11905H6.915C7.2375 8.11905 7.5 7.83715 7.5 7.48667V4.94191Z" fill="black" />
                                    <path opacity="0.3" d="M18.75 11.9286H16.5C16.0125 11.9286 15.75 11.7 15.75 11.1667C15.75 10.6334 16.0125 10.4048 16.5 10.4048H18.75C19.2375 10.4048 19.5 10.6334 19.5 11.1667C19.5 11.7 19.2375 11.9286 18.75 11.9286ZM14.25 11.9286H12C11.5125 11.9286 11.25 11.7 11.25 11.1667C11.25 10.6334 11.5125 10.4048 12 10.4048H14.25C14.7375 10.4048 15 10.6334 15 11.1667C15 11.7 14.7375 11.9286 14.25 11.9286ZM9.75 11.9286H7.5C7.0125 11.9286 6.75 11.7 6.75 11.1667C6.75 10.6334 7.0125 10.4048 7.5 10.4048H9.75C10.2375 10.4048 10.5 10.6334 10.5 11.1667C10.5 11.7 10.2375 11.9286 9.75 11.9286ZM5.25 11.9286H3C2.5125 11.9286 2.25 11.7 2.25 11.1667C2.25 10.6334 2.5125 10.4048 3 10.4048H5.25C5.7375 10.4048 6 10.6334 6 11.1667C6 11.7 5.7375 11.9286 5.25 11.9286Z" fill="black" />
                                </svg>
                            </span>
                            <input className="cp__input" type="text" placeholder="4242 4242 4242 4242 " />
                        </div>
                        <div className="connectPaypal__button">
                            <button className="btn__primary" onClick={secondStepHandler}>
                                Start Your Trial
                            </button>
                        </div>
                        <p className="intruction btext">
                            <span>
                                Choose Another Plan
                            </span>
                        </p>
                    </div>
                </div>

                {/* Choose plan */}
                <div className={"onboardModal__chosePlan " + (thirdStep ? "startStep" : "")}>
                    <div className="onboardModal__heading">
                        <h3 className="t__center">
                            <span>
                                Choose Your Plan
                            </span>
                        </h3>
                    </div>
                    <div className="chosePlan__cards d__flex">
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
                                <button className="btn__primary" onClick={thirdStepHandler}>Choose</button>
                            </div>
                        </div>
                        <div className="managePlan__card unlimited">
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
                                <button className="btn__primary" onClick={thirdStepHandler}>Choose</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Protect order */}
                <div className={"onboardModal__orderProtect " + (fourthStep ? "startStep" : "")}>
                    <div className="onboardModal__pogress d__flex jc__between ai__center mb__40">
                        <div className="pogress__step done">
                            <span className="icon">
                                <AiFillCheckCircle />
                            </span>
                            <span className="text">Connect Paypal</span>
                        </div>
                        <div className="pogress__step done">
                            <span className="icon">
                                <AiFillCheckCircle />
                            </span>
                            <span className="text">Connect Payments</span>
                        </div>
                        <div className="pogress__step done">
                            <span className="icon">
                                <AiFillCheckCircle />
                            </span>
                            <span className="text">Protect Orders</span>
                        </div>
                    </div>
                    <div className="onboardModal__heading">
                        <h3>
                            Protect Your Previous Orders
                        </h3>
                        <p>
                            Choose whether you want to protect previous order:
                        </p>
                    </div>
                    <div className="onboardModal__protectOrderRadio">
                        <Radio.Group onChange={onChange} value={value}>
                            <Radio value={1}>
                                Protect orders withing the time range:
                            </Radio>
                            <div className={
                                "datePicker " +
                                (status ? "showdate" : "")
                            }>
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
                            <Radio value={2}>
                                Only protect orders goind forward
                            </Radio>
                        </Radio.Group>
                        <button className="btn__primary mt__20" onClick={fourthStepHandler}>Finish Setup</button>
                    </div>
                </div>
                {/* Success */}
                <div className={"onboardModal__success " + (finalStep ? "startStep" : "")}>
                    <div className="onboardModal__heading t__center">
                        <div className="icon mb__20">
                            <img src={successIcon} alt="Success" />
                        </div>
                        <h3 className="t__center">Setup Completed!</h3>
                    </div>
                    <div className="successInfoBox__wrapper mt__35 mb__35 d__flex jc__center">
                        <div className="successInfoBox t__center">
                            <span className="icon">
                                <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.2172 6.22318C16.7229 4.12249 14.2741 2.74829 11.5001 2.74829C6.94598 2.74829 3.25488 6.43939 3.25488 10.9935C3.25488 11.4873 3.30619 11.9682 3.38955 12.4373" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.55945 17.9507V15.7639H6.74809" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.78296 15.7639C6.27717 17.8646 8.72599 19.2388 11.5 19.2388C16.0541 19.2388 19.7452 15.5477 19.7452 10.9936C19.7452 10.4998 19.6939 10.0189 19.6106 9.5498" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M18.4407 4.03638V6.22318H16.2521" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.90011 9.43421C7.78243 9.58629 6.91943 10.5345 6.91943 11.6934C6.91943 12.9586 7.9455 13.9837 9.20976 13.9837H14.2485C15.2608 13.9837 16.0808 13.1638 16.0808 12.1515C16.0808 11.1391 15.2608 10.3192 14.2485 10.3192C14.2485 8.80117 13.0181 7.5708 11.5001 7.5708C10.2926 7.5708 9.2684 8.35135 8.90011 9.43421Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <p>
                                We auto-synced all your past orders
                                </p>
                        </div>
                        <div className="successInfoBox t__center">
                            <span className="icon">
                                <img src={paypalWhite} alt="" />
                            </span>
                            <p>
                                Your Paypal Account connected successfully
                                </p>
                        </div>
                    </div>
                    <button className="btn__primary" onClick={handleCancel}>Check Your Dashboard</button>
                </div>
            </div>
        </div>
    )
}

export default OnboardModal
