import React, { useState } from "react";
import MainContext from "../Context/MainContext";

const MainProvider = ({ children }) => {
  const [state, setState] = useState({
    headerBg: [
      "https://i.imgur.com/ZEnT6q8.jpeg",
      "https://i.imgur.com/Gv9cAAE.jpeg",
      "https://i.imgur.com/1a39Jwp.jpeg",
      "https://download.hipwallpaper.com/desktop/1680/1050/75/39/9Y6ncL.jpg",
      "https://i.imgur.com/UpZWEqB.jpg",
    ],
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
