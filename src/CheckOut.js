import React from "react";
import { useGlobalContext } from "./context";
// import { startDate, endDate } from "./Calender";

const CheckOut = () => {
  const { hideCheckout, dateRange, checkoutPeople, total } = useGlobalContext();
  //   const { firstDay, secondDay } = date;
  return (
    <section className="recieve-section">
      <article className="recieve">
        <div>
          <span>
            <button className="escape hideHiring-esc" onClick={hideCheckout}>
              x
            </button>
            <h3>your receive</h3>
          </span>
          <div className="recieve-items-list">
            {checkoutPeople.map((person) => {
              const { name, price, id, position } = person;
              return (
                <span key={id} className="recieve-items">
                  <span>
                    <h4>{name}</h4>
                    <p>{position}</p>
                  </span>
                  <p>{price}$</p>
                </span>
              );
            })}
          </div>
          <div className="receive-amount">
            <span>
              <h4>Devs count: {checkoutPeople.length}</h4>
              <h4>Date range: {dateRange}</h4>
            </span>
            <h4 className="total-amount">
              Total: {(total * dateRange).toFixed(2)}
            </h4>
            {/* <h4>{startDate}</h4> */}
          </div>
        </div>
      </article>
    </section>
  );
};

export default CheckOut;
