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
  createData('wo', '1 mei', '', ''),
  createData('do', '2 mei', '', 'ochtend'),
  createData('vr', '3 mei', '', 'ochtend'),
  createData('za', '4 mei', '', 'ochtend'),
  createData('zo', '5 mei', '', ''),
  createData('ma', '6 mei', '', ''),
  createData('di', '7 mei', '', 'middag'),
  createData('wo', '8 mei', '', 'middag'),
  createData('do', '9 mei', '', 'nacht'),
  createData('vr', '10 mei', '', 'nacht'),
  createData('za', '11 mei', '', ''),
  createData('zo', '12 mei', '', ''),
  createData('ma', '13 mei', '', 'ochtend'),
  createData('di', '14 mei', '', 'ochtend'),
  createData('wo', '15 mei', '', 'ochtend'),
  createData('do', '16 mei', '', 'middag'),
  createData('vr', '17 mei', '', 'middag'),
  createData('za', '18 mei', '', ''),
  createData('zo', '19 mei', '', ''),
  createData('ma', '20 mei', '', 'middag'),
  createData('di', '21 mei', '', 'nacht'),
  createData('wo', '22 mei', '', 'nacht'),
  createData('do', '23 mei', '', ''),
  createData('vr', '24 mei', '', ''),
  createData('za', '25 mei', '', 'middag'),
  createData('zo', '26 mei', '', 'nacht'),
  createData('ma', '27 mei', '', 'nacht'),
  createData('di', '28 mei', '', ''),
  createData('wo', '29 mei', '', ''),
  createData('do', '30 mei', 'Hemelvaartsdag', 'ochtend'),
  createData('vr', '31 mei', '', 'ochtend'),
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
              <TableCell padding="none" align="left"><Typography variant="caption">{row.feestdag}</Typography></TableCell>
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
