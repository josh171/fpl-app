import { Skeleton, TableCell, TableRow } from "@mui/material";
import React from "react";

const TableSkeletonLoader = ({ NoRows, NoColumns }) => {
  return [...Array(NoRows)].map((r, index) => {
    return (
      <TableRow key={index}>
        {[...Array(NoColumns)].map((c, index) => {
          return (
            <TableCell key={index}>
              <Skeleton animation="wave" variant="text" width={100} />
            </TableCell>
          );
        })}
      </TableRow>
    );
  });
};

export default TableSkeletonLoader;
