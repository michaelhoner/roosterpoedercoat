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
  createData('za', '1 jun', '', ''),
  createData('zo', '2 jun', '', ''),
  createData('ma', '3 jun', '', 'ochtend'),
  createData('di', '4 jun', '', 'ochtend'),
  createData('wo', '5 jun', '', 'ochtend'),
  createData('do', '6 jun', '', 'middag'),
  createData('vr', '7 jun', '', 'middag'),
  createData('za', '8 jun', '', ''),
  createData('zo', '9 jun', '1e Pinksterdag', ''),
  createData('ma', '10 jun', '2e Pinksterdag', 'middag'),
  createData('di', '11 jun', '', 'nacht'),
  createData('wo', '12 jun', '', 'nacht'),
  createData('do', '13 jun', '', ''),
  createData('vr', '14 jun', '', ''),
  createData('za', '15 jun', '', 'middag'),
  createData('zo', '16 jun', '', 'nacht'),
  createData('ma', '17 jun', '', 'nacht'),
  createData('di', '18 jun', '', ''),
  createData('wo', '19 jun', '', ''),
  createData('do', '20 jun', '', 'ochtend'),
  createData('vr', '21 jun', '', 'ochtend'),
  createData('za', '22 jun', '', 'ochtend'),
  createData('zo', '23 jun', '', ''),
  createData('ma', '24 jun', '', ''),
  createData('di', '25 jun', '', 'middag'),
  createData('wo', '26 jun', '', 'middag'),
  createData('do', '27 jun', '', 'nacht'),
  createData('vr', '28 jun', '', 'nacht'),
  createData('za', '29 jun', '', ''),
  createData('zo', '30 jun', '', ''),
];

function JuniMaand(props) {
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

JuniMaand.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JuniMaand);
