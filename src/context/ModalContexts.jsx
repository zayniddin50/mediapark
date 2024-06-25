import { createContext, useEffect, useState } from "react";
export const ModalContexts = createContext(null);
const ModalProduct = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState({});
  const SetOpen = (productItem) => {
    setOpen(true);
    setProduct(productItem);
  };
  const CloseOpen = () => {
    setOpen(false);
  };
  return (
    <ModalContexts.Provider value={{ open, SetOpen, CloseOpen, product }}>
      {children}
    </ModalContexts.Provider>
  );
};

export default ModalProduct;
