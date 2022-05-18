import React from "react";

const UIContext = React.createContext();

const UIReducer = (state, action) => {
  return state;
};

export const UIProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(UIReducer, {alpha: 1});
  const value = { state, dispatch };
  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export const useUIContext = () => {
  const context = React.useContext(UIContext);
  if (!context) {
    throw new Error("useUIContext must be within a provider.");
  }
  return context;
};
