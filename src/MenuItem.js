import React from "react";
import { useGlobalContext } from "./context";

const MenuItem = (props) => {
  const {
    deleteItem,
    startEditing,
    getData,
    handleEdit,
    hirePerson,
    closeEdit,
  } = useGlobalContext();
  const {
    id,
    name,
    email,
    phone,
    location,
    img,
    price,
    tech,
    desc,
    expirience,
    language,
    linkedIn,
    isEditing,
    hired,
  } = props;
  const defaultImg = new URL(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Z9vjM-_Ww_rUHKOYFQ3brhBsKWniGSN7jembYtImHkPzHReyZ4zNBlPF550WjI8a_eE&usqp=CAU"
  );

  if (!isEditing) {
    return (
      <article className="review">
        <div className="img-container">
          <img src={img || defaultImg} alt={name} className="person-img" />
          <span className="quote-icon">${price}/d</span>
        </div>
        <h3 className="author">{name}</h3>
        <div className="job">{location}</div>
        <div className="tech-div">
          {tech.map((item, index) => {
            return <span key={index}>{item}</span>;
          })}
        </div>
        <div className="desc-div">
          <span>{expirience}</span> professional expirience
        </div>
        <div className="desc-div">
          <span>{language}</span> native language
        </div>
        <div className="contact-div">
          <h4>contact</h4>
          <div>
            <a
              href="https://mail.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {email}
            </a>
            <a href={`tel:${phone}`}>{phone}</a>
            <a href="linkedin.com" target="_blank">
              {linkedIn}
            </a>
          </div>
        </div>
        <p className="info">{desc}</p>
        <div className="button-container">
          <button className="delete-btn btn" onClick={() => deleteItem(id)}>
            delete profile
          </button>
          <button className="next-btn btn" onClick={() => startEditing(id)}>
            edit profile
          </button>
        </div>
        <button
          className="random-btn"
          disabled={hired}
          onClick={() => hirePerson(id)}
        >
          {hired ? "hired" : "hire"}
        </button>
      </article>
    );
  }
  return (
    <article className="review">
      <button className="escape form-btn" onClick={() => closeEdit(id)}>
        x
      </button>
      <h4>Edit {name}'s profile</h4>
      <form onSubmit={(e) => handleEdit(e, id)} className="form">
        <div className="addProfile-form">
          <span>
            <label htmlFor="name">Name</label>
            <input
              required
              id="name"
              type="text"
              placeholder={name}
              onChange={(e) => getData(e)}
            />
          </span>
          <span>
            <label htmlFor="email">E-mail</label>
            <input
              required
              id="email"
              type="text"
              placeholder={email}
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
              placeholder={phone}
              onChange={(e) => getData(e)}
            />
          </span>
          <span>
            <label htmlFor="location">Current location</label>
            <input
              required
              id="location"
              type="text"
              placeholder={location}
              onChange={(e) => getData(e)}
            />
          </span>
          <span>
            <label htmlFor="img">Image URL</label>
            <input
              id="img"
              name="img"
              type="text"
              placeholder={img}
              onChange={(e) => getData(e)}
            />
          </span>
          <span>
            <label htmlFor="price">Price/day</label>
            <input
              required
              id="price"
              type="text"
              placeholder={price}
              onChange={(e) => getData(e)}
            />
          </span>
          <span>
            <label htmlFor="tech">Technology stack</label>
            <input
              required
              id="tech"
              type="text"
              placeholder={tech}
              onChange={(e) => getData(e)}
            />
          </span>
          <span>
            <label htmlFor="expirience">Years of expirience</label>
            <input
              required
              id="expirience"
              type="text"
              placeholder={expirience}
              onChange={(e) => getData(e)}
            />
          </span>
          <span>
            <label htmlFor="language">Native language</label>
            <input
              required
              id="language"
              type="text"
              placeholder={language}
              onChange={(e) => getData(e)}
            />
          </span>
          <span>
            <label htmlFor="linkedIn">LinkedIn profile</label>
            <input
              id="linkedIn"
              type="text"
              placeholder={linkedIn}
              onChange={(e) => getData(e)}
            />
          </span>
        </div>
        <textarea
          placeholder={desc}
          name="desc"
          id="desc"
          cols="43"
          rows="5"
          onChange={(e) => getData(e)}
        ></textarea>
        <button className="sumbit-btn" type="submit">
          submit
        </button>
      </form>
    </article>
  );
};

export default MenuItem;
