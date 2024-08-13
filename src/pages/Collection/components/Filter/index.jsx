import React from "react";
import categories from "../../../../assets/json/categories.json";
import "./Filter.style.scss";

function Filter() {
    return (
        <div className="filter">
            <input type="text" placeholder="search" />
            <div className="filter-type">
                <h4>Collection</h4>
                <div className="filter-type-option">
                    {categories.map((category) => {
                        return (
                            <div className="filter-type-option-item">
                                <input
                                    type="checkbox"
                                    id={category}
                                    name={category}
                                    value={1}
                                />
                                <label for="vehicle1">{category}</label>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Filter;
