import React from "react";
import { useGlobalContext } from "./context";

const Categories = ({
  filterBySeniority,
  seniority,
  filterByPosition,
  positions,
  filterByLocation,
  locations,
}) => {
  const { menuShow, showMenues } = useGlobalContext();
  const { seniorityMenu, positionsMenu, locationsMenu } = showMenues;
  return (
    <section className="browse-section">
      <div className="menu-list">
        <button
          className="filter-btn visible"
          onMouseOver={() => menuShow("seniority")}
        >
          Seniority
        </button>
        {seniorityMenu && (
          <div className="list-container">
            {seniority.map((category, index) => {
              return (
                <div
                  key={index}
                  onClick={() => filterBySeniority(category)}
                  className="choice-btn visible"
                >
                  {category}
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="menu-list">
        <button
          className="filter-btn visible"
          onMouseOver={() => menuShow("positions")}
        >
          Positions
        </button>
        {positionsMenu && (
          <div className="list-container">
            {positions.map((position, index) => {
              return (
                <div
                  className="choice-btn visible"
                  key={index}
                  onClick={() => filterByPosition(position)}
                >
                  {position}
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="menu-list">
        <button
          className="filter-btn visible"
          onMouseOver={() => menuShow("locations")}
        >
          locations
        </button>
        {locationsMenu && (
          <div className="list-container">
            {locations.map((location, index) => {
              return (
                <div
                  className="choice-btn visible"
                  key={index}
                  onClick={() => filterByLocation(location)}
                >
                  {location}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Categories;
