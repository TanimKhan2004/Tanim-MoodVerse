import React from 'react';
import { Link } from 'react-router-dom';

const NextPageButton = () => (
  <Link to="/next" className="next-page-button">
    Go to Next Page
  </Link>
);

export default NextPageButton;
