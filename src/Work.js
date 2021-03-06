import React from 'react';
import { Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Slider from './Slider';
import Collection from './Collection';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function Work(props) {
	const lgDown = useMediaQuery('(max-width:1280px)');
	return(
			<Container component={Box} maxWidth="xl" px={lgDown ? 2 : 10} pt={9} pb={6}>
				<Route exact path="/:route" render={(props) => <Slider {...props}/>}/>
				<Collection history={props.history} />
			</Container>
	);
}

export default Work;