import React from "react";
// project import
import MainCard from "../../../components/MainCard";
import MaterialTable from "material-table";
import XLSX from "xlsx";
const studentData = [
  {
    id: 1,
    name: "Neeraj",
    email: "neeraj@gmail.com",
    year: 2015,
    fee: 167000
  },
  {
    id: 2,
    name: "Vikas",
    email: "vikas@gmail.com",
    year: 2013,
    fee: 785462
  },

  {
    id: 3,
    name: "Rahul",
    email: "rahul@gmail.com",
    year: 2020,
    fee: 784596
  }
];
// ==============================|| CATEGORY PAGE ||============================== //

const Category = () => {
  const columns = [
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Year", field: "year", type: "numeric" },
    { title: "Fee", field: "fee", type: "currency" }
  ];

  const downloadExcel = () => {
    const newData = studentData.map((row) => {
      delete row.tableData;
      return row;
    });
    const workSheet = XLSX.utils.json_to_sheet(newData);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "students");
    //Buffer
    let buf = XLSX.write(workBook, { bookType: "xlsx", type: "buffer" });
    //Binary string
    XLSX.write(workBook, { bookType: "xlsx", type: "binary" });
    //Download
    XLSX.writeFile(workBook, "StudentsData.xlsx");
  };
  return <MainCard title="Category"></MainCard>;
};

export default Category;
