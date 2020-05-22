import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router";

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
	}
}));

function Navbar(props) {
	const curPath = props.location.pathname;
	const isActive = () => { 
		if(!curPath.startsWith("/about") 
			&& !curPath.startsWith("/contact")
		) return true
		else return false
	};

	const classes = useStyles();
	return(
		<AppBar elevation={0} className={classes.appBar}>
				<Typography variant='h6'>
					<NavLink to="/" className={classes.title}>
						tenuiour
					</NavLink>
				</Typography>
				<Toolbar className={classes.toolbar}>
					<Button 
						component={NavLink} 
						to="/" 
						isActive={isActive} 
						activeClassName={classes.active}
					>
						Work
					</Button>
					<Button 
						component={NavLink} 
						to="/about" 
						exact 
						activeClassName={classes.active}
					>
						About
					</Button>
					<Button 
						component={NavLink} 
						to="/contact" 
						exact 
						activeClassName={classes.active} 
					>
						Contact
					</Button>
				</Toolbar>
		</AppBar>
	);
}

export default withRouter(Navbar);