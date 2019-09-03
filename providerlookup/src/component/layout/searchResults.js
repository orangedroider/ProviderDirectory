import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
//import "./ReactTable.css";
import withFixedColumns from "react-table-hoc-fixed-columns";
import "react-table-hoc-fixed-columns/lib/styles.css";
//import "./App.css";

function SearchResults(props) {
  const providerDisplay = props.providerDisplay;
  const defaultPageSize = props.defaultPageSize;
  const ReactTableFixedColumns = withFixedColumns(ReactTable);
  //console.log(providerDisplay);
  //prov_addr_email
  const TheadComponent = props => null;
  const columns = [
    {
      Header: "Provider",
      //headerClassName: "reactTableHeader",
     
      fixed: "left",
      Width: '100',
      minwidth: "100px",
      
      Cell: row => {
        return (
          <span>
            <b>{row.original.prov_name}</b>
            <p
              style={{
                marginTop: "2px",
                marginBottom: "0px",
                lineHeight: "1.5em"
              }}
            >
              {" "}
              {row.original.prov_addr_str1}
              <br />
              <b>{row.original.prov_addr_mail_city}, </b>
              {row.original.prov_addr_mail_state} {row.original.prov_addr_zip}{" "}
              <br />
              <span style={{ color: "blue" }}>
                <b>County:</b>
              </span>{" "}
              <span style={{ lineHeight: "1.5em" }}>
                <i>{row.original.prov_county}</i>
              </span>
              <br />
              <span style={{ color: "blue" }}>
                <b>Phone:</b>
              </span>{" "}
              <span style={{ lineHeight: "1.5em" }}>
                <a href={row.original.prov_phone}>{row.original.prov_phone}</a>
              </span>
              <br />
              <span style={{ marginBottom: "2px", color: "blue" }}>
                <b>Email:</b>
              </span>{" "}
              <span>{row.original.prov_addr_email}</span>
            </p>
          </span>
        );
      }
    },
    {
      Header: "Information",
      //headerClassName: "reactTableHeader",
      accessor: "",
      Width: '100',
      fixed: "left",
      minwidth: "100px",
      
      //style: { whiteSpace: "pre" }, '/n in criteria class
      Cell: row => {
        return (
          <span>
            <p
              style={{
                marginTop: "5px",
                marginBottom: "0px",
                lineHeight: "1.2em"
              }}
            >
              <span style={{ color: "blue" }}>
                <b>Speciality:</b>
              </span>{" "}
              <span> {row.original.prov_specicialty} </span>
              <br />
              <span style={{ color: "blue" }}>
                <b>Linguistic capabilities:</b>
              </span>{" "}
              <span>{row.original.prov_lang_capabilities}</span>
              <br />
              <span>
                <span style={{ color: "blue" }}>
                  <b>Accepting new Patients: </b>
                </span>
                {row.original.prov_new_patient === "" ? (
                  <span>Unknown</span>
                ) : (
                  <span>Test</span>
                )}
              </span>
            </p>
          </span>
        );
      }
    },
    {
      Header: "DHCP/PCP",
      //headerClassName: "reactTableHeader",
      accessor: "",
      Width: '100',
      fixed: "right",
      minwidth: "100px",
      
      Cell: row => {
        return (
          <span>
            <span
              style={{ color: "blue", marginTop: "2px", lineHeight: "1.5em" }}
            >
              <b>DHCP:</b>
            </span>{" "}
            <span style={{ marginTop: "2px", lineHeight: "1.5em" }}>
              {row.original.prov_dhcp}
            </span>
            <br />
            <span
              style={{ color: "blue", marginTop: "2px", lineHeight: "1.5em" }}
            >
              <b>PCP:</b>
            </span>{" "}
            <span style={{ marginTop: "2px", lineHeight: "1.5em" }}>
              {row.original.prov_pcp}
            </span>
            <br />
          </span>
        );
      }
    }
  ];

  return (
    <div>
      <ReactTableFixedColumns
        data={providerDisplay}
        //TheadComponent={TheadComponent}

        columns={columns}
        minRows={0}
       
        showPagination ={false} 
      defaultPageSize={defaultPageSize}
       pageSizeOptions={[10, 20,50, 100]}
        
      />
    </div>
  );
}
export default SearchResults;
