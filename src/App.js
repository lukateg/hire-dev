import React, { useState } from "react";
// import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import MenuItem from "./MenuItem";
import { useGlobalContext } from "./context";
import { CreateProfile } from "./CreateProfile";
import HiringList from "./HiringList";
import CheckOut from "./CheckOut";

const allSeniority = ["all", ...new Set(items.map((item) => item.seniority))];
const allLocations = ["all", ...new Set(items.map((item) => item.location))];
const allPositions = ["all", ...new Set(items.map((item) => item.position))];

function App() {
  const {
    menuItems,
    setMenuItems,
    toggleForm,
    showCreateProfile,
    addProfileButton,
    showHiringList,
    closeMenu,
    checkOut,
  } = useGlobalContext();
  const [seniority, setSeniority] = useState(allSeniority);
  const [locations, setLocations] = useState(allLocations);
  const [positions, setPositions] = useState(allPositions);

  const filterBySeniority = (seniority) => {
    if (seniority === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.seniority === seniority);
    setMenuItems(newItems);
  };
  const filterByLocation = (location) => {
    if (location === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.location === location);
    setMenuItems(newItems);
  };
  const filterByPosition = (position) => {
    if (position === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.position === position);
    setMenuItems(newItems);
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("visible")) {
      closeMenu();
    }
  };

  return (
    <main>
      {checkOut && <CheckOut />}
      <section className="menu section" onMouseOver={handleSubmenu}>
        {showHiringList && <HiringList />}
        <div className="title">
          <h2>hire developers!</h2>
          <div className="underline"></div>
        </div>
        <Categories
          filterBySeniority={filterBySeniority}
          seniority={seniority}
          filterByPosition={filterByPosition}
          positions={positions}
          filterByLocation={filterByLocation}
          locations={locations}
        />
        <section className="section-center">
          {toggleForm && <CreateProfile />}
          {addProfileButton && (
            <button className="addProfile-btn" onClick={showCreateProfile}>
              add profile
            </button>
          )}
          {menuItems.map((item) => {
            return <MenuItem key={item.id} {...item} />;
          })}
        </section>
      </section>
    </main>
  );
}

export default App;
