import React, { useEffect } from "react";
import "./Backdrop.css";

function Backdrop(props) {
  useEffect(() => {
    return () => {
      // let continueUnmount = window.confirm("do you want to unmount");
      //if (continueUnmount) return false;
      //  console.log("unmount");
    };
  }, []);

  return <div className="backdrop" onClick={props.handleBackDropClick}></div>;
}

export default Backdrop;
