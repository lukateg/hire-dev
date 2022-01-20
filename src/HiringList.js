import React from "react";
import { useGlobalContext } from "./context";
import Calender from "./Calender";
import "react-datepicker/dist/react-datepicker.css";

const HiringList = () => {
  const {
    hiredPeople,
    totalAmount,
    dateRange,
    deleteHiringListItem,
    hideList,
    showCheckout,
  } = useGlobalContext();
  return (
    <>
      <section className="hiring-section">
        <button onClick={hideList} className="escape hideHiring-esc">
          x
        </button>
        <article className="list">
          {hiredPeople.map((person) => {
            const { name, id, price } = person;
            return (
              <div key={id} className="hiring-element">
                <p>{name}</p>
                <span className="hiring-span">
                  <p>${price}</p>
                  <button
                    className="escape hiring-esc"
                    onClick={() => deleteHiringListItem(id)}
                  >
                    x
                  </button>
                </span>
              </div>
            );
          })}
        </article>
        <Calender />
        <span>
          <button className="checkout-btn" onClick={showCheckout}>
            check out
          </button>
          <h4>total ${(totalAmount * dateRange).toFixed(2)}</h4>
        </span>
      </section>
    </>
  );
};

export default HiringList;
