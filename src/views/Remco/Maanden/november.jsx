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
  createData('vr', '1 nov', '', 'middag'),
  createData('za', '2 nov', '', ''),
  createData('zo', '3 nov', '', ''),
  createData('ma', '4 nov', '', 'middag'),
  createData('di', '5 nov', '', 'nacht'),
  createData('wo', '6 nov', '', 'nacht'),
  createData('do', '7 nov', '', ''),
  createData('vr', '8 nov', '', ''),
  createData('za', '9 nov', '', 'middag'),
  createData('zo', '10 nov', '', 'nacht'),
  createData('ma', '11 nov', '', 'nacht'),
  createData('di', '12 nov', '', ''),
  createData('wo', '13 nov', '', ''),
  createData('do', '14 nov', '', 'ochtend'),
  createData('vr', '15 nov', '', 'ochtend'),
  createData('za', '16 nov', '', 'ochtend'),
  createData('zo', '17 nov', '', ''),
  createData('ma', '18 nov', '', ''),
  createData('di', '19 nov', '', 'middag'),
  createData('wo', '20 nov', '', 'middag'),
  createData('do', '21 nov', '', 'nacht'),
  createData('vr', '22 nov', '', 'nacht'),
  createData('za', '23 nov', '', ''),
  createData('zo', '24 nov', '', ''),
  createData('ma', '25 nov', '', 'ochtend'),
  createData('di', '26 nov', '', 'ochtend'),
  createData('wo', '27 nov', '', 'ochtend'),
  createData('do', '28 nov', '', 'middag'),
  createData('vr', '29 nov', '', 'middag'),
  createData('za', '30 nov', '', ''),
];

function NovemberMaand(props) {
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

NovemberMaand.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NovemberMaand);
