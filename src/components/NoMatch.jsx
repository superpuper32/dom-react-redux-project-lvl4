import React from 'react';
import { useLocation } from 'react-router-dom';

export default function NoMatch() {
  const location = useLocation();

  return (
    <div>
      <h3>
        404 NOT FOUND
        No match for
        {' '}
        <code>{location.pathname}</code>
      </h3>
    </div>
  );
}
