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
  const HeaderClassName = props.headerClassName;
  const showPagination = props.showPagination;
  const spanClassName = props.spanClassName;
  const ReactTableFixedColumns = withFixedColumns(ReactTable);
  //alert(spanClassName);
  //console.log(providerDisplay);
  //prov_addr_email
  //https://dawsonwalker.me/blog/printing-page-hack

  const TheadComponent = props => null;
  const columns = [
    {
      Header: "Provider",
      HeaderClassName: { HeaderClassName },
      fixed: "left",
      /* className: "sticky",
      headerClassName: "sticky",*/
      style: { "white-space": "unset" },
      className:"ReactColumn",
      Cell: row => {
        return (
          <span>
           <span> <b>{row.original.prov_name}</b></span>
            <br />
            {row.original.prov_addr_str1}
            <br />
            <b>{row.original.prov_addr_mail_city}, </b>
            {row.original.prov_addr_mail_state} {row.original.prov_addr_zip}{" "}
            <br />
            <span className={spanClassName}>
              <b>County:</b>
            </span>
            <i>{row.original.prov_county}</i>
            <span style={{ color: "blue" }}>
              <b> Phone:</b>
            </span>         
              <a href={row.original.prov_phone}>{row.original.prov_phone}</a>
            <br />
            <span style={{ color: "blue" }}>
              <b>Email:</b>{row.original.prov_addr_email}</span>
          </span>
        );
      }
    },
    {
      Header: "Information",
      // HeaderClassName: headerClassName,
      accessor: "",
      /*    className: "sticky",
              headerClassName: "sticky",*/
      style: { "white-space": "unset" },
      //style: { whiteSpace: "pre" }, '/n in criteria class
      Cell: row => {
        return (
          <span>
            <span style={{ color: "blue" }}>
              <b>Speciality:</b></span>
            {row.original.prov_specicialty} 
            <br />
            <span style={{ color: "blue" }}>
              <b>Linguistic capabilities:</b>
            {row.original.prov_lang_capabilities}</span>
            <br />           
              <span style={{ color: "blue" }}>
                <b>Accepting new Patients: </b> </span>              
              {row.original.prov_new_patient === "" ? (
                <span>Unknown</span>
              ) : (
                <span>Test</span>
              )}   
          </span>
        );
      }
    },
    {
      Header: "DHCP/PCP",
      //headerClassName: "reactTableHeader",
      accessor: "",
      Fixed: "right",
      /*  className: "sticky",
    headerClassName: "sticky",*/
      style: { "white-space": "unset" },
      Cell: row => {
        return (
          <span>
            <span style={{ color: "blue" }}>
              <b>DHCP:</b></span>
              {row.original.prov_dhcp}            
            <br />
            <span style={{ color: "blue" }}>
              <b>PCP:</b> </span>
              {row.original.prov_pcp}           
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
        //headerClassName={headerClassName}
        style
        columns={columns}
        minRows={0}
        showPagination={showPagination}
        defaultPageSize={defaultPageSize}
        pageSizeOptions={[10, 20, 50, 100]}
      />
    </div>
  );
}
export default SearchResults;
