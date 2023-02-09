import React from "react";
import './User20.css';
import style from './User20.module.css'
function User20() {
  return (
    <div>
      <h1 className="heading" >20. Extrenal CSS </h1>
      <h1 style={{color:'white', backgroundColor:'black'}}>20. Internal CSS </h1>
      <h1 className={style.module}>20. Moduale  CSS </h1>
      <hr></hr>
    </div>
  );
}
export default User20;