import React, { createContext, useContext, useState } from "react";

const AvatarContext = createContext();

const initialState = {
  avatar: 0,
  hair: "#47323B",
  skin: "#FFC19E",
  skinDetails: "#F0A47D",
  background: "lightblue",
  eyes: "#47323B",
};

export const AvatarProvider = ({ children }) => {
  const [avatarState, setAvatarState] = useState(initialState);

  const setAvatar = (key, value) => {
    setAvatarState((avatarState) => ({
      ...avatarState,
      [key]: value,
    }));
  };

  const setAvatarObject = (object) => {
    setAvatarState(object);
  };

  return (
    <AvatarContext.Provider value={{ avatarState, setAvatar, setAvatarObject }}>
      {children}
    </AvatarContext.Provider>
  );
};

export const useAvatarContext = () => {
  return useContext(AvatarContext);
};
