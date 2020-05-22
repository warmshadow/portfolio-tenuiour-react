import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	about: {
		height: '100vh',
		marginBottom: '1px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	aboutText: {
		width: '30%',
	},
}));

function About(props) {
	const classes = useStyles();
	return(
		<Box className={classes.about} pt={9} pb={6}>
			<Box className={classes.aboutText}>
				<Typography variant="subtitle1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vestibulum dignissim hendrerit. Nullam laoreet enim quam, id maximus enim vehicula ac. Suspendisse nisl urna, condimentum eget dictum eu, ultricies non nisl. Etiam ex ex, consectetur quis bibendum eu, venenatis non leo. In ante massa, porta pretium elit id, cursus imperdiet orci. Curabitur sed elit ut augue eleifend lacinia vitae nec erat. Sed aliquam tellus quis ornare imperdiet. Phasellus suscipit sapien vel molestie tincidunt.</Typography>
			</Box>
		</Box>
	);
}

export default About;