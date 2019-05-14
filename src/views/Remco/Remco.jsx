import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

// core components
import Januari from "./Maanden/januari.jsx";
import Februari from "./Maanden/februari.jsx";
import Maart from "./Maanden/maart.jsx";
import April from "./Maanden/april.jsx";
import Mei from "./Maanden/mei.jsx";
import Juni from "./Maanden/juni.jsx";
import Juli from "./Maanden/juli.jsx";
import Augustus from "./Maanden/augustus.jsx";
import September from "./Maanden/september.jsx";
import Oktober from "./Maanden/oktober.jsx";
import November from "./Maanden/november.jsx";
import December from "./Maanden/december.jsx";

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 1 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    position: 'relative',
    top: theme.spacing.unit * 15,
  },
  monthBar: {
    top: theme.spacing.unit * 9,
  },
});

class RemcoRooster extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar className={classes.monthBar} position="fixed" color="paper">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="on"
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
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}><Januari /></TabContainer>
          <TabContainer dir={theme.direction}><Februari /></TabContainer>
          <TabContainer dir={theme.direction}><Maart /></TabContainer>
          <TabContainer dir={theme.direction}><April /></TabContainer>
          <TabContainer dir={theme.direction}><Mei /></TabContainer>
          <TabContainer dir={theme.direction}><Juni /></TabContainer>
          <TabContainer dir={theme.direction}><Juli /></TabContainer>
          <TabContainer dir={theme.direction}><Augustus /></TabContainer>
          <TabContainer dir={theme.direction}><September /></TabContainer>
          <TabContainer dir={theme.direction}><Oktober /></TabContainer>
          <TabContainer dir={theme.direction}><November /></TabContainer>
          <TabContainer dir={theme.direction}><December /></TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

RemcoRooster.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(RemcoRooster);
