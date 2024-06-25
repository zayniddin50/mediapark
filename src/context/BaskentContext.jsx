import { createContext, useContext, useEffect, useState } from "react";

export const BackentContexts = createContext(null);
export const useBasket = () => useContext(BackentContexts);

const BaskentProvider = ({ children }) => {
  const storage = localStorage.getItem("baskent-products");
  const [state, setState] = useState(JSON.parse(storage) || []);
  const [checked, setChecked] = useState(state);

  const setLocale = (data) => {
    localStorage.setItem("baskent-products", JSON.stringify(data));
    setState(data);
  };

  const addToStorage = (products, qty) => {
    const isContain = state.some((item) => item?.id === products?.id);
    if (!isContain) {
      setLocale([...state, { ...products, qty }]);
    } else {
      setLocale(
        state.map((item) =>
          item.id === products.id ? { ...item, qty: item.qty + qty } : item
        )
      );
    }
  };

  const removeToStorage = (id) => {
    setLocale(state.filter((item) => item.id !== id));
  };

  const incrementItem = (id) => {
    setLocale(
      state.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decrementItem = (id) => {
    setLocale(
      state.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty === 1 ? 1 : item.qty - 1 }
          : item
      )
    );
  };

  return (
    <BackentContexts.Provider
      value={{
        addToStorage,
        state,
        checked,
        setChecked,
        setState,
        incrementItem,
        decrementItem,
        removeToStorage,
      }}
    >
      {children}
    </BackentContexts.Provider>
  );
};

export default BaskentProvider;
