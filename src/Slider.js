import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SliderContent from './SliderContent';
import images from './images';
import Arrow from './Arrow';

const useStyles = makeStyles((theme) => ({
	slider: {
		height: '100%',
	},
}));


function Slider() {

	const [state, setState] = useState ({
		activeIdx: 0,
	});
	const { activeIdx } = state;

	const nextSlide = () => {
    if (activeIdx === images.length - 1) {
      return setState({
        activeIdx: 0
      })
    }

    setState({
      activeIdx: activeIdx + 1,
    })
  }

  const prevSlide = () => {
    if (activeIdx === 0) {
      return setState({
        activeIdx: images.length - 1
      })
    }

    setState({
      activeIdx: activeIdx - 1,
    })
  }
	const classes = useStyles();
	return(
		<div className={classes.slider}>
			<SliderContent image={images[activeIdx].src} name={images[activeIdx].name} desc={images[activeIdx].desc}/>
			<Arrow direction="left" handleClick={prevSlide}/>
			<Arrow direction="right" handleClick={nextSlide}/>
		</div>
	);
}

export default Slider;