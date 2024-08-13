import React from "react";
import "./Collection.scss";
import Filter from "./components/Filter";

function Collection() {
    return (
        <div className="collect">
            <div className="collect-title">
                <h1>Styling Your Outfit And Pick Are Best</h1>
            </div>
            <div className="collect-contain">
                <Filter/>
                <div className="collect-contain-item"></div>
            </div>
        </div>
    );
}

export default Collection;
