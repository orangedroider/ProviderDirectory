import React, { useState } from "react";
import TitleBar from "../controls/titlebar";
import TextBoxControl from "../controls/textBoxControl";
import DropDownSelector from "../controls/dropDownSelector";

function SearchCritirea() {
  const [providerName, setProviderName] = useState("BACHA");
  const initialSpecialtyValue = [
    { value: "0", label: " --- Select A Specialty --- " }
  ];

  const [specialtySelected, setSpecialtySelected] = useState(
    initialSpecialtyValue[0].value
  );
  const [allSpecialtys, setAllSpecialtys] = useState(initialSpecialtyValue);

  const initialCountyValue = [
    { value: "0", label: " --- Select A County --- " }
  ];
  const [allCounty, setAllCounty] = useState(initialCountyValue);
  const [countySelected, setCountySelected] = useState(
    initialCountyValue[0].value
  );
  const [city, setCity] = useState("");

  const onProvideChange = event => {
    const value = event.target.value.toUpperCase();
    setProviderName(value);
  };
  const onCityChange = event => {
    const value = event.target.value.toUpperCase();
    setCity(value);
  };

  const onSpecialtySelection = event => {
    const value = event.target.value;

    if (value === "0") {
      setSpecialtySelected(initialSpecialtyValue[0].value);
    } else {
      let specialtyIndex = allSpecialtys.filter(state => state.value === value);
      setSpecialtySelected(specialtyIndex[0].value);
    }
  };

  const onCountySelection = event => {
    const value = event.target.value;
    if (value === "0") {
      setCountySelected(initialCountyValue[0].value);
    } else {
      const countyIndex = allCounty.filter(state => state.value === value);
      setCountySelected(countyIndex[0].value);
    }
  };

  return (
    <React.Fragment>
        <div>
      {" "}
      <TitleBar
        labelText=" Search(items with * are required)"
        className="titleText"
      />
      <TextBoxControl
        id="ct0"
        placeHolder="Enter Provider Name"
        labelText="Provider Name: "
        Value={providerName}
        onChange={onProvideChange}
      />
      <DropDownSelector
        value={specialtySelected}
        labelText="Specialty: "
        defaultText="--- Select A Speciality ---"
        options={allSpecialtys}
        onChange={onSpecialtySelection}
      />
      <DropDownSelector
        value={countySelected}
        labelText="County: "
        defaultText="--- Select A County ---"
        options={allCounty}
        onChange={onCountySelection}
      />
      <TextBoxControl
        id="ct1"
        labelText="City: "
        placeHolder="Enter Citi Name"
        Value={city}
        onChange={onCityChange}
      />
      <TitleBar labelText="&nbsp;" className="titleText" />
      </div>
    </React.Fragment>
  );
}

export default SearchCritirea;
