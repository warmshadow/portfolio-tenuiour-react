import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	left: {
		position: 'fixed',
		top: '40%',
		left: '50px',
	},
	right: {
		position: 'fixed',
		top: '40%',
		right: '50px',
	},
}));

function Arrow({direction, handleClick}) {
	const classes = useStyles();
	return(
		<div>
			<Button className={classes[direction]} onClick={handleClick}>{direction}</Button>
		</div>
	);
}

export default Arrow;