import React from "react";
//import "./styles.css";

//https://www.robinwieruch.de/react-hooks-fetch-data/
//https://codesandbox.io/s/98oj2q7ok4

function checkBoxControl(props) {
  return (
    <div className="contentBody">
    <div className="contentField">
      <label className="contentFieldLabel" id="lblStates">
     { props.labelText}
      </label>
      <div className="contentFieldControl">
        <div id={props.id}>
        <input key={props.id} onClick={props.handleCheckChieldElement} type="checkbox" checked={props.isChecked} value={props.value} /> {props.value}
        </div>
      </div>
    </div>  
    </div>
  );
}
export default checkBoxControl;
