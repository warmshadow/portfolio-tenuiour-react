import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	contact: {
		width: '100vw',
		height: '100vh',
		padding: 'calc(1.6 * 0.875rem + 13px) 0 calc(1.6 * 0.875rem + 13px)',
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	contactText: {
		width: '30%',
	}
}));

function Contact() {
	const classes = useStyles();
	return(
		<Box className={classes.contact}>
			<Box className={classes.contactText}>
				<Typography variant="subtitle1">Contact Contact Contact Contact</Typography>
			</Box>
		</Box>
	);
}

export default Contact;