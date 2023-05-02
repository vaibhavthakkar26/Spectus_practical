import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Story } from './DataTable.interface';
import { tableRowData } from '../../utils/helper';
import Loader from '../../Comman/Loader';
import moment from 'moment';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

interface props {
    data: Story[];
    loading: boolean
}

export default function DataTable (props:props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {
              tableRowData.map((result)=>{
                return (
                  <StyledTableCell align={result.position}>{result.name}</StyledTableCell>
                )
              })
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {
            props.loading && <Loader/>  
          }
          {props.data.map((row) => (
            <StyledTableRow key={row.points}>
              <StyledTableCell align="left" component="th" scope="row">
                {row.title}
              </StyledTableCell>
              <StyledTableCell align="center">{row.author}</StyledTableCell>
              <StyledTableCell align="center">{moment(row.created_at).format('DD-MM-YYYY')}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}