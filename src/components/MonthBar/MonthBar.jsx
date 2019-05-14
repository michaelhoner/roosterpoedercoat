import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
// components
//import Osman from "./src/Diensten/Osman/osman.jsx"

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

class MonthBar extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="jan" />
            <Tab label="feb" />
            <Tab label="mrt" />
            <Tab label="apr" />
            <Tab label="mei" />
            <Tab label="jun" />
            <Tab label="jul" />
            <Tab label="aug" />
            <Tab label="sep" />
            <Tab label="okt" />
            <Tab label="nov" />
            <Tab label="dec" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>One</TabContainer>}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
        {value === 3 && <TabContainer>Item Four</TabContainer>}
        {value === 4 && <TabContainer>Item Five</TabContainer>}
        {value === 5 && <TabContainer>Item Six</TabContainer>}
        {value === 6 && <TabContainer>Item Seven</TabContainer>}
        {value === 7 && <TabContainer>Item Seven</TabContainer>}
        {value === 8 && <TabContainer>Item 8</TabContainer>}
        {value === 9 && <TabContainer>Item 9</TabContainer>}
        {value === 10 && <TabContainer>Item 10</TabContainer>}
        {value === 11 && <TabContainer>Item 11</TabContainer>}
        {value === 12 && <TabContainer>Item 12</TabContainer>}
      </div>
    );
  }
}

MonthBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MonthBar);
