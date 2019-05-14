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
  createData('di', '1 jan', '', ''),
  createData('wo', '2 jan', '', ''),
  createData('do', '3 jan', '', 'ochtend'),
  createData('vr', '4 jan', '', 'ochtend'),
  createData('za', '5 jan', '', 'ochtend'),
  createData('zo', '6 jan', '', ''),
  createData('ma', '7 jan', '', ''),
  createData('di', '8 jan', '', 'middag'),
  createData('wo', '9 jan', '', 'middag'),
  createData('do', '10 jan', '', 'nacht'),
  createData('vr', '11 jan', '', 'nacht'),
  createData('za', '12 jan', '', ''),
  createData('zo', '13 jan', '', ''),
  createData('ma', '14 jan', '', 'ochtend'),
  createData('di', '15 jan', '', 'ochtend'),
  createData('wo', '16 jan', '', 'ochtend'),
  createData('do', '17 jan', '', 'middag'),
  createData('vr', '18 jan', '', 'middag'),
  createData('za', '19 jan', '', ''),
  createData('zo', '20 jan', '', ''),
  createData('ma', '21 jan', '', 'middag'),
  createData('di', '22 jan', '', 'nacht'),
  createData('wo', '23 jan', '', 'nacht'),
  createData('do', '24 jan', '', ''),
  createData('vr', '25 jan', '', ''),
  createData('za', '26 jan', '', 'middag'),
  createData('zo', '27 jan', '', 'nacht'),
  createData('ma', '28 jan', '', 'nacht'),
  createData('di', '29 jan', '', ''),
  createData('wo', '30 jan', '', ''),
  createData('do', '31 jan', '', 'ochtend'),
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
