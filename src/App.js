import { data } from "./sampleData";
import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import "./index.css";

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
