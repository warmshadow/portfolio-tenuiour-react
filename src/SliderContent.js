import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Arrow from './Arrow';

const useStyles = makeStyles((theme) => ({
	name: {
		fontSize: '1.1rem',
		color: '#173e43',
		fontWeight: 400,
		letterSpacing: 1.5,
	},
	content: {
		paddingTop: '1.5rem',
		paddingBottom: '3rem',
	},
	imgNotLast: {
		paddingBottom: '3rem',
	},
	imgLast: {
		paddingBottom: '0.5rem',
	},
	description: {
		fontSize: '0.875em',
		color: 'darkgray',
	},
}));

function SliderContent(props) {
	const { src, name, description, portrait, path } = props;
	const classes = useStyles();
	return(
		<Box pb={6} >
			<Grid container justify="center">
				<Grid item container xs={1} justify="flex-start" alignItems="flex-start">
					<Arrow path={path.prev} direction="left"/>
				</Grid>
				<Grid item container xs={10} justify="center" alignItems="center">
					<Typography className={classes.name} variant="h3" align="center">
						{name}
					</Typography>
				</Grid>
				<Grid item container xs={1} justify="flex-end" alignItems="flex-start">
					<Arrow path={path.next} direction="right"/>
				</Grid>
				<Grid item xs={portrait ? 7 : 10} className={classes.content}>
					{src.map((src,i,sources) =>
					 	<CardMedia
					 		key={i} 
					 		className={(i === sources.length - 1) ? classes.imgLast : classes.imgNotLast}
					 		component="img"
					 		src={require(`${src}`)}
					 	>
					 	</CardMedia>
					)}
					<Typography className={classes.description} variant="subtitle1" align="center">
						{description}
					</Typography>
				</Grid>
			</Grid>
		</Box>
	);
}

export default SliderContent;