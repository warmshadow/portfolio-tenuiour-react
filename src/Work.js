import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from './Slider';

const useStyles = makeStyles((theme) => ({
	work: {
		height: '100vh',
		padding: 'calc(1.6 * 0.875rem + 13px) 0 calc(1.6 * 0.875rem + 13px)',
	},
}));

function Work() {
	const classes = useStyles();
	return(
		<div className={classes.work}>
			<Slider />
		</div>
	);
}

export default Work;