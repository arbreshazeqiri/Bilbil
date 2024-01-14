import React, { createContext, useContext, useState } from 'react';

const AvatarContext = createContext();

export const AvatarProvider = ({ children }) => {
  const [avatarState, setAvatarState] = useState({
    avatar: 0,
    hair: "#47323B",
    skin: "#FFC19E",
    skinDetails: "#F0A47D",
    background: 'lightblue',
    eyes: "#47323B",
  });

  const setAvatar = (key, value) => {
    setAvatarState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <AvatarContext.Provider value={{ avatarState, setAvatar }}>
      {children}
    </AvatarContext.Provider>
  );
};

export const useAvatarContext = () => {
  return useContext(AvatarContext);
};