import React, { useEffect, useState } from "react";
import { ImgSlider } from "../../../assets/img/slider";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

function Slider() {
    const [page, setPage] = useState(0);

    function HandleNext() {
        if (page < 2) {
            setPage(page + 1);
        } else {
            setPage(0);
        }
    }
    function HandlePrev() {
        if (page < 1) {
            setPage(2);
        } else {
            setPage(page - 1);
        }
    }

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         HandleNext();
    //     }, 5000);

    //     return () => clearTimeout(timer);
    // }, [page]);

    console.log(100 / (page + 1));

    return (
        <div className="carousel">
            <div className="container">
                <div
                    className="track"
                    style={{ transform: `translateX(${-100 * (page/3)}%)` }}
                >
                    {ImgSlider.map((slide, i) => {
                        return (
                            <div key={i} className="slide">
                                <img src={slide.src} name={slide.name} />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="button">
                <button className="prev" onClick={HandlePrev}>
                    <MdArrowBackIos />
                </button>
                <button className="next" onClick={HandleNext}>
                    <MdArrowForwardIos />
                </button>
            </div>
        </div>
    );
}

export default Slider;
