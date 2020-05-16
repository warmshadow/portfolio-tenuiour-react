import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
// import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	footer: {
		position: 'fixed',
		bottom: 0,
		width: '100vw',
		borderTop: '1px solid lightgray',
	},
	igButton: {
		paddingLeft: '24px',
		paddingRight: '72px',
		borderRight: '1px solid lightgray',
		'&:hover': {
			textDecoration: 'none',
		},
	},
}));

function Bottom() {
	const classes = useStyles();
	return(
		<Box component="footer" className={classes.footer}>
			<Button className={classes.igButton} component={Link} href="https://instagram.com">
				<Box component="span" pr={0.5}>
					<FontAwesomeIcon icon={faInstagram} />
				</Box>
				tenuiour
			</Button>
		</Box>
	);
}

export default Bottom;