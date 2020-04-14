import React, { useState } from "react";
import MainContext from "../Context/MainContext";

const MainProvider = ({ children }) => {
  const [state, setState] = useState({
    headerBg: [
      "https://img.wallpapersafari.com/desktop/1366/768/41/79/SxDb5E.jpg",
      "https://wallpapercart.com/wp-content/uploads/2019/09/Comics-Wolverine-X-Men-Ninja-Marvel-Comics-HD-Wallpaper-Background-Images.jpg",
      "https://images5.alphacoders.com/387/387523.jpg",
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
