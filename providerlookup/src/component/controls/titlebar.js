import React from "react";

function TitleBar(props) {
    return (
        <div className="titleBar">
          <h1 className={props.className}>
            <span id="lblHeading">
             {props.labelText}
            </span>
          </h1>
        </div>
    );
}
export default TitleBar;