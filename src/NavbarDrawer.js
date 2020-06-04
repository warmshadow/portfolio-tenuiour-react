import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
	drawerPaper: {
		backgroundColor: 'rgba(254, 253, 250, 0.8)',
		height: '113px',
	}
}));

function NavbarDrawer(props) {
	const classes = useStyles();
	return(
		<Drawer
	    variant="persistent"
	    elevation={0}
	    transitionDuration={450}
	    anchor="top"
	    open={props.open}
	    classes={{ paper: classes.drawerPaper }}
	  >
	    <Box style={{height: '100%'}}>
	    	{props.children}
			</Box>
	  </Drawer>
	);
}

export default NavbarDrawer;
