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
  createData('di', '1 jan', '', 'middag'),
  createData('wo', '2 jan', '', 'middag'),
  createData('do', '3 jan', '', 'nacht'),
  createData('vr', '4 jan', '', 'nacht'),
  createData('za', '5 jan', '', ''),
  createData('zo', '6 jan', '', ''),
  createData('ma', '7 jan', '', 'ochtend'),
  createData('di', '8 jan', '', 'ochtend'),
  createData('wo', '9 jan', '', 'ochtend'),
  createData('do', '10 jan', '', 'middag'),
  createData('vr', '11 jan', '', 'middag'),
  createData('za', '12 jan', '', ''),
  createData('zo', '13 jan', '', ''),
  createData('ma', '14 jan', '', 'middag'),
  createData('di', '15 jan', '', 'nacht'),
  createData('wo', '16 jan', '', 'nacht'),
  createData('do', '17 jan', '', ''),
  createData('vr', '18 jan', '', ''),
  createData('za', '19 jan', '', 'middag'),
  createData('zo', '20 jan', '', 'nacht'),
  createData('ma', '21 jan', '', 'nacht'),
  createData('di', '22 jan', '', ''),
  createData('wo', '23 jan', '', ''),
  createData('do', '24 jan', '', 'ochtend'),
  createData('vr', '25 jan', '', 'ochtend'),
  createData('za', '26 jan', '', 'ochtend'),
  createData('zo', '27 jan', '', ''),
  createData('ma', '28 jan', '', ''),
  createData('di', '29 jan', '', 'middag'),
  createData('wo', '30 jan', '', 'middag'),
  createData('do', '31 jan', '', 'nacht'),
];

function JanuariMaand(props) {
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

JanuariMaand.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JanuariMaand);
