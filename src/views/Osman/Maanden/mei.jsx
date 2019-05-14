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
  createData('wo', '1 mei', '', 'ochtend'),
  createData('do', '2 mei', '', 'middag'),
  createData('vr', '3 mei', '', 'middag'),
  createData('za', '4 mei', '', ''),
  createData('zo', '5 mei', '', ''),
  createData('ma', '6 mei', '', 'middag'),
  createData('di', '7 mei', '', 'nacht'),
  createData('wo', '8 mei', '', 'nacht'),
  createData('do', '9 mei', '', ''),
  createData('vr', '10 mei', '', ''),
  createData('za', '11 mei', '', 'middag'),
  createData('zo', '12 mei', '', 'nacht'),
  createData('ma', '13 mei', '', 'nacht'),
  createData('di', '14 mei', '', ''),
  createData('wo', '15 mei', '', ''),
  createData('do', '16 mei', '', 'ochtend'),
  createData('vr', '17 mei', '', 'ochtend'),
  createData('za', '18 mei', '', 'ochtend'),
  createData('zo', '19 mei', '', ''),
  createData('ma', '20 mei', '', ''),
  createData('di', '21 mei', '', 'middag'),
  createData('wo', '22 mei', '', 'middag'),
  createData('do', '23 mei', '', 'nacht'),
  createData('vr', '24 mei', '', 'nacht'),
  createData('za', '25 mei', '', ''),
  createData('zo', '26 mei', '', ''),
  createData('ma', '27 mei', '', 'ochtend'),
  createData('di', '28 mei', '', 'ochtend'),
  createData('wo', '29 mei', '', 'ochtend'),
  createData('do', '30 mei', 'Hemelvaartsdag', 'middag'),
  createData('vr', '31 mei', '', 'middag'),
];

function MeiMaand(props) {
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

MeiMaand.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MeiMaand);
