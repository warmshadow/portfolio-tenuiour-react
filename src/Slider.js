import React, { useEffect } from 'react';
import SliderContent from './SliderContent';
import { Redirect } from 'react-router-dom';
import images from './info/images';

function Slider(props) {
  const {images, idx} = props;
  const length = images.length;
  const prev = (idx === 0) ? images[length - 1].route : images[idx - 1].route;
  const next = (idx === length - 1) ? images[0].route : images[idx + 1].route;

  const onDown = event => {
    const matchesLeft = event.keyCode === 37; //arrowLeft
    const matchesRight = event.keyCode === 39; //arrowRight

    matchesLeft && props.history.push(`/${prev}`);
    matchesRight && props.history.push(`/${next}`);
  };
  // Bind and unbind events
  useEffect(() => {
      window.addEventListener("keydown", onDown);
      return () => {
        window.removeEventListener("keydown", onDown);
      }  
  });

  return(
      <SliderContent 
        src={images[idx].src}
        name={images[idx].name} 
        description={images[idx].desc} 
        portrait={images[idx].portrait} 
        path={{prev: prev, next: next}}
      />
 );
}

const shouldRender = idx => { return (idx === -1 ? false : true) }

export default (props) => {
  const route = props.match.params.route;
  const idx = images.findIndex(image => image.route === route);

  if(!shouldRender(idx)) return <Redirect to='/' />
  return <Slider images={images} idx={idx} history={props.history} />
}