import React from "react";
import { Spinner } from "react-bootstrap";
import styles from "../styles/Asset.module.css";

const Asset = ({ spinner, src, message, message2 }) => {
  return (
    <div className={`${styles.Asset} p-4 text-center`}>
      {spinner && <Spinner animation="border" />}
      {src && <img src={src} alt={message} />}
      {message && <h5 className="mt-4">{message}</h5>}
      {message2 && <p className="mt-4">{message2}</p>}
    </div>
  );
};

export default Asset;