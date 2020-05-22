import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	contact: {
		height: '100vh',
		marginBottom: '1px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	contactText: {
		width: '30%',
	}
}));

function Contact() {
	const classes = useStyles();
	return(
		<Box className={classes.contact} pt={9} pb={6}>
			<Box className={classes.contactText}>
				<Typography variant="subtitle1">Contact Contact Contact Contact</Typography>
			</Box>
		</Box>
	);
}

export default Contact;