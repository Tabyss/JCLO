import React, { useRef, useState } from "react";
import { Products } from "../../../assets/img/product";
import { MdAddShoppingCart } from "react-icons/md";

function Product() {
  const ourRef = useRef(null);
  const velX = 0;
  let isDown = false;
  let startX, scrollLeft, momentumID;

  function handleMouseDown(e) {
    const { pageX } = e;
    isDown = true;
    startX = pageX - ourRef.current.offsetLeft;
    scrollLeft = ourRef.current.scrollLeft;
    document.body.style.userSelect = 'none';
  }
  function handleMouseLeave() {
    isDown = false;
    document.body.style.userSelect = '';
  }
  function handleMouseUp() {
    isDown = false;
    document.body.style.userSelect = '';
    beginMomentumTracking();
  }
  function handleMouseMove(e) {
    const { pageX } = e;
    e.preventDefault();
    if (!isDown) return;
    const x = pageX - ourRef.current.offsetLeft;
    const walk = (x - startX) * 3;
    var prevScrollLeft = ourRef.current.scrollLeft;
    ourRef.current.scrollLeft = scrollLeft - walk;
    velX = slider.scrollLeft - prevScrollLeft;
  }

  function beginMomentumTracking() {
    cancelMomentumTracking();
    momentumID = requestAnimationFrame(momentumLoop);
  }
  function cancelMomentumTracking() {
    cancelAnimationFrame(momentumID);
  }
  function momentumLoop() {
    ourRef.current.scrollLeft += velX;
    velX *= 0.95;
    if (Math.abs(velX) > 0.5) {
      momentumID = requestAnimationFrame(momentumLoop);
    }
  }

  return (
    <div className="product">
      <div className="product-title">
        <h1>Product</h1>
        <a>See More</a>
      </div>
      <div
        ref={ourRef}
        className="product-items"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {Products.map((list, i) => {
          return (
            <div
              key={i}
              className="item"
              style={{ backgroundImage: `url(${list.photo})` }}
            >
              <button className="item-cart">
                <MdAddShoppingCart size={"20px"} />
              </button>
              <button className="item-more">More Detail</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
