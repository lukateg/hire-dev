import React from "react";
import { useGlobalContext } from "./context";

const CreateProfile = () => {
  const { handleSubmit, getData, hideCreateProfile } = useGlobalContext();
  return (
    <article className="review">
      <button onClick={hideCreateProfile} className="escape form-btn">
        x
      </button>
      <h4>Add new profile</h4>
      <form onSubmit={handleSubmit} className="form">
        <div className="addProfile-form">
          <span>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="e.g., Luka"
              required
              onChange={(e) => getData(e)}
            />
          </span>
          <span>
            <label htmlFor="email">E-mail</label>
            <input
              required
              id="email"
              name="email"
              type="text"
              placeholder="example@gmail.com"
              onChange={(e) => getData(e)}
            />
          </span>
          <span>
            <label htmlFor="phone">Phone number</label>
            <input
              required
              id="phone"
              name="phone"
              type="text"
              placeholder="+381/ 65 555 555"
              onChange={(e) => getData(e)}
            />
          </span>
          <span>
            <label htmlFor="location">Current location</label>
            <input
              required
              id="location"
              name="location"
              type="text"
              placeholder="e.g., Germany"
              onChange={(e) => getData(e)}
            />
          </span>
          <span>
            <label htmlFor="img">Image URL</label>
            <input
              id="img"
              name="img"
              type="text"
              placeholder="Image url"
              onChange={(e) => getData(e)}
            />
          </span>
          <span>
            <label htmlFor="price">Price/day</label>
            <input
              required
              id="price"
              name="price"
              type="text"
              placeholder="e.g., 15$"
              onChange={(e) => getData(e)}
            />
          </span>
          <span>
            <label htmlFor="tech">Technology stack</label>
            <input
              required
              id="tech"
              name="tech"
              type="text"
              placeholder="e.g.,React, JSON..."
              onChange={(e) => getData(e)}
            />
          </span>
          <span>
            <label htmlFor="expirience">Years of expirience</label>
            <input
              required
              id="expirience"
              name="expirience"
              type="text"
              placeholder="e.g., 3 years"
              onChange={(e) => getData(e)}
            />
          </span>
          <span>
            <label htmlFor="language">Native language</label>
            <input
              required
              id="language"
              name="language"
              type="text"
              placeholder="e.g.. English"
              onChange={(e) => getData(e)}
            />
          </span>
          <span>
            <label htmlFor="linkedIn">LinkedIn profile</label>
            <input
              id="linkedIn"
              name="linkedIn"
              type="text"
              placeholder="e.g., www.linkedin.com/in/luka-tegeltija-b302a322a/"
              onChange={(e) => getData(e)}
            />
          </span>
        </div>
        <textarea
          name="desc"
          id="desc"
          cols="43"
          rows="5"
          placeholder="e.g.. I'm a developer with over a 5 years of expirience..."
          onChange={(e) => getData(e)}
        ></textarea>
        <button className="sumbit-btn" type="submit">
          submit
        </button>
      </form>
    </article>
  );
};

export { CreateProfile };
