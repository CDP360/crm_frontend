// import * as React from 'react';
// import Box from '@mui/material/Box';
// import {
//   DataGridPremium,
//   GridToolbar,
//   useGridApiRef,
//   useKeepGroupedColumnsHidden,
// } from '@mui/x-data-grid-premium';
// import  useDemoData  from '@mui/x-data-grid-generator';

// export default function SmartListTable() {
//   const { data, loading } = useDemoData({
//     dataSet: 'Commodity',
//     rowLength: 100,
//     editable: true,
//     visibleFields: [
//       'commodity',
//       'quantity',
//       'filledQuantity',
//       'status',
//       'isFilled',
//       'unitPrice',
//       'unitPriceCurrency',
//       'subTotal',
//       'feeRate',
//       'feeAmount',
//       'incoTerm',
//     ],
//   });

//   const apiRef = useGridApiRef();

//   const initialState = useKeepGroupedColumnsHidden({
//     apiRef,
//     initialState: {
//       ...data.initialState,
//       rowGrouping: {
//         ...data.initialState?.rowGrouping,
//         model: ['commodity'],
//       },
//       sorting: {
//         sortModel: [{ field: '__row_group_by_columns_group__', sort: 'asc' }],
//       },
//     },
//   });

//   return (
//     <Box sx={{ height: 520, width: '100%' }}>
//       <DataGridPremium
//         {...data}
//         apiRef={apiRef}
//         loading={loading}
//         disableSelectionOnClick
//         initialState={initialState}
//         components={{ Toolbar: GridToolbar }}
//         experimentalFeatures={{ newEditingApi: true }}
//       />
//     </Box>
//   );
// }

import * as React from "react";
// import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { createSearchParams } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function DataTable() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: 400,
        width: "100%",
        backgroundColor: "white",
        marginTop: "2%",
      }}
    >
      {/* <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onSelectionModelChange={(index) => {
          let selectedRow = rows[index - 1];
          console.log("row", selectedRow);
          navigate("/contacts/contactpersonal", {
            state: {
              firstName: selectedRow.firstName,
              lastName: selectedRow.lastName,
              age: selectedRow.age,
            },
          });
        }}
      /> */}
    </div>
  );
}
