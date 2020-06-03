import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Arrow from './Arrow';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
	name: {
		fontSize: '1.1rem',
		color: '#173e43',
		fontWeight: 400,
		letterSpacing: 1.5,
	},
	content: {
		paddingTop: '1.5rem',
		[theme.breakpoints.up('lg')]: {
			paddingBottom: '3rem',
			minHeight: 'calc(100vh - 72px)',
		}
	},
	imgNotLast: {
		paddingBottom: '3rem',
		animation: '$FadeIn 0.5s ease-in-out',
	},
	imgLast: {
		paddingBottom: '0.5rem',
		animation: '$FadeIn 0.5s ease-in-out',
	},
	description: {
		color: 'darkgray',
	},
	'@keyframes FadeIn': {
		"0%": {
			opacity: 0.3
		},
		"100%": {
			opacity: 1
		}
	},
}));

function SliderContent(props) {
	const { src, name, description, portrait, path } = props;
	const classes = useStyles();
	return(
		<Box pb={6}>
			<Grid container justify="center">
				<Hidden xsDown>
				<Grid 
					item 
					container
					xs={1} 
					justify="flex-start" 
					alignItems="flex-start"
				>
					<Arrow path={path.prev} direction="left"/>
				</Grid>
				</Hidden>
				<Grid 
					item 
					container 
					xs={8}
					sm={10} 
					lg={8}
					justify="center" 
					alignItems="center"
				>
					<Typography 
						className={classes.name} 
						variant="h3" 
						align="center"
					>
						{name}
					</Typography>
				</Grid>
				<Hidden xsDown>
				<Grid 
					item 
					container 
					xs={1} 
					justify="flex-end" 
					alignItems="flex-start"
				>
					<Arrow path={path.next} direction="right"/>
				</Grid>
				</Hidden>
				<Grid 
					item 
					xs={12}
					lg={portrait ? 7 : 10}
					className={classes.content}
				>
					{src.map((src,i,sources) =>
					 	<CardMedia
					 		key={`${props.location.key}${i}`}
					 		className={(i === sources.length - 1) ? classes.imgLast : classes.imgNotLast}
					 		component="img"
					 		src={require(`${src}`)}
					 	/>
					)}
					<Typography 
						className={classes.description} 
						variant="subtitle1" 
						align="center"
					>
						{description}
					</Typography>
				</Grid>
			</Grid>
		</Box>
	);
}

export default SliderContent;