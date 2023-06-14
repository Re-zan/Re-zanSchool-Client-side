import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollStop = () => {
  const loc = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [loc.pathname]);
  return <div></div>;
};

export default ScrollStop;
