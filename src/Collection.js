import React from "react";
import Grid from "@material-ui/core/Grid";
import Image from "./Image";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function Collection(props) {
  const xsDown = useMediaQuery("(max-width:600px)");

  const handleClick = (route) => {
    props.history.push(`/${route}`);
  };
  return (
    <Grid container spacing={xsDown ? 0 : 2}>
      <Grid item xs={12} sm={4}>
        <Image idx={12} handleClick={handleClick} />
        <Image idx={0} handleClick={handleClick} />
        <Image idx={1} handleClick={handleClick} />
        <Image idx={2} handleClick={handleClick} />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Image idx={3} handleClick={handleClick} />
        <Image idx={4} handleClick={handleClick} />
        <Image idx={5} handleClick={handleClick} />
        <Image idx={6} handleClick={handleClick} />
        <Image idx={10} handleClick={handleClick} />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Image idx={11} handleClick={handleClick} />
        <Image idx={7} handleClick={handleClick} />
        <Image idx={8} handleClick={handleClick} />
        <Image idx={9} handleClick={handleClick} />
      </Grid>
    </Grid>
  );
}

export default Collection;
