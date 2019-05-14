import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';
//import SwipeableViews from 'react-swipeable-views';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import HomeIcon from '@material-ui/icons/Home';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';

// views
import Osman from "./views/Osman/Osman.jsx"
import Remco from "./views/Remco/Remco.jsx"
import Cengiz from "./views/Cengiz/Cengiz.jsx"
import Kubilay from "./views/Kubilay/Kubilay.jsx"

function TabContainer(props) {
  const { children, dir } = props;

  return (
    <Typography component="div" dir={dir}>
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
    width: '100',
    position: 'relative',
    height: '100',
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600],
    },
  },
  fabOrange: {
    color: theme.palette.common.white,
    backgroundColor: orange[500],
    '&:hover': {
      backgroundColor: orange[600],
    },
  },
});

class RoosterPoederCoat extends React.Component {
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
    const { value } = this.state;

    const { classes, theme } = this.props;
    const transitionDuration = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen,
    };

    const fabs = [
      {
        color: 'primary',
        className: classes.fab,
        icon: <HomeIcon />,
      },
      {
        color: 'secondary',
        className: classes.fab,
        icon: <HomeIcon />,
      },
      {
        color: 'inherit',
        className: classNames(classes.fab, classes.fabGreen),
        icon: <HomeIcon />,
      },
      {
        color: 'inherit',
        className: classNames(classes.fab, classes.fabOrange),
        icon: <HomeIcon />,
      },
    ];

    return (
      <div className={classes.root}>
        <AppBar position="fixed" color="paper">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab icon={<PersonPinIcon />} label="Osman" />
            <Tab icon={<PersonPinIcon />} label="Remco" />
            <Tab icon={<PersonPinIcon />} label="Cengiz" />
            <Tab icon={<PersonPinIcon />} label="Kubilay" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><Osman /></TabContainer>}
        {value === 1 && <TabContainer><Remco /></TabContainer>}
        {value === 2 && <TabContainer><Cengiz /></TabContainer>}
        {value === 3 && <TabContainer><Kubilay /></TabContainer>}
        {fabs.map((fab, index) => (
          <Zoom
            key={fab.color}
            in={this.state.value === index}
            timeout={transitionDuration}
            style={{
              transitionDelay: `${this.state.value === index ? transitionDuration.exit : 0}ms`,
            }}
            unmountOnExit
          >
            <Fab className={fab.className} color={fab.color}>
              {fab.icon}
            </Fab>
          </Zoom>
        ))}
      </div>
    );
  }
}

RoosterPoederCoat.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(RoosterPoederCoat);
