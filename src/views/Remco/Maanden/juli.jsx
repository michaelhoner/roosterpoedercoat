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
  createData('ma', '1 jul', '', ''),
  createData('di', '2 jul', '', 'middag'),
  createData('wo', '3 jul', '', 'middag'),
  createData('do', '4 jul', '', 'nacht'),
  createData('vr', '5 jul', '', 'nacht'),
  createData('za', '6 jul', '', ''),
  createData('zo', '7 jul', '', ''),
  createData('ma', '8 jul', '', 'ochtend'),
  createData('di', '9 jul', '', 'ochtend'),
  createData('wo', '10 jul', '', 'ochtend'),
  createData('do', '11 jul', '', 'middag'),
  createData('vr', '12 jul', '', 'middag'),
  createData('za', '13 jul', '', ''),
  createData('zo', '14 jul', '', ''),
  createData('ma', '15 jul', '', 'middag'),
  createData('di', '16 jul', '', 'nacht'),
  createData('wo', '17 jul', '', 'nacht'),
  createData('do', '18 jul', '', ''),
  createData('vr', '19 jul', '', ''),
  createData('za', '20 jul', '', 'middag'),
  createData('zo', '21 jul', '', 'nacht'),
  createData('ma', '22 jul', '', 'nacht'),
  createData('di', '23 jul', '', ''),
  createData('wo', '24 jul', '', ''),
  createData('do', '25 jul', '', 'ochtend'),
  createData('vr', '26 jul', '', 'ochtend'),
  createData('za', '27 jul', '', 'ochtend'),
  createData('zo', '28 jul', '', ''),
  createData('ma', '29 jul', '', ''),
  createData('di', '30 jul', '', 'middag'),
  createData('wo', '31 jul', '', 'middag'),
];

function JuliMaand(props) {
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

JuliMaand.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JuliMaand);
