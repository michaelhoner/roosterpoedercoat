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
  createData('ma', '1 jul', '', 'nacht'),
  createData('di', '2 jul', '', ''),
  createData('wo', '3 jul', '', ''),
  createData('do', '4 jul', '', 'ochtend'),
  createData('vr', '5 jul', '', 'ochtend'),
  createData('za', '6 jul', '', 'ochtend'),
  createData('zo', '7 jul', '', ''),
  createData('ma', '8 jul', '', ''),
  createData('di', '9 jul', '', 'middag'),
  createData('wo', '10 jul', '', 'middag'),
  createData('do', '11 jul', '', 'nacht'),
  createData('vr', '12 jul', '', 'nacht'),
  createData('za', '13 jul', '', ''),
  createData('zo', '14 jul', '', ''),
  createData('ma', '15 jul', '', 'ochtend'),
  createData('di', '16 jul', '', 'ochtend'),
  createData('wo', '17 jul', '', 'ochtend'),
  createData('do', '18 jul', '', 'middag'),
  createData('vr', '19 jul', '', 'middag'),
  createData('za', '20 jul', '', ''),
  createData('zo', '21 jul', '', ''),
  createData('ma', '22 jul', '', 'middag'),
  createData('di', '23 jul', '', 'nacht'),
  createData('wo', '24 jul', '', 'nacht'),
  createData('do', '25 jul', '', ''),
  createData('vr', '26 jul', '', ''),
  createData('za', '27 jul', '', 'middag'),
  createData('zo', '28 jul', '', 'nacht'),
  createData('ma', '29 jul', '', 'nacht'),
  createData('di', '30 jul', '', ''),
  createData('wo', '31 jul', '', ''),
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
