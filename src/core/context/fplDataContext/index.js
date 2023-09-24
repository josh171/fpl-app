import React, { createContext, useContext, useEffect, useState } from "react";
import { getFplStaticStats } from "../../../axiosServices";

const FplDataContext = createContext();

export const useFplDataContext = () => {
  return useContext(FplDataContext);
};

const FplDataProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fplContent, setFplContent] = useState();
  const [currentGameweekNumber, setCurrentGameweekNumber] = useState(1);
  useEffect(() => {
    getFplStaticStats()
      .then((res) => {
        if (res?.data) {
          const gameweek = res.data.events.filter((event) => {
            return event.finished === false;
          });
          setFplContent(res.data);
          setCurrentGameweekNumber(gameweek[0].id);
        }
      })
      .catch((err) => {
        setError(err);
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, []);
  const contextObject = {
    fplContent,
    setFplContent,
    loading,
    setLoading,
    error,
    setError,
    currentGameweekNumber,
  };
  return (
    <FplDataContext.Provider value={contextObject}>
      {children}
    </FplDataContext.Provider>
  );
};

export default FplDataProvider;
