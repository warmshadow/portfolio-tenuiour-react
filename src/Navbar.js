import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import NavbarDrawer from './NavbarDrawer';

const useStyles = makeStyles((theme) => ({
	appBar: {
		backgroundColor: 'rgba(254, 253, 250, 0.8)',
	},
	title: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		fontSize: '0.875rem',
		color: '#425544',
		fontWeight: 500,
		letterSpacing: 2,
		zIndex: 1,
		textDecoration: 'none',
	},
	toolbar: {
	 	minHeight: '48px',
		paddingRight: 0,
		paddingLeft: 0,
		justifyContent: 'flex-end',
		alignItems: 'stretch',
	},
	active: {
		color: '#333330',
	},
	mobileButton: {
		width: '100%',
		height: '50%',
	},
	mobileButtonLabel: {
		justifyContent: 'center',
	},
	menuButton: {
		textTransform: 'lowercase',
		'&:hover': {
			color: '#828579',
		}
	},
}));

function Navbar(props) {
	const curPath = props.location.pathname;
	const isActive = () => { 
		if (!curPath.startsWith("/about")) return true
		else return false
	};
	
	const classes = useStyles();
	const xsDown = useMediaQuery('(max-width:600px)');

  const buttons = () => {
  	const buttonProps = {
			component: NavLink,
			activeClassName: classes.active
  	};

  	if (xsDown) {
	  	buttonProps.classes = {
	  		root: classes.mobileButton,
	  		label: classes.mobileButtonLabel,
	  	};
	  	buttonProps.onClick = toggleDrawer;
  	}
  	return(
  		<React.Fragment>
	  		<Button  
					to="/" 
					isActive={isActive}
					{...buttonProps}
				>
					Work
				</Button>
				<Button 
					to="/about" 
					exact 
					{...buttonProps}
				>
					About
				</Button>
			</React.Fragment>
  	);
  }

	const [drawerOpen, setDrawerOpen] = useState(false);
	const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const dynamicStyle = {
  	transition: 'margin-top 450ms',
  	transitionTimingFunction: drawerOpen 
  		? 'cubic-bezier(0, 0, 0.2, 1)' 
  		: 'cubic-bezier(0.4, 0, 0.6, 1)',
  	marginTop: drawerOpen ? 113 : 0,
  };

	return(
		<AppBar elevation={0} style={dynamicStyle} className={classes.appBar}>
			{
				xsDown && (
					<NavbarDrawer open={drawerOpen}>
			    	{buttons()}
			    </NavbarDrawer>
			  )
    	}
			<Typography variant='h6'>
				<NavLink to="/" className={classes.title}>
					tenuiour
				</NavLink>
			</Typography>
			<Toolbar className={classes.toolbar}>
				{
					xsDown 
						? <Button 
								disableRipple 
								onClick={toggleDrawer} 
								className={classes.menuButton}
							>
								Menu
							</Button> 
						: buttons()
				}
			</Toolbar>
		</AppBar>
	);
}

export default withRouter(Navbar);