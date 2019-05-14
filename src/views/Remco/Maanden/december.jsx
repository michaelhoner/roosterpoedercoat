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
  createData('zo', '1 dec', '', ''),
  createData('ma', '2 dec', '', 'middag'),
  createData('di', '3 dec', '', 'nacht'),
  createData('wo', '4 dec', '', 'nacht'),
  createData('do', '5 dec', '', ''),
  createData('vr', '6 dec', '', ''),
  createData('za', '7 dec', '', 'middag'),
  createData('zo', '8 dec', '', 'nacht'),
  createData('ma', '9 dec', '', 'nacht'),
  createData('di', '10 dec', '', ''),
  createData('wo', '11 dec', '', ''),
  createData('do', '12 dec', '', 'ochtend'),
  createData('vr', '13 dec', '', 'ochtend'),
  createData('za', '14 dec', '', 'ochtend'),
  createData('zo', '15 dec', '', ''),
  createData('ma', '16 dec', '', ''),
  createData('di', '17 dec', '', 'middag'),
  createData('wo', '18 dec', '', 'middag'),
  createData('do', '19 dec', '', 'nacht'),
  createData('vr', '20 dec', '', 'nacht'),
  createData('za', '21 dec', '', ''),
  createData('zo', '22 dec', '', ''),
  createData('ma', '23 dec', '', 'ochtend'),
  createData('di', '24 dec', '', 'ochtend'),
  createData('wo', '25 dec', '1e Kerstdag', 'ochtend'),
  createData('do', '26 dec', '2e Kerstdag', 'middag'),
  createData('vr', '27 dec', '', 'middag'),
  createData('za', '28 dec', '', ''),
  createData('zo', '29 dec', '', ''),
  createData('ma', '30 dec', '', 'middag'),
  createData('di', '31 dec', '', 'nacht'),
];

function DecemberMaand(props) {
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

DecemberMaand.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DecemberMaand);
