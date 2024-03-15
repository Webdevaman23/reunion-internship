import React from 'react';
import moment from 'moment';

const CustomDateTimeRenderer = ({ value }) => {
  const formattedDateTime = moment(value).format('DD-MMM-YYYY HH:mm');
  return <span>{formattedDateTime}</span>;
};

export default CustomDateTimeRenderer;
