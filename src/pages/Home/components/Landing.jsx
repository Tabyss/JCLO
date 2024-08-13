import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Sample1 from "../../../assets/img/product/sample1.png";
import { FaArrowRightLong } from "react-icons/fa6";
import Slider from "./Slider";
import { Link } from "react-router-dom";

function Landing() {
    return (
        <div className="landing">
            <div className="landing-first">
                <div className="landing-first-up">
                    <h1>Classics for the Modern Man</h1>
                    <div className="landing-first-up-button">
                        <button>Shop Now</button>
                        <a>Contact Us</a>
                    </div>
                </div>
                <div className="landing-first-down">
                    <div className="landing-first-down-icon">
                        <button>
                            <FaInstagram />
                        </button>
                        <button>
                            <FaFacebook />
                        </button>
                    </div>
                    <div className="landing-first-down-sample">
                        <Link to='/collection'>
                            <p>Explore Collection</p>
                            <FaArrowRightLong />
                        </Link>
                        <img src={Sample1} />
                    </div>
                </div>
            </div>
            <div className="landing-second">
                <Slider/>
            </div>
        </div>
    );
}

export default Landing;
