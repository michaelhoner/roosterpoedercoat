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
  createData('vr', '1 feb', '', 'nacht'),
  createData('za', '2 feb', '', ''),
  createData('zo', '3 feb', '', ''),
  createData('ma', '4 feb', '', 'ochtend'),
  createData('di', '5 feb', '', 'ochtend'),
  createData('wo', '6 feb', '', 'ochtend'),
  createData('do', '7 feb', '', 'middag'),
  createData('vr', '8 feb', '', 'middag'),
  createData('za', '9 feb', '', ''),
  createData('zo', '10 feb', '', ''),
  createData('ma', '11 feb', '', 'middag'),
  createData('di', '12 feb', '', 'nacht'),
  createData('wo', '13 feb', '', 'nacht'),
  createData('do', '14 feb', '', ''),
  createData('vr', '15 feb', '', ''),
  createData('za', '16 feb', '', 'middag'),
  createData('zo', '17 feb', '', 'nacht'),
  createData('ma', '18 feb', '', 'nacht'),
  createData('di', '19 feb', '', ''),
  createData('wo', '20 feb', '', ''),
  createData('do', '21 feb', '', 'ochtend'),
  createData('vr', '22 feb', '', 'ochtend'),
  createData('za', '23 feb', '', 'ochtend'),
  createData('zo', '24 feb', '', ''),
  createData('ma', '25 feb', '', ''),
  createData('di', '26 feb', '', 'middag'),
  createData('wo', '27 feb', '', 'middag'),
  createData('do', '28 feb', '', 'nacht'),
];

function FebruariMaand(props) {
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
              <TableCell padding="dense" align="left"><Typography variant="caption">{row.feestdag}</Typography></TableCell>
              <TableCell padding="dense" align="left">{row.dienst}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

FebruariMaand.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FebruariMaand);
