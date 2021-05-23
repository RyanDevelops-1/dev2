import React, { Fragment } from 'react';
import pageNotFound from './404_Error.jpg';

const NotFound = () => {
  return (
    <Fragment>
      <img src={pageNotFound} alt="Page not Found"
      ></img>
    </Fragment>
  );
};

export default NotFound;
