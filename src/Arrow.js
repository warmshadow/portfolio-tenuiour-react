import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';

const useStyles = makeStyles((theme) => ({
	arrow: {
		color: '#828579',
		opacity: 0.8,
		fontSize: '1.3rem',
	}
}));

function Arrow({path, direction, handleClick}) {
	const classes = useStyles();
	return(
			<IconButton 
				component={RouterLink} 
				to={`/${path}`} 
				onClick={handleClick}
			> 
				<FontAwesomeIcon 
					icon={direction === 'left' ? faArrowAltCircleLeft : faArrowAltCircleRight } 
					className={classes.arrow} 
				/>
			</IconButton>
	);
}

export default Arrow;