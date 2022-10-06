import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import cellEditFactory, { Type } from "react-bootstrap-table2-editor";
import filterFacrtory, { textFilter } from "react-bootstrap-table2-filter";


const AllUsers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios({
      url: "http://localhost:8000/formData",
      method: "GET",
    }).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  };

  const columns = [
    {
        dataField: 'sl.no',
        text: '#',
        formatter: (cell, row, rowIndex) => {
          return rowIndex + 1;
        },
        sort: true,
      },
    {
      dataField: "Email",
      text: "Email",
      sort: true,
    },

    {
      dataField: "Name",
      text: "Name",
      sort: true,
      editable: false,
      filter: textFilter(),
    },
  ];
  return (
    <div className="App">
      <BootstrapTable
        keyField="id"
        data={data}
        columns={columns}
        striped
        hover
        condensed
        filter={filterFacrtory()}
      />
    </div>
  );
};

export default AllUsers;
