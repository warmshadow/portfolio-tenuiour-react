import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBehanceSquare, faInstagramSquare, faFacebookSquare} from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles((theme) => ({
	about: {
		height: '100vh',
		marginBottom: '1px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center'
	},
	aboutText: {
		paddingBottom: '3rem'
	},
	contactText: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	email: {
		textDecoration: 'none',
		fontStyle: 'italic',
		color: '#828579',
		transition: 'all 0.2s',
		'&:hover': {
			color: '#333330',
		}
	},
	links: {
		fontSize: '1.2em',
		paddingLeft: '0.5rem'
	},
	linkas: {
		paddingRight: '0.3rem',
		color: '#333330',
		transition: 'all 0.2s',
		'&:hover': {
			color: '#828579',
		}
	}
}));

function About(props) {
	const classes = useStyles();
	return(
		<Box className={classes.about}>
			<Box style={{width: '20%'}}>
				<CardMedia component="img" src={require('./avatar.png')}/>
				<Box className={classes.aboutText}>
					<Typography variant="subtitle1">A freelance illustrator, living and working in Vilnius, Lithuania.</Typography>
				</Box>
				<Box className={classes.contactText}>
					<Typography variant="subtitle1">Say hello at <a className={classes.email} href="mailto:agneduzinskyte@gmail.com">agneduzinskyte@gmail.com</a></Typography>
					<Typography variant="subtitle1">Find me at:
					<Box component="span" className={classes.links}>
						<Link className={classes.linkas} href="https://www.behance.net/tenuiour"><FontAwesomeIcon icon={faBehanceSquare} /></Link>
						<Link className={classes.linkas} href="https://instagram.com/tenuiour"><FontAwesomeIcon icon={faInstagramSquare} /></Link>
						<Link className={classes.linkas} href="https://www.facebook.com/agne.duzinskyte"><FontAwesomeIcon icon={faFacebookSquare} /></Link>
					</Box>
					</Typography>
				</Box>
			</Box>
		</Box>
	);
}

export default About;