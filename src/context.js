import React, { useContext, useState, useEffect } from "react";
import data from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [menuItems, setMenuItems] = useState(
    JSON.parse(localStorage.getItem("menuItems")) || data
  );
  const [toggleForm, setToggleForm] = useState(false);
  const [formData, setFormData] = useState({
    id: new Date().getTime().toString(),
    name: "",
    email: "",
    phone: "",
    location: "",
    img: "",
    price: "",
    tech: [],
    desc: "",
    expirience: "",
    language: "",
    linkedIn: "",
    seniority: "",
    // isEditing: false,
    hired: false,
    position: "",
  });
  const [addProfileButton, setAddProfileButton] = useState(true);
  const [target, setTarget] = useState("");
  const [value, setValue] = useState("");
  const [hiredPeople, setHiredPeople] = useState([]);
  const [totalAmount, setTotalAmount] = useState();
  const [dateRange, setDateRange] = useState(1);
  const [showHiringList, setShowHiringList] = useState(false);
  const [showMenues, setShowMenues] = useState({
    seniorityMenu: false,
    locationsMenu: false,
    positionsMenu: false,
  });
  const [checkOut, setCheckOut] = useState(false);
  const [checkoutPeople, setCheckoutPeople] = useState([]);
  const [total, setTotal] = useState("");
  const [dataBase, setDataBase] = useState({
    developers: "",
    days: "",
    time: "",
    total: "",
  });
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    localStorage.setItem("menuItems", JSON.stringify(menuItems));
    localStorage.setItem(`hiring-number-${counter}`, JSON.stringify(dataBase));
    setCounter(counter + 1);
  }, [checkOut]);

  useEffect(() => {
    const menu = localStorage.getItem("menuItems");
    const nMenu = JSON.parse(menu);
    setMenuItems(nMenu);
  }, [dataBase]);

  const getDevelopers = () => {
    const names = hiredPeople.map((person) => {
      return person.name;
    });
    return names;
  };

  const showCheckout = () => {
    setCheckOut(true);
    setCheckoutPeople([...hiredPeople]);
    const devs = getDevelopers();
    const prices = hiredPeople.map((person) => person.price);
    const total = prices.reduce((a, b) => a + b, 0);
    setTotal(total);
    setShowHiringList(false);
    setHiredPeople([]);
    setDataBase({
      developers: getDevelopers(),
      days: dateRange,
      time: new Date().toLocaleDateString("en-US"),
      total: total * dateRange,
    });
    // localStorage.setItem("menuItems", JSON.stringify(dataBase));
  };
  const hideCheckout = () => {
    setCheckOut(false);
  };

  const menuShow = (menuName) => {
    if (menuName === "seniority") {
      setShowMenues({ ...showMenues, seniorityMenu: true });
    }
    if (menuName === "locations") {
      setShowMenues({ ...showMenues, locationsMenu: true });
    }
    if (menuName === "positions") {
      setShowMenues({ ...showMenues, positionsMenu: true });
    }
  };
  const closeMenu = () => {
    setShowMenues({
      seniorityMenu: false,
      locationsMenu: false,
      positionsMenu: false,
    });
  };

  const deleteHiringListItem = (id) => {
    const item = hiredPeople.filter((item) => item.id !== id);
    setHiredPeople(item);
    const newMenu = menuItems.map((item) => {
      if (item.id === id) {
        return { ...item, hired: false };
      }
      return item;
    });
    setMenuItems(newMenu);

    if (hiredPeople.length <= 1) {
      setShowHiringList(false);
    }
  };

  const showList = () => {
    setShowHiringList(true);
  };
  const hideList = () => {
    setShowHiringList(false);
    const newMenu = menuItems.map((item) => {
      if (item.hired === true) {
        return { ...item, hired: false };
      }
      return item;
    });
    setMenuItems(newMenu);
    setHiredPeople([]);
  };

  useEffect(() => {
    const prices = hiredPeople.map((person) => person.price);
    const total = prices.reduce((a, b) => a + b, 0);
    setTotalAmount(total);
  }, [hiredPeople]);

  function getDateRange(date1, date2) {
    const range = new Date(date2 - date1).getDate();
    return setDateRange(range);
  }

  const hirePerson = (id) => {
    const lastHiredPerson = menuItems.find((item) => item.id === id);
    setHiredPeople([...hiredPeople, lastHiredPerson]);
    disableHiring(id);
    showList();
  };

  const disableHiring = (id) => {
    const newMenu = menuItems.map((item) => {
      if (item.id === id) {
        return { ...item, hired: true };
      }
      return item;
    });
    setMenuItems(newMenu);
  };

  const startEditing = (id) => {
    const specificItem = menuItems.find((item) => item.id === id);
    const newMenu = menuItems.map((item) => {
      if (item.id === specificItem.id) {
        return { ...item, isEditing: true };
      }
      return item;
    });
    setMenuItems(newMenu);
    setToggleForm(false);
    setAddProfileButton(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddProfileButton(true);
    setToggleForm(false);
    setMenuItems([...menuItems, formData]);
  };
  const closeEdit = (id) => {
    const newMenu = menuItems.map((item) => {
      if (item.id === id) {
        return { ...item, isEditing: false };
      }
      return item;
    });
    setMenuItems(newMenu);
  };
  const handleEdit = (e, id) => {
    e.preventDefault();
    const newMenu = menuItems.map((item) => {
      if (item.id === id) {
        return { ...formData, id: id };
      }
      return item;
    });
    setMenuItems([...newMenu]);
  };

  const helper = (e) => {
    if (e.target.id === "tech") {
      return e.target.value.split(",");
    } else {
      return e.target.value;
    }
  };

  const getData = (e) => {
    setTarget(e.target.id);
    setValue(helper(e));
    const newData = { ...formData, [target]: value };
    setFormData(newData);
  };

  const deleteItem = (id) => {
    setMenuItems(menuItems.filter((item) => item.id !== id));
  };
  const showCreateProfile = () => {
    setToggleForm(true);
    setAddProfileButton(false);
    const newMenu = menuItems.map((item) => {
      return { ...item, isEditing: false };
    });
    setMenuItems(newMenu);
  };
  const hideCreateProfile = () => {
    setToggleForm(false);
    setAddProfileButton(true);
  };

  return (
    <AppContext.Provider
      value={{
        menuItems,
        setMenuItems,
        deleteItem,
        toggleForm,
        showCreateProfile,
        handleSubmit,
        getData,
        formData,
        addProfileButton,
        startEditing,
        handleEdit,
        hideCreateProfile,
        hirePerson,
        hiredPeople,
        totalAmount,
        getDateRange,
        dateRange,
        showHiringList,
        deleteHiringListItem,
        hideList,
        showMenues,
        menuShow,
        closeMenu,
        closeEdit,
        checkOut,
        showCheckout,
        hideCheckout,
        checkoutPeople,
        total,
        dataBase,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
