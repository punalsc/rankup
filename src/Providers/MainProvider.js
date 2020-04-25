import React, { useState } from "react";
import MainContext from "../Context/MainContext";

const MainProvider = ({ children }) => {
  const [state, setState] = useState({
    headerBg: ["hulk", "deadpool", "thanos", "venom"].map(
      (bg) => `./backgrounds/${bg}.jpg`
    ),
  });

  return (
    <MainContext.Provider
      value={{
        data: state,
        updateWallpaper: () => {
          setState({ ...state });
        },
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
