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
  createData('ma', '1 apr', '', 'ochtend'),
  createData('di', '2 apr', '', 'ochtend'),
  createData('wo', '3 apr', '', 'ochtend'),
  createData('do', '4 apr', '', 'middag'),
  createData('vr', '5 apr', '', 'middag'),
  createData('za', '6 apr', '', ''),
  createData('zo', '7 apr', '', ''),
  createData('ma', '8 apr', '', 'middag'),
  createData('di', '9 apr', '', 'nacht'),
  createData('wo', '10 apr', '', 'nacht'),
  createData('do', '11 apr', '', ''),
  createData('vr', '12 apr', '', ''),
  createData('za', '13 apr', '', 'middag'),
  createData('zo', '14 apr', '', 'nacht'),
  createData('ma', '15 apr', '', 'nacht'),
  createData('di', '16 apr', '', ''),
  createData('wo', '17 apr', '', ''),
  createData('do', '18 apr', '', 'ochtend'),
  createData('vr', '19 apr', 'Goede Vrijdag', 'ochtend'),
  createData('za', '20 apr', '', 'ochtend'),
  createData('zo', '21 apr', '1e Paasdag', ''),
  createData('ma', '22 apr', '2e Paasdag', ''),
  createData('di', '23 apr', '', 'middag'),
  createData('wo', '24 apr', '', 'middag'),
  createData('do', '25 apr', '', 'nacht'),
  createData('vr', '26 apr', '', 'nacht'),
  createData('za', '27 apr', 'Koningsdag', ''),
  createData('zo', '28 apr', '', ''),
  createData('ma', '29 apr', '', 'ochtend'),
  createData('di', '30 apr', '', 'ochtend'),
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
              <TableCell padding="dense" align="left"><Typography variant="caption">{row.feestdag}</Typography></TableCell>
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
