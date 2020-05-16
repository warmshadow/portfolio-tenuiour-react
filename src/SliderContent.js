import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	sliderContent: {
		height: '100%',
		display: 'flex',
		width: '100vw',
		justifyContent: 'center',
		alignItems: 'center',
	},
	pic: {
		height: '100%',
		width: '90%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	img: {
		margin: 'auto',
		maxWidth: '75%',
		maxHeight: '90%',
		objectFit: 'contain',
		// boxShadow: '-4px 4px 6px grey',
	},
	desc: {
		width: 'calc(100vw - 70vw)',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		paddingRight: '5rem',
	},
	title: {
		fontSize: '1em',
		fontStyle: 'italic',
	},
	description: {
		fontSize: '0.875em',
		color: 'darkgray',
	},
}));


function SliderContent(props) {
	const classes = useStyles();
	return(
		<div className={classes.sliderContent}>
			<div className={classes.pic}>
				<img src={require(`${props.image}`)} className={classes.img}></img>
			</div>
			<div className={classes.desc}>
				<Typography className={classes.title} variant="h3" align="center" paragraph={true}>{props.name}</Typography>
				<Typography className={classes.description} variant="subtitle1" align="center">{props.desc}</Typography>
			</div>
		</div>
	);
}

export default SliderContent;