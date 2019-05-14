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
  createData('di', '1 okt', '', 'middag'),
  createData('wo', '2 okt', '', 'middag'),
  createData('do', '3 okt', '', 'nacht'),
  createData('vr', '4 okt', '', 'nacht'),
  createData('za', '5 okt', '', ''),
  createData('zo', '6 okt', '', ''),
  createData('ma', '7 okt', '', 'ochtend'),
  createData('di', '8 okt', '', 'ochtend'),
  createData('wo', '9 okt', '', 'ochtend'),
  createData('do', '10 okt', '', 'middag'),
  createData('vr', '11 okt', '', 'middag'),
  createData('za', '12 okt', '', ''),
  createData('zo', '13 okt', '', ''),
  createData('ma', '14 okt', '', 'middag'),
  createData('di', '15 okt', '', 'nacht'),
  createData('wo', '16 okt', '', 'nacht'),
  createData('do', '17 okt', '', ''),
  createData('vr', '18 okt', '', ''),
  createData('za', '19 okt', '', 'middag'),
  createData('zo', '20 okt', '', 'nacht'),
  createData('ma', '21 okt', '', 'nacht'),
  createData('di', '22 okt', '', ''),
  createData('wo', '23 okt', '', ''),
  createData('do', '24 okt', '', 'ochtend'),
  createData('vr', '25 okt', '', 'ochtend'),
  createData('za', '26 okt', '', 'ochtend'),
  createData('zo', '27 okt', '', ''),
  createData('ma', '28 okt', '', ''),
  createData('di', '29 okt', '', 'middag'),
  createData('wo', '30 okt', '', 'middag'),
  createData('do', '31 okt', '', 'nacht'),
];

function OktoberMaand(props) {
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

OktoberMaand.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OktoberMaand);
