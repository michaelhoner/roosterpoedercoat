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
  createData('vr', '1 mrt', '', 'middag'),
  createData('za', '2 mrt', '', ''),
  createData('zo', '3 mrt', '', ''),
  createData('ma', '4 mrt', '', 'middag'),
  createData('di', '5 mrt', '', 'nacht'),
  createData('wo', '6 mrt', '', 'nacht'),
  createData('do', '7 mrt', '', ''),
  createData('vr', '8 mrt', '', ''),
  createData('za', '9 mrt', '', 'middag'),
  createData('zo', '10 mrt', '', 'nacht'),
  createData('ma', '11 mrt', '', 'nacht'),
  createData('di', '12 mrt', '', ''),
  createData('wo', '13 mrt', '', ''),
  createData('do', '14 mrt', '', 'ochtend'),
  createData('vr', '15 mrt', '', 'ochtend'),
  createData('za', '16 mrt', '', 'ochtend'),
  createData('zo', '17 mrt', '', ''),
  createData('ma', '18 mrt', '', ''),
  createData('di', '19 mrt', '', 'middag'),
  createData('wo', '20 mrt', '', 'middag'),
  createData('do', '21 mrt', '', 'nacht'),
  createData('vr', '22 mrt', '', 'nacht'),
  createData('za', '23 mrt', '', ''),
  createData('zo', '24 mrt', '', ''),
  createData('ma', '25 mrt', '', 'ochtend'),
  createData('di', '26 mrt', '', 'ochtend'),
  createData('wo', '27 mrt', '', 'ochtend'),
  createData('do', '28 mrt', '', 'middag'),
  createData('vr', '29 mrt', '', 'middag'),
  createData('za', '30 mrt', '', ''),
  createData('zo', '31 mrt', '', ''),
];

function MaartMaand(props) {
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

MaartMaand.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MaartMaand);
