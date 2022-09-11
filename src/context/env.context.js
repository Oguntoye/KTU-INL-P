import React from "react";
import axios from "axios";

const apiServerUrl = process.env.REACT_APP_API_SERVER_URL;

const dotenv = {
  apiServerUrl: "https://glsbackend.flexibank.net",
  axios,
};

export const EnvContext = React.createContext(dotenv);

export const useEnv = () => {
  const context = React.useContext(EnvContext);
  if (!context) {
    throw new Error(`useEnv must be used within a EnvProvider`);
  }
  return context;
};

export const EnvProvider = (props) => {
  return <EnvContext.Provider value={dotenv} {...props} />;
};
