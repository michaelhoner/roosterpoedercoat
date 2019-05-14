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
  createData('ma', '1 apr', '', ''),
  createData('di', '2 apr', '', 'middag'),
  createData('wo', '3 apr', '', 'middag'),
  createData('do', '4 apr', '', 'nacht'),
  createData('vr', '5 apr', '', 'nacht'),
  createData('za', '6 apr', '', ''),
  createData('zo', '7 apr', '', ''),
  createData('ma', '8 apr', '', 'ochtend'),
  createData('di', '9 apr', '', 'ochtend'),
  createData('wo', '10 apr', '', 'ochtend'),
  createData('do', '11 apr', '', 'middag'),
  createData('vr', '12 apr', '', 'middag'),
  createData('za', '13 apr', '', ''),
  createData('zo', '14 apr', '', ''),
  createData('ma', '15 apr', '', 'middag'),
  createData('di', '16 apr', '', 'nacht'),
  createData('wo', '17 apr', '', 'nacht'),
  createData('do', '18 apr', '', ''),
  createData('vr', '19 apr', 'Goede Vrijdag', ''),
  createData('za', '20 apr', '', 'middag'),
  createData('zo', '21 apr', '1e Paasdag', 'nacht'),
  createData('ma', '22 apr', '2e Paasdag', 'nacht'),
  createData('di', '23 apr', '', ''),
  createData('wo', '24 apr', '', ''),
  createData('do', '25 apr', '', 'ochtend'),
  createData('vr', '26 apr', '', 'ochtend'),
  createData('za', '27 apr', 'Koningsdag', 'ochtend'),
  createData('zo', '28 apr', '', ''),
  createData('ma', '29 apr', '', ''),
  createData('di', '30 apr', '', 'middag'),
];

function AprilMaand(props) {
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

AprilMaand.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AprilMaand);
