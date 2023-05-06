import { Skeleton } from "@mui/material";
import { StyledTableCell, StyledTableRow } from "../../components/DataTable";

function Loader() {
  return (
    <>
      <StyledTableRow key={`Story`}>
        <StyledTableCell align="left" component="th" scope="row">
          <Skeleton animation="wave" variant="text" />
        </StyledTableCell>
        <StyledTableCell align="center">
          <Skeleton animation="wave" variant="text" />
        </StyledTableCell>
        <StyledTableCell align="center">
          <Skeleton animation="wave" variant="text" />
        </StyledTableCell>
      </StyledTableRow>
      <StyledTableRow key={`Story`}>
        <StyledTableCell align="left" component="th" scope="row">
          <Skeleton animation="wave" variant="text" />
        </StyledTableCell>
        <StyledTableCell align="center">
          <Skeleton animation="wave" variant="text" />
        </StyledTableCell>
        <StyledTableCell align="center">
          <Skeleton animation="wave" variant="text" />
        </StyledTableCell>
      </StyledTableRow>
      <StyledTableRow key={`Story`}>
        <StyledTableCell align="left" component="th" scope="row">
          <Skeleton animation="wave" variant="text" />
        </StyledTableCell>
        <StyledTableCell align="center">
          <Skeleton animation="wave" variant="text" />
        </StyledTableCell>
        <StyledTableCell align="center">
          <Skeleton animation="wave" variant="text" />
        </StyledTableCell>
      </StyledTableRow>
    </>
  );
}

export default Loader;
