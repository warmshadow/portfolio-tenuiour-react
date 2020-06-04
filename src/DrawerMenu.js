import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
	drawer: {
		height: '110px',
		borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
	}
}));

function DrawerMenu(props) {
	const classes = useStyles();
	return(
	    <Box 
	    	className={classes.drawer} 
	    	style={{visibility: props.visible ? 'visible' : 'hidden'}}
	    >
	    	{props.children}
			</Box>
	);
}

export default DrawerMenu;
