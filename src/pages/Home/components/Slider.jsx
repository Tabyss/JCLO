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

  useEffect(() => {
    const timer = setTimeout(() => {
        HandleNext();
    }, 5000);

    return () => clearTimeout(timer);
}, [page]);

  return (
    <div className="carousel">
      <div
        className="track"
        style={{ transform: `translateX(${-page * 100}%)` }}
      >
        {ImgSlider.map((slide, i) => {
          return (
            <div key={i} className="slide">
              <img src={slide.src} name={slide.name} />
            </div>
          );
        })}
      </div>
      <div className="timeline">
        <div
          className={`path ${page > 0 ? "past" : page === 0 ? "active" : ""}`}
        >
          <span></span>
        </div>
        <div
          className={`path ${page > 1 ? "past" : page === 1 ? "active" : ""}`}
        >
          <span></span>
        </div>
        <div
          className={`path ${page > 2 ? "past" : page === 2 ? "active" : ""}`}
        >
          <span></span>
        </div>
      </div>
      <button className="prev" onClick={HandlePrev}>
        <MdArrowBackIos />
      </button>
      <button className="next" onClick={HandleNext}>
        <MdArrowForwardIos />
      </button>
    </div>
  );
}

export default Slider;
