import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

import "./Table.css";

const Table = ({ data, onDelete, onEdit }) => {

  const columns = [

    {
      header: "S.No",
      cell: ({ row }) => row.index + 1,
    },

    {
      accessorKey: "name",
      header: "👤 Name",
    },

    {
      accessorKey: "email",
      header: "📧 Email",
    },

    {
      header: "✏ Edit",
      cell: ({ row }) => (
        <button
          className="edit-btn"
          onClick={() => onEdit(row.original)}
        >
          ✏ Edit
        </button>
      ),
    },

    {
      header: "🗑 Delete",
      cell: ({ row }) => (
        <button
          className="delete-btn"
          onClick={() => onDelete(row.original.id)}
        >
          🗑 Delete
        </button>
      ),
    },

  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (

    <div className="table-container">

      <table className="custom-table">

        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>

              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}

            </tr>
          ))}
        </thead>

        <tbody>

          {table.getRowModel().rows.map(row => (

            <tr key={row.id}>

              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )}
                </td>
              ))}

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
};

export default Table;





// import React from "react";
// import "./Table.css";

// const Table = ({ data, onDelete, onEdit }) => {
//   return (
//     <div className="table-container">

//       {/* Header Row */}
//       <div className="row header">
//         <div>S.No</div>
//         <div>Name</div>
//         <div>Email</div>
//         <div>Edit</div>
//         <div>Delete</div>
//       </div>

//       {/* Data Rows */}
//       {data.length === 0 ? (
//         <div className="no-data">No users added yet</div>
//       ) : (
//         data.map((user, index) => (
//           <div className="row" key={index}>
//             <div>{index + 1}</div>
//             <div>{user.name}</div>
//             <div>{user.email}</div>
//             <div>
//               <button
//                 className="icon-btn edit"
//                 onClick={() => onEdit(index)}
//               >
//                 ✏️
//               </button>
//             </div>
//             <div>
//               <button
//                 className="icon-btn delete"
//                 onClick={() => onDelete(index)}
//               >
//                 🗑️
//               </button>
//             </div>
//           </div>
//         ))
//       )}

//     </div>
//   );
// };

// export default Table;
