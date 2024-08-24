import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

interface TableDataType {
  columns?: any;
  rows?: any;
  extraColumns?: () => void;
  extraRows?: (id: string) => void;
}

function CommonTable({
  columns,
  rows,
  extraColumns,
  extraRows,
}: TableDataType) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column: any) => (
              <TableCell key={column.key}>{column.title}</TableCell>
            ))}
            {extraColumns && extraColumns()}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row: any,i:any) => (
            <TableRow key={row._id}>
              {columns.map((column: any) => (
                <TableCell key={column.key}>{row[column.key]}</TableCell>
              ))}
              {extraRows && extraRows(row)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CommonTable;
