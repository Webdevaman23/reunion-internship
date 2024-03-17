import { data } from "./sampleData";
import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import "./index.css";

// didnt able to get the createdAt and updatedAt data and convert it into DD-MMM-YYYY HH:MM
import moment from "moment";

// const CustomDateTimeRenderer = ({ value }) => {
//   const formattedDateTime = moment(value).format('DD-MMM-YYYY HH:mm');
//   return <span>{formattedDateTime}</span>;
// };

// Dont know how to use custom css in this material react table and tanstack library .
function App() {
  const columns = useMemo(() => [
    {
      accessorKey: "id",
      header: "ID",
      size: 150,
    },
    {
      accessorKey: "name",
      header: "Name",
      size: 150,
    },
    {
      accessorKey: "category",
      header: "Category",
      size: 150,
    },
    {
      accessorKey: "subcategory",
      header: "Subcategory",
      size: 150,
    },
    {
      accessorKey: "createdAt",
      header: "createdAt",
      size: 150,
      // Cell: ({ cell: { value } }) => <CustomDateTimeRenderer value={value} />,
    },
    {
      accessorKey: "updatedAt",
      header: "updatedAt",
      size: 150,
    },
    {
      accessorKey: "price",
      header: "Price",
      size: 150,
    },
    {
      accessorKey: "sale_price",
      header: "Saleprice",
      size: 150,
    },
  ] , []);

  const table = useMaterialReactTable({
    columns,
    data,
    muiPaginationProps: {
      showRowsPerPage: false,
      shape: "rounded",
    },
    paginationDisplayMode: "pages",
  });

  return (
    <div className="App">
      <MaterialReactTable table={table} />
    </div>
  );
}

export default App;
