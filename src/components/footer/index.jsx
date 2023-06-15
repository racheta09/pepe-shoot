import React, { useState, useEffect } from "react"
import "./styles.scss"
import { Link } from "react-router-dom"

import img1 from "../../assets/images/background/bg-ft.png"
import img2 from "../../assets/images/background/bg-ft2.png"

function Footer(props) {
    const [isVisible, setIsVisible] = useState(false)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", toggleVisibility)

        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    return (
        <footer id="footer">
            <div className="footer-main">
                <img src={img1} alt="" className="bg1" />
                <img src={img2} alt="" className="bg2" />
                <div className="container">
                    <ul className="widget-social">
                        <li>
                            <Link
                                to="https://twitter.com/PepeShootP2E"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <svg
                                    width="24"
                                    height="22"
                                    viewBox="0 0 24 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M21.173 4.01621C22.2015 3.3728 22.971 2.35967 23.338 1.16598C22.3715 1.76605 21.3141 2.18875 20.2115 2.41581C18.6828 0.723595 16.2607 0.311787 14.2986 1.41049C12.3365 2.5092 11.3202 4.84642 11.8176 7.11616C7.85881 6.90819 4.17053 4.95138 1.67052 1.73267C0.365817 4.08755 1.03255 7.09789 3.19419 8.61211C2.41252 8.58582 1.64818 8.36436 0.964911 7.96619C0.964911 7.9878 0.964911 8.00941 0.964911 8.03102C0.965363 10.484 2.6175 12.597 4.91519 13.0832C4.19015 13.2896 3.42963 13.32 2.69165 13.172C3.33783 15.2698 5.18545 16.7069 7.29133 16.7498C5.54718 18.1823 3.39322 18.9591 1.17602 18.9553C0.783024 18.9559 0.390336 18.9322 0 18.8845C2.25152 20.3985 4.87202 21.2021 7.54833 21.1992C11.2717 21.226 14.85 19.6899 17.4828 16.9347C20.1156 14.1795 21.5832 10.4349 21.5573 6.53868C21.5573 6.31536 21.5523 6.09325 21.5424 5.87234C22.5067 5.1431 23.3389 4.2397 24 3.20461C23.1017 3.62129 22.1487 3.89486 21.173 4.01621Z"
                                        fill="white"
                                    />
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="https://www.instagram.com/pepeshootp2e/"
                                target="_blank"
                                rel="norefferer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    class="bi bi-instagram"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />{" "}
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="https://t.me/PepeShootP2Echat"
                                target="_blank"
                                rel="norefferer"
                            >
                                <svg
                                    width="30"
                                    height="27"
                                    viewBox="0 0 30 27"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M28.8558 1.15613C28.3645 0.744 27.5929 0.685032 26.7951 1.0019H26.7938C25.9547 1.33498 3.04206 11.0576 2.10931 11.4548C1.93966 11.5131 0.458 12.0601 0.61062 13.2783C0.746864 14.3767 1.93769 14.8316 2.08311 14.884L7.9082 16.8572C8.29466 18.1299 9.71933 22.8253 10.0344 23.8284C10.2309 24.4537 10.5512 25.2754 11.1126 25.4445C11.6051 25.6325 12.0951 25.4607 12.4121 25.2145L15.9735 21.9466L21.7226 26.3822L21.8595 26.4632C22.2499 26.6343 22.6239 26.7198 22.9809 26.7198C23.2566 26.7198 23.5213 26.6686 23.7741 26.5662C24.6355 26.2163 24.98 25.4044 25.016 25.3123L29.3103 3.23038C29.5724 2.05102 29.2082 1.45097 28.8558 1.15613ZM13.0455 17.6465L11.0805 22.8305L9.11541 16.3505L24.1809 5.33444L13.0455 17.6465Z"
                                        fill="white"
                                    />
                                </svg>
                            </Link>
                        </li>
                    </ul>
                    {/* <h5 className="heading">don’t miss out, join now for early access</h5>
                    <p>Maecenas sit pretium, cras in. In quisque sem id eget. In vel gravida ut </p>
                    <form action="#" id="subscribe-form">
                        <input type="email" placeholder="Enter your email address" required="" id="subscribe-email" />
                        <button className="tf-button-st2 btn-effect" type="submit" id="subscribe-button"> <span className="effect">Subscribe</span></button>
                    </form> */}
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="wrap-fx">
                        <div className="Copyright">
                            <p>PEPE SHOOT 2023 - ALL rights reserved</p>
                        </div>
                        <ul className="list">
                            <li>
                                <Link to="#">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="#">Cookies</Link>
                            </li>
                            <li>
                                <Link to="#">Terms & Conditions</Link>
                            </li>
                            <li>
                                <Link to="#">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {isVisible && (
                <Link onClick={scrollToTop} to="#" id="scroll-top"></Link>
            )}
        </footer>
    )
}

export default Footer
