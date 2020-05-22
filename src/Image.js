import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import images from './info/images';

const useStyles = makeStyles((theme) => ({
	image: {
		paddingBottom: '1rem',
		cursor: "pointer",
		transition: 'all 0.4s',
		'&:hover': {
			opacity: 0.8,
    },
	}
}));

function Image(props) {
	const { idx, handleClick } = props;
	const image = images[idx];

	const classes = useStyles();
	return(
		<CardMedia 
			component="img" 
			className={classes.image} 
			src={require(`${image.src[0]}`)}
			onClick={() => handleClick(image.route)}
		>
		</CardMedia>
	);
}

export default Image;
