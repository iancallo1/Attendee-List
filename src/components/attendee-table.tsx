"use client"; // Ensure this directive is at the top of the file

import React, { useMemo } from 'react';
import {Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader,TableRow,} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area"; 
import { Separator } from "@/components/ui/separator";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";

interface Attendee {
  name: string;
  dateTime: string;
  table: string;
  status: string;
}

interface AttendeeTableProps {
  attendees: Attendee[];
}

export function Attendee_Table({ attendees }: AttendeeTableProps) {
  const columns = useMemo<ColumnDef<Attendee>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "dateTime",
        header: "Date & Time",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "table",
        header: "Table",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: (info) => info.getValue(),
        meta: {
          isNumeric: true,
        },
      },
    ],
    []
  );

  const table = useReactTable({
    data: attendees,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 10, // Adjust the page size if needed
      },
    },
  });

  return (
    <div className="rounded-md border overflow-hidden bg-white">
      <div className="table-container">
        <Table style={{ tableLayout: 'fixed', width: '100%', backgroundColor: 'white-100' }}>
          <TableCaption>A list of Attendees.</TableCaption>
          <TableHeader className="table-header-group">
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <TableHead key={header.id} className="w-[200px]">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="table-body max-h-96 overflow-y-auto">
            {table.getRowModel().rows.map(row => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <TableCell key={cell.id} className="font-medium">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell className="bg-white" colSpan={3}>Total Attendees</TableCell>
              <TableCell className="flex flex-1 justify-start">{attendees.length}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          className='bg-white hover:bg-amber-400'
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          className='bg-white hover:bg-amber-400'
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
      {/* Include the ScrollAreaDemo component here */}
      <ScrollArea />
    </div>
  );
}
