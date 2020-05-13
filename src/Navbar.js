import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	appBar: {
		borderBottom: '1px solid black',
	},
	toolbar: {
		minHeight: 0,
		paddingRight: 0,
	},
	title: {
		flexGrow: 8,
		fontSize: '0.875rem',
	},
	// menuButton: {
	// 	flexGrow: 1,
	// 	borderLeft: '1px solid black',
	// }
}));

const NavButton = withStyles({
	root: {
		flexGrow: 1,
		borderLeft: '1px solid black',
	},
})(Button);

// function Navbar() {
// 	const classes = useStyles();
// 	return(
// 		<AppBar position='static' color='transparent' elevation={0} className={classes.appBar}>
// 			<Toolbar className={classes.toolbar}>
// 				<Typography variant='h6' className={classes.title}>tenuiour</Typography>
// 				<Button className={classes.menuButton}>Work</Button>
// 				<Button className={classes.menuButton}>About Me</Button>
// 				<Button className={classes.menuButton}>Contact</Button>
// 			</Toolbar>
// 		</AppBar>
// 	);
// }

function Navbar() {
	const classes = useStyles();
	return(
		<AppBar position='static' color='transparent' elevation={0} className={classes.appBar}>
			<Toolbar className={classes.toolbar}>
				<Typography variant='h6' className={classes.title}>tenuiour</Typography>
				<NavButton>Work</NavButton>
				<NavButton>About Me</NavButton>
				<NavButton>Contact</NavButton>
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;