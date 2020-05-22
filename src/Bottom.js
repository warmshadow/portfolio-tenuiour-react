import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles((theme) => ({
	footer: {
		position: 'fixed',
		bottom: 0,
		width: '100%',
		backgroundColor: 'rgba(254, 253, 250, 0.8)',
		minHeight: '48px',
	},
	igButton: {
		paddingLeft: '24px',
		paddingRight: '72px',
		textTransform: 'none',
		'&:hover': {
			textDecoration: 'none',
		},
	},
}));

function Bottom() {
	const classes = useStyles();
	return(
		<Box component="footer" display="flex" className={classes.footer}>
			<Button 
				className={classes.igButton} 
				component={Link} 
				href="https://instagram.com/tenuiour"
			>
				<Box component="span" pr={0.5}>
					<FontAwesomeIcon icon={faInstagram} />
				</Box>
				tenuiour
			</Button>
		</Box>
	);
}

export default Bottom;