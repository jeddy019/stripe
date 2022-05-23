import React, { useState, createContext, useContext } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const [predictions, setPredictions] = useState([]);
  const [imageToPredict, setImageToPredict] = useState("");
  const [route, setRoute] = useState("signin");

  const onRouteChange = (route) => {
    return setRoute(route);
  };

  return (
    <AppContext.Provider
      value={{
        route,
        onRouteChange,
        imageToPredict,
        setImageToPredict,
        predictions,
        setPredictions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
