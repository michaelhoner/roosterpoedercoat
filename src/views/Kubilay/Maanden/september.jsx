import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'hidden',
  },
  table: {
    width: '100%',
  },
});

let id = 0;
function createData(dag, datum, feestdag, dienst) {
  id += 1;
  return { id, dag, datum, feestdag, dienst };
}

const rows = [
  createData('zo', '1 sep', '', ''),
  createData('ma', '2 sep', '', 'middag'),
  createData('di', '3 sep', '', 'nacht'),
  createData('wo', '4 sep', '', 'nacht'),
  createData('do', '5 sep', '', ''),
  createData('vr', '6 sep', '', ''),
  createData('za', '7 sep', '', 'middag'),
  createData('zo', '8 sep', '', 'nacht'),
  createData('ma', '9 sep', '', 'nacht'),
  createData('di', '10 sep', '', ''),
  createData('wo', '11 sep', '', ''),
  createData('do', '12 sep', '', 'ochtend'),
  createData('vr', '13 sep', '', 'ochtend'),
  createData('za', '14 sep', '', 'ochtend'),
  createData('zo', '15 sep', '', ''),
  createData('ma', '16 sep', '', ''),
  createData('di', '17 sep', '', 'middag'),
  createData('wo', '18 sep', '', 'middag'),
  createData('do', '19 sep', '', 'nacht'),
  createData('vr', '20 sep', '', 'nacht'),
  createData('za', '21 sep', '', ''),
  createData('zo', '22 sep', '', ''),
  createData('ma', '23 sep', '', 'ochtend'),
  createData('di', '24 sep', '', 'ochtend'),
  createData('wo', '25 sep', '', 'ochtend'),
  createData('do', '26 sep', '', 'middag'),
  createData('vr', '27 sep', '', 'middag'),
  createData('za', '28 sep', '', ''),
  createData('zo', '29 sep', '', ''),
  createData('ma', '30 sep', '', 'middag'),
];

function SeptemberMaand(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell padding="dense" align="left">Dag</TableCell>
            <TableCell padding="dense" align="left">Datum</TableCell>
            <TableCell padding="dense" align="left">ATV</TableCell>
            <TableCell padding="dense" align="left">Dienst</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell padding="dense" align="left" component="th" scope="row">
                {row.dag}
              </TableCell>
              <TableCell padding="dense" align="left">{row.datum}</TableCell>
              <TableCell padding="none" align="left"><Typography variant="caption">{row.feestdag}</Typography></TableCell>
              <TableCell padding="dense" align="left">{row.dienst}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SeptemberMaand.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SeptemberMaand);
