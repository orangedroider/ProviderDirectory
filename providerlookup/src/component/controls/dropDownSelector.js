import React from "react";

function DropDownSelector(props) {
  const onChange = props.onChange;
  const { options } = props;

  return (
    <div className="contentBody">
    <div className="contentField">
      <label className="contentFieldLabel" id="lblSpecialtys">
      { props.labelText}
      </label>
      <div className="contentFieldControl">
        <select onChange={onChange} value={props.value} >
        <option key= "0" value="0">{props.defaultText}</option>
          {options.map(obj => 
          ( 
             <option key={obj.value} value={obj.value}>  {obj.label} </option>          
          ))}
        </select>
      </div>
    </div>
    </div>
  );
}

export default DropDownSelector;
