import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  iframe: {
    width: '100%',
    minHeight: 500,
    border: 0
  }
}));

const Icons = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>

    <iframe
        className={classes.iframe}
        src="http://chrisnguyen.x10host.com/csu-dashboard/"
        title="CSU Dashboard"
      />
      <br/><br/><br/><br/>
     
      <iframe
        className={classes.iframe}
        src="https://www.yamaha.com/us/yvn/"
        title="Yamaha YVN"
      />
         <br/><br/><br/><br/>
      <iframe
        className={classes.iframe}
        src="https://usa.yamaha.com/news_events/namm/index.html"
        title="Yamaha NAMM"
      />

       <br/><br/><br/><br/>
      <iframe
        className={classes.iframe}
        src="http://mdrnmcha.com/"
        title="Modern Matcha"
      />

      <br/><br/><br/><br/>
      <iframe
        className={classes.iframe}
        src="http://staging1.rowdydesign.com/clients/boeing/flight-services-catalog/current/flight-services/"
        title="Boeing Training Catalog"
      />
       
      

    </div>
  );
};

export default Icons;
