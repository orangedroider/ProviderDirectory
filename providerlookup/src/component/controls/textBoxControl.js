import React from "react";
//import "./styles.css";

//https://www.robinwieruch.de/react-hooks-fetch-data/
//https://codesandbox.io/s/98oj2q7ok4

function TextBoxControl(props) {
  return (
    <div className="contentBody">
    <div className="contentField">
      <label className="contentFieldLabel" id="lblStates">
     { props.labelText}
      </label>
      <div className="contentFieldControl">
        <div id={props.id}>
          <input
            type="search"           
            placeHolder={props.placeHolder}
            value={props.Value}
            onChange={props.onChange}
           style={{texttransform: "uppercase"}}
          />
        </div>
      </div>
    </div>
    </div>
  );
}
export default TextBoxControl;
