import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import TitleBar from "../controls/titlebar";
import TextBoxControl from "../controls/textBoxControl";
import DropDownSelector from "../controls/dropDownSelector";
import SearchResults from "./searchResults";
import Header from "./header";
import ReactToPrint from "react-to-print";

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
  const [errorMessage, setErrorMessage] = useState("");
  const [visibleSearchResult, SetVisibleSearchResult] = useState(false);
  const initialSearchValue = [{ provideName: " " }];
  const [providerDisplay, setProviderDisplay] = useState(initialSearchValue);

  useEffect(() => {
    fetchInitialData();
    SetVisibleSearchResult(false);
  }, []);

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

  const onSearchBtnClick = event => {
    event.preventDefault();
    if (
      providerName === "" &&
      city === "" &&
      countySelected === "0" &&
      specialtySelected === "0"
    ) {
      setErrorMessage("Please Enter alteast one search Criteria.");
    } else {
    fetchSearchData();
    }
  };

  const fetchSearchData = async () => {
    SetVisibleSearchResult(false);
    setProviderDisplay(initialSearchValue);
    let url =
      "http://localhost/Alportal/webservices/provider/ProviderDirectoryLocation.svc/ProviderDirectorySearch?";
    url = url + "provider=" + providerName;
    console.log(specialtySelected);
    if (specialtySelected === "0") {
      url = url + "&specialty_code=";
    } else {
      url = url + "&specialty_code=" + specialtySelected;
    }

    if (countySelected === "0") {
      url = url + "&county=";
    } else {
      url = url + "&county=" + countySelected;
    }
    url = url + "&city=" + city;
    console.log(url);
    try {
      const result = await axios(url);

      if (result.data.length !== 0) {
        SetVisibleSearchResult(true);
      } else {
        setErrorMessage("No Matching Records Found.");
        SetVisibleSearchResult(false);
      }

      setProviderDisplay(result.data);
    } catch (error) {
      setErrorMessage("Error Fetching data.");
    }
  };

  //https://mod.alxix.slg.eds.com/AlportalaLT/webservices/provider/ProviderDirectoryLocation.svc/GetInitialData
  //"http://localhost/Alportal/webservices/provider/ProviderDirectoryLocation.svc/GetInitialData"

  const fetchInitialData = async () => {
    try {
      const result = await axios(
        "http://localhost/Alportal/webservices/provider/ProviderDirectoryLocation.svc/GetInitialData"
      );
      console.log(result);
      setAllSpecialtys(result.data.SpecialityList);
      setAllCounty(result.data.CountyList);
    } catch (error) {
      setErrorMessage(
        "Error in Loading Specialty, County Information, Please contact Technical Support Team."
      );
    }
  };

  const onResetClick = event => {
    setProviderName("");
    setSpecialtySelected("0");
    setCountySelected("0");
    setCity("");
    setErrorMessage("");
    SetVisibleSearchResult(false);
    event.preventDefault();
  };

  const printOrder=event =>{

    const printableElements = document.getElementById('print_to_pdf').innerHTML;
    const orderHtmlPage = '<html><head><title></title></head><body>' + printableElements + '</body></html>';
    const oldPage = document.body.innerHTML;
    document.body.innerHTML = orderHtmlPage;
    window.print();
    document.body.innerHTML = oldPage
   
  }

  const componentRef = useRef();

  return (
    <React.Fragment>
         {visibleSearchResult === false ? <Header /> : <p></p>}       
        <div>
      {" "}
      <TitleBar
        labelText=" Search(items with * are required)-----Test"
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
        placeHolder="Enter City Name"
        Value={city}
        onChange={onCityChange}
      />
      <TitleBar labelText="&nbsp;" className="titleText" />
      </div>

      <div className="btnContainer">
        <button
          type="Submit"
          name="btnSearch"
          id="btnSearch"
          onClick={onSearchBtnClick}
        >
          Search
        </button>
        <button
          type="Submit"
          name="btnReset"
          id="btnReset"
          onClick={onResetClick}
        >
          {" "}
          Reset{" "}
        </button> 
        {visibleSearchResult ?     
      (<button type="Submit" onClick={printOrder} >Print pdf</button>):(<p></p>)}
            </div>
      <div>
        {visibleSearchResult ? (
          <div >
            <SearchResults
              providerDisplay={providerDisplay}
              defaultPageSize={10}
              showPagination= {true}
              headerClassName={"reactTableHeader"}
              ref={componentRef}
              spanClassName={"span_color_blue"}
            />{" "}
          </div>
        ) : (
          <p className="ErrorMessage">{errorMessage}</p>
        )}
        </div>

        <div  style={{display:"none"}} id="print_to_pdf">
        <SearchResults
              providerDisplay={providerDisplay}
              defaultPageSize={providerDisplay.length}
              showPagination= {false}
              headerClassName={"reactTableHeader"}
              spanClassName={"none"}
              ref={componentRef}
            />
      </div>
    </React.Fragment>
  );
}

export default SearchCritirea;
