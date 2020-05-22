import React from 'react';
import { Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Slider from './Slider';
import Collection from './Collection';

function Work(props) {
	return(
			<Box component={Container} px={5} pt={9} pb={6} >
				<Route exact path="/:route" render={(props) => <Slider {...props} />}/>
				<Collection history={props.history} />
			</Box>
	);
}

export default Work;